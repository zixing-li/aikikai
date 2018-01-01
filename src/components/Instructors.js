import React from 'react';
import sensei from '../assets/Sensei.jpg';
import kim from '../assets/Kim.jpg';
import nacho from '../assets/Nacho.jpg';

const Instructors = () => {
  return (
    <div className="instructors">
      <div className="banner-content">
        <h2 className="banner-title">Instructors</h2>
      </div>
      <div className="instructors-bio">
        <img src={sensei} alt="Sensei" />
        <div style={{textAlign:"center", marginTop:"10px"}}>
          <b>Chief Instructor</b>
          <br/>
          Ken Yamazaki Sensei, Godan & Shidoin
        </div>
        <br/>
        Biography: Ken Yamazaki, 5th dan Aikikai, is the chief instructor of NY Eastside Aikikai, affiliated with United States Aikido Federation. Yamazaki Sensei began Aikido and Zen Buddhism studies in 1989 with Reverend Joseph Jarman, a Buddhist priest and jazz musician; he then continued his training with Doshu Kisshomaru Ueshiba, Fumio Toyoda and many prominent Aikido shihans in Japan and the U.S.  From 2005 to 2012 he was a direct student and uchideshi of Yasuo Kobayashi Shihan, 8th Dan, disciple of Aikido founder, Morihei Ueshiba.  At present, Yamazaki Sensei is a direct student of Yoshimitsu Yamada Shihan, 8th Dan, also a disciple of Morihei Ueshiba.
        <br/>
        Yamazaki Sensei has been instructing Aikido since 1992 and, prior to becoming a Shidoin for U.S. Aikido Federation, has served on the teaching staff of Aikido Association of America and Aikido Kobayashi Dojo.  He is also a world-renowned jazz musician who has been performing professionally since 1978.
        <br/>
        <br/>
        <img src={kim} alt="Kim" />
        <div style={{textAlign:"center", marginTop:"10px"}}>
          <b>Instructor, Children’s Program</b>
          <br/>
          Kim Johnston, Sandan & Fukushidoin
        </div>
        <br/>
        Biography: Kim Johnston, 3rd dan Aikikai, is the instructor for the children’s Aikido program at NY Eastside Aikikai. She has been practicing Aikido for over a decade. Kim is also a Shiatsu practitioner.  Certified by the Ohashi Institute since 1997, Kim was a Shiatsu instructor at the Ohashi Institute as well as the Pacific College of Oriental Medicine. Kim also holds an MFA in modern dance.
        <br/>
        <br/>
        <img src={nacho} alt="Nacho" />
        <div style={{textAlign:"center", marginTop:"10px"}}>
          <b>Instructor</b>
          <br/>
          Nacho Mena, Shodan
        </div>
        <br/>
        Biography:  Nacho Mena, 1st dan Aikikai.  After practicing Judo as a child in Spain, Nacho Mena started learning Aikido when he moved to San Diego in 1996, to work as a Molecular Virologist. He practiced with Coryl Crane Shihan, a student of Kazuo Chiba Shihan, 8th dan. After three years in San Diego, Nacho went to work in Paris, France, where he continued the practice of Aikido with the Birankai Association, founded by students of Chiba Sensei, and obtained the 1st dan Aikikai in 2003. After a break of several years, in which he returned to work in Spain and to the Judo practice, Nacho arrived in New York in 2011, and joined the NY Eastside Aikikai in September 2014.
      </div>
    </div>
  )
}

export default Instructors;