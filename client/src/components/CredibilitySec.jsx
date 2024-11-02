import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faGithub, faJava, faJs, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const technicalSkills = [
   {
      skill: 'JavaScript',
      icon: (faJs),
      level: 85,
   },
   {
      skill: 'Python',
      icon: (faPython),
      level: 90,
   },
   {
      skill: 'React',
      icon: (faReact),
      level: 78,
   },
   {
      skill: 'Docker',
      icon: (faDocker),
      level: 75,
   },
   {
      skill: 'Java',
      icon: (faJava),
      level: 80,
   },
   {
      skill: 'Node JS',
      icon: (faNode),
      level: 95,
   },
];

const softSkills = [
   {
      skill: 'Communication',
      icon: (<svg viewBox="0 0 128 128">
         <path fill="#291f54" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
      </svg>),
      course: "Coursera",
   },
   {
      skill: 'Communication',
      icon: (<svg viewBox="0 0 128 128">
         <path fill="#291f54" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
      </svg>),
      course: "Coursera",
   },
   {
      skill: 'Communication',
      icon: (<svg viewBox="0 0 128 128">
         <path fill="#291f54" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
      </svg>),
      course: "Coursera",
   },
   {
      skill: 'Communication',
      icon: (<svg viewBox="0 0 128 128">
         <path fill="#291f54" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
      </svg>),
      course: "Coursera",
   },
   {
      skill: 'Communication',
      icon: (<svg viewBox="0 0 128 128">
         <path fill="#291f54" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
      </svg>),
      course: "Coursera",
   },
]

function CredibilitySec() {

   const days = Array(180).fill(true).map((_, i) => (i < 90 ? true : false));

   return (
      <div style={styles.credibilitySec}>
         <h2 style={styles.heading}>Credibility Score</h2>
         <div style={styles.credibilityScore}>
            <h2 style={styles.credibilityScoreValue}>7.8</h2>
            <p style={{ fontSize: "1.2rem" }}>HA<sup>++</sup></p>
         </div>
         <div style={styles.chartBox}>
            <svg width="200" height="200" viewBox="0 0 240 240">
               <path
                  d="M 100 200 a 80 80 0 0 1 0 -155"
                  stroke="#FF7070"
                  strokeWidth="24"
                  strokeLinecap="round"
                  fill="none"
               />
               <path
                  d="M 128 45 a 70 70 0 0 1 65 55"
                  stroke="#FFD700"
                  strokeWidth="20"
                  strokeLinecap="round"
                  fill="none"
               />
               <path
                  d="M 195 122 a 70 70 0 0 1 -22 55"
                  stroke="#50C878"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="none"
               />
               <path
                  d="M 160 188 a 70 70 0 0 1 -39 15"
                  stroke="#800080"
                  strokeWidth="12"
                  strokeLinecap="round"
                  fill="none"
               />
            </svg>
            <div>
               <p style={styles.credListItem}>
                  <span style={{...styles.credBullet, backgroundColor: "#FF7070"}}></span>   
                  Technical
               </p>
               <p style={styles.credListItem}>
                  <span style={{...styles.credBullet, backgroundColor: "#FFD700"}}></span>   
                  Communication
               </p>
               <p style={styles.credListItem}>
                  <span style={{...styles.credBullet, backgroundColor: "#50C878"}}></span>   
                  Capabilities
               </p>
               <p style={styles.credListItem}>
                  <span style={{...styles.credBullet, backgroundColor: "#800080"}}></span>   
                  Accuracy
               </p>
            </div>
         </div>

         {/* Technical Skills */}
         <div>
            <h3 style={{ textAlign: "center", fontWeight: 600, fontSize: '1.5rem', padding: ".5rem 0" }}>My Technical Skills</h3>
            <div style={styles.skillsContainer}>
               {technicalSkills.map((el, i) =>
                  <TechSkillBlock
                     key={i}
                     icon={el.icon}
                     level={el.level}
                     skill={el.skill}
                  />
               )}
            </div>
         </div>

         {/* Soft Skills */}
         <div style={styles.softSkills}>
            <h3 style={{ textAlign: "center", fontWeight: 600, fontSize: '1.5rem', padding: ".5rem 0" }}>My Soft Skills</h3>
            <div style={styles.softSkillContainer}>
               {softSkills.map((el, i) =>
                  <SoftSkillBlock
                     key={i}
                     icon={el.icon}
                     course={el.course}
                     skill={el.skill}
                  />
               )}
            </div>
         </div>

         <div style={styles.streakContainer}>
            <div style={styles.streakHeader}>
               <div>
                  <div style={styles.streakText}>90</div>
                  <div style={styles.dayText}>days streak</div>
               </div>
               <FontAwesomeIcon icon={faGithub} style={styles.githubIcon} />
            </div>
            <div style={styles.gridContainer}>
               {days.map((isActive, index) => (
                  <div
                     key={index}
                     style={isActive ? styles.activeDay : styles.inactiveDay}
                  />
               ))}
            </div>
         </div>

         <img style={styles.logo} src="/logo.png" alt="credibility-score-graph" />

      </div>
   );
}


function TechSkillBlock({ icon, level, skill }) {
   return (
      <div style={styles.skillItem}>
         <FontAwesomeIcon icon={icon} style={styles.techIcon}/>
         <span style={{ fontSize: '1.3rem', fontWeight: 500, paddingTop: '14px' }}>{level}%</span>
         <span style={{ fontSize: '.7rem', color: '#fff9' }}>{skill}</span>
      </div>
   )
}

function SoftSkillBlock({ icon, course, skill }) {
   return (
      <div style={styles.softSkillItem}>
         <div style={styles.softIcon}>
            {icon}
         </div>
         <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "5px", paddingLeft: '5px' }}>
            <span style={{ fontSize: '.85rem', fontWeight: 600 }}>{skill}</span>
            <span style={{ fontSize: '.7rem', color: '#fff9' }}>{course}</span>
         </div>
      </div>
   )
}

const styles = {
   credibilitySec: {
      display: 'flex',
      flexDirection: 'column',
      background: "#141414",
      borderRadius: "24px",
      padding: "24px",
      gap: "5px",
      minWidth: "400px",
      maxWidth: "450px",
      marginTop: "122px",
      // scrollbarWidth: "thin",
      // scrollbarColor: '#eee transparent',
   },
   heading: {
      fontSize: "1.8rem",
      fontWeight: 700,
      display: "inline-block",
      margin: ".5rem auto 0",
      borderBottom: "1px #555 solid"
   },
   credibilityScore: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "cursive",
      fontWeight: "bold"
   },
   credibilityScoreValue: {
      fontSize: '2.8rem',
      color: '#ffeb3b',
      paddingRight: "8px"
   },
   chartBox: {
      background: "#000",
      borderRadius: "1rem",
      minHeight: "200px",
      margin: "1rem 0 .85rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   credListItem: {
      fontSize: "12px",
      position: "relative",
   },
   credBullet: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#fff",
      margin: "0 auto 1rem",
      position: "absolute",
      left: "-15px",
      top: "7px",
   },
   skillsContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      rowGap: '34px',
      padding: '20px',
   },
   skillItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      width: '80px',
      borderRadius: '40px',
      padding: '20px',
      boxShadow: '0 0 10px #fff4',
      margin: '0 auto',
   },
   techIcon: {
      background: "#fff",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      color: "#291f54",
      padding: "8px",
   },
   softSkillContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      padding: '16px 5px',
   },
   softIcon: {
      background: "#fff",
      borderRadius: "20px",
      width: "48px",
      height: "48px",
      padding: "8px",
   },
   softSkillItem: {
      display: 'flex',
      alignItems: 'center',
      boxShadow: '0 0 4px #fff3',
      padding: '10px',
      borderRadius: '40px',
      justifyContent: 'center',
   },
   streakContainer: {
      padding: "30px 20px",
      borderRadius: "10px",
   },
   streakHeader: {
      widthth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px",
   },
   streakText: {
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "1",
   },
   dayText: {
      fontSize: "12px",
      color: "#b3b3b3",
      marginBottom: "10px",
   },
   gridContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(20, 1fr)",
      gap: "3px",
   },
   activeDay: {
      width: "15px",
      height: "15px",
      backgroundColor: "#2ecc71",
   },
   inactiveDay: {
      width: "15px",
      height: "15px",
      backgroundColor: "#3a3a3a",
   },
   githubIcon: {
      width: "32px",
      height: "100%",
   },
   logo: {
      margin: "auto",
      width: "65%",
      height: "110px",
      objectFit: "cover",
   }
};

export default CredibilitySec;
