---
title: "Document: hidden property"
short-title: hidden
slug: Web/API/Document/hidden
page-type: web-api-instance-property
browser-compat: api.Document.hidden
---

{{ ApiRef("DOM") }}

The **`Document.hidden`** read-only property returns a Boolean
value indicating if the page is considered hidden or not.

## Syntax

```js-nolint
document.hidden
```

## Examples

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
  // Modify behavior…
});
```

## Usage notes

> **Warning:** Due to prerendering, it may happen that `document.hidden` is
> `true`, even if the page is actually visible to the user. In such scenario
> the page load starts with
> `document.visibilityState = "prerender"`
> and transitions to `document.visibilityState = "visible"` after some delay.
> This scenario can be reproduced by opening a new browser tab in Safari, pasting a URL
> in the URL bar, and navigating to that URL.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
