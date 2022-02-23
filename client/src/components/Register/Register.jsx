import React from 'react'
import { useFormik } from "formik";
import validationSchema from './valdations';
// import { useNavigate } from 'react-router-dom';


function Register() {
    // let navigate = useNavigate();

    const form = useFormik({
        initialValues: {
            userName: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema
    });

    return (
        <form onSubmit={form.handleSubmit}>
            <input
                type="text"
                name='userName'
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder='User Name'
            />
            {form.errors.email && form.touched.email && <div style={{ color: 'tomato' }}>{form.errors.email}</div>}
            <br />
            <input
                type="password"
                name='password'
                value={form.values.password}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder='Password'
            />
            {form.errors.password && form.touched.password && <div style={{ color: 'tomato' }}>{form.errors.password}</div>}
            <br />
            <input
                type="password"
                name='passwordConfirm'
                value={form.values.passwordConfirm}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder='Password Confirm'
            />
            {form.errors.passwordConfirm && form.touched.passwordConfirm && <div style={{ color: 'tomato' }}>{form.errors.passwordConfirm}</div>}
            <br />
            <button type="submit">Kayıt Ol</button>
            <br />
            {/* <code>{JSON.stringify(form.values)}</code> */}
        </form>
    )
}

export default Register;