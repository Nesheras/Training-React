import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../App/store/api/Slices/userSlices";
import { loginUser } from "../../App/store/api/Actions/UserActions";

export function SignIn() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    function handlerChangeMail(e) {
        setEmail(e.target.value);
        setErr("");
    }

    function handlerChangePass(e) {
        setPassword(e.target.value);
        setErr("");
    }

    const handlerLogin = async (email, password) => {
        await loginUser(email, password)
            .then(({ user }) =>
                dispatch(
                    setUser({
                        email: user.email,
                        uid: user.uid,
                    })
                )
            )
            .catch((error) => {
                switch (error) {
                    case "auth/invalid-credential":
                        setErr("Неверный email или пароль");
                        break;
                }
            });
    };
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
                {err ? <p>{err}</p> : null}
                <Link to="/signup">
                    <p>Нет аккаунта?</p>
                </Link>
            </Form.Item>
        </Form>
    );
}
