document.addEventListener("DOMContentLoaded", function() {
    const cardNumber = document.getElementById("card-number");
    const expMonth = document.getElementById("exp-mm");
    const expYear = document.getElementById("exp-yy");
    const cvc = document.getElementById("cvc");

    cardNumber.addEventListener("input", function(event) {
        let value = event.target.value.replace(/\D/g, '');
        value = value.replace(/(.{4})/g, '$1 ').trim();
        event.target.value = value;
    });

    expMonth.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 2);
    });

    expYear.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 2);
    });

    cvc.addEventListener("input", function() {
        this.value = this.value.replace(/\D/g, '').slice(0, 4);
    });
});
