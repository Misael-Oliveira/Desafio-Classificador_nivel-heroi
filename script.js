let heroi = [["Pikachu", 3000], ["Capritão América", 8000], ["Homem de Ferro", 6500]];
let nivelHeroi;

for (let i = 0; i<heroi.length; i++) {
    if (heroi[i][1] <= 1000) {
        nivelHeroi = "Ferro";
    }
    else if (1001 <= heroi[i][1] && heroi[i][1] <= 2000) {
        nivelHeroi = "Bronze";
    }
    else if (2001 <= heroi[i][1] && heroi[i][1] <= 5000) {
        nivelHeroi = "Prata";
    }
    else if (5001 <= heroi[i][1] && heroi[i][1] <= 7000) {
        nivelHeroi = "Ouro";
    }
    else if (7001 <= heroi[i][1] && heroi[i][1] <= 8000) {
        nivelHeroi = "Platina";
    }
    else if (8001 <= heroi[i][1] && heroi[i][1] <= 9000) {
        nivelHeroi = "Ascedente";
    }
    else if (9001<= heroi[i][1] && heroi[i][1] <= 10000) {
        nivelHeroi = "Imortal";
    }
    else {
        nivelHeroi = "Radiante";
    }
    console.log(`O Herói de nome ${heroi[i][0]} está no nível de ${nivelHeroi}`);
}