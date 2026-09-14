---
title: "ElementInternals: labels property"
short-title: labels
slug: Web/API/ElementInternals/labels
page-type: web-api-instance-property
browser-compat: api.ElementInternals.labels
---

{{APIRef("Web Components")}}

The **`labels`** read-only property of the {{domxref("ElementInternals")}} interface returns the labels associated with the element.

## Value

A {{domxref("NodeList")}} containing all of the label elements associated with this element.

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the element does not have its `formAssociated` property set to `true`.

## Accessibility

A {{HTMLElement("label")}} associated with a form-associated custom element is exposed to assistive technology in the same way as a label on a built-in form control.
In Chrome and Firefox it provides the accessible name for the element.

For a screen reader to reach that name, the element also has to be focusable.
A custom element is not focusable by default, so it needs a [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) attribute, or a shadow root created with `delegatesFocus: true` and a focusable element inside it.

Safari does not expose the label this way.
VoiceOver does not read a `<label>` that is associated with a form-associated custom element ([WebKit bug 259124](https://bugs.webkit.org/show_bug.cgi?id=259124)), so an element that relies on the association alone has no accessible name in that combination.

To give the element an accessible name in every browser, set {{domxref("ElementInternals.ariaLabel", "ariaLabel")}} on the element's internals as well as associating the label:

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;
  #internals;

  constructor() {
    super();
    this.#internals = this.attachInternals();
    this.#internals.role = "checkbox";
    this.#internals.ariaLabel = "Join newsletter";
  }
}
```

> [!NOTE]
> Setting `ariaLabel` on the internals defines a _default_ semantic for the element.
> An `aria-label` attribute set on the element itself takes precedence over it, which lets a page author override the name without the component losing its own fallback.

## Examples

The following example shows a custom checkbox component with a {{HTMLElement("label")}} element linked to it.
Printing the value of `labels` to the console returns a {{domxref("NodeList")}} with one entry, representing this label.

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox" tabindex="0"></custom-checkbox>
  <label for="custom-checkbox">Join newsletter</label>
</form>
```

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

const element = document.getElementById("custom-checkbox");
console.log(element.internals_.labels); // NodeList [ label ]
```

> [!NOTE]
> A label is only listed once it has been parsed.
> Reading `labels` from [`connectedCallback()`](/en-US/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) returns an empty list when the associated `<label>` comes after the element in the source, because the parser has not reached it yet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaLabel")}}
- {{domxref("HTMLElement.attachInternals()")}}
- {{domxref("ElementInternals.form")}}
