import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const addCategory = (category) => {
    
    const duplicated = categories.find( cat => cat.toLowerCase() === category.toLowerCase() ); 
    if(duplicated) return

    setCategories([category, ...categories])
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onAddCategory={addCategory} categories={categories}/>

        { categories.map( (cat) => {
          return <GifGrid key={cat} category={cat} />
        }) }
    </>
  )
}
