export default function IntroSection(props) {
	const writeup = <div>{props.children}</div>;
	return (
	    <div>
	      <h2 className="content-head">{props.articleTitle}</h2>
	      {writeup}
	    </div>
	      );
};