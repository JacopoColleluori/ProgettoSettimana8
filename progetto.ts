interface Smartphone {
    carica: number;
    numeroChiamate: number;
}

class User implements Smartphone {
    
    carica=0;
    numeroChiamate=0;


    public ricarica(unaRicarica: number): void {
        this.carica+=unaRicarica;
    }
   

    public chiamata(minutiDurata: number): void {
    this.carica-=minutiDurata * 0.2
    this.numeroChiamate+=1
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
       return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate=0;
    }
}

let  FirstUser= new User;

FirstUser.ricarica(5);

console.log("saldo del primo utente: " + FirstUser.numero404())

FirstUser.chiamata(10);


console.log("saldo del primo utente: " + FirstUser.numero404())
console.log("numero chiamate del primo utente: " +FirstUser.getNumeroChiamate())

console.log(" ")

let SecondUser= new User;

SecondUser.ricarica(20);

console.log("saldo del secondo utente: " + SecondUser.numero404())

SecondUser.chiamata(15);
SecondUser.chiamata(25);

console.log("saldo del secondo utente: " + SecondUser.numero404())
console.log("numero chiamate del secondo utente: " +SecondUser.getNumeroChiamate())

console.log(" ")

let ThirdUser = new User;

ThirdUser.ricarica(30);

console.log("saldo del terzo utente: " + ThirdUser.numero404())

ThirdUser.chiamata(20);
ThirdUser.chiamata(15);
ThirdUser.chiamata(30);

console.log("saldo del terzo utente: " + ThirdUser.numero404())
console.log("numero chiamate del terzo utente: " + ThirdUser.getNumeroChiamate())


