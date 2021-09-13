---
title: TextTrackCue
slug: Web/API/TextTrackCue
tags:
  - API
  - Accessibility
  - Draft
  - HTML5
  - Interface
  - Media
  - NeedsContent
  - TextTrack
  - TextTrackCue
  - WebVTT
  - a11y
  - cue
  - track
  - vtt
browser-compat: api.TextTrackCue
---
{{APIRef("WebVTT")}}

**`TextTrackCue`** is an abstract class which is used as the basis for the various derived cue types, such as {{domxref("VTTCue")}}; you will instead work with those derived types. These cues represent strings of text presented for some duration of time during the performance of a {{domxref("TextTrack")}}. The cue includes the start time (the time at which the text will be displayed) and the end time (the time at which it will be removed from the display), as well as other information.

## Properties

_This interface also inherits properties from {{domxref("EventTarget")}}._

- {{domxref("TextTrackCue.track")}}{{readOnlyInline}}
  - : The {{domxref("TextTrack")}} that this cue belongs to, or `null` if it doesn't belong to any.
- {{domxref("TextTrackCue.id")}}
  - : A {{domxref("DOMString")}} that identifies the cue.
- {{domxref("TextTrackCue.startTime")}}
  - : A `double` that represents the video time that the cue will start being displayed, in seconds.
- {{domxref("TextTrackCue.endTime")}}
  - : A `double` that represents the video time that the cue will stop being displayed, in seconds.
- {{domxref("TextTrackCue.pauseOnExit")}}
  - : A `boolean` for whether the video will pause when this cue stops being displayed.

## Event handlers

- {{domxref("TextTrackCue.onenter")}}
  - : The event handler fired when a cue becomes active.
- {{domxref("TextTrackCue.onexit")}}
  - : The event handler fired when the cue has stopped being active.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
