import { useState,useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.jpg";
import 'animate.css';
//import TrackVisibility from "react-on-screen";
//import {isVisible} from "@testing-library/user-event/dist/utils";

export const Banner=()=>{
    const[loopNum,setLoopNum]=useState(0);
    const[isDeleting,setIsDeleting]=useState(false);
    const toRotate=["React","Web developer","Android"];
    const[text,setText]=useState('');
    const[delta,setDelta]=useState(300 -Math.random()*100); //delta function tell how fast one letter come after another
    const period=2000; //text one by one print hone ke baad aur one by one delete hone ke beech ka time

    useEffect(()=>{
         let ticker=setInterval(()=>{
            tick();
         },delta)
          return ()=>{clearInterval(ticker)}; //after printing the text clear the interval else screen got hanged
    },[text])

    const tick=()=>{
        let i=loopNum% toRotate.length; //loopnum to take the input array toRotate
        let fullText=toRotate[i];
        let updatedText=isDeleting? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1);
        //agar delete hoga to length will decrease and if not deleting then length will increase

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)  //shows letter delete karne ka speed after one by one letter got deleted
        }
        //agar isDeleting false hai aur updatedText equals fullText hai then delete function active karenge
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        //agar isDeleting true hai aur updatedText empty ho gaya to phir loopnum me 1 add karenge taki next value le sake toRotate array se
        else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500); //one by one letter likhne ka speed
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    {/* xs is for phone. md{6} is for desktop 6 is height. xl is for larger desktop */}
                    <Col xs={12} md={6} xl={7}>
                        {/* <TrackVisibility>
                        {({isVisible})=>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio </span> */}
                        {/* we use {text} to do animation */}
                        <h1>{'Hello abhi welcome to '}<span className="wrap">{text}</span></h1>
                        <p> hello this is the dummy text generated</p>
                        <button onClick={()=>console.log('connect')}>Let’s connect <ArrowRightCircle size={25}/></button>
                        {/* </div>}
                        </TrackVisibility> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}