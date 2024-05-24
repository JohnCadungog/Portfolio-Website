// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "../src/components/navbar.jsx";
// import Homepage from "../src/homepage/homepage.jsx"; // Import your Homepage component
// import Skills from "../src/components/technicalskills.jsx"; // Import your Skills component
// import Projects from "../src/components/projectsection.jsx"; // Import your Projects component
// import Contacts from "../src/components/contactinfopage.jsx"; // Import your Contacts component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route exact path="/skills" component={Skills} />
//           <Route exact path="/projects" component={Projects} />
//           <Route exact path="/contacts" component={Contacts} />
//           {/* Add more routes if needed */}
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
import logo from './logo.svg';
import './App.css';
import Homepage from './homepage/homepage';

function App() {
  return (
    <div className="App">
      <header className="Portfolio">
        
      </header>
      <Homepage/>
    </div>
  );
}

export default App;