import { Outlet } from "react-router-dom";

import {PureMenuItem,
		PureMenuSubItem,
		// PureMenuChildItem, 
		// PureMenuDividedItem, 
		PureMenu,
		PureMenuLinkChildren,
		// PureChildMenu
	} from './PureMenu'
import PureTitle from './PureTitle'


export default function HfcMain() {
  return (
    <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
              <span></span>
      </a>

      <PureMenu>
        <PureMenuItem href="/">Home</PureMenuItem>
        <PureMenuItem href="/about">About</PureMenuItem>
        <PureMenuItem href="/contact">Contact</PureMenuItem>        
        <PureMenuLinkChildren label_text="Admin">
			<PureMenuSubItem href="/addarace">Add a Race</PureMenuSubItem>
			<PureMenuSubItem href="/addarace">Add a Runner</PureMenuSubItem>
			<PureMenuSubItem href="/addarace">Add an Article</PureMenuSubItem>
        </PureMenuLinkChildren>
        <PureMenuItem href="/discussion">Discussion</PureMenuItem>
        <PureMenuItem href="/logout">Logout</PureMenuItem>
      </PureMenu>

      <div id="main">
        <PureTitle title="Hurtin For Certin Striders" subtitle="A Boston Area Running Club Since 1972" />
        <Outlet />
      </div>

      <script src="./js/ui.js" />
    </div>
  );	

};