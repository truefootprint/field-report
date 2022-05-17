function translate(key, userInterfaceText) {
  //JSON.parse(localStorage.getItem("user_interface_text")).find(x => x.key === key).value
  return userInterfaceText.find(x => x.key === key).value
}

export default translate;
