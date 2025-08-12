document.getElementById('comprobar').addEventListener('click', verificar);

function verificar() {
    const respuesta = parseInt(document.getElementById('respuesta').value);
    const mensajeDiv = document.getElementById('mensaje');
    const imagenDiv = document.getElementById('imagen');

    mensajeDiv.innerHTML = "";
    imagenDiv.innerHTML = "";

    if (respuesta === 10) {
        mensajeDiv.textContent = "✅ Correcto: primero se hace la multiplicación (5×0=0), luego la suma (5+5+0=10).";
    } else if (respuesta === 0) {
        mensajeDiv.textContent = "❌ Incorrecto: te olvidaste de la suma.";
        imagenDiv.innerHTML = `<img src="estupido.jpg" alt="Explicación divertida">
                                <p>Recuerda que según el orden de operaciones, multiplicamos antes de sumar.</p>`;
    } else {
        mensajeDiv.textContent = "❌ No es correcto. Intenta de nuevo.";
    }
}
