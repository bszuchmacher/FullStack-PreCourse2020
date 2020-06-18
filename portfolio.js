let imageToSpin = document.getElementById("profile-image");

function spinImage() {
  imageToSpin.classList.toggle("rotated");
}

fetch("https://api.github.com/users/bszuchmacher")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const myName = document.getElementById("my-name");
    const profileImage = document.getElementById("profile-image");
    myName.innerHTML = data.name;
    profileImage.src = data.avatar_url;
  });