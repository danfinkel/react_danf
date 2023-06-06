function PureMenuLink(props) {
    return <a className="pure-menu-link" href={props.href}>{props.children}</a>
};


export function PureMenuItem(props) {
    return <li className="pure-menu-item"><PureMenuLink href={props.href}>{props.children}</PureMenuLink></li>;
};

export function PureMenuSubItem(props) {
    return <li className="pure-menu-subitem"><PureMenuLink href={props.href}>{props.children}</PureMenuLink></li>;
};


export function PureMenuChildItem(props) {
    return <li className="pure-menu-item" role="presentation"><PureMenuLink href={props.href}>{props.children}</PureMenuLink></li>;
};


export function PureMenuDividedItem(props) {
    return <li className="pure-menu-item menu-item-divided pure-menu-selected"><a href="#" className="pure-menu-link">{props.children}</a></li>
};


export function PureMenu(props) {
    return  <div id="menu">
              <div className="pure-menu">
                  <a className="pure-menu-heading" href="/login">Login</a>
                  <ul className="pure-menu-list">                      
                      {props.children}
                  </ul>
              </div>
            </div>
};


export function PureMenuLinkChildren(props) {
    return (
        <ul className="pure-menu-item pure-menu-has-children pure-menu-allow-subitemhover">
            <a href="#" id="menulink1" className="pure-menu-link" aria-haspopup="true">{props.label_text}</a>
            {props.children}
        </ul>
        )
}


export function PureChildMenu(props) {
    return (
        <ul className="pure-menu-children" role="menu" aria-labelledby="menulink1" aria-hidden="true">
            {props.children}
        </ul>
        )
}