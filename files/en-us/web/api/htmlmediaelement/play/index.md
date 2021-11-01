---
title: HTMLMediaElement.play()
slug: Web/API/HTMLMediaElement/play
tags:
  - API
  - Audio
  - HTMLMediaElement
  - Interface
  - Media
  - Method
  - Reference
  - Video
  - play
browser-compat: api.HTMLMediaElement.play
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLMediaElement")}}
**`play()`** method attempts to begin playback of the media.
It returns a {{jsxref("Promise")}} which is resolved when playback has been
successfully started.

Failure to begin playback for any reason, such as
permission issues, result in the promise being rejected.

## Syntax

```js
var promise = HTMLMediaElement.play();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which is resolved when playback has been started, or is
rejected if for any reason playback cannot be started.

> **Note:** Browsers released before 2019 may not return a value from
> `play()`.

### Exceptions

The promise's **rejection handler** is called with an exception name
passed in as its sole input parameter (as opposed to a traditional exception being
thrown). Possible errors include:

- `NotAllowedError` {{domxref("DOMException")}}
  - : Provided if the user agent (browser) or operating system doesn't allow playback of media in the
    current context or situation. This may happen, for example, if the browser requires
    the user to explicitly start media playback by clicking a "play" button.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Provided if the media source (which may be specified as a {{domxref("MediaStream")}},
    {{domxref("MediaSource")}}, {{domxref("Blob")}}, or {{domxref("File")}}, for example)
    doesn't represent a supported media format.

Other exceptions may be reported, depending on browser implementation details, media
player implementation, and so forth.

## Usage notes

Although the term "autoplay" is usually thought of as referring to pages that
immediately begin playing media upon being loaded, web browsers' autoplay policies also
apply to any script-initiated playback of media, including calls to `play()`.

If the {{Glossary("user agent")}} is configured not to allow automatic or
script-initiated playback of media, calling `play()` will cause the returned
promise to be immediately rejected with a `NotAllowedError`. Web sites should
be prepared to handle this situation. For example, a site should not present a user
interface that assumes playback has begun automatically, but should instead update their
UI based on whether the returned promise is fulfilled or rejected. See the
{{anch("Example", "example")}} below for more information.

> **Note:** The `play()` method may cause the user to be asked
> to grant permission to play the media, resulting in a possible delay before the
> returned promise is resolved. Be sure your code doesn't expect an immediate response.

For even more in-depth information about autoplay and autoplay blocking, see our
article [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide).

## Example

This example demonstrates how to confirm that playback has begun and how to gracefully
handle blocked automatic playback:

```js
let videoElem = document.getElementById("video");
let playButton = document.getElementById("playbutton");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add("playing");
  } catch(err) {
    playButton.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.classList.remove("playing");
  }
}
```

In this example, playback of video is toggled off and on by the
[`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
`playVideo()` function. It tries to play the video, and if successful sets
the class name of the `playButton` element to `"playing"`. If
playback fails to start, the `playButton` element's class is cleared,
restoring its default appearance. This ensures that the play button matches the actual
state of playback by watching for the resolution or rejection of the
{{jsxref("Promise")}} returned by `play()`.

When this example is executed, it begins by collecting references to the
{{HTMLElement("video")}} element as well as the {{HTMLElement("button")}} used to toggle
playback on and off. It then sets up an event handler for the {{event("click")}} event
on the play toggle button and attempts to automatically begin playback by calling
`playVideo()`.

You can [try out or remix this example in real time on Glitch](https://media-play-promise.glitch.me/).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- Learning: [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
