var User = /** @class */ (function () {
    function User() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.2;
        this.numeroChiamate += 1;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var FirstUser = new User;
FirstUser.ricarica(5);
console.log("saldo del primo utente: " + FirstUser.numero404());
FirstUser.chiamata(10);
console.log("saldo del primo utente: " + FirstUser.numero404());
console.log("numero chiamate del primo utente: " + FirstUser.getNumeroChiamate());
console.log(" ");
var SecondUser = new User;
SecondUser.ricarica(20);
console.log("saldo del secondo utente: " + SecondUser.numero404());
SecondUser.chiamata(15);
SecondUser.chiamata(25);
console.log("saldo del secondo utente: " + SecondUser.numero404());
console.log("numero chiamate del secondo utente: " + SecondUser.getNumeroChiamate());
console.log(" ");
var ThirdUser = new User;
ThirdUser.ricarica(30);
console.log("saldo del terzo utente: " + ThirdUser.numero404());
ThirdUser.chiamata(20);
ThirdUser.chiamata(15);
ThirdUser.chiamata(30);
console.log("saldo del terzo utente: " + ThirdUser.numero404());
console.log("numero chiamate del terzo utente: " + ThirdUser.getNumeroChiamate());
