
document.addEventListener("DOMContentLoaded", function() {
  const linhaImagens = document.querySelector('.rr');
  
  // Pausa a animação quando o mouse passa sobre a linha de imagens
  linhaImagens.addEventListener('mouseenter', function() {
    linhaImagens.style.animationPlayState = 'paused';
  });
  
  // Retoma a animação quando o mouse sai da linha de imagens
  linhaImagens.addEventListener('mouseleave', function() {
    linhaImagens.style.animationPlayState = 'running';
  });
});