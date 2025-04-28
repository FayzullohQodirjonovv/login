import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Loader } from "lucide-react";
import { toast } from "react-hot-toast";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = (values) => {
    console.log("Yuborilayotgan ma'lumotlar:", values);

    setLoading(true);

    axios({
      url: "api/auth/sign-up",
      method: "POST",
      data: values,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        toast.success(
          "✔️ Ro'yxatdan o'tish muvaffaqiyatli! Iltimos, emailingizga borgan parolni kiriting."
        );
        navigate("/sign-in"); // Kirish sahifasiga yo'naltirish
      })
      .catch((error) => {
        toast.error("❌ Bu email oldin ro'yxatdan o'tgan.");
        navigate("/sign-in"); // Tizimga kirish sahifasiga yo'naltirish
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-screen w-[400px] flex items-center justify-center m-auto flex-col gap-5">
      <div className="text-center">
        <h2>Ro'yxatdan o'ting</h2>
        <p>Biz yanada yaxshiroq bo'lishga intilamiz!</p>
      </div>
      <Form onFinish={register} className="w-full">
        <Form.Item
          name="first_name"
          rules={[{ required: true, message: "Iltimos ismingizni kiriting!" }]}
        >
          <Input placeholder="Ismingizni kiriting..." />
        </Form.Item>
        <Form.Item
          name="last_name"
          rules={[{ required: true, message: "Iltimos familiyangizni kiriting!" }]}
        >
          <Input placeholder="Familiyangizni kiriting..." />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Iltimos email manzilingizni kiriting!" }]}
        >
          <Input placeholder="Emailingizni kiriting..." />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Iltimos parolingizni kiriting!" }]}
        >
          <Input.Password placeholder="****************" />
        </Form.Item>
        <Button htmlType="submit" className="w-full" type="primary">
          {loading ? <Loader className="animate-spin" /> : "Ro'yxatdan o'tish"}
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
