---
title: "MediaSession: setActionHandler() method"
short-title: setActionHandler()
slug: Web/API/MediaSession/setActionHandler
page-type: web-api-instance-method
browser-compat: api.MediaSession.setActionHandler
---

{{APIRef("Media Session API")}}

The **`setActionHandler()`** method of the {{domxref("MediaSession")}} interface sets a handler for a media session action.
These actions let a web app receive notifications when the user engages a device's built-in physical or onscreen media controls, such as play, stop, or seek buttons.

## Syntax

```js-nolint
setActionHandler(type, callback)
```

### Parameters

- `type`
  - : A string representing an action type to listen for. It will be one
    of the following:
    - `hangup`
      - : End a call.
    - `nextslide`
      - : Moves to the next slide, when presenting a slide deck.
    - `nexttrack`
      - : Advances playback to the next track.
    - `pause`
      - : Pauses playback of the media.
    - `play`
      - : Begins (or resumes) playback of the media.
    - `previousslide`
      - : Moves to the previous slide, when presenting a slide deck.
    - `previoustrack`
      - : Moves back to the previous track.
    - `seekbackward`
      - : Seeks backward through the media from the current position.
        The `seekOffset` property passed to the callback specifies the amount of time to seek backward.
    - `seekforward`
      - : Seeks forward from the current position through the media.
        The `seekOffset` property passed to the callback specifies the amount of time to seek forward.
    - `seekto`
      - : Moves the playback position to the specified time within the media.
        The time to which to seek is specified in the `seekTime` property passed to the callback.
        If you intend to perform multiple `seekto` operations in rapid succession, you can also specify the `fastSeek` property passed to the callback with a value of `true`.
        This lets the browser know it can take steps to optimize repeated operations, and is likely to result in improved performance.
    - `skipad`
      - : Skips past the currently playing advertisement or commercial.
        This action may or may not be available, depending on the platform and {{Glossary("user agent")}}, or may be disabled due to subscription level or other circumstances.
    - `stop`
      - : Halts playback entirely.
    - `togglecamera`
      - : Turn the user's active camera on or off.
    - `togglemicrophone`
      - : Mute or unmute the user's microphone.
- `callback`
  - : A function to call when the specified action type is invoked. The callback should not return a value. The callback receives a dictionary containing the following properties:
    - `action`
      - : A string representing the action type. This property allows a single callback to handle multiple action types.
    - `fastSeek` {{optional_inline}}
      - : A [`seekto`](#seekto) action may _optionally_ include this property, which is a Boolean value indicating whether or not to perform a "fast" seek.
        A "fast" seek is a seek being performed in a rapid sequence, such as when fast-forwarding or reversing through the media, rapidly skipping through it.
        This property can be used to indicate that you should use the shortest possible method to seek the media.
        `fastSeek` is not included on the final action in the seek sequence in this situation.
    - `seekOffset` {{optional_inline}}
      - : If the `action` is either [`seekforward`](#seekforward) or [`seekbackward`](#seekbackward) and this property is present, it is a floating point value which indicates the number of seconds to move the play position forward or backward.
        If this property isn't present, those actions should choose a reasonable default distance to skip forward or backward (such as 7 or 10 seconds).
    - `seekTime` {{optional_inline}}
      - : If the `action` is [`seekto`](#seekto), this property must be present and must be a floating-point value indicating the absolute time within the media to move the playback position to, where 0 indicates the beginning of the media. This property is not present for other action types.

### Return value

None ({{jsxref("undefined")}}).

## Description

To remove a previously-established action handler, call `setActionHandler()` again, specifying `null` as the `callback`.

The action handler receives as input a single parameter: an object which provides both the action type (so the same function can handle multiple action types), as well as data needed in order to perform the action.

## Examples

### Setting up action handlers for a music player

This example creates a new media session and assigns action handlers (which don't do anything) to it.

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });

  navigator.mediaSession.setActionHandler("play", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("stop", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekbackward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekforward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekto", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("skipad", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglecamera", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglemicrophone", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("hangup", () => {
    /* Code excerpted. */
  });
}
```

The following example sets up two functions for playing and pausing, then uses them as callbacks with the relevant action handlers.

```js
const actionHandlers = [
  // play
  [
    "play",
    async () => {
      // play our audio
      await audioEl.play();
      // set playback state
      navigator.mediaSession.playbackState = "playing";
      // update our status element
      updateStatus(allMeta[index], "Action: play  |  Track is playing…");
    },
  ],
  [
    "pause",
    () => {
      // pause out audio
      audioEl.pause();
      // set playback state
      navigator.mediaSession.playbackState = "paused";
      // update our status element
      updateStatus(allMeta[index], "Action: pause  |  Track has been paused…");
    },
  ],
];

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    console.log(`The media session action "${action}" is not supported yet.`);
  }
}
```

This example uses appropriate action handlers to allow seeking in either direction through the playing media.

```js
navigator.mediaSession.setActionHandler("seekbackward", (evt) => {
  // User clicked "Seek Backward" media notification icon.
  let skipTime = evt.seekOffset || 10; // Time to skip in seconds
  audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
});

navigator.mediaSession.setActionHandler("seekforward", (evt) => {
  // User clicked "Seek Forward" media notification icon.
  let skipTime = evt.seekOffset || 10; // Time to skip in seconds
  audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration);
});
```

To remove a media action handler, assign it to null.

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### Supporting multiple actions in one handler function

You can also, if you prefer, use a single function to handle multiple action types, by checking the value of the `action` property:

```js
let skipTime = 7;

navigator.mediaSession.setActionHandler("seekforward", handleSeek);
navigator.mediaSession.setActionHandler("seekbackward", handleSeek);

function handleSeek(details) {
  switch (details.action) {
    case "seekforward":
      audio.currentTime = Math.min(
        audio.currentTime + skipTime,
        audio.duration,
      );
      break;
    case "seekbackward":
      audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
      break;
  }
}
```

Here, the `handleSeek()` function handles both `seekbackward` and `seekforward` actions.

### Using action handlers to control a slide presentation

The `"previousslide"` and `"nextslide"` action handlers can be used to handle moving forward and backward through a slide presentation, for example when the user puts their presentation into a {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}} window, and presses the browser-supplied controls for navigating through slides.

```js
try {
  navigator.mediaSession.setActionHandler("previousslide", () => {
    log('> User clicked "Previous Slide" icon.');
    if (slideNumber > 1) slideNumber--;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "previousslide" media session action is not supported.');
}

try {
  navigator.mediaSession.setActionHandler("nextslide", () => {
    log('> User clicked "Next Slide" icon.');
    slideNumber++;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "nextslide" media session action is not supported.');
}
```

See [Presenting Slides / Media Session Sample](https://googlechrome.github.io/samples/media-session/slides.html) for a working example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
