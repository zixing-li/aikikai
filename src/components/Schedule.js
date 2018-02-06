import React from 'react';
import fee from '../assets/images/fee.jpg';
import postcard from '../assets/images/2018 New Trial Postcard.jpg';

const Schedule = () => {
  return (
    <div className="schedule-fees">
      <div className="banner-content">
        <h2 className="banner-title">Schedule & Fees</h2>
      </div>
      <div className="schedule-fees-section">
        <div className="schedule-info">
          Prospective students should observe a class before deciding to join as a member. Upon becoming a member, beginners may undertake their study at any time during the month. Classes are unlimited for members.
          <br/>
          Promotion tests are conducted three times a year for both adults and children. Aikido is non-competitive, and testing is optional; however, if you wish to be promoted, it is important to attend class regularly. In order to make progress, students are encouraged to train at least three times a week. Adult kyu ranking (white belts) is awarded by USAF, and upon reaching black belt level, the rank is awarded by the Aikikai Foundation, Tokyo, Japan.
        </div>
        <div className="schedule-section">
          Schedule <hr/>
          <table>
            <tr>
              <th></th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
            <tr>
              <td><b>5:30-6:15p</b></td>
              <td></td>
              <td>Kids (age 8-14) Johnston</td>
              <td></td>
              <td>Kids (age 8-14) Mena</td>
              <td></td>
            </tr>
            <tr>
              <td><b>7:00-8:00p</b></td>
              <td>All levels Johnston</td>
              <td>All levels Yamazaki</td>
              <td>All levels Mena/Stevens</td>
              <td>All levels Yamazaki</td>
              <td>All levels Yamazaki</td>
            </tr>
          </table>
          <table>
            <tr>
              <th></th>
              <th>Sat</th>
            </tr>
            <tr>
              <td><b>10:30-11:15a</b></td>
              <td>Kids (age 8-14) Stevens</td>
            </tr>
            <tr>
              <td><b>11:30-1:00p</b></td>
              <td>Aikido&Weapons Yamazaki</td>
            </tr>
          </table>
        </div>
        <div className="fee-section">
          Fees <hr/>
          <img src={fee} alt="fee"/>
        </div>
        <div className="postcard-section">
          Trial Postcard <hr/>
          <img src={postcard} alt="postcard"/>
        </div>
      </div>
    </div>
  )
}

export default Schedule;