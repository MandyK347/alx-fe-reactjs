// src/cpmponents/FormikForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is requred'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted successfully!', values);
        },
    });

    return (
        <form onSubmit={formik.handlesubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? <p>{formik.errors.username}</p> : null}
            </div>

            <div>
            <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.username && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <div>
            <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.username && formik.errors.password ? <p>{formik.errors.password}</p> : null}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default FormikForm;