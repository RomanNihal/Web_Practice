let marks = [2, 3, 4, 5, 6];
console.log(marks);
console.log(marks.length); //property

let heros = ["Iron man", "Spider man", "Bat man"];
console.log(heros);

console.log(heros[1]);
heros[1] = "Aqua man";
console.log(heros); //mutable (but   string is immutable)

for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}

for (let hero of heros) {
    console.log(hero);
}

heros.push("Super man" , "Ant man");
console.log(heros);

let deadHero = heros.pop();
console.log(heros);
console.log(`Dead hero is ${deadHero}`);
console.log(heros.toString()); //Immutable

let m_heros = ["thor", "iron man", "spider man"];
let d_heros = ["Bat man", "Super man"];
let t_heros = m_heros.concat(d_heros); //Immutable
console.log(t_heros);

m_heros.unshift("Ant man");
console.log(m_heros);
m_heros.shift();
console.log(m_heros);

console.log(m_heros.slice(1,3)); //Immutable

m_heros.splice(1,0,"Ant man");
console.log(m_heros);

m_heros.splice(1,1,"Dr Strange");
console.log(m_heros);

m_heros.splice(1,1);
console.log(m_heros);