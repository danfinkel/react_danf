export default function LogOut({ setToken }) {

  const logoutButton = e => {
      e.preventDefault();
      setToken("")
      window.location.href = '/'
    }
  
  return (
    <div className="content">
    <br />
    <button type="button" onClick={logoutButton} className="pure-button pure-button-primary">Log Out</button>
    </div>
    )
};
