import React from 'react';
import sensei from '../assets/images/Sensei.jpg';
import kim from '../assets/images/Kim.jpg';
import nacho from '../assets/images/Nacho.jpg';
import elizabeth from '../assets/images/Elizabeth.jpg';

const Instructors = () => {
  return (
    <div className="instructors">
      <div className="banner-content">
        <h2 className="banner-title">Instructors</h2>
      </div>
      <div className="instructors-bio">
        <img src={sensei} alt="Sensei" />
        <div style={{textAlign:"center", marginTop:"10px"}}>
          <p><b>Chief Instructor</b></p>
          <p>Ken Yamazaki</p>
        </div>
        <p>Biography: Ken Yamazaki, 5th dan Aikikai, Shidoin, is the chief instructor of NY Eastside Aikikai. He began Aikido and Zen Buddhism studies in 1989 with Reverend Joseph Jarman.  Yamazaki Sensei was also a longtime student of Fumio Toyoda Shihan, and uchideshi (live-in student) of Yasuo Kobayashi Shihan; he has also trained with Doshu Kisshomaru Ueshiba at Aikikai Hombu Dojo; at present, Yamazaki Sensei is a direct student of Yoshimitsu Yamada Shihan, a pioneer in introducing Aikido to North America.  Yamazaki Sensei is also a world-renowned jazz musician, who has performed with a long list of who's who in jazz..</p>
        <br/>
        <img src={kim} alt="Kim" />
        <div style={{textAlign:"center", marginTop:"10px"}}>
          <p><b>Instructor, Children’s Program</b></p>
          <p>Kim Johnston</p>
        </div>
        <p>Biography: Kim Johnston, 3rd Dan Aikikai, Fukushidoin, is the head instructor for the children's program at NYEA.  Kim's classes are fun and energetic, and focus on the personal development of each student.  Kim is also a Shiatsu practitioner (certified by the Ohashi Institute since 1997), and holds an MFA in modern dance.</p>
        <br/>
        <img src={nacho} alt="Nacho" />
        <div style={{textAlign:"center", marginTop:"10px"}}>
          <p><b>Instructor</b></p>
          <p>Nacho Mena</p>
        </div>
        <p>Biography: Nacho Mena, 2nd Dan Aikikai, is an instructor at NYEA; he began Aikido in 1996 with Coryl Crane Shihan, a student of Kazuo Chiba Shihan, 8th Dan.  Nacho is a molecular virologist, and also holds a 4th Dan in Judo.</p>
        <br/>
        <img src={elizabeth} alt="Elizabeth" />
        <div style={{textAlign:"center", marginTop:"10px"}}>
          <p><b>Instructor</b></p>
          <p>Elizabeth Stevens</p>
        </div>
        <p>Biography: Elizabeth Stevens, 1st Dan Aikikai, is an instructor at NYEA; she began Aikido in 2011 with Yamazaki Sensei.  Elizabeth is also an accomplished educator at a prestigious private school in NYC.</p>
      </div>
    </div>
  )
}

export default Instructors;