const socialIcons = [
  {
    dom: document.getElementById("octocat"),
    link: "https://github.com/evanhackett",
    description: "Github - see my code and open source activity"
  },
  {
    dom: document.getElementById("blog"),
    link: "https://evanhackett.com/blog",
    description: "Blog - I write about all things software development"
  },
  {
    dom: document.getElementById("twitter"),
    link: "https://twitter.com/hackett_evan",
    description: "twitter - I might tweet more if I had more followers!"
  },
  {
    dom: document.getElementById("linkedin"),
    link: "https://linkedin.com/in/hackettevan",
    description: "LinkedIn - I heard you're supposed to have one of these..."
  },
]

socialIcons.forEach(item => {
  // set up click handlers for links
  item.dom.onclick = e => {
    setInterval(() => {
      // increase speed of stars. Doing so on an interval causes an acceleration effect.
      speed += 2
    }, 50)
    setTimeout(() => {
      location.assign(item.link);
    }, 1500)
  }

  // set up on hover handlers for link images.
  // On hover will cause text to appear that explains what the link is.
  const linkDescription = document.getElementById("link-description")

  item.dom.onmouseover = () => {
    linkDescription.innerHTML = item.description
  }
  item.dom.onmouseout = () => {
    linkDescription.innerHTML = ''  
  }
})

