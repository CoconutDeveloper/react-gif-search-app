import { useState } from "react";
export const AddCategory = ({onAddCategory}) => {
  
    const [omniSearch, setOmniSearch] = useState('');
    
    const onOmnisearchChange = ({target}) => {
        setOmniSearch(target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        const category = omniSearch.trim()
        if(category.length <= 1) return
        onAddCategory(category);
        setOmniSearch('');
    }

    return (
    <form onSubmit={onSubmitForm}>
        <input 
            type="text"
            placeholder="Search Gifs"
            value={omniSearch}
            onChange={onOmnisearchChange} 
        />
    </form>
  )
}
