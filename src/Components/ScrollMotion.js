import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut, Delay } from "react-scroll-motion";
import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import cardOne from '../assets/Card.png'
import ticketCard from '../assets/ticketCard.png'
import Event from '../assets/Event.png'
import Reservation from '../assets/Reservation.png'
import toDo from '../assets/To Do.png'
import Navbar from "./NavBar";

const ScrollMotion = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const ZoomInScrollIn = batch(StickyOut(), FadeOut(), ZoomOut());
    const FadeUp = batch(Fade(), Move(), Sticky());

    

    return (
        <div className="main-background" >
            <Navbar/>
            <ScrollContainer>
            <div className="main-scrolldiv">
            <ScrollPage>
                    <Animator animation={batch(Sticky(), Move(0, -70), Zoom(0.1, 1.2))}>
                        <span style={{ fontSize: "50px" }}><img src={Logo} /></span>
                    </Animator>
                </ScrollPage>
                
            </div>
              
              <div className="" style={{ background: 'black'}}>
              <ScrollPage>
                    <Animator animation={FadeUp}>
                    <Animator animation={MoveIn(-1000, 0)}>
                        <div className="card-one-div">
                               <div><img src={cardOne}/></div>
                               <div className="upcoming-events"> 
                               <img src={Event}/>
                               </div>
                               <div className="ticket-card">
                               <img src={ticketCard}/>
                               </div>
                                </div>
                                </Animator>
                                <div className="">
                        <span className="home-text">Unlock Seamless<br/> Efficiency </span><br/>
                        <span style={{ fontSize: "40px" }}><button className="Join-waitlist">Join Waitlist</button></span>
                        </div>
                        <Animator animation={Move(1000, 0)}>
                            <div className="todo"><img src={toDo}/></div>
                            <div className="reservation">
                            <img src={Reservation}/>
                            </div>
                            <div className="event-right">
                                <img src={Event}/></div></Animator>
                    </Animator>
                
     
                </ScrollPage>
              
              </div>
             
             
            </ScrollContainer>
        </div>
    );
};

export default ScrollMotion;