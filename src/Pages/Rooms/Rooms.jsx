import React from 'react';
import { useLoaderData } from 'react-router';
import RoomCard from './RoomCard';

const Rooms = () => {
    const {data} = useLoaderData();
    
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'>All rooms</h1>
            <div className='w-10/12 mx-auto space-y-10 my-6'>
                {
                    data.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;