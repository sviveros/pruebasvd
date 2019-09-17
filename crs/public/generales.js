function mostrar(){
    alert("OK. PUBLIC Muestro algo. !!!");
};

function asignar(cdg, nmb, abr){
    var lss_unidacdg = document.getElementById("unidacdg");
    var lss_unidanmb = document.getElementById("unidanmb");
    var lss_unidaabr = document.getElementById("unidaabr");
    lss_unidacdg.value = cdg;
    lss_unidanmb.value = nmb;
    lss_unidaabr.value = abr;

    lss_unidacdg.disabled = true;

    var lss_form = document.getElementById("frmcaptura");
    lss_form.action = "/update/"+cdg;

    var btn_guardar = document.getElementById("btnguardar");
    btn_guardar.textContent = "Reg. Cambios";
};

function confirmar_eliminar(cdg){
    var respuesta = confirm("Esta seguro de eliminar el registro. ?");
    if(respuesta){
        self.location.href="/delete/"+cdg;
    };
};

function cancelar(){
    self.location.href="/unidades";
};

