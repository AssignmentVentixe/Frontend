import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { formatDate } from '../../utils/FormatDate'
import eventApi from '../../services/eventApi'

const EventDetails = () => {
  const { id } = useParams()
  const [event, setEvent] = useState(null)

  useEffect(() => {
    eventApi.get(`/events/${id}`)
      .then(res => setEvent(res.data))
      .catch(err => {
        console.error(err)
      })
  }, [id])



  if (!event) return <span>404 - Event not found</span>
    

    const formattedPrice = event.price % 1 === 0
        ? event.price.toString()
        : event.price.toFixed(2)

  return (
    <div className="eventDetails">
        <div className='imageContainer'>
            <img className='eventImg' src={event.imageUrl} alt="" />
        </div>
        <h2>{event.eventName}</h2>
        <div className='descriptionContainer'>
            <h4>About Event</h4>
            <p>{event.description}</p>
        </div>

        <span className='eventLocation'>{event.location}</span>
        <span className='eventDate'>{formatDate(event.startDate)}</span>
        <span className='eventPrice'>{formattedPrice}</span>
    </div>
  )
}
  
export default EventDetails