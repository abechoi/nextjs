import React, { forwardRef } from 'react';
import styles from '@/styles/About.module.css';

const About = forwardRef<HTMLDivElement>((_, ref) => {
    return (
      <section className={styles.main} id='about' ref={ref}>
        <div>
            <h1>ABOUT</h1>
        </div>
        <hr />
        <img src={`/me.png`} alt='me'/>
        <div className={styles.bio}>
          <div>
          <p>
            Born in New York to Korean-American heritage, I now reside in sunny California. As a proud USAF veteran, I spent six years stationed at Barksdale AFB as an electronic warfare technician, working on the B-52H. Utilizing my Post-9/11 GI Bill, I pursued higher education, obtaining an associate degree in computer science from Middlesex County College and a bachelor's degree from Chapman University.
          </p>
          </div>
          <div>
          <p>
            Currently, I am thriving as an Operations Engineer at ServiceTitan, while continually exploring diverse side projects that pique my interest. With a passion for learning and growth, I am always eager to embrace new challenges and opportunities.
          </p>
          </div>
        </div>
      </section>
    );
  });
  

export default About;