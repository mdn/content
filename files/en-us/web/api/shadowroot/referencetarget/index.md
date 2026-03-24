---
title: "ShadowRoot: referenceTarget property"
short-title: referenceTarget
slug: Web/API/ShadowRoot/referenceTarget
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.referenceTarget
---

{{APIRef("Shadow DOM")}}

The **`referenceTarget`** property of the {{domxref("ShadowRoot")}} interface is a nullable string that represents the effective target of any element reference made against the shadow host from outside the host element.

Some elements are associated with other elements using attributes that reference their `id` attribute.
For example, a {{htmlelement("label")}} element can use the {{htmlattribute("for")}} attribute to specify the `id` of the element it is labelling.
Similarly, {{htmlattribute("popovertarget")}} can be used to indicate the `id` of an element that will be triggered by a {{htmlelement("button")}}, and [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) can indicate the element that supplies its [ARIA](/en-US/docs/Web/Accessibility/ARIA/Guides) description.

Direct references can only be created between elements in the same DOM or from an element in a shadow DOM to another element in a host DOM.
You can't create a direct `id` reference from a host DOM into shadow DOM because this would break encapsulation.
Instead you must do so indirectly, using a `referenceTarget`.

The `referenceTarget` should be the id of an element inside the shadow DOM (or can be set `null` to remove the reference).
In order to target an element within the shadow DOM, an element in the host DOM references the host element.
The browser will then use the `referenceTarget` id, if set, as the _effective_ target of references to the host element.

This approach maintains the encapsulation of the shadow root.
For a closed shadow DOM the host DOM doesn't have direct visibility or even knowledge of the actual target element, and the browser doesn't modify the properties of the effective target.

> [!NOTE]
> If you set the label on a shadow DOM element using this approach you will not see a change in the corresponding `aria-label`.
> Instead the browser computes any relationships when needed — so you can observe them in the accessibility inspector or via computed values.

This same property is also set when a shadow root created programmatically, using the [`options.referenceTarget`](/en-US/docs/Web/API/Element/attachShadow#referencetarget) parameter passed to {{domxref("Element.attachShadow()")}}, or declaratively using the [`shadowrootreferencetarget`](/en-US/docs/Web/HTML/Reference/Elements/template#shadowrootreferencetarget) attribute of the [`<template>`](/en-US/docs/Web/HTML/Reference/Elements/template) element.

## Value

A string.

This will be the id of an element inside the shadow DOM, or `null` if no reference target is set.

## Examples

### Basic usage

```html
<label for="consent">I consent to cookies</label>
<sp-checkbox id="consent"></sp-checkbox>

<hr />
<div id="log"></div>
```

```js
function log(...args) {
  const debug = document.getElementById("log");
  debug.innerHTML += args.join(" ") + "<br>";
}
```

```js
customElements.define(
  "sp-checkbox",
  class Checkbox extends HTMLElement {
    checked = "mixed";

    constructor() {
      super();
      this.shadowRoot_ = this.attachShadow({
        mode: "closed",
        //referenceTarget: "input",
      });

      this.shadowRoot_.referenceTarget = "input";

      this.render();
    }
    render() {
      this.shadowRoot_.innerHTML = `
            <input id="input"
                   type="checkbox"
                   ${this.checked == "true" ? "checked" : ""}
                   aria-checked=${this.checked == "indeterminate" ? "mixed" : this.checked}>
            <span id="box"></span>`;

      const input = this.shadowRoot_.getElementById("input");

      log("aria-checked:", input.getAttribute("aria-checked"));
      log("aria-label:", input.getAttribute("aria-label"));
      log("aria-labelledby:", input.getAttribute("aria-labelledby"));
    }
  },
);
```

{{EmbedLiveSample("Basic usage")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`options.referenceTarget`] argument to {{domxref(`Element.attachShadow()`)}}
