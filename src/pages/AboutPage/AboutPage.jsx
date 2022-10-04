import React, {useState} from 'react';

const AboutPage = () => {
    const [likes, setLikes] = useState(15)

    const handleClick = () => {
        setLikes(likes + 1)
    }
    const handleClickUnlikes = () => {
        setLikes(likes - 1)
    }
    
    return (
        <div>
            <h1> {likes} </h1>
            <button onClick={handleClick} >Like</button>
            <button onClick={handleClickUnlikes}>Unlike</button>
        </div>
    );
};

export default AboutPage;