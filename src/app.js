import { LightningElement,api } from "lwc";

export default class App extends LightningElement {
  @api
  expanded = false;

  handleCollapseView(event) {
    this.expanded = false;
  }

  handleExpandView(event) {
    this.expanded = true;
  }
}

