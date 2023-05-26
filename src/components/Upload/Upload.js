import React, { useState } from "react";

const Upload = () => {
  const [image, setImage] = useState(null);
  const uploadImageHandler = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
    console.log(event.target.files)
  };
  return (
    <div>
      <input onChange={uploadImageHandler} type="file"></input>
      {setImage && <img src={image} />}
    </div>
  );
};

export default Upload;
