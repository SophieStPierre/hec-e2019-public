$('a').on('click', function() {
    // Actions à prendre si cet événement est observé
    console.log('AAA');
    $(this).html('Bonjour');
    
    // En combinaison avec .data()
    console.log($(this).data('test'));
});