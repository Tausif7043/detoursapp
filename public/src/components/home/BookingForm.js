import React from 'react'
import {useFormik} from 'formik'
import {bookingSchema} from "../../schemas"
import '../../App.css'
const initialValues ={
    destination:"",
    date:"",
    no_of_passenger:"",
    from:"",
    to:"",
    inlineCheckbox:"",
    inlineCheckbox5:"",
    inlineRadio:""
}
function BookingForm() {

 const {values,errors,touched,handleBlur,handleChange,handleSubmit}=  useFormik({
        initialValues : initialValues,
        validationSchema:bookingSchema,
        onSubmit:(value,action)=>{
            console.log('submit value',value);
            action.resetForm()
        }
     })

  return (  
  <div className='form_Container'>
  <section className='booking_Part text-light' >
<form onSubmit={handleSubmit}>
  <div className='check_Box'>
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox1" value={values.inlineCheckbox} onChange={handleChange} onBlur={handleBlur}/>
  <label className="form-check-label" htmlFor="inlineCheckbox1">Hotel</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox2" value={values.inlineCheckbox} onChange={handleChange} onBlur={handleBlur}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Car</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox3" value={values.inlineCheckbox} onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineCheckbox3">Food</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name="inlineCheckbox" id="inlineCheckbox4" value={values.date} onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineCheckbox4">SightSeeing</label>
</div>
<p className='errors'>{errors.inlineCheckbox}</p>
<div className='input_Type '>
<div className="mb-3">
  <label htmlFor="destination" className="form-label">Destination</label>
  <input   type="text" className={"form-control"} style={errors.destination && touched.destination ? {border:"2px solid red"}:{}} name='destination' id="destination" value={values.destination} onChange={handleChange} onBlur={handleBlur} />
  <p className='errors' >{errors.destination} </p>
</div>
<div className='row'>
<div className="mb-3 col-7 ">
  <label htmlFor="date" className="form-label">Check-in / Check-Out Dates</label>
  <input type="date" className="form-control " name='date' id="date" value={values.date} onChange={handleChange} onBlur={handleBlur} />
<p className='errors'>{errors.date}</p>
</div>
<div className="mb-3 col-5">
  <label htmlFor="no_of_passenger" className="form-label" >No. of Passenger</label>
  <input type="number" className="form-control" style={errors.no_of_passenger && touched.no_of_passenger ? {border:"2px solid red"}:{}} name='no_of_passenger' id="no_of_passenger" value={values.no_of_passenger} onChange={handleChange} onBlur={handleBlur}/>
  <p className='errors'>{errors.no_of_passenger}</p>
</div>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="checkbox" name='inlineCheckbox5' id="inlineCheckbox5"  value={values.inlineCheckbox5} onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineCheckbox5">Travel Tickets</label>
</div>
<p className='errors'>{errors.inlineCheckbox5}</p>
<div className='row'>
<div className="mb-3 col-6">
  <label htmlFor="from" className="form-label">From</label>
  <input type="text" className="form-control" style={errors.from && touched.from ? {border:"2px solid red"}:{}} name='from' id="from" placeholder='Destination' value={values.from} onChange={handleChange} onBlur={handleBlur} />
<p className='errors'>{errors.from}</p>
</div>
<div className="mb-3 col-6">
  <label htmlFor="to" className="form-label">To</label>
  <input type="text" className="form-control" style={errors.to && touched.to ? {border:"2px solid red"}:{}} name='to' id="to" placeholder='Destination' value={values.to} onChange={handleChange} onBlur={handleBlur}/>
<p className='errors'>{errors.to}</p>
</div>
</div>
</div>

<div className='check_Radio'>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadio" id="inlineRadio" value={values.inlineRadio} onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineRadio">Bus</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadio1" id="inlineRadio1" value={values.inlineRadio} onChange={handleChange} onBlur={handleBlur} />
  <label className="form-check-label" htmlFor="inlineRadio1">Train</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadio2" id="inlineRadio2" value={values.inlineRadio} onChange={handleChange} onBlur={handleBlur}/>
  <label className="form-check-label" htmlFor="inlineRadio2" >Flight</label>
</div>
<p className='errors'>{errors.inlineRadio}</p>
</div>
<div className="form_btn my-3">    
<button  className="btn_1 button1" type='submit'>Get Quotes</button>

</div>
</div>
</form>
    </section>
    </div>
  )
}

export default BookingForm
