import React, { Component } from 'react';
import ChoosieCard from './ChoosieCard'
import ReactCardCarousel from 'react-card-carousel';


class Dash extends Component {

   //TODO component did mount should reset all redux choosie values back to default 

    render() {
        return (
            <ReactCardCarousel>
                <div className='choosie-card'>
                    < ChoosieCard title='Delivery' 
                                  image={process.env.PUBLIC_URL + '/delivery.png'}
                                  buttonText='Order Delivery!'
                                  category='cuisine'
                    />
                </div>

                <div className='choosie-card'>
                    < ChoosieCard title='Takeout' 
                                  image={process.env.PUBLIC_URL + '/takeout.png'}
                                  buttonText='Get Takeout!'
                                  category='cuisine'
                    />  
                </div>

                <div className='choosie-card'>
                    < ChoosieCard title='Popular Movies' 
                                  image={process.env.PUBLIC_URL + '/movie.png'}
                                  buttonText="Watch What's Popular!"
                                  category='movies'
                    />
                </div>

                <div className='choosie-card'>
                    < ChoosieCard title='Classic Cinema' 
                                  image={process.env.PUBLIC_URL + '/cinema.png'}
                                  buttonText='Watch a Masterpiece!'
                                  category='cinema'
                    />
                </div>

                <div className='choosie-card'>
                    < ChoosieCard title='Hot New Music' 
                                  image={process.env.PUBLIC_URL + '/music.png'}
                                  buttonText='Discover New Tunes!'
                                  category='music'
                    />
                </div>
            </ReactCardCarousel>

            
        );
    }
}

export default Dash;
