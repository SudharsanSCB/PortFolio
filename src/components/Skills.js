import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faAws, faEthereum, faJs, faJava, faGithub } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';
import soliditypng from '../img/soliditypng.png'; // Adjust the path as per your project structure
import { faCube, faJ } from '@fortawesome/free-solid-svg-icons';


function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'Possess foundational knowledge in HTML, capable of creating basic web page structures. Continuously learning to enhance my web development skills.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'Possess a foundational understanding of CSS, enabling basic styling and layout of web pages. Continuously learning and improving to enhance design skills and visual appeal.',
      icon: faCss3
    },
    {
      name: 'Java',
      des: 'Experienced in Java programming language for backend development, including building RESTful APIs and backend services. Familiar with Java Spring Boot framework for rapid application development.',
      icon: faJava // You can choose an appropriate icon for Java

    },
    {
      name: 'ReactJs',
      des: 'Proficient in ReactJS, Redux, React Router, and React Hooks, with experience in building interactive and scalable web applications. Continuously advancing skills to tackle more complex React challenges.',
      icon: faReact
    },
    {
      name: 'GitHub',
      des: 'Proficient in version control using GitHub, including repository management, branching strategies, and collaboration workflows. Experienced in leveraging GitHub for project management and continuous integration.',
      icon: faGithub // You can choose an appropriate icon for GitHub

    },
    {
      name: 'AWS',
      des: 'Expertise in AWS services including EC2 instances for scalable computing, API Gateway for building and managing APIs, and RDS for reliable relational databases in the cloud.',
      icon: faAws
    },
    {
      name: 'IPFS',
      des: 'Knowledgeable in InterPlanetary File System (IPFS) for decentralized file storage and retrieval. Experienced in setting up and managing IPFS nodes and integrating IPFS into web applications.',
      icon: faCube // Replace with appropriate FontAwesome icon or use an image
    },
    {
      name: 'Solidity',
      des: 'Skilled in writing and deploying smart contracts on blockchain networks, including Ethereum. Experienced in Solidity programming language and deploying secure and efficient smart contract solutions.',
      icon: soliditypng // You can choose an appropriate icon for Ethereum

    },
    {
      name: 'EVM',
      des: 'Familiar with the Ethereum Virtual Machine (EVM) and its role in executing smart contracts on the Ethereum blockchain. Experienced in EVM smart contract deployment and functionalities.',
      icon: faEthereum // You can choose an appropriate icon for Ethereum

    }
  ]);

  return (
    <section className='skills' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* Description */}
        With expertise in cutting-edge technologies like ReactJS, Solidity, and AWS. Come Let's have a look at them !!
      </div>
      <div className="list">
      {
          listSkills.map((value, key) => (
            <div className={'item'} key={key} ref={(el) => el && divs.current.push(el)}>
              {typeof value.icon === 'object' ? (
                <FontAwesomeIcon icon={value.icon} />
              ) : (
                <img src={value.icon} alt={value.name} style={{ width: '25px', height: '30px', backgroundColor: '#eee2', padding: '10px', borderRadius: '10px' }}/>
              )}
              <h3>{ value.name }</h3>
              <div className="des">{ value.des }</div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Skills;
