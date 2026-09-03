---
title: Web audio playbackRate explained
slug: Web/Media/Guides/Audio_and_video_delivery/WebAudio_playbackRate_explained
page-type: guide
sidebar: mediasidebar
---

The {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}} property of the {{ htmlelement("audio") }} and {{ htmlelement("video") }} elements allows us to change the speed, or rate, at which a piece of web audio or video is playing. This article explains `playbackRate` in detail.

## playbackRate basics

Let's starting by looking at a brief example of `playbackRate` usage:

```js
const audio = document.createElement("audio");
audio.setAttribute("src", "audio-file.mp3");
audio.playbackRate = 0.5;
```

Here we create an {{ htmlelement("audio") }} element, and set its `src` to a file of our choice. Next we set `playbackRate` to 0.5, which represents half normal speed (the `playbackRate` is a multiplier applied to the original rate).

## A complete example

Let's create a {{ htmlelement("video") }} element first, and set up video and playback rate controls in HTML:

```html
<video id="myVideo" controls loop>
  <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
  <source src="/shared-assets/videos/flower.webm" type="video/webm" />
</video>

<form>
  <input id="pbr" type="range" value="1" min="0.5" max="4" step="0.1" />
  <p>Playback Rate <span id="currentPbr">1</span></p>
</form>
```

Some basic CSS:

```css
form {
  font-family: monospace;
}

video {
  width: 500px;
  aspect-ratio: 16 / 9;
}
```

And apply some JavaScript to it:

```js
const v = document.getElementById("myVideo");
const p = document.getElementById("pbr");
const c = document.getElementById("currentPbr");

p.addEventListener("input", () => {
  c.textContent = p.value;
  v.playbackRate = p.value;
});
```

Finally, we listen for the `input` event firing on the {{ htmlelement("input") }} element, allowing us to react to the playback rate control being changed.

{{EmbedLiveSample("a complete example", "", 400)}}

## defaultPlaybackRate and ratechange

In addition to `playbackRate`, we also have a `defaultPlaybackRate` property available, which lets us set the default playback rate: the playback rate to which the media resets; for example, if we change the source of the video, or (in some browsers) when an `ended` event is generated.

So `defaultPlaybackRate` allows us to set the playback rate _before_ playing the media, while `playbackRate` allows us to change it during media playback.

There is also an event available called `ratechange`, which fires every time the `playbackRate` changes.

### Notes

- Most browsers stop playing audio outside `playbackRate` bounds of 0.5 and 4, leaving the video playing silently. For most applications, it's recommended that you limit the range to between 0.5 and 4.
- The pitch of the audio track does not change when `playBackRate` is altered.
- Negative values indicating the media should play in reverse is not currently supported by most browsers.

## See also

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- {{domxref("HTMLMediaElement")}}: interface which defines the {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}} property.
