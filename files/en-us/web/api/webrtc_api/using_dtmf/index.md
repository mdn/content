---
title: Using DTMF with WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
page-type: guide
---

{{DefaultAPISidebar("WebRTC")}}

In order to more fully support audio/video conferencing, [WebRTC](/en-US/docs/Web/API/WebRTC_API) supports sending {{Glossary("DTMF")}} to the remote peer on an {{domxref("RTCPeerConnection")}}. This article offers a brief high-level overview of how DTMF works over WebRTC, then provides a guide for everyday developers about how to send DTMF over an `RTCPeerConnection`. The DTMF system is often referred to as "touch tone," after an old trade name for the system.

WebRTC doesn't send DTMF codes as audio data. Instead, they're sent out-of-band, as RTP payloads. Note, however, that although it's possible to _send_ DTMF using WebRTC, there is currently no way to detect or receive _incoming_ DTMF. WebRTC currently ignores these payloads; this is because WebRTC's DTMF support is primarily intended for use with legacy telephone services that rely on DTMF tones to perform tasks such as:

- Teleconferencing systems
- Menu systems
- Voicemail systems
- Entry of credit card or other payment information
- Passcode entry

> [!NOTE]
> While the DTMF is not sent to the remote peer as audio, browsers may choose to play the corresponding tone to the local user as part of their user experience, since users are typically used to hearing their phone play the tones audibly.

## Sending DTMF on an RTCPeerConnection

A given {{domxref("RTCPeerConnection")}} can have multiple media tracks sent or received on it. When you wish to transmit DTMF signals, you first need to decide which track to send them on, since DTMF is sent as a series of out-of-band payloads on the {{domxref("RTCRtpSender")}} responsible for transmitting that track's data to the other peer.

{{domxref("RTCPeerConnection.addTrack()")}} returns the `RTCRtpSender` for the track you add, so you usually have the sender you need already. You can also find it later with {{domxref("RTCPeerConnection.getSenders()")}}.

Read the sender's {{domxref("RTCRtpSender.dtmf", "dtmf")}} property to get the {{domxref("RTCDTMFSender")}} for that track. Only audio senders have one; video senders return `null`.

Call {{domxref("RTCDTMFSender.insertDTMF()")}} to enqueue tones. The `RTCRtpSender` sends them to the other peer as packets alongside the track's audio data. Since the tones ride along with the audio, the connection must be connected and sending, and the two peers must have negotiated the `audio/telephone-event` codec. Until then, {{domxref("RTCDTMFSender.canInsertDTMF", "canInsertDTMF")}} is `false` and `insertDTMF()` throws an `InvalidStateError`. Waiting for the connection state to become `connected`, as the example below does, is usually enough.

Each time a tone starts playing out, the `RTCDTMFSender` receives a [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event with a {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} property naming that tone, which is an opportunity to update interface elements, for example. When the tone buffer is empty, indicating that all the tones have been sent, a `tonechange` event with its `tone` property set to `""` (an empty string) is delivered.

> [!NOTE]
> Older code might be using the deprecated, non-standard {{domxref("RTCPeerConnection.createDTMFSender()")}} method instead. Firefox and Safari never implemented it, and Chrome is removing it. Use {{domxref("RTCRtpSender.dtmf")}} in new code.

If you'd like to know more about how this works, read {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} and {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. The details of how DTMF payloads are handled on RTP are beyond the scope of this article. Instead, we'll focus on how to use DTMF within the context of an {{domxref("RTCPeerConnection")}} by studying how an example works.

## Simple example

This simple example constructs two {{domxref("RTCPeerConnection")}}s, establishes a connection between them, then waits for the user to click a "Dial" button. When the button is clicked, a DTMF string is sent over the connection using {{domxref("RTCDTMFSender.insertDTMF()")}}. Once the tones finish transmitting, the connection is closed.

> [!NOTE]
> This example is obviously somewhat contrived, since normally the two `RTCPeerConnection` objects would exist on different devices, and signaling would be done over the network instead of it all being linked up inline as it is here.

### HTML

The HTML for this example is very basic; there are only three elements of importance:

- An {{HTMLElement("audio")}} element to play the audio received by the `RTCPeerConnection` being "called."
- A {{HTMLElement("button")}} element to trigger creating and connecting the two `RTCPeerConnection` objects, then sending the DTMF tones.
- A {{HTMLElement("div")}} to receive and display log text to show status information.

```html
<p>
  This example demonstrates the use of DTMF in WebRTC. Note that this example is
  "cheating" by generating both peers in one code stream, rather than having
  each be a truly separate entity.
</p>

<audio id="audio" autoplay controls></audio><br />
<button name="dial" id="dial">Dial</button>

<div class="log"></div>
```

### JavaScript

Let's take a look at the JavaScript code next. Keep in mind that the process of establishing the connection is somewhat contrived here; you normally don't build both ends of the connection in the same document.

#### Global variables

First, we establish global variables.

```js
const dialString = "12024561111";

const dialButton = document.querySelector("#dial");
const logElement = document.querySelector(".log");
const audioElement = document.querySelector("#audio");

let callerPC;
let receiverPC;
let dtmfSender;
```

These are, in order:

- `dialString`
  - : The DTMF string the caller will send when the "Dial" button is clicked.
- `dialButton`, `logElement`, and `audioElement`
  - : The elements from the HTML above: the button that starts the call, the box we log status messages to, and the `<audio>` element that plays the audio the receiver gets.
- `callerPC` and `receiverPC`
  - : The {{domxref("RTCPeerConnection")}} objects representing the caller and the receiver, respectively. These get created when the call starts up, in our `connectAndDial()` function, as shown in [Starting the connection process](#starting_the_connection_process) below.
- `dtmfSender`
  - : The {{domxref("RTCDTMFSender")}} we send the tones on. We get it from the caller's audio sender in `connectAndDial()`.

#### Initialization

We add an event listener to the dial button so that clicking it calls the `connectAndDial()` function to begin the connection process.

```js
dialButton.addEventListener("click", connectAndDial);
```

#### Starting the connection process

When the dial button is clicked, `connectAndDial()` is called. This starts building the WebRTC connection in preparation for sending the DTMF codes.

```js
async function connectAndDial() {
  callerPC = new RTCPeerConnection();
  receiverPC = new RTCPeerConnection();

  callerPC.addEventListener("negotiationneeded", negotiate);
  callerPC.addEventListener("connectionstatechange", dialWhenConnected);

  callerPC.addEventListener("icecandidate", (event) => {
    addCandidate(receiverPC, event.candidate);
  });
  receiverPC.addEventListener("icecandidate", (event) => {
    addCandidate(callerPC, event.candidate);
  });

  receiverPC.addEventListener("track", (event) => {
    audioElement.srcObject = event.streams[0];
  });

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    log("Got access to the microphone.");

    const [track] = stream.getAudioTracks();
    const sender = callerPC.addTrack(track, stream);

    // The track is an audio track, so the sender has a DTMF sender
    dtmfSender = sender.dtmf;
    dtmfSender.addEventListener("tonechange", handleToneChange);
  } catch (err) {
    log(`Error getting the microphone: ${err}`);
  }
}
```

First we create both `RTCPeerConnection` objects: `callerPC` for the caller and `receiverPC` for the receiving end of the call.

Then we add event listeners. The caller's [`negotiationneeded`](/en-US/docs/Web/API/RTCPeerConnection/negotiationneeded_event) event tells us to negotiate the connection, and its [`connectionstatechange`](/en-US/docs/Web/API/RTCPeerConnection/connectionstatechange_event) event tells us when the connection is up, which is when we dial. Each connection's [`icecandidate`](/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event) event hands us a candidate to pass to the other peer. The receiver's [`track`](/en-US/docs/Web/API/RTCPeerConnection/track_event) event fires when the incoming audio arrives, and we attach its stream to the `<audio>` element to play it.

Finally we call {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to get the caller's microphone, and add its audio track to the caller with {{domxref("RTCPeerConnection.addTrack", "addTrack()")}}. That returns the {{domxref("RTCRtpSender")}} for the track, whose {{domxref("RTCRtpSender.dtmf", "dtmf")}} property is the {{domxref("RTCDTMFSender")}} we'll send tones on. We listen for its [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event so we get notified each time a tone plays.

Adding the track also causes the `negotiationneeded` event to fire, which starts negotiation.

#### Negotiating the connection

Because we control both ends of the call, `negotiate()` can play both parts, passing each description straight to the other connection instead of over a signaling channel.

```js
async function negotiate() {
  try {
    log("Negotiating…");
    await callerPC.setLocalDescription();
    await receiverPC.setRemoteDescription(callerPC.localDescription);
    await receiverPC.setLocalDescription();
    await callerPC.setRemoteDescription(receiverPC.localDescription);
  } catch (err) {
    log(`Error during negotiation: ${err}`);
  }
}
```

Calling {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} with no arguments creates the right description for the connection's current state — an offer for the caller, an answer for the receiver — so we don't need `createOffer()` or `createAnswer()` here. The steps are:

1. The caller sets its local description, which produces an offer.
2. The receiver takes that offer as its remote description, so it knows how the caller is configured.
3. The receiver sets its own local description, which produces an answer.
4. The caller takes that answer as its remote description, so it knows how the receiver is configured.
5. If anything fails, the `catch` block logs the error.

#### Exchanging ICE candidates

Each time a connection's ICE layer comes up with a candidate, it fires an [`icecandidate`](/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event) event. Normally you'd send the candidate to the other peer over your signaling channel. Here both peers are in the same page, so we hand the candidate directly to the other connection with {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}.

```js
async function addCandidate(pc, candidate) {
  try {
    await pc.addIceCandidate(candidate);
  } catch (err) {
    log(`Error adding candidate: ${err}`);
  }
}
```

A `null` candidate means the connection has no more candidates to offer, and acts as an end-of-candidates signal to the peer.

#### Dialing once the connection is open

We send the DTMF string as soon as the connection is established. The caller's [`connectionstatechange`](/en-US/docs/Web/API/RTCPeerConnection/connectionstatechange_event) event fires whenever the {{domxref("RTCPeerConnection.connectionState", "connectionState")}} changes, so we watch for the `connected` state.

```js
function dialWhenConnected() {
  log(`Caller's connection state changed to ${callerPC.connectionState}`);

  if (callerPC.connectionState !== "connected") {
    return;
  }
  log(`Sending DTMF: "${dialString}"`);
  dtmfSender.insertDTMF(dialString, 400, 50);
}
```

Our call to {{domxref("RTCDTMFSender.insertDTMF", "insertDTMF()")}} specifies not only the DTMF to send (`dialString`), but also the length of each tone in milliseconds (400 ms) and the amount of time between tones (50 ms).

#### When a tone finishes playing

Each time a DTMF tone plays, a [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event is delivered to the `RTCDTMFSender`. The event listener for these is implemented as the `handleToneChange()` function.

```js
function handleToneChange(event) {
  if (event.tone !== "") {
    log(`Tone played: ${event.tone}`);
    return;
  }
  log("All tones have played. Disconnecting.");

  for (const pc of [callerPC, receiverPC]) {
    for (const sender of pc.getSenders()) {
      sender.track?.stop();
    }
    pc.close();
  }
  audioElement.pause();
  audioElement.srcObject = null;
}
```

The [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event is used both to indicate when an individual tone has played and when all tones have finished playing. The event's {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} property is a string indicating which tone just played. If all tones have finished playing, `tone` is an empty string; when that's the case, {{domxref("RTCDTMFSender.toneBuffer")}} is empty.

In this example, we log to the screen which tone just played. In a more advanced application, you might update the user interface, for example, to indicate which note is currently playing.

On the other hand, if the tone buffer is empty, our example is designed to disconnect the call. For each connection we stop every track we're sending, by calling {{domxref("MediaStreamTrack.stop", "stop()")}} on each {{domxref("RTCRtpSender")}}'s track, then close the connection with {{domxref("RTCPeerConnection.close", "close()")}}. Closing a connection also ends the tracks it was receiving.

Then we pause the {{HTMLElement("audio")}} element and set its {{domxref("HTMLMediaElement.srcObject", "srcObject")}} to `null`, which detaches the audio stream from it.

#### Logging

A simple `log()` function is used throughout the code to append text to a {{HTMLElement("div")}} box for displaying status and errors to the user.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Result

You can try this example here. When you click the "Dial" button, you should see a series of logging messages output; then the dialing will begin. If your browser plays the tones audibly as part of its user experience, you should hear them as they're transmitted.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Once transmission of the tones is complete, the connection is closed. You can click "Dial" again to reconnect and send the tones.

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Lifetime of a WebRTC session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (a tutorial and example which explains the signaling process in more detail)
- [Introduction to WebRTC protocols](/en-US/docs/Web/API/WebRTC_API/Protocols)
