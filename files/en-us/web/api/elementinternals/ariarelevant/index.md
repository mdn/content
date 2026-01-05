---
title: "ElementInternals: ariaRelevant property"
short-title: ariaRelevant
slug: Web/API/ElementInternals/ariaRelevant
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.ElementInternals.ariaRelevant
---

{{APIRef("Web Components")}}{{Non-standard_header}}

The **`ariaRelevant`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an `aria-live` region are relevant and should be announced.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string containing one or more of the following values, space separated:

- "additions"
  - : Additions of Element Nodes within the live region should be considered relevant.
- "removals"
  - : Deletion of Nodes from the live region should be considered relevant.
- "text"
  - : Changes to the textual content of existing nodes should be considered relevant.
- "all"
  - : Equivalent to `"additions removals text"`.

## Examples

In this example the value of `ariaRelevant` is set to "all".

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRelevant = "all";
  }
  // …
}
```

## Browser compatibility

{{Compat}}
