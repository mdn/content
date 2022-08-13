---
title: Document.hidden
slug: Web/API/Document/hidden
page-type: web-api-instance-property
tags:
  - DOM
  - Document
  - Page Visibility API
  - Property
  - Read-only
  - Reference
  - Web
browser-compat: api.Document.hidden
---
{{ ApiRef("DOM") }}

The **`Document.hidden`** read-only property returns a Boolean
value indicating if the page is considered hidden or not.

> **Note:** This property is described as "historical" in the [Page Visibility Level 2 specification](https://www.w3.org/TR/page-visibility-2/). Consider using the {{domxref("Document.visibilityState")}}
> property instead.

## Syntax

```js
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
