
export function storeToken (token) {
  return window.localStorage.setItem("token", token);
}

export function getToken () {
  return window.localStorage.getItem("token");
}

export function isTokenSet () {
  return window.localStorage.getItem("token") ? true : false;
}

export function storeUser (user) {
  return window.localStorage.setItem("user", JSON.stringify(user));
}

export function getUser () {
  if(isUserSet()){
    return JSON.parse(window.localStorage.getItem("user"));
  }else{
    return null;
  }
}

export function isUserSet () {
  return window.localStorage.getItem("user") ? true : false;
}
