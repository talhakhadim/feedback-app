
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function About() {
  return (
    <Card>
      <div className='about'>
        <h1 style={{textAlign:'center'}}>About Us</h1>
        <p>Its a React app for users to give reviews and 
          rating to our services.</p>
          <Link to='/'>Go to Home</Link>

      </div>
    </Card>
  )
}

export default About