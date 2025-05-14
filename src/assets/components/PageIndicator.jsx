import React from 'react'
import { useLocation } from 'react-router-dom';

const PageIndicator = () => {
  const location = useLocation();
  const { pathname } = location;

  const currentPage = pathname.split('/').filter(x => x).pop() || '';

  const pageName = currentPage.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').replace(/\/.*$/, ''); 

  return (
    <div className='pageIndicator'>
      <button className='arrowBtn'></button>
      <span className='pageName'>{pageName}</span>
    </div>
  )
}

export default PageIndicator