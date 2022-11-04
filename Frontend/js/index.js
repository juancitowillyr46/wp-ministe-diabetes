(function($) {

    // Cintura x Genero
    let gender = 0;
    $("input[name='ui-radio-q2']").click(function() {
        gender = this.value;
        let waistTxtG = "";
        let waistTxtH = "";
        // Mujer
        if(gender == 1) {
            waistTxtG = 'Menos de 90 (cm)';
            waistTxtH = '90 o más (cm)';

        // Hombre
        } else {
            waistTxtG = 'Menos de 94 (cm)';
            waistTxtH = '94 o más (cm)';
        }
        $(".waist-txt-g").html(waistTxtG).hide().fadeIn();
        $(".waist-txt-h").html(waistTxtH).hide().fadeIn();
    });

    // Calculadora IMC
    let imcSize = 0;
    let imcWeight = 0;
    let imcResult = 0;
    let scoreImc = 0;

    $("#imc-size").blur(function() {
        this.value = parseFloat(this.value).toFixed(2);  
        imcSize = this.value;
        calculateImc();
    });

    $("#imc-weight").blur(function() {
        imcWeight = this.value;
        calculateImc();
    });

    function calculateImc() {
        if(imcSize > 0 && imcWeight > 0) {
            imcResult = (imcWeight / imcSize);
            if(imcResult < 25) {
                scoreImc = 0; 
            } else if(imcResult > 25 && imcResult < 30) {
                scoreImc = 1; 
            } else if(imcResult > 30) {
                scoreImc = 3; 
            }
            console.log(scoreImc);
            $("#imc-result").html(imcResult.toFixed(0)).hide().fadeIn();
        }
    }

    $("#view-result").click(function(e){
        e.preventDefault();
        let result = 0;
        let q1 = parseInt($("input[name='ui-radio-q1']:checked").val()); // Edad
        let q2 = parseInt($("input[name='ui-radio-q2']:checked").val()); // Sexo
        let q3 = parseInt($("input[name='ui-radio-q3']:checked").val()); // Cintura
        let q4 = parseInt($("input[name='ui-radio-q4']:checked").val()); // Presión Arterial
        let q5 = parseInt($("input[name='ui-radio-q5']:checked").val()); // Dieta
        let q6 = parseInt($("input[name='ui-radio-q6']:checked").val()); // Actividad Física
        let q7 = parseInt($("input[name='ui-radio-q7']:checked").val()); // Glucemia
        let q8 = parseInt($("input[name='ui-radio-q8']:checked").val()); // Antecedentes Familiares
        let q9 = parseInt(scoreImc); // Índice de Masa Corporal
        result = (q1 + q3 + q4 + q5 + q6 + q7 + q8 + q9);
        console.log(result);
    });

}(jQuery));