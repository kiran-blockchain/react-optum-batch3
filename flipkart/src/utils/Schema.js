import * as Yup from 'yup';
export const ValidateLoginSchema = () => {
    return Yup.object().shape({
        email: Yup.string()
            .email('Enter a valid email format')
            .required('Email is required'),
        firstName: Yup.string()
            .required('FirstName is required')
            .min(3, 'Minimum length should be at least 3 characters')
            .matches(/^[A-Za-z]+$/, 'First name should contain only alphabets'),
        lastName: Yup.string()
            .required('LastName is required')
            .min(1, 'Minimum length should be at least 1 characters')
            .matches(/^[A-Za-z]+$/, 'Last name should contain only alphabets'),
        
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password cannot exceed 40 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .min(6, 'Confirm Password must be at least 6 characters')
            .max(40, 'Confirm Password cannot exceed 40 characters')
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'),null],'Confirm password does not match'),
            country: Yup.string()
           
            .required('Please Select Country')
           
    })
}