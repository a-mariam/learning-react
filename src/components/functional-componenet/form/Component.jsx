import React, {useReducer, useState} from "react";
import {FormDiv, Input, Text, TextDiv} from "./styles/styles";

function Form(){
    const [firstname, setFirstName] = useState("firstname")
    // const [lastname, setLastName] = useState("lastName")
   const  initialValue ={
        firstName: "",
       lastname: "",
       password: "",
       age: 0,
       buttonText: ""
   }
   const [userData, setUserData] = useState(initialValue)

    const han = (e)=>{
        setUserData(prevState =>({
            ...prevState,
            [e.target.name]: e.target.value
        }) )
    }
    function reducer(state, action){
        switch (action.type){
            case "handleChange":
                return{
                    ...state,
                    [action.fields]:action.payload
                }
            case "handleButtonText":
                return {
                    ...state,
                    [action.fields]: action.payload
                }
        }
    }
    const [data, dispatch] = useReducer(reducer, initialValue)
    const handleChange = (event) =>{
        dispatch({
            type: "handleChange",
            fields: event.target.name,
            payload:  event.target.value
        })

    }
    const handleButtonText = (e)=>{
        dispatch({
            type: "handleButtonText",
            fields: e.target.name,
            payload: "Ambali  ..."
        })
    }
    return(
        <FormDiv >
            <TextDiv>
                <Text>FirstName: {userData.firstName}</Text>
                <Text>LastName: {userData.lastname}</Text>
                <Text>Password: {userData.password}</Text>
                <Text>Age: {userData.age}</Text>
        </TextDiv>
            <Input value={userData.firstName} name={firstname} placeholder={"first name"} type={"text"} onChange={han}/>
            <Input value={userData.lastname} placeholder={"last name"} type={"text"} onChange={han}/>
            <Input value={userData.password} placeholder={"password"} type={"text"} onChange={han}/>
            <Input  value={userData.age} placeholder={"age"} type={"number"} onChange={han}/>
            <ButtonText value={userData.buttonText} name={"buttonText"} onClick={handleButtonText()}>Click Me</ButtonText>
        </FormDiv>
    )


}
export default Form;