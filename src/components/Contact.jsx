
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form,setForm] =useState({
    name:"",
    email:"",
    message:""
  })
  const[loading,setloading] = useState(false)
  const handleChange =(e)=>{
    const {name,value} =e.target;
    setForm({...form,[name]:value})

  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    setloading(true)

// template_y130yfr
// service_zgpvzxv
// 27SQhCMli3V8eNe83

    emailjs.send('service_zgpvzxv','template_y130yfr',{
      from_name:form.name,
      to_name:"rajesh kumar chappidi",
      from_email:form.email,
      to_email:'contact@jsmastery.pro',
      message:form.message
    },
    "27SQhCMli3V8eNe83"
  )
  .then(()=>{
setloading(false);
alert("Thank You . Will get back to you soon")
setForm({
  name:"",
    email:"",
    message:""
})
  }, (error)=>{
    setloading(false)
    console.log(error)
    alert('something went worng')
  })
  }
  return (
    <div className='xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hiddden'>
<motion.div variants={slideIn('left','tween',0.2,1)}
className='flex-[0.75] bg-black-100  p-8 rounded-2xl'
>
<p className={styles.sectionSubText}>get in touch </p>
<h3 className={styles.sectionHeadText}>Contact.</h3> 
<form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
<lable className="flex flex-col">
<span className='text-white font-medium mb-4'>
your name
</span>
<input type="text"
name='name'
value={form.name}
onChange={handleChange} 
placeholder='whats your name' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
</lable>
<lable className="flex flex-col">
<span className='text-white font-medium mb-4'>
your email
</span>
<input type="email"
name='email'
value={form.email}
onChange={handleChange} 
placeholder='whats your email' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
</lable>
<lable className="flex flex-col">
<span className='text-white font-medium mb-4'>
your Message
</span>
<textarea 
rows="7"
name='message'
value={form.message}
onChange={handleChange} 
placeholder='what do you want to say' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
</lable>
<button type="submit" className='bg-tertiary py-3 px-8  outline-none w-fit text-white font-blod shadow-md shadow-primary rounded-xl'>
{loading ? 'sending...':'send'}
</button>
</form>
</motion.div>
<motion.div variants={slideIn('left','tween',0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
  <EarthCanvas/>
</motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")