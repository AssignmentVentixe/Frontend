import React from 'react'
import BreadcrumbNav from './BreadcrumbNav';

const Header = () => {
  return (
    <header>
        <div className='breadcrumbContainer'>
          <BreadcrumbNav />
        </div>
      <h1>I am header</h1>
    </header>
  )
}

export default Header