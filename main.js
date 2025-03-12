const windowContainer = document.getElementById("windowContainer");

const homepage = `
  <div class="window">
      <div class="title-bar">
          <button aria-label="Close" class="close" onclick="this.parentElement.parentElement.style.display = 'none';"></button>
          <h1 class="title">Home</h1>
          <button aria-label="Resize" class="resize"></button>
      </div>
      <div class="separator"></div>
      <div class="window-pane">
          <h1 id="hero-typed"></h1>
          <p id="hero-typed"></p>
          <!-- <button class="btn">Hello</button> -->
          <small>Click the "Places" menu to navigate.</small>
      </div>
  </div>
  `;

const aboutme = `
  <div class="window">
      <div class="title-bar">
          <button aria-label="Close" class="close" onclick="this.parentElement.parentElement.style.display = 'none';"></button>
          <h1 class="title">Home</h1>
          <button aria-label="Resize" class="resize"></button>
      </div>
      <div class="separator"></div>
      <div class="window-pane">
          <h1 id="aboutme-typed"></h1>
          <p id="aboutme-typed"></p>
          <!-- <button class="btn">Hello</button> -->
      </div>
  </div>
  `;

function openWindow(windowType) {
  if (windowType == 1) {
    windowContainer.innerHTML = homepage;
    callTyping(1);
  }
  if (windowType == 2) {
    windowContainer.innerHTML = aboutme;
    callTyping(2);
  }
}

document.body.onload = openWindow(1);
