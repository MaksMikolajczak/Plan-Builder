import landingImage from '../assets/images/landingImage.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.sgsdgsa dhdfh 
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={landingImage} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing