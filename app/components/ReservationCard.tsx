import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../GlobalRedux/features/reservationSlice';

interface ReservationCardTypes{
    name: string,
    index: number,
}

function ReservationCard({name, index}:ReservationCardTypes) {

    const Dispatch = useDispatch();
  return (
    <p onClick={()=>{
        Dispatch(removeReservation(index))
    }} className='shadow-sm'>{name}</p>
  )
}

export default ReservationCard