---
title: "VTTCue: getCueAsHTML() method"
short-title: getCueAsHTML()
slug: Web/API/VTTCue/getCueAsHTML
page-type: web-api-instance-method
browser-compat: api.VTTCue.getCueAsHTML
---

{{APIRef("WebVTT")}}

The **`getCueAsHTML()`** method of the {{domxref("VTTCue")}} interface returns a {{domxref("DocumentFragment")}} containing the cue content.

## Syntax

```js-nolint
getCueAsHTML()
```

### Parameters

None.

### Return value

A {{domxref("DocumentFragment")}}.

## Examples

In the following example a new {{domxref("VTTCue")}} is created. The value as a document fragment is then printed to the console.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
console.log(cue1.getCueAsHTML());

track.addCue(cue1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
