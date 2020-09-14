import React, { Component } from 'react';
import { EmojiFrown } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {    
    render() {
        return (
            <div className='footer'>
                <p>made with < EmojiFrown className='footer-icon-plain'/> by matthew + marshall + gamecube    
                
                    <a href="http://github.com/matthewlawrenceklein"> 
                        <FontAwesomeIcon className='footer-icon' icon={faCodeBranch} />
                    </a>
                    
                </p> 

            </div>

        );
    }
}

export default Footer;