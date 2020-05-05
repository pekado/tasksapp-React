import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {
    //state for login
    const [user, setUser] = useState({
        name: '',
        email:'',
        password:'',
        confirm: ''

    })

    //defracting
    const { email, password, name, confirm } = user;
    const onChange = (event) => {
        setUser({
            ...user, 
            [event.target.name] : event.target.value
        })
    }
    //submit del login
    const onSubmit = event => {
        event.preventDefault();
        //validar que no haya campos vacios

        //pass de min 6 caracteres

        //dos paswords iguales

        //pasar al action

    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign up</h1>
                <form
                onSubmit={onSubmit}>
                  <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">E-mail</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your e-mail"
                        value={email}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Confirm Password</label>
                        <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        placeholder="Confirm your Password"
                        value={confirm}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Register"/>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Back to login
                </Link>
            </div>
        </div>
     );
}
 
export default NewAccount;