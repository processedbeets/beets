import React from 'react';

type HeaderTypes = {
    title: string,
    children?: React.ReactNode
}

const Header = ({title, children}: HeaderTypes) => {
    return (
        <>
        <h1>{title}</h1>
            {children}
            </>
    )
}

export default Header;