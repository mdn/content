---
title: "TextTrack: removeCue() method"
short-title: removeCue()
slug: Web/API/TextTrack/removeCue
page-type: web-api-instance-method
browser-compat: api.TextTrack.removeCue
---

{{APIRef("WebVTT")}}

The **`removeCue()`** method of the {{domxref("TextTrack")}} interface removes a cue from the list of cues.

## Syntax

```js-nolint
removeCue(cue)
```

### Parameters

- `cue`
  - : A {{domxref("TextTrackCue")}}.

### Return value

Undefined.

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the given cue is not found in the list of cues.

> [!NOTE]
> The {{domxref("TextTrackCue")}} interface is an abstract class used as the parent for other cue interfaces such as {{domxref("VTTCue")}}. Therefore, when removing a cue you will be passing in one of the cue types that inherit from `TextTrackCue`.

## Examples

In the following example a cue is added to a video text track using `addCue()`, then removed using `removeCue`.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
let cue = new VTTCue(0, 0.9, "Hildy!");
track.addCue(cue);
track.removeCue(cue);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
