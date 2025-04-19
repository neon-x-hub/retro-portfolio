import React from 'react'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center text-center justify-center h-dvh bg-white'>
            <h1 className='text-5xl font-bold mb-4'>404</h1>
            <h2 className='text-2xl font-bold mb-4'>Page Not Found</h2>
            <p className='text-xl w-3/4'>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}
