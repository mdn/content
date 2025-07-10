---
title: "HTMLMediaElement: play() method"
short-title: play()
slug: Web/API/HTMLMediaElement/play
page-type: web-api-instance-method
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

```js-nolint
play()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which is resolved when playback has been started, or is
rejected if for any reason playback cannot be started.

> [!NOTE]
> Browsers released before 2019 may not return a value from
> `play()`.

### Exceptions

The promise's **rejection handler** is called with a {{domxref("DOMException")}} object
passed in as its sole input parameter (as opposed to a traditional exception being
thrown). Possible errors include:

- `NotAllowedError` {{domxref("DOMException")}}
  - : Provided if the user agent (browser) or operating system doesn't allow playback of media in the
    current context or situation. The browser may require the user to explicitly start
    media playback by clicking a "play" button, for example because of a [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
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
promise to be immediately rejected with a `NotAllowedError`. Websites should
be prepared to handle this situation. For example, a site should not present a user
interface that assumes playback has begun automatically, but should instead update their
UI based on whether the returned promise is fulfilled or rejected. See the
[example](#examples) below for more information.

> [!NOTE]
> The `play()` method may cause the user to be asked
> to grant permission to play the media, resulting in a possible delay before the
> returned promise is resolved. Be sure your code doesn't expect an immediate response.

For even more in-depth information about autoplay and autoplay blocking, see our
article [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Guides/Autoplay).

## Examples

### Confirming playback and handling states

This example demonstrates how to confirm that playback has begun and how to gracefully
handle blocked automatic playback.

When this example is executed, it begins by collecting references to the {{HTMLElement("video")}} element as well as the {{HTMLElement("button")}} used to toggle playback on and off.
It then sets up an event handler for the {{domxref("Element/click_event", "click")}} event on the toggle button and attempts to automatically begin playback by calling the [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) `playVideo()` function.

A helper function `toggleButton()` lets us define what should happen in the code when we pass it a boolean value representing the playing state (e.g., `toggleButton(true)`)
If playback is successful, the button text and its [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) changes to "Pause".
If playback fails, the button and `aria-label` shows "Play".
This ensures that the `playButton` matches the playback state by watching for the resolution or rejection of the {{jsxref("Promise")}} returned by `play()`:

```html live-sample___handling-states
<div class="video-box">
  <video
    id="video"
    width="480"
    loop
    src="/shared-assets/videos/flower.mp4"></video>
  <button type="button" id="play-button" aria-label="Play"></button>
</div>
```

```js live-sample___handling-states
let videoElem = document.getElementById("video");
let playButton = document.getElementById("play-button");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

function toggleButton(playing) {
  if (playing) {
    playButton.textContent = "Pause";
    playButton.setAttribute("aria-label", "Pause");
  } else {
    playButton.textContent = "Play";
    playButton.setAttribute("aria-label", "Play");
  }
}

async function playVideo() {
  try {
    await videoElem.play();
    toggleButton(true);
  } catch (err) {
    toggleButton(false);
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    toggleButton(false);
  }
}
```

```css hidden live-sample___handling-states
.video-box {
  position: relative;
}

#video {
  border: 2px solid black;
}

#play-button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 8px 12px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
}
```

{{embedlivesample("handling-states", , "300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- Learning: [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Guides/Autoplay)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
