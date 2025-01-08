import React from 'react'
import { useForm } from 'react-hook-form';

  

const Register = () => {
  const {
    register,
    handleSubmit,
    
    watch,
    formState: { errors , onsubmiting },
  } = useForm();

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const onSubmit = (data) => {console.log(data)}

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col border border-gray-300 py-8 px-12 rounded-md shadow-2xl shadow-zinc-600'>
        <h1 className='text-2xl text-center mb-4 font-bold'>Sign up</h1>
        
        <label className='mb-1' htmlFor="username">Username : </label>
        <input className=' border border-zinc-600 px-2 py-1' type="text" {...register('username' , {
          required: 'This field is required',
          minLength: { value: 3, message: 'Minimum length should be 3' }
        })} />
        {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
        <h1 className='mb-4'></h1>

        <label className='mb-1' htmlFor="username">email : </label>
        <input className=' border border-zinc-600 px-2 py-1' type="email" {...register('email' , {required : 'this field is required'   })}/>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <h1 className='mb-4'></h1>

        <label className='mb-1' htmlFor="password">password : </label>
          <input className=' border border-zinc-600 px-2 py-1' type="password" {...register('password' , { 
          required : 'this field is required' ,
          minLength : {value : 5 , message :"minimum length should be 5"} 
          })}/>
           {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
           <h1 className='mb-4'></h1>

        <label className='mb-1' htmlFor="confirmPassword">confirm password : </label>
        <input className=' border border-zinc-600 px-2 py-1' style={password !== confirmPassword ? {outlineColor: "red"} : {outlineColor: "green"}} type="password" {...register('confirmPassword',{ 
          required : 'this field is required'           
        })} />
        {errors.confirmPassword && <p className='text-red-500 '>{errors.confirmPassword.message}</p>}
        <h1 className='mb-4'></h1>

        <button disabled={onsubmiting || password !== confirmPassword} className='bg-blue-600 py-2 rounded-md hover:bg-blue-500' value="submit" type="submit">Sign up</button>

      </div>
      </form>
    </div>
  )
}

export default Register