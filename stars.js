// Get username
const metaTags = document.getElementsByTagName('meta');
let username;

for (tag of metaTags) {
  if (tag.getAttribute('name') == 'user-login') {
    username = tag.getAttribute('content');
  }
}

// Create elements
const nav = document.getElementsByClassName('header-nav float-left').item(0);
const li = document.createElement('li');
const a = document.createElement('a');
const text = document.createTextNode('Your stars');

// Append to document
a.href = `https://github.com/${username}?tab=stars`;
a.appendChild(text);
a.className += 'header-nav-link';
li.appendChild(a);
li.className += 'header-nav-item';
nav.appendChild(li);
