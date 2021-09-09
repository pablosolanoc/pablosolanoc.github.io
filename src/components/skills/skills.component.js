import React, {useEffect, useRef} from 'react';
import {Section} from '../../generalStyles/general.styles';
import {TitleSection} from '../../generalStyles/general.styles';
import {connect} from 'react-redux';
import {gsap, TimelineLite, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {sectionTitles} from '../../content/texts.content';

import {Container} from './skills.styles';


const SkillsImg = ({images}) => {

    

    return (
        <div className="skillsImages both" >
           {images ? images.map((tech, index) =>  {
                    if (tech === "Express.png" || tech === "CH.png"){
                        return (<img key={`techImage-${index}`} className='express' src={`images/logos/${tech}`} alt="Skill"></img>)
                    }else if(tech === "EJS.png"){
                        return(<span>&lt;%EJS</span>)
                    }else{
                        return (<img key={`techImage-${index}`} src={`images/logos/${tech}`} alt="Skill"></img>)
                    }
                }) : ``
            }  
        </div>
    )
}



const Skills = ({skillSet, toolSet, skills, tools, currentState, languageState}) => {

    // gsap.registerPlugin(ScrollTrigger);
    let skillAnimated = [];
    let title = useRef(null);

    const timeline = new TimelineLite();
    const timeline2 = new TimelineLite();

    useEffect(() => {
        
        
        
        
        // skillAnimated.map((skill) => {
        gsap.from(skillAnimated, {duration: 0.9, opacity: 0.0, scale: 0.1,  ease: Power3.easeInOut, scrollTrigger: {
            trigger: skillAnimated,
            // start: "5% 20%",
            // end: "5% 50%",
            // markers: true,
            toggleActions: "play none none none",
        }},);

        // })
        
        
        
    })

    let set = skillSet
    if(!skillSet){
        set = toolSet
    }

    return (

       <Container className="todo" skills={skills} tools={tools} currentState={currentState}>
            <TitleSection className="titleSkillsTools" left={skills ? true : false}>
                <div  ref={element => title = element}>
                    {skills ? sectionTitles[languageState][1] : sectionTitles[languageState][2]}
                </div>
            </TitleSection>
                { 
                    set.map((skill, index) => (
                        <div key={index} className="skills" ref={element => skillAnimated.push(element) }>
                            <div className="skill both">{skill.name}</div>
                            <SkillsImg images={skill.images}></SkillsImg>
                        </div>
                    ))
                }
       </Container>
    )
}

const mapStateToProps = (state) => {
    const {currentState} = state.darkMode
    const {languageState} = state.language
    return {currentState: currentState, languageState: languageState}
}


export default connect(mapStateToProps)(Skills);

