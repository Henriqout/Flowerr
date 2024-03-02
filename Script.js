function generateFlowers() {
    const button = document.getElementById("btnred");
    const body = document.querySelector("body");
  
    // Adicione a classe ao body ao clicar no botão
    body.classList.add("black-bg");
  
    for (let i = 0; i < 10; i++) {
      const flower = document.createElement("div");
      flower.classList.add("flying-flower");
      flower.style.left = Math.random() * window.innerWidth + "px";
      body.appendChild(flower);
      setTimeout(() => {
        flower.remove();
      }, 5000); // Remove a flor após 5 segundos
    }
  }
  