import React, { Component } from 'react'

import Button from 'elements/Button'
import Header from 'parts/Header'
export default class LandingPage extends Component {
    render() {
        return (
            <>
               <Header {...this.props}></Header> 
            </>
        )
    }
}
