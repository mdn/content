---
title: "AudioSession: type property"
short-title: type
slug: Web/API/AudioSession/type
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.AudioSession.type
---

{{APIRef("Audio Session API")}}{{SeeCompatTable}}

The **`type`** property of the {{domxref("AudioSession")}} interface returns or sets the type of the audio session.

The audio session type describes the general nature of a web page's audio output, allowing the platform to determine how web-based audio should interact with other audio playing on the device.

## Value

A string representing the audio session type. Possible values are:

- `"auto"`
  - : The default value. The user agent automatically chooses the best audio session type based on the audio APIs used by the page.
- `"playback"`
  - : Audio for media playback, such as video or music playback, podcasts, etc. This type should not mix with other playback audio, and may cause other audio to pause.
- `"transient"`
  - : Transient audio, such as notification sounds. This type usually plays on top of other audio and may cause it to duck (reduce in volume).
- `"transient-solo"`
  - : Transient solo audio, such as driving directions or voice prompts. This type pauses or mutes all other audio and plays exclusively. When the audio ends, previously playing audio may resume.
- `"ambient"`
  - : Ambient audio that can mix with other types of audio. This is useful when users want to mix audio from multiple pages or applications.
- `"play-and-record"`
  - : Audio for recording or real-time communication. This is appropriate when the microphone is being used or in video conferencing applications.

## Examples

### Setting the audio session type for media playback

```js
// Set the audio session type for music playback
navigator.audioSession.type = "playback";

// Play music
audioElement.play();
```

### Setting up a video conference call

```js
// Set up for video conferencing (both playback and recording)
navigator.audioSession.type = "play-and-record";

// Start video call
const stream = await navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true,
});
localVideo.srcObject = stream;
```

### Using transient audio for notifications

```js
// Set transient type for a notification sound
navigator.audioSession.type = "transient";

// Play notification
notificationSound.play();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioSession")}}
- {{domxref("Navigator.audioSession")}}
- [Audio Session API](/en-US/docs/Web/API/Audio_Session_API)
