const btnel = document.getElementById("btn");
const jokeel = document.getElementById("joke");

const apikey = "3iPuGouKdZ6drsGe8+aJdw==AVlWPtdLi8zYyWXj";
const option = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};
const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke() {
  try {
    jokeel.style.color = "Green";
    jokeel.innerText = "Updating....";
    btnel.disabled = true;
    btnel.innerText = "Loading...";
    const response = await fetch(apiurl, option);
    const data = await response.json();
    jokeel.style.color = "rgb(253, 18, 1)";
    jokeel.innerText = data[0].joke;
    btnel.disabled = false;
    btnel.innerText = "Tell Me Another Joke";
  } catch (error) {
    jokeel.innerText = "An Error Accured! So please try again later.";
    btnel.disabled = false;
    btnel.innerText = "Tell Me Another Joke";
  }
}

btnel.addEventListener("click", getjoke);
