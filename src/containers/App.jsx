import React from 'react';
import useArticlesData from '@hooks/useArticlesData';

const App = () => {
  const { isLoading, isError, response } = useArticlesData();

  console.log({
    isLoading,
    isError,
    response,
  })

  return (
    <h1>Hello</h1>
  );
}

export default App;
