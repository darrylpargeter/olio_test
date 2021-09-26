import React from 'react';
import ArticlesList from '@components/ArticlesList';
import Map from '@components/Map';
import useArticlesData from '@hooks/useArticlesData';

const App = () => {
  const { isLoading, isError, response } = useArticlesData();

  console.log({
    isLoading,
    isError,
    response,
  })

  return (
    <>
      <ArticlesList articles={response} />
      <Map />
    </>
  );
}

export default App;
