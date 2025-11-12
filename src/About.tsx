function About() {
    return (
            <div className="card" style={{ maxWidth: "400px" }}>
                <h3><i className="fa-solid fa-address-card"></i> About</h3>

                <img src="/mii.png" alt="me" style={{ height:'100px', float:'left' }} ></img>

                <p style={{ textAlign: "left", fontFamily: "roboto, sans-serif" }}>
                    Soy <b>Iván Mansilla</b>, tengo 21 años, soy estudiante de 3er año de Ingeniería Civil en Computación en la Universidad de Magallanes. También soy programador y desarrollador de juegos aficionado.
                </p>
            
            </div>
    );
}

export default About;