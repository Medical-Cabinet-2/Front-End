import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VerifyAge = () => {
    const { age, setAge } = useState(0);

    return (
        <header>
            <Link to = '/log-in'>Log In</Link>
            <Link to = '/register'>Sign Up</Link>
        </header>
    )
}

export default VerifyAge;