const xhr = new XMLHttpRequest;
xhr.responseType = "json";
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

const poll_title = document.getElementById("poll__title");
const poll_answers = document.getElementById("poll__answers");

const addAnswer = (answer) => {
    const newAnswer = document.createElement("button");
    newAnswer.classList = "poll__answer";
    newAnswer.innerHTML = answer;

    poll_answers.append(newAnswer);

    newAnswer.onclick = () => { alert("Спасибо, ваш голос засчитан!") }
}

xhr.onload = () => {
    response = xhr.response;
    poll_title.insertAdjacentText("beforeend", response["data"]["title"]);

    const answers = response["data"]["answers"];
    answers.forEach(answer => { addAnswer(answer) });
}