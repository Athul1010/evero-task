import React, { useState } from 'react'
import '../Styles/HomePage.css'

const HomePage = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='popup'>
            <button onClick={()=>setShow(!show)}>Popup</button>
            {show &&
                <div className='main'>
                    <h1 className='heading'>eVero Popup</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates fugit obcaecati impedit, eaque soluta quasi saepe earum autem sint aperiam iste corporis adipisci ipsum molestiae aspernatur unde iure ex.
                        Error quasi omnis alias optio enim, quas molestiae impedit placeat rem.</p>
                </div>
            }
        </div>
    )
}

export default HomePage