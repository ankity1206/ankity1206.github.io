/* ===== GLOBAL RESET ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== BODY ===== */
body{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 
               "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: #000;
  color: white;
  overflow-x: hidden;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
		line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  padding-top: 80px; /* ⭐ replaces margin-top */
}
/* ===== BACKGROUND ===== */
canvas{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* ===== NAVBAR ===== */
.navbar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 30px;

  background: transparent;
  backdrop-filter: none;
  box-shadow: none;

  z-index: 1000;

  transition: background 0.3s ease;  /* ⭐ smooth change */
}

.navbar.scrolled{
  background: rgba(0,0,0,0.6);   /* slightly lighter */
  backdrop-filter: blur(6px);    /* ⭐ subtle glass effect */
}

.brand{
  font-weight: bold;
  letter-spacing: 1px;
}

/* ===== NAV LINKS ===== */
.nav-links{
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-links a{
  color: white;
  text-decoration: none;
  transition: 0.3s;

  display: flex;
  align-items: center;
}

.nav-links a:hover{
  color: #00ffff;
}

/* ===== DROPDOWN ===== */
.dropdown{
  position: relative;
}

.dropbtn{
  background: none;
  border: none;
  color: white;
  font: inherit;

  cursor: pointer;

  padding: 0;              /* remove default padding */
  margin: 0;
  line-height: normal;     /* fix vertical alignment */

  display: flex;           /* align like links */
  align-items: center;
}

.dropbtn:hover{
  color: #00ffff;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;

  background: rgba(0,0,0,0.9);
  backdrop-filter: blur(10px);

  border-radius: 10px;

  width: max-content;          /* ✅ shrink to content */
  max-width: 90vw;             /* ✅ never exceed screen */
  white-space: nowrap;         /* ✅ prevent breaking */

  overflow: hidden;
  z-index: 2000;
}

.dropdown-content a {
  display: block;
  padding: 10px 15px;
  color: white;
  text-decoration: none;

  white-space: nowrap; /* keep text in one line */
}

.dropdown-content a:hover{
  background: rgba(255,255,255,0.1);
}

.dropdown:last-child .dropdown-content {
  right: 0;
  left: auto;
}

/* ===== CONTENT ===== */
.container{
  text-align: center;
	flex: 1;
}

/* ===== CARD ===== */
.card{
  margin: 40px auto;
  max-width: 700px;
  padding: 30px;

  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

/* ===== TABLE WRAPPER ===== */
.table-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;

  max-width: 900px;   /* ⭐ LIMIT total width */
  margin: 40px auto;
}
/* force vertical on small screens */
@media (max-width: 700px){
  .table-container{
    grid-template-columns: 1fr;
  }
}
/* ===== TABLE BASE ===== */
.table{
  border-collapse: collapse;

  width: 100%;
  max-width: 320px;
  min-width: 250px;

  margin: 0 auto;

  background: transparent;     /* ✅ fully transparent */
  backdrop-filter: none;       /* ✅ remove glass effect */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* ⭐ smooth */
}

/* ===== HOVER EFFECT ===== */
.table:hover{
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,255,255,0.15);
}

/* ===== CAPTION ===== */
.table caption{
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #00ffff;
}

/* ===== HEADER ===== */
.table th{
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

/* ===== CELLS ===== */
.table td{
  padding: 12px 15px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  text-align: left;
}

/* ===== LINKS ===== */
.table a{
  color: #00ffff;
  text-decoration: none;
}

.table a:hover{
  text-decoration: underline;
}
.table tr:hover{
  background: rgba(255,255,255,0.05);
}

/* ===== BUTTON ===== */
button{
  padding: 12px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  background: #111;
  color: white;
  cursor: pointer;
}

button:hover{
  background: #222;
}

/* ===== MOBILE ===== */
@media (max-width:700px){

.navbar{
  flex-direction: column;
  align-items: flex-start;
}

.nav-links{
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.dropdown-content{
  position: relative;
  width: 100%;
}

.table-container{
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .table{
    width: 100%;
  }

}


/* ===== DROPDOWN FIX ===== */
.show {
  display: block;
}

/* smooth feel */
.dropdown-content {
  transition: all 0.2s ease;
}


/* ===== FOOTER ===== */
.footer{
  margin-top: 60px;
  padding: 30px 20px;

  background: transparent;      /* ⭐ fully transparent */
  backdrop-filter: none;        /* remove blur */
  border-top: 1px solid rgba(0,255,255,0.2);
	box-shadow: 0 -5px 15px rgba(0,255,255,0.1);
}

/* ===== CONTENT ===== */
.footer-content{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  flex-wrap: wrap;
  gap: 20px;

  max-width: 1000px;
  margin: 0 auto;
}

/* ===== LEFT ===== */
.footer-left h3{
  color: #00ffff;
  margin-bottom: 5px;
}

/* ===== LINKS ===== */
.footer-links,
.footer-social{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer a{
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

.footer a:hover{
  color: #00ffff;
}

/* ===== BOTTOM ===== */
.footer-bottom{
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width:700px){
  .footer-content{
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
