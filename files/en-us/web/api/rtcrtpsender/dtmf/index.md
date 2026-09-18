---
title: "RTCRtpSender: dtmf property"
short-title: dtmf
slug: Web/API/RTCRtpSender/dtmf
page-type: web-api-instance-property
browser-compat: api.RTCRtpSender.dtmf
---

{{APIRef("WebRTC")}}

The read-only **`dtmf`** property on the {{domxref("RTCRtpSender")}} interface returns an {{domxref("RTCDTMFSender")}} you can use to send {{Glossary("DTMF")}} tones on this sender's audio track.
See [Using DTMF](/en-US/docs/Web/API/WebRTC_API/Using_DTMF) for a full example.

## Value

An {{domxref("RTCDTMFSender")}} if this is an audio sender, or `null` if it isn't.

Each audio sender gets its own `RTCDTMFSender` when it's created, so a connection sending two audio tracks has two of them.
Senders for video tracks return `null`.

A non-`null` `dtmf` doesn't mean you can send tones yet.
Tones travel in the RTP stream alongside the audio, so the sender must be connected and sending, and the two peers must have negotiated the `audio/telephone-event` codec.
Check {{domxref("RTCDTMFSender.canInsertDTMF", "canInsertDTMF")}} for that, or handle the `InvalidStateError` that {{domxref("RTCDTMFSender.insertDTMF", "insertDTMF()")}} throws.

## Examples

### Sending tones on an audio track

This example adds a microphone track to a connection, then sends a dial string once the connection is up.
`addTrack()` returns the `RTCRtpSender` for the track, so there's no need to search for it.

```js
const pc = new RTCPeerConnection(configuration);

async function dial(tones) {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const [track] = stream.getAudioTracks();
  const sender = pc.addTrack(track, stream);

  // The track is an audio track, so the sender has a DTMF sender
  const dtmfSender = sender.dtmf;

  dtmfSender.addEventListener("tonechange", (event) => {
    if (event.tone == "") {
      console.log("Finished sending tones.");
    } else {
      console.log(`Sent tone: ${event.tone}`);
    }
  });

  pc.addEventListener("connectionstatechange", () => {
    if (pc.connectionState == "connected" && dtmfSender.canInsertDTMF) {
      dtmfSender.insertDTMF(tones);
    }
  });
}
```

### Finding the audio senders on a connection

Because only audio senders have a `dtmf` object, you can use the property to pick them out of {{domxref("RTCPeerConnection.getSenders()")}}:

```js
const audioSenders = pc.getSenders().filter((sender) => sender.dtmf);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
- {{domxref("RTCPeerConnection")}}
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Using DTMF with WebRTC](/en-US/docs/Web/API/WebRTC_API/Using_DTMF)
