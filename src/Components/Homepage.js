import { Link } from 'react-router-dom'

const style = { margin: '1rem', padding: '1rem', border: '2px solid black' }



export default function Homepage() {
    return (
      <div style={style}>
        <h2>Bloomtechs Kitchen</h2>
        <Link to='pizza'>
        <button id='order-pizza'>
          Grab My Pizza!
        </button>
        </Link>
      </div>

    )}

  