function PureMenuLink(props) {
    return <a className="pure-menu-link" href={props.href}>{props.children}</a>
};


export function PureMenuItem(props) {
    // return <li className="pure-menu-item"><a href="#Crime" className="pure-menu-link">Crime</a></li>
    return <li className="pure-menu-item"><PureMenuLink href={props.href}>{props.children}</PureMenuLink></li>;
};


export function PureMenuDividedItem(props) {
    return <li className="pure-menu-item menu-item-divided pure-menu-selected"><a href="#" className="pure-menu-link">{props.children}</a></li>
};


export function PureMenu(props) {
    return  <div id="menu">
              <div className="pure-menu">
                  <a className="pure-menu-heading" href="#Contact">Contact</a>

                  <ul className="pure-menu-list">
                      {props.children}
                  </ul>
              </div>
            </div>
};