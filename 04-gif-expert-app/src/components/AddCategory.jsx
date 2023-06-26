import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log( inputValue );
        
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange= { handleChange }
        />
    </form>
  )
}
