import React, {useState} from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    
    // Desustriración del objecto Event que retorna el metodo onChange
    const onInputChanged = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;

        // onAddCategory(categories => [ inputValue, ...categories ])
        setInputValue('');
        onNewCategory(newInputValue)
    }

  return (
    <form onSubmit={onSubmit}>
         <input type="text" 
        placeholder='Buscar gifs' 
        value={inputValue} 
        onChange={onInputChanged}
    />
    </form>
  )
}
