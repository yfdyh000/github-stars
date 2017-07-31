// Get username
const metaTags = document.getElementsByTagName('meta')
let username

for (tag of metaTags) {
  if (tag.getAttribute('name') == 'user-login') {
    username = tag.getAttribute('content')
  }
}

// Create elements
const nav = document.getElementsByClassName('d-flex list-style-none').item(0)
const li = document.createElement('li')
const a = document.createElement('a')
const text = document.createTextNode('Stars')

// Append to document
a.href = `https://github.com/${username}?tab=stars`
a.appendChild(text)
a.className += 'header-navlink'
li.appendChild(a)
nav.appendChild(li)
