import './Welcome.scss';

// import lendsqr from '../../Asset/welcomePage/lendsqr.png';
import pabloSign from '../../Asset/welcomePage/pablo-sign-in 1.svg';
// import union from '../../Asset/welcomePage/Union.png';
import Logo from '../Logo';

const Welcome = () => {
    return (
        <div className='welcome'>
            <Logo />
            {/* <div className='unionLogo'>
                <img src={union} alt="company's logo" className='union'/>
                <img src={lendsqr} alt="company's name" className='logo'/>
            </div> */}
            <img src={pabloSign} alt="main banner" className='banner'/>
        </div>
    )
}

export default Welcome;
