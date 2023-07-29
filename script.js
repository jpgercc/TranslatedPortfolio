function scrollDown() {
    const scrollAmountInVh = 90;
  
    const targetPositionInPx = (scrollAmountInVh * window.innerHeight) / 100;
  
    window.scrollTo({
      top: targetPositionInPx,
      behavior: "smooth"
    });
  }