const teams = [
    { name: 'Juventus', city: 'Torino', points: 82, },
    { name: 'Napoli', city: 'Napoli', points: 80, },
    { name: 'Milan', city: 'Milano', points: 82, }

];


const teamsTable = document.getElementById('teams');

let message = '';

for (let i = 0; i < teams.length; i++) {
    message += '<tr>';
    for (let key in teams[i]) {
        message += '<td>' + teams[i][key] + '</td>';
    }
    message += '</tr>';
}
console.log(message)

teamsTable.innerHTML = message;



