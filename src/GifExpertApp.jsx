import React, { Fragment, useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return;

        // Primera forma de hacerlo
        setCategories([...categories, newCategory]);

        // Second forma de hacerlo
        // setCategories(cat => [...cat, 'Hola'])
    }

  return (
   <Fragment>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // onAddCategory={ setCategories } : Esta implementación sirve pero no es la optima lo que debe hacer cada ocmponente es retornar un valor para que pueda ser usado por el padre para lo que sea
            // Hoy contiene logica innecesaria dentro y lo que hace es actualizar el estado del padre dentro del hijo y no es muy optimo
            onNewCategory={ onAddCategory }
        />      

        {/* Listado de Gif */}
        { categories.map(category => (<GifGrid key={category} category={category} />))}
           
   </Fragment>
  )
}
