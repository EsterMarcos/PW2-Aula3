{
    var n1 = 10;
    var n2 = 9;
    //let n3 : number = 5;
    var fMedia = function (nota1, nota2, nota3) {
        if (nota3 === void 0) { nota3 = 7; }
        return (nota1 + nota2 + nota3) / 3;
    };
    // acima a forma simplificada de uma função
    //no caso da ausenncia de um dado pode se colocar sua equivalencia diretamente na função
    console.log("A media \u00E9 " + fMedia(n1, n2));
    // com o uso do cifrão e da craze exibe-se o texto de uma forma mais simples
}
