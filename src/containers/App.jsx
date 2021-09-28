import React from 'react';
import ArticlesList from '@components/ArticlesList';
import Map from '@components/Map';
import SideBar from '@components/SideBar';
import useArticlesData from '@hooks/useArticlesData';
import { isMobile } from 'react-device-detect';

const initState = {
  sidebar: {
    isOpen: false,
    item: {},
  },
  seen: {}
}

const Actions = {
  SET_SIDEBAR: 'set_sidebar',
  SET_TOGGLE_SEEN: 'set_toggle_seen',
  SET_SEEN_ITEM: 'set_seen_item',
  SET_UNSEEN_ITEM: 'set_unseen_item',
}

function reducer(state, action) {
  switch(action.type) {
    case Actions.SET_SIDEBAR: {
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          ...action.payload,
        }
      }
    }
    case Actions.SET_TOGGLE_SEEN: {
      const toggle = !state.seen?.[action.payload] ?? true;
      return {
        ...state,
        seen: {
          ...state.seen,
          [action.payload]: toggle,
        }
      }
    }
    default:
      return state;
  }
}

const App = () => {
  const { isLoading, response } = useArticlesData();
  const [state, dispatch] = React.useReducer(reducer, initState);

  const handleZoomTo = (point) => {
    const sidebarPayload = isMobile ? { item: point, isOpen: true } : { item: point };
    dispatch({ type: Actions.SET_SIDEBAR, payload: sidebarPayload });
    dispatch({ type: Actions.SET_TOGGLE_SEEN, payload: point.id });
  }

  const openSideBar = (point) => {
    dispatch({ 
      type: Actions.SET_SIDEBAR, 
      payload: { 
        item: point,
        isOpen: !state.sidebar.isOpen
      },
    });
  }

  const closeSidebar = () => {
    dispatch({ type: Actions.SET_SIDEBAR, payload: { isOpen: false } });
  }

  const toggleSeen = (point) => {
    dispatch({ type: Actions.SET_TOGGLE_SEEN, payload: point.id });
  }

  return (
    <>
      <ArticlesList 
        articles={response}
        handleClick={handleZoomTo}
        seen={state.seen}
        toggleSeen={toggleSeen}
      />
      <div className="layout__sidebar">
        <Map points={response} zoomTo={state.sidebar.item} openSideBar={openSideBar} />
        <SideBar isOpen={state.sidebar.isOpen} article={state.sidebar.item} closeSidebar={closeSidebar} />
      </div>
    </>
  );
}

export default App;
