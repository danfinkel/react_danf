import logo from './logo.svg';
import {PureMenuItem, PureMenuDividedItem, PureMenu} from './components/PureMenu'
import PureTitle from './components/PureTitle'
import HeWriteup from './content/he_tutorial/HeDoc'
import './css/styles.css';
import './css/pure-min.css';


function App() {
  return (
      <div id="layout">
          <a href="#menu" id="menuLink" className="menu-link">
              <span></span>
          </a>
          <PureMenu>
            <PureMenuItem href="#Crime">Crime</PureMenuItem>
            <PureMenuItem href="#Encryption">Encryption</PureMenuItem>
            <PureMenuItem href="#Transportation">Transportation</PureMenuItem>
            <PureMenuDividedItem>Home</ PureMenuDividedItem>
          </PureMenu>

          <div id="main">
              <PureTitle title="Lets Look at the Data" subtitle="A Portfolio of Data Studies" />
              <HeWriteup />
          </div>
          <script src="./js/ui.js" />
      </div>
    );
};

export default App;