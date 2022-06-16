import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryItem from './CategoryItem';

// Styles 
import "./CategoriesStyles.scss"

function Categories() {
  const [state, setState] = useState({
    categories: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const categories = await axios.get(
      'https://api.chucknorris.io/jokes/categories'
    );
    setState({
      ...state,
      categories: categories.data,
    });
  };
  
  return (
    <div className='categories-container'>
      <h2 className='title'>Categories</h2>
      <div className='categories'>
        {state.categories.map((category) => {
          return <CategoryItem key={category} category={category} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
