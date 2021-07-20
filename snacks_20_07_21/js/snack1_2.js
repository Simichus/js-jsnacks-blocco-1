let palla = {
    nome: 'palla',
    peso: 10,
}

const display = document.getElementById('display');
const changeWeightButton = document.getElementById('change-weight');
const weightElement = document.getElementById('weight');

displayInDomObj(palla, display)

changeWeightButton.addEventListener('click', function () {
    const newWeight = weightElement.value;
    palla.peso = newWeight;

    displayInDomObj(palla, display);

    weightElement.value = '';
})












function displayInDomObj(object, targetElement) {
    targetElement.innerHTML = '';
    for (let key in object) {
        targetElement.innerHTML += key + ': ' + object[key] + '<br/>';
    }

}
