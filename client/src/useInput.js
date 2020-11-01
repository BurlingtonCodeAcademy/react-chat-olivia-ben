//import a hook to use later
import { useState } from 'react'

//create a custom hook and export it for use in other files
//because this is a custom hook we will be importing values from other files, keeping track of their state, transforming them, and returning them back from whence they came
export const useInput = (initialValue) => {
  //take in variables from other components and set the value and state to their initial values using useState
  const [value, setValue] = useState(initialValue)
//below is our custom hook! keep track of use state and input
  return {
    //imported value
    value, 
    //the value we want to change the value to
    setValue,
    //a function that changes the value in this hook to an empty string using setValue
    reset: () => setValue(''),
    //a method that will change the value using setValue to an empty string when the custom hook is called
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value)
      }
    }
  }
}