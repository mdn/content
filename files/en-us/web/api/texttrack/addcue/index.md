---
title: TextTrack.addCue()
slug: Web/API/TextTrack/addCue
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - addCue
  - TextTrack
browser-compat: api.TextTrack.addCue
---
{{APIRef("WebVTT")}}

The **`addCue()`** method of the {{domxref("TextTrack")}} interface adds a new cue to the list of cues.

## Syntax

```js
addCue(cue)
```

### Parameters

- `cue`
  - : A {{domxref("TextTrackCue")}}.

> **Note:** The {{domxref("TextTrackCue")}} interface is an abstract class used as the parent for other cue interfaces such as {{domxref("VTTCue")}}. Therefore, when adding a cue you will be using one of the cue types that inherit from `TextTrackCue`.

### Return value

Undefined.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the rules for this {{domxref("TextTrackList")}} do not match those that are appropriate for the incoming {{domxref("TextTrackCue")}}.

## Examples

In the following example two cues are added to a video text track using `addCue()`.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, 'Hildy!'));
track.addCue(new VTTCue(1, 1.4, 'How are you?'));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
