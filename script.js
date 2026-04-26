function descargarPDF() {
    if (!validarFormulario()) return;

    const element = document.getElementById("pdf");
    const boton = document.querySelector("button");
    
    // 1. Ocultar botón y asegurar que el scroll esté arriba
    boton.style.display = "none";
    window.scrollTo(0, 0);

    let opt = {
        margin: 0,
        filename: "captacion_venta_tucasacartagena.pdf",
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            logging: false,
            letterRendering: true,
            // Eliminamos los anchos fijos manuales que causaron el blanco
            // y dejamos que la librería detecte el elemento directamente
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { 
            unit: "mm", 
            format: "letter", 
            orientation: "portrait" 
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // 2. Ejecutar la captura
    html2pdf().set(opt).from(element).save().then(() => {
        boton.style.display = "block";
    }).catch(err => {
        console.error("Error generando PDF:", err);
        boton.style.display = "block";
    });
}

    html2pdf().set(opt).from(element).save();
function validarFormulario() {

    let propietario = document.getElementById("propietario")?.value.trim();
    let telefono = document.getElementById("telefono")?.value.trim();

    if (!propietario) {
        alert("El nombre del propietario es obligatorio");
        return false;
    }

    if (!telefono || isNaN(telefono)) {
        alert("El teléfono es obligatorio y debe ser numérico");
        return false;
    }

    return true;
}
function formatearMoneda(input) {
    let valor = input.value.replace(/\D/g, ""); // quitar letras

    if (valor === "") {
        input.value = "";
        return;
    }

    valor = parseInt(valor, 10);

    input.value = "$" + valor.toLocaleString("es-CO");
}
 pagebreak: { mode: ['css', 'legacy'] }
