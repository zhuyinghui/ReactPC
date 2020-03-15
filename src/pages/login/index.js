import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import './index.scss'

function Login(props) {
  const onFinish = () => {
    props.history.push('/')
  };

  return (
      <div className="Login">
          <div>后台管理系统</div>
        <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        >
            <Form.Item name="username" rules={[{required: true,message: '请输入账号!'}]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
            </Form.Item>
            <Form.Item name="password" rules={[{required: true,message: '请输入密码!'}]}>
                <Input prefix={<LockOutlined className="site-form-item-icon" type="password"/>} placeholder="密码" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </Form.Item>
        </Form>
      </div>
  );
};
export default withRouter(Login)