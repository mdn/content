---
title: Element.ariaRelevant
slug: Web/API/Element/ariaRelevant
tags:
  - API
  - Property
  - Reference
  - ariaRelevant
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaRelevant
---
{{DefaultAPISidebar("DOM")}}{{SeeCompatTable}}

The **`ariaRelevant`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute) attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an `aria-live` region are relevant and should be announced.

## Syntax

    var ariaRelevant = element.ariaRelevant;
    element.ariaRelevant = ariaRelevant

### Value

A {{domxref("DOMString")}} containing one or more of the following values, space separated:

- `"additions"`
  - : Additions of Element Nodes within the live region should be considered relevant.
- `"removals"`
  - : Deletion of Nodes from the live region should be considered relevant.
- `"text"`
  - : Changes to the textual content of existing nodes should be considered relevant.
- `"all"`
  - : Equivalent to `"additions removals text"`.

## Examples

In this example the `aria-relevant` attribute on the element with an ID of `text` is set to "all". Using `ariaRelevant` we update the value to "text".

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true" aria-relevant="all"></div>
```

```js
let el = document.getElementById('clock');
console.log(el.ariaRelevant); // all
el.ariaRelevant = "text"
console.log(el.ariaRelevant); // text
```

## Browser compatibility

{{Compat}}
