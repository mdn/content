---
title: Navigator.getAutoplayPolicy()
slug: Web/API/Navigator/getAutoplayPolicy
page-type: web-api-instance-method
tags:
  - experimental
browser-compat: api.Navigator.getAutoplayPolicy
---

{{APIRef("HTML DOM")}}

{{SeeCompatTable}}

The **`getAutoplayPolicy()`** method of the _Autoplay Policy Detection API_ provides information about whether the user agent will allow media elements and audio contexts to autoplay without specific user interaction.

The method can be used to check the broad autoplay policy for a particular media playing feature in the document, such as media elements or audio contexts, and will return a result indicating if autoplay is "allowed", "disallowed" or "allowed if audio is muted" for the indicated type.
It can also be used to check autoplay support for specific media elements and audio contexts in the document.

## Syntax

```js-nolint
/* Test autoplay policy for a particular media playing feature */
getAutoplayPolicy(type)

/* Test autoplay support for specific element or context */
getAutoplayPolicy(element)
getAutoplayPolicy(context)
```

### Parameters

The method must be called with just one of the following three optional parameters:

- `type` {{optional_inline}}

  - : A string indicating the autoplay policy for a particular media playing _feature_, such media elements or audio contexts.
    <!-- This test is rough/indicative. - still checking "how rough" -->

    The supported values are:

    - `mediaelement`

      - : Get the autoplay policy for media elements in the document.
        Media elements are [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement) derived objects such as [`HTMLAudioElement`](/en-US/docs/Web/API/HTMLAudioElement) and [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement), and their corresponding tags {{HTMLElement("audio")}} and {{HTMLElement("video")}}.

    - `audiocontext`

      - : Get the autoplay policy for [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) players in the document.

- `element` {{optional_inline}}

  - : Test whether a specific media element can autoplay.
    This must be a [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement), or derived element such as [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement) and [`HTMLAudioElement`](/en-US/docs/Web/API/HTMLAudioElement).

- `context` {{optional_inline}}
  - : An [`AudioContext`](/en-US/docs/Web/API/AudioContext).

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

<!--
Still not clear whether allowed really means "all allowed". Note in spec indicates that perhaps "disallowed" is the broad policy, but this might be allowed for some cases.
Further Support can change for a check - i.e. it might be blocked, but later enabled by touching. We need to add a note to make it clear that this may need to be re-run.
-->

### Exceptions

- `TypeError`
  - : The object passed to the method is not an allowed type.
    The allowed types include [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement) (or a derived element such as [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement) and [`HTMLAudioElement`](/en-US/docs/Web/API/HTMLAudioElement)), or [`AudioContext`](/en-US/docs/Web/API/AudioContext).

## Description

"Autoplay" refers to refers to any feature that causes audio to begin to play without the user specifically requesting that playback begin.
This includes the `autoplay` attribute in the HTML [`<video>`](/en-US/docs/Web/HTML/Element/video#attr-autoplay) and [`<audio>`](/en-US/docs/Web/HTML/Element/audio#attr-autoplay) elements, and the use of JavaScript code to start playback without any user interaction.

User agents commonly block autoplay by default, because unexpected sounds, particularly when a page first loads, can result in a jarring and unpleasant user experience.
The mechanisms used to determine whether or not autoplay is blocked are at least partially depend on each particular user agent.

This API provides a consistent and reliable mechanism for code to check if autoplaying media is allowed.
This enables customization such as automatic muting of audio on sites where autoplay is not allowed, or even choosing to defer downloading of resources that cannot immediately be played (saving bandwidth).

<!--- And here we go on and explain
- types it works with
- that specific checks more reliable than element/audio checks
- What it doesn't work with - e.g. speech
- That you might need to retest - i.e. implementation might make something allowed following use of site or transient activation orwhatever - that could change our behaviour/testing.
-->

## Examples

### Checking if the feature is supported

The code below shows how to check if `navigator.getAutoplayPolicy()` is supported

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

### Test autoplay policy for media elements

This example demonstrates how you might check for support autoplay in media elements.

The code creates a video element that has the [`autoplay`](/en-US/docs/Web/API/HTMLMediaElement/autoplay) attribute.
If the autoplay policy is "allowed-muted" the video will be muted to allow it to play.

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

If the policy is `allowed-muted` only muted videos can be played, so the code mutes the video.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent = "navigator.getAutoplayPolicy() not supported.";
} else {
  log.textContent = `navigator.getAutoplayPolicy("mediaelement") == ${navigator.getAutoplayPolicy(
    "mediaelement"
  )}`;

  if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
    // Mute the video so it can autoplay
    video.muted = true;
  }
}
```

Note that you might similarly check for `allowed` and `disallowed`.

#### Result

The video is displayed below along with information about whether the `getAutoplayPolicy()` method is supported, and if so, the policy.

If `getAutoplayPolicy()` is supported and the policy is `allowed` the video will play automatically with sound.
If the policy is `allowed-muted` the video will play without sound.

{{EmbedLiveSample('Test autoplay policy for media elements', '', '400')}}

Note that if `getAutoplayPolicy()` is not supported the video will either autoplay with audio or not play until touched by the user.
The code has no control over this behaviour: you're at the mercy of the browser implementation!

### Test autoplay policy for a specific media element

This example shows how you can check whether a specific media element will autoplay.
It is almost exactly the same as the previous example (an `AudioContext` check would also be similar).
Note that it is possible for specific elements to autoplay even if a check on the `mediaelement` type to indicate that autoplay is `disallowed`; in other words, a check on a specific element is more reliable.

The code creates a video element that has the [`autoplay`](/en-US/docs/Web/API/HTMLMediaElement/autoplay) attribute.
If the autoplay policy is "allowed-muted" the video will be muted to allow it to play.

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

If the policy is `allowed-muted` only muted videos can be played, so the code mutes the video.

```js
const log = document.getElementById("reportResult");
const video = document.getElementById("bunny_vid");

if (!navigator.getAutoplayPolicy) {
  log.textContent = "navigator.getAutoplayPolicy() not supported.";
} else {
  // Here we pass in the HTMLVideoElement to check 
  log.textContent = `navigator.getAutoplayPolicy(video) == ${navigator.getAutoplayPolicy(
    "mediaelement"
  )}`;

  if (navigator.getAutoplayPolicy(video) === "allowed-muted") {
    // Mute the video so it can autoplay
    video.muted = true;
  }
}
```

#### Result

The result is the same as in the previous example:

- The video should autoplay with sound if `allowed` is returned, and no sound if `allowed-muted` is returned.
- If `getAutoplayPolicy()` is not supported the video autoplay behaviour depends only on the browser.

{{EmbedLiveSample('Test autoplay policy for a specific media element', '', '400')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide)
