import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setwhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUF] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Your access ID: ${response.data.id}`);

            history.push('/');
        }   catch (err) {
            alert ('Error in the registry, please try again.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt ="Be The Hero"/>

                    <h1>Registration</h1>
                    <p>Register your ONG on the platform and tell people how can they help solve your cases.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                            Already registered
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="ONG Name"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                    <input type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}  
                    />
                    <input 
                        placeholder ="WhatsApp"
                        value={whatsapp}
                        onChange={e => setwhatsapp(e.target.value)} 
                    />

                    <div className="input-group">
                        <input  
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}  
                    />
                        <input placeholder="UF" 
                        style={{ width: 80}}
                        value={uf}
                        onChange={e => setUF(e.target.value)} 
                    />
                    </div>

                    <button className="button" type="submit" >Register</button>
                </form>
            </div>
        </div>
    )
}