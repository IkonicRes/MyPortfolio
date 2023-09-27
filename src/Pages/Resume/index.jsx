import React, { useEffect, useState } from 'react';

const ResumeComponent = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    // Function to update the page height
    const updatePageHeight = () => {
      setPageHeight(document.body.clientHeight * .8);
    };

    // Call the function when the component mounts
    updatePageHeight();

    // Attach a resize event listener to update the height dynamically
    window.addEventListener('resize', updatePageHeight);

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updatePageHeight);
    };
  }, []);

  return (
    <div>
      <h2>Resume</h2>
      <iframe src="https://drive.google.com/file/d/1gbPfOJwBSHN9hZVqocq9UzkdKeKj-RlK/preview" width="98%" height={pageHeight} allow="autoplay"></iframe>
    </div>
  );
};

export default ResumeComponent;
