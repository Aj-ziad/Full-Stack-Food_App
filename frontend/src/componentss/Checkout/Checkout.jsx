import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button';
import { sendCheckoutData } from '../../hooks/useHttp';
import Modal from '../../components/UI/Modal';

function Checkout({cartData}) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);
  const [isSubmiteed, setIsSubmitted] = useState(false);

  const successText = "Your order has been sent successfully!"

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newErrors = [];

    setFormData(prev => ({...prev, cartData}));
    const response = await sendCheckoutData(formData);

    if (response.status !== 200) {
      newErrors.push(response.message || "Something went wrong!");
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  }

  return (
    <>
        <div className='w-[700px] bg-neutral-100 rounded-md shadow-lg flex flex-col gap-2 p-4'>
          <h1 className='font-bold text-2xl text-gray-700 text-center'>Checkout</h1>
          {errors.map((err, key)=>(
            <p className='text-red-500 text-center font-bold' key={key}>{err}</p>
          ))}
          <form onSubmit={handleSubmit}>
            <Input label={'Email'} type={'email'} required={true} name={'email'} value={formData.email} onChange={handleChange} />
            <Input label={'Full Name'} type={'text'} required={true} name={'name'} value={formData.name} onChange={handleChange} />
            <Input label={'Street'} type={'text'} required={true} name={'street'} value={formData.street} onChange={handleChange} />
            <Input label={'Code Postal'} type={'number'} required={true} name={'postal-code'} value={formData['postal-code']} onChange={handleChange} />
            <Input label={'City'} type={'text'} required={true} name={'city'} value={formData.city} onChange={handleChange} />

            <Button className='mt-5' children={'Submit'} type={'submit'} />
          </form>
        </div>
        <Modal isOpen={isSubmiteed} children={successText} />
    </>
  )
}

export default Checkout