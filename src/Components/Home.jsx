import profilepic from "../Images/profile.png"
export default function Home(){
    return(
        <div className="home" id = "Home">
        <div>
            <img
            src= {profilepic}
            alt="Profile"
            className="profilepic"
            />
            <h2 className="profile-name">Nitesh Kumar Shah</h2>
            <p className="profile-title">Under-grad student | ML enthusiast</p>
            <div className="social-icons">
            </div>
        </div>
      </div>
    )
};
