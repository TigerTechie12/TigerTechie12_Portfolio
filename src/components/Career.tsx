import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> milestones
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HackMoney Winner </h4>
                <h5> Async Hackathon By ETHGlobal</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Bulit PayFlow and won a $1000 prize at ETHGlobal HackMoney 2026 (Yellow and Sui tracks). 
              Currently actively seeking internships while building advanced Applied AI and 
              Web3 platforms. Recent projects include Buildify (an application that generates 
              websites from prompts), ChatPay (E2EE chat with integrated payments), and 
              interactive experiences like CyberScape.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ETHGlobal Winner</h4>
                <h5>New Delhi 2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Won the World Chain (World by Sam Altman) Partner Prize of $500 at 
              ETHGlobal New Delhi by building GhostLink. Deepened my expertise in secure full-stack development 
              and AI by engineering platforms like GhostLink (E2EE communication), PayFlow, 
              and DreamSnapAI (an AI-powered photo generation app).
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Winner</h4>
                <h5>Syntax Error (SDS Labs)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Won the Syntax Error hackathon conducted by SDS Labs at IIT Roorkee. 
              This milestone kickstarted my passion for competitive software building, 
              rapid prototyping, and solving complex technical challenges under tight deadlines.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergraduate</h4>
                <h5>IIT Roorkee</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Began my journey at IIT Roorkee. Laid the core foundations of my 
              software engineering knowledge, transitioning into a full-stack developer 
              with a deep, growing focus on modern web architectures, Applied AI, 
              and decentralized technologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;