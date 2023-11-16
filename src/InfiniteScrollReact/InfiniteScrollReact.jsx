import React, { useState, useRef, useCallback } from 'react';
import getMockData from './useGetData';

function InfiniteScrollReact() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { books, isLoading, hasMore, error } = getMockData(query, pageNumber);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );
  return (
    <>
      <input type="text" onChange={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {books.map((book, index) => {
        if (books.length === index + 1)
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        return <div key={book}>{book}</div>;
      })}
    </>
  );
}

export default InfiniteScrollReact;
