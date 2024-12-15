// src/cpmponents/FormikForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    return (
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          })}
          onSubmit={(values) => {
            console.log('Form submitted successfully!', values);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <div>
                <label htmlFor="username">Username:</label>
                <Field
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter username"
                />
                <ErrorMessage name="username" component="p" className="error" />
              </div>
    
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <ErrorMessage name="email" component="p" className="error" />
              </div>
    
              <div>
                <label htmlFor="password">Password:</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
                <ErrorMessage name="password" component="p" className="error" />
              </div>
    
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>
    );
};
  

export default FormikForm;