'use client';
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './GlobalRedux/store'
import ReservationCard from './components/ReservationCard';
import { useState } from 'react';
import { addReservation } from './GlobalRedux/features/reservationSlice';

export default function Home() {

  const [reservationNameInput, setReservationNameInput] = useState("");
  const reservations = useSelector((state: RootState) => state.reservations.value);
  const Dispatch = useDispatch();

  const handleInput = () =>{

    if(!reservationNameInput) return;
    Dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }
  return (
    <main className={styles.main}>

      <div className='container'>
        <div className='row text-center'>
          <div className='col-4 fs-3 border-end border-secondary'>
            <div>
              <p className=''>Reservation Container</p>
              <div className='fs-5'>
                {reservations.map((name, index) => {
                    return <ReservationCard name={name} index={index} />
                })
                }
              </div>
            </div>
            <div className="mt-5 fs-5">
              <input
                className='w-50'
                value={reservationNameInput}
                onChange={(e) => setReservationNameInput(e.target.value)}
              />
              <button onClick={handleInput} >Add</button>
            </div>
          </div>
          <div className='col-8 fs-5 '>
            <p className='fs-2'>customer food</p>
            <div className='shadow-sm p-3 mb-5 bg-white rounded'>
              <h3>sujon</h3>
              <div className='d-flex justify-content-between'>
                <div className='d-flex flex-wrap gap-3'>
                  <p>Beef Biriyani,</p>
                  <p>Drink,</p>
                  <p>Burger,</p>
                  <p>Borhani</p>
                </div>
                <div className="text-end">
                  <input
                    className='w-25'
                    value="typing"
                  />
                  <button>Add</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
