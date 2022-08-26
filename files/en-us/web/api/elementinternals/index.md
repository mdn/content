---
title: ElementInternals
slug: Web/API/ElementInternals
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ElementInternals
browser-compat: api.ElementInternals
---
{{APIRef("DOM")}}

The **`ElementInternals`** interface of the [Document Object Model](/en-US/docs/Web/API/Document_Object_Model) gives web developers a way to allow custom elements to fully participate in HTML forms. It provides utilities for working with these elements in the same way you would work with any standard HTML form element, and also exposes the [Accessibility Object Model](https://wicg.github.io/aom/explainer.html) to the element.

## Constructor

This interface has no constructor. An `ElementInternals` object is returned when calling {{domxref("HTMLElement.attachInternals()")}}.

## Properties

- {{domxref("ElementInternals.shadowRoot")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("ShadowRoot")}} object associated with this element.
- {{domxref("ElementInternals.form")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("HTMLFormElement")}} associated with this element.
- {{domxref("ElementInternals.states")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("CustomStateSet")}} associated with this element.
- {{domxref("ElementInternals.willValidate")}} {{ReadOnlyInline}}
  - : A boolean value which returns true if the element is a submittable element that is a candidate for
    [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation).
- {{domxref("ElementInternals.validity")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ValidityState")}} object which represents the different validity states the element can be in, with respect to constraint validation.
- {{domxref("ElementInternals.validationMessage")}} {{ReadOnlyInline}}
  - : A string containing the validation message of this element.
- {{domxref("ElementInternals.labels")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("NodeList")}} of all of the label elements associated with this element.

### Properties included from ARIA

The `ElementInternals` interface includes the following properties, defined on the `ARIAMixin` mixin.

> **Note:** These are included in order that default accessibility semantics can be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

- {{domxref("ElementInternals.ariaAtomic")}}
  - : A string reflecting the [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) attribute.
- {{domxref("ElementInternals.ariaAutoComplete")}}
  - : A string reflecting the [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
- {{domxref("ElementInternals.ariaBusy")}}
  - : A string reflecting the [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.
- {{domxref("ElementInternals.ariaChecked")}}
  - : A string reflecting the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.
- {{domxref("ElementInternals.ariaColCount")}}
  - : A string reflecting the [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute, which defines the number of columns in a table, grid, or treegrid.
- {{domxref("ElementInternals.ariaColIndex")}}
  - : A string reflecting the [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
- {{domxref("ElementInternals.ariaColIndexText")}}
  - : A string reflecting the [`aria-colindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) attribute, which defines a human readable text alternative of aria-colindex.
- {{domxref("ElementInternals.ariaColSpan")}}
  - : A string reflecting the [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
- {{domxref("ElementInternals.ariaCurrent")}}
  - : A string reflecting the [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) attribute, which indicates the element that represents the current item within a container or set of related elements.
- {{domxref("ElementInternals.ariaDescription")}}
  - : A string reflecting the [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) attribute, which defines a string value that describes or annotates the current ElementInternals.
- {{domxref("ElementInternals.ariaDisabled")}}
  - : A string reflecting the [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
- {{domxref("ElementInternals.ariaExpanded")}}
  - : A string reflecting the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : A string reflecting the [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an ElementInternals.
- {{domxref("ElementInternals.ariaHidden")}}
  - : A string reflecting the [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) attribute, which indicates whether the element is exposed to an accessibility API.
- {{domxref("ElementInternals.ariaKeyShortcuts")}}
  - : A string reflecting the [`aria-keyshortcuts`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an ElementInternals.
- {{domxref("ElementInternals.ariaLabel")}}
  - : A string reflecting the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute, which defines a string value that labels the current ElementInternals.
- {{domxref("ElementInternals.ariaLevel")}}
  - : A string reflecting the [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level) attribute, which defines the hierarchical level of an element within a structure.
- {{domxref("ElementInternals.ariaLive")}}
  - : A string reflecting the [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
- {{domxref("ElementInternals.ariaModal")}}
  - : A string reflecting the [`aria-modal`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) attribute, which indicates whether an element is modal when displayed.
- {{domxref("ElementInternals.ariaMultiline")}}
  - : A string reflecting the [`aria-multiline`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) attribute, which indicates whether a text box accepts multiple lines of input or only a single line.
- {{domxref("ElementInternals.ariaMultiSelectable")}}
  - : A string reflecting the [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) attribute, which indicates that the user may select more than one item from the current selectable descendants.
- {{domxref("ElementInternals.ariaOrientation")}}
  - : A string reflecting the [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
- {{domxref("ElementInternals.ariaPlaceholder")}}
  - : A string reflecting the [`aria-placeholder`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) attribute, which defines a short hint intended to aid the user with data entry when the control has no value.
- {{domxref("ElementInternals.ariaPosInSet")}}
  - : A string reflecting the [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) attribute, which defines an element's number or position in the current set of listitems or treeitems.
- {{domxref("ElementInternals.ariaPressed")}}
  - : A string reflecting the [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) attribute, which indicates the current "pressed" state of toggle buttons.
- {{domxref("ElementInternals.ariaReadOnly")}}
  - : A string reflecting the [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) attribute, which indicates that the element is not editable, but is otherwise operable.
- {{domxref("ElementInternals.ariaRelevant")}} {{Non-standard_Inline}}
  - : A string reflecting the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an `aria-live` region are relevant and should be announced.
- {{domxref("ElementInternals.ariaRequired")}}
  - : A string reflecting the [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required) attribute, which indicates that user input is required on the element before a form may be submitted.
- {{domxref("ElementInternals.ariaRoleDescription")}}
  - : A string reflecting the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) attribute, which defines a human-readable, author-localized description for the role of an Element.
- {{domxref("ElementInternals.ariaRowCount")}}
  - : A string reflecting the [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) attribute, which defines the total number of rows in a table, grid, or treegrid.
- {{domxref("ElementInternals.ariaRowIndex")}}
  - : A string reflecting the [`aria-rowindex`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) attribute, which defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
- {{domxref("ElementInternals.ariaRowIndexText")}}
  - : A string reflecting the [`aria-rowindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) attribute, which defines a human readable text alternative of aria-rowindex.
- {{domxref("ElementInternals.ariaRowSpan")}}
  - : A string reflecting the [`aria-rowspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) attribute, which defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
- {{domxref("ElementInternals.ariaSelected")}}
  - : A string reflecting the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute, which indicates the current "selected" state of elements that have a selected state.
- {{domxref("ElementInternals.ariaSetSize")}}
  - : A string reflecting the [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) attribute, which defines the number of items in the current set of listitems or treeitems.
- {{domxref("ElementInternals.ariaSort")}}
  - : A string reflecting the [`aria-sort`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort) attribute, which indicates if items in a table or grid are sorted in ascending or descending order.
- {{domxref("ElementInternals.ariaValueMax")}}
  - : A string reflecting the [`aria-valueMax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute, which defines the maximum allowed value for a range widget.
- {{domxref("ElementInternals.ariaValueMin")}}
  - : A string reflecting the [`aria-valueMin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) attribute, which defines the minimum allowed value for a range widget.
- {{domxref("ElementInternals.ariaValueNow")}}
  - : A string reflecting the [`aria-valueNow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute, which defines the current value for a range widget.
- {{domxref("ElementInternals.ariaValueText")}}
  - : A string reflecting the [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) attribute, which defines the human readable text alternative of aria-valuenow for a range widget.

## Methods

- {{domxref("ElementInternals.setFormValue()")}}
  - : Sets the element's submission value and state, communicating these to the user agent.
- {{domxref("ElementInternals.setValidity()")}}
  - : Sets the validity of the element.
- {{domxref("ElementInternals.checkValidity()")}}
  - : Checks if an element meets any [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation) rules applied to it.
- {{domxref("ElementInternals.reportValidity()")}}
  - : Checks if an element meets any [constraint validation](/en-US/docs/Web/Guide/HTML/Constraint_validation) rules applied to it, and also sends a validation message to the user agent.

## Examples

The following example demonstrates how to create a custom form-associated element with {{domxref("HTMLElement.attachInternals")}}.

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define('custom-checkbox', CustomCheckbox);

let element = document.createElement('custom-checkbox');
let form = document.createElement('form');

// Append element to form to associate it
form.appendChild(element);

console.log(element.internals_.form);
// expected output: <form><custom-checkbox></custom-checkbox></form>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [More capable form controls](https://web.dev/more-capable-form-controls/)
- [Creating custom form controls with ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
- [ElementInternals polyfill](https://www.npmjs.com/package/element-internals-polyfill)
