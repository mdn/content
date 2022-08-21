---
title: Web Audio playbackRate explained
slug: Web/Guide/Audio_and_video_delivery/WebAudio_playbackRate_explained
tags:
  - Apps
  - Audio
  - Media
  - Video
  - playbackRate
---
The `playbackRate` property of the {{ htmlelement("audio") }} and {{ htmlelement("video") }} elements allows us to change the speed, or rate, at which a piece of web audio or video is playing. This article explains `playbackRate` in detail.

## playbackRate basics

Let's starting by looking at a brief example of `playbackRate` usage:

```js
const audio = document.createElement('audio');
audio.setAttribute('src','audiofile.mp3');
audio.playbackRate = 0.5;
```

Here we create an {{ htmlelement("audio") }} element, and set its `src` to a file of our choice. Next we set `playbackRate` to 0.5, which represents half normal speed (the `playbackRate` is a multiplier applied to the original rate).

## A complete example

Let's create a {{ htmlelement("video") }} element first, and set up video and playback rate controls in HTML:

```html
<video id="myVideo" controls>
  <source src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type='video/mp4' />
  <source src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type='video/webm' />
</video>

<form>
  <input id="pbr" type="range" value="1" min="0.5" max="4" step="0.1" >
  <p>Playback Rate <span id="currentPbr">1</span></p>
</form>
```

And apply some JavaScript to it:

```js
window.onload = () => {
  const v = document.getElementById("myVideo");
  const p = document.getElementById("pbr");
  const c = document.getElementById("currentPbr");

  p.addEventListener('input', () => {
    c.innerHTML = p.value;
    v.playbackRate = p.value;
  }, false);

};
```

Finally, we listen for the `input` event firing on the {{ htmlelement("input") }} element, allowing us to react to the playback rate control being changed.

> **Note:** [Try out this example live](https://jsbin.com/UGIxoJis/1/edit), and try adjusting the playback rate control to see the effect.

## defaultPlaybackRate and ratechange

In addition to `playbackRate`, we also have a `defaultPlaybackRate` property available, which lets us set the default playback rate: the playback rate to which the media resets; for example, if we change the source of the video, or (in some browsers) when an `ended` event is generated.

So `defaultPlaybackRate` allows us to set the playback rate _before_ playing the media, while `playbackRate` allows us to change it during media playback.

There is also an event available called `ratechange`, which fires every time the `playbackRate` changes.

## Browser support

- Chrome 20+ ✔
- Firefox 20+ ✔
- IE 9+ ✔
- Safari 6+ ✔
- Opera 15+ ✔
- Mobile Chrome (Android) ✖
- Mobile Firefox 24+ ✔
- IE Mobile ✖
- Mobile Safari 6+ (iOS) ✔
- Opera Mobile ✖

### Notes

- Most browsers stop playing audio outside `playbackRate` bounds of 0.5 and 4, leaving the video playing silently. For most applications, it's recommended that you limit the range to between 0.5 and 4.
- The pitch of the audio track does not change when `playBackRate` is altered.
- Negative values will not cause the media to play in reverse.
- IE9+ switches to the default playback rate when an `ended` event is fired.
- Firefox generates a `ratechange` event when the media source is substituted.
- On iOS 7 you can only affect the `playbackRate` when the media is paused (not while it's playing).

## See also

- [Hyperaudio's Playback Rate Test](https://hyperaud.io/lab/pbr-test/)
- [HTMLMediaElement reference](/en-US/docs/Web/API/HTMLMediaElement)
