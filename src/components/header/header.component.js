import React,  { useState, useEffect, useRef } from 'react';
import {connect}  from 'react-redux';
import styled from 'styled-components';
import SideMenu from '../sideMenu/sideMenu.component';
import DarkMode from '../darkMode/darkMode.component';
import {gsap, Power3} from 'gsap';
import {ReactComponent as X} from '../../images/x.svg';
import {ReactComponent as Menu} from '../../images/menu.svg'
import {setAlreadyLoaded} from '../../redux/darkmode/darkMode.actions'
import {Link} from 'react-scroll';
import eventActions from '../../actions/events.userActions.js';
import pageActions from '../../actions/pages.userActions.js';
import LanguageChanger from '../language/language.component';
import Logo from '../logo/logo.component';
// import {ReactGA} from '../config.js'
// import {ReactGAInstance} from '../config.js'

const loadStyles = () => {
    
    const Navbar = styled.nav`

    &.active{

        @keyframes shrink{
            from{
            }
            to{
                /* height: 60px; */
                box-shadow: ${p => p.currentState ? `0px 10px 10px #c62ff7` : `0px 10px 10px rgba(23, 28, 40, 0.5)`};
            }
        }
        animation-name: shrink;
        animation-duration: 0.7s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;

    
    }
    font-size: 18px;
    position: fixed;
    width: 100%;
    z-index: 30;
    /* z-index: 30; */
    background-color: ${p => p.currentState ? `#020202` : `#ffff`};
    color: ${p => p.currentState ? `#ffff` : `#000`};
    top: 0;
    
    height: 80px;
    

    
    font-family: RubikBold;
    
    /* background: transparent; */
    /* padding: 0rem calc((100vw - 1300px)/2); */
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 2px solid white;
    

    /* .logo{
        padding-left: 5px;
        padding-right: 5px;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        font-style: italic;
        border-radius: 15px;
        width: 65px;

        display: grid;
        grid-template-columns: repeat(16, 6px);
        grid-template-rows: repeat(13, 6px);

        .logoPS{
            height: auto;
            width: 100%;
        }   
    } */

    .navItems{
        display:flex;
        align-items: center;
        @media (max-width: 769px){
            display: none;
        }

        
        
    }

    

    @media (max-width: 769px){
        justify-content: space-around;
    }

    @keyframes glow{
        from{
        }
        to{
            text-shadow: ${p => p.currentState ? `0px 10px 10px #c62ff7,0px -10px 10px #c62ff7,-5px 0px 10px #c62ff7,5px 0px 10px #c62ff7,-10px 0px 10px #c62ff7,10px 0px 10px #c62ff7;` : `none`} ;
            /* background-color: #fff;
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px); */
            color: ${p => {return(p.currentState ? `#ffff` : `#c62ff7`)}} ;
        }
    }
    @keyframes glowBack{
        from{            
            text-shadow: ${p => p.currentState ? `0px 10px 10px #c62ff7,0px -10px 10px #c62ff7,-5px 0px 10px #c62ff7,5px 0px 10px #c62ff7,-10px 0px 10px #c62ff7,10px 0px 10px #c62ff7;` : `none`} ;
            color: ${p => {return(p.currentState ? `#ffff` : `#c62ff7`)}};  
        }
        to{
            text-shadow: ${p => p.currentState ? `none` : `none`} ;
            color: ${p => p.currentState ? `#ffff` : `#000`} ;
        }
    }

    .navbarLink{
        text-decoration: none;
        padding: 2rem;
    }

    .glow{
        &:hover{

            animation-name:glow;
            animation-duration: 0.2s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
        }
        /* transition: 0.5s; */
        animation-name: glowBack;
        animation-duration: 1.5s;
        animation-timing-function: ease-in-out;
        color: ${p => p.currentState ? `#ffff` : `#000`};
    }


    .linkScroll{
        cursor: pointer;
    }
        

    `;

    // const LinkTo = styled(Link)`
    //     /* color: blue; */
        
    // `;

    const NavItems = styled.div`
        
    `;

    const Collapsed = styled.button`
        display: none;
        
        width: 40px;
        height: 40px;
        /* background-color: red; */
        
        position: fixed;
        right: 0;
        top: 10px;

        justify-self: right;
        justify-content: center;
        align-items: center;
        background-color: transparent;

        min-width: 10px;
        border: 0;
        cursor: pointer;

        @keyframes changeHeader{
            from{}
            to{border: 2px dashed #c62ff7;
            }
        }
        @keyframes changeHeaderBack{
            from{border: 2px dashed #c62ff7;
                }
            to{
                
            }
        }

        &:hover{
            animation-name: changeHeader;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;    
        }

        /* animation-name: changeBack;
        animation-duration: 0.3s; */
        
        /* justify-self: end; */

        @media (max-width: 769px){
            /* display: inline-block;
            position: static; */
            min-width: 20px;
            min-height: 20px;
            display: flex;
            justify-self: end;
            z-index: ${p => p.menuState ? `20` : `auto`};
        }

        .menu{
            width: 100%;
            fill: ${p => p.currentState ? (!p.menuState ? `#ffff` : `#c62ff7`) : (!p.menuState ? `#000` : `#c62ff7`)};
        }
        
        
    `;

    const NavbarLink = styled(Link)`
        /* color: #000; */
        
    `;

    return {Navbar, Collapsed}
}


const Header = ({currentState, alreadyLoaded, setAlreadyLoaded, languageState}) => {

    const [menuState, setMenuState] = useState(false);
    const [scrolled, scrolledState] = useState(false);
    const [animate, animateState] = useState(false);


    // let animate = true
    let changeAnimate = () => {
        animate = false
    }
    // const [width, setWidth] = useState(getWindowDimension())

    let navBar = useRef(null)
    let menuIcon = useRef(null)
    const {Navbar, Collapsed} = loadStyles();

    const showMenu = () => {
        // console.log('papsapdasp');
        if(!menuState){
            eventActions.sideMenuPressed()    
        }
        setMenuState(!menuState)
        animateState(true)
        document.body.style.position = '';
    }


    let headerPart = []

    useEffect(() => {
        // console.log(headerPart[0].parentNode.parentNode)
        // console.log('yoooooo')
        gsap.to(headerPart[0].parentNode.parentNode, {duration: 0.9, height: `60px`, ease: Power3.easeInOut, scrollTrigger: {
            // markers: true,
            toggleActions: "play complete reverse reset",
        }});
        function handleResize() {
            if(window.innerWidth > 769)
                setMenuState(false);
        }
        function handleScroll(){
            if(window.scrollY > 80){
                scrolledState(true);
            }else{
                // scrolledState(false);
            }
        }
        if(!alreadyLoaded){
            headerPart.map((part,index) => {
                gsap.from(part, {duration: (index/2), opacity: 0, y: -60, ease: Power3.easeInOut})
            })   
        }
        if(animate){
            gsap.from(menuIcon, {duration: 0.9, rotateX: 130, rotateY: 130});
        }
        // console.log("kajaja")
        window.addEventListener('resize', handleResize);
        // window.addEventListener('scroll', handleScroll);
    });

    

    return (
       <Navbar className={scrolled ? `active` : ``}  currentState={currentState}>
            <Link spy={true} smooth={true} to='home'>
                {/* <div className="logo glow linkScroll" to='/' onClick={pageActions.homePressed} ref={element => headerPart.push(element)}>
                    <img className="logoPS" src="./images/logos/logoPS.png"></img>
                </div> */}
                <Logo></Logo>
            </Link>
            <div className="navItems">
                <Link className="linkScroll"  spy={true} smooth={true}  to='home' onClick={pageActions.pageLoaded}><div className="navbarLink glow" ref={element => headerPart.push(element)}>{languageState === 'en' ?  `Home` : `Inicio`}</div></Link>
                <Link className="linkScroll" spy={true} smooth={true} to='skills' onClick={pageActions.skillsPressed}><div className="navbarLink glow" ref={element => headerPart.push(element)}>{languageState === 'en' ?  `Skills` : `Maestría en...`}</div></Link>
                <Link className="linkScroll" spy={true} smooth={true} to='about' onClick={pageActions.aboutPressed}><div className="navbarLink glow" ref={element => headerPart.push(element)}>{languageState === 'en' ?  `About` : `Acerca de mí`}</div></Link>
                <Link className="linkScroll" spy={true} smooth={true} to='highlights' onClick={pageActions.projectsPressed}><div className="navbarLink glow" to='/services' ref={element => headerPart.push(element)}>{languageState === 'en' ?  `Projects` : `Proyectos`}</div></Link>
                <DarkMode/>
                <LanguageChanger margin/>
            </div>
            <Collapsed currentState={currentState} menuState={menuState} onClick={showMenu}>
                <div className='menu' ref={element => menuIcon = element}>
                    {menuState ? <X  /> : 
                        <Menu  /> }
                </div>
            </Collapsed>
            <SideMenu setMenuState={setMenuState} menuState={menuState} currentState={currentState} showMenu={showMenu}/>
       </Navbar>
    )
}

const mapDispatchToProps = dispatch => ({
    setAlreadyLoaded: () => dispatch(setAlreadyLoaded())
})

const mapStateToProps = (state) => {
    const {currentState, alreadyLoaded} = state.darkMode
    const {languageState} = state.language
    // console.log('maaaaaaaaaaaaaaaaaaaaan')
    // console.log(currentState)
    return {currentState: currentState, alreadyLoaded: alreadyLoaded, languageState: languageState}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);