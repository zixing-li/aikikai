import React from 'react';
import schedule from '../assets/schedule.jpg';
import fee from '../assets/fee.jpg';

const Schedule = () => {
  return (
    <div className="schedule-fees">
      <div className="banner-content">
        <h2 className="banner-title">Schedule & Fee</h2>
      </div>
      <div className="schedule-fees-section">
        <div className="schedule-info">
          Prospective students should observe a class before deciding to join as a member. Upon becoming a member, beginners may undertake their study at any time during the month. Classes are unlimited for members.
          <br/>
          Promotion tests are conducted three times a year for both adults and children. Aikido is non-competitive, and testing is optional; however, if you wish to be promoted, it is important to attend class regularly. In order to make progress, students are encouraged to train at least three times a week. Adult kyu ranking (white belts) is awarded by USAF, and upon reaching black belt level, the rank is awarded by the Aikikai Foundation, Tokyo, Japan.
        </div>
        <img src={schedule} alt="schedule" className="info-pic" />
        <img src={fee} alt="fee" className="info-pic" />
        <img src={require('../assets/o-1.png')} alt="" />
      </div>
    </div>
  )
}

export default Schedule;