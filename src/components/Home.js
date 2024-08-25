import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>SUDHARSAN</span>
            </div>
            <div className="des">
                {/* 30 */}
                Passionate Blockchain Developer with a strong foundation in ReactJS, Solidity, and AWS. Experienced in building decentralized applications and smart contracts. Committed to leveraging blockchain technology to create innovative solutions.
            </div>
            
            <a href="https://drive.google.com/file/d/1jWwMD4z8zSW3hEnto0GK74tR_Lpf8TZ_/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/bot.png" alt="" />
                {/* <div className="info">
                    <div>Blockchain Developer</div>
                    <div>Indian</div>
                    <div>05/27</div>
                    <div>Male</div>
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default Home
