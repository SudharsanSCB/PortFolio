import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+91 8637476472'
  },{
    title: 'Email',
    value: 'sudharsanSCB@gmail.com'
  },{
    title: 'LinkedIn',
    value: 'https://www.linkedin.com/in/sudharsansubash'
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Connect with me to explore opportunities and collaborations in tech and beyond.
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
       {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              {value.title === 'LinkedIn' ? (
                <a href={value.value} target="_blank" rel="noopener noreferrer" className="contact-link">sudharsansubash.linkedIn</a>
              ) : (
                <div>{value.value}</div>
              )}
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
