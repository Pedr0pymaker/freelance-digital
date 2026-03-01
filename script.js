function irPara(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function girarRoleta() {
  const wheel = document.getElementById("wheel");
  const sections = ["sobre", "servicos", "equipe", "contato"];

  const escolha = Math.floor(Math.random() * sections.length);

  // mais giros + precisão
  const girosExtras = 6 * 360; // 6 voltas completas
  const anguloFinal = escolha * 90;
  const totalGiro = girosExtras + anguloFinal;

  wheel.style.transform = `rotate(${totalGiro}deg)`;

  setTimeout(() => {
    document.getElementById(sections[escolha])
      .scrollIntoView({ behavior: "smooth" });
  }, 3000);
}