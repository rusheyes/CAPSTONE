import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/main.css';

const heroData = [
  {
    id: 1,
    title: 'THE PERFECT PARTNER FOR YOUR GROWING BUSINESS',
    description: 'Establish a partnership with Zalapi! to provide tailored training sessions on effective financial record-keeping practices. Collaborate with financial advisors and institutions to create a financial planning framework that helps businessmen anticipate and manage economic fluctuations. Develop a comprehensive tax benefits guide in partnership with Zalapi!, outlining available incentives and deductions.',
    link: '/about'
  },
  {
    id: 2,
    title: 'START YOUR FUTURE FINANCIAL PLAN',
    description: 'Establish a partnership with Zalapi! to provide tailored training sessions on effective financial record-keeping practices. Collaborate with financial advisors and institutions to create a financial planning framework that helps businessmen anticipate and manage economic fluctuations. Develop a comprehensive tax benefits guide in partnership with Zalapi!, outlining available incentives and deductions.',
    link: '/about'
  },
  {
    id: 3,
    title: 'ENJOY THE DIFFERENCE',
    description: 'Establish a partnership with Zalapi! to provide tailored training sessions on effective financial record-keeping practices. Collaborate with financial advisors and institutions to create a financial planning framework that helps businessmen anticipate and manage economic fluctuations. Develop a comprehensive tax benefits guide in partnership with Zalapi, outlining available incentives and deductions.',
    link: '/about'
  },
];

const AppHero = () => {
  return (
    <section>
      <Carousel interval={3000} /* 3000 milliseconds = 3 seconds */>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <video
              id="herodes"
              className="d-block w-100"
              autoPlay
              loop
              muted
            >
              <source src={require('../images/main.mp4')} type="video/mp4" /> {/* Provide the correct path to your video */}
              Your browser does not support the video tag.
            </video>
            <Carousel.Caption>
              <h3 className='text'>{hero.title}</h3>
              <p className='text2'>{hero.description}</p>
              <a id='btndes' className='btn' href={hero.link}>
                Learn More <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default AppHero;
