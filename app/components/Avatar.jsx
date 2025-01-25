import React from 'react'
import Image from 'next/image'
const Avatar = ({ img }) => {
    return (
        <>
            <Image src={img} className={`h-10 w-10 object-cover rounded-full`} alt={img ? img : 'media'} />
        </>
    )
}

export default Avatar