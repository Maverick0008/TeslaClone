import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/sliceCar/carSlice'
import {useSelector} from 'react-redux'
function Header() {
    const [burgerOpen, setBurgerOpen] = useState(true)
    const cars = useSelector(selectCars)
    // console.log(cars)
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt="tesla-logo" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=> (
                          <p><a key={index} href='#'>{car}</a></p>
                ))}
              
                {/* <p><a href='#'>Model 3</a></p>
                <p><a href='#'>Model X</a></p>
                <p><a href='#'>Model Y</a></p> */}
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
            </RightMenu>
            <CustonMenu onClick={() => setBurgerOpen(!burgerOpen)}/>
            <BurgerNav show={burgerOpen}>
                <CloseWrapper><CustomClose onClick={() => setBurgerOpen(!burgerOpen)}/></CloseWrapper>
                {cars && cars.map((car, index)=> (
                          <li><a key={index} href='#'>{car}</a></li>
                ))}
                <li><a  href='#'>Existing Inventory</a></li>
                <li><a  href='#'>Used inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    p{
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
a{
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`

const CustonMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    list-style: none;
    z-index:16 ;
    padding: 20px;
    text-align: start;
    transform: ${props => props.show ? `translateX(100%)` : `traslateX(0)`};
    transition: transform 0.3s ease-out;
    li {
        padding: 15px 0;

    }
     

`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: right;
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`