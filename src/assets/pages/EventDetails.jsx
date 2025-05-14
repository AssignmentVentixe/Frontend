import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Event Details</h1>
            <p>Event ID: {id}</p>
        </div>
    )
}

export default EventDetails