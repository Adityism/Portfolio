import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Projectory</h4>
                <h5>Founder</h5>
              </div>
              <div className="career-date-inline">Jan'25 – Present</div>
            </div>
            <p>
              Built and shipped 25+ full-stack and AI-based software systems for
              real clients across domains with 7-day MVP delivery cycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IBM</h4>
                <h5>Project Intern – Industrial Automation & Data Systems</h5>
              </div>
              <div className="career-date-inline">Jun'25 – Aug'25</div>
            </div>
            <p>
              Designed NLP-powered classification systems using Sentence-BERT on a
              2M+ record corpus to drive enterprise-level AI automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>‘Ek Pahel’ Welfare Society</h4>
                <h5>Web Dev & Outreach Intern</h5>
              </div>
              <div className="career-date-inline">Jun'23 – Aug'23</div>
            </div>
            <p>
              Rebuilt NGO website & taught 50+ students HTML/CSS/Python as part of
              a grassroots digital empowerment initiative.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
