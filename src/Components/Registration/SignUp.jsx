import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../App/store/api/Slices/userSlices";
import { registerUser } from "../../App/store/api/Actions/UserActions";

export function SignUp() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    function handlerChangeMail(e) {
        setEmail(e.target.value);
        setErr("");
    }
    function handlerChangePass(e) {
        setPassword(e.target.value);
        setErr("");
    }
    function handlerRegister(email, password) {
        registerUser(email, password)
            .then(({ user }) => {
                dispatch(
                    setUser({
                        email: user.email,
                        uid: user.uid,
                    })
                );
            })
            .catch((error) => {
                switch (error) {
                    case "auth/email-already-in-use":
                        setErr("Этот e-mail уже зарегистрирован!");
                        break;
                    case "auth/invalid-email":
                        setErr("Введите корректные данные");
                        break;
                }
            });
    }
    return (
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
                marginTop: 10,
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
                <Input
                    onChange={handlerChangeMail}
                    type="email"
                    value={email}
                    style={{ color: "white", background: "#504c44" }}
                />
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
                    onChange={handlerChangePass}
                    value={password}
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
                    onClick={() => handlerRegister(email, password)}
                    style={{ marginBottom: "10px" }}
                    type="primary"
                    htmlType="button"
                >
                    Зарегистрироваться
                </Button>
                {err ? <p>{err}</p> : null}
                <Link to="/signin">
                    <p>Уже есть аккаунт?Войдите</p>
                </Link>
            </Form.Item>
        </Form>
    );
}
