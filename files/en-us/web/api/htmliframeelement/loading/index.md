---
title: "HTMLIFrameElement: loading property"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.loading
---

{{APIRef("HTML DOM")}}

The **`loading`** property of the {{domxref("HTMLIFrameElement")}} interface is a string that provides a hint to the {{Glossary("user agent")}} indicating whether the [iframe](/en-US/docs/Web/HTML/Element/iframe) should be loaded immediately on page load, or only when it is needed.

This can be used to optimize the loading of the document's contents.
Iframes that are visible when the page loads can be downloaded immediately (eagerly), while iframes that are likely to be offscreen on initial page load can be downloaded lazily — just before they will appear in the window's {{Glossary("visual viewport")}}.

## Value

A string providing a hint to the user agent as to how to best schedule the loading of the iframe.
The possible values are:

- `eager`
  - : Load the iframe as soon as the element is processed.
    This is the default.
- `lazy`
  - : Load the iframe when the browser believes that it is likely to be need in the near future.

## Usage notes

### JavaScript must be enabled

Loading is only deferred when JavaScript is enabled, irrespective of the value of this property.

This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user's approximate scroll position throughout a session, by strategically placing iframes in a page's markup such that a server can track how many are requested and when.

### Timing of the load event

The {{domxref("Window.load_event", "load")}} event is fired when the document has been fully processed.

Lazily loaded iframes do not affect the timing of the `load` event even if the iframe is in the visual viewport and is therefore fetched on page load.
All eagerly loaded iframes in the document must be fetched before the `load` event can fire.

## Examples

The example below shows how you might define a lazy-loaded iframe and then append it to a `<div>` in the document.
The frame would then only be loaded when the frame about to become visible.

```js
// Define iframe with lazy loading
const iframe = document.createElement("iframe");
iframe.src = "https://example.com";
iframe.width = 320;
iframe.height = 240;
iframe.loading = "lazy";

// Add to div element with class named frameDiv
const frameDiv = document.querySelector("div.frameDiv");
frameDiv.appendChild(iframe);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("iframe")}} element
- [Learn: Web performance](/en-US/docs/Learn_web_development/Extensions/Performance)
- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading) in the MDN web performance guide
- [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) on web.dev
