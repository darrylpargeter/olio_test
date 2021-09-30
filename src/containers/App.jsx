import React from 'react';
import ArticlesList from '@components/ArticlesList';
import Map from '@components/Map';
import SideBar from '@components/SideBar';
import Loader from '@components/Loader';
import useArticlesData from '@hooks/useArticlesData';

const initState = {
  sidebar: {
    isOpen: false,
    item: {},
  },
  seen: {},
  hoveredItem: {},
}

const Actions = {
  SET_SIDEBAR: 'set_sidebar',
  SET_TOGGLE_SEEN: 'set_toggle_seen',
  SET_SEEN_ITEM: 'set_seen_item',
  SET_UNSEEN_ITEM: 'set_unseen_item',
  SET_HOVER_ITEM: 'set_hover_item',
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
    case Actions.SET_SEEN_ITEM: {
      return {
        ...state,
        seen: {
          ...state.seen,
          [action.payload]: true,
        }
      }
    }
    case Actions.SET_HOVER_ITEM: {
      return {
        ...state,
        hoveredItem: action.payload,
      }
    }
    default:
      return state;
  }
}

const App = () => {
  const { isLoading, response } = useArticlesData();
  const [state, dispatch] = React.useReducer(reducer, initState);

  const openSideBar = (point) => {
    dispatch({ type: Actions.SET_SEEN_ITEM, payload: point.id });
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

  const handleMouseOver = (point) => {
    dispatch({ type: Actions.SET_HOVER_ITEM, payload: point });
  };

  const articleProps = {
    handleClick: openSideBar,
    seen: state.seen,
    toggleSeen: toggleSeen,
    handleMouseOver: handleMouseOver
  } 

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="layout">
        <ArticlesList articles={response} articleProps={articleProps} />
        <div className="layout__sidebar">
          <Map points={response} zoomTo={state.sidebar.item} hoveredItem={state.hoveredItem} openSideBar={openSideBar} />
          <SideBar isOpen={state.sidebar.isOpen} article={state.sidebar.item} closeSidebar={closeSidebar} />
        </div>
      </div>
    </>
  );
}

export default App;
