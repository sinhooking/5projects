import { useState } from 'react';

const useSearch = () => {
    const [search, setsearch] = useState('');

    const onSearch = (e) => setsearch(e.target.value);
    
    const hasSearch = (item) => item.content.indexOf(search) !== -1

    return [search, onSearch, hasSearch];
}

export default useSearch;
