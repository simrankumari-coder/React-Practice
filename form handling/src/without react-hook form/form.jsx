// import { useState } from 'react'
// import './App.css'

// function App() {
//     const [input, setInput] = useState("")
//     const [password, setPassword] = useState("")
//     const [submit, setSubmit] = useState("")
//     const handleClick = (e) => {
//         setInput(e.target.value);
//     }
//     const handlePassword = (e) => {
//         if (e.target.value.length <= 8) {

//             setPassword(e.target.value)
//         }
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(input)
//         console.log(password)
//     }
//     return (
//         <>
//             <form >
//                 <input type="text" placeholder='username' value={input} onChange={handleClick} />
//                 <input type='password' maxLength={8} placeholder='password' value={password} onChange={handlePassword} />
//                 <button type='submit'>Submit</button>
//             </form>
//         </>
//     )
// }

// export default App
