import { useEffect, useState } from 'react';
import axios from 'axios';

function getMockData(query, pageNumber) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setIsLoading(true);
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const response = await axios.get('http://openlibrary.org/search.json', {
          params: { q: query, page: pageNumber },
          cancelToken: source.token,
        });

        setBooks((prevBooks) => [
          ...new Set([...prevBooks, ...response.data.docs.map((b) => b.title)]),
        ]);
        setHasMore(response.data.docs.length > 0);
      } catch (err) {
        if (axios.isCancel(err))
          // eslint-disable-next-line no-console
          console.log('axios request canceled', err.message);
        else setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      source.cancel(
        'Axios request canceled due to component unmount or url change',
      );
    };
  }, [query, pageNumber]);

  return { books, isLoading, hasMore, error };
}

export default getMockData;
