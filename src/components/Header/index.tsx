import React from 'react';
import './index.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="cardHeader">
                <MenuIcon className='iconHeader' />
                <h2 className="titleHeader">Matriz Curricular</h2>
            </div>
        </div>
    );
}