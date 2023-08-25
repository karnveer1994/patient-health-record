import React from 'react';
import Slidder from './form/Slidder'; // Assuming you meant 'Slider' instead of 'Slidder'
import "../App.css";
import Automate from './Automate';
import Department from './Department';
const AboutUs: React.FC = () => {
    const banner: string = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/7-types-of-logos.png?auto=format&q=60&fit=max&w=930";

    return (
        <div>
            <Slidder/>
            <Automate/>
            <div className='reputation_container'>
                <div className='row'>
                    <div className='patient col-6'>
                        <h2 className='boost'>BOOST ONLINE REPUTATION</h2>
                        <h1 className='amplify'>Amplify patients' voice and drive new patient revenue.</h1>
                        <p className='aggregate'>Aggregate and manage patient feedback from over 35 review sites specific to the healthcare industry to best manage your online reputation, drive patient visits, and unlock new revenue.</p>
                        <a className="learn-more-button" href='#'>LEARN MORE {"\u{27A1}"}</a>
                    </div>
                    <div className='sponser col-6'> {/* Corrected the class name to 'sponsor' */}
                        <img alt='sponsers' className="sponsers-image" src={banner}/>
                    </div>
                </div>
            </div>
            <Department/>
        </div>
    );
}

export default AboutUs;
