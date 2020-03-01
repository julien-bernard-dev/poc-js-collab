import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo-cat.jpg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://www.cat-amania.com/">
                <img src={logo} width="50" height="50" alt="https://www.cat-amania.com/" />
            </Wrapper>
        )
    }
}

export default Logo
