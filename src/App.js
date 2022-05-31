import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, [])
  return (
    <div>
      <div>
        {
          Array.isArray(users) && users.map((user, index) => (
            <p key={index}> {user.name} </p>
          ))
        }
      </div>
      export default Bug;
    </div>
  );
}

export default App;
