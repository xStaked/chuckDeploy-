import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap"
// Styles
import "./CategoriesStyles.scss"

const CategoryItem = ({ category }) => {
  return (
    <Button variant="dark">
      <Link to={`random?category=${category}`} className='category-item'>
        {category}
      </Link>
    </Button>
  );
};

export default CategoryItem;
