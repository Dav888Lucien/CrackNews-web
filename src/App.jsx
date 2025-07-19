import { Button } from '@/shadcn/ui/button.jsx';
import { useEffect, useState } from 'react';
import NewsCard from './components/NewsCard';
import newsData from './fakeData/newsData';
import api from '@/utils/axios.js';

function App() {
  const [currentNews, setCurrentNews] = useState(null);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await api.get('/users');
      setUsers(result.data);
      setCurrentNews(newsData[0]);
    };
    fetchUsers();
  }, []);

  const handleClick = async () => {
    await api.post('/users', {
      name: 'new user',
      id: Date.now(),
    });
  };
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        {currentNews ? (
          <NewsCard news={currentNews} />
        ) : (
          <p className="text-center mt-10">Loading...</p>
        )}
      </div>

      {/* <p className="text-blue-600">{JSON.stringify(users)}</p>
      <Button onClick={handleClick} className="bg-gray-400">
        add new user
      </Button> */}
    </>
  );
}

export default App;
