import { iDialogBase } from "./idialogbase";

export class iInfo extends iDialogBase {

    constructor(info) {
        super();
        this.info = info;
    }

    build() {
        this.root.appendChild(document.createElement("h1")).textContent = this.info.DeviceName || this.info.STATUS.Status.DeviceName;

        const t = this.root.appendChild(document.createElement("table"))
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
        }
    }

    row(k, v) {
        const row = this.table.insertRow();
        row.appendChild(document.createElement("th")).textContent = k;
        row.appendChild(document.createElement("td")).textContent = v;
    }
}

customElements.define('i-info', iInfo);