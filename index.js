function displayJoke(response) {
    // display joke
    console.log("data gathered");
    console.log(response.data.answer);
    // let jokeElement = document.querySelector("#joke");
    // jokeElement.innerHTML = response.data.answer;

    new Typewriter("#joke", {
      strings:response.data.answer,
      autoStart: true,
      cursor: null,
      delay: 10,
    });
}

function createJoke(event) {
    event.preventDefault();

    //let jokeElement = document.querySelector("#joke");
    //jokeElement.innerHTML = "Funny joke";

    // instead of text above, call the API and inside the callback insert the joke in the box and typewrite it
    let apiKey = "007360a0b0aabc68f2a54boff1b97tfc";
    let context =
      "You are a funny and smart assistant that tells short and sweet jokes."
    let prompt = "Generate a unique joke. Please do not repeat the joke from the previous prompt.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let jokeElement = document.querySelector("#joke");
    jokeElement.innerHTML = "Generating a joke for you. You can start smiling already.";

    console.log("calling the AI api"),
    axios.get(apiURL).then(displayJoke);

}

let buttonElement = document.querySelector("#joke-button");
buttonElement.addEventListener("click", createJoke);