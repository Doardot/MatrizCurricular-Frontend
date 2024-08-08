import React from 'react';
import './index.css';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <div className="cardHeader">
            <MenuIcon className='iconHeader' style={{ fontSize: '4rem' }} />
            <h2 className="titleHeader" style={{ margin: '1' }}>Matriz Curricular</h2>
        </div>
    );
}