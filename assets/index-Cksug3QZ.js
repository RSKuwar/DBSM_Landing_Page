(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{constructor(){this.appContainer=document.getElementById(`app`),this.currentView=`home`,this.totalFrames=120,this.frames=[],this.loadedFramesCount=0,this.currentFrameIndex=0,this.targetFrameIndex=0,this.initHTML(),this.preloadWebPFrames(),this.setupNavigation()}initHTML(){this.appContainer.innerHTML=`
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
    `}renderHomeView(){return`
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
    `}renderAboutView(){return`
      <section class="section-wrapper scroll-reveal" style="padding-top: 12rem;">
        <span class="section-label scroll-reveal stagger-1">OUR INSTITUTIONAL STORY</span>
        <h1 class="section-title scroll-reveal stagger-2">Skills. Innovation. Possibility.</h1>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; margin-top: 3rem;">
          <div class="scroll-reveal reveal-left stagger-3">
            <h3 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 1.5rem;">DBSM Introduction & History</h3>
            <p style="color: var(--text-muted); line-height: 1.8; font-size: 1.05rem; margin-bottom: 2rem;">
              Don Bosco Skill Mission (DBSM) in Bengaluru was established to empower youth with domain skills. Spanning a state-of-the-art 75,000+ sq. ft. architectural campus, DBSM has trained thousands of young men and women across high-growth technology industries.
            </p>
            <div class="img-reveal-wrapper">
              <img src="https://dbsm.dbtech.in/images/Section-bg/Aboutus1.jpg" style="width:100%; height:320px; object-fit:cover; margin-bottom:2.5rem; border:1px solid var(--glass-border);" alt="DBSM Campus Building" />
            </div>
          </div>
          <div class="scroll-reveal reveal-right stagger-4" style="background-color: #FFF; padding: 2.5rem; border: 1px solid var(--glass-border); height: fit-content;">
            <div class="img-reveal-wrapper">
              <img src="https://dbsm.dbtech.in/images/Section-bg/obj1.jpg" style="width:100%; height:180px; object-fit:cover; margin-bottom:1.5rem;" alt="Objectives" />
            </div>
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
    `}renderCampusTourView(){return`
      <section class="section-wrapper scroll-reveal" style="padding-top: 12rem;">
        <span class="section-label scroll-reveal stagger-1">INTERACTIVE CAMPUS EXPLORATION</span>
        <h1 class="section-title scroll-reveal stagger-2">Full Campus Facilities & Spaces</h1>
        <div class="campus-grid">
          <div class="campus-card scroll-reveal reveal-scale stagger-1">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/Slider/slider-1.jpg" alt="Entrance & Atrium" />
            </div>
            <div class="campus-info">
              <div class="campus-num">01 / MAIN ENTRANCE</div>
              <h3 class="campus-name">Entrance & Atrium</h3>
              <p class="campus-desc">Sleek glass architecture welcome area and orientation lobby.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-2">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/Training-hall.jpg" alt="Training Halls" />
            </div>
            <div class="campus-info">
              <div class="campus-num">02 / PRACTICAL TRAINING</div>
              <h3 class="campus-name">Practical Training Halls</h3>
              <p class="campus-desc">High-bay diagnostic halls built for collaborative hands-on learning.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-3">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/classroom.jpg" alt="Smart Classrooms" />
            </div>
            <div class="campus-info">
              <div class="campus-num">03 / ACADEMIC SPACES</div>
              <h3 class="campus-name">Smart Classrooms</h3>
              <p class="campus-desc">Ergonomic digital lecture rooms with interactive displays.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-1">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/centre-of-excellence/facilities.jpg" alt="AWS & DCOM Labs" />
            </div>
            <div class="campus-info">
              <div class="campus-num">04 / CENTRES OF EXCELLENCE</div>
              <h3 class="campus-name">AWS & DCOM Server Labs</h3>
              <p class="campus-desc">Enterprise server racks, UPS systems, and cloud infrastructure hardware.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-2">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/auditorium.jpg" alt="Auditorium" />
            </div>
            <div class="campus-info">
              <div class="campus-num">05 / AUDITORIUM</div>
              <h3 class="campus-name">Grand Auditorium</h3>
              <p class="campus-desc">300+ seat venue for guest lectures, industry seminars, and keynotes.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-3">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/conference-hall.jpg" alt="Conference Hall" />
            </div>
            <div class="campus-info">
              <div class="campus-num">06 / CONFERENCE</div>
              <h3 class="campus-name">Executive Conference Hall</h3>
              <p class="campus-desc">Boardroom facilities for corporate partner meetups and workshops.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-1">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/cafeteria.jpg" alt="Cafeteria" />
            </div>
            <div class="campus-info">
              <div class="campus-num">07 / DINING</div>
              <h3 class="campus-name">Cafeteria</h3>
              <p class="campus-desc">Hygienic multi-cuisine dining hall serving students and faculty.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-2">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/open-area.jpg" alt="Courtyard" />
            </div>
            <div class="campus-info">
              <div class="campus-num">08 / OUTDOORS</div>
              <h3 class="campus-name">Courtyard</h3>
              <p class="campus-desc">Green open-air spaces, walkways, and recreational zones.</p>
            </div>
          </div>
          <div class="campus-card scroll-reveal reveal-scale stagger-3">
            <div class="img-reveal-wrapper">
              <img class="campus-img" src="https://dbsm.dbtech.in/images/campus-tour/icons/other-amenties.jpg" alt="Residential Housing" />
            </div>
            <div class="campus-info">
              <div class="campus-num">09 / RESIDENTIAL</div>
              <h3 class="campus-name">Residential Housing</h3>
              <p class="campus-desc">Secure on-campus student housing with 24/7 dining support.</p>
            </div>
          </div>
        </div>
      </section>
    `}renderCoursesView(){return`
      <section class="section-wrapper scroll-reveal" style="padding-top: 12rem;">
        <span class="section-label scroll-reveal stagger-1">SPECIALISED ACADEMIC PROGRAMS</span>
        <h1 class="section-title scroll-reveal stagger-2">Choose Your Direction.</h1>
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
    `}renderEvCourseView(){return`<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">EV — ELECTRIC VEHICLE</span><h1 class="section-title scroll-reveal stagger-2">Build the Future of Mobility.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Master EV powertrains, battery management systems, motor controllers and automotive electrical diagnostics.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for EV Course!')">Apply / Enquire Now</button></section>`}renderGsaCourseView(){return`<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">GSA — GUEST SERVICE ASSOCIATE</span><h1 class="section-title scroll-reveal stagger-2">Create Experiences That Matter.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Premium customer experience, luxury hospitality standards, international communication and service management.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for GSA Course!')">Apply / Enquire Now</button></section>`}renderAwsCourseView(){return`<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">AWS RE/START — CLOUD COMPUTING</span><h1 class="section-title scroll-reveal stagger-2">Build Your Career in the Cloud.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Comprehensive cloud architecture training covering Linux, Python, AWS services, security and DevOps foundation.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for AWS re/Start!')">Apply / Enquire Now</button></section>`}renderDcomCourseView(){return`<section class="section-wrapper scroll-reveal" style="padding-top: 12rem;"><span class="section-label scroll-reveal stagger-1">DCOM — DATA CENTRE OPERATIONS</span><h1 class="section-title scroll-reveal stagger-2">Power the Digital World.</h1><p class="scroll-reveal stagger-3" style="color:var(--text-muted); font-size:1.1rem; line-height:1.8; max-width:700px;">Data centre physical infrastructure, cooling, power redundancy, rack management and enterprise uptime operations.</p><button class="nav-btn-champagne scroll-reveal stagger-4" style="margin-top:2rem;" onclick="alert('Application submitted for DCOM Course!')">Apply / Enquire Now</button></section>`}renderStudentLifeView(){return`
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
    `}renderFacultyView(){return`
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
              ${[{num:`01`,name:`Fr. Eugene Florence`,role:`Director`,status:`Resident Director`,badge:`Leadership`,desc:`Visionary institutional director guiding strategic expansion, academic excellence, and holistic youth empowerment at Don Bosco Skill Mission.`,img:`/DBSM_Landing_Page/fr_eugene.png`,contact:`director@dbsm.dbtech.in`},{num:`02`,name:`Bro. Barnabas Khriam`,role:`Assistant Director, Center Head`,status:`Resident Leadership`,badge:`Center Head`,desc:`Overseeing daily operational excellence, campus administration, and technical domain integration across all centers of excellence.`,img:`/DBSM_Landing_Page/bro_barnabas.png`,contact:`barnabas@dbsm.dbtech.in`},{num:`03`,name:`Fr. Britto Francis`,role:`Assistant Director, Center Head`,status:`Resident Leadership`,badge:`Center Head`,desc:`Spearheading student welfare, placement partnerships, industry alliances, and residential community development.`,img:`/DBSM_Landing_Page/fr_britto.png`,contact:`britto@dbsm.dbtech.in`},{num:`04`,name:`YOGARATHNAM S`,role:`Trainer- Cloud computing`,status:`Cloud Specialist`,badge:`AWS Specialist`,desc:`Master AWS re/Start Cloud Architecture instructor specializing in Linux systems, Python automation, and DevOps deployment.`,img:`/DBSM_Landing_Page/yogarathnam.png`,contact:`yogarathnam@dbsm.dbtech.in`},{num:`05`,name:`ASHA S NAIK`,role:`Trainer- Electric Vehicle`,status:`EV Specialist`,badge:`EV Diagnostics`,desc:`Lead Electric Vehicle Engineering instructor specializing in battery management, motor controllers, and powertrain diagnostics.`,img:`/DBSM_Landing_Page/asha_naik.png`,contact:`ashanaik@dbsm.dbtech.in`},{num:`06`,name:`Norbert Sunn`,role:`Trainer- GSA`,status:`Hospitality Trainer`,badge:`GSA Lead`,desc:`Guest Service Associate master trainer specializing in luxury hospitality standards, customer relations, and international communications.`,img:`/DBSM_Landing_Page/norbert_sunn.png`,contact:`norbert@dbsm.dbtech.in`},{num:`07`,name:`Thomas Rosariyo`,role:`Accountant`,status:`Financial Operations`,badge:`Finance Lead`,desc:`Managing campus financial management, accounting operations, budget auditing, and institutional payroll administration.`,img:`/DBSM_Landing_Page/thomas_rosariyo.png`,contact:`thomas@dbsm.dbtech.in`}].map((e,t)=>`
      <div class="faculty-card-horiz ${t===0?`is-focused`:``}" data-index="${t}">
        <div class="faculty-img-box-horiz">
          <img class="faculty-img-horiz" src="${e.img}" alt="${e.name}" loading="lazy" />
          <span class="faculty-badge">${e.badge}</span>
        </div>
        <div class="faculty-details-horiz">
          <div class="faculty-num-tag">${e.num} / FACULTY PROFILE</div>
          <h3 class="faculty-name-horiz">${e.name}</h3>
          <div class="faculty-role-horiz">${e.role}</div>
          <p class="faculty-desc-horiz">${e.desc}</p>
          <div class="faculty-contact-row">
            <span><span class="faculty-status-dot"></span>${e.status}</span>
            <span>${e.contact}</span>
          </div>
        </div>
      </div>
    `).join(``)}
            </div>
          </div>

          <div class="faculty-scroll-progress-container">
            <div class="faculty-scroll-progress-bar" id="faculty-scroll-progress-bar"></div>
          </div>

        </div>
      </div>
    `}preloadWebPFrames(){this.frames=[],this.loadedFramesCount=0;for(let e=1;e<=this.totalFrames;e++){let t=new Image;t.src=`/DBSM_Landing_Page/frames/dbsm-${String(e).padStart(3,`0`)}.webp`,t.onload=()=>{this.loadedFramesCount++,e===1&&this.currentView===`home`&&this.renderCanvasFrame(0)},this.frames.push(t)}setTimeout(()=>{this.initCanvasScrollLoop()},100)}renderCanvasFrame(e){let t=document.getElementById(`hero-frame-canvas`);if(!t)return;let n=t.getContext(`2d`);if(!n)return;let r=window.innerWidth,i=window.innerHeight;(t.width!==r||t.height!==i)&&(t.width=r,t.height=i);let a=this.frames[e];if(a&&a.complete&&a.naturalWidth>0){let e=a.naturalWidth/a.naturalHeight,t=r/i,o,s,c,l;t>e?(o=r,s=r/e,c=0,l=(i-s)/2):(s=i,o=i*e,c=(r-o)/2,l=0),n.clearRect(0,0,r,i),n.drawImage(a,c,l,o,s)}}initCanvasScrollLoop(){let e=document.getElementById(`navbar`),t=()=>{if(this.currentView===`home`){let e=document.getElementById(`hero-scroll-container`);if(e){let t=e.getBoundingClientRect(),n=e.offsetHeight-window.innerHeight,r=-t.top,i=Math.min(Math.max(r/(n||1),0),1);this.targetFrameIndex=Math.min(Math.floor(i*(this.totalFrames-1)),this.totalFrames-1),this.currentFrameIndex+=(this.targetFrameIndex-this.currentFrameIndex)*.2;let a=Math.round(this.currentFrameIndex);this.renderCanvasFrame(a);let o=document.getElementById(`hero-text`);if(o){let e=Math.max(1-i*2.2,0),t=-i*100;o.style.opacity=e,o.style.transform=`translateY(${t}px)`}}}if(this.currentView===`faculty`&&window.innerWidth>768){let e=document.getElementById(`faculty-scroll-container`),t=document.getElementById(`faculty-track`),n=document.getElementById(`faculty-scroll-progress-bar`),r=document.getElementById(`faculty-header-wrapper`);if(e&&t){let i=e.getBoundingClientRect(),a=e.offsetHeight-window.innerHeight,o=-i.top,s=Math.min(Math.max(o/(a||1),0),1),c=t.scrollWidth,l=window.innerWidth,u=Math.max(c-l*.45,0),d=-s*u;if(t.style.transform=`translateX(${d}px)`,n&&(n.style.width=`${s*100}%`),r){let e=Math.max(1-s*1.5,.7);r.style.opacity=e}let f=Array.from(t.querySelectorAll(`.faculty-card-horiz`)),p=l*.25;f.forEach(e=>{let t=e.getBoundingClientRect(),n=t.left+t.width/2;Math.abs(n-p)<240?e.classList.add(`is-focused`):e.classList.remove(`is-focused`)})}}this.handleScrollReveals(),e&&(window.scrollY>50?e.classList.add(`scrolled`):e.classList.remove(`scrolled`)),requestAnimationFrame(t)};requestAnimationFrame(t)}handleScrollReveals(){let e=document.querySelectorAll(`.scroll-reveal`),t=window.innerHeight;e.forEach(e=>{let n=e.getBoundingClientRect();n.top<t*.88&&n.bottom>40?e.classList.add(`is-visible`):e.classList.remove(`is-visible`)}),document.querySelectorAll(`.stat-number`).forEach(e=>{let n=e.getBoundingClientRect(),r=n.top<t&&n.bottom>0;if(r&&!e.classList.contains(`has-animated`)){e.classList.add(`has-animated`);let t=parseInt(e.getAttribute(`data-target`)||`0`,10),n=e.getAttribute(`data-suffix`)||``,r=0,i=Math.ceil(t/40),a=setInterval(()=>{r+=i,r>=t&&(r=t,clearInterval(a)),e.innerHTML=`${r.toLocaleString()}${n}`},25)}else!r&&e.classList.contains(`has-animated`)&&(e.classList.remove(`has-animated`),e.innerHTML=`0${e.getAttribute(`data-suffix`)||``}`)})}openCourseModal(e){let t={ev:{title:`EV — Electric Vehicle Engineering`,code:`EV DOMAIN CERTIFICATION`,desc:`Master lithium-ion battery chemistry, motor controllers, powertrain assembly, charging station infrastructure, and OBD diagnostic tools.`,duration:`3 Months Intensive Practical Training`,career:`EV Service Engineer, Battery Assembly Lead, Charging Network Technician`},aws:{title:`AWS re/Start — Cloud Computing`,code:`AWS CLOUD CERTIFICATION`,desc:`Comprehensive Linux command-line, Python scripting, AWS Core Services (EC2, S3, VPC, IAM, RDS), network security, and cloud deployment.`,duration:`12 Weeks Full-time Classroom Training`,career:`Cloud Operations Associate, Junior DevOps Engineer, AWS Support Specialist`},dcom:{title:`DCOM — Data Centre Operations`,code:`DATA CENTRE INFRASTRUCTURE`,desc:`Enterprise server rack layout, fiber/copper structured cabling, UPS power redundancy, precision HVAC cooling, and DCIM monitoring.`,duration:`3 Months Practical Facility Training`,career:`Data Centre Operations Engineer, Rack Management Specialist, Facilities Support`},gsa:{title:`GSA — Guest Service Associate`,code:`LUXURY HOSPITALITY & SERVICES`,desc:`Front desk operations, Property Management Systems, luxury hospitality standards, cross-cultural communication, and guest relations.`,duration:`3 Months Practical Service Training`,career:`Guest Relations Associate, Front Desk Executive, Hospitality Manager`}},n=t[e]||t.ev,r=document.getElementById(`modal-content`),i=document.getElementById(`course-modal-backdrop`);r&&i&&(r.innerHTML=`
        <div style="font-size:0.8rem; letter-spacing:0.2em; color:var(--accent-gold); font-weight:600; margin-bottom:0.8rem;">${n.code}</div>
        <h2 style="font-family:var(--font-serif); font-size:2.4rem; color:var(--text-main); margin-bottom:1.2rem;">${n.title}</h2>
        <p style="color:var(--text-muted); line-height:1.7; margin-bottom:1.8rem; font-size:0.98rem;">${n.desc}</p>
        <div style="background:var(--bg-warm-secondary); padding:1.2rem 1.5rem; border-radius:4px; margin-bottom:2rem;">
          <div style="font-size:0.85rem; font-weight:600; color:var(--text-main); margin-bottom:0.4rem;">Duration: ${n.duration}</div>
          <div style="font-size:0.85rem; color:var(--accent-gold); font-weight:500;">Career Outcomes: ${n.career}</div>
        </div>
        <div style="display:flex; gap:1rem;">
          <button class="nav-btn-champagne" data-view="${e}-course" onclick="document.getElementById('course-modal-backdrop').classList.remove('active')">View Full Program Page</button>
        </div>
      `,i.classList.add(`active`))}closeCourseModal(){let e=document.getElementById(`course-modal-backdrop`);e&&e.classList.remove(`active`)}setupNavigation(){document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-view]`),n=e.target.closest(`[data-modal]`),r=e.target.closest(`#modal-close-btn`),i=e.target.classList.contains(`modal-backdrop`);if(t){e.preventDefault();let n=t.getAttribute(`data-view`);this.switchView(n)}else if(n){e.preventDefault();let t=n.getAttribute(`data-modal`);this.openCourseModal(t)}else(r||i)&&this.closeCourseModal()})}switchView(e){this.currentView=e;let t=document.getElementById(`main-content`);switch(window.scrollTo(0,0),document.documentElement.scrollTop=0,document.body.scrollTop=0,document.querySelectorAll(`.nav-link`).forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`data-view`)===e)}),e){case`home`:t.innerHTML=this.renderHomeView(),setTimeout(()=>this.renderCanvasFrame(0),50);break;case`about`:t.innerHTML=this.renderAboutView();break;case`campus-tour`:t.innerHTML=this.renderCampusTourView();break;case`courses`:t.innerHTML=this.renderCoursesView();break;case`ev-course`:t.innerHTML=this.renderEvCourseView();break;case`gsa-course`:t.innerHTML=this.renderGsaCourseView();break;case`aws-course`:t.innerHTML=this.renderAwsCourseView();break;case`dcom-course`:t.innerHTML=this.renderDcomCourseView();break;case`student-life`:t.innerHTML=this.renderStudentLifeView();break;case`faculty`:t.innerHTML=this.renderFacultyView();break;default:t.innerHTML=this.renderHomeView(),setTimeout(()=>this.renderCanvasFrame(0),50)}}};window.addEventListener(`DOMContentLoaded`,()=>{new e});