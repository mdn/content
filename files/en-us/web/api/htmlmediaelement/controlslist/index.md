---
title: "HTMLMediaElement: controlsList property"
short-title: controlsList
slug: Web/API/HTMLMediaElement/controlsList
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.controlsList
---

{{APIRef("HTML DOM")}}

The **`controlsList`** property of the
{{domxref("HTMLMediaElement")}} interface returns a DOMTokenList that helps the user
agent select what controls to show on the media element whenever the user agent shows
its own set of controls. The DOMTokenList takes one or more of three possible values:
`nodownload`, `nofullscreen`, and `noremoteplayback`.

## Value

A {{domxref("DOMTokenList")}}.

The value of `controlsList` can be set by passing a string representing the `DOMTokenList`'s {{domxref("DOMTokenList/value", "value")}} property.

## Examples

### Getting the controlsList property

The `controlsList` property returns a {{domxref("DOMTokenList")}} object containing the current set value.

```js
const video = document.createElement("video");
console.log(video.controlsList.value); // ""

video.controlsList.add("noremoteplayback");
console.log(video.controlsList.value); // "noremoteplayback"
```

### Setting the controlsList property

You can also modify `controlsList` by directly setting it to a string containing the new value.

```js
const audio = document.createElement("audio");
audio.controlsList = "nodownload";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Chrome HTMLMediaElement controlsList Sample](https://googlechrome.github.io/samples/media/controlslist.html)
