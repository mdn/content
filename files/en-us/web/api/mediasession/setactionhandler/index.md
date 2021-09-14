---
title: MediaSession.setActionHandler()
slug: Web/API/MediaSession/setActionHandler
tags:
  - API
  - Audio
  - Media
  - Media Session API
  - MediaSession
  - Method
  - Reference
  - UX
  - Video
  - setActionHandler
browser-compat: api.MediaSession.setActionHandler
---
{{APIRef("Media Session API")}}

The **`setActionHandler()`** method of the
{{domxref("MediaSession")}} interface sets a handler for a media session action. These
actions let a web app receive notifications when the user engages a device's built-in
physical or onscreen media controls, such as play, stop, or seek buttons.

## Syntax

```js
navigator.mediaSession.setActionHandler(type, callback)
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} representing an action type to listen for. It will be one
    of `{{anch("play")}}`,
    `{{anch("pause")}}`, `{{anch("stop")}}`,
    `{{anch("seekbackward")}}`, `{{anch("seekforward")}}`, `{{anch("seekto")}}`, `{{anch("skipad")}}`,`{{anch("previoustrack")}}`,
    or `{{anch("nexttrack")}}`. Further details on the action types can be
    found below under {{anch("Media session actions")}}.
- `callback`
  - : A function to call when the specified action type is invoked. The callback receives
    no input parameters, and should not return a value.

### Return value

`undefined`.

## Description

To remove a previously-established action handler, call `setActionHandler()`
again, specifying `null` as the `callback`.

The action handler receives as input a single parameter: an object conforming to
the {{domxref("MediaSessionActionDetails")}} dictionary, which provides both the action
type (so the same function can handle multiple action types), as well as data needed in
order to perform the action.

## Examples

This example creates a new media session and assigns action handlers (which don't do
anything) to it.

```js
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Unforgettable',
    artist: 'Nat King Cole',
    album: 'The Ultimate Collection (Remastered)',
    artwork: [
      { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
      { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
      { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
      { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
      { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
      { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
    ]
  });

  navigator.mediaSession.setActionHandler('play', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('pause', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('stop', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekbackward', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekforward', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('seekto', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
  navigator.mediaSession.setActionHandler('skipad', function() { /* Code excerpted. */ });
}
```

The following example sets up two functions for playing and pausing, then uses them as
callbacks with the relevant action handlers.

```js
const actionHandlers = [
  // play
  [
    'play',
    async function() {
      // play our audio
      await audioEl.play();
      // set playback state
      navigator.mediaSession.playbackState = "playing";
      // update our status element
      updateStatus(allMeta[index], 'Action: play  |  Track is playing...')
    }
  ],
  [
    'pause',
    () => {
      // pause out audio
      audioEl.pause();
      // set playback state
      navigator.mediaSession.playbackState = "paused";
      // update our status element
      updateStatus(allMeta[index], 'Action: pause  |  Track has been paused...');
    }
  ],
]

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    console.log(`The media session action "${action}" is not supported yet.`);
  }
}
```

This example uses appropriate action handlers to allow seeking in either direction
through the playing media.

```js
let skipTime = 10; // Time to skip in seconds

navigator.mediaSession.setActionHandler('seekbackward', evt => {
 // User clicked "Seek Backward" media notification icon.
 audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
});

navigator.mediaSession.setActionHandler('seekforward', evt => {
 // User clicked "Seek Forward" media notification icon.
 audio.currentTime = Math.min(audio.currentTime + skipTime,
               audio.duration);
});
```

To remove a media action handler, assign it to null.

```js
navigator.mediaSession.setActionHandler('nexttrack', null);
```

### Supporting multiple actions in one handler function

You can also, if you prefer, use a single function to handle multiple action types, by
checking the value of the `MediaSessionActionDetails` object's
{{domxref("MediaSessionActionDetails.action", "action")}} property:

```js
let skipTime = 7;

navigator.mediaSession.setActionHandler("seekforward", handleSeek);
navigator.mediaSession.setActionHandler("seekbackward", handleSeek);

function handleSeek(details) {
  switch(details.action) {
    case "seekforward":
      audio.currentTime = Math.min(audio.currentTime + skipTime,
              audio.duration);
      break;
    case "seekbackward":
      audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
      break;
  }
}
```

Here, the `handleSeek()` function handles
both `seekbackward` and `seekforward` actions.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
