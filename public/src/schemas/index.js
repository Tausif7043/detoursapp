import * as  Yup from 'yup'
export const bookingSchema = Yup.object({
    destination:Yup.string().min(2).max(25).required("Please enter your destination"),
    // date:Yup.string().min(8).max(8).required("Please enter Date"),
    no_of_passenger:Yup.number().min(1).required("Enter no. of passenger"),
    from:Yup.string().min(4).max(25).required("Please enter your destination"),
    to:Yup.string().min(4).max(25).required("Please enter your destination")
    
})