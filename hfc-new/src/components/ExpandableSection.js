import { useState } from 'react';

export default function ExpandableSection(props) {
  const [showSection, setShowSection] = useState(props.expanded);

  
  
  function showSectionHandler() {
    setShowSection(!showSection);
  };

  const triangle = (showSection ? <span>&#9660;</span> : <span>&#9654;</span> );
  const writeup = (showSection ? <div>{props.children}</div> : null);

  return (
    <div className="content">
      <h2 className="content-head">{props.sectiontitle}<a onClick={showSectionHandler}>{triangle}</a></h2>
      
      {writeup}
    </div>
      );
};