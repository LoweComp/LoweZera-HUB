import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import WelcomeSection from '../components/WelcomeSection';
import ReleasesSection from '../components/ReleasesSection';
import NewsSection from '../components/NewsSection';

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsResponse = await axios.get('http://localhost:5000/api/news', {
          params: { query: 'música' }
        });
        setNews(newsResponse.data.slice(0, 6));

        const releasesResponse = await axios.get('http://localhost:5000/api/spotify/releases');
        if (releasesResponse.data && releasesResponse.data.items) {
          setReleases(releasesResponse.data.items);
        } else {
          setReleases([]); 
        }

        setLoading(false);
      } catch (err) {
        setError('Não foi possível carregar o conteúdo. Tente novamente mais tarde.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <WelcomeSection />
      <ReleasesSection releases={releases} loading={loading} error={error} />
      <NewsSection news={news} loading={loading} error={error} />
    </Box>
  );
};

export default HomePage;