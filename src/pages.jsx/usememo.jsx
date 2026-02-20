import { useMemo, useState } from "react"

const Use=()=>{
    const [plus,setplus]=useState(0)
    const [minus,setminus]=useState(100)

    // function multiply(){
    //     console.log("*********************")
    //   return  plus*10
    console.log("helo")
     console.log("helo")
        console.log("helo")
           console.log("helo")
      
    // }
    const multiply=useMemo(()=>{
        console.log("multiply function called");
        return plus*10;
    },[plus])
    return(
        <div>
            <h1 className="text-4xl text-black">Use Cases</h1>

            <h1 className="text-2xl text-black">Plus: {plus}</h1> <br />
            <h1 className="text-2xl text-black">Minus: {minus}</h1> <br />
            {multiply} <br />
            <button onClick={()=>setplus(plus+1)}>increse</button> <br />
            
            <button onClick={()=>setminus(minus-1)}>Dectease</button> <br />
              <h1 className="text-4xl text-black">Use Cases</h1>
        </div>
    )
}
export default Use