type Szemely = {
    nev: string;
    kor: number;
    magassag?: number;
};

/*
const ember: Szemely = {
    nev: "Valaki",
    kor: 25,
};

const ember2: Szemely = {
    nev: "MegValaki",
};*/

const emberek: Array<Szemely> = [
    {nev: "Valaki", kor: 28, magassag: 185},
    {nev: "Valaki2", kor: 23}
];

const fuggveny = (a: Szemely, b: Szemely): number => a.kor / b.kor;