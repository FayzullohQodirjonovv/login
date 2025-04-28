import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useAxios } from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const VerifyPassword = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyPassword = (values) => {
    setLoading(true);
    axios({
      url: 'api/auth/verify-password',
      method: 'POST',
      data: values,
    })
      .then((res) => {
        toast.success("Parol tasdiqlash muvaffaqiyatli!");
        navigate('/home'); 
      })
      .catch((err) => {
        console.error(err);
        toast.error("Tasdiqlash kodi noto'g'ri!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="h-screen w-[400px] flex justify-center items-center m-auto flex-col gap-5">
      <div className="text-center">
        <h1>Parolni tasdiqlang</h1>
        <p>Emailga yuborilgan tasdiqlash kodini kiriting.</p>
      </div>
      <Form onFinish={verifyPassword} className="w-full">
        <Form.Item name="verification_code" rules={[{ required: true, message: "Tasdiqlash kodini kiriting!" }]}>
          <Input placeholder="Tasdiqlash kodi" />
        </Form.Item>

        <Button htmlType="submit" className="w-full" type="primary" disabled={loading}>
          {loading ? "Yuklanmoqda..." : "Tasdiqlash"}
        </Button>
      </Form>
    </div>
  );
};

export default VerifyPassword;
