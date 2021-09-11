const socialIcons = [
  {
    dom: document.getElementById("octocat"),
    description: "Github - see my code and open source activity"
  },
  {
    dom: document.getElementById("blog"),
    description: "Blog - I write about all things software development"
  },
  {
    dom: document.getElementById("twitter"),
    description: "twitter - I might tweet more if I had more followers!"
  },
  {
    dom: document.getElementById("linkedin"),
    description: "LinkedIn - I heard you're supposed to have one of these..."
  },
]

function accelerate() {
  for (let i = 0; i < 80; i++) {
    setTimeout(() => speed += 0.5, 50 * i)
  }
}

function decelerate() {
  for (let i = 0; i < 80; i++) {
    setTimeout(() => speed -= 0.5, 50 * i)
  }
}

const workExperience = document.getElementById('work-exp')

socialIcons.forEach(item => {
  // set up on hover handlers for link images.
  const linkDescription = document.getElementById("link-description")
  
  let intervalId;
  
  item.dom.onmouseover = () => {
    // On hover will cause text to appear that explains what the link is.
    linkDescription.innerHTML = item.description
    
    // It will also speed up the star animation.
    accelerate()

    // lastly it will fade out the work experience section text
    workExperience.classList.add('fade-out')
    workExperience.classList.remove('fade-in')
  }
  item.dom.onmouseout = () => {
    linkDescription.innerHTML = ''
    decelerate()
    workExperience.classList.remove('fade-out')
    workExperience.classList.add('fade-in')
  }
})
