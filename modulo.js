function imc(peso, altura) {
    const altura2=altura/100;
    return peso /(altura2*altura2);
    
}
  
module.exports = imc;
