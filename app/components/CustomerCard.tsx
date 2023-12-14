import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../GlobalRedux/features/customerSlice';

interface CustomerCardType {
  id: string,
  name: string,
  food: string[],
}

function CustomerCard({ id, name, food }: CustomerCardType) {

  const Dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState('');

  const handleInput = (e:any) => {
    e.preventDefault();
    if (!customerFoodInput) return;
    Dispatch(addFoodToCustomer({
      id,
      food: customerFoodInput
    }))
    setCustomerFoodInput("");
  }

  return (
    <div className='shadow-sm p-2 mb-5 bg-white rounded'>
      <h3>{name}</h3>
      <div className='justify-content-between'>
        <div className='d-flex flex-wrap'>
          {food.map((food) => {
            return <p className='pe-3'>{food}</p>
          })}
        </div>
        <div className="">
          <form action="" onSubmit={handleInput}>
            <input
              className='w-50'
              value={customerFoodInput}
              onChange={(e) => setCustomerFoodInput(e.target.value)}
            />
            <button type='submit' >Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard