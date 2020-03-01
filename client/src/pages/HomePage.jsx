import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../logo-boat.png'

const Wrapper = styled.div`
text-align: center;`

class HomePage extends Component {
    render() {
        return (
            <Wrapper href="https://www.cat-amania.com/">
                <img src={logo} alt="https://www.cat-amania.com/" />
            </Wrapper>
        )
    }
}

export default HomePage;

