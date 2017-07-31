// Get username
const username = document.querySelector('meta[name="user-login"]')

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
