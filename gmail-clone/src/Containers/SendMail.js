import React from 'react'
import "./SendMail.css";
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

function SendMail() {
    const {register,handleSubmit, formState:{errors}}=useForm();
  
    const onSubmit=(data)=>{
        console.log(data);
        // db.collection('emails').add({
        //     to:data.to,
        //     subject:data.subject,
        //     message:data.message,
        //     timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        // })

        dispatch(closeSendMessage());
    }
    const dispatch=useDispatch();
    return (
        <div className='sendMail'> 
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon className='sendMail__close' onClick={()=>dispatch(closeSendMessage())} />
            </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='To' type="email" name='to' {...register('to',{required:'true'})} />

            {errors.to &&  <p className='sendMail__error'>To is required</p>}

            <input placeholder='Subject' type="text" name='subject'{...register('subject',{required:true})}/>

            {errors.subject &&  <p className='sendMail__error'>Subject is required</p>}

            <input placeholder='Message...' type='text' className='sendMail__message' name='message' {...register('message',{required:true})}/>

            {errors.message &&  <p className='sendMail__error'>Message cannot be empty</p>}

        <div className='sendMail__options'>
            <Button className='sendMail__send' variant="contained" color="primary" type="submit"> Send</Button>
        </div>
        </form>
        </div>
    )
}

export default SendMail

// import React from 'react'
// import "./SendMail.css";
// import CloseIcon from '@mui/icons-material/Close';
// import Button from '@mui/material/Button';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from "react-redux";
// import { closeSendMessage } from "../features/mailSlice";

// function SendMail() {
//     const { register, handleSubmit, errors } = useForm();
//     const dispatch = useDispatch()
//     const onSubmit = (formData) => {
//         console.log(formData);
//     };
//     return (
//         <div className="sendMail"> 
//             <div className="sendMail__header"> 
//                 <h3>New Message</h3>
//                 <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
//             </div>
//             {/* npm add react-hook-form */}
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input name="to" placeholder="To" type="text" ref={register({ required: true })} />
//                 {errors.to && <p className="sendMail__error">To is Required!</p>}
//                 <input name="subject" placeholder="Subject" type="text" ref={register({ required: true })} />    
//                 {errors.subject && <p className="sendMail__error">Subject is Required!</p>}            
//                 <input 
//                     name="message"
//                     placeholder="Message..." 
//                     type="text" 
//                     className="sendMail__message"
//                     ref={register({ required: true })}
//                 />
//                 {errors.message && <p className="sendMail__error">Message is Required!</p>}
//                 <div className="sendMail_options"> 
//                     <Button 
//                         className="sendMail__send"
//                         variant="contained"
//                         color="primary"
//                         type="submit"
//                     >
//                         {/* Send */}
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default SendMail
