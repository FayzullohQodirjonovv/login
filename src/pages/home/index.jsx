import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { toast } from 'react-hot-toast';

const Home = () => {
  const axios = useAxios();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios({
      url: 'api/auth/user-info', // foydalanuvchi ma'lumotlari
      method: 'GET',
    })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Foydalanuvchi ma'lumotlari olinmadi!");
      });
  }, []);

  return (
    <div className="h-screen w-[400px] flex justify-center items-center m-auto flex-col gap-5">
      <div className="text-center">
        <h1>Home</h1>
        <p>Foydalanuvchi ma'lumotlari:</p>
        {userData ? (
          <div>
            <p><strong>Ism:</strong> {userData.first_name} {userData.last_name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </div>
        ) : (
          <p>Yuklanmoqda...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
