import React, {Component} from 'react';
import Carousel from '../components/Carousel.js'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

export default class MainContainer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <Footer />
            </div>
        )
    }
}
