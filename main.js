window.addEventListener("load", function () {
    document.getElementById("loader").classList.remove("loader2");

    setTimeout(function () {
        document.getElementById("loader").classList.add("loader2");

        setTimeout(function () {
            document.getElementById("loader").classList.add("loader2");
        }, 1000);
    }, 2000);

});

function verLista() {
    let lista = document.querySelector(".cont_listado");
    let check = document.querySelector("#check");

    if (check.checked) {
        lista.style.right = "4%";
    } else {
        lista.style.right = "-15%";
    }
}

function verTrabajos() {
    let titulos = document.querySelector(".cont_titulos");
    titulos.style.display = "none";

    let trabajos = document.querySelector(".cont_proyectos_new");
    trabajos.style.display = "flex";

    let lista = document.querySelector(".cont_listado");
    lista.style.right = "-15%";

    let check = document.querySelector("#check");
    check.checked = false;
}

function verProyectos() {

}

function previewQuienSoy() {
    let check = document.querySelector("#check2");
    let cont1 = document.querySelector("#quienSoy");

    if (check.checked) {
        cont1.style.display = "none";
    }
    else {
        cont1.style.display = "flex";
    }
}

function previewFactura(){
    let check = document.querySelector("#check2");
    let cont1 = document.querySelector("#factura");

    if (check.checked) {
        cont1.style.display = "none";
    }
    else {
        cont1.style.display = "flex";
    }
}

function previewCalendario(){
    let check = document.querySelector("#check2");
    let cont1 = document.querySelector("#calendario");

    if (check.checked) {
        cont1.style.display = "none";
    }
    else {
        cont1.style.display = "flex";
    }
}

function previewFormulario(){
    let check = document.querySelector("#check2");
    let cont1 = document.querySelector("#formulario");

    if (check.checked) {
        cont1.style.display = "none";
    }
    else {
        cont1.style.display = "flex";
    }
}

function previewPresupuesto(){
    let check = document.querySelector("#check2");
    let cont1 = document.querySelector("#presupuesto");

    if (check.checked) {
        cont1.style.display = "none";
    }
    else {
        cont1.style.display = "flex";
    }
}

function previewTienda(){
    let check = document.querySelector("#check2");
    let cont1 = document.querySelector("#tienda");

    if (check.checked) {
        cont1.style.display = "none";
    }
    else {
        cont1.style.display = "flex";
    }
}