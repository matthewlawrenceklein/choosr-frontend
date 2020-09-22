import React, { Component } from 'react';
import { EmojiFrown } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {    
    render() {
        return (
            <div className='footer'>
                <p>made with < EmojiFrown className='footer-icon-plain'/> by matthew + marshall + gamecube    
                
                    <a href="http://github.com/matthewlawrenceklein"> 
                        <FontAwesomeIcon className='footer-icon' icon={faGithub} />
                    </a>
                    
                </p> 

            </div>

        );
    }
}

export default Footer;