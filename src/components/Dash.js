import React, { Component } from 'react';
import ChoosieCard from './ChoosieCard'
import ReactCardCarousel from 'react-card-carousel';


class Dash extends Component {

   

    render() {
        return (
            <ReactCardCarousel>
                <div className='choosie-card'>
                    < ChoosieCard title='Delivery' image={process.env.PUBLIC_URL + '/delivery.png'}/>
                </div>

                <div className='choosie-card'>
                    < ChoosieCard title='Takeout' image={process.env.PUBLIC_URL + '/takeout.png'}/>
                </div>

                <div className='choosie-card'>
                    < ChoosieCard title='Classic Cinema' image={process.env.PUBLIC_URL + '/movie.png'}/>
                </div>

                <div className='choosie-card'>
                    < ChoosieCard title='Hot New Music' image={process.env.PUBLIC_URL + '/music.png'}/>
                </div>
            </ReactCardCarousel>

            
        );
    }
}

export default Dash;
