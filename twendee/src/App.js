import React, { useEffect, useState } from "react";
import Users from './components/users';
import Pagination from './components/Pagination';
import axios from 'axios';
import { USER_PER_PAGE } from "./utils/constants";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://randomuser.me/api/?page=1&results=100');
      setLoading(false);
      setUsers(res.data.results);

      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);

  const handleClick = num => {
    setPage(num);
  }

  return (
    <div>
      <h1>Bảng quản lý nhân sự</h1>
      <p>Page {page}</p>
      { loading ? <p>Loading...</p> : <>
        <div className="grid-user">
            <Users users={users} page={page} />
        </div>
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </> }
    </div>
  );
}

export default App;