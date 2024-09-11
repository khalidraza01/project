import { useState,useCallback,useEffect,useRef } from 'react'



function App() {
const [length, setLenght]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllowed,setCharAllowed]=useState(false)
const [password,setPassword]=useState("")

//useRef hook
const passwodRef=useRef(null)

const passswordGenerator=useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if (numberAllowed) {
  str+="0123456789"
  
}

if (charAllowed) {
  str+="!@#$%^&*(){}|?/|"
  
}
for (let i = 1; i <= length; i++) {
  let char=Math.floor(Math.random() * str.length+1)
  pass+=str.charAt(char)
}
setPassword(pass)
pass

},[length,numberAllowed,charAllowed])

const copyPasswordToClicpBoard=useCallback(()=>{
  passwodRef.current?.select();
  // passwodRef.current?.setSelectionRange(0,5)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passswordGenerator()
},[length,numberAllowed,charAllowed,passswordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500  bg-gray-800'>
      <h1 className='text-white text-center'> password generator</h1>
      <div className='flex shodow runded-lg overflow-hidden mb-4'> 
      <input
       type="text"
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
        readOnly
        ref={passwodRef}
       />
<button
onClick={copyPasswordToClicpBoard}
className='outline-none bg-blue-700 text-white px-3 oy-0.5 shrink-0'
>Copy</button>

      </div>
<div
 className='flex text-sm gap-x-2'>
<div
 className='flex items-center gap-x-1'>
  <input
   type="range" 
   
   mine={6}
   max={100}
   value={length}
   className='cursor-pinter'
   onChange={(e)=>{setLenght(e.target.value)}}
   />
   <label>Length:{length}</label>
 </div>
 <div className='flex items-center gap-x-1'>
<input
type="checkbox"
defaultChecked={numberAllowed}
id='numberInput'
onChange={()=>{
  setNumberAllowed((prev)=>!prev)
}}
/>
<label htmlFor="numberInput">Number</label>
<div className='flex items-center gap-x-1'>
  <input type="checkbox"
  defaultChecked={charAllowed}
  id='characterinput'
  onChange={()=>{setCharAllowed((pre)=>!pre)}}
  />
  <label htmlFor="characterInpur">character</label>
</div>
 </div>
</div>

    </div>
    </>
    
  )
}

export default App
