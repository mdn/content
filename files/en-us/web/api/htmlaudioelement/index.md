---
title: HTMLAudioElement
slug: Web/API/HTMLAudioElement
page-type: web-api-interface
browser-compat: api.HTMLAudioElement
---

{{APIRef("HTML DOM")}}

The **`HTMLAudioElement`** interface provides access to the properties of {{HTMLElement("audio")}} elements, as well as methods to manipulate them.

This element is based on, and inherits properties and methods from, the {{domxref("HTMLMediaElement")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("HTMLAudioElement.Audio", "Audio()")}}
  - : Creates and returns a new `HTMLAudioElement` object, optionally starting the process of loading an audio file into it if the file URL is given.

## Instance properties

_No specific properties; inherits properties from its parent, {{domxref("HTMLMediaElement")}}, and from {{domxref("HTMLElement")}}._

## Instance methods

_Inherits methods from its parent, {{domxref("HTMLMediaElement")}}, and from {{domxref("HTMLElement")}}. It offers no methods of its own._

## Examples

### Basic usage

You can create a `HTMLAudioElement` entirely with JavaScript using the {{domxref("HTMLAudioElement.Audio", "Audio()")}} constructor:

```js
const audioElement = new Audio("car_horn.wav");
```

then you can invoke the `play()` method on the element

```js
audioElement.play();
```

> **Note:** A common gotcha is trying to play an audio element immediately on page load. Modern browser's default autoplay policy will block that from happening. Refer to [Firefox](https://hacks.mozilla.org/2019/02/firefox-66-to-block-automatically-playing-audible-video-and-audio/) and [chrome](https://developer.chrome.com/blog/autoplay/) for best practices and work arounds.

Some of the more commonly used properties of the audio element include {{domxref("HTMLMediaElement.src", "src")}}, {{domxref("HTMLMediaElement.currentTime", "currentTime")}}, {{domxref("HTMLMediaElement.duration", "duration")}}, {{domxref("HTMLMediaElement.paused", "paused")}}, {{domxref("HTMLMediaElement.muted", "muted")}}, and {{domxref("HTMLMediaElement.volume", "volume")}}. This snippet copies the audio file's duration to a variable:

```js
const audioElement = new Audio("car_horn.wav");
audioElement.addEventListener("loadeddata", () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip
});
```

## Events

_Inherits methods from its parent, {{domxref("HTMLMediaElement")}}, and from its ancestor {{domxref("HTMLElement")}}._ Listen to events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- [Using audio and video in HTML](/en-US/docs/Web/Media/HTML_media)
- HTML element implementing this interface: {{HTMLElement("audio")}}.
