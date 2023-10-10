import React, {Component} from "react"

// class Reducer extends Component{

    // constructor() {
    //     super();
    //     this.state={
    //
    //     }
    // }
    function reducer(state, action){
      switch (action.type){
          case "handleChange":
          return{
              ...state,
              [action.field]: action.payload
          }
          default:
              break;
      }
    }


