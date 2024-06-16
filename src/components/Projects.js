import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Raven: An NFT based Land Records System',
    des: 'Raven is a decentralized land records DApp utilizing NFTs on blockchain for a secure and transparent registry system.',
    mission: 'Smart Contract Developer, ReactJs Developer and Project lead',
    language: 'HTML5, CSS3, React JS, Solidity,...',
    images: '/project1.PNG'
  },
  {
    name: 'Sigma Compliance: Life-science Records System',
    des: 'Sigma Compliance is a novel Dapp that creates Immutable life-sciences records via Blockchain and Veeva vault.',
    mission: 'ReactJs Developer and Back-end Developer',
    language: 'HTML5, CSS3, React JS, IPFS, Java Springboot, Solidity, AWS...',
    images: '/project2.PNG'
  },
  {
    name: 'Mercury Finance: A framework centered around memecoins.',
    des: 'Mercury Finance is a novel meme coin framework that enhances stability of meme price that is otherwise volatile ',
    mission: 'ReactJs Developer and Smart Contract Developer',
    language: 'HTML5, CSS3, React JS, Solidity...',
    images: '/project2.PNG'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Explore my innovative projects showcasing expertise in cutting edge technologies and creative problem-solving.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
