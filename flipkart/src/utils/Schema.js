import * as Yup from 'yup';
export const ValidateLoginSchema = () => {
    return Yup.object().shape({
        email: Yup.string()
            .email('Enter a valid email format')
            .required('Email is required'),
        password:Yup.string()
        .min(6,'Password must be at least 6 characters')
        .max(40,'Password cannot exceed 40 characters')
        .required('Password is required')

    })
}