import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {

        setCategories([ 'Valorant', ...categories ])
    }

    console.log( categories );
    
    

  return (
    <>
        {/* *TITULO */}
        <h1>GifExpertApp</h1>

        {/* INPUT */}
        <AddCategory />

        {/* LISTADO DE GIFT */}
        <button onClick={ onAddCategory }>Agregar</button>
        <ol>
            {categories?.map( (category, index) => {
                return(
                    <li key={ index }>{category}</li>
                )
            })}
        </ol>

    </>
  )
}
