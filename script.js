let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $frames = document.getElementsByClassName("frame"),
  frames = Array.from($frames),
  zVAls = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;
  lastPos = top;

  frames.forEach(function (n, i) {
    zVAls.push(i * zSpacing + zSpacing);
    zVAls[i] += delta * -5.5;
    let frames = frames[i];
    (transform = `translateZ(${zVAls[i]}px)`),
      (opacity = zVAls[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0);
    frames.setAttribute("style", `transform: ${transform};opacity:${opacity}`);
  });
};

window.scrollTo(0, 1);
