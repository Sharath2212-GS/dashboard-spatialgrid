import React, { useEffect, useState } from 'react';
import './MainContent.css';
import { 
  Asset3DIcon, 
  TemplateIcon, 
  SceneIcon, 
  ImageIcon, 
  VideoIcon, 
  AudioIcon, 
  TextIcon, 
  VectorIcon, 
  SpriteIcon 
} from './CategoryIcons';

export default function MainContent() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [apiLibrary, setApiLibrary] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    isPublic: false,
    type: '',
    subtype: ''
  });
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://server.spatialgrid.ai/api/v1/library',
        {
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y2MmE5MjRkNGE4MmQ4ZjBmY2Q0ZDgiLCJlbWFpbCI6InNvZnR3YXJlQHNwYXRpYWxncmlkLmFpIiwiaWF0IjoxNzQ0Mjg5MDI3LCJleHAiOjE3NDQ4OTM4Mjd9.hTQKHIZTfE0TaCf0xw4BeiCr6TdGp7iEA1YJkZRGsFA'}`
          }
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApiLibrary(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'file') {
      setFile(files[0]);
    } else if (name === 'thumbnail') {
      setThumbnail(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Create FormData object to handle file uploads
      const formDataToSend = new FormData();
      
      // Append text fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      
      // Append files if they exist
      if (file) formDataToSend.append('file', file);
      if (thumbnail) formDataToSend.append('thumbnail', thumbnail);
      
      // Make API call
      const response = await fetch('https://server.spatialgrid.ai/api/v1/library', {
        method: 'POST',
        headers: {
          // Don't set Content-Type with FormData, browser will set it automatically with boundary
          "Authorization": `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2Y2MmE5MjRkNGE4MmQ4ZjBmY2Q0ZDgiLCJlbWFpbCI6InNvZnR3YXJlQHNwYXRpYWxncmlkLmFpIiwiaWF0IjoxNzQ0Mjg5MDI3LCJleHAiOjE3NDQ4OTM4Mjd9.hTQKHIZTfE0TaCf0xw4BeiCr6TdGp7iEA1YJkZRGsFA'}`
        },
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit library item');
      }
      
      // Success handling
      setSubmitMessage('Library item added successfully!');
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        name: '',
        isPublic: false,
        type: '',
        subtype: ''
      });
      setFile(null);
      setThumbnail(null);
      
      // Refresh library data
      fetchData();
      
      // Optionally return to main view
      setTimeout(() => {
        setShowAddForm(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle between main view and add form
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
    // Reset form data when opening the form
    if (!showAddForm) {
      setFormData({
        title: '',
        description: '',
        name: '',
        isPublic: false,
        type: '',
        subtype: ''
      });
      setFile(null);
      setThumbnail(null);
      setSubmitMessage('');
    }
  };

  // Category data with icons
  const categories = [
    { name: '3D Assets', icon: Asset3DIcon },
    { name: 'Templates', icon: TemplateIcon },
    { name: 'Scenes', icon: SceneIcon },
    { name: 'Image', icon: ImageIcon },
    { name: 'Video', icon: VideoIcon },
    { name: 'Audio', icon: AudioIcon },
    { name: 'Text', icon: TextIcon },
    { name: 'Vectors', icon: VectorIcon },
    { name: 'Sprites', icon: SpriteIcon }
  ];

  return (
    <div className="main-content">
      {!showAddForm ? (
        /* Main Library View */
        <div className="content-container">
          <div className="header">
            <h1 className="page-title">Library</h1>
            <button 
              className="add-button"
              onClick={toggleAddForm}
            >
              Add
            </button>
          </div>
          
          {/* Category Buttons with animated SVG icons */}
          <div className="category-buttons">
            {categories.map((category, index) => (
              <button 
                key={category.name} 
                className={`category-button ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                onMouseEnter={() => category.icon.startAnimation?.()}
                onMouseLeave={() => category.icon.stopAnimation?.()}
              >
                <category.icon className="category-icon" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Library Table with hover effects */}
          <div className="table-responsive">
            <table className="library-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Thumbnail | keywords | Assets</th>
                </tr>
              </thead>
              <tbody>
                {apiLibrary?.map((item, index) => (
                  <tr 
                    key={index}
                    className={hoveredRow === index ? 'hovered' : ''}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Add Form View */
        <div className="content-container">
          <div className="header">
            <h1 className="page-title">Library</h1>
            <h1>ADD LIBRARIES</h1>
            <button 
              className="cancel-button"
              onClick={toggleAddForm}
            >
              Cancel
            </button>
          </div>
          
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select Asset Type</option>
                    <option value="3D">3D Assets</option>
                    <option value="template">Templates</option>
                    <option value="scene">Scenes</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                    <option value="text">Text</option>
                    <option value="vector">Vectors</option>
                    <option value="sprite">Sprites</option>
                  </select>
                  
                  <input 
                    type="text" 
                    name="subtype"
                    value={formData.subtype}
                    onChange={handleInputChange}
                    placeholder="Category/Subtype"
                    className="form-input"
                  />
                  
                  <input 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Title"
                    className="form-input"
                    required
                  />
                  
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="form-input"
                    required
                  />
                  
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Description/Keywords"
                    className="form-input"
                    rows="3"
                  />
                  <br />
                  
                  <div className="file-input-container">
                    <label htmlFor="thumbnail-upload" className="file-input-label">
                      Thumbnail:
                    </label>
                  
                    <input 
                      id="thumbnail-upload"
                      type="file" 
                      name="thumbnail"
                      onChange={handleFileChange}
                      className="file-input"
                      accept="image/*"
                    />
                   
                    {thumbnail && <span className="file-name">{thumbnail.name}</span>}
                  </div>
                  <br/>
                  
                  <div className="file-input-container">
                    <label htmlFor="file-upload" className="file-input-label">
                      Asset File:
                    </label>
                    <input 
                      id="file-upload"
                      type="file" 
                      name="file"
                      onChange={handleFileChange}
                      className="file-input"
                    />
                    {file && <span className="file-name">{file.name}</span>}
                  </div>
                  <br/>
                  
                  <div className="checkbox-container">
                    <input 
                      type="checkbox" 
                      id="isPublic"
                      name="isPublic"
                      checked={formData.isPublic}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    <label htmlFor="isPublic" className="checkbox-label">
                      Make Public
                    </label>
                  </div>
                </div>
              </div>
              
              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('Error') ? 'error' : 'success'}`}>
                  {submitMessage}
                </div>
              )}
              
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
// import React, { useState } from 'react';

// export default function MainContent() {
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
//     <div className="main-content">
//       {!showAddForm ? (
//         /* Main Library View */
//         <div className="content-container">
//           <div className="header">
//             <h1 className="page-title">Library</h1>
//             <button 
//               className="add-button"
//               onClick={toggleAddForm}
//             >
//               Add
//             </button>
//           </div>
          
//           {/* Category Buttons */}
//           <div className="category-buttons">
//             {['3D Assets', 'Templates', 'Scenes', 'Image', 'Video', 'Audio', 'Text', 'Vectors', 'Sprites'].map((cat) => (
//               <button key={cat} className="category-button">
//                 {cat}
//               </button>
//             ))}
//           </div>
          
//           {/* Library Table */}
//           <table className="library-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Thumbnail | keywords | Assets</th>
//               </tr>
//             </thead>
//             <tbody>
//               {libraryItems.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.category}</td>
//                   <td>{item.asset}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         /* Add Form View */
//         <div className="content-container">
//           <div className="header">
//             <h1 className="page-title">Library</h1>
//             <button 
//               className="cancel-button"
//               onClick={toggleAddForm}
//             >
//               Cancel
//             </button>
//           </div>
          
//           <div className="form-container">
//             <div className="form-row">
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   placeholder="Asset type dropdown"
//                   className="form-input"
//                 />
//               </div>
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   placeholder="Category dropdown"
//                   className="form-input"
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   placeholder="Name"
//                   className="form-input"
//                 />
//               </div>
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   placeholder="Keywords"
//                   className="form-input"
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   placeholder="Thumbnail"
//                   className="form-input"
//                 />
//               </div>
//               <div className="form-group">
//                 <input 
//                   type="text" 
//                   placeholder="Gib Object"
//                   className="form-input"
//                 />
//               </div>
//             </div>
//             <div className="form-actions">
//               <button className="submit-button">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }