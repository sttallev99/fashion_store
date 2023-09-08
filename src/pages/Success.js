import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
    const {state} = useLocation();
    console.log(state)
    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <span
                style={{
                    marginBottom: '15px',
                    fontSize: '25px',
                    letterSpacing: '1px',
                    fontWeight: 400
                }}
            >Fashion store</span>
            <button
                style={{
                    padding: '10px 15px',
                    fontSize: '25px',
                    fontWeight: 300,
                    border: 'none',
                    backgroundColor: '#008381',
                    color: 'white',
                    borderRadius: 5,
                    marginBottom: '15px',
                    cursor: 'pointer'
                }}
            >Successfull.</button>
            <span
                style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 500
                }}
            >Your order has been prepared. Thanks for<br/> choosing Fashion store.</span>
        </div>
    )
}

export default Success
