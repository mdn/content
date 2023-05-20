---
title: "AudioScheduledSourceNode: ended event"
short-title: ended
slug: Web/API/AudioScheduledSourceNode/ended_event
page-type: web-api-event
browser-compat: api.AudioScheduledSourceNode.ended_event
---

{{DefaultAPISidebar("Web Audio API")}}

The `ended` event of the {{domxref("AudioScheduledSourceNode")}} interface is fired when the source node has stopped playing.

This event occurs when a {{domxref("AudioScheduledSourceNode")}} has stopped playing, either because it's reached a predetermined stop time, the full duration of the audio has been performed, or because the entire buffer has been played.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("ended", (event) => { })

onended = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

In this simple example, an event listener for the `ended` event is set up to enable a "Start" button in the user interface when the node stops playing:

```js
node.addEventListener("ended", () => {
  document.getElementById("startButton").disabled = false;
});
```

You can also set up the event handler using the `onended` property:

```js
node.onended = () => {
  document.getElementById("startButton").disabled = false;
};
```

For an example of the ended event in use, see our [audio-buffer example on GitHub](https://mdn.github.io/webaudio-examples/audio-buffer/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Related events

- [audioprocess](/en-US/docs/Web/API/ScriptProcessorNode/audioprocess_event)
- [complete](/en-US/docs/Web/API/OfflineAudioContext/complete_event)

## See also

- {{domxref("HTMLAudioElement")}}
- {{domxref("HTMLVideoElement")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("video")}}
- The HTMLMediaElement {{domxref("HTMLMediaElement.ended_event", 'ended')}} event
- The MediaStreamTrack {{domxref("MediaStreamTrack.ended_event", 'ended')}} event
