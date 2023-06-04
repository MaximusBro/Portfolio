import React, { useState, memo } from 'react';
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from '../variants';
//Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
//YUP
import * as yup from 'yup';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [isSubmited, setIsSubmited] = useState(false);
  const [errorForm, setErrorForm] = useState({ message: "Something wrong. Try later", status: false })

  const messageResult = (setIsSubmited, time) => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, time)
  }
  const errorMessage = (setErrorForm, time) => {
    setErrorForm(state => {
      return {
        ...state,
        status: true
      }
    })
    setTimeout(() => {
      setErrorForm(state => {
        return {
          ...state,
          status: false
        }
      })
    }, time)
  }

  const onSubmit = (values, onSubmitProps) => {
    setLoading(true)
    const templateParams = {
      ...values
    }
    emailjs.send(process.env.REACT_APP_SERVICE_KEY,
      process.env.REACT_APP_TEMPLATE_KEY, templateParams,
      process.env.REACT_APP_PRIVATE_KEY)
      .then(() => {
        setLoading(false);
        messageResult(setIsSubmited, 2000)
        onSubmitProps.resetForm();
      })
      .catch(error => {
        setLoading(false);
        errorMessage(setErrorForm, 3000)
        console.log(error.text);
      })
  }
  return (
    <section className=' mb-[10%] py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-20'>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 flex flex-col justify-center items-center'>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!
            </h2>
          </motion.div>
          {/* form */}
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={yup.object({
              name: yup.string().min(2, "Minimal 2 symbols!").required("Required field"),
              email: yup.string().email("Uncorrect email adress").required("Required field"),
              message: yup.string().min(10, "Please, write more information").required("Required field")
            })}
            onSubmit={onSubmit}

          >
            <Form
              className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-24 p-6 items-start'>
              <Field
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
						transition-all'
                id='name'
                name="name"
                type="text"
                placeholder='Your name'
              />
              <ErrorMessage className=' text-red-700' name="name" component="div" />
              <Field className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent
						transition-all'
                type="text"
                id="email"
                name="email"
                placeholder='Your email' />
              <ErrorMessage className=' text-red-700' name="email" component="div" />
              <Field as="textarea" className='bg-transparent border-b py-4 outline-none w-full 
						placeholder:text-white focus:border-accent
						resize-none 
						transition-all'
                name="message"
                id="message"
                placeholder='Your message' />
              <ErrorMessage className=' text-red-700' name="message" component="div" />
              {/* Status form */}

              {loading ? <div>Loading...</div> : ""}
              {isSubmited ? <div className=' text-sucess'>Success</div> : ""}
              {errorForm.status ? <div className=' text-red-600'>{errorForm.message}</div> : ""}
              {/* Submit */}
              <button type='submit' className='btn btn-lg '>Send message</button>
            </Form>
          </Formik>
        </div>
      </div>
    </section >
  )
};

export default memo(Contact);
