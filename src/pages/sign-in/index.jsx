import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react"; // useState qo‘shildi
import { toast } from "react-hot-toast";
import { useAxios } from "../../hooks/useAxios";
import { Loader } from "lucide-react"; // Agar Loader ikonkasi kerak bo‘lsa (agar yo‘q bo‘lsa, bu importni olib tashlash kerak)

const SignIn = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // loading state yaratildi

  const login = (values) => {
    setLoading(true); // Login boshlanganda loading true
    axios({
      url: "api/auth/sign-in",
      method: "POST",
      data: values,
      withAuth: false,
    })
      .then(({ data: { token } }) => {
        localStorage.setItem("token", token);
        toast.success("Muvaffaqiyatli kirdingiz!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message || "Kirishda xatolik yuz berdi!"
        );
        console.error("Xatolik:", error);
      })
      .finally(() => {
        setLoading(false); // Yakunida loading false
      });
  };

  return (
    <div className="h-screen w-[400px] flex justify-center items-center m-auto flex-col gap-5">
      <div className="text-center">
        <h1>Hayrli kun</h1>
        <p>Biz yanada yaxshiroq bo‘lamiz</p>
      </div>
      <Form onFinish={login} className="w-full">
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Iltimos emailni to‘ldiring!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Iltimos parolni to‘ldiring!" }]}
        >
          <Input.Password placeholder="Parol" />
        </Form.Item>
        <Link to="/sign-up" className="title">
          Ro‘yxatdan o‘tmaganmisiz?
        </Link>
        <Button htmlType="submit" className="w-full" type="primary" disabled={loading}>
          {loading ? <Loader className="animate-spin" size={20} /> : "Kirish"}
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
