import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

export const Footer = () => {
    const {loading} = useSelector(state => state.ui);
    return (
       <div className="footer">
           <span>
               <i>Lareactive</i>
           </span>
           <span>{loading ? 'Loading...' : 'Loaded' }</span>
       </div>
    )
}
