const dice = document.getElementById('dice')
const title = document.getElementById('title')
const advice = document.getElementById('advice')

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const responseJson = await response.json();

    title.innerHTML = 'ADVICE #' + responseJson.slip.id
    advice.innerHTML = '\"' + responseJson.slip.advice + '\"'
}

getAdvice();

dice.addEventListener('click', getAdvice)