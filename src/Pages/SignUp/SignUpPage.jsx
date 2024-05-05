import React from "react";
import { Button, Form, Input } from "antd";

import { Link } from "react-router-dom";

export function SignUpPage() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "150px",
                background: "#504c44",
                width: "400px",
                marginLeft: "33%",
                height: "300px",
                borderRadius: "30px",
            }}
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    marginTop: 50,
                    marginRight: 80,
                    color: "white",
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email!",
                        },
                    ]}
                >
                    <Input style={{ color: "white", background: "#504c44" }} />
                </Form.Item>

                <Form.Item
                    style={{ colorTextLabel: "white" }}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password
                        style={{ color: "white", background: "#504c44" }}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button
                        style={{ marginBottom: "10px" }}
                        type="primary"
                        htmlType="submit"
                    >
                        Зарегистрироваться
                    </Button>
                    <Link to="/signin">
                        <p>Уже есть аккаунт?Войдите</p>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}
