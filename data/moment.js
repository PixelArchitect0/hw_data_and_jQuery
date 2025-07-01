const input = document.querySelector("#bday");
const button = document.querySelector("#calculate");
const resultDiv = document.querySelector("#result");

button.addEventListener("click", () => {
    const inputDate = input.value;

    if (!inputDate) {
        resultDiv.innerText = "Будь ласка, введіть дату народження.";
        return;
    }

    const birthDate = moment(inputDate);
    const now = moment();

    const years = now.diff(birthDate, 'years');
    const months = now.diff(birthDate, 'months') % 12;
    const days = now.diff(birthDate.add({ years, months }), 'days');


    const nextBday = moment(inputDate).year(now.year());
    if (nextBday.isBefore(now, 'day')) {
        nextBday.add(1, 'year');
    }
    const untilNextBday = moment.duration(nextBday.diff(now));

    resultDiv.innerHTML = `
         Ваш вік: ${years} років, ${months} місяців, ${days} днів.
         До наступного Дня народження залишилось: 
        ${untilNextBday.months()} міс. 
        ${untilNextBday.days()} дн.
      `;
});