function scrollDown() {
  // A quantidade de viewport height (vh) que você quer que a página role para baixo
  const scrollAmountInVh = 90; // Neste exemplo, estamos rolando 50vh para baixo

  // Calcula a nova posição da rolagem somando a quantidade desejada
  const targetPositionInPx = (scrollAmountInVh * window.innerHeight) / 100;

  // Rola a página para a nova posição com animação suave (smooth scrolling)
  window.scrollTo({
    top: targetPositionInPx,
    behavior: "smooth"
  });
}
