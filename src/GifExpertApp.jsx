import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = ( newCategory) =>{
    if ( categories.includes(newCategory) ) return;

    // categories.push(newCategory);
    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

       <AddCategory 

          onNewCategory={ (value) => onAddCategory(value) }
      />  
        
    
        { 
          categories.map( ( category ) => (
                <GifGrid 
                key={ category }
                category={ category } />
            ))
        }

      
            {/* Gif Item */}
    </>
  )
}
// BVJlwGdWufWBz6JtwZis4TqmbcudETqB