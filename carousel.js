document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    const totalItems = carouselItems.length;
    let currentIndex = 0;
  
    // Configuração dos botões de navegação
    prevButton.innerHTML = '&#10094;'; // Símbolo de seta para esquerda
    nextButton.innerHTML = '&#10095;'; // Símbolo de seta para direita
    prevButton.classList.add('carousel-button');
    nextButton.classList.add('carousel-button');
    
    // Adicionando botões ao carrossel
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('carousel-buttons');
    buttonsContainer.appendChild(prevButton);
    buttonsContainer.appendChild(nextButton);
    carousel.parentElement.appendChild(buttonsContainer);
  
    // Função para atualizar o carrossel
    function updateCarousel() {
      const itemWidth = carouselItems[0].clientWidth;
      carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  
    // Função para ir para o item anterior
    function goToPrevious() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 3;
      updateCarousel();
    }
  
    // Função para ir para o próximo item
    function goToNext() {
      currentIndex = (currentIndex < totalItems - 3) ? currentIndex + 1 : 0;
      updateCarousel();
    }
  
    // Eventos de clique nos botões
    prevButton.addEventListener('click', goToPrevious);
    nextButton.addEventListener('click', goToNext);
  
    // Atualiza o carrossel quando a janela é redimensionada
    window.addEventListener('resize', updateCarousel);
  });