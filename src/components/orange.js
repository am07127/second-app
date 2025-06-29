import React from 'react';

const orangeImageUrl = 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80';

function Orange() {
    return (
        <div>
            <img
                src={orangeImageUrl}
                alt="A single orange"
                style={{ width: '200px', borderRadius: '8px' }}
            />
        </div>
    );
}

export default Orange;