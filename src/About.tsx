function About() {
    return (
            <div className="card" style={{ maxWidth: "400px" }}>
                <h3><i className="fa-solid fa-address-card"></i> About</h3>

                <img src="/mii.png" alt="me" style={{ height:'100px', float:'left' }} ></img>

                <p style={{ textAlign: "left", fontFamily: "roboto, sans-serif" }}>
                    I'm <b>Iván Mansilla</b>, I'm 21 years old, I'm a 3rd year Computer Engineering student at the University of Magallanes. I'm also a hobbystic programmer and aspiring game developer
                </p>
            
            </div>
    );
}

export default About;