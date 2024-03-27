import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
// import { apiConnector } from '../../services/apiconnector';

import { contactusEndpoint } from '../../services/apis';
import { apiConnector } from '../../services/apiConnector';

const ContactUsForm = () => {
    const [loading,setLoading]=useState(false);
    const{
        register,
        handleSubmit,
        reset,
        formState:{errors, isSubmitSuccessful}
    }=useForm(); 
    const submitContactForm=async(data)=>{
        console.log("Loggin Data",data);
        try{
            setLoading(true);
            // const response= await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
            const response={status:"OK"};
            console.log("Loggin response",response);
            setLoading(false);

        }catch(err){
            console.log("Error",err.message);
            setLoading(false);

        }
    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneNo:"",
            })
        }
    },[isSubmitSuccessful,reset]);



  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
        <div className='text-yellow-400'>
            {/* firstname */}
            <div>
                <label htmlFor='firstname' >First Name</label>
                <input type="text"
                name='firstname'
                id='firstname' 
                placeholder='First Name'
                {...register("firstname",{required:true})}
                />
                {
                    errors.firstname && (
                        <span>
                            Please Enter first name
                        </span>
                    )
                }

            </div>
            {/* last name */}
            <div>
                <label htmlFor='lastname' >First Name</label>
                <input type="text"
                name='lastname'
                id='lastname' 
                placeholder='Last Name'
                {...register("lastname")}
                />

            </div>
            {/* email */}
            <div>
                <label htmlFor='email' >Email Address</label>
                <input type="email"
                name='email'
                id='email' 
                placeholder='Email '
                {...register("email",{required:true})}
                />
                 {
                    errors.email && (
                        <span>
                            Please Enter the email
                        </span>
                    )
                }

            </div>
            {/* message */}
            <div>
                <label htmlFor='message' >PLease Enter your message</label>
                <textarea 
                name='message'
                id='message' 
                cols="30"
                rows="7"
                placeholder='Enter Your Message '
                {...register("message",{required:true})}
                />
                 {
                    errors.message && (
                        <span>
                            Please Enter your Message
                        </span>
                    )
                }

            </div>
            <button type='submit'>
                    Submit
            </button>
        </div>
      
    </form>
  )
}

export default ContactUsForm
