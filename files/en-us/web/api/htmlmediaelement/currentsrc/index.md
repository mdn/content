---
title: HTMLMediaElement.currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
  - Web
browser-compat: api.HTMLMediaElement.currentSrc
---
{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.currentSrc`** property contains the
absolute URL of the chosen media resource. This could happen, for example, if the web
server selects a media file based on the resolution of the user's display. The value
is an empty string if the `networkState` property is `EMPTY`.

## Value

A string object containing the absolute URL of the chosen media
source; this may be an empty string if `networkState` is `EMPTY`;
otherwise, it will be one of the resources listed by the
{{domxref("HTMLSourceElement")}} contained within the media element, or the value or src
if no {{HTMLElement("source")}} element is provided.

## Examples

```js
const obj = document.createElement('video');
console.log(obj.currentSrc); // ""
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
