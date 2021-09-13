---
title: HTMLMediaElement.controlsList
slug: Web/API/HTMLMediaElement/controlsList
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Property
  - Reference
browser-compat: api.HTMLMediaElement.controlsList
---
{{SeeCompatTable}}{{APIRef("HTML DOM")}}

The **`controlsList`** property of the
{{domxref("HTMLMediaElement")}} interface returns a DOMTokenList that helps the user
agent select what controls to show on the media element whenever the user agent shows
its own set of controls. The DOMTokenList takes one or more of three possible values:
`nodownload`, `nofullscreen`, and `noremoteplayback`.

## Syntax

```js
var domTokenList = HTMLMediaElement.controlsList;
```

### Value

A {{domxref("DOMTokenList")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Chrome HTMLMediaElement
  controlsList Sample](https://googlechrome.github.io/samples/media/controlslist.html)
