---
title: TextTrack.removeCue()
slug: Web/API/TextTrack/removeCue
tags:
  - API
  - Method
  - Reference
  - removeCue
  - TextTrack
browser-compat: api.TextTrack.removeCue
---
{{APIRef("WebVTT")}}

The **`removeCue()`** method of the {{domxref("TextTrack")}} interface removes a cue from the list of cues.

## Syntax

```js
TextTrack.removeCue(cue);
```

### Parameters

- `cue`
  - : A {{domxref("TextTrackCue")}}.

### Return value

Undefined.

### Exceptions

- {{domxref("DOMException")}} `NotFoundError`
  - : Thrown if the given cue is not found in the list of cues.

> **Note:** The {{domxref("TextTrackCue")}} interface is an abstract class used as the parent for other cue interfaces such as {{domxref("VTTCue")}}. Therefore, when removing a cue you will be passing in one of the cue types that inherit from `TextTrackCue`.

## Examples

In the following example a cue is added to a video text track using `addCue()`, then removed using `removeCue`.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
let cue = new VTTCue(0, 0.9, 'Hildy!');
track.addCue(cue);
track.removeCue(cue);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
