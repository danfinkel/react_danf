import WhyEncrypt from './WhyEncrypt'
import EncryptIntro from './EncryptIntro'
import ExpandableSection from 'components/ExpandableSection'
import IntroSection from 'components/IntroSection'
import Homomorphism from './Homomorphism'
import HeSimple from './HeSimple'
             
function HeWriteup() {
  return (
    <div className="content">
      <IntroSection articleTitle="Homomorphic Encryption"><EncryptIntro /></IntroSection>
      <ExpandableSection sectiontitle="Why Encrypt?"><WhyEncrypt /></ExpandableSection>
      <ExpandableSection sectiontitle="What is a Homomorphism?"><Homomorphism /></ExpandableSection>
      <ExpandableSection sectiontitle="A Simple Homomorphic Encryption Protocol"><HeSimple /></ExpandableSection>

      <h2 className="content-subhead">A Little Bit of Algebra  &#9654; </h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div className="pure-g">
          <div className="pure-u-1-4">
              <img className="pure-img-responsive" src="http://farm3.staticflickr.com/2875/9069037713_1752f5daeb.jpg" alt="Peyto Lake"></img>
          </div>
          <div className="pure-u-1-4">
              <img className="pure-img-responsive" src="http://farm3.staticflickr.com/2813/9069585985_80da8db54f.jpg" alt="Train"></img>
          </div>
          <div className="pure-u-1-4">
              <img className="pure-img-responsive" src="http://farm6.staticflickr.com/5456/9121446012_c1640e42d0.jpg" alt="T-Shirt Store"></img>
          </div>
          <div className="pure-u-1-4">
              <img className="pure-img-responsive" src="http://farm8.staticflickr.com/7357/9086701425_fda3024927.jpg" alt="Mountain"></img>
          </div>
      </div>

      <h2 className="content-subhead">Try Resizing your Browser</h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    )
};


export default HeWriteup;