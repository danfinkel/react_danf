export default function LogOut({ setToken }) {

  const logoutButton = e => {    
      e.preventDefault();

      fetch('http://localhost:3001/api/users/logout/', {  
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       credentials: 'include',
     })

      setToken("")
      console.log('here')
      window.location.href = '/'
      console.log('here2')
    }
  
  return (
    <div className="content">
    <br />
    <button type="button" onClick={logoutButton} className="pure-button pure-button-primary">Log Out</button>
    </div>
    )
};
