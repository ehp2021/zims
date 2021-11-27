import Carousel2 from '../mini/Carousel2';
import Carousel from '../mini/Carousel';
import Sidebar from '../mini/Sidebar';
import { useMoralis } from 'react-moralis';
import Video from '../../assets/videos/bg-video.mp4';
import './Home.css'

const Home = () => {
    const { user } = useMoralis(); 
    return (
        
        <div className='container'>
            <div className="sidebar-container">
                <Sidebar style={{width:'20%'}}/>
            </div>
            <div className="carousel-container">
                <Carousel style={{width:'80%'}} />
                {/* <Carousel2 /> */}
            </div>
        </div>
    )
};

export default Home;

/*
<>
        <div className = 'hero__bg'>
        <video className = 'hero__bg__video'
        autoPlay loop muted src = { Video }
        type = 'video/mp4' >
        </video><div className = 'fade-video' > </div></div>

*/