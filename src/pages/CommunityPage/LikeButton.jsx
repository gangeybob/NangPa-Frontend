import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(100);
    const [isClicked, setIsClicked] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <>
            <button className={`btn btn-primary btn-heart ${isClicked && 'active'}`} onClick={handleClick}>
                <i />
            </button>
            <span>{` ${likes}`}</span>
        </>
    );
};

export default LikeButton;
