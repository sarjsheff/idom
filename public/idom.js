(() => {
  // src/iloading.js
  var iLoading = class extends HTMLElement {
    connectedCallback() {
      this.root = this.appendChild(document.createElement("div"));
      this.root.textContent = "Loading...";
      this.root.style.position = "sticky";
      this.root.style.width = "100%";
      this.root.style.height = "100%";
      this.root.style.display = "flex";
      this.root.style.alignItems = "center";
      this.root.style.justifyContent = "center";
      this.root.style.alignContent = "stretch";
      this.root.style.backgroundColor = "rgba(37, 37, 37, 0.5)";
    }
  };
  customElements.define("i-loading", iLoading);

  // src/iicon.js
  var icons = {
    temp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    hum: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-drizzle"><line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`,
    url: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    pass: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    default: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    logout: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    wifi: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
    wifioff: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wifi-off"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>`,
    up: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    config: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
  };
  var iIcon = class extends HTMLElement {
    constructor(name, width, height, callback) {
      super();
      this.name = name || this.getAttribute("name");
      this.width = Number(width || this.getAttribute("width") || 24);
      this.height = Number(height || this.getAttribute("height") || 24);
      this.callback = callback;
    }
    setName(name) {
      this.name = name;
      this.render();
    }
    render() {
      this.innerHTML = icons[this.name] || icons.default;
      this.firstChild.setAttribute("width", this.width);
      this.firstChild.setAttribute("height", this.height);
      if (this.callback) {
        this.style.cursor = "pointer";
        this.onmouseover = () => this.firstChild.style.stroke = "palevioletred";
        this.ontouchcancel = () => this.firstChild.style.stroke = "white";
        this.onmouseout = () => this.firstChild.style.stroke = "white";
        this.onclick = this.callback;
      }
    }
    connectedCallback() {
      this.render();
    }
  };
  var iIconHtml = class extends iIcon {
    constructor() {
      super();
    }
  };
  customElements.define("i-icon", iIconHtml);
  customElements.define("i-icon-raw", iIcon);

  // src/idialogbase.js
  var iDialogBase = class extends HTMLElement {
    closeDialog() {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      this.remove();
    }
    connectedCallback() {
      const sy = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${sy}px`;
      document.body.style.right = 0;
      document.body.style.left = 0;
      this.root = this.appendChild(document.createElement("div"));
      this.root.style.zIndex = 1e3;
      this.root.style.position = "fixed";
      this.root.style.top = "0";
      this.root.style.width = "100%";
      this.root.style.height = "100vh";
      this.root.style.display = "flex";
      this.root.style.alignItems = "center";
      this.root.style.justifyContent = "center";
      this.root.style.alignContent = "stretch";
      this.root.style.flexDirection = "column";
      this.root.style.backgroundColor = "rgba(37, 37, 37, 0.8)";
      this.close = this.root.appendChild(new iIcon("x", 24, 24, () => {
        this.closeDialog();
      }));
      this.close.style.width = "40px";
      this.close.style.padding = "10";
      this.close.style.position = "absolute";
      this.close.style.right = 0;
      this.close.style.top = 0;
      this.build();
    }
    build() {
    }
  };

  // src/ilogin.js
  var iLogin = class extends iDialogBase {
    constructor(onconnect) {
      super();
      this.onconnect = onconnect;
    }
    build() {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      this.close.remove();
      this.content = this.root.appendChild(document.createElement("div"));
      this.content.textContent = "Login";
      this.content.style.width = "300px";
      this.content.style.height = "400px";
      this.content.style.display = "flex";
      this.content.style.flexDirection = "column";
      this.content.style.justifyContent = "space-evenly";
      this.content.style.alignItems = "stretch";
      this.content.style.backgroundColor = "rgba(37, 37, 37, 0.9)";
      this.content.style.padding = "50px";
      this.content.innerHTML = `
            <h1>iDom v.0.1.0</h1>
            <div style="display: flex;align-content: stretch;justify-content: space-evenly;align-items: center;">
                <select id="protocol">
                    <option value="nats">NATS WS</option>
                    <option value="mqtt">MQTT WS</option>
                </select>
            </div>
            <div style="display: flex;align-content: stretch;justify-content: space-evenly;align-items: center;">
                <div style="width: 24px;"><i-icon name="url" ></i-icon></div><div><input id="url" type="text" style="width: 100%;"></div>
            </div>
            <div style="display: flex;align-content: stretch;justify-content: space-evenly;align-items: center;">
                <div style="width: 24px;"><i-icon name="user" ></i-icon></div><div><input id="username" type="text" style="width: 100%;"></div>
            </div>
            <div style="display: flex;align-content: stretch;justify-content: space-evenly;align-items: center;">
                <div style="width: 24px;"><i-icon name="pass" ></i-icon></div><div><input id="password" type="password" style="width: 100%;"></div>
            </div>
            <button>Connect</button>
        `;
      this.protocol = this.content.querySelector("#protocol");
      this.protocol.value = localStorage.getItem("idom_protocol") || "nats";
      this.url = this.content.querySelector("#url");
      this.url.value = localStorage.getItem("idom_url") || "ws://" + location.host;
      this.url.addEventListener("input", (a) => this.validate());
      this.username = this.content.querySelector("#username");
      this.username.value = localStorage.getItem("idom_username") || "";
      this.username.addEventListener("input", (a) => this.validate());
      this.password = this.content.querySelector("#password");
      this.password.value = localStorage.getItem("idom_password") || "";
      this.password.addEventListener("input", (a) => this.validate());
      this.button = this.content.querySelector("button");
      this.button.disabled = true;
      this.button.addEventListener("click", () => {
        this.onconnect(this.url.value, this.username.value, this.password.value, this.protocol.value);
      });
      this.validate();
    }
    validate() {
      this.button.disabled = !(this.username.value && this.username.value.length > 0 && this.password.value && this.password.value.length > 0);
    }
  };
  customElements.define("i-login", iLogin);

  // src/iswitch.js
  var iSwitch = class extends HTMLElement {
    state = "?";
    index = 0;
    constructor(idom, devname) {
      super();
      this.idom = idom;
      this.devname = devname;
    }
    setState(state) {
      this.state = state;
      this.root.className = "iswitch " + (state == "ON" ? "ON" : "OFF");
      this.render();
    }
    setName(name) {
      this.name = name;
      this.render();
    }
    setFName(fname) {
      this.fname = fname;
      this.render();
    }
    render() {
      if (this.state == "?")
        this.root.innerHTML = `${this.fname || this.name}<div class="spinner"></div>`;
      else
        this.root.innerHTML = `${this.fname || this.name} <span>${this.state}</span>`;
    }
    connectedCallback() {
      this.style.padding = "5px";
      this.root = this.appendChild(document.createElement("button"));
      this.root.className = "iswitch";
      this.root.textContent = "Loading...";
      this.root.addEventListener("click", () => {
        if (this.state != "?") {
          this.state = "?";
          this.render();
          this.idom.publish(`cmnd/${this.devname}/Power${this.index + 1}`, "TOGGLE");
        }
      });
    }
    setIndex(i) {
      this.index = i;
    }
  };
  customElements.define("i-switch", iSwitch);

  // src/iinfo.js
  var iInfo = class extends iDialogBase {
    constructor(info) {
      super();
      this.info = info;
    }
    build() {
      this.root.appendChild(document.createElement("h1")).textContent = this.info.DeviceName || this.info.STATUS.Status.DeviceName;
      const t = this.root.appendChild(document.createElement("table"));
      this.table = t.appendChild(document.createElement("tbody"));
      t.style.minWidth = "300px";
      t.style.textAlign = "left";
      this.row("DeviceName", this.info.DeviceName || this.info.STATUS.Status.DeviceName);
      this.row("Topic", this.info.Topic || this.info.STATUS.Status.Topic);
      this.row("IP", this.info.Ip || this.info.STATUS5.StatusNET.IPAddress);
      const b = this.root.appendChild(document.createElement("button"));
      b.textContent = "Close";
      b.style.maxWidth = "300px";
      b.style.marginTop = "20px";
      b.onclick = () => {
        this.closeDialog();
      };
    }
    row(k, v) {
      const row = this.table.insertRow();
      row.appendChild(document.createElement("th")).textContent = k;
      row.appendChild(document.createElement("td")).textContent = v;
    }
  };
  customElements.define("i-info", iInfo);

  // src/idevconfig.js
  var iField = class extends HTMLElement {
    constructor(name, value) {
      super();
      this.v = value;
      this.name = name;
    }
    get value() {
      return this.input.value || "";
    }
    connectedCallback() {
      this.className = "idom-config-row";
      this.label = this.appendChild(document.createElement("div"));
      this.label.className = "idom-config-label";
      this.label.textContent = this.name;
      this.input = this.appendChild(document.createElement("input"));
      this.input.value = this.v;
    }
  };
  var iDevConfig = class extends iDialogBase {
    constructor(dev) {
      super();
      this.dev = dev;
    }
    build() {
      this.content = this.root.appendChild(document.createElement("div"));
      this.content.className = "idom-config";
      this.group = this.content.appendChild(new iField("Group", this.dev.group));
      this.savebutton = this.content.appendChild(document.createElement("div")).appendChild(document.createElement("button"));
      this.savebutton.parentElement.className = "idom-config-row";
      this.savebutton.textContent = "Save";
      this.savebutton.onclick = () => {
        this.dev.group = this.group.value;
        this.closeDialog();
      };
    }
  };
  customElements.define("i-field", iField);
  customElements.define("i-dev-config", iDevConfig);

  // src/idevbase.js
  var iDevBase = class extends HTMLElement {
    get group() {
      return localStorage.getItem("idom_group|" + this.name) || "Other";
    }
    set group(v) {
      localStorage.setItem("idom_group|" + this.name, v);
    }
    constructor(name, idom) {
      super();
      this.name = name;
      this.idom = idom;
    }
    setOrder(order) {
      this.style.order = order;
      localStorage.setItem("idom_order|" + this.name, order);
    }
    connectedCallback() {
      this.root = this.appendChild(document.createElement("div"));
      this.root.id = this.name;
      this.root.className = "idom-device-root";
      this.root.position = "relative";
      const swap = (up) => {
        const lst = Array.prototype.slice.call(this.parentElement.querySelectorAll(".idom-device")).sort((a, b) => a.style.order - b.style.order);
        for (let idx = 0; idx < lst.length; idx++) {
          if (lst[idx] == this && idx != (up ? 0 : lst.length - 1)) {
            const cur = this.style.order;
            this.setOrder(lst[idx + (up ? -1 : 1)].style.order);
            lst[idx + (up ? -1 : 1)].setOrder(cur);
            break;
          }
        }
      };
      this.upbutton = new iIcon("up", 24, 24, () => swap(true));
      this.downbutton = new iIcon("down", 24, 24, () => swap(false));
      this.infobutton = new iIcon("info", 18, 18, () => {
        this.parentElement.parentElement.parentElement.appendChild(new iInfo(this.dev));
      });
      this.infobutton.style.paddingRight = "4px";
      this.configbutton = new iIcon("config", 18, 18, () => {
        this.parentElement.parentElement.parentElement.appendChild(new iDevConfig(this));
      });
      this.configbutton.style.paddingRight = "8px";
      this.buildToolbar();
      this.buildTitle();
      this.body = this.root.appendChild(document.createElement("div"));
      this.body.className = "idom-device-body";
      this.buildCustom();
    }
    buildToolbar() {
      this.toolbar = this.root.appendChild(document.createElement("div"));
      this.toolbar.appendChild(this.configbutton);
      this.toolbar.appendChild(this.infobutton);
      this.toolbar.appendChild(this.upbutton);
      this.toolbar.appendChild(this.downbutton);
      this.toolbar.style.position = "relative";
      this.toolbar.className = "idom-device-toolbar";
    }
    buildTitle() {
      this.titleNode = this.toolbar.insertAdjacentElement("afterbegin", document.createElement("div"));
      this.titleNode.style.marginRight = "auto";
      this.titleNode.style.fontWeight = "700";
      this.titleNode.textContent = this.deviceName || this.name;
    }
    buildCustom() {
    }
    update(dev) {
      this.dev = dev;
    }
  };

  // src/idev.js
  var iDev = class extends iDevBase {
    sw = [];
    constructor(name, idom) {
      super();
      this.name = name;
      this.idom = idom;
    }
    buildTitle() {
      this.titleNode = this.toolbar.insertAdjacentElement("afterbegin", document.createElement("div"));
      this.titleNode.style.marginRight = "auto";
      this.titleNode.style.fontWeight = "700";
      this.titleNode.textContent = this.deviceName || this.name;
    }
    buildCustom() {
      this.sensorNode = this.body.appendChild(document.createElement("div"));
      this.sensorNode.className = "idom-device-sensor";
      this.sensorNode.style.display = "none";
      this.statusNode = this.body.appendChild(document.createElement("div"));
      this.statusNode.style.display = "none";
      this.swNode = this.body.appendChild(document.createElement("div"));
      this.swNode.className = "idom-device-switches";
    }
    update(dev) {
      this.dev = dev;
      this.statusNode.textContent = dev.LWT || "";
      if (dev.SENSOR || dev.STATUS8) {
        const sensor = dev.SENSOR || dev.STATUS8.StatusSNS;
        const tmp = sensor.AM2301 || sensor.SI7021;
        if (tmp) {
          this.sensorNode.style.display = "block";
          this.sensorNode.innerHTML = tmp ? `<i-icon width="24" height="24" name="temp" ></i-icon>${tmp.Temperature}C <i-icon width="24" height="24" name="hum" style="padding-left: 20px" ></i-icon> ${tmp.Humidity}%` : "?";
        }
      }
      if (dev.STATUS) {
        dev.STATUS.Status.FriendlyName.forEach((e, i) => {
          this.addSwElement(i);
          this.sw[i].setIndex(i);
          this.sw[i].setFName(e);
          this.sw[i].setState(i + 1 == dev.STATUS.Status.Power ? "ON" : "OFF");
        });
        this.deviceName = dev.STATUS.Status.DeviceName;
        this.titleNode.textContent = this.deviceName || this.name;
      }
      Object.keys(dev).filter((a) => a.startsWith("POWER")).forEach((e) => {
        const i = Number(e.substring(5) || 1) - 1;
        this.addSwElement(i);
        this.sw[i].setIndex(i);
        this.sw[i].setName(e);
        this.sw[i].setState(dev[e]);
      });
    }
    addSwElement(i) {
      if (this.sw[i] === void 0) {
        if (this.sw[i + 1]) {
          this.sw[i] = this.swNode.insertBefore(new iSwitch(this.idom, this.name), this.sw[i + 1]);
        } else {
          this.sw[i] = this.swNode.appendChild(new iSwitch(this.idom, this.name));
        }
      }
    }
  };
  customElements.define("i-dev", iDev);

  // src/idevcam.js
  var iDevCam = class extends iDevBase {
    buildCustom() {
      this.main = this.root.appendChild(document.createElement("div"));
      this.imgNode = this.body.appendChild(document.createElement("img"));
      this.body.style.padding = "0px";
      this.imgNode.setAttribute("width", "100%");
    }
    buildTitle() {
      this.titleNode = this.toolbar.insertAdjacentElement("afterbegin", document.createElement("div"));
      this.titleNode.style.marginRight = "auto";
      this.titleNode.style.fontWeight = "700";
      this.titleNode.textContent = this.deviceName || this.name;
    }
    update(dev) {
      this.dev = dev;
      this.imgNode.src = `data:image/png;base64,${dev.image}`;
    }
  };
  customElements.define("i-dev-cam", iDevCam);

  // src/idevweather.js
  var iDevWeather = class extends iDevBase {
    buildCustom() {
      this.main = this.root.appendChild(document.createElement("div"));
    }
    buildTitle() {
      this.titleNode = this.toolbar.insertAdjacentElement("afterbegin", document.createElement("div"));
      this.titleNode.style.marginRight = "auto";
      this.titleNode.style.fontWeight = "700";
      this.titleNode.textContent = this.deviceName || this.name;
    }
    update(dev) {
      this.dev = dev;
      this.body.innerHTML = "";
      dev.data.forEach((e) => {
        const r = this.body.appendChild(document.createElement("div"));
        r.className = "idom-weather-row";
        r.appendChild(document.createElement("div")).textContent = e.dt + " " + (e.isnight ? "\u043D\u043E\u0447\u044C" : "\u0434\u0435\u043D\u044C");
        const temp = r.appendChild(document.createElement("div"));
        temp.textContent = e.temp.replace("&deg;", "");
        r.appendChild(document.createElement("div")).textContent = e.pressure;
      });
    }
  };
  customElements.define("i-dev-weather", iDevWeather);

  // src/tasmota.css
  var tasmota_default = "/* THEME */\n/* .grid-stack { \n    background: #252525;\n}\n.grid-stack-item-content { \n    background-color:  #252525;\n    display: flex;\n    flex-direction: column;\n} */\n\n.idom-weather-row div {\n    flex:1;\n    text-align: center;\n}\n.idom-weather-row:first-child {\n    flex:2;\n    text-align: left;\n}\n\n.idom-weather-row {\n    flex: 1;\n    display: flex;\n    flex-direction: row;\n    align-self: stretch;\n\n    /* align-content:space-between;\n    justify-content:space-between;\n    align-items:stretch; */\n   \n}\n\n.idom-config {\n    display:flex;\n    gap: 10px;\n    flex-direction: column;\n}\n\n.idom-config-row {\n    display:flex;\n    gap: 10px;\n    flex-direction: row;\n}\n\n\n.idom-group {\n    grid-column: 1/-1;\n}\n\n.idom-group-title {\n    grid-column: 1/-1;\n    text-align: left;\n    font-weight: 700;\n    font-size: 2em;\n}\n\n\n.idom-toolbar {\n    padding-top: 6px;\n    position:fixed;\n    bottom: 0;\n    left:0;\n    background-color:black;\n    height:54px;\n    width:100%;\n    display:flex;\n    align-content:center;\n    justify-content:space-evenly;\n    align-items:flex-start;\n    flex-direction:row;\n    z-index:1;\n}\n\n.idom-main {\n    padding: 10px;\n\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n\n    gap: 1rem;\n    background-color: #252525;\n}\n\n@media (min-width: 0px) {\n    .idom-main {\n        padding: 10px;\n        display: grid;\n        grid-template-columns: repeat(1, 1fr);    \n        gap: 1rem;\n        background-color: #252525;\n    }    \n}\n\n@media (min-width: 700px) {\n    .idom-main {\n        padding: 10px;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);    \n        gap: 1rem;\n        background-color: #252525;\n    }    \n}\n\n@media (min-width: 1000px) {\n    .idom-main {\n        padding: 10px;\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);    \n        gap: 1rem;\n        background-color: #252525;\n    }    \n}\n\n@media (min-width: 1300px) {\n    .idom-main {\n        padding: 10px;\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);    \n        gap: 1rem;\n        background-color: #252525;\n    }    \n}\n\n.idom-device {\n    background-color: #283239;\n    border-radius: 0.5em;\n    flex: 1;\n}\n\n.idom-device h2 {\n    margin-top: 0px;\n}\n\ni-switch {\n    display: flex;\n    justify-content: center;\n}\n\n.idom-device-switches {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.idom-device .iswitch {\n    padding-left: 20px;\n    padding-right: 20px;\n    white-space: nowrap;\n    flex-basis: 250px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    gap: 0.5em;\n    /* margin-bottom: 20px; */\n    /* max-width: 350px; */\n}\n\n.idom-device .iswitch.OFF {\n    background-color: #88A9BB;\n}\n\n.idom-device-sensor {\n    font-size: 2em;\n}\n\n.idom-device-toolbar {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding: 6px;\n    padding-left: 10px;\n}\n\n.idom-device-body {\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    padding: 6px;\n    gap:6px;\n}\n\n.idom-device-root {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    /* align-content: center;\n    justify-content: center;\n    align-items: center; */\n}\n\n.spinner {\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    /* margin: 100px auto; */\n    background-color: #333;\n    border-radius: 100%;\n    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n    animation: sk-scaleout 1.0s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-scaleout {\n    0% {\n        -webkit-transform: scale(0)\n    }\n    100% {\n        -webkit-transform: scale(1.0);\n        opacity: 0;\n    }\n}\n\n@keyframes sk-scaleout {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n    100% {\n        -webkit-transform: scale(1.0);\n        transform: scale(1.0);\n        opacity: 0;\n    }\n}\n\n/* */\n\n* {\n    color: #eaeaea;\n}\n\n/* */\n\ndiv, fieldset, input, select {\n    /* padding: 5px; */\n    font-size: 1em;\n}\n\nfieldset {\n    background: #4f4f4f;\n}\n\np {\n    margin: 0.5em 0;\n}\n\ninput {\n    width: 100%;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    background: #dddddd;\n    color: #000000;\n}\n\ninput[type=checkbox], input[type=radio] {\n    width: 1em;\n    margin-right: 6px;\n    vertical-align: -1px;\n}\n\ninput[type=range] {\n    width: 99%;\n}\n\nselect {\n    width: 100%;\n    background: #dddddd;\n    color: #000000;\n}\n\ntextarea {\n    resize: vertical;\n    width: 98%;\n    height: 318px;\n    padding: 5px;\n    overflow: auto;\n    background: #1f1f1f;\n    color: #65c115;\n}\n\nbody {\n    text-align: center;\n    font-family: verdana, sans-serif;\n    background: #252525;\n}\n\ntd {\n    padding: 0px;\n}\n\nbutton {\n    border: 0;\n    border-radius: 0.3rem;\n    background: #1fa3ec;\n    color: #faffff;\n    line-height: 2.4rem;\n    font-size: 1.2rem;\n    width: 100%;\n    -webkit-transition-duration: 0.4s;\n    transition-duration: 0.4s;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background: #0e70a4;\n}\n\nbutton:disabled, button[disabled] {\n    background: #cccccc;\n    cursor: default;\n}\n\n.bred {\n    background: #d43535;\n}\n\n.bred:hover {\n    background: #931f1f;\n}\n\n.bgrn {\n    background: #47c266;\n}\n\n.bgrn:hover {\n    background: #5aaf6f;\n}\n\na {\n    color: #1fa3ec;\n    text-decoration: none;\n}\n\n.p {\n    float: left;\n    text-align: left;\n}\n\n.q {\n    float: right;\n    text-align: right;\n}\n\n.r {\n    border-radius: 0.3em;\n    padding: 2px;\n    margin: 6px 2px;\n}";

  // src/iinfoobject.js
  var iInfoObject = class extends iDialogBase {
    constructor(info) {
      super();
      this.info = info;
    }
    build() {
      this.root.style.paddingTop = "40px";
      const t = this.root.appendChild(document.createElement("div")).appendChild(document.createElement("table"));
      t.parentElement.marginBottom = "auto";
      t.parentElement.style.overflowY = "scroll";
      this.table = t.appendChild(document.createElement("tbody"));
      t.style.minWidth = "300px";
      t.style.textAlign = "left";
      Object.keys(this.info).forEach((k) => {
        this.row(k, this.info[k] || "-");
      });
      const b = this.root.appendChild(document.createElement("button"));
      b.textContent = "Close";
      b.style.maxWidth = "300px";
      b.style.maxHeight = "50px";
      b.style.marginTop = "20px";
      b.style.flex = "30px";
      b.style.marginBottom = "100px";
      b.onclick = () => {
        this.closeDialog();
      };
    }
    row(k, v) {
      const row = this.table.insertRow();
      row.appendChild(document.createElement("th")).textContent = k;
      row.appendChild(document.createElement("td")).textContent = v;
    }
  };
  customElements.define("i-info-object", iInfoObject);

  // src/idom.js
  var mqtt = window.mqtt;
  var iDom = class extends HTMLElement {
    devs = new Proxy({}, {
      set: (obj, p, v) => {
        obj[p] = v;
        this.render(p);
        return true;
      }
    });
    SYS = {};
    wdevs = {};
    lastOrder = 0;
    constructor() {
      super();
      this.worker = {
        nats: new Worker("idomworkernats.js"),
        mqtt: new Worker("idomworkerpaho.js"),
        setonmessage(onm) {
          this.nats.onmessage = onm;
          this.mqtt.onmessage = onm;
        },
        postMessage(o) {
          switch (this.p) {
            case "mqtt":
              this.mqtt.postMessage(o);
              break;
            default:
              this.nats.postMessage(o);
              break;
          }
        },
        setProtocol(p) {
          this.p = p;
        }
      };
      this.worker.setonmessage((m) => {
        if (m.data && m.data.action) {
          switch (m.data.action) {
            case "login":
              this.loginDialog();
              break;
            case "disconnected":
              this.netstat.setName("wifioff");
              this.loginDialog();
              break;
            case "connected":
              this.netstat.setName("wifi");
              this.loadingNode.style.display = "none";
              this.loginNode.style.display = "none";
              break;
            case "message":
              this.onmessage(m.data.topic, m.data.payload);
              break;
            default:
              break;
          }
        }
      });
      this.worker.postMessage({ action: "start" });
    }
    onmessage(topic, payload) {
      try {
        const [type, name, cmd] = topic.split("/");
        if (cmd == "LWT") {
          this.devs[name] = { ...this.devs[name] || {}, LWT: payload.toString() };
          if (this.devs[name].STATUS == void 0)
            this.worker.postMessage({ action: "publish", topic: `cmnd/${name}/STATUS`, payload: "" });
          if (this.devs[name].STATUS5 == void 0)
            this.worker.postMessage({ action: "publish", topic: `cmnd/${name}/STATUS`, payload: "5" });
          this.worker.postMessage({ action: "publish", topic: `cmnd/${name}/STATE`, payload: "" });
        } else if (type == "stat" && cmd.startsWith("STATUS")) {
          this.devs[name] = { ...this.devs[name] || {}, [cmd]: JSON.parse(payload.toString()) };
        } else if (cmd == "RESULT") {
          this.devs[name] = { ...this.devs[name] || {}, RESULT: JSON.parse(payload.toString()) };
        } else if (cmd == "SENSOR") {
          this.devs[name] = { ...this.devs[name] || {}, SENSOR: JSON.parse(payload.toString()) };
        } else if (type == "stat") {
          this.devs[name] = { ...this.devs[name] || {}, [cmd]: payload.toString() };
        } else if (type == "tele" && cmd == "STATE") {
          this.devs[name] = { ...this.devs[name] || {}, STATE: JSON.parse(payload.toString()) };
        } else if (type == "weather") {
          console.log("weather");
          const pp = JSON.parse(payload.toString());
          this.devs[name + "#" + cmd] = {
            name: name + "#" + cmd,
            DeviceName: name + "#" + cmd,
            Topic: topic,
            data: pp,
            type: "weather"
          };
        } else if (type == "hikmqtt") {
          const pp = JSON.parse(payload.toString());
          this.devs[name] = {
            name: pp.Name,
            image: pp.Image,
            DeviceName: pp.Name,
            Topic: topic,
            Ip: pp.Ip,
            type: "cam"
          };
        } else if (cmd == "HASS_STATE") {
        } else if (type == "$SYS") {
          this.SYS[topic] = payload.toString();
        } else {
          console.log(topic, payload.toString());
        }
      } catch (e) {
        console.log(e);
      }
    }
    loginDialog() {
      this.loginNode.style.display = "block";
    }
    connectedCallback() {
      const s = this.appendChild(document.createElement("style"));
      s.innerHTML = tasmota_default;
      this.root = this.appendChild(document.createElement("div"));
      this.loadingNode = this.appendChild(new iLoading());
      this.toolbar = this.appendChild(document.createElement("div"));
      this.toolbar.className = "idom-toolbar";
      this.loginNode = this.appendChild(new iLogin((url, username, password, protocol) => {
        localStorage.setItem("idom_url", url);
        localStorage.setItem("idom_username", username);
        localStorage.setItem("idom_password", password);
        localStorage.setItem("idom_protocol", protocol);
        this.loadingNode.style.display = "block";
        this.connect();
      }));
      this.loginNode.style.display = "none";
      this.main = this.appendChild(document.createElement("div"));
      this.main.className = "idom-main";
      this.main.style.paddingBottom = "80px";
      this.main.style.gap = "1rem";
      this.otherGroup = this.addGroup("Other");
      this.otherGroup.firstChild.style.display = "none";
      this.otherGroup.style.order = 1e3;
      this.netstat = this.toolbar.appendChild(new iIcon("wifioff", 24, 24, () => {
        this.appendChild(new iInfoObject(this.SYS));
      }));
      this.logout = this.toolbar.appendChild(new iIcon("logout", 24, 24, () => {
        this.worker.postMessage({ action: "logout" });
      }));
      this.connect();
    }
    addGroup(name) {
      if (name != "Other" && this.otherGroup.childElementCount > 1) {
        this.otherGroup.firstChild.style.display = "block";
      }
      let group = this.main.querySelector("#group-" + name);
      if (group) {
      } else {
        group = this.main.appendChild(document.createElement("div"));
        const title = group.appendChild(document.createElement("div"));
        title.className = "idom-group-title";
        title.textContent = name;
        group.setAttribute("id", "group-" + name);
        group.classList.add("idom-group");
        group.classList.add("idom-main");
      }
      return group;
    }
    connect() {
      if (localStorage.getItem("idom_username") && localStorage.getItem("idom_password")) {
        this.worker.setProtocol(localStorage.getItem("idom_protocol") || "nats");
        this.worker.postMessage({ action: "connect", url: localStorage.getItem("idom_url") || "ws://" + location.host, username: localStorage.getItem("idom_username"), password: localStorage.getItem("idom_password") });
      } else {
        this.loginDialog();
      }
    }
    _addWidget(name, dev) {
      let main = this.addGroup(dev.group);
      this.wdevs[name] = main.appendChild(dev);
      this.wdevs[name].setOrder(Number(localStorage.getItem("idom_order|" + name) || this.lastOrder));
      this.lastOrder = localStorage.getItem("idom_order|" + name) && Number(localStorage.getItem("idom_order|" + name)) > this.lastOrder ? Number(localStorage.getItem("idom_order|" + name)) + 1 : this.lastOrder + 1;
      this.wdevs[name].className = "idom-device";
    }
    render(name) {
      if (name === void 0) {
        console.log(this.devs);
        Object.keys(this.devs).forEach((e) => {
          this.render(e);
        });
      } else {
        if (this.wdevs[name] == void 0) {
          switch (this.devs[name].type) {
            case "weather":
              this._addWidget(name, new iDevWeather(name, this));
              break;
            case "cam":
              this._addWidget(name, new iDevCam(name, this));
              break;
            default:
              this._addWidget(name, new iDev(name, this));
              break;
          }
        }
        this.wdevs[name].update(this.devs[name]);
      }
    }
    publish(topic, payload) {
      this.worker.postMessage({ action: "publish", topic, payload });
    }
  };
  customElements.define("i-dom", iDom);
})();
