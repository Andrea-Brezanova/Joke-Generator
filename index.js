function showAnswer(response) {
     alert(response.data.answer);
}

let apiKey = "007360a0b0aabc68f2a54boff1b97tfc";
let context =
  "please provide a funny joke, make sure to pick one at a time and a new one every time";
let prompt = "Can you tell me a joke?";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);

let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", createJoke)