const game={
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players:[
[
    'Neuer',
    'Sule',
    'Pavart',
    'Kimmich',
    'Martinez',
    'Lewandowski',
    'Davies',
    'Hernandez',
    'Tolisso',
    'Muller',
    'Coman',
],
[
'Kobel',
'Schulz',
'Ozcan',
'Haller',
'Wolf',
'Brandt',
'Bellingham',
'Can',
'Hummels',
'Ryerson',
'Adeyemi',
],
],
score: '4:0',
scored:['Davies', 'Muller', 'Lewandowski' ,'Kimmich'],
date: 'May 14th, 2003',
odds:{
   team1:1.33,//ti le thang cua bayem
   x:3.25, // ti le hoa
   team2:6.5, // ti le thang cua dortmund
}

};
//1
const [players1,players2]= game.players;
console.log(players1, players2); 
//2
const [gk,...fieldplayerss] = players1;
console.log(gk);
console.log(fieldplayerss);

//3
const allplayerss=[...players1,...players2];
console.log(allplayerss);
//4
const playerss1Final= [...players1,'Thiago','Coutinho','Perisic'];
console.log(playerss1Final);
//5
const {
    odds:{team1,x:draw,team2},
} =game; 
console.log(team1,draw,team2);

//6
const printGoals = function(...players){
console.log(players);
console.log(players.length+" players have scored");
}
printGoals(...game.scored);
//7 
team1 < team2 && console.log('Team 1 win because',team1+' <',team2);
// team có tỉ lế thấp hơn giành chiến thắng