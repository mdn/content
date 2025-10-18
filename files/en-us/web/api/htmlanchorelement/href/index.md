---
title: "HTMLAnchorElement: href property"
short-title: href
slug: Web/API/HTMLAnchorElement/href
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.href
---

{{ApiRef("HTML DOM")}}

The **`HTMLAnchorElement.href`** property is a
{{Glossary("stringifier")}} that returns the absolute URL corresponding to the element's `href` attribute (or an empty string if `href` is unset), and allows
the href to be updated.

## Value

A string.

## Examples

```js
const anchor = document.createElement("a");
// Initially empty if the element doesn't have an href attribute set
console.log(anchor.href); // ""

// Can set to relative URL...
anchor.href = "../../..";
// ...but getter always returns absolute URL
console.log(anchor.href); // "https://developer.mozilla.org/en-US/docs/"

// Setting empty string is interpreted as a relative URL, resolving to the current page
anchor.href = "";
console.log(anchor.href); // "https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href"

anchor.removeAttribute("href");
// Getter is empty again due to removing attribute
console.log(anchor.href); // ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.
