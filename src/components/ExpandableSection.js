import { useState } from 'react';

export default function ExpandableSection(props) {
  const [showSection, setShowSection] = useState(false);

  function showSectionHandler() {
    setShowSection(!showSection);
  };

  const triangle = showSection ? <a>&#9660;</a> : <a>&#9654;</a> ;
  const writeup = showSection ? <div>{props.children}</div> : null;

  return (
    <div>
      <h2 className="content-subhead">{props.sectiontitle}<a onClick={showSectionHandler}>{triangle}</a></h2>
      
      {writeup}
    </div>
      );
};