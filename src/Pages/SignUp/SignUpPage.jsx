import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuth } from "../../App/store/api/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { setUser } from "../../App/store/api/Slices/userSlices";

export default function SignUpPage() {
    const { isAuth } = useAuth();
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
    }
    function handlerChangePass(e) {
        setPassword(e.target.value);
    }
    function handlerRegister(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(
                    setUser({
                        email: user.email,
                        uid: user.uid,
                    })
                );
            })
            .catch((error) => {
                setErr(error.message);
            });
    }

    return isAuth ? (
        <Navigate to="/" />
    ) : (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "150px",
                background: "#504c44",
                width: "400px",
                marginLeft: "33%",
                height: "300px",
                borderRadius: "30px",
            }}
        >
            {" "}
            <h2 style={{ fontSize: "30px", marginTop: "20px" }}>Регистрация</h2>
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
        </div>
    );
}
