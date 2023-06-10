const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};


let team  = [...players];
players.pop();
players.push("Dhoni");

let team1 = [];
for(let x of players){
	team1.push(x);
}

let cap1 = {
	...person
};

//console.log(team);
//console.log(players);
//console.log(team1);
//console.log(cap1);

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
