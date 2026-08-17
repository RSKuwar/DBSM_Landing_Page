import './style.css';

class DBSMApp {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.currentView = 'home';
    this.totalFrames = 120;
    this.frames = [];
    this.loadedFramesCount = 0;
    this.currentFrameIndex = 0;
    this.targetFrameIndex = 0;

    this.initHTML();
    this.preloadWebPFrames();
    this.setupNavigation();
  }

  initHTML() {
    this.appContainer.innerHTML = `
      <div class="content-wrapper">
        <!-- Minimal Navbar -->
        <header class="navbar" id="navbar">
          <a class="nav-logo" data-view="home">
            DB<span>SM</span>
          </a>
          <ul class="nav-menu">
            <li><a class="nav-link active" data-view="home">Home</a></li>
            <li><a class="nav-link" data-view="about">About Us</a></li>
            <li><a class="nav-link" data-view="campus-tour">Campus Tour</a></li>
            <li><a class="nav-link" data-view="courses">Courses</a></li>
            <li><a class="nav-link" data-view="student-life">Student Life</a></li>
            <li><a class="nav-link" data-view="faculty">Faculty & Team</a></li>
          </ul>
          <button class="nav-btn-champagne" data-view="courses">Explore DBSM</button>
        </header>

        <!-- Main Dynamic View Container -->
        <main id="main-content">
          ${this.renderHomeView()}
        </main>

        <!-- Course Quick Info Modal Container -->
        <div class="modal-backdrop" id="course-modal-backdrop">
          <div class="modal-card">
            <button class="modal-close-btn" id="modal-close-btn">&times;</button>
            <div id="modal-content"></div>
          </div>
        </div>

        <!-- Minimal Footer -->
        <footer class="footer">
          <div class="footer-top">
            <div>
              <div class="footer-logo">DBSM <span>BENGALURU</span></div>
              <p class="footer-sub">Don Bosco Skill Mission. Architects of the Future. 75,000+ Sq. Ft. State-of-the-Art Skill & Innovation Campus.</p>
            </div>
            <div class="footer-links">
              <div class="footer-col">
                <h4>Navigation</h4>
                <ul>
                  <li><a data-view="home">Home</a></li>
                  <li><a data-view="about">About Us</a></li>
                  <li><a data-view="campus-tour">Campus Tour</a></li>
                  <li><a data-view="courses">Courses Overview</a></li>
                  <li><a data-view="student-life">Student Life</a></li>
                  <li><a data-view="faculty">Faculty & Team</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Course Pages</h4>
                <ul>
                  <li><a data-view="ev-course">EV Course</a></li>
                  <li><a data-view="aws-course">AWS re/Start Cloud</a></li>
                  <li><a data-view="dcom-course">DCOM Data Centre</a></li>
                  <li><a data-view="gsa-course">GSA Hospitality</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Contact & Location</h4>
                <ul>
                  <li>Don Bosco Skill Mission Campus</li>
                  <li>Bengaluru, Karnataka</li>
                  <li>info@dbsm.dbtech.in</li>
                  <li>+91 (080) 2847 8000</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2026 Don Bosco Skill Mission. All Rights Reserved.</p>
            <p>120 WebP Smooth Canvas Frame Scrubbing</p>
          </div>
        </footer>
      </div>
    `;
  }

  /* -------------------------------------------------------------
     1. HOME PAGE
  ------------------------------------------------------------- */
  renderHomeView() {
    return `
      <!-- CINEMATIC SCROLL-CONTROLLED WEBP FRAME CANVAS HERO CONTAINER -->
      <section class="cinematic-hero-container" id="hero-scroll-container">
        <div class="sticky-canvas-viewport">
          <canvas id="hero-frame-canvas" class="hero-frame-canvas"></canvas>
          <div class="video-gradient-overlay"></div>
          
          <div class="hero-overlay-content">
            <div class="hero-content" id="hero-text">
              <span class="hero-subtitle">DON BOSCO SKILL MISSION</span>
              <h1 class="hero-title">
                Empowering Skills.<br>
                Building Futures.
              </h1>
              <p class="hero-description">
                Where skill, technology and human potential come together to build the workforce of tomorrow. The Pursuit of Knowledge, Refined.
              </p>
              <div class="hero-nav-pills">
                <button class="nav-btn-champagne" data-view="courses">Explore Courses</button>
                <button class="nav-btn-champagne" style="background: transparent; border: 1px solid var(--accent-gold); color: #FFFFFF;" data-view="campus-tour">Campus Tour</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT DBSM SECTION -->
      <section class="section-wrapper scroll-reveal" id="about-section" style="background-color: var(--bg-warm-secondary); z-index: 10;">
        <span class="section-label scroll-reveal stagger-1">01 / INSTITUTIONAL OVERVIEW</span>
        <h2 class="section-title scroll-reveal stagger-2">About DBSM</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
          <div class="scroll-reveal reveal-left stagger-3">
            <h3 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1.5rem;">75,000+ SQ. FT. CAMPUS</h3>
            <p style="color: var(--text-muted); line-height: 1.8; font-size: 1.05rem; margin-bottom: 2rem;">
              Don Bosco Skill Mission (DBSM) in Bengaluru creates futuristic learning ecosystems. Combining state-of-the-art infrastructure with world-class industry partners to prepare youth for global technical careers.
            </p>
            <button class="nav-btn-champagne" data-view="about">Discover DBSM Story</button>
          </div>
          <div class="scroll-reveal reveal-right stagger-4" style="background-color: #FFF; padding: 2.5rem; border: 1px solid var(--glass-border);">
            <div style="font-size: 0.8rem; letter-spacing: 0.2em; color: var(--accent-gold); margin-bottom: 1rem;">INSTITUTIONAL OBJECTIVES</div>
            <ul style="list-style: none; line-height: 2.2; color: var(--text-main); font-weight: 500;">
              <li>01 / Advanced Practical Technical Training</li>
              <li>02 / State-of-the-Art Centres of Excellence</li>
              <li>03 / 100% Industry Placement Support</li>
              <li>04 / Master Trainer & Faculty Development</li>
            </ul>
          </div>
        </div>

        <!-- STATISTICS COUNTER GRID -->
        <div class="stats-grid scroll-reveal reveal-scale stagger-2" id="stats-section">
          <div class="stat-card">
            <div class="stat-number" data-target="75000" data-suffix="+">0</div>
            <div class="stat-label">Sq. Ft. Campus</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-target="100" data-suffix="%">0</div>
            <div class="stat-label">Practical Labs</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-target="4" data-suffix=" Major">0</div>
            <div class="stat-label">Centers of Excellence</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-target="5000" data-suffix="+">0</div>
            <div class="stat-label">Graduates Skilled</div>
          </div>
        </div>
      </section>

      <!-- COURSES SECTION -->
      <section class="section-wrapper" id="courses-preview">
        <span class="section-label scroll-reveal stagger-1">02 / SPECIALISATIONS</span>
        <h2 class="section-title scroll-reveal stagger-2">Choose Your Direction.</h2>
        <div class="courses-grid">
          <div class="course-card scroll-reveal reveal-left stagger-1">
            <div class="img-reveal-wrapper">
              <img src="https://dbsm.dbtech.in/images/centre-of-excellence/electrician.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="EV" />
            </div>
            <div class="course-code">EV — ELECTRIC VEHICLE</div>
            <h3 class="course-title">Build the Future of Mobility.</h3>
            <p class="course-tagline">Master EV powertrains, battery management systems, motor controllers and automotive electrical diagnostics.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="ev-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore EV Program</button>
              <button class="nav-btn-champagne" data-modal="ev" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>

          <div class="course-card scroll-reveal reveal-right stagger-2">
            <div class="img-reveal-wrapper">
              <img src="https://dbsm.dbtech.in/images/centre-of-excellence/facilities.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="AWS" />
            </div>
            <div class="course-code">AWS RE/START — CLOUD COMPUTING</div>
            <h3 class="course-title">Build Your Career in the Cloud.</h3>
            <p class="course-tagline">Comprehensive cloud architecture training covering Linux, Python, AWS services, security and DevOps foundation.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="aws-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore AWS Cloud</button>
              <button class="nav-btn-champagne" data-modal="aws" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>

          <div class="course-card scroll-reveal reveal-left stagger-3">
            <div class="img-reveal-wrapper">
              <img src="https://dbsm.dbtech.in/images/centre-of-excellence/home-refridgration.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="DCOM" />
            </div>
            <div class="course-code">DCOM — DATA CENTRE OPERATIONS</div>
            <h3 class="course-title">Power the Digital World.</h3>
            <p class="course-tagline">Data centre physical infrastructure, cooling, power redundancy, rack management and enterprise uptime operations.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="dcom-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore DCOM</button>
              <button class="nav-btn-champagne" data-modal="dcom" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>

          <div class="course-card scroll-reveal reveal-right stagger-4">
            <div class="img-reveal-wrapper">
              <img src="https://dbsm.dbtech.in/images/centre-of-excellence/Hospitality.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="GSA" />
            </div>
            <div class="course-code">GSA — GUEST SERVICE ASSOCIATE</div>
            <h3 class="course-title">Create Experiences That Matter.</h3>
            <p class="course-tagline">Premium customer experience, luxury hospitality standards, international communication and service management.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="gsa-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore GSA</button>
              <button class="nav-btn-champagne" data-modal="gsa" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>
        </div>
      </section>

      <!-- CAMPUS TOUR SECTION -->
      <section class="section-wrapper" id="campus-preview" style="background-color: var(--bg-warm-secondary);">
        <span class="section-label scroll-reveal stagger-1">03 / CAMPUS FACILITIES</span>
        <h2 class="section-title scroll-reveal stagger-2">Step Inside DBSM</h2>
        <div class="campus-grid">
          <div class="campus-card scroll-reveal reveal-scale stagger-1" data-view="campus-tour">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/Slider/slider-1.jpg" alt="Main Entrance" />
            </div>
            <div class="campus-info">
              <div class="campus-num">01 / ENTRANCE & ATRIUM</div>
              <h3 class="campus-name">Central Entrance</h3>
              <p class="campus-desc">Sleek glass architecture welcome area and orientation lobby.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-2" data-view="campus-tour">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/Training-hall.jpg" alt="Training Halls" />
            </div>
            <div class="campus-info">
              <div class="campus-num">02 / PRACTICAL TRAINING</div>
              <h3 class="campus-name">Training Halls</h3>
              <p class="campus-desc">High-bay diagnostic halls built for collaborative hands-on learning.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-3" data-view="campus-tour">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/classroom.jpg" alt="Classrooms" />
            </div>
            <div class="campus-info">
              <div class="campus-num">03 / CLASSROOMS</div>
              <h3 class="campus-name">Smart Classrooms</h3>
              <p class="campus-desc">Ergonomic digital lecture rooms with interactive displays.</p>
            </div>
          </div>
        </div>
        <div class="scroll-reveal stagger-4" style="margin-top: 3rem; text-align: center;">
          <button class="nav-btn-champagne" data-view="campus-tour">Step Inside DBSM (Full Campus Tour)</button>
        </div>
      </section>

      <!-- COMPACT CONTACT US SECTION -->
      <section class="section-wrapper contact-section" id="contact-section">
        <div class="contact-card-wrapper scroll-reveal reveal-scale">
          <div class="contact-info-side">
            <div>
              <div class="info-tag">GET IN TOUCH</div>
              <h3>Connect with DBSM Bengaluru</h3>
              <p>Have questions about admissions, industry partnerships, or campus visits? Our admissions team is here to assist you.</p>
            </div>
            <div>
              <div class="contact-detail-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Don Bosco Skill Mission Campus, Bengaluru</span>
              </div>
              <div class="contact-detail-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>info@dbsm.dbtech.in</span>
              </div>
              <div class="contact-detail-item">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>+91 (080) 2847 8000</span>
              </div>
            </div>
          </div>

          <div class="contact-form-side">
            <form id="dbsm-contact-form" onsubmit="event.preventDefault(); alert('Thank you! Your message has been sent successfully.'); this.reset();">
              <div class="form-group">
                <label for="contact-name">Full Name</label>
                <input type="text" id="contact-name" class="form-input" placeholder="e.g. Rahul Sharma" required />
              </div>
              <div class="form-group">
                <label for="contact-email">Email Address</label>
                <input type="email" id="contact-email" class="form-input" placeholder="e.g. rahul@example.com" required />
              </div>
              <div class="form-group">
                <label for="contact-phone">Phone Number</label>
                <input type="tel" id="contact-phone" class="form-input" placeholder="e.g. +91 98765 43210" required />
              </div>
              <div class="form-group">
                <label for="contact-message">Your Message</label>
                <textarea id="contact-message" class="form-input" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" class="form-submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    `;
  }

  /* -------------------------------------------------------------
     2. ABOUT US PAGE
  ------------------------------------------------------------- */
  renderAboutView() {
    return `
      <section class="section-wrapper" style="padding-top: 12rem;">
        <span class="section-label">OUR INSTITUTIONAL STORY</span>
        <h1 class="section-title">Skills. Innovation. Possibility.</h1>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; margin-top: 3rem;">
          <div>
            <h3 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1.5rem;">DBSM Introduction & History</h3>
            <p style="color: var(--text-muted); line-height: 1.8; font-size: 1.05rem; margin-bottom: 2rem;">
              Don Bosco Skill Mission (DBSM) in Bengaluru was established to empower youth with domain skills. Spanning a state-of-the-art 75,000+ sq. ft. architectural campus, DBSM has trained thousands of young men and women across high-growth technology industries.
            </p>
            <img src="https://dbsm.dbtech.in/images/Section-bg/Aboutus1.jpg" style="width:100%; height:320px; object-fit:cover; margin-bottom:2.5rem; border:1px solid var(--glass-border);" alt="DBSM Campus Building" />
          </div>
          <div style="background-color: #FFF; padding: 2.5rem; border: 1px solid var(--glass-border); height: fit-content;">
            <img src="https://dbsm.dbtech.in/images/Section-bg/obj1.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="Objectives" />
            <h4 style="font-size: 0.85rem; letter-spacing: 0.2em; color: var(--accent-gold); text-transform: uppercase; margin-bottom: 1.5rem;">Institutional Objectives</h4>
            <ol style="line-height: 2.4; color: var(--text-main); font-weight: 500; list-style: none;">
              <li>01 / Advanced Practical Research</li>
              <li>02 / Industry-Driven Curriculum</li>
              <li>03 / Master Trainer Development</li>
              <li>04 / Professional Grooming</li>
              <li>05 / Placement & Industry Alliances</li>
            </ol>
          </div>
        </div>
      </section>
    `;
  }

  /* -------------------------------------------------------------
     3. CAMPUS TOUR PAGE
  ------------------------------------------------------------- */
  renderCampusTourView() {
    return `
      <section class="section-wrapper" style="padding-top: 12rem;">
        <span class="section-label">INTERACTIVE CAMPUS EXPLORATION</span>
        <h1 class="section-title">Full Campus Facilities & Spaces</h1>
        <div class="campus-grid">
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/Slider/slider-1.jpg" alt="Entrance & Atrium" />
            <div class="campus-info">
              <div class="campus-num">01 / MAIN ENTRANCE</div>
              <h3 class="campus-name">Entrance & Atrium</h3>
              <p class="campus-desc">Sleek glass architecture welcome area and orientation lobby.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/Training-hall.jpg" alt="Training Halls" />
            <div class="campus-info">
              <div class="campus-num">02 / PRACTICAL TRAINING</div>
              <h3 class="campus-name">Practical Training Halls</h3>
              <p class="campus-desc">High-bay diagnostic halls built for collaborative hands-on learning.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/classroom.jpg" alt="Smart Classrooms" />
            <div class="campus-info">
              <div class="campus-num">03 / ACADEMIC SPACES</div>
              <h3 class="campus-name">Smart Classrooms</h3>
              <p class="campus-desc">Ergonomic digital lecture rooms with interactive displays.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/centre-of-excellence/facilities.jpg" alt="AWS & DCOM Labs" />
            <div class="campus-info">
              <div class="campus-num">04 / CENTRES OF EXCELLENCE</div>
              <h3 class="campus-name">AWS & DCOM Server Labs</h3>
              <p class="campus-desc">Enterprise server racks, UPS systems, and cloud infrastructure hardware.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/auditorium.jpg" alt="Auditorium" />
            <div class="campus-info">
              <div class="campus-num">05 / AUDITORIUM</div>
              <h3 class="campus-name">Grand Auditorium</h3>
              <p class="campus-desc">300+ seat venue for guest lectures, industry seminars, and keynotes.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/conference-hall.jpg" alt="Conference Hall" />
            <div class="campus-info">
              <div class="campus-num">06 / CONFERENCE</div>
              <h3 class="campus-name">Executive Conference Hall</h3>
              <p class="campus-desc">Boardroom facilities for corporate partner meetups and workshops.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/cafeteria.jpg" alt="Cafeteria" />
            <div class="campus-info">
              <div class="campus-num">07 / DINING</div>
              <h3 class="campus-name">Cafeteria</h3>
              <p class="campus-desc">Hygienic multi-cuisine dining hall serving students and faculty.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/open-area.jpg" alt="Courtyard" />
            <div class="campus-info">
              <div class="campus-num">08 / OUTDOORS</div>
              <h3 class="campus-name">Courtyard</h3>
              <p class="campus-desc">Green open-air spaces, walkways, and recreational zones.</p>
            </div>
          </div>
          <div class="campus-card">
            <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/other-amenties.jpg" alt="Residential Housing" />
            <div class="campus-info">
              <div class="campus-num">09 / RESIDENTIAL</div>
              <h3 class="campus-name">Residential Housing</h3>
              <p class="campus-desc">Secure on-campus student housing with 24/7 dining support.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderCoursesView() {
    return `
      <section class="section-wrapper" style="padding-top: 12rem;">
        <span class="section-label">SPECIALISED ACADEMIC PROGRAMS</span>
        <h1 class="section-title">Choose Your Direction.</h1>
        <div class="courses-grid">
          <div class="course-card">
            <img src="https://dbsm.dbtech.in/images/centre-of-excellence/electrician.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="EV" />
            <div class="course-code">EV — ELECTRIC VEHICLE</div>
            <h3 class="course-title">Build the Future of Mobility.</h3>
            <p class="course-tagline">Master EV powertrains, battery management systems, motor controllers and automotive electrical diagnostics.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="ev-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore EV Program</button>
              <button class="nav-btn-champagne" data-modal="ev" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>

          <div class="course-card">
            <img src="https://dbsm.dbtech.in/images/centre-of-excellence/facilities.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="AWS" />
            <div class="course-code">AWS RE/START — CLOUD COMPUTING</div>
            <h3 class="course-title">Build Your Career in the Cloud.</h3>
            <p class="course-tagline">Comprehensive cloud architecture training covering Linux, Python, AWS services, security and DevOps foundation.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="aws-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore AWS Cloud</button>
              <button class="nav-btn-champagne" data-modal="aws" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>

          <div class="course-card">
            <img src="https://dbsm.dbtech.in/images/centre-of-excellence/home-refridgration.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="DCOM" />
            <div class="course-code">DCOM — DATA CENTRE OPERATIONS</div>
            <h3 class="course-title">Power the Digital World.</h3>
            <p class="course-tagline">Data centre physical infrastructure, cooling, power redundancy, rack management and enterprise uptime operations.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="dcom-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore DCOM</button>
              <button class="nav-btn-champagne" data-modal="dcom" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>

          <div class="course-card">
            <img src="https://dbsm.dbtech.in/images/centre-of-excellence/Hospitality.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="GSA" />
            <div class="course-code">GSA — GUEST SERVICE ASSOCIATE</div>
            <h3 class="course-title">Create Experiences That Matter.</h3>
            <p class="course-tagline">Premium customer experience, luxury hospitality standards, international communication and service management.</p>
            <div style="display:flex; gap:1rem;">
              <button class="nav-btn-champagne" data-view="gsa-course" style="padding: 0.5rem 1.2rem; font-size: 0.8rem;">Explore GSA</button>
              <button class="nav-btn-champagne" data-modal="gsa" style="padding: 0.5rem 1rem; font-size: 0.8rem; background:transparent; border:1px solid var(--accent-gold); color:var(--text-main);">Quick Info</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderEvCourseView() {
    return `<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">EV — ELECTRIC VEHICLE</span><h1 class="section-title scroll-reveal stagger-2">Build the Future of Mobility.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Master EV powertrains, battery management systems, motor controllers and automotive electrical diagnostics.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for EV Course!')">Apply / Enquire Now</button></section>`;
  }

  renderGsaCourseView() {
    return `<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">GSA — GUEST SERVICE ASSOCIATE</span><h1 class="section-title scroll-reveal stagger-2">Create Experiences That Matter.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Premium customer experience, luxury hospitality standards, international communication and service management.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for GSA Course!')">Apply / Enquire Now</button></section>`;
  }

  renderAwsCourseView() {
    return `<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">AWS RE/START — CLOUD COMPUTING</span><h1 class="section-title scroll-reveal stagger-2">Build Your Career in the Cloud.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Comprehensive cloud architecture training covering Linux, Python, AWS services, security and DevOps foundation.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for AWS re/Start!')">Apply / Enquire Now</button></section>`;
  }

  renderDcomCourseView() {
    return `<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">DCOM — DATA CENTRE OPERATIONS</span><h1 class="section-title scroll-reveal stagger-2">Power the Digital World.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Data centre physical infrastructure, cooling, power redundancy, rack management and enterprise uptime operations.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for DCOM Course!')">Apply / Enquire Now</button></section>`;
  }

  /* -------------------------------------------------------------
     9. STUDENT LIFE PAGE WITH OFFICIAL DBSM EVENT PHOTOS
  ------------------------------------------------------------- */
  renderStudentLifeView() {
    return `
      <section class="section-wrapper scroll-reveal" style="padding-top: 12rem;">
        <span class="section-label scroll-reveal stagger-1">CAMPUS LIFE & ACHIEVEMENTS</span>
        <h1 class="section-title scroll-reveal stagger-2">Student Life at DBSM</h1>
        <p class="scroll-reveal stagger-3" style="font-size: 1.1rem; color: var(--text-muted); max-width: 600px; margin-bottom: 4rem;">
          At Don Bosco Skill Mission, education extends far beyond the classroom into industry exposure, hackathons, sports tournaments, and technical expos.
        </p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem;">
          <div class="scroll-reveal reveal-scale stagger-1" style="background:#FFF; border:1px solid var(--glass-border); padding:2rem;">
            <div class="img-reveal-wrapper">
              <img src="http://online.dbtech.in/EventPhoto/4411.jpeg" style="width:100%; height:200px; object-fit:cover; margin-bottom:1rem;" alt="Site Visits" />
            </div>
            <div style="color:var(--accent-gold); font-size:0.8rem; margin-bottom:0.5rem;">01 / INDUSTRY EXPOSURE</div>
            <h3 style="font-family:var(--font-serif); font-size:1.5rem; margin-bottom:0.5rem;">Industrial Site Visits</h3>
            <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">Direct visits to commercial data centres and manufacturing facilities.</p>
          </div>
          <div class="scroll-reveal reveal-scale stagger-2" style="background:#FFF; border:1px solid var(--glass-border); padding:2rem;">
            <div class="img-reveal-wrapper">
              <img src="http://online.dbtech.in/EventPhoto/4390.jpeg" style="width:100%; height:200px; object-fit:cover; margin-bottom:1rem;" alt="Hackathons" />
            </div>
            <div style="color:var(--accent-gold); font-size:0.8rem; margin-bottom:0.5rem;">02 / HACKATHONS</div>
            <h3 style="font-family:var(--font-serif); font-size:1.5rem; margin-bottom:0.5rem;">Tech Competitions</h3>
            <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">Student team challenges in cloud architecture and EV diagnostics.</p>
          </div>
          <div class="scroll-reveal reveal-scale stagger-3" style="background:#FFF; border:1px solid var(--glass-border); padding:2rem;">
            <div class="img-reveal-wrapper">
              <img src="http://online.dbtech.in/EventPhoto/4384.jpeg" style="width:100%; height:200px; object-fit:cover; margin-bottom:1rem;" alt="Sports & Culture" />
            </div>
            <div style="color:var(--accent-gold); font-size:0.8rem; margin-bottom:0.5rem;">03 / COMMUNITY</div>
            <h3 style="font-family:var(--font-serif); font-size:1.5rem; margin-bottom:0.5rem;">Sports & Culture</h3>
            <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6;">Inter-batch athletic meets, cultural celebrations, and graduations.</p>
          </div>
        </div>
      </section>
    `;
  }

  /* -------------------------------------------------------------
     10. FACULTY & TEAM PAGE — HORIZONTAL SCROLL-DRIVEN EXPERIENCE
  ------------------------------------------------------------- */
  renderFacultyView() {
    const facultyMembers = [
      {
        num: '01',
        name: 'Fr. Eugene Florence',
        role: 'Director',
        status: 'Resident Director',
        badge: 'Leadership',
        desc: 'Visionary institutional director guiding strategic expansion, academic excellence, and holistic youth empowerment at Don Bosco Skill Mission.',
        img: `${import.meta.env.BASE_URL || '/'}fr_eugene.png`,
        contact: 'director@dbsm.dbtech.in'
      },
      {
        num: '02',
        name: 'Bro. Barnabas Khriam',
        role: 'Assistant Director, Center Head',
        status: 'Resident Leadership',
        badge: 'Center Head',
        desc: 'Overseeing daily operational excellence, campus administration, and technical domain integration across all centers of excellence.',
        img: `${import.meta.env.BASE_URL || '/'}bro_barnabas.png`,
        contact: 'barnabas@dbsm.dbtech.in'
      },
      {
        num: '03',
        name: 'Fr. Britto Francis',
        role: 'Assistant Director, Center Head',
        status: 'Resident Leadership',
        badge: 'Center Head',
        desc: 'Spearheading student welfare, placement partnerships, industry alliances, and residential community development.',
        img: `${import.meta.env.BASE_URL || '/'}fr_britto.png`,
        contact: 'britto@dbsm.dbtech.in'
      },
      {
        num: '04',
        name: 'YOGARATHNAM S',
        role: 'Trainer- Cloud computing',
        status: 'Cloud Specialist',
        badge: 'AWS Specialist',
        desc: 'Master AWS re/Start Cloud Architecture instructor specializing in Linux systems, Python automation, and DevOps deployment.',
        img: `${import.meta.env.BASE_URL || '/'}yogarathnam.png`,
        contact: 'yogarathnam@dbsm.dbtech.in'
      },
      {
        num: '05',
        name: 'ASHA S NAIK',
        role: 'Trainer- Electric Vehicle',
        status: 'EV Specialist',
        badge: 'EV Diagnostics',
        desc: 'Lead Electric Vehicle Engineering instructor specializing in battery management, motor controllers, and powertrain diagnostics.',
        img: `${import.meta.env.BASE_URL || '/'}asha_naik.png`,
        contact: 'ashanaik@dbsm.dbtech.in'
      },
      {
        num: '06',
        name: 'Norbert Sunn',
        role: 'Trainer- GSA',
        status: 'Hospitality Trainer',
        badge: 'GSA Lead',
        desc: 'Guest Service Associate master trainer specializing in luxury hospitality standards, customer relations, and international communications.',
        img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600',
        contact: 'norbert@dbsm.dbtech.in'
      }
    ];

    const cardsMarkup = facultyMembers.map((m, idx) => `
      <div class="faculty-card-horiz ${idx === 0 ? 'is-focused' : ''}" data-index="${idx}">
        <div class="faculty-img-box-horiz">
          <img class="faculty-img-horiz" src="${m.img}" alt="${m.name}" loading="lazy" />
          <span class="faculty-badge">${m.badge}</span>
        </div>
        <div class="faculty-details-horiz">
          <div class="faculty-num-tag">${m.num} / FACULTY PROFILE</div>
          <h3 class="faculty-name-horiz">${m.name}</h3>
          <div class="faculty-role-horiz">${m.role}</div>
          <p class="faculty-desc-horiz">${m.desc}</p>
          <div class="faculty-contact-row">
            <span><span class="faculty-status-dot"></span>${m.status}</span>
            <span>${m.contact}</span>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <!-- SCROLL-DRIVEN HORIZONTAL FACULTY SECTION CONTAINER -->
      <div class="faculty-scroll-container" id="faculty-scroll-container">
        <div class="faculty-sticky-viewport">
          
          <div class="faculty-header-wrapper" id="faculty-header-wrapper">
            <span class="section-label">05 / INSTITUTIONAL LEADERSHIP & TEAM</span>
            <h1 class="section-title" style="margin-bottom: 0.8rem;">Meet the Faculty & Leadership</h1>
            <p style="font-size: 1.05rem; color: var(--text-muted); max-width: 620px;">
              Scroll down to explore our resident directors, center heads, master cloud trainers, administrative officers, and operational leads.
            </p>
          </div>

          <div class="faculty-track-viewport">
            <div class="faculty-track" id="faculty-track">
              ${cardsMarkup}
            </div>
          </div>

          <div class="faculty-scroll-progress-container">
            <div class="faculty-scroll-progress-bar" id="faculty-scroll-progress-bar"></div>
          </div>

        </div>
      </div>
    `;
  }

  /* -------------------------------------------------------------
     PRELOAD 120 WEBP FRAMES
  ------------------------------------------------------------- */
  preloadWebPFrames() {
    this.frames = [];
    this.loadedFramesCount = 0;

    const baseUrl = import.meta.env.BASE_URL || '/';
    for (let i = 1; i <= this.totalFrames; i++) {
      const img = new Image();
      const numStr = String(i).padStart(3, '0');
      img.src = `${baseUrl}frames/dbsm-${numStr}.webp`;
      img.onload = () => {
        this.loadedFramesCount++;
        if (i === 1 && this.currentView === 'home') {
          this.renderCanvasFrame(0);
        }
      };
      this.frames.push(img);
    }

    setTimeout(() => {
      this.initCanvasScrollLoop();
    }, 100);
  }

  renderCanvasFrame(index) {
    const canvas = document.getElementById('hero-frame-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    if (canvas.width !== windowWidth || canvas.height !== windowHeight) {
      canvas.width = windowWidth;
      canvas.height = windowHeight;
    }

    const img = this.frames[index];
    if (img && img.complete && img.naturalWidth > 0) {
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = windowWidth / windowHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = windowWidth;
        drawHeight = windowWidth / imgRatio;
        offsetX = 0;
        offsetY = (windowHeight - drawHeight) / 2;
      } else {
        drawHeight = windowHeight;
        drawWidth = windowHeight * imgRatio;
        offsetX = (windowWidth - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, windowWidth, windowHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }

  initCanvasScrollLoop() {
    const navbar = document.getElementById('navbar');

    const updateFrameLoop = () => {
      // 1. Home View Video Canvas Scroll Scrubbing
      if (this.currentView === 'home') {
        const heroContainer = document.getElementById('hero-scroll-container');
        if (heroContainer) {
          const rect = heroContainer.getBoundingClientRect();
          const scrollableHeight = heroContainer.offsetHeight - window.innerHeight;
          
          const scrolled = -rect.top;
          const progress = Math.min(Math.max(scrolled / (scrollableHeight || 1), 0), 1);

          this.targetFrameIndex = Math.min(
            Math.floor(progress * (this.totalFrames - 1)),
            this.totalFrames - 1
          );

          this.currentFrameIndex += (this.targetFrameIndex - this.currentFrameIndex) * 0.2;
          const renderIndex = Math.round(this.currentFrameIndex);

          this.renderCanvasFrame(renderIndex);

          const heroTextElem = document.getElementById('hero-text');
          if (heroTextElem) {
            const textOpacity = Math.max(1 - progress * 2.2, 0);
            const textTranslateY = -progress * 100;
            heroTextElem.style.opacity = textOpacity;
            heroTextElem.style.transform = `translateY(${textTranslateY}px)`;
          }
        }
      }

      // 2. Faculty View Scroll-Driven Horizontal Card Animation
      if (this.currentView === 'faculty' && window.innerWidth > 768) {
        const facultyContainer = document.getElementById('faculty-scroll-container');
        const facultyTrack = document.getElementById('faculty-track');
        const progressBar = document.getElementById('faculty-scroll-progress-bar');
        const headerWrapper = document.getElementById('faculty-header-wrapper');

        if (facultyContainer && facultyTrack) {
          const rect = facultyContainer.getBoundingClientRect();
          const totalScrollable = facultyContainer.offsetHeight - window.innerHeight;
          const scrolled = -rect.top;
          
          // Progress ratio between 0 and 1
          const rawProgress = Math.min(Math.max(scrolled / (totalScrollable || 1), 0), 1);

          // Calculate total horizontal translate distance needed
          const trackWidth = facultyTrack.scrollWidth;
          const viewportWidth = window.innerWidth;
          const maxTranslate = Math.max(trackWidth - (viewportWidth * 0.85), 0);

          // Smooth horizontal translation
          const translateX = -rawProgress * maxTranslate;
          facultyTrack.style.transform = `translateX(${translateX}px)`;

          if (progressBar) {
            progressBar.style.width = `${rawProgress * 100}%`;
          }

          // Header intro animation
          if (headerWrapper) {
            const headerOpacity = Math.max(1 - (rawProgress * 1.5), 0.7);
            headerWrapper.style.opacity = headerOpacity;
          }

          // Dynamic Card Focus & Depth Scale calculation
          const cards = Array.from(facultyTrack.querySelectorAll('.faculty-card-horiz'));
          const focalPointX = viewportWidth * 0.25; // Focal line aligned with initial padding

          cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + (cardRect.width / 2);
            const distFromFocus = Math.abs(cardCenterX - focalPointX);

            // Focus threshold
            if (distFromFocus < 240) {
              card.classList.add('is-focused');
            } else {
              card.classList.remove('is-focused');
            }
          });
        }
      }

      // 3. Global Bidirectional Scroll-Reveal & Stat Counter Logic
      this.handleScrollReveals();

      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      requestAnimationFrame(updateFrameLoop);
    };

    requestAnimationFrame(updateFrameLoop);
  }

  /* -------------------------------------------------------------
     BIDIRECTIONAL SCROLL-REVEAL & ANIMATED STAT COUNTERS
  ------------------------------------------------------------- */
  handleScrollReveals() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const viewportHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Element is considered in view if top is within viewport and bottom has not left top completely
      const inView = rect.top < viewportHeight * 0.88 && rect.bottom > 40;

      if (inView) {
        el.classList.add('is-visible');
      } else {
        // Reverse animation when scrolling up/out of view
        el.classList.remove('is-visible');
      }
    });

    // Animate stats when visible
    const statCards = document.querySelectorAll('.stat-number');
    statCards.forEach((statNode) => {
      const rect = statNode.getBoundingClientRect();
      const inView = rect.top < viewportHeight && rect.bottom > 0;

      if (inView && !statNode.classList.contains('has-animated')) {
        statNode.classList.add('has-animated');
        const target = parseInt(statNode.getAttribute('data-target') || '0', 10);
        const suffix = statNode.getAttribute('data-suffix') || '';
        let current = 0;
        const step = Math.ceil(target / 40);

        const counterInterval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(counterInterval);
          }
          statNode.innerHTML = `${current.toLocaleString()}${suffix}`;
        }, 25);
      } else if (!inView && statNode.classList.contains('has-animated')) {
        // Reset count so it animates again when scrolling back into view
        statNode.classList.remove('has-animated');
        statNode.innerHTML = `0${statNode.getAttribute('data-suffix') || ''}`;
      }
    });
  }

  /* -------------------------------------------------------------
     COURSE QUICK INFO MODAL POPUP SYSTEM
  ------------------------------------------------------------- */
  openCourseModal(courseKey) {
    const modalData = {
      ev: {
        title: 'EV — Electric Vehicle Engineering',
        code: 'EV DOMAIN CERTIFICATION',
        desc: 'Master lithium-ion battery chemistry, motor controllers, powertrain assembly, charging station infrastructure, and OBD diagnostic tools.',
        duration: '3 Months Intensive Practical Training',
        career: 'EV Service Engineer, Battery Assembly Lead, Charging Network Technician'
      },
      aws: {
        title: 'AWS re/Start — Cloud Computing',
        code: 'AWS CLOUD CERTIFICATION',
        desc: 'Comprehensive Linux command-line, Python scripting, AWS Core Services (EC2, S3, VPC, IAM, RDS), network security, and cloud deployment.',
        duration: '12 Weeks Full-time Classroom Training',
        career: 'Cloud Operations Associate, Junior DevOps Engineer, AWS Support Specialist'
      },
      dcom: {
        title: 'DCOM — Data Centre Operations',
        code: 'DATA CENTRE INFRASTRUCTURE',
        desc: 'Enterprise server rack layout, fiber/copper structured cabling, UPS power redundancy, precision HVAC cooling, and DCIM monitoring.',
        duration: '3 Months Practical Facility Training',
        career: 'Data Centre Operations Engineer, Rack Management Specialist, Facilities Support'
      },
      gsa: {
        title: 'GSA — Guest Service Associate',
        code: 'LUXURY HOSPITALITY & SERVICES',
        desc: 'Front desk operations, Property Management Systems, luxury hospitality standards, cross-cultural communication, and guest relations.',
        duration: '3 Months Practical Service Training',
        career: 'Guest Relations Associate, Front Desk Executive, Hospitality Manager'
      }
    };

    const info = modalData[courseKey] || modalData.ev;
    const modalContent = document.getElementById('modal-content');
    const modalBackdrop = document.getElementById('course-modal-backdrop');

    if (modalContent && modalBackdrop) {
      modalContent.innerHTML = `
        <div style="font-size:0.8rem; letter-spacing:0.2em; color:var(--accent-gold); font-weight:600; margin-bottom:0.8rem;">${info.code}</div>
        <h2 style="font-family:var(--font-serif); font-size:2.4rem; color:var(--text-main); margin-bottom:1.2rem;">${info.title}</h2>
        <p style="color:var(--text-muted); line-height:1.7; margin-bottom:1.8rem; font-size:0.98rem;">${info.desc}</p>
        <div style="background:var(--bg-warm-secondary); padding:1.2rem 1.5rem; border-radius:4px; margin-bottom:2rem;">
          <div style="font-size:0.85rem; font-weight:600; color:var(--text-main); margin-bottom:0.4rem;">Duration: ${info.duration}</div>
          <div style="font-size:0.85rem; color:var(--accent-gold); font-weight:500;">Career Outcomes: ${info.career}</div>
        </div>
        <div style="display:flex; gap:1rem;">
          <button class="nav-btn-champagne" data-view="${courseKey}-course" onclick="document.getElementById('course-modal-backdrop').classList.remove('active')">View Full Program Page</button>
        </div>
      `;
      modalBackdrop.classList.add('active');
    }
  }

  closeCourseModal() {
    const modalBackdrop = document.getElementById('course-modal-backdrop');
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
    }
  }

  /* -------------------------------------------------------------
     ROUTER & EVENT HANDLING
  ------------------------------------------------------------- */
  setupNavigation() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-view]');
      const modalBtn = e.target.closest('[data-modal]');
      const closeBtn = e.target.closest('#modal-close-btn');
      const backdrop = e.target.classList.contains('modal-backdrop');

      if (link) {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        this.switchView(view);
      } else if (modalBtn) {
        e.preventDefault();
        const courseKey = modalBtn.getAttribute('data-modal');
        this.openCourseModal(courseKey);
      } else if (closeBtn || backdrop) {
        this.closeCourseModal();
      }
    });
  }

  switchView(viewName) {
    this.currentView = viewName;
    const mainContent = document.getElementById('main-content');
    
    // Always scroll to TOP of page (0,0) when switching views or navigating
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.toggle('active', l.getAttribute('data-view') === viewName);
    });

    switch (viewName) {
      case 'home':
        mainContent.innerHTML = this.renderHomeView();
        setTimeout(() => this.renderCanvasFrame(0), 50);
        break;
      case 'about':
        mainContent.innerHTML = this.renderAboutView();
        break;
      case 'campus-tour':
        mainContent.innerHTML = this.renderCampusTourView();
        break;
      case 'courses':
        mainContent.innerHTML = this.renderCoursesView();
        break;
      case 'ev-course':
        mainContent.innerHTML = this.renderEvCourseView();
        break;
      case 'gsa-course':
        mainContent.innerHTML = this.renderGsaCourseView();
        break;
      case 'aws-course':
        mainContent.innerHTML = this.renderAwsCourseView();
        break;
      case 'dcom-course':
        mainContent.innerHTML = this.renderDcomCourseView();
        break;
      case 'student-life':
        mainContent.innerHTML = this.renderStudentLifeView();
        break;
      case 'faculty':
        mainContent.innerHTML = this.renderFacultyView();
        break;
      default:
        mainContent.innerHTML = this.renderHomeView();
        setTimeout(() => this.renderCanvasFrame(0), 50);
    }
  }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new DBSMApp();
});
