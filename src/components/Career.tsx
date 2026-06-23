import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> milestones
        </h2>
 <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5> <a href="https://www.solarsquare.in/homes/?utm_term=solarsquare&utm_campaign=DR_Search_Brand_AllCities_Jan13&utm_source=adwords&utm_medium=ppc&hsa_acc=1384667780&hsa_cam=19566406052&hsa_grp=152005427984&hsa_ad=644801250633&hsa_src=g&hsa_tgt=kwd-831268040081&hsa_kw=solarsquare&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=19566406052&gclid=CjwKCAjw3ejRBhAdEiwADkqPn37u-kDEhIezhNQ5d_fQ_g41DM0tUCQgVM667m4T9ZI0DNwPSk5M3RoCyxsQAvD_BwE"
                 target="_blank"
                rel="noreferrer"
                data-cursor="disable">SolarSquare</a></h5>
              </div>
              <h3>June 2026- September 2026</h3>
            </div>
            <ul>
              <li>Engineered Akagami, an ultra-fast rule engine HTTP service built natively on the Bun runtime and Bun.serve(),
entirely bypassing Node.js/Express overhead to power a real-time solar-sales nudge system.</li>
<li> Designed an in-memory caching registry that resolves complex multi-level taxonomies in exactly two database
queries, achieving zero database I/O during rule evaluation and validation workflows.</li>
<li>Developed a recursive AST validation walker utilizing JSON-Logic to strictly enforce type-safety, allowed operators,
and structural constraints at write-time, fully preventing invalid business rules from persisting to PostgreSQL.</li>
<li>Built a high-throughput runtime evaluation pipeline supporting batch processing, custom set operators, and a
priority-based deduplication algorithm to seamlessly deliver optimized sales interventions.</li>
<li>Implemented custom database exception-mapping middleware via Prisma ORM to intercept and translate internal
errors into precise, client-safe HTTP statuses, integrating structured Winston logs for trace auditing</li>
            </ul>
          </div>


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