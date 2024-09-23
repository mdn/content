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

Once the track is selected, you can obtain from its `RTCRtpSender` the {{domxref("RTCDTMFSender")}} object you'll use for sending DTMF. From there, you can call {{domxref("RTCDTMFSender.insertDTMF()")}} to enqueue DTMF signals to be sent on the track to the other peer. The `RTCRtpSender` will then send the tones to the other peer as packets alongside the track's audio data.

Each time a tone is sent, the `RTCPeerConnection` receives a [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event with a {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} property specifying which tone finished playing, which is an opportunity to update interface elements, for example. When the tone buffer is empty, indicating that all the tones have been sent, a `tonechange` event with its `tone` property set to "" (an empty string) is delivered to the connection object.

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
let dialString = "12024561111";

let callerPC = null;
let receiverPC = null;
let dtmfSender = null;

let hasAddTrack = false;

let mediaConstraints = {
  audio: true,
  video: false,
};

let offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 0,
};

let dialButton = null;
let logElement = null;
```

These are, in order:

- `dialString`
  - : The DTMF string the caller will send when the "Dial" button is clicked.
- `callerPC` and `receiverPC`
  - : The {{domxref("RTCPeerConnection")}} objects representing the caller and the receiver, respectively. These will be initialized when the call starts up, in our `connectAndDial()` function, as shown in [Starting the connection process](#starting_the_connection_process) below.
- `dtmfSender`
  - : The {{domxref("RTCDTMFSender")}} object for the connection. This will be obtained while setting up the connection, in the `gotStream()` function shown in [Adding the audio to the connection](#adding_the_audio_to_the_connection).
- `hasAddTrack`
  - : Because some browsers have not yet implemented {{domxref("RTCPeerConnection.addTrack()")}}, therefore requiring the use of the obsolete {{domxref("RTCPeerConnection.addStream", "addStream()")}} method, we use this Boolean to determine whether or not the user agent supports `addTrack()`; if it doesn't, we'll fall back to `addStream()`. This gets figured out in `connectAndDial()`, as shown in [Starting the connection process](#starting_the_connection_process).
- `mediaConstraints`
  - : An object specifying the constraints to use when starting the connection. We want an audio-only connection, so `video` is `false`, while `audio` is `true`.
- `offerOptions`
  - : An object providing options to specify when calling {{domxref("RTCPeerConnection.createOffer()")}}. In this case, we state that we want to receive audio but not video.
- `dialButton` and `logElement`
  - : These variables will be used to store references to the dial button and the {{HTMLElement("div")}} into which logging information will be written. They'll get set up when the page is first loaded. See [Initialization](#initialization) below.

#### Initialization

When the page loads, we do some basic setup: we fetch references to the dial button and the log output box elements, and we use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to add an event listener to the dial button so that clicking it calls the `connectAndDial()` function to begin the connection process.

```js
window.addEventListener("load", () => {
  logElement = document.querySelector(".log");
  dialButton = document.querySelector("#dial");

  dialButton.addEventListener("click", connectAndDial, false);
});
```

#### Starting the connection process

When the dial button is clicked, `connectAndDial()` is called. This starts building the WebRTC connection in preparation for sending the DTMF codes.

```js
function connectAndDial() {
  callerPC = new RTCPeerConnection();

  hasAddTrack = callerPC.addTrack !== undefined;

  callerPC.onicecandidate = handleCallerIceEvent;
  callerPC.onnegotiationneeded = handleCallerNegotiationNeeded;
  callerPC.oniceconnectionstatechange = handleCallerIceConnectionStateChange;
  callerPC.onsignalingstatechange = handleCallerSignalingStateChangeEvent;
  callerPC.onicegatheringstatechange = handleCallerGatheringStateChangeEvent;

  receiverPC = new RTCPeerConnection();
  receiverPC.onicecandidate = handleReceiverIceEvent;

  if (hasAddTrack) {
    receiverPC.ontrack = handleReceiverTrackEvent;
  } else {
    receiverPC.onaddstream = handleReceiverAddStreamEvent;
  }

  navigator.mediaDevices
    .getUserMedia(mediaConstraints)
    .then(gotStream)
    .catch((err) => log(err.message));
}
```

After creating the `RTCPeerConnection` for the caller (`callerPC`), we look to see if it has an {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} method. If it does, we set `hasAddTrack` to `true`; otherwise, we set it to `false`. This variable will let the example operate even on browsers not yet implementing the newer `addTrack()` method; we'll do so by falling back to the older {{domxref("RTCPeerConnection.addStream", "addStream()")}} method.

Next, the event handlers for the caller are established. We'll cover these in detail later.

Then a second `RTCPeerConnection`, this one representing the receiving end of the call, is created and stored in `receiverPC`; its `onicecandidate` event handler is set up too.

If `addTrack()` is supported, we set up the receiver's `ontrack` event handler; otherwise, we set up `onaddstream`. The {{domxref("RTCPeerConnection.track_event", "track")}} and {{domxref("RTCPeerConnection/addstream_event", "addstream")}} events are sent when media is added to the connection.

Finally, we call {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to obtain access to the caller's microphone. If successful, the function `gotStream()` is called, otherwise we log the error because calling has failed.

#### Adding the audio to the connection

As mentioned above, when the audio input from the microphone is obtained, `gotStream()` is called. Its job is to build the stream being sent to the receiver, so the actual process of starting to transmit can begin. It also gets access to the `RTCDTMFSender` we'll use to issue DTMF on the connection.

```js
function gotStream(stream) {
  log("Got access to the microphone.");

  let audioTracks = stream.getAudioTracks();

  if (hasAddTrack) {
    if (audioTracks.length > 0) {
      audioTracks.forEach((track) => callerPC.addTrack(track, stream));
    }
  } else {
    log(
      "Your browser doesn't support RTCPeerConnection.addTrack(). Falling " +
        "back to the <strong>deprecated</strong> addStream() method…",
    );
    callerPC.addStream(stream);
  }

  if (callerPC.getSenders) {
    dtmfSender = callerPC.getSenders()[0].dtmf;
  } else {
    log(
      "Your browser doesn't support RTCPeerConnection.getSenders(), so " +
        "falling back to use <strong>deprecated</strong> createDTMFSender() " +
        "instead.",
    );
    dtmfSender = callerPC.createDTMFSender(audioTracks[0]);
  }

  dtmfSender.ontonechange = handleToneChangeEvent;
}
```

After setting `audioTracks` to be a list of the audio tracks on the stream from the user's microphone, it's time to add the media to the caller's `RTCPeerConnection`. If `addTrack()` is available on the `RTCPeerConnection`, we add each of the stream's audio tracks, one by one, to the connection using {{domxref("RTCPeerConnection.addTrack()")}}. Otherwise we call {{domxref("RTCPeerConnection.addStream()")}} to add the stream to the call as a single unit.

Next we look to see if the {{domxref("RTCPeerConnection.getSenders()")}} method is implemented. If it is, we call it on `callerPC` and get the first entry in the returned list of senders; this is the {{domxref("RTCRtpSender")}} responsible for transmitting data for the first audio track on the call (which is the track we'll send DTMF over). We then obtain the `RTCRtpSender`'s {{domxref("RTCRtpSender.dtmf", "dtmf")}} property, which is an {{domxref("RTCDTMFSender")}} object that can send DTMF on the connection, from the caller to the receiver.

If `getSenders()` isn't available, we instead call {{domxref("RTCPeerConnection.createDTMFSender()")}} to get the `RTCDTMFSender` object. Although this method is obsolete, this example supports it as a fallback to let older browsers (and those not yet updated to support the current WebRTC DTMF API) run the example.

Finally, we set the DTMF sender's {{domxref("RTCDTMFSender.tonechange_event", "ontonechange")}} event handler so we get notified each time a DTMF tone finishes playing.

You can find the log function at the bottom of the documentation.

#### When a tone finishes playing

Each time a DTMF tone finishes playing, a [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event is delivered to `callerPC`. The event listener for these is implemented as the `handleToneChangeEvent()` function.

```js
function handleToneChangeEvent(event) {
  if (event.tone !== "") {
    log(`Tone played: ${event.tone}`);
  } else {
    log("All tones have played. Disconnecting.");
    callerPC.getLocalStreams().forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });
    receiverPC.getLocalStreams().forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });

    audio.pause();
    audio.srcObject = null;
    receiverPC.close();
    callerPC.close();
  }
}
```

The [`tonechange`](/en-US/docs/Web/API/RTCDTMFSender/tonechange_event) event is used both to indicate when an individual tone has played and when all tones have finished playing. The event's {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}} property is a string indicating which tone just finished playing. If all tones have finished playing, `tone` is an empty string; when that's the case, {{domxref("RTCDTMFSender.toneBuffer")}} is empty.

In this example, we log to the screen which tone just finished playing. In a more advanced application, you might update the user interface, for example, to indicate which note is currently playing.

On the other hand, if the tone buffer is empty, our example is designed to disconnect the call. This is done by stopping each stream on both the caller and the receiver by iterating over each `RTCPeerConnection`'s track list (as returned by its {{domxref("MediaStream.getTracks", "getTracks()")}} method) and calling each track's {{domxref("MediaStreamTrack.stop", "stop()")}} method.

Once both the caller's and the receiver's media tracks are all stopped, we pause the {{HTMLElement("audio")}} element and set its {{domxref("HTMLMediaElement.srcObject", "srcObject")}} to `null`. This detaches the audio stream from the {{HTMLElement("audio")}} element.

Then, finally, each `RTCPeerConnection` is closed by calling its {{domxref("RTCPeerConnection.close", "close()")}} method.

#### Adding candidates to the caller

When the caller's `RTCPeerConnection` ICE layer comes up with a new candidate to propose, it issues an {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event to `callerPC`. The `icecandidate` event handler's job is to transmit the candidate to the receiver. In our example, we are directly controlling both the caller and the receiver, so we can just directly add the candidate to the receiver by calling its {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} method. That's handled by `handleCallerIceEvent()`:

```js
function handleCallerIceEvent(event) {
  if (event.candidate) {
    log(`Adding candidate to receiver: ${event.candidate.candidate}`);

    receiverPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`Error adding candidate to receiver: ${err}`));
  } else {
    log("Caller is out of candidates.");
  }
}
```

If the {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event has a non-`null` `candidate` property, we create a new {{domxref("RTCIceCandidate")}} object from the `event.candidate` string and "transmit" it to the receiver by calling `receiverPC.addIceCandidate()`, providing the new `RTCIceCandidate` as its input. If `addIceCandidate()` fails, the `catch()` clause outputs the error to our log box.

If `event.candidate` is `null`, that indicates that there are no more candidates available, and we log that information.

#### Dialing once the connection is open

Our design requires that when the connection is established, we immediately send the DTMF string. To accomplish that, we watch for the caller to receive an {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}} event. This event is sent when one of a number of changes occurs to the state of the ICE connection process, including the successful establishment of a connection.

```js
function handleCallerIceConnectionStateChange() {
  log(`Caller's connection state changed to ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Sending DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

The `iceconnectionstatechange` event doesn't actually include within it the new state, so we get the connection process's current state from `callerPC`'s {{domxref("RTCPeerConnection.iceConnectionState")}} property. After logging the new state, we look to see if the state is `"connected"`. If so, we log the fact that we're about to send the DTMF, then we call {{domxref("RTCDTMFSender.insertDTMF", "dtmf.insertDTMF()")}} to send the DTMF on the same track as the audio data method on the `RTCDTMFSender` object we [previously stored](#adding_the_audio_to_the_connection) in `dtmfSender`.

Our call to `insertDTMF()` specifies not only the DTMF to send (`dialString`), but also the length of each tone in milliseconds (400 ms) and the amount of time between tones (50 ms).

#### Negotiating the connection

When the calling {{domxref("RTCPeerConnection")}} begins to receive media (after the microphone's stream is added to it), a {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} event is delivered to the caller, letting it know that it's time to start negotiating the connection with the receiver. As previously mentioned, our example is simplified somewhat because we control both the caller and the receiver, so `handleCallerNegotiationNeeded()` is able to quickly construct the connection by chaining the required calls together for both the caller and receiver, as shown below.

```js
function handleCallerNegotiationNeeded() {
  log("Negotiating…");
  callerPC
    .createOffer(offerOptions)
    .then((offer) => {
      log(`Setting caller's local description: ${offer.sdp}`);
      return callerPC.setLocalDescription(offer);
    })
    .then(() => {
      log(
        "Setting receiver's remote description to the same as caller's local",
      );
      return receiverPC.setRemoteDescription(callerPC.localDescription);
    })
    .then(() => {
      log("Creating answer");
      return receiverPC.createAnswer();
    })
    .then((answer) => {
      log(`Setting receiver's local description to ${answer.sdp}`);
      return receiverPC.setLocalDescription(answer);
    })
    .then(() => {
      log("Setting caller's remote description to match");
      return callerPC.setRemoteDescription(receiverPC.localDescription);
    })
    .catch((err) => log(`Error during negotiation: ${err.message}`));
}
```

Since the various methods involved in negotiating the connection return {{jsxref("promise")}}s, we can chain them together like this:

1. Call {{domxref("RTCPeerConnection.createOffer", "callerPC.createOffer()")}} to get an offer.
2. Then take that offer and set the caller's local description to match by calling {{domxref("RTCPeerConnection.setLocalDescription", "callerPC.setLocalDescription()")}}.
3. Then "transmit" the offer to the receiver by calling {{domxref("RTCPeerConnection.setRemoteDescription", "receiverPC.setRemoteDescription()")}}. This configures the receiver so that it knows how the caller is configured.
4. Then the receiver creates an answer by calling {{domxref("RTCPeerConnection.createAnswer", "receiverPC.createAnswer()")}}.
5. Then the receiver sets its local description to match the newly-created answer by calling {{domxref("RTCPeerConnection.setLocalDescription", "receiverPC.setLocalDescription()")}}.
6. Then the answer is "transmitted" to the caller by calling {{domxref("RTCPeerConnection.setRemoteDescription", "callerPC.setRemoteDescription()")}}. This lets the caller know what the receiver's configuration is.
7. If at any time an error occurs, the `catch()` clause outputs an error message to the log.

#### Tracking other state changes

We can also watch for changes to the signaling state (by accepting {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}} events) and the ICE gathering state (by accepting {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}} events). We aren't using these for anything, so all we do is log them. We could have not set up these event listeners at all.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Caller's signaling state changed to ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Caller's ICE gathering state changed to ${callerPC.iceGatheringState}`);
}
```

#### Adding candidates to the receiver

When the receiver's `RTCPeerConnection` ICE layer comes up with a new candidate to propose, it issues an {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event to `receiverPC`. The `icecandidate` event handler's job is to transmit the candidate to the caller. In our example, we are directly controlling both the caller and the receiver, so we can just directly add the candidate to the caller by calling its {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} method. That's handled by `handleReceiverIceEvent()`.

This code is analogous to the `icecandidate` event handler for the caller, seen in [Adding candidates to the caller](#adding_candidates_to_the_caller) above.

```js
function handleReceiverIceEvent(event) {
  if (event.candidate) {
    log(`Adding candidate to caller: ${event.candidate.candidate}`);

    callerPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`Error adding candidate to caller: ${err}`));
  } else {
    log("Receiver is out of candidates.");
  }
}
```

If the {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} event has a non-`null` `candidate` property, we create a new {{domxref("RTCIceCandidate")}} object from the `event.candidate` string and deliver it to the caller by passing that into `callerPC.addIceCandidate()`. If `addIceCandidate()` fails, the `catch()` clause outputs the error to our log box.

If `event.candidate` is `null`, that indicates that there are no more candidates available, and we log that information.

#### Adding media to the receiver

When the receiver begins to receive media, an event is delivered to the receiver's {{domxref("RTCPeerConnection")}}, `receiverPC`. As explained in [Starting the connection process](#starting_the_connection_process), the current WebRTC specification uses the {{domxref("RTCPeerConnection.track_event", "track")}} event for this. Since some browsers haven't been updated to support this yet, we also need to handle the {{domxref("RTCPeerConnection/addstream_event", "addstream")}} event. This is demonstrated in the `handleReceiverTrackEvent()` and `handleReceiverAddStreamEvent()` methods below.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

The `track` event includes a {{domxref("RTCTrackEvent.streams", "streams")}} property containing an array of the streams the track is a member of (one track can be part of many streams). We take the first stream and attach it to the {{HTMLElement("audio")}} element.

The `addstream` event includes a {{domxref("MediaStreamEvent.stream", "stream")}} property specifying a single stream added to the track. We attach it to the `<audio>` element.

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
