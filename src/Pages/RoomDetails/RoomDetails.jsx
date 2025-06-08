import React from 'react';
import { useLoaderData } from 'react-router';

const RoomDetails = () => {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
            this is room details page
        </div>
    );
};

export default RoomDetails;