import profilePic from "./assets/pfp.jpg"

function Card(){
    return(
        <div className = "card">
            <img alt="profil picture" src={profilePic}></img>
            <h1>Ramy Garici</h1>
            <p>CS Student</p>

        </div>


    );
}

export default Card