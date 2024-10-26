import React from 'react';
import { useParams } from 'react-router-dom';

const IdMember = () => {
    const {id} = useParams()
    return (
        <div>
            Inside Params - {id} 
        </div>
    );
}

export default IdMember;
