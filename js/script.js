const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const password = document.getElementById("password").value;

    if(password.length < 8){
        mensaje.style.color = "crimson";
        mensaje.textContent = "La contraseña debe tener mínimo 8 caracteres.";
        return;
    }

    mensaje.style.color = "#2d6a4f";
    mensaje.textContent = "Registro realizado correctamente ✓";

    form.reset();
});
