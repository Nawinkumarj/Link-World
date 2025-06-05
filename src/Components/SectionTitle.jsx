import React, { useState } from 'react';

const SectionTitle = ({text1, text2}) => {
    return (
        <div className='sectionTitleContainer'>
            <div className='line'></div>
            <div className='rightSide'>
                <span>{text1}</span>
                <h1>{text2}</h1>
            </div>
        </div>
    );
};

export default SectionTitle