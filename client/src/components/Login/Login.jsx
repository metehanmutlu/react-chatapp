import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
// import { useState } from 'react'
import shortid from 'shortid';
import { useFormik } from "formik";
import validationSchema from './valdations';


function Login() {
    const { setUser } = useUser();

    let navigate = useNavigate();

    const form = useFormik({
        initialValues: {
            userName: '',
            // password: ''
        },
        onSubmit: values => {
            handleOnSubmit(values);
        },
        validationSchema
    });

    function handleOnSubmit(values) {
        const data = {
            id: shortid.generate(),
            userName: values.userName
        }
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data)
        navigate('/chat')
    }

    return (
        <div>
            <form onSubmit={form.handleSubmit}>
                <input
                    type="text"
                    name='userName'
                    value={form.values.userName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder='Kullanıcı Adı...'
                    className='loginInput'
                />
                {/* {form.errors.email && form.touched.email && <div style={{ color: 'tomato' }}>{form.errors.email}</div>} */}
                <br />
                {/* <input
                    type="password"
                    name='password'
                    value={form.values.password}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder='Password'
                /> */}
                {/* {form.errors.password && form.touched.password && <div style={{ color: 'tomato' }}>{form.errors.password}</div>} */}
                <br />
                <button className='loginBtn' type="submit">Giriş Yap</button>
                <br />
                {/* <code>{JSON.stringify(form.values)}</code> */}
                <br />
                {/* <button onClick={() => navigate('/register')}>Kayıt Ol</button> */}
            </form>
        </div>
    )
}

export default Login