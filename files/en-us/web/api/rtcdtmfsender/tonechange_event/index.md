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

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("tonechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ontonechange = (event) => { }
```

## Event type

An {{domxref("RTCDTMFToneChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("RTCDTMFToneChangeEvent")}}

## Examples

This example establishes a handler for the `tonechange` event which updates an element to display the currently playing tone in its content, or, if all tones have played, the string "\<none>".

This can be done using {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
dtmfSender.addEventListener("tonechange", (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "<none>";
  }

  document.getElementById("playingTone").innerText = tone;
});
```

You can also just set the `ontonechange` event handler property directly (but note that this replaces other event listeners added using `ontonechange`, if any):

```js
dtmfSender.ontonechange = (ev) => {
  let tone = ev.tone;
  if (tone === "") {
    tone = "<none>";
  }

  document.getElementById("playingTone").innerText = tone;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
