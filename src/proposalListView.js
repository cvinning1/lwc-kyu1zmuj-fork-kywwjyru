import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class ProposalListView extends LightningElement {
  @api
  expanded = false;

  handleCollapseView(event) {
    this.expanded = false;
  }

  handleExpandView(event) {
    this.expanded = true;
  }
}