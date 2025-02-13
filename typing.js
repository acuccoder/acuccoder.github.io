var alreadyTyped = [false, false, false, false, false, false];
var _typeSpeed = 50;

const TypingSpeedToggle = document.getElementById("typingSpeedToggle");

function typeSpeedToggle() {
  if (TypingSpeedToggle.innerHTML == "Speed up typing") {
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
      strings: ["My Notable Projects"],
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
      strings: ["I like coding, math, and anything related to computers."],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 2) {
    var aboutme_typed_p = new Typed("p#aboutme-typed", {
      strings: [
        "My name is Aaravv Chopra. I love coding and Linux-related stuff. I am 11 years old, so pretty young for someone who is into coding. I am learning C, and I currently know HTML, CSS, JavaScript, basically every existing block coding language, and Python. BTW, I use Arch.",
      ],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 3) {
    var projects_typed_p = new Typed("p#skills-typed", {
      strings: ["Hover over the skills to see my current proficiency."],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 4) {
    var projects_typed_p = new Typed("p#projects-typed", {
      strings: [
        "This page will be updated with new projects once I get around to working on them. For now, I don't have any useful projects except for some Scratch games.  ",
      ],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 5) {
    var achivements_typed_p = new Typed("p#achievements-typed", {
      strings: [""],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  } else if (number == 6) {
    var achievements_typed_p = new Typed("p#contactme-typed", {
      strings: [
        "You can contact me by filling out this form (coming as soon as I can setup @aaravv.me emails)  ",
      ],
      typeSpeed: _typeSpeed,
      showCursor: false,
    });
  }
}
