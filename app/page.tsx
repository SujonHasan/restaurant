import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className='container'>
        <div className='row text-center'>
          <div className='col-4 fs-3 border-end border-secondary'>
            <div>
              <p className=''>Reservation Container</p>
              <div className=''>
                <p className='shadow'>Sujon hasan</p>
                <p className='shadow'>hello</p>
                <p className='shadow'>hello</p>
              </div>
            </div>
            <div className="mt-5">
              <input
                className='w-50'
                value="sujon"
              />
              <button>Add</button>
            </div>
          </div>
          <div className='col-8 fs-3 '>
            <p>customer food contailner</p>
            <div className='shadow p-3 mb-5 bg-white rounded'>
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
