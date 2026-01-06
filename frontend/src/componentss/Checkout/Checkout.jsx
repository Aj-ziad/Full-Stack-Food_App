import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button';
import { sendCheckoutData } from '../../hooks/useHttp';

function Checkout({cartData}) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState([]);
  const [isSubmiteed, setIsSubmitted] = useState(false);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newErrors = [];

    setFormData(prev => ({...prev, cartData}));
    const response = sendCheckoutData(formData);

    if (response.status === 400 || response.status === 500) {
      newErrors.push(response.message);
      setErrors(newErrors);
      return;
    }

    setIsSubmitted(true);
  }

  return (
    <>
        
        <div className='w-[800px] bg-neutral-100 rounded-md shadow-lg flex flex-col gap-2 p-4'>
          <p className='text-red-500 font-bold'>{errors}</p>
          <form onSubmit={handleSubmit}>
            <Input label={'Email'} type={'email'} required={true} name={'email'} value={formData.email} onChange={handleChange} />
            <Input label={'Full Name'} type={'text'} required={true} name={'name'} value={formData.name} onChange={handleChange} />
            <Input label={'Street'} type={'text'} required={true} name={'street'} value={formData.street} onChange={handleChange} />
            <Input label={'Code Postal'} type={'number'} required={true} name={'postal-code'} value={formData['postal-code']} onChange={handleChange} />
            <Input label={'City'} type={'text'} required={true} name={'city'} value={formData.city} onChange={handleChange} />

            <Button className='mt-5' children={'Submit'} type={'submit'} />
          </form>
        </div>
    </>
  )
}

export default Checkout