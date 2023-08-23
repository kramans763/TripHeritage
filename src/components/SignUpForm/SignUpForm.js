import React, {useState} from 'react';
import "./SignUp.css";

const SignUpForm = () => {
    const defaultValOfForm = {
        name: "",
        email: "",
        phone:"",
    }
    const defaultErrorState = {
        name: "",
        email: "",
        phone: "",
    }
    const defaultTouchedState = {
        name: false,
        email: false,
        phone: false,
    }

    const [formState, setFormState] = useState(defaultValOfForm );
    const [errorState, setErrorState] = useState(defaultErrorState);
    const [touchedState, setTouchedState] = useState(defaultTouchedState);

    const[clicked,setClicked]=useState(false);

    function handleClick(){
        setClicked(!clicked);
    }

    const onFormSubmition = (event) => {
        event.preventDefault()
    }

    const onBlurHandler = (event, inputKey) => {
        let touchedObj = {} // this is fast
       
        touchedObj[inputKey] = true;        
        
        setTouchedState(old => {
            return {
               ...old,
               ...touchedObj
            }
        })
    }

    const changehandler = (event, inputKey) => {
        const value = event.target.value
        console.log(value, inputKey, "key value pair")

        console.log("form state debug", formState)
        setFormState((oldFormValue) => {
            return {
                ...oldFormValue,
                [inputKey]: value,
            }
        })

        ValidateTheFormField(event, inputKey)
    }

    function ValidateForm() {
        let isFormValid = true;

        let errorObj = {}

        for(let inputState in formState) {
            if(formState[inputState]) {
                errorObj[inputState] = "error"
                isFormValid = false;
            }
        }

        return isFormValid;

    }


    function ValidateTheFormField(event, inputKey) {
        
        let value = event.target.value ; 

        let localError = {};

        if(inputKey === "name") {
            const numberRegex = /.*[0-9].*/
            if(value && !value.match(numberRegex) ) {
                localError[inputKey] = "";
            } else if(value && value.match(numberRegex)) {
                localError[inputKey] = "name should be in string."
            } else {
                //  if value is empty 
                localError[inputKey] = "Required"
            }
        }
        
        if(inputKey === "email") {
            const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/; // onion routers

            if(value && value.match(emailRegex)) {
                localError[inputKey] = "";
            } else if (value && !value.match(emailRegex)) {
                localError[inputKey] = "Email should Be valid";
            }

        }

        if(inputKey === "phone") { // usa ,+91, +1 
            if(value && isFinite(value) && value.length === 10 && Number(value) > 999999999 ) {
                localError[inputKey] = ""; 
            } else if(!(value && isFinite(value) && value.length === 10 && Number(value) > 999999999) ) {
                localError[inputKey] = "Enter valid Phone number"; 
            }
        }
        // Update the ERROR STATE 

        setErrorState(old => {
            return {
                ...old,
                ...localError
            }
        } )


    }

  return (
    <>
        <div className='form-container'>
        <h4>Please Provide your details</h4>
           <form onSubmit={onFormSubmition}>
                <input 
                    onChange={(event) => {changehandler(event, "name")}} 
                    type="text"
                    onBlur={(event) => {onBlurHandler(event, "name")}} 
                    placeholder='Name*'   
                >
                </input>
                <div className='error'>{errorState.name}</div>
    
                <input 
                    onChange={(event) => {changehandler(event, "email")}} 
                    type="text"
                    onBlur={(event) => {onBlurHandler(event, "email")}}  
                    placeholder='Email*'
                ></input>
                <div className='error'>{touchedState.email && errorState.email}</div>

                <input 
                    onChange={(event) => {changehandler(event, "phone")}} 
                    type="number"
                    onBlur={(event) => {onBlurHandler(event, "phone")}} 
                    placeholder='Phone*'
                    ></input>
                <div className='error'>{errorState.phone}</div>

                <input className='submit-btn' type="submit" onClick={handleClick}/>
            </form> 
            {clicked? <p>Thank You for joinig us</p> : '' }   
        </div>
    </>
  )
}

export default SignUpForm