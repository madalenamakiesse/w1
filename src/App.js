import React from 'react';
import './App.css';
import video from "./u/t.mp4";

import {Parallax, ParallaxLayer} from '@react-spring/parallax';


function reveal(){
  
  let reveals = document.querySelectorAll(".texto");
  for(let i=0; i<reveals.length; i++){
    let wh = window.innerHeight;
    let rt = reveals[i].getBoundingClientRect().top;
    let rp = 100;
    if(rt < wh -rp){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }

    let reveals2 = document.querySelectorAll(".im");
    for(let i=0; i<reveals2.length; i++){
      let wh = window.innerHeight;
      let rt = reveals2[i].getBoundingClientRect().top;
      let rp = 100;
      if(rt < wh -rp){
        reveals2[i].classList.add('active');
      }
      else{
        reveals2[i].classList.remove('active');
      }}
}

function App() {
  window.addEventListener('scroll', reveal);
  return (
    <>
      <Parallax pages={7}>
        <ParallaxLayer speed={1} >
          <div id='j'>
            <video loop muted autoPlay>
              <source src={video} type='video/mp4'></source>
            </video>
          </div>
          <h2 className='texto' id='a'>Angola</h2>
          <h4 id="d1" className='texto'>Um país com maravilhas</h4>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 0.9, end: 1}} factor={2}>
          <h2 className='texto' id='na1'>Deserto do Namibe</h2>
          <h4 id="na" className='texto'>A palavra “Namib” significa na lingua Nama “espaço aberto”. É provavelmente o mais antigo deserto do planeta Terra, tendo uma idade de 80 milhões de anos.</h4>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div id='i11' className='im'></div>
          <div id='i12' className='im'></div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 2.1, end: 3}} factor={4}>
          <h2 className='texto' id="s5">Serra da Leba</h2>
          <h4 id='s2' className='texto'>A <span>Serra da Leba</span> tem  aproximadamente 20 quilómetros de extensão e dispõe de uma altitude de 1800 metros.</h4>
        </ParallaxLayer>
        <ParallaxLayer factor={4} offset={2} speed={0.5} style={{backgroundColor: ' rgb(99, 143, 88)'}}>
          <div id='i13' className='im'></div>
          <div id='i14' className='im'></div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 4.2, end: 5.2}} factor={5}>
          <h2 className='texto' id='m'>Baía dos Tigres</h2>
          <h4 id='ma' className='texto'>A <span>Baía dos Tigres</span> hoje é ilha. As intempéries da natureza, associadas à falta de água, fizeram com que as pessoas que lá habitavam a abandonassem.</h4> </ParallaxLayer>
        <ParallaxLayer factor={4.5} offset={5} speed={1} style={{backgroundColor: ' rgb(111, 163, 170)'}}>
          <div id='i15' className='im'></div>
          <div id='i16' className='im'></div>
          <div id='i17' className='im'></div>
        </ParallaxLayer>
        <ParallaxLayer  factor={6} offset={6} speed={1} style={{backgroundColor: ' rgb(194, 161, 209)', padding:'none', top:'0px'}}>
          <span className='texto'  style={{ padding:'none', top:'3%'}} ><span style={{fontSize:'40px', color: 'black'}}>I'm</span><h2 style={{fontSize:'60px', color: 'white'}}>Madalena Makiesse</h2> <h5 style={{fontSize:'20px', width:'30%', margin:'1%',color: 'white'}}>Thank you for viewing my little project. I hope you are willing to see the next ones I create.</h5></span>
          <span className='texto' style={{ padding:'none', top:'-7%', left:'79%'}}><div style={{fontSize:'25px', color: 'black'}}>Social Media</div><a style={{fontSize:'25px', textDecoration: 'none',color: 'white', margin:'0px', padding:'0px', top:'5%'}} href="https://www.linkedin.com/in/madalena-makiesse-29527a158"><h5>Linkedin</h5></a></span>
        </ParallaxLayer>

      </Parallax>
    </>
  );
}

export default App;
