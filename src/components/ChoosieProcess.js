import React, { Component } from 'react';
// import '../App.css';
import { connect } from 'react-redux'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { ArrowRightCircle } from 'react-bootstrap-icons';






class ChoosieProcess extends Component {

    state = {
        cuisine : [ 'thai', 'chinese', 'japanese', 'korean', 'vietnamese', 'indian', 
                     'mexican', 'tapas', 'bbq', 'american', 'burgers', 'pizza',
                     'greek', 'italian'
                    ],
        movies : [],
        albums : [],
        numChoosers : 0,
    }
    handleNum = (e) => {
        
        this.setState({
            numChoosers : parseInt(e.target.value)
        })
    }
 
    render() {
        return (
            <div className='app'>
                < NavBar />
                    <h3> How Many Choosers?</h3>
                    <input className='chooser-num-select' type='number' max='4' onChange={this.handleNum}></input>
                    <br></br>

                { this.state.numChoosers === 1 ?
                 <div>
                     <input className='chooser-input'type='text' placeholder='Enter Chooser 1 Name'></input> 
                    <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>

                 : 
                 null }

                { this.state.numChoosers === 2 ?
                 <div>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 3 ?
                 <div>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 3 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>
                 : 
                 null }

                { this.state.numChoosers === 4 ?
                 <div>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 1 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 2 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 3 Name'></input> 
                     <br></br>
                     <input className='chooser-input' type='text' placeholder='Enter Chooser 4 Name'></input> 
                     <br></br>
                     <Link to="/choosie/start">
                        <ArrowRightCircle className='nav-icon'/>
                    </Link>
                 </div>
                 : 
                 null }





                < Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj: state.userObj,
        loggedIn: state.loggedIn,
        setCategory: state.setCategory
    }
  }

export default connect(mapStateToProps, null)(ChoosieProcess)
