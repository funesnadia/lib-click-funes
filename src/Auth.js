import React, { useState } from "react";
import { useAuth } from "./context/UserContext";
import { Container } from "@mui/material";

const Auth = (props) => {
    const {errorSession, submit, login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addMail = (email) => {
        setEmail(email)
    }
    const addPassword = (password) => {
        setPassword(password)
    }

    const createCount = () => {
        submit(email, password)
    }

    const newSession = () => {
        login(email, password)
    }
    return (
        <div>
            {
                <Container>
                    <div>
                        <div >
                            <h2 className="title">Complete el formulario</h2>
                        </div>
                        <div className="wrapper">
                            <div className="elem-group">
                                <label>Correo Electrónico: </label>
                            </div>
                            <div className="elem-group">
                                <input type="email" placeholder="mail@email.com" required
                                    onChange={(e) => addMail(e.target.value)} />
                            </div>
                            <div className="elem-group">
                                <label >Password: </label>
                            </div>
                            <div className="elem-group">
                                <input type="password" placeholder="password"
                                    required onChange={(e) => addPassword(e.target.value)} />
                            </div>
                            <button className="form-btn" onClick={createCount}>Crear Cuenta</button>
                            <button className="form-btn" onClick={newSession}>Iniciar Sesión</button>
                        </div>
                    </div>
                </Container>
            }
            {
                errorSession &&
                <p>ERROR: {errorSession}</p>
            }
        </div>
    )
}

export default Auth