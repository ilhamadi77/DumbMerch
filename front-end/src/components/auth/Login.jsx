import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate()

    const dataAdmin = {
        username: 'ilham@gmail.com',
        password: 12345,
        role: 'admin'
    }

    localStorage.setItem('dataAdmin', JSON.stringify(dataAdmin))

    const dataLogin = JSON.parse(localStorage.getItem('dataAdmin'))

    console.log(dataLogin.username);

    const title = 'Login'
    document.title = "DumbMerch | " + title

    const [state, setValue] = useState({
        email: "",
        password: "",

    })

    const handleOnChange = (e) => {
        // setState here
        setValue({
            ...state,
            [e.target.name]: e.target.value
        })

        console.log(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (dataLogin.username === state.email) {
            navigate('/admin/complain')
        } else {
            navigate('/')
        }


        //print state value with console.log here
        console.log(state);
    }




    return (
        <div className="d-flex justify-content-center">
            <div className="card-auth p-4">
                <h1 className='text-white mb-3'>Login</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="mt-3 form">
                        <input
                            onChange={handleOnChange}
                            type="email"
                            value={state.email}
                            placeholder="Email"
                            name="email"
                            className="px-3 py-2 mt-3"
                            required
                        />
                        <input
                            onChange={handleOnChange}
                            type="password"
                            value={state.password}
                            placeholder="Password"
                            name="password"
                            className="px-3 py-2 mt-3"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <button className="btn btn-login">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
