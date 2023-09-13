import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { services } from '../services';
import { AuthContext } from '../Providers/AuthProvider';

export const Login = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const authContext = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      username: 'kminchelle',
      password: '0lelplR',
      
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      services.postApi('https://dummyjson.com/auth/login',values)
      .then(result=>{
        console.log(result);
        authContext.handleLogin(result);
      }).catch(ex=>{
        console.log(ex);
      });
    },
  });
  return (
    <form className="container mt-5" onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">User Name</label>
      <input
        id="username"
        name="username"
        type="text"
        className='form-control'
        onChange={formik.handleChange}
        value={formik.values.username}
      />

      <label htmlFor="lastName">Password</label>
      <input
        id="password"
        name="password"
        className='form-control'
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

    
    <br></br>
      <button class="btn btn-success" type="submit">Submit</button>
    </form>
  );
};
