import React from 'react'


export default function Register() {
    const title = "Register";
    document.title = "DumbMerch | " + title;


    // const handleChange = (e) => {
    //       [e.target.name]: e.target.value,
    //   };
    return (
        <div className="d-flex justify-content-center">
            <div className="card-auth p-4">
                <h1 className="text-white mb-2" >Register</h1>
                <form >
                    <div className="mt-3 form">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="px-3 py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="px-3 py-2 mt-3"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="px-3 py-2 mt-3"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <button type="submit" className="btn btn-login">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
