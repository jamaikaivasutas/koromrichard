import { useState } from "react";
import { Button } from "react-bootstrap";
import type { User } from "../types/User";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState<User>({ username: "", password: "" });
  const navigate = useNavigate();

  const submit = () => {
    apiClient
      .post("/login", user)
      .then((res) => {
        localStorage.setItem("credentials", JSON.stringify(user));
        toast.success("Sikeres bejelentkezés");
        navigate("/");
      })
      .catch((result) => toast.error(result));
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <br />
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <Button variant="primary" onClick={submit}>
        Bejelentkezés
      </Button>
    </>
  );
};

export default Login;
