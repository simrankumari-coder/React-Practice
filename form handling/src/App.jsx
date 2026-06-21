import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  console.log(errors)
  const password = watch("password")
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();

      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(2)
    console.log(data)
    reset()
  }


  return (
    <>


      <form autoComplete="off" className=" mt-2.5 shadow-lg min-h-screen bg-gray-200 flex flex-col gap-4 min-w-2/4 w-2xs p-6  rounded-sm m-auto border-black border-4 items-start" action="" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='text-3xl text-center m-3 font-bold text-shadow-black'>Fill This Form</div>

        <hr className="w-full border-t border-black my-2" />


        <label>
          <span>Username :</span> <input className='' placeholder='username'{...register("username", {
            required: { value: true, message: "this filed is required" }, minLength: { value: 3, message: "Minimum three letters are required" }, maxLength
              : { value: 30, message: "Maximum thirty letters are allowed" }
          })} type='text' />
          {errors.username && <div className="error">{errors.username.message}</div>}</label>

        <label>
          <span>Email :  </span><input placeholder="Email@.xyz.com" type='email' {...register("email", {
            required: { value: true, message: "This field is required " }, pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter the valid email"
            }
          })} />
          {errors.email && <div className="error">{errors.email.message}</div>}</label>

        <label>
          <span>Password : </span><input placeholder='password' {...register("password", {
            required: { value: true, message: " this field is rrequired" }, minLength: { value: 3, message: "Minimum threedigit are required" }, maxLength
              : { value: 8, message: "Maximum eight digits are allowed" }
          })} type='password' />
          {errors.password && <div className="error">{errors.password.message}</div>}
        </label>

        <label>
          <span>Confirm Password :</span> <input placeholder='confirm password' {...register("confirmPassword", {
            required: { value: true, message: "confirm password is rrequired" }, validate: (value) => value === password || "Password did not match"
          })} type='password' />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword.message}</div>}
        </label>

        <fieldset className='flex flex-row gap-2'><legend className=' text-black font-semibold'>Enter your Gender :</legend>
          <label className='flex gap-2'><input type='radio' value="male"  {...register("gender", { required: { value: true, message: "fill your gender" } })} />Male</label>

          <label className='flex gap-2'><input type='radio' value="female"  {...register("gender", { required: { value: true, message: "fill your gender" } })} />Female</label>

          <label className='flex gap-2'><input type='radio' value="other"  {...register("gender", { required: { value: true, message: "fill your gender" } })} />Other</label>
          {errors.gender && <div className="error">{errors.gender.message}</div>}
        </fieldset>

        <label>
          <span>Phone No. : </span><input
            type="tel" placeholder="Phone Number"  {...register("phone", {
              required: "Phone is required", maxLength: { value: 10, message: "number should be 10 digits" }, minLength: { value: 10, message: "minlenght should be 10 digits" }
            })}
          />
          {errors.phone && <div className="error">{errors.phone.message}</div>}</label>


        <span>Select Country:</span>
        <select className='border border-black rounded-sm'  {...register("select", { required: { value: true, message: " Choose your country" }, })} defaultValue="">
          <option value="" disabled>Select Your Country</option>
          <option value="India" >India</option>
          <option value="Canada" >canada</option>
          <option value="Brazil" >Brazil</option>
          <option value="America" >America</option>
          <option value="China" >China</option>
          <option value="Japan" >Japan</option>
        </select>
        {errors.select && <div className="error">{errors.select.message}</div>}
        <label>
          <span>Tell about yourself :</span> <textarea className="focus:outline-none focus:ring-2 focus:ring-gray-400 bg-gray-300 flex flex-col gap-2"  {...register("about")} />
          {errors.about && <div className="error">{errors.about.message}</div>}</label>

        <label className='flex justify-center gap-2'>
          <input className='w-auto  ' type="checkbox" {...register("terms", { required: "Accept terms" })} />
          <span>Accept Terms</span>
        </label>
        {errors.terms && <div className="error">{errors.terms.message}</div>}

        <button className="bg-gray-500 hover:bg-gray-700 w-full text-white py-2 rounded " disabled={isSubmitting} value="submit" type='submit'>
          {isSubmitting ? "Submitting..." : "Submit"}</button>
      </form>
    </>
  )
}

export default App
