
const blacklistURL = "https://raw.githubusercontent.com/rommelzooi/duic-shitposters-text-masker/main/blacklist.json"

// turn posts of blacklisted users into 💩
function maskShit(blacklist) {
  const comments = document.getElementsByClassName("comment__author")

  for(comment of comments) {
    if(blacklist.includes(comment.textContent)) {
      const li = comment.closest("li")
      const p = li.querySelector("p")
      p.textContent = Array.from(p.textContent).map( e => (Math.random() < 0.5 ? e : '💩' )).join("")
    }
  }
}

// get the JSON array with the blacklist from Github
function getBlacklist() {
  fetch(blacklistURL)
  .then( r => {
    return r.json()
  })
  .then( blacklist => {
    console.log("blacklist", blacklist)
    maskShit(blacklist)
  })
  .catch( e => {
    console.warn("error", e);
    console.warn("using default blacklist")
    maskShit(["Scherpschutter"])
  });
}

//
getBlacklist()
