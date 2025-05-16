let getUser = JSON.parse(localStorage.getItem('student'))

let item = document.querySelector('.item')

item.textContent = getUser.usernames

console.log(getUser);
