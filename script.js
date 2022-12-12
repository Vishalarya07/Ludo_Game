let turn = 0;
let playerA_inbox = 2;
let playerB_inbox = 2;
let eject_counter = 0;
let playerA_red1_presentstate = 0;
let playerA_red2_presentstate = 0;
let playerB_blue1_presentstate = 29;
let playerB_blue2_presentstate = 29;
let red_increment_counter = 0;
let blue_increment_counter = 0;
let roll_dice = 1;
let home_red1_counter = 0;
let home_blue1_counter = 0;
let home_red2_counter = 0;
let home_blue2_counter = 0;

function win_check() {
  if (playerA_red1_presentstate === 28 && playerA_red2_presentstate == 28) {
    set;
    setTimeout(() => {
      alert("PLAYER A WINS");
    }, 1000);
  }
  if (playerB_blue1_presentstate === 14 && playerB_blue2_presentstate === 14) {
    setTimeout(() => {
      alert("PLAYER B WINS");
    }, 1000);
  }
}

function presentstate() {
  console.log(
    "Red1=" +
      playerA_red1_presentstate +
      " Red2=" +
      playerA_red2_presentstate +
      " Blue1=" +
      playerB_blue1_presentstate +
      " Blue2=" +
      playerB_blue2_presentstate +
      " Dice rolls as " +
      roll_dice
  );
}

//-----------------------------------------------------------------------------------------------------
//
// Home
// A : Red 1
function Home_red1() {
  home_red1_counter = 0;
  if (playerA_inbox === 1) {
    if (playerA_red1_presentstate + roll_dice > 28) {
      if (roll_dice === 6) {
        alert("Can't move this token, Eject another token.");
        red_increment_counter = 0;
      } else {
        alert("No move available, dice passes to Player B.");
        red_increment_counter = 0;
        eject_counter = 0;
      }
      home_red1_counter = 1;
      return;
    }
    if (playerA_red1_presentstate + roll_dice === 28) {
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "none";
      playerA_red1_presentstate = playerA_red1_presentstate + roll_dice;
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "block";
      red_increment_counter = 0;
      eject_counter = 0;
      home_red1_counter = 1;
      return;
    }
  }
  if (playerA_inbox === 0) {
    if (playerA_red1_presentstate + roll_dice > 28) {
      alert("Can't move this token, Move another token.");
      // red_increment_counter = 0;
      home_red1_counter = 1;
      return;
    }
    if (playerA_red1_presentstate + roll_dice === 28) {
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "none";
      playerA_red1_presentstate = playerA_red1_presentstate + roll_dice;
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "block";
      red_increment_counter = 0;
      eject_counter = 0;
      home_red1_counter = 1;
      return;
    }
  }
  home_red1_counter = 0;
}
function Home_red2() {
  home_red2_counter = 0;

  if (playerA_red2_presentstate + roll_dice > 28) {
    alert("Can't move this token, Move another token.");
    // red_increment_counter = 0;
    home_red2_counter = 1;
    return;
  }
  if (playerA_red2_presentstate + roll_dice === 28) {
    document
      .querySelector(`.cell-${playerA_red2_presentstate}`)
      .querySelector(".red2").style.display = "none";
    playerA_red2_presentstate = playerA_red2_presentstate + roll_dice;
    document
      .querySelector(`.cell-${playerA_red2_presentstate}`)
      .querySelector(".red2").style.display = "block";
    red_increment_counter = 0;
    eject_counter = 0;
    home_red2_counter = 1;
    return;
  }
}

//blue1
function Home_blue1() {
  home_blue1_counter = 0;
  if (playerB_inbox === 1) {
    if (
      playerB_blue1_presentstate + roll_dice > 14 &&
      playerB_blue1_presentstate > 1 &&
      playerB_blue1_presentstate < 15
    ) {
      if (roll_dice === 6) {
        alert("Can't move this token, Eject another token.");
        blue_increment_counter = 0;
      } else {
        alert("No move available, dice passes to Player B.");
        blue_increment_counter = 0;
        eject_counter = 0;
      }
      home_blue1_counter = 1;
      return;
    }
    if (
      playerB_blue1_presentstate + roll_dice === 14 &&
      playerB_blue1_presentstate > 1 &&
      playerB_blue1_presentstate < 15
    ) {
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "none";
      playerB_blue1_presentstate = playerB_blue1_presentstate + roll_dice;
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "block";
      blue_increment_counter = 0;
      eject_counter = 0;
      home_blue1_counter = 1;
      return;
    }
  }
  if (playerB_inbox === 0) {
    if (
      playerB_blue1_presentstate + roll_dice > 14 &&
      playerB_blue1_presentstate > 1 &&
      playerB_blue1_presentstate < 15
    ) {
      alert("Can't move this token, Move another token.");
      // red_increment_counter = 0;
      home_blue1_counter = 1;
      return;
    }
    if (playerB_blue1_presentstate + roll_dice === 14) {
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "none";
      playerB_blue1_presentstate = playerB_blue1_presentstate + roll_dice;
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "block";
      blue_increment_counter = 0;
      eject_counter = 0;
      home_blue1_counter = 1;
      return;
    }
  }
  home_blue1_counter = 0;
}
function Home_blue2() {
  home_blue2_counter = 0;

  if (
    playerB_blue2_presentstate + roll_dice > 14 &&
    playerB_blue2_presentstate < 15
  ) {
    alert("Can't move this token, Move another token.");
    // red_increment_counter = 0;
    home_blue2_counter = 1;
    return;
  }
  if (
    playerB_blue2_presentstate + roll_dice === 28 &&
    playerB_blue2_presentstate < 15
  ) {
    document
      .querySelector(`.cell-${playerB_blue2_presentstate}`)
      .querySelector(".blue2").style.display = "none";
    playerB_blue2_presentstate = playerB_blue2_presentstate + roll_dice;
    document
      .querySelector(`.cell-${playerB_blue2_presentstate}`)
      .querySelector(".blue2").style.display = "block";
    blue_increment_counter = 0;
    eject_counter = 0;
    home_blue2_counter = 1;
    return;
  }
}

//-------------------------------------------------------------------------------------------------
//
// Cutting
function Cutting_red1() {
  if (
    playerA_red1_presentstate === playerB_blue1_presentstate &&
    playerB_blue1_presentstate != 14
  ) {
    document
      .querySelector(`.cell-${playerB_blue1_presentstate}`)
      .querySelector(".blue1").style.display = "none";
    if (playerB_blue2_presentstate != 29) {
      playerB_blue1_presentstate = playerB_blue2_presentstate;
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "block";
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue2").style.display = "none";
      playerB_blue2_presentstate = 29;
    } else {
      playerB_blue1_presentstate = 29;
    }
    playerB_inbox = playerB_inbox + 1;
  }

  if (
    playerA_red1_presentstate === playerB_blue1_presentstate &&
    playerB_blue1_presentstate != 14
  ) {
    document
      .querySelector(`.cell-${playerB_blue1_presentstate}`)
      .querySelector(".blue1").style.display = "none";
    if (playerB_blue2_presentstate != 29) {
      playerB_blue1_presentstate = playerB_blue2_presentstate;
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "block";
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue2").style.display = "none";
      playerB_blue2_presentstate = 29;
    } else {
      playerB_blue1_presentstate = 29;
    }
    playerB_inbox = playerB_inbox + 1;
  }

  if (
    playerA_red1_presentstate === playerB_blue2_presentstate &&
    playerB_blue2_presentstate != 14
  ) {
    document
      .querySelector(`.cell-${playerB_blue2_presentstate}`)
      .querySelector(".blue2").style.display = "none";
    playerB_blue2_presentstate = 29;
    playerB_inbox = playerB_inbox + 1;
  }
}
function Cutting_red2() {
  if (
    playerA_red2_presentstate === playerB_blue1_presentstate &&
    playerB_blue1_presentstate != 14
  ) {
    document
      .querySelector(`.cell-${playerB_blue1_presentstate}`)
      .querySelector(".blue1").style.display = "none";
    if (playerB_blue2_presentstate != 29) {
      playerB_blue1_presentstate = playerB_blue2_presentstate;
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "block";
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue2").style.display = "none";
      playerB_blue2_presentstate = 29;
    } else {
      playerB_blue1_presentstate = 29;
    }
    playerB_inbox = playerB_inbox + 1;
  }

  if (
    playerA_red2_presentstate === playerB_blue1_presentstate &&
    playerB_blue1_presentstate != 14
  ) {
    document
      .querySelector(`.cell-${playerB_blue1_presentstate}`)
      .querySelector(".blue1").style.display = "none";
    if (playerB_blue2_presentstate != 29) {
      playerB_blue1_presentstate = playerB_blue2_presentstate;
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue1").style.display = "block";
      document
        .querySelector(`.cell-${playerB_blue1_presentstate}`)
        .querySelector(".blue2").style.display = "none";
      playerB_blue2_presentstate = 29;
    } else {
      playerB_blue1_presentstate = 29;
    }
    playerB_inbox = playerB_inbox + 1;
  }

  if (
    playerA_red2_presentstate === playerB_blue2_presentstate &&
    playerB_blue2_presentstate != 14
  ) {
    document
      .querySelector(`.cell-${playerB_blue2_presentstate}`)
      .querySelector(".blue2").style.display = "none";
    playerB_blue2_presentstate = 29;
    playerB_inbox = playerB_inbox + 1;
  }
}
function Cutting_blue1() {
  if (
    playerB_blue1_presentstate === playerA_red1_presentstate &&
    playerA_red1_presentstate != 28
  ) {
    document
      .querySelector(`.cell-${playerA_red1_presentstate}`)
      .querySelector(".red1").style.display = "none";
    if (playerA_red2_presentstate != 0) {
      playerA_red1_presentstate = playerA_red2_presentstate;
      document
        .querySelector(`.cell-${playerA_red2_presentstate}`)
        .querySelector(".red2").style.display = "none";
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "block";
      playerA_red2_presentstate = 0;
    } else {
      playerA_red1_presentstate = 0;
    }
    playerA_inbox = playerA_inbox + 1;
  }

  if (
    playerB_blue1_presentstate === playerA_red1_presentstate &&
    playerA_red1_presentstate != 28
  ) {
    document
      .querySelector(`.cell-${playerA_red1_presentstate}`)
      .querySelector(".red1").style.display = "none";
    if (playerA_red2_presentstate != 0) {
      playerA_red1_presentstate = playerA_red2_presentstate;
      document
        .querySelector(`.cell-${playerA_red2_presentstate}`)
        .querySelector(".red2").style.display = "none";
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "block";
      playerA_red2_presentstate = 0;
    } else {
      playerA_red1_presentstate = 0;
    }
    playerA_inbox = playerA_inbox + 1;
  }

  if (
    playerB_blue1_presentstate === playerA_red2_presentstate &&
    playerA_red2_presentstate != 28
  ) {
    document
      .querySelector(`.cell-${playerA_red2_presentstate}`)
      .querySelector(".red2").style.display = "none";
    playerA_red2_presentstate = 0;
    playerA_inbox = playerA_inbox + 1;
  }
}
function Cutting_blue2() {
  if (
    playerB_blue2_presentstate === playerA_red1_presentstate &&
    playerA_red1_presentstate != 28
  ) {
    document
      .querySelector(`.cell-${playerA_red1_presentstate}`)
      .querySelector(".red1").style.display = "none";
    if (playerA_red2_presentstate != 0) {
      playerA_red1_presentstate = playerA_red2_presentstate;
      document
        .querySelector(`.cell-${playerA_red2_presentstate}`)
        .querySelector(".red2").style.display = "none";
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "block";
      playerA_red2_presentstate = 0;
    } else {
      playerA_red1_presentstate = 0;
    }
    playerA_inbox = playerA_inbox + 1;
  }
  if (
    playerB_blue2_presentstate === playerA_red1_presentstate &&
    playerA_red1_presentstate != 28
  ) {
    document
      .querySelector(`.cell-${playerA_red1_presentstate}`)
      .querySelector(".red1").style.display = "none";
    if (playerA_red2_presentstate != 0) {
      playerA_red1_presentstate = playerA_red2_presentstate;
      document
        .querySelector(`.cell-${playerA_red2_presentstate}`)
        .querySelector(".red2").style.display = "none";
      document
        .querySelector(`.cell-${playerA_red1_presentstate}`)
        .querySelector(".red1").style.display = "block";
      playerA_red2_presentstate = 0;
    } else {
      playerA_red1_presentstate = 0;
    }
    playerA_inbox = playerA_inbox + 1;
  }
  if (
    playerB_blue2_presentstate === playerA_red2_presentstate &&
    playerA_red2_presentstate != 28
  ) {
    document
      .querySelector(`.cell-${playerA_red2_presentstate}`)
      .querySelector(".red2").style.display = "none";
    playerA_red2_presentstate = 0;
    playerA_inbox = playerA_inbox + 1;
  }
}

//-------------------------------------------------------------------------------------------------
//
//Capacity
function Capacity_print() {
  document.querySelector(".playerA").querySelector(".capacity").innerHTML =
    playerA_inbox + " A";
  document.querySelector(".playerB").querySelector(".capacity").innerHTML =
    playerB_inbox + " B";
}

//-------------------------------------------------------------------------------------------------
//
//Incrementing A
function increment_red1() {
  if (red_increment_counter === 0) {
    return;
  }
  Home_red1();
  if (home_red1_counter === 1) {
    // alert("Caught");
    win_check();
    return;
  }

  home_red1_counter = 0;

  document
    .querySelector(`.cell-${playerA_red1_presentstate}`)
    .querySelector(".red1").style.display = "none";

  playerA_red1_presentstate = playerA_red1_presentstate + roll_dice;
  if (playerA_red1_presentstate > 28) {
    playerA_red1_presentstate = playerA_red1_presentstate % 28;
  }
  document
    .querySelector(`.cell-${playerA_red1_presentstate}`)
    .querySelector(".red1").style.display = "block";
  red_increment_counter = 0;
  eject_counter = 0;

  //cutting
  Cutting_red1();
  Capacity_print();
  win_check();
}

function increment_red2() {
  if (red_increment_counter === 0) {
    return;
  }

  Home_red2();
  if (home_red2_counter === 1) {
    // alert("Caught3");
    win_check();
    return;
  }

  document
    .querySelector(`.cell-${playerA_red2_presentstate}`)
    .querySelector(".red2").style.display = "none";
  playerA_red2_presentstate = playerA_red2_presentstate + roll_dice;
  if (playerA_red2_presentstate > 28) {
    playerA_red2_presentstate = playerA_red2_presentstate % 28;
  }
  document
    .querySelector(`.cell-${playerA_red2_presentstate}`)
    .querySelector(".red2").style.display = "block";
  red_increment_counter = 0;
  eject_counter = 0;

  //cutting
  Cutting_red2();
  Capacity_print();
  win_check();
}

//Incrementing B
function increment_blue1() {
  if (blue_increment_counter === 0) {
    return;
  }
  Home_blue1();
  if (home_blue1_counter === 1) {
    // alert("Caught2");
    win_check();
    return;
  }
  home_blue1_counter = 0;

  document
    .querySelector(`.cell-${playerB_blue1_presentstate}`)
    .querySelector(".blue1").style.display = "none";
  playerB_blue1_presentstate = playerB_blue1_presentstate + roll_dice;
  if (playerB_blue1_presentstate > 28) {
    playerB_blue1_presentstate = playerB_blue1_presentstate % 28;
  }

  document
    .querySelector(`.cell-${playerB_blue1_presentstate}`)
    .querySelector(".blue1").style.display = "block";
  blue_increment_counter = 0;
  eject_counter = 0;

  //cutting
  Cutting_blue1();
  Capacity_print();
  win_check();
}
function increment_blue2() {
  if (blue_increment_counter === 0) {
    return;
  }
  Home_blue2();
  if (home_blue2_counter === 1) {
    // alert("Caught4");
    win_check();
    return;
  }
  document
    .querySelector(`.cell-${playerB_blue2_presentstate}`)
    .querySelector(".blue2").style.display = "none";
  playerB_blue2_presentstate = playerB_blue2_presentstate + roll_dice;
  if (playerB_blue2_presentstate > 28) {
    playerB_blue2_presentstate = playerB_blue2_presentstate % 28;
  }

  document
    .querySelector(`.cell-${playerB_blue2_presentstate}`)
    .querySelector(".blue2").style.display = "block";
  blue_increment_counter = 0;
  eject_counter = 0;

  //cutting
  Cutting_blue2();
  Capacity_print();
  win_check();
}

//--------------------------------------------------------------------------------------------------
//
//Ejecting red
function eject_red1() {
  if (eject_counter === 0) {
    return;
  }
  if (playerA_inbox === 1) {
    return;
  }
  document.querySelector(".cell-1").querySelector(".red1").style.display =
    "block";
  eject_counter = 0;
  red_increment_counter = 0;
  playerA_inbox = playerA_inbox - 1;
  playerA_red1_presentstate = 1;
  Cutting_red1();
  Capacity_print();
}
function eject_red2() {
  if (eject_counter === 0) {
    return;
  }
  document.querySelector(".cell-1").querySelector(".red2").style.display =
    "block";
  eject_counter = 0;
  red_increment_counter = 0;
  playerA_inbox = playerA_inbox - 1;
  playerA_red2_presentstate = 1;
  Cutting_red2();
  Capacity_print();
}

//Ejecting blue
function eject_blue1() {
  if (eject_counter === 0) {
    return;
  }
  if (playerB_inbox === 1) {
    return;
  }
  document.querySelector(".cell-15").querySelector(".blue1").style.display =
    "block";
  eject_counter = 0;
  blue_increment_counter = 0;
  playerB_inbox = playerB_inbox - 1;
  playerB_blue1_presentstate = 15;
  Cutting_blue1();
  Capacity_print();
}
function eject_blue2() {
  if (eject_counter === 0) {
    return;
  }
  document.querySelector(".cell-15").querySelector(".blue2").style.display =
    "block";
  eject_counter = 0;
  blue_increment_counter = 0;
  playerB_inbox = playerB_inbox - 1;
  playerB_blue2_presentstate = 15;
  document.querySelector(".playerB").querySelector(".capacity").innerHTML =
    playerB_inbox + " B";
  Cutting_blue2();
  Capacity_print();
}

//Dice roll
function roll() {
  if (eject_counter === 1) {
    alert("Eject / Move your Token first !");
    return;
  }
  if (red_increment_counter === 1) {
    alert("Move your Red Token first !");
    return;
  }
  if (blue_increment_counter === 1) {
    alert("Move your Blue Token first !");
    return;
  }

  roll_dice = Math.ceil(Math.random() * 6);
  document.querySelector(".appear").innerHTML = "DIE ROLLS : " + roll_dice;
  // roll_dice = 6;

  //A turn
  if (turn === 0) {
    document.querySelector(".turn").innerHTML = "TURN : PLAYER A ";
    turn = turn + 1;
    if (playerA_inbox === 2) {
      if (roll_dice === 6) {
        eject_counter = 1;
        document
          .querySelector(".eject-red")
          .addEventListener("click", eject_red1);
      }
    } else if (playerA_inbox === 1 && roll_dice === 6) {
      eject_counter = 1;
      red_increment_counter = 1;
      document
        .querySelector(".eject-red")
        .addEventListener("click", eject_red2);
    } else if (playerA_inbox === 1 && roll_dice < 6) {
      red_increment_counter = 1;
      setTimeout(() => {
        if (playerA_red1_presentstate === 28) {
          alert("No move possible, Dice passes to Player B.");
          red_increment_counter = 0;
        } else if (
          playerA_red1_presentstate + roll_dice > 28 &&
          roll_dice != 6
        ) {
          alert("No move possible, Dice passes to Player B.");
          red_increment_counter = 0;
        }
      }, 1000);
      // increment_red1();
    } else if (playerA_inbox === 0) {
      red_increment_counter = 1;
      setTimeout(() => {
        if (
          playerA_red1_presentstate === 28 &&
          playerA_red2_presentstate === 28
        ) {
          alert("Player A wins ");
          red_increment_counter = 0;
        } else if (
          playerA_red1_presentstate + roll_dice > 28 &&
          playerA_red2_presentstate + roll_dice > 28
        ) {
          if(roll_dice===6)
          alert("No move possible, Re-roll.");
          else 
          alert("No move possible, Dice passes to Player B.");

          red_increment_counter = 0;
        }
      }, 1000);
    }

    if (roll_dice === 6) {
      if (turn == 0) {
        turn = 1;
      } else {
        turn = 0;
      }
    }
    presentstate();
    win_check();
  }

  //B turn
  else {
    document.querySelector(".turn").innerHTML = "TURN : PLAYER B ";
    turn = turn - 1;
    if (playerB_inbox === 2) {
      if (roll_dice === 6) {
        eject_counter = 1;
        document
          .querySelector(".eject-blue")
          .addEventListener("click", eject_blue1);
      }
    } else if (playerB_inbox === 1 && roll_dice === 6) {
      eject_counter = 1;
      blue_increment_counter = 1;
      document
        .querySelector(".eject-blue")
        .addEventListener("click", eject_blue2);
    } else if (playerB_inbox === 1 && roll_dice < 6) {
      blue_increment_counter = 1;
      setTimeout(() => {
        if (playerB_blue1_presentstate === 14) {
          alert("No move possible, Dice passes to Player A.");
          blue_increment_counter = 0;
        } else if (
          playerB_blue1_presentstate + roll_dice > 14 &&
          playerB_blue1_presentstate < 15 &&
          roll_dice != 6
        ) {
          alert("No move possible, Dice passes to Player A.");
          blue_increment_counter = 0;
        }
      }, 1000);
    } else if (playerB_inbox === 0) {
      blue_increment_counter = 1;
      setTimeout(() => {
        if (
          playerB_blue1_presentstate === 14 &&
          playerB_blue2_presentstate === 14
        ) {
          alert("Player B wins ");
          blue_increment_counter = 0;
        } else if (
          playerB_blue1_presentstate + roll_dice > 14 &&
          playerB_blue2_presentstate + roll_dice > 14 &&
          playerB_blue1_presentstate < 15 &&
          playerB_blue2_presentstate < 15
        ) {
          if(roll_dice===6)
          alert("No move possible, Re-roll.");
          else 
          alert("No move possible, Dice passes to Player B.");
          blue_increment_counter = 0;
        }
      }, 1000);
    }

    if (roll_dice === 6) {
      if (turn == 0) {
        turn = 1;
      } else {
        turn = 0;
      }
    }
    presentstate();
    win_check();
  }
}