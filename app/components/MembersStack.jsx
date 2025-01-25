import React from 'react'
import Avatar from './Avatar';

const MembersStack = ({ members }) => {
    return (
        <div className='flex'>
            {members.map((member, index) => {
                return (
                    <div key={index} className={`first:ml-0 -ml-3 relative rounded-full after:inset-0 after:absolute after:rounded-full after:shadow-[inset_0_0_0_3px_rgb(250,250,250)]`}>
                        <Avatar img={member} />
                    </div>
                );
            })}
        </div>
    )
}

export default MembersStack