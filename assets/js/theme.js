const themeSwitcher = {
  // Config
  _theme: "auto",
  menuTarget: "details.dropdown",
  buttonsTarget: "a[data-theme-switcher]",
  buttonAttribute: "data-theme-switcher",
  rootAttribute: "data-theme",
  localStorageKey: "preferredTheme",

  // Init
  init() {
    this.theme = this.themeFromLocalStorage;
    this.initSwitchers();
  },

  // Get color theme from local storage
  get themeFromLocalStorage() {
    return window.localStorage?.getItem(this.localStorageKey) ?? this._theme;
  },

  // Preferred color theme
  get preferredColorTheme() {
    return window.matchMedia("(prefers-color-theme: dark)").matches
      ? "dark"
      : "light";
  },

  // Init switchers
  initSwitchers() {
    const buttons = document.querySelectorAll(this.buttonsTarget);
    buttons.forEach((button) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          // Set theme
          this.theme = button.getAttribute(this.buttonAttribute);
          // Close dropdown
          document.querySelector(this.menuTarget)?.removeAttribute("open");
        },
        false
      );
    });
  },

  // Set theme
  set theme(theme) {
    if (theme == "auto") {
      this._theme = this.preferredColorTheme;
    } else if (theme == "dark" || theme == "light") {
      this._theme = theme;
    }
    this.applyTheme();
    this.themeToLocalStorage();
  },

  // Get theme
  get theme() {
    return this._theme;
  },

  // Apply theme
  applyTheme() {
    document
      .querySelector("html")
      ?.setAttribute(this.rootAttribute, this.theme);
  },

  // Store theme to local storage
  themeToLocalStorage() {
    window.localStorage?.setItem(this.localStorageKey, this.theme);
  },
};

// Init
themeSwitcher.init();
