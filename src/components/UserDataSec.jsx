import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function UserDataSec() {

  const [name, setName] = useState("David Rakoshi"); // initial name
  const [isEditing, setIsEditing] = useState(false); // toggle edit mode

  // Handlers for name editing
  const handleNameClick = () => {
    setIsEditing(true); // enable editing mode on click
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNameBlur = () => {
    setIsEditing(false);
    // alert(`Name is ${name}`); // show alert with the new name
  };

  return (
    <div style={styles.leftSection}>

      {/* This is the header section */}
      <div style={styles.headerContainer}>
        <h1 style={styles.dashboardText}>DASHBOARD</h1>
        <span style={styles.poweredText}>POWERED BY <br/><span style={styles.moronsText}>THE MORONSS</span></span>
      </div>

      {/* This is the body section */}

      <div style={styles.bodyContainer}>

        <div style={styles.profilePart}>  {/*This is the profile section*/}
          <div style={styles.profile}>
            <img src="https://thumbs.dreamstime.com/b/arms-crossed-designer-portrait-happy-man-fashion-pride-confidence-studio-trendy-model-male-person-arms-crossed-321909507.jpg" alt="" style={styles.profile_Icon}/>
            
            {isEditing ? ( // Toggle between display and edit mode
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                style={{ ...styles.profile_Name}}
                autoFocus
              />
            ) : (
              <h2 onClick={handleNameClick} style={styles.profile_Name}>{name}</h2> // Displaying the name normally
            )}


            <h5 style={styles.profile_Location}>Kolkata</h5>
            <div style={styles.socialPlatformsIcon}>
              <FontAwesomeIcon icon={faLinkedin} style={styles.socialIcon} />
              <FontAwesomeIcon icon={faGithub} style={styles.socialIcon} />
              <FontAwesomeIcon icon={faTwitter} style={styles.socialIcon} />
            </div>
            <button style={styles.buttonProfile}>Find Me Here</button>
          </div>
        </div>
        
        <div style={styles.description}> {/*This is the description-1 section*/}
          <div style={styles.allDescription}>
            <h2 style={styles.allDescription_heading}>A FULL STACK DEVELOPER</h2>
              <div style={styles.allDescription_bio_details}>
                <h4 style={styles.allDescription_bio_detailsText}>PROGRAMMING LANGUAGE</h4>
                <h4 style={styles.allDescription_bio_detailsText}>4</h4>
              </div>
              <div style={styles.allDescription_bio_details}>
                <h4 style={styles.allDescription_bio_detailsText}>DEVELOPMENTS TOOLS</h4>
                <h4 style={styles.allDescription_bio_detailsText}>6</h4>
              </div>
              <div style={styles.allDescription_bio_details}>
                <h4 style={styles.allDescription_bio_detailsText}>YEARS OF EXPERIENCE</h4>
                <h4 style={styles.allDescription_bio_detailsText}>1</h4>
            </div>

              <div style={styles.allDescription_bio_container}>
                <div style={styles.allDescription_bio_container_details}>
                  <div style={styles.allDescription_bio_container_details_all}>
                    <h3 style={styles.allDescription_bio_container_text}>Leetcode</h3>
                    <div style={styles.allDescription_bio_container_line}>
                      <div style={styles.leetcode}></div>
                    </div>
                  </div>
                  <div style={styles.allDescription_bio_container_details_all}>
                    <h3 style={styles.allDescription_bio_container_text}>HackerRank</h3>
                    <div style={styles.allDescription_bio_container_line}>
                      <div style={styles.hackerrank}></div>
                    </div>
                  </div>
                  <div style={styles.allDescription_bio_container_details_all}>
                    <h3 style={styles.allDescription_bio_container_text}>CodeChef</h3>
                    <div style={styles.allDescription_bio_container_line}>
                      <div style={styles.codechef}></div>
                    </div>
                  </div>
                  <div style={styles.allDescription_bio_container_details_all}>
                    <h3 style={styles.allDescription_bio_container_text}>Contributions</h3>
                    <div style={styles.allDescription_bio_container_line}>
                      <div style={styles.contributions}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div style={styles.profilePart_description}> {/*This is the description-2 section*/}
          <div style={styles.profilePart_alldescription}>
            <p style={styles.profilePart_Details}>I&apos;m a full stack developer based in <span style={styles.IndiaText}>India</span>. Calm over chaos, experimental over predictable, learning over consuming.</p>
            <p style={styles.profilePart_Details_heading}>NOW</p>
            <p style={styles.profilePart_Details}>Freelancing, building things with Framer while looking for my next thing.</p>
            <p style={styles.profilePart_Details_heading}>PREVIOUSLY</p>
            <p style={styles.profilePart_Details}>Founding Designer at <span style={styles.NexacoreText}>NexaCore</span> & <span style={styles.NexacoreText}>Analog.</span></p>
            </div>
        </div>
      </div>

      {/* This is the body video section */}
      <div style={styles.bodyvedio_container}>
        <video style={styles.videoFrame} controls>
          <source src="/interview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

const styles = {
  leftSection: {
    display: "flex",
    flexDirection: "column",
  },
  headerContainer: {
    display: 'flex',
    padding: '20px 30px',
    borderRadius: '10px',
  },
  dashboardText: {
    fontSize: '3.5rem',
    fontWeight: '900',
    color: '#FFFFFF',
    margin: 0,
  },
  poweredText: {
    marginTop: "10px",
    fontSize: '0.625rem',  
    fontWeight: '200',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  moronsText: {
    color: '#d4a03a',
    fontWeight: '300',
  },
  bodyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    width: "95%",
    background: "#141414",
    borderRadius: "15px",
    padding: '20px 20px',
    marginLeft: "50px",
  },
  profilePart: {
    flex: "0.29",
    alignItems: "center",
    justifyContent: "center",

  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 8px" ,
  },
  profile_Icon: {
    height: "120px",
    width: "120px",
    border: "2px solid gray",
    borderRadius: "120px",
    background: "Gray",
    objectFit: "cover",
  },
  profile_Name: {
    fontSize: '1.5625rem', 
    fontWeight: "700",
    marginTop: "20px"
  },
  profile_Location: {
    fontSize: '1.0rem', 
    fontWeight: "200",
    marginTop: "5px"
  },
  socialPlatformsIcon: {
    display: 'flex',
    gap: '60px',
    marginTop: "15px"
  },
  socialIcon: {
    fontSize: '1.25rem',
    color: '#FFFFFF',
    cursor: 'pointer',
  },
  buttonProfile: {
    cursor: 'pointer',
    width: "90%",
    height: "35px",
    fontSize: '1.0rem', 
    fontWeight: "700",
    color: "black",
    background: "#d4a03a",
    border: "2px solid #d4a03a",
    borderRadius: "14px",
    marginTop: "20px"
  },
  description: {
    flex: "0.42",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "0.5px solid gray",
    borderRight: "0.5px solid gray",
  },
  profilePart_description: { 
    flex: "0.29",
  },
  profilePart_alldescription: { 
    padding: "10px",
  },
  allDescription: {
    display: "flex",
    alignItems: "center",
    justifyContent:  "center",
    flexDirection: "column",
    padding: "5px 8px",
   },
  allDescription_heading: {
    fontSize: '1.6rem', 
    fontWeight: "500px",
    borderBottom: "0.5px solid grey",
   },
  allDescription_bio_details: {
    display: "flex",
    marginTop: "12px",
    width:"95%",
    justifyContent: "space-between",
   },
  allDescription_bio_detailsText: {
    fontSize: '0.9rem', 
    fontWeight: "100",
   },
  allDescription_bio_container: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    border: "2px solid gray",
    borderRadius: "10px",
    color: "#ffffff",
    width: "98%",
  },
  allDescription_bio_container_details: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  allDescription_bio_container_details_all: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  allDescription_bio_container_text: {
    fontSize: "1.1rem",
     fontWeight: "bold",
    color: "#ffffff",
    width: "120px",
  },
  allDescription_bio_container_line: {
    flex: "1",
    height: "8px",
    backgroundColor: "#444",
    borderRadius: "5px",
    overflow: "hidden",
  },
  leetcode: {
    backgroundColor: "#FF6B6B",
    width: "80%",
    height: "100%",
    borderRadius: "5px",
  },
  hackerrank: {
    backgroundColor: "#1FCF76",
    width: "50%",
    height: "100%",
    borderRadius: "5px",
  },
codechef: {
  backgroundColor: "#C967FF",
    width: "90%",
    height: "100%",
    borderRadius: "5px",
},
contributions: {
  backgroundColor: "#FFD449",
  width: "60%",
  height: "100%",
  borderRadius: "5px",
},
 profilePart_Details: {
    color: "gray",
    fontSize: '1.05rem', 
   },
   profilePart_Details_heading: {
    fontSize: '1.05rem', 
    fontWeight: "700",
    marginTop: "10px",
    marginBottom: "7px"
   },
   IndiaText: {
    color: "white",
   },
   NexacoreText: {
    color: "white",
    borderBottom: "1px solid white"
   },
   bodyvedio_container: {
    display: "flex",
    height: "50%",
    width: "95%",
    background: "#141414",
    borderRadius: "15px",
    padding: '20px 30px',
    marginTop: "30px",
    marginLeft: "50px",
    justifyContent: "center",
    alignItems: "center",
   },
   videoFrame: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  },
};

export default UserDataSec;

