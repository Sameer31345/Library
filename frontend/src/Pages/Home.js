import React from 'react'

import About from '../Components/About'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import News from '../Components/News'
import PhotoGallery from '../Components/PhotoGallery'
import PopularBooks from '../Components/PopularBooks'
import RecentAddedBooks from '../Components/RecentAddedBooks'
import ReservedBooks from '../Components/ReservedBooks'
import Stats from '../Components/Stats'
import WelcomeBox from '../Components/WelcomeBox'

function Home() {
    return (
        <div id='home' style={{fontSize: "100px", textAlign: "center" , marginTop: "100px"}}>
            {/* <ImageSlider/>
            <WelcomeBox/>
            <About/>
            <Stats/>
            <RecentAddedBooks/>
            <PopularBooks/>
            <ReservedBooks/>
            <News/>
            <PhotoGallery/>
            <Footer/> */}

            Library Management System
        </div>
    )
}

export default Home
