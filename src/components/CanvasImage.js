import React, { useState } from 'react';

const CanvasImage = ({ setImage }) => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
    setImage(URL.createObjectURL(selectedFile)); // Pass image URL instead of file object
  };

  return (
    <div>
      <h3>Change the ad creative Image:</h3>
      <input type="file" onChange={handleChange} />
      {/* <img src={file} alt="img" /> */}
    </div>
  );
};

export default CanvasImage;