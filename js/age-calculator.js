const calc = document.getElementById("calc");
const birthday = document.getElementById("dob");
const result = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthday.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday.");
    } else {
        const age = getAge(birthdayValue);
        result.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

calc.addEventListener("click", calculateAge);




document.getElementsByClassName('container')[0].insertAdjacentHTML("afterend", footer);