import { useState} from 'react';

export default function useToken() {

  const getToken = () => {
    const tokenString = sessionStorage.getItem('userName');
    const userToken = tokenString;
    // console.log(userToken)
    return userToken
  };  

  // console.log(getToken())
  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
      // sessionStorage.setItem('token', JSON.stringify(userToken));
    (userToken ? 
      sessionStorage.setItem('userName', userToken)
    :
      sessionStorage.removeItem('userName')
    )
      // setToken(userToken.userName);
    setToken(userToken);

  }

  return {
    setToken: saveToken,
    token
  }    

}