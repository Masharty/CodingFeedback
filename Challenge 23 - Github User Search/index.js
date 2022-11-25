let profileImg = document.getElementById("github-avatar");
let fullname = document.getElementById("name");
let username = document.getElementById("username");
let joinDate = document.getElementById("join-date");

let bio = document.getElementById("bio");
let repoCount = document.getElementById("repos");
let followerCount = document.getElementById("followers");
let followingCount = document.getElementById("following");

let city = document.getElementById("location");
let twitterHandle = document.getElementById("twitter");
let websiteUrl = document.getElementById("website");
let company = document.getElementById("company");

let noResult = document.getElementById("no-results");

toggleBtn = document.getElementById("mode-btns");
toggleBtn.addEventListener("click", toggleMode);
document.getElementById("search-form").addEventListener("submit", getDetails);

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

function getDetails(e) {
  e.preventDefault();

  let usernameInput = document.getElementById("search").value;

  if (!usernameInput) {
    noResult.style.display = "inline";
      return;
  }

  fetch("https://api.github.com/users/" + usernameInput)
    .then((response) => response.json())
    .then((data) => {
      
      let newDate = new Date(`${data.created_at}`);
      let convertedDate = newDate.toLocaleDateString("en-us", {
        day: "numeric",
        year: "numeric",
        month: "short",
      });

      profileImg.innerHTML = `<img
      id="github-icon"
      src=${data.avatar_url}
    />`;
      fullname.textContent = `${data.name}`;
      username.textContent = `${data.login}`;
      joinDate.textContent = `${convertedDate}`;

      bio.textContent = `${data.bio}`;
      repoCount.textContent = `${data.public_repos}`;
      followerCount.textContent = `${data.followers}`;
      followingCount.textContent = `${data.following}`;

      city.textContent = `${data.location}`;
      twitterHandle.textContent = `${data.twitter_username}`;
      websiteUrl.textContent = `${data.blog}`;
      let companyName = `${data.company}`;

      if (companyName === "null") {
        company.textContent = "None";
      }
    });
}

getDetails();
