import React, {useState} from "react";
import {Button2} from "./styles/styles";

function FunctionalComponenet(){
    const [data, setData] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState("blue")
    const [reduce, setReduce] =useState("green")
    const handleContainer = ()=>{
        setData( data + 1)
        setBackgroundColor("yellow")
    }
    const handleMinus = ()=>{
        setData(data)
        setReduce("green")
    }
    const reSet = ()=>{
        setData (0 )
        setBackgroundColor("yellow")
    }

    return(
        <div background-color="yellow">
            <p>{data}</p>
            <Button2 onClick={handleContainer} background={backgroundColor}>Click</Button2>
            <Button2 onClick={handleMinus} background={reduce}>Click To Reduce</Button2>
            <Button2 onClick={reSet} background={"red"}>Click to reset</Button2>
        </div>
    )
}

export default FunctionalComponenet;