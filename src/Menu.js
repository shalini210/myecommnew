import React from 'react'
import {Link} from 'react-router-dom';
export default function Menu() {
  return (
    <div>Menu
        <ul>
            <li> <Link to="/contact" className=''>Contact us </Link></li>
            <li> <Link to="/Kids" className=''>Kids </Link>

                </li>
                <li> <Link to="/about">about us </Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
        </ul>
    </div>
  )
}
