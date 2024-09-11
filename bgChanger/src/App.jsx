import { useState } from "react"

function App() {
const [color,setColor]=useState( "olive")

  return (
    <div className="w-full  h-screen duration-200"
    style={{background:color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <button onClick={()=>setColor("red")}> red</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white">
  <button onClick={()=>setColor("pink")}> pink</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white">
  <button onClick={()=>setColor("yellow")}> yellow</button>
</div>

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white">
  <button onClick={()=>setColor("blue")}> blue</button>
</div>


    </div>
  )
}

export default App
