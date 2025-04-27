import { Form, Input , Button  } from 'antd'
import React from 'react'
import { useAxios } from '../../hooks/useAxios'
import { Link } from 'react-router-dom';
const signIn = () => {
const axios = useAxios();
const login = (e)=>{
axios({ url: "api/auth/sign-in", method: "POST", body: e })
  .then((data) => console.log(data.data));
}
    return (
    <div className='h-screen w-[400px] flex justify-center items-center m-auto  flex-col gap-5'>
        <div className='text-center'>
            <h1>hayrli kun</h1>
            <p>biz yanada yahsuroq miz</p>
        </div>
        <Form onFinish={login} className='w-full'>
            <Form.Item name="email" rules={[{required:true, message: "iltimos emailni toldiring !"}]}>
                <Input placeholder='email'/>
            </Form.Item>
            <Form.Item name="Password"  rules={[{required:true, message: "iltimos emailni toldiring !"}]}>
                <Input.Password placeholder='password'/>
            </Form.Item>
            <Link to={"/sign-up"} className='title'>royhatdan otmaganmisiz</Link>
            <Button type="primary" htmlType="submit" className="w-full h-[35px]">kirish</Button>
        </Form>
    </div>
  )
}

export default signIn