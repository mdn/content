---
title: ElementInternals.ariaRelevant
slug: Web/API/ElementInternals/ariaRelevant
tags:
  - API
  - Property
  - Reference
  - ariaRelevant
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaRelevant
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRelevant`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an `aria-live` region are relevant and should be announced.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaRelevant = ElementInternals.ariaRelevant;
ElementInternals.ariaRelevant = ariaRelevant;
```

### Value

A {{domxref("DOMString")}} containing one or more of the following values, space separated:

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
this.internals_.ariaRelevant = "all";
```

## Browser compatibility

{{Compat}}
