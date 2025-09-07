var alreadyTyped = [false, false, false, false, false, false];
var _typeSpeed = 35;

const TypingSpeedToggle = document.getElementById("typingSpeedToggle");

function typeSpeedToggle() {
  if (TypingSpeedToggle.innerHTML == "Speed up typing") {
    // for some reason Zed keeps putting (( )) instead of ( ) when I save
    TypingSpeedToggle.innerHTML = "Slow down typing";
    _typeSpeed = 5;
  } else {
    TypingSpeedToggle.innerHTML = "Speed up typing";
    _typeSpeed = 50;
  }
}

var hero_typed_h1 = new Typed("h1#hero-typed", {
  strings: ["Hi!^750 My name is Aaravv."],
  typeSpeed: _typeSpeed,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(1);
  },
});

function callTyping(section) {
  if (alreadyTyped[section]) {
    return;
  }
  if (section == 1) {
    var aboutme_typed_h1 = new Typed("h1#aboutme-typed", {
      strings: ["A Little Bit About Me"],
      typeSpeed: _typeSpeed,
      showCursor: false,
      onStringTyped: (arrayPos, self) => {
        callSectionTwo(2);
      },
    });
  } else if (section == 2) {
    var projects_typed_h1 = new Typed("h1#skills-typed", {
      strings: ["My Skills"],
      typeSpeed: _typeSpeed,
      showCursor: false,
      onStringTyped: (arrayPos, self) => {
        callSectionTwo(3);
      },
    });
  } else if (section == 3) {
    var projects_typed_h1 = new Typed("h1#projects-typed", {
      strings: ["My Projects"],
      typeSpeed: _typeSpeed,
      showCursor: false,
      onStringTyped: (arrayPos, self) => {
        callSectionTwo(4);
      },
    });
  } else if (section == 4) {
    var competitions_typed_h1 = new Typed("h1#achievements-typed", {
      strings: ["My Achievements and Competitions"],
      typeSpeed: _typeSpeed,
      showCursor: false,
      onStringTyped: (arrayPos, self) => {
        callSectionTwo(5);
      },
    });
  } else if (section == 5) {
    var contact_typed_h1 = new Typed("h1#contactme-typed", {
      strings: ["Contact Me"],
      typeSpeed: _typeSpeed,
      showCursor: false,
      onStringTyped: (arrayPos, self) => {
        callSectionTwo(6);
      },
    });
  }
  alreadyTyped[section] = true;
}

function callSectionTwo(number) {
  if (number == 1) {
    var hero_typed_p = new Typed("p#hero-typed", {
      strings: ["I love math and coding. Welcome to my personal website!"],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 2) {
    var aboutme_typed_p = new Typed("p#aboutme-typed", {
      strings: [
        "My name is Aaravv Chopra. I am 12 years old and I love coding and math. The programming languages I am currently learning are C, Java, and JSX. \
        I am proficient in HTML, CSS, JavaScript, Linux, and Python. I have experience with Virtual Machines and Docker containers.<br class=\"invisible\">I also have a passion for competitive math (see the Competitions section). I am currently working through the Art of Problem Solving books.",
      ],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 3) {
    var projects_typed_p = new Typed("p#skills-typed", {
      strings: ["Hover over or tap each icon to see my current proficiency."],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 4) {
    var projects_typed_p = new Typed("p#projects-typed", {
      strings: [
        "This page will be updated with new projects once I get them to a usable level.  ",
      ],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 5) {
    var achivements_typed_p = new Typed("p#achievements-typed", {
      strings: [
        `I have participated in the following notable competitions:`
      ],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 6) {
    var achievements_typed_p = new Typed("p#contactme-typed", {
      strings: [
        "You can contact me by filling out this form (coming soon)  ",
      ],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  }
}
