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

function volver() {

}

function verTrabajos() {
    let titulos = document.querySelector(".cont_titulos");
    titulos.style.display = "none";

    let trabajos = document.querySelector(".cont_proyectos_new");
    trabajos.style.display = "flex";

    let lista = document.querySelector(".cont_listado");
    lista.style.right = "-15%";

    let previews = document.querySelector(".cont_previews");
    previews.style.display = "flex";
}

function verProyectos() {

}

function preview() {

}