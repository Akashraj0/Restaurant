import { useEffect, useReducer, useState } from 'react'
import {fetchAPI,submitAPI} from "../Utility/apiMockup";
const initialstate ={
    date: "",
    time: "",
    guests:"",
    occasion:"",
};

const Action ={
    Date: 1,
    Time: 2,
    Guests:3,
    Occasion:4,
};

function formReducer(state, action){
    switch (action.type){
        case Action.Date:
            return{
                ...state,
                date: action.payload,
            };
        case Action.Time:
            return{
                ...state,
                time: action.payload,
            };
         case Action.Guests:
             return{
                 ...state,
                guests: action.payload,
            };
        case Action.Occasion:
            return{
                ...state,
                occasion: action.payload,
            };
            default:
                return state;
    }
}
const useForm = () => {
    const [form,dispatch] =useReducer(formReducer,initialstate);
    const [timeslot,setTimeslot] =useState(["choose date first"]);
    const [Formvalid,setFormvalid]=useState(false);
    // const formContext = useFormContext();

    useEffect(()=>{
        if(
            form.date&&
            form.time &&
            form.guests &&
            form.occasion
        )
        {
            setFormvalid(true);
        }
    },[form]);

    const changedateHandler = (e) => {
        dispatch({type: Action.Date, payload: e.target.value})
        setTimeslot(fetchAPI(new Date(e.target.value)));
    };
    const changetimeHandler = (e) => {
        dispatch({type: Action.Time, payload: e.target.value})
    };
    const changeguestsHandler = (e) => {
        dispatch({type: Action.Guests, payload: e.target.value})
    };
    const changeoccasionHandler = (e) => {
        dispatch({type: Action.Occasion, payload: e.target.value})
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (Formvalid){
            submitAPI(true);
        }
        console.log(form);
    }
  return {
    form,
    timeslot,
    Formvalid,
    changedateHandler,
    changetimeHandler,
    changeguestsHandler,
    changeoccasionHandler,
    submitHandler,
  };
};

export default useForm;