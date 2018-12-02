(function (window, document) {
    'use strict'

    let depositar = document.querySelector('#depositar');
    let sacar = document.querySelector('#sacar');
    let btnDepositar = document.querySelector('#btn-depositar');
    let btnSacar = document.querySelector('#btn-sacar');
    let saldo = document.querySelector('#saldo');
    var total = 0;
    
    btnDepositar.addEventListener('click', () => {
        
        total = total + Number(depositar.value);
        saldo.innerHTML = `Seu saldo é: R$ ${total}`;
        depositar.value = '';  
        console.log(total);  
        
    });

    btnSacar.addEventListener('click', () => {

        total = total - Number(sacar.value);
        saldo.innerHTML = `Seu saldo é: R$ ${total}`;
        sacar.value = '';
        console.log(total);

    });


})(window, document);