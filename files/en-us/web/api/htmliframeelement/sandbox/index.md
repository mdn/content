---
title: "HTMLIFrameElement: sandbox property"
short-title: sandbox
slug: Web/API/HTMLIFrameElement/sandbox
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.sandbox
---

{{APIRef("HTML DOM")}}

The **`sandbox`** read-only property of the {{domxref("HTMLIFrameElement")}} interface returns a {{domxref("DOMTokenList")}} indicating extra restrictions on the behavior of the nested content.

It reflects the `sandbox` attribute of the {{HTMLElement("iframe")}} element.

> **Note:** When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute — making it no more secure than not using the `sandbox` attribute at all. Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` — such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.

> **Note:** When redirecting the user, opening a popup window, or opening a new tab from an embedded page within an `<iframe>` with the `sandbox` attribute, the new browsing context is subject to the same `sandbox` restrictions. This can create issues — for example, if a page embedded within an `<iframe>` without a `sandbox="allow-forms"` or `sandbox="allow-popups-to-escape-sandbox"` attribute set on it opens a new site in a separate tab, form submission in that new browsing context will silently fail.

> **Note:** This property only take effect when the content navigable of the `<iframe>` element is navigated. Removing them, or removing the entire `sandbox` attribute, has no effect on an already-loaded page.

## Value

A {{domxref("DOMTokenList")}}. Each item must be one of the tokens listed in the `sandbox` attribute of the {{HTMLElement("iframe")}} element.

## Examples

```html
<iframe
  id="el"
  title="example"
  src="https://example.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // Output: ["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // Output: []
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
