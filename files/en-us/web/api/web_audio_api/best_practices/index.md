---
title: Web Audio API best practices
slug: Web/API/Web_Audio_API/Best_practices
page-type: guide
---

{{DefaultAPISidebar("Web Audio API")}}

There's no strict right or wrong way when writing creative code. As long as you consider security, performance, and accessibility, you can adapt to your own style. In this article, we'll share a number of _best practices_ — guidelines, tips, and tricks for working with the Web Audio API.

## Loading sounds/files

There are four main ways to load sound with the Web Audio API and it can be a little confusing as to which one you should use.

When working with files, you are looking at either grabbing the file from an {{domxref("HTMLMediaElement")}} (i.e. an {{htmlelement("audio")}} or {{htmlelement("video")}} element), or you're looking to fetch the file and decode it into a buffer. Both are legitimate ways of working, however, it's more common to use the former when you are working with full-length tracks, and the latter when working with shorter, more sample-like tracks.

Media elements have streaming support out of the box. The audio will start playing when the browser determines it can load the rest of the file before playing finishes. You can see an example of how to use this with the Web Audio API in the [Using the Web Audio API tutorial](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API).

You will, however, have more control if you use a buffer node. You have to request the file and wait for it to load ([this section of our advanced article](/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques#dial-up_—_loading_a_sound_sample) shows a good way to do it), but then you have access to the data directly, which means more precision, and more precise manipulation.

If you're looking to work with audio from the user's camera or microphone you can access it via the [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API) and the {{domxref("MediaStreamAudioSourceNode")}} interface. This is good for WebRTC and situations where you might want to record or possibly analyze audio.

The last way is to generate your own sound, which can be done with either an {{domxref("OscillatorNode")}} or by creating a buffer and populating it with your own data. Check out the [tutorial here for creating your own instrument](/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques) for information on creating sounds with oscillators and buffers.

## Cross browser & legacy support

The Web Audio API specification is constantly evolving and like most things on the web, there are some issues with it working consistently across browsers. Here we'll look at options for getting around cross-browser problems.

There's the [`standardized-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm package, which creates API functionality consistently across browsers, filling holes as they are found. It's constantly in development and endeavors to keep up with the current specification.

There is also the option of libraries, of which there are a few depending on your use case. For a good all-rounder, [howler.js](https://howlerjs.com/) is a good choice. It has cross-browser support and, provides a useful subset of functionality. Although it doesn't harness the full gamut of filters and other effects the Web Audio API comes with, you can do most of what you'd want to do.

If you are looking for sound creation or a more instrument-based option, [tone.js](https://tonejs.github.io/) is a great library. It provides advanced scheduling capabilities, synths, and effects, and intuitive musical abstractions built on top of the Web Audio API.

[R-audio](https://github.com/bbc/r-audio), from the [BBC's Research & Development department](https://medium.com/bbc-design-engineering/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), is a library of React components aiming to provide a "more intuitive, declarative interface to Web Audio". If you're used to writing JSX it might be worth looking at.

## Autoplay policy

Browsers have started to implement an autoplay policy, which in general can be summed up as:

> "Create or resume context from inside a user gesture".

But what does that mean in practice? A user gesture has been interpreted to mean a user-initiated event, normally a `click` event. Browser vendors decided that Web Audio contexts should not be allowed to automatically play audio; they should instead be started by a user. This is because autoplaying audio can be really annoying and obtrusive. But how do we handle this?

When you create an audio context (either offline or online) it is created with a `state`, which can be `suspended`, `running`, or `closed`.

When working with an {{domxref("AudioContext")}}, if you create the audio context from inside a `click` event the state should automatically be set to `running`. Here is a simple example of creating the context from inside a `click` event:

```js
const button = document.querySelector("button");
button.addEventListener(
  "click",
  () => {
    const audioCtx = new AudioContext();
    // Do something with the audio context
  },
  false,
);
```

If however, you create the context outside of a user gesture, its state will be set to `suspended` and it will need to be started after user interaction. We can use the same click event example here, test for the state of the context and start it, if it is suspended, using the [`resume()`](/en-US/docs/Web/API/AudioContext/resume) method.

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");

button.addEventListener(
  "click",
  () => {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  },
  false,
);
```

You might instead be working with an {{domxref("OfflineAudioContext")}}, in which case you can resume the suspended audio context with the [`startRendering()`](/en-US/docs/Web/API/OfflineAudioContext/startRendering) method.

## User control

If your website or application contains sound, you should allow the user control over it, otherwise again, it will become annoying. This can be achieved by play/stop and volume/mute controls. The [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) tutorial goes over how to do this.

If you have buttons that switch audio on and off, using the ARIA [`role="switch"`](/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role) attribute on them is a good option for signalling to assistive technology what the button's exact purpose is, and therefore making the app more accessible. There's a [demo of how to use it here](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

As you work with a lot of changing values within the Web Audio API and will want to provide users with control over these, the [`range input`](/en-US/docs/Web/HTML/Element/input/range) is often a good choice of control to use. It's a good option as you can set minimum and maximum values, as well as increments with the [`step`](/en-US/docs/Web/HTML/Element/input#step) attribute.

## Setting AudioParam values

There are two ways to manipulate {{domxref("AudioNode")}} values, which are themselves objects of type {{domxref("AudioParam")}} interface. The first is to set the value directly via the property. So for instance if we want to change the `gain` value of a {{domxref("GainNode")}} we would do so thus:

```js
gainNode.gain.value = 0.5;
```

This will set our volume to half. However, if you're using any of the `AudioParam`'s defined methods to set these values, they will take precedence over the above property setting. If for example, you want the `gain` value to be raised to 1 in 2 seconds time, you can do this:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

It will override the previous example (as it should), even if it were to come later in your code.

Bearing this in mind, if your website or application requires timing and scheduling, it's best to stick with the {{domxref("AudioParam")}} methods for setting values. If you're sure it doesn't, setting it with the `value` property is fine.
