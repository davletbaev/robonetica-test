import * as Yup from 'yup';

export const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long!')
    .required('Name is required'),
  age: Yup.number()
    .min(0, 'Age can\'t be negative number!')
    .max(100, 'Too Old!')
    .required('Age is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone is required'),
  propose: Yup.string()
    .required('Please write your propose')
});
