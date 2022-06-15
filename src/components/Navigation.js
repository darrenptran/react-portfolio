import './Navigation.css';

function Navigation(props) {
  const sections = ['Main', 'Archive', 'Bio', 'Blog', 'Connect'];
  const navLinks = sections.map( section => {
    return (
      <li><a href={'#' + section }>{section}</a></li>
    )
  })
  return (
      <nav>
          <h2 className="logo" >{props.logoTitle}</h2>

          <ul>
            {navLinks}
              {/* <li><a href="#main">MAIN</a></li>
              <li><a href="#bio">BIO</a></li>
              <li><a href="#archive">ARCHIVE</a></li>
              <li><a href="#blog">BLOG</a></li>
              <li><a href="#connect">CONNECT</a></li> */}
          </ul>
      </nav> 
  );
}

export default Navigation;