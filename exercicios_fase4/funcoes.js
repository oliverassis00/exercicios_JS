function fatorial(n) {

    let fatorial = 1;
    for (let i = n; i >= 1; i --) {
        fatorial *= i;
    }
    return fatorial;

}

console.log(fatorial(6));
