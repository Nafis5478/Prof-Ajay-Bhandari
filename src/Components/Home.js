import React from "react";
import logo from "../images/ismlogo.png";
import profile from "../images/profile.jpg";
import "./homepage.css";
const Home = () => {
  return (
    <div>
      <div className="intro" style={{ backgroundColor: "#212529" }}>
        <div className="labname" style={{ float: "left" }}>
          <h1 style={{ padding: "2rem" }}>Fluid Flow Labs</h1>
        </div>
        <div className="ismlogo">
          <img src={logo} alt="none" width={"150px"} height={"150px"} />
        </div>
      </div>
      <div className="box">
        <div className="profile">
          <div>
            <img
              src={profile}
              alt="none"
              width={"325px"}
              height={"325px"}
              style={{
                borderRadius: "15rem",
                boxShadow: "5px 5px 5px rgba(0.3, 0.3, 0.3, 0.3)",
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h5>
              PROF. AJAY BHANDARI <br />
            </h5>
            Assistant Professor <br />
            Department of Mechanical Engineering <br />
            Indian Institute of Technology (ISM), Dhanbad
          </div>
        </div>
        <div className="briefintro">
          <div className="summary">
            Curious by and about ‘nature’, I am passionate to understand natural
            flows which are simple but elegant, yet mysteriously challenging!
            Using simple mechanical models, I deal largely with experiments
            supplemented with a blend of theory and numerical simulations. With
            broad interest in Fluid Mechanics, my research activities span
            problems in bio-fluid dynamics with special focus on swimming,
            hovering, flying, flapping foil propulsion, and the mysteries
            revolving around the fish schooling patterns. Simultaneously, I am
            trying to unravel the entrainment dynamics of cloud-like flows and
            turbulent flows.
          </div>
          <div className="summary">
            Currently, my research group at IIT Kanpur – “Natural Flows
            Laboratory” (NatFlows Lab) is curious to explore the inherently
            coupled and intricate interactions between fluid and flexible
            surfaces through extensive experiments and simulations. The larger
            goal is to get insights into the role of flexibility that is
            ubiquitously present in the wings and fins of natural swimming and
            flying animals which they exploit for their advantage during
            cruising, hovering, manoeuvring as well as while schooling and
            flocking.
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="researchinterest">
            <div>
              <h5 style={{color:"#126B9A"}}>Research Interests </h5>
              <hr className="line" />
            </div>

            <br />
            <div>
              {" "}
              Bio-Fluid Mechanics, Computational Oncology, Medical-Image Based
              Numerical Modelling, Patient-specific Computational Models, Cancer
              And Ocular Drug Delivery.
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
