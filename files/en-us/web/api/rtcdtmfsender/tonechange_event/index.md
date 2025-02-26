---
title: "RTCDTMFSender: tonechange event"
short-title: tonechange
slug: Web/API/RTCDTMFSender/tonechange_event
page-type: web-api-event
browser-compat: api.RTCDTMFSender.tonechange_event
---

{{APIRef("WebRTC")}}

The **`tonechange`** event is sent to an {{domxref("RTCDTMFSender")}} by the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) to indicate when {{Glossary("DTMF")}} tones previously queued for sending (by calling {{domxref("RTCDTMFSender.insertDTMF()")}}) begin and end.

To determine what tone started playing, or if a tone stopped playing, check the value of the event's {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} property.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("tonechange", (event) => {});

ontonechange = (event) => {};
```

## Event type

An {{domxref("RTCDTMFToneChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Event properties

_In addition to the properties of {{domxref("Event")}}, this interface offers the following:_

- {{domxref("RTCDTMFToneChangeEvent.tone")}} {{ReadOnlyInline}}
  - : A string specifying the tone which has begun playing, or an empty string (`""`) if the previous tone has finished playing.

## Examples

This example establishes a handler for the `tonechange` event which updates an element to display the currently playing tone in its content, or, if all tones have played, the string "\<none>".

This can be done using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
dtmfSender.addEventListener(
  "tonechange",
  (ev) => {
    let tone = ev.tone;
    if (tone === "") {
      tone = "&lt;none&gt;";
    }

    document.getElementById("playingTone").innerText = tone;
  },
  false,
);
```

You can also just set the `ontonechange` event handler property directly:

```js
dtmfSender.ontonechange = (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "&lt;none&gt;";
  }

  document.getElementById("playingTone").innerText = tone;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
