---
title: "Navigator: getAutoplayPolicy() method"
short-title: getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigator.getAutoplayPolicy
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`getAutoplayPolicy()`** method of the _Autoplay Policy Detection API_ provides information about whether [autoplay](/en-US/docs/Web/Media/Guides/Autoplay) of media elements and audio contexts is allowed, disallowed, or only allowed if the audio is muted.

Applications can use this information to provide an appropriate user experience.
For example, if the user agent policy only allows autoplay of inaudible content, the application might mute videos so that they can still autoplay.

The method can be used to get either the broad autoplay policy for all items of a particular type in the document, or for specific media elements or audio contexts.

## Syntax

```js-nolint
// Test autoplay policy for a particular media playing feature
getAutoplayPolicy(type)

// Test autoplay support for a specific element or context
getAutoplayPolicy(element)
getAutoplayPolicy(context)
```

### Parameters

The method must be called with one (and only one) of the following three parameters:

- `type` {{optional_inline}}

  - : A string indicating the media playing _feature_ for which the broad autoplay policy is required.

    The supported values are:

    - `mediaelement`

      - : Get the broad autoplay policy for media elements in the document.
        Media elements are [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement) derived objects such as [`HTMLAudioElement`](/en-US/docs/Web/API/HTMLAudioElement) and [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement), and their corresponding tags {{HTMLElement("audio")}} and {{HTMLElement("video")}}.

    - `audiocontext`

      - : Get the broad autoplay policy for [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) players in the document.

- `element` {{optional_inline}}

  - : A specific media element.
    This must be an [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement), including derived elements such as [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement) and [`HTMLAudioElement`](/en-US/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : A specific [`AudioContext`](/en-US/docs/Web/API/AudioContext).

### Return value

A string indicating the autoplay policy for the specified media feature type, element, or context.
This will be a string containing one of the following values:

- `allowed`
  - : Autoplay is allowed.
- `allowed-muted`
  - : Autoplay is allowed only for inaudible media.
    This includes media that has no audio track, or for which the audio has been muted.
- `disallowed`
  - : Autoplay is not allowed.

Note that the autoplay policy returned for a `type` parameter is the _broad_ policy for items of the indicated type.
On page load, all items of a type will have the same policy as the type.
Once the user has interacted with the page/site, on some browsers individual items _may_ have a different policy to the corresponding type.

### Exceptions

- `TypeError`
  - : The object passed to the method is not an allowed type.
    The allowed types include [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement) (or a derived element such as [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement) and [`HTMLAudioElement`](/en-US/docs/Web/API/HTMLAudioElement)), or [`AudioContext`](/en-US/docs/Web/API/AudioContext).

## Description

"Autoplay" refers to any feature that causes content to begin to play without the user specifically requesting that playback begin.
This includes the `autoplay` attribute in the HTML [`<video>`](/en-US/docs/Web/HTML/Element/video#autoplay) and [`<audio>`](/en-US/docs/Web/HTML/Element/audio#autoplay) elements, and using JavaScript code to start playback without any user interaction.

User agents commonly block autoplay, or only allow inaudible content to autoplay, because unexpected sounds when a page first loads can result in a jarring and unpleasant user experience.
The mechanisms used to determine whether content can autoplay or not, or only play for inaudible content, differ between user agents.

The **`getAutoplayPolicy()`** method provides a standard mechanism to determine the policy for a particular user agent to autoplay a particular type or item of content.
This enables application customization such as automatic muting of video on sites where autoplay of audible content is not allowed, or modifying the application to behave without autoplay.

The recommended use of the method is to call it _on page load_ (or before the content playing elements are created) specifying the type of feature to check, and then configuring autoplay of media elements based on the result.
For example, if the application wants to autoplay video elements that have an audio track, you might use the following code to mute the video if only inaudible content is allowed to play.

```js
if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
  // Do nothing. The content can autoplay.
} else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
  // Mute the video so it can autoplay.
} else {
  // Autoplay disallowed.
  // Add a play button to the video element.
}
```

The method can also be called to check the autoplay policy for a specific media element or audio context.
As shown below, the code looks exactly the same except you pass in the specify item rather than the `type` string.

```js
const video = document.getElementById("video_element_id");
if (navigator.getAutoplayPolicy(video) === "allowed") {
  // Do nothing. The content can autoplay.
} else if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
  // Mute the video so it can autoplay.
} else {
  // Autoplay disallowed.
  // Add a play button to the video element.
}
```

On page load, before the user has interacted with the page or site, the autoplay policy for the type and the individual items will be the same.
After the user interacts with the site, page, or specific elements, the autoplay policy may change for the whole `type`.
It is also possible that the policy for a specific item will change, even if the overall policy for the `type` does not.

There is no way to be notified that the autoplay policy has changed.
For this reason, while you can check the policy for a type or item at any time, usually you will only do so on page load or before attempting to play content.

## Examples

### Checking if the feature is supported

The code below shows how to check if `navigator.getAutoplayPolicy()` is supported:

```html hidden
<div id="reportResult"></div>
```

```js hidden
const log = document.getElementById("reportResult");
```

```js
if (!navigator.getAutoplayPolicy) {
  log.textContent = "navigator.getAutoplayPolicy() not supported.";
} else {
  log.textContent = "navigator.getAutoplayPolicy() is supported.";
}
```

The result of running the code on this page is:

{{EmbedLiveSample('Checking if the feature is supported', '', '50')}}

### Test autoplay policy for media element type

This example demonstrates how you can check the autoplay policy for the media elements type.

The code creates a video element that has the [`autoplay`](/en-US/docs/Web/API/HTMLMediaElement/autoplay) attribute and is not muted by default.
If the autoplay policy is "allowed-muted", the video will be muted to allow it to play.

#### HTML

The HTML below has a `div` element that is used as a reporting log, and also displays a [`<video>`](/en-US/docs/Web/HTML/Element/video) that has the [`autoplay`](/en-US/docs/Web/API/HTMLMediaElement/autoplay) attribute.
This should not be muted by default, and should play automatically if autoplay is not blocked.

```html
<div id="reportResult"></div>
<!-- Simple video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video
  id="bunny_vid"
  autoplay
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://archive.org/details/BigBuckBunny_124">download it</a> and
  watch it with your favorite video player!
</video>
```

#### JavaScript

The code reports whether or not the `getAutoplayPolicy()` method is supported, and if it is, the policy for media elements.

If the policy is `allowed-muted`, only muted videos can be played.
In this case we add some text explaining what is happening and mute the video.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent =
    "navigator.getAutoplayPolicy() not supported. It may or may not autoplay, depending on the browser!";
} else {
  log.textContent = `Autoplay policy for media elements is: ${navigator.getAutoplayPolicy(
    "mediaelement",
  )}. `;

  if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
    // Mute the video so it can autoplay
    video.muted = true;
    log.textContent += "Video has been muted to allow it to autoplay.";
  }
}
```

Note that you might similarly check for `allowed` and `disallowed`.

#### Result

The video is displayed below along with information about whether the `getAutoplayPolicy()` method is supported, and if so, the policy.

If `getAutoplayPolicy()` is supported and the policy is `allowed`, the video will play automatically with sound.
If the policy is `allowed-muted`, the video will play without sound.

{{EmbedLiveSample('Test autoplay policy for media elements', '', '400')}}

Note that if `getAutoplayPolicy()` is not supported, the video will either autoplay with audio or not play.
The code has no control over this behavior: you're at the mercy of the browser implementation!

### Test autoplay policy for a specific media element

This example shows how you can check whether a specific media element will autoplay.
It is almost exactly the same as the previous example (an `AudioContext` check would also be similar).
Note that it is possible for specific elements to autoplay even if a check on the `mediaelement` type indicates that autoplay is `disallowed`; in other words, a check on a specific element is more reliable (though it doesn't matter on page load).

The code creates a video element that has the [`autoplay`](/en-US/docs/Web/API/HTMLMediaElement/autoplay) attribute.
If the autoplay policy is "allowed-muted", the video will be muted to allow it to play.

#### HTML

The HTML below has a `div` element that is used as a reporting log, and also displays a [`<video>`](/en-US/docs/Web/HTML/Element/video) that has the [`autoplay`](/en-US/docs/Web/API/HTMLMediaElement/autoplay) attribute.
This should not be muted by default, and should play automatically if autoplay is not blocked.

```html
<div id="reportResult"></div>
<!-- Simple video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video
  id="bunny_vid"
  autoplay
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Sorry, your browser doesn't support embedded videos, but don't worry, you can
  <a href="https://archive.org/details/BigBuckBunny_124">download it</a> and
  watch it with your favorite video player!
</video>
```

#### JavaScript

The code reports whether or not the `getAutoplayPolicy()` method is supported, and if it is, the policy for media elements.

If the policy is `allowed-muted`, only muted videos can be played, so the code mutes the video.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent =
    "navigator.getAutoplayPolicy() not supported. It may or may not autoplay, depending on the browser!";
} else {
  // Here we pass in the HTMLVideoElement to check
  log.textContent = `navigator.getAutoplayPolicy(video) == ${navigator.getAutoplayPolicy(
    "mediaelement",
  )}`;

  if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
    // Mute the video so it can autoplay
    video.muted = true;
    log.textContent += "Video has been muted to allow it to autoplay.";
  }
}
```

#### Result

The result is the same as in the previous example:

- The video should autoplay with sound if `allowed` is returned, and no sound if `allowed-muted` is returned.
- If `getAutoplayPolicy()` is not supported, the video autoplay behavior depends only on the browser.

{{EmbedLiveSample('Test autoplay policy for a specific media element', '', '400')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Guides/Autoplay)
