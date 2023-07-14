import React, { useState } from 'react'
import useForm from './Hook/useForm';
import "./Bookingform.css";
import table from './/Assets/icons_assets/constantin-mutaf-SxrgpMXU4hs-unsplash.jpg';
const Bookingform = () => {
  const style={
    display: "grid",
     maxwidth: "200px",
      gap: "40px"
  }
  const style1={
    color : 'red',
   }
    const style2={
   color : '#F4CE14',
   textAlign: 'center',
   fontWeight: 'bold',
  }
  const[formerror,setFormerror]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);
  const {form,
    timeslot,
    Formvalid,
    changedateHandler,
    changetimeHandler,
    changeguestsHandler,
    changeoccasionHandler,
    submitHandler,}=useForm();

    function handleSubmit(e){
      const response = submitHandler(e);
      setFormerror(Validate(form));
      setIsSubmit(true);
      return response;
    }

    const Validate=(values)=>{
      const errors={};
      // const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.date){
        errors.date="Date is required";
      }
      if(!values.time){
        errors.time="Time is required";
      }
      if(!values.guests){
        errors.guests="Guests number is required";
      }else if(values.guests <= 1){
        errors.guests = "Guests must be more than one person";
    }
      if(!values.occasion){
        errors.occasion="occasion is required";
      }
      return errors;
    }
  return (
    <div className='Bookingpage'>
    <h1 className="form-head">Reserve Table</h1>
    <div className='Booking'>
    <img src={table} alt='table' className='imgtable'/>
      <form style={style} className='form' onSubmit={handleSubmit}>
      {Object.keys(formerror).length === 0 && isSubmit ? (<div style={style2}className="ui message success">Thank &nbsp; you &nbsp; for &nbsp; Reserving &nbsp; Table</div>
            ):''}
        <div className='field-input'> 
        <label for="res-date">Choose date</label><br/>
        <input type="date" id="res-date" value={form.date} onChange={changedateHandler}/>
        <p style={style1}>{formerror.date}</p>
        </div>
        <div className='field-input'>
        <label for="res-time">Choose time</label><br/>
        <select id="res-time " onChange={changetimeHandler} value={form.time}>
              {timeslot.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
              ))}
        </select>
        <p style={style1}>{formerror.time}</p>
        </div>
        <div className='field-input'>
        <label for="guests">Number of guests</label><br/>
        <input type="number" placeholder="1" min="1" max="10" id="guests" value={form.guests} onChange={changeguestsHandler}/>
        <p style={style1}>{formerror.guests}</p>
        </div>
        <div className='field-input'>
        <label for="occasion">Occasion</label><br/>
      <select id="occasion" value={form.occasion} onChange={changeoccasionHandler}>
        <option>None</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <p style={style1}>{formerror.occasion}</p>
      </select>
      </div>
      <div>
      <input disabled={!Formvalid}className='btn3' type="submit" value="Make Your reservation"/>
      </div>
      </form>
    </div>
    </div>
  )
}

export default Bookingform