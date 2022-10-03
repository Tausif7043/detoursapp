import * as  Yup from 'yup'
import en from '../localization/en'
export const bookingSchema = Yup.object({
    destination:Yup.string().min(2).max(25).required("Please enter your destination"),
    // date:Yup.string().min(8).max(8).required("Please enter Date"),
    no_of_passenger:Yup.number().min(1).required("Enter no. of passenger"),
    from:Yup.string().min(4).max(25).required("Please enter your destination"),
    to:Yup.string().min(4).max(25).required("Please enter your destination"),
    inlineCheckbox:Yup.boolean().oneOf([true],"please check the box").required("Please check the box"),
    inlineCheckbox5:Yup.boolean().oneOf([true],"Please accept travel ticket").required("Please accept travel ticket "),
    inlineRadio:Yup.string().required("Please select transport mode"),
    email: Yup.string().email('Invalid email').required('Required'),
    lpassword: Yup
    .string().min(8).required("required"),
    name:Yup.string().min(2).max(25).required("Required"),
    Remail: Yup.string().email(en.emailValidation).required('Required'),
    phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
    Password: Yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol').required('Required'),
    // confirmPassword: Yup
    // .string()
    // .oneOf([Yup.ref('pass'), null], 'Must match "password" field value').required('Required'),
    condition:Yup.boolean().oneOf([true],"Please accept terms & condition ").required("Please accept terms & condition "),

})