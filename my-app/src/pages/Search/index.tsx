import React from 'react'
import DropdownList from '../../components/DropdownList';
import { SearchTerm } from './types';

function SearchPage() {
    const [searchTerm, setSearchTerm] = React.useState<SearchTerm>({});

    const handleSubmit = (item)=>{
        console.log(item)
    }

  return (
    <div className='bg-success p-5'>
        <DropdownList handleSearch={handleSubmit}/>
    </div>
  )
}

export default SearchPage