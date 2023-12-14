'use client';
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './GlobalRedux/store'
import ReservationCard from './components/ReservationCard';
import { useState } from 'react';
import { addReservation } from './GlobalRedux/features/reservationSlice';
import CustomerCard from './components/CustomerCard';

export default function Home() {

  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customer.value);

  const Dispatch = useDispatch();

  const handleInput = (e:any) => {
    e.preventDefault();
    if (!reservationNameInput) return;
    Dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }
  return (
    <main>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-12 col-md-4 fs-3  border-end-md border-secondary'>
            <div>
              <p className=''>Reservations</p>
              <div className='fs-5'>
                {reservations.map((name, index) => {
                  return <ReservationCard name={name} index={index} />
                })
                }
              </div>
            </div>
            <div className="mt-5 fs-5">
              <form action="" onSubmit={handleInput}>
                <input
                  className='w-50'
                  value={reservationNameInput}
                  onChange={(e) => setReservationNameInput(e.target.value)}
                />
                <button type='submit' >Add</button>
              </form>
            </div>
          </div>
          <div className='col-8 fs-5 mx-auto'>
            <p className='fs-2'>Customers Food</p>

            {customers.map((customer) => {
              return <CustomerCard id={customer.id} name={customer.name} food={customer.food} />
            })}

          </div>
        </div>
      </div>

    </main>
  )
}
