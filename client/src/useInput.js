import { useState } from 'react'

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
//custom hook! keep track of use state and input
  return {
    value, 
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value)
      }
    }
  }
}