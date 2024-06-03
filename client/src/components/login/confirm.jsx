import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Confirm = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const confirmEmail = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/auth/confirm/${token}`);
                const { token: authToken } = response.data;

                // Armazene o token JWT no localStorage
                localStorage.setItem('token', authToken);

                // Redirecione para o dashboard
                navigate('/dashboard', { replace: true });
            } catch (error) {
                setMessage('Token de confirmação inválido ou expirou.');
                setLoading(false);
            }
        };

        confirmEmail();
    }, [token, navigate]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            {message ? (
                <div>{message}</div>
            ) : (
                <div>Seu e-mail foi confirmado com sucesso. Redirecionando para o dashboard...</div>
            )}
        </div>
    );
};

export default Confirm;
