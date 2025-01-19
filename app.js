document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    3,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    3,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    4,
    1,
    1,
    1,
    2,
    2,
    1,
    1,
    1,
    4,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    4,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    4,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    4,
    4,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    4,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    4,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    4,
    4,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    4,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    4,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    4,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    4,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    4,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    4,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    3,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    3,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ];

  const squares = [];

  // Create the game board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      // Add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }
  createBoard();

  // Show welcome popup
  function showWelcomePopup() {
    const popup = document.createElement("div");
    popup.id = "welcome-popup";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    popup.style.color = "white";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";
    popup.style.width = "300px";
    popup.style.height = "500px";
    popup.style.display = "flex";
    popup.style.flexDirection = "column";
    popup.style.justifyContent = "center";
  

    popup.innerHTML = `
      <h1>Welcome to PacMan!</h1>
      <p>Use voice commands to control PacMan:</p>
      <ul style="text-align: left; margin: 10px auto;">
        <li>Say <strong>"Up"</strong> to move up</li>
        <li>Say <strong>"Down"</strong> to move down</li>
        <li>Say <strong>"Left"</strong> to move left</li>
        <li>Say <strong>"Right"</strong> to move right</li>
      </ul>
    `;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.display = "none"; 
  }, 2000);
  
}

showWelcomePopup();

  let pacmanCurrentIndex = 490;
  let pacmanVelocity = { x: 0, y: 0 };
  const pacmanSpeed = 200;
  squares[pacmanCurrentIndex].classList.add("pac-man");

  function setPacmanVelocity(transcript) {
    switch (transcript) {
      case "left":
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        ) {
          pacmanVelocity = { x: -1, y: 0 };
        }
        break;
      case "up":
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        ) {
          pacmanVelocity = { x: 0, y: -1 };
        }
        break;
      case "right":
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        ) {
          pacmanVelocity = { x: 1, y: 0 };
        }
        break;
      case "down":
        if (
          pacmanCurrentIndex + width < squares.length &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        ) {
          pacmanVelocity = { x: 0, y: 1 };
        }
        break;
    }
  }


function movePacman() {
  setInterval(() => {
    squares[pacmanCurrentIndex].classList.remove("pac-man");
    const nextIndex =
      pacmanCurrentIndex + pacmanVelocity.x + pacmanVelocity.y * width;

    if (
      nextIndex >= 0 &&
      nextIndex < squares.length &&
      !squares[nextIndex].classList.contains("wall") &&
      !squares[nextIndex].classList.contains("ghost-lair")
    ) {
      pacmanCurrentIndex = nextIndex;
    }

    squares[pacmanCurrentIndex].classList.add("pac-man");
    pacDotEaten();
    powerPelletEaten();
  }, pacmanSpeed);
}

function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      score++;
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
      checkForWin();
    }
  }

  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
      squares[pacmanCurrentIndex].classList.remove("power-pellet");
      checkForWin();
    }
  }

  function checkForWin() {
    if (score === 274) {
      document.getElementById("you-won-screen").style.display = "flex";
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }


  function startGame() {
    document.getElementById("start-screen")?.remove();
    movePacman(); 
    ghosts.forEach((ghost) => moveGhost(ghost)); 
  }

  if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
    alert("Your browser does not support the Web Speech API. Please use Chrome or Firefox.");
  } else {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const lastResultIndex = event.results.length - 1;
      const transcript = event.results[lastResultIndex][0].transcript.trim().toLowerCase();
      console.log(`Recognized speech: ${transcript}`);

   
    if (transcript.includes("start")) {
      console.log("Starting game...");
      startGame();
    } else if (transcript.includes("left")) {
      setPacmanVelocity("left");
    } else if (transcript.includes("right")) {
      setPacmanVelocity("right");
    } else if (transcript.includes("up")) {
      setPacmanVelocity("up");
    } else if (transcript.includes("down")) {
      setPacmanVelocity("down");
    }
    };

    recognition.start();
  }

    class Ghost {
      constructor(className, startIndex, speed) {
        this.className = className;
        this.startIndex = startIndex;
        this.speed = speed;
        this.currentIndex = startIndex;
        this.isScared = false;
        this.timerId = NaN;
      }
    }
  
    ghosts = [
      new Ghost("blinky", 348, 100),
      new Ghost("stinky", 376, 400),
      new Ghost("inky", 351, 300),
      new Ghost("clyde", 379, 200),
    ];
  
    ghosts.forEach((ghost) => {
      squares[ghost.currentIndex].classList.add(ghost.className);
      squares[ghost.currentIndex].classList.add("ghost");
    });
  
    function moveGhost(ghost) {
      const directions = [-1, +1, width, -width];
      let direction = directions[Math.floor(Math.random() * directions.length)];
  
      ghost.timerId = setInterval(function () {
        if (
          !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
          !squares[ghost.currentIndex + direction].classList.contains("wall")
        ) {
          squares[ghost.currentIndex].classList.remove(ghost.className);
          squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");

          ghost.currentIndex += direction;
          squares[ghost.currentIndex].classList.add(ghost.className, "ghost");

        } else direction = directions[Math.floor(Math.random() * directions.length)];
  
        if (ghost.isScared) {
          squares[ghost.currentIndex].classList.add("scared-ghost");
        }
  
        if (
          ghost.isScared &&
          squares[ghost.currentIndex].classList.contains("pac-man")
        ) {
          squares[ghost.currentIndex].classList.remove(
            ghost.className,
            "ghost",
            "scared-ghost"
          );
          ghost.currentIndex = ghost.startIndex;
          score += 100;
          squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
        }
        checkForGameOver();
      }, ghost.speed);
    }

    function checkForGameOver() {
      if (
        squares[pacmanCurrentIndex].classList.contains("ghost") &&
        !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
      ) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        pacmanVelocity.x = 0;
        pacmanVelocity.y = 0;
        document.getElementById("game-over-screen").style.display = "flex";
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      }
    }
  
    function checkForWin() {
      if (score === 274) {
        ghosts.forEach((ghost) => clearInterval(ghost.timerId));
        document.removeEventListener("keyup", movePacman);
        pacmanVelocity.x = 0;
        pacmanVelocity.y = 0;
        document.getElementById("you-won-screen").style.display = "flex";
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      }
    }


  });
