import React, { useState } from "react";
import { Button, Form, Input } from "antd";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useAuth } from "../../App/store/api/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { setUser } from "../../App/store/api/Slices/userSlices";

export function SignInPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isAuth } = useAuth();

    function handlerChangeMail(e) {
        setEmail(e.target.value);
    }
    function handlerChangePass(e) {
        setPassword(e.target.value);
    }
    function handlerLogin(email, password) {
        signInWithEmailAndPassword(auth, email, password).then(({ user }) =>
            dispatch(
                setUser({
                    email: user.email,
                    uid: user.uid,
                })
            )
        );
    }

    return isAuth ? (
        <Navigate to="/" />
    ) : (
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
                        type="email"
                        value={email}
                        onChange={handlerChangeMail}
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
                        value={password}
                        onChange={handlerChangePass}
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
                        onClick={() => handlerLogin(email, password)}
                        style={{ marginBottom: "10px" }}
                        type="primary"
                        htmlType="submit"
                    >
                        Войти
                    </Button>
                    <p></p>
                    <Link to="/signup">
                        <p>Нет аккаунта?</p>
                    </Link>
                </Form.Item>
            </Form>
        </div>
    );
}
