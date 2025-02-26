import './App.css';
import  {useState}  from  'react';


function App() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const  toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  
  return (
    <>
      <div className="container">
        <button onClick={toggleSidebar} className={`sidebar-toggle ${isSidebarOpen ? 'on' : ''}`}>{isSidebarOpen ? '×': '☰'}</button>
        <nav onClick={toggleSidebar} className={`navBar ${isSidebarOpen?'open': ''  }`}>
            <div className="sidebar-content">
              <h2>How to Install</h2>
              <div className="installation-steps">
                <h3>For PC:</h3>
                <ol>
                  <li>Download the game file using the "Download" button.</li>
                  <li>Extract the game files using a tool like WinRAR or 7-Zip (if the file is compressed).</li>
                  <li>Run the installer and follow the on-screen instructions.</li>
                  <li>If you encounter errors, install the required runtime components from the "_Redist" folder included in the game files.</li>
                </ol>

                <h3>For Android:</h3>
                <ol>
                  <li>Do not delete your previous installation, or you'll lose your progress.</li>
                  <li>Download the APK file and install it to update the game.</li>
                </ol>
              </div>
            </div>
        </nav>
        <main className="maincontents">
        <header>
          <div className="header-content">
            <img 
              src="https://i.pinimg.com/736x/91/e7/9c/91e79c47b7348c3ea40460bdd600fd28.jpg" // Replace with your YouTube DP URL
              alt="Daisy Spark"
              className="profile-pic"
            />
            <div>
              <h1>Daisy Spark's Game Hub</h1>
             
            </div>
          </div>
        </header>
        <main>
          <section id="intro">
            <h2>Download the direct file here</h2>
          </section>


          <section id="games">
            {/* <h2>Game List :</h2> */}

            <div className="game-card">
              <h3>Plants vs Zombies (Fusion)</h3>
              <p><strong>Device:</strong> PC</p>
              <p><strong>Version:</strong> v2.2.1</p>
              <p><strong>Language:</strong>chinese</p>
              <p><strong>Last Updated:</strong> Febuary 05, 2025</p>
              
              <a target="_blank" href="https://drive.google.com/uc?id=100zX4MTDnWeWiFluVKhXnEuEjXMzUl8X" className="download-btn">Download</a>
            </div>
            <div className="game-card">
              <h3>Plants vs Zombies (Fusion)</h3>
              <p><strong>Device:</strong> Android</p>
              <p><strong>Version:</strong> v2.2.1</p>
              <p><strong>Language:</strong> chinese</p>
              <p><strong>Last Updated:</strong> Febuary 05, 2025</p>
              
              <a target="_blank" href="https://drive.google.com/uc?export=download&id=1-PV_b-_lgUwumls-Fr9KhumZGD35QLWe" className="download-btn">Download</a>
            </div>
            <div className="game-card">
              <h3>Plants vs Zombies (Fusion)</h3>
              <p><strong>Device:</strong> PC</p>
              <p><strong>Version:</strong> v2.2.1</p>
              <p><strong>Language:</strong> Multy language support </p>
              <p><strong>Last Updated:</strong> Febuary 05, 2025</p>
              
              <a target="_blank" href="https://drive.google.com/uc?export=download&id=12mswC_YY9GBREiqwmVl-TPGo5h1JPywN
                  " className="download-btn">Download</a>
            </div>
            <div className="game-card">
              <h3>Plants vs Zombies (Fusion)</h3>
              <p><strong>Device:</strong> Android</p>
              <p><strong>Version:</strong> v2.1.6</p>
              <p><strong>Language:</strong> English</p>
              <p><strong>Last Updated:</strong> December 11, 2024</p>
              
              <a target="_blank" href="https://drive.google.com/uc?export=download&id=11T9tImXLg3GjErow99RrF4oLSF21dO8O
                " className="download-btn">Download</a>
            </div>
            
          </section>
        </main>  
        <footer>
          {/* <p>Contact: <a href="#">your-email@example.com</a></p> */}
          {/* <p>Made with ❤️ by Daisy Spark</p>
          <p>© 2023 Daisy Spark. All rights reserved.</p> */}
        </footer>
        </main>
      </div>
    </>
  );
}

export default App;