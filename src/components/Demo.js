
import React from 'react';
import './Demo.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function SpatialGridInterface() {
  return (
    <div className="app-container">
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

// import { useState } from 'react';
// import './Demo.css';
// import spatiallogo from '../components/assests/spatiallogo.svg'

// export default function SpatialGridInterface() {
//   const [showAddForm, setShowAddForm] = useState(false);
  
//   const libraryItems = [
//     { name: 'Car', category: 'Vehicle', asset: 'Img' },
//     { name: 'Award', category: 'Gift', asset: 'Img1' },
//     { name: 'House', category: 'Construction', asset: 'Img2' }
//   ];

//   // Toggle between main view and add form
//   const toggleAddForm = () => {
//     setShowAddForm(!showAddForm);
//   };

//   return (
//     <div className="app-container">
//       <div className="layout">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <div className="logo-container">
          
//               <img src={ spatiallogo} className="logo"  />
              
            
            
//           </div>
//           <div className="nav-item active">
//             Library
//           </div>
//           <div className="nav-item">
//             Users
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="main-content">
//           {!showAddForm ? (
//             /* Main Library View */
//             <div className="content-container">
//               <div className="header">
//                 <h1 className="page-title">Library</h1>
//                 <button 
//                   className="add-button"
//                   onClick={toggleAddForm}
//                 >
//                   Add
//                 </button>
//               </div>
              
//               {/* Category Buttons */}
//               <div className="category-buttons">
//                 {['3D Assets', 'Templates', 'Scenes', 'Image', 'Video', 'Audio', 'Text', 'Vectors', 'Sprites'].map((cat) => (
//                   <button key={cat} className="category-button">
//                     {cat}
//                   </button>
//                 ))}
//               </div>
              
//               {/* Library Table */}
//               <table className="library-table">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Category</th>
//                     <th>Thumbnail | keywords | Assets</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {libraryItems.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.name}</td>
//                       <td>{item.category}</td>
//                       <td>{item.asset}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             /* Add Form View */
//             <div className="content-container">
//               <div className="header">
//                 <h1 className="page-title">Library</h1>
//                 <button 
//                   className="cancel-button"
//                   onClick={toggleAddForm}
//                 >
//                   Cancel
//                 </button>
//               </div>
              
//               <div className="form-container">
//                 <div className="form-row">
//                   <div className="form-group">
//                     <input 
//                       type="text" 
//                       placeholder="Asset type dropdown"
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input 
//                       type="text" 
//                       placeholder="Category dropdown"
//                       className="form-input"
//                     />
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <input 
//                       type="text" 
//                       placeholder="Name"
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input 
//                       type="text" 
//                       placeholder="Keywords"
//                       className="form-input"
//                     />
//                   </div>
//                 </div>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <input 
//                       type="text" 
//                       placeholder="Thumbnail"
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input 
//                       type="text" 
//                       placeholder="Gib Object"
//                       className="form-input"
//                     />
//                   </div>
//                 </div>
//                 <div className="form-actions">
//                   <button className="submit-button">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }