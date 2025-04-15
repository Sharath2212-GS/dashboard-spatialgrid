
import React, { useState } from 'react';
import spatiallogo from '../components/assests/spatiallogo.svg';
import { FaBook, FaUsers } from 'react-icons/fa';
import './Sidebar.css'; // Make sure to create this CSS file

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };
  
  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  
  return (
    <div 
      className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="logo-container">
        <img src={spatiallogo} className="logo" alt="Spatial Logo" />
      </div>
      <div className="nav-item active">
        <FaBook className="nav-icon" />
        <span className="nav-text">Library</span>
        
      </div>
      <div className="nav-item">
        <FaUsers className="nav-icon" />
        <span className="nav-text">Users</span>
      </div>
    </div>
  );
}


// import React from 'react';
// import spatiallogo from '../components/assests/spatiallogo.svg';

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="logo-container">
//         <img src={spatiallogo} className="logo" alt="Spatial Logo" />
//       </div>
//       <div className="nav-item active">
//         Library
//       </div>
//       <div className="nav-item">
//         Users
//       </div>
//     </div>
//   );
// }