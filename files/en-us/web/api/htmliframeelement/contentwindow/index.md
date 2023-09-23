---
title: "HTMLIFrameElement: contentWindow property"
short-title: contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.contentWindow
---

{{APIRef("HTML DOM")}}

The **`contentWindow`** property returns the [Window](/en-US/docs/Web/API/Window) object of an [HTMLIFrameElement](/en-US/docs/Web/API/HTMLIFrameElement).

This attribute is read-only.

## Value

A [Window](/en-US/docs/Web/API/Window) object.

## Description

Access to the {{domxref("Window")}} returned by `contentWindow` is subject to the rules defined by the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy), meaning that if the iframe is same-origin with the parent, then the parent can access the iframe's document and its internal DOM, and if they are cross-origin, it gets very limited access to the window's attributes. See ["Cross-origin script API access"](/en-US/docs/Web/Security/Same-origin_policy#cross-origin_script_api_access) for details.

Pages can also use this property to find out which iframe sent a message using {{domxref("Window.postMessage()")}}, by comparing it with the message event's {{domxref("MessageEvent.source", "source")}} property.

## Examples

### Accessing an iframe's document

This example modifies the `style` attribute of the document body.

Note that this only works if the iframe's window is same-origin with its parent: otherwise attempting to access `contentWindow.document` will throw an exception.

```js
const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.
```

### Mapping message sources to iframes

This example could run in a page that hosts several iframes, any of which can send it messages using {{domxref("Window.postMessage()")}}. When the page receives a message, it wants to know which iframe contains the window that sent the message.

To do this, when it receives a message, the page first checks that the message was from the expected origin, and then finds the iframe that was the source of the message by comparing the message event's {{domxref("MessageEvent.source", "source")}} property with the iframe's `contentWindow` property.

```js
const expectedOrigin = "https://example.org";

const iframes = Array.from(document.querySelectorAll("iframe"));

window.addEventListener("message", (e) => {
  if (e.origin !== expectedOrigin) return;

  const sourceIframe = iframes.find(
    (iframe) => iframe.contentWindow === e.source,
  );

  console.log(sourceIframe);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
