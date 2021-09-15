---
title: HTMLIFrameElement.srcdoc
slug: Web/API/HTMLIFrameElement/srcdoc
browser-compat: api.HTMLIFrameElement.srcdoc
---
{{APIRef('HTMLIFrameElement')}}

The **`srcdoc`** property of the {{domxref("HTMLIFrameElement")}} specifies the content of the page.

## Examples

```js
var iframe = document.createElement("iframe");
iframe.srcdoc = `<!DOCTYPE html><p>Hello World!</p>`;
document.body.appendChild(iframe);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
