import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import S from "./S.module.css";
import { Link } from "react-router-dom";

export function SignInPage() {
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
                    className={S.label}
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
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
                        Войти
                    </Button>
                    <Link to="/signup">
                        <p>Нет аккаунта?</p>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}
