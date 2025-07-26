import { Button } from '@/shadcn/ui/button.jsx';
import { useEffect, useState } from 'react';
import api from '@/utils/axios.js';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await api.get('/users');
      setUsers(result.data);
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
      <p className="text-blue-600">{JSON.stringify(users)}</p>
      <Button onClick={handleClick} className="bg-gray-400">
        add new user
      </Button>
    </>
  );
}

export default App;
