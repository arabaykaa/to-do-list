import React from 'react'

interface IProps {
    children?: JSX.Element | JSX.Element[] | string
}

const Wrapper = ({ children }: IProps) => {
    return (
        <div className='mx-10'>
            {children}
        </div>
    )
}

export default Wrapper