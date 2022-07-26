import React from 'react';

const Header = ({ handleToggleMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className='header-toggle save'
            onClick={() => handleToggleMode(
                (mode) => !mode
            )}>Toggle Mode</button>
        </div>
    )
}

export default Header;