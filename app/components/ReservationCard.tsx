import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../GlobalRedux/features/reservationSlice';
import { addCustomer } from '../GlobalRedux/features/customerSlice';
import {v4 as uuid} from "uuid";

interface ReservationCardTypes{
    name: string,
    index: number,
}

function ReservationCard({name, index}:ReservationCardTypes) {

    const Dispatch = useDispatch();
  return (
    <p onClick={()=>{
        Dispatch(removeReservation(index))
        Dispatch(addCustomer({
          id: uuid(),
          name,
          food: []
        }))
    }} className='shadow-sm'>{name}</p>
  )
}

export default ReservationCard