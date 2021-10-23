---
title: Cross-browser audio basics
slug: Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics
tags:
  - Apps
  - Audio
  - Guide
  - HTML5
  - Media
  - events
---
This article provides:

- a basic guide to creating a cross-browser HTML5 audio player with all the associated attributes, properties, and events explained
- a guide to custom controls created using the Media API

## Basic Audio example

The code below is an example of a basic audio implementation using HTML5:

```html
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  <source src="audiofile.ogg" type="audio/ogg">
  <!-- fallback for non supporting browsers goes here -->
  <p>Your browser does not support HTML5 audio, but you can still
     <a href="audiofile.mp3">download the music</a>.</p>
</audio>
```

> **Note:** You can also use an MP4 file instead of MP3. MP4 files typically contain [AAC](https://en.wikipedia.org/wiki/Advanced_Audio_Coding) encoded audio. You can use `type="audio/mp4"`. (Currently, browsers that support mp3 also support mp4 audio).

- Here we define an {{ htmlelement("audio") }} element with multiple sources — we do this as not all browsers support the same audio formats. To ensure reasonable coverage, we should specify at least two different formats. The two formats that will give maximum coverage are mp3 and ogg vorbis.
- We do this using the {{ htmlelement("source") }} element, which takes the attributes `src` and `type`.

  - `src` contains the path to the audio file to be loaded (relative or absolute).
  - `type` is used to inform the browser of the file type. If omitted, most browsers will attempt to guess this from the file extension.

- If the {{ htmlelement("audio") }} element is not supported then {{ htmlelement("audio") }} and {{ htmlelement("source") }} will be ignored. However any supported text or elements that you define within {{ htmlelement("audio") }} will be displayed or acted upon. So the ideal place to create a fallback or inform of incompatibility is before the closing `</audio>` tag. In this case, we've provided a simple paragraph including a link to download the audio directly.
- The `controls` attribute on the {{ htmlelement("audio") }} element is specified when we require the browser to provide us with default playback controls. If you don't specify this attribute, no controls will appear — and you will instead have to create your own controls and program their functionality using the Media API (see below). However, that can be a good approach, because the default controls look different among various browsers. So creating your own controls ensures a consistent look for the controls across all browsers.

## HTML5 audio in detail

Now we've looked at a basic example, let's now explore the different aspects of HTML5 audio in more detail.

### Audio HTML attributes

We can specify a number of attributes with the audio tag to further determine the way audio is initialized.

#### autoplay

Specifying `autoplay` will cause the audio to start playing as soon as possible and without any user interaction — in short, the audio will autoplay.

```html
<audio autoplay>
  ...
</audio>
```

> **Note:** This value is often ignored on mobile platforms, and its use is not recommended unless really necessary. Auto-playing audio (and video) is usually really annoying. Plus browsers have policies that will block autoplay entirely in many situations. See the [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide) for details.

#### loop

The `loop` attribute will ensure that upon getting to the end of the audio clip, the audio clip will loop back to the beginning and start playing again.

```html
<audio loop>
  ...
</audio>
```

#### muted

If you want the audio to start muted (no volume), add the `muted` attribute.

```html
<audio muted>
  ...
</audio>
```

> **Note:** This value is often ignored on mobile platforms.

#### preload

The `preload` attribute allows you to specify a preference for how the browser preloads the audio, in other words, which part of the file it downloads when the {{ htmlelement("audio") }} element is initialized, and before the play button is pressed.

`preload` can take 3 different values:

1.  `none`: Don't download anything before the play button is pressed.
2.  `metadata`: Download the audio metadata; this is usually the best option, as it allows you to access and display information such as audio length, and allow the browser to work out which audio file it should use.
3.  `auto`: Download the whole audio file as soon as possible. This is generally not a good option unless you can guarantee your users will have a fast network connection.

> **Note:** This value is often ignored on mobile platforms.

```html
<audio preload="auto">
  ...
</audio>
```

#### controls

We specify the `controls` attribute when we require the browser to provide us with its default playback controls.

```html
<audio controls>
  ...
</audio>
```

#### src

As mentioned above, you can use the {{ htmlelement("source") }} element to specify one or more source audio files. Alternatively, you can include the `src` attribute directly on the {{ htmlelement("audio") }} element to specify a single source file.

```html
<audio src="audiofile.mp3">
  ...
</audio>
```

#### type

As mentioned above, to be sure that the browser knows what type of file is being specified, it's good practice to specify a `type` attribute alongside the `src` attribute. The `type` attribute specifies the MIME type or Internet Media Type of the file.

```html
<audio src="audiofile.mp3" type="audio/mpeg">
  ...
</audio>
```

### Manipulating the Audio Element with JavaScript

In addition to being able to specify various attributes in HTML, the {{ htmlelement("audio") }} element comes complete with several properties and methods that you can manipulate via JavaScript.

Given the following HTML:

```html
<audio id="my-audio" src="audiofile.mp3">
  ...
</audio>
```

You can grab the {{htmlelement("audio") }} element like this:

```js
var myAudio = document.getElementById('my-audio');
```

Alternatively, you can create a new element. Here's an example of creating an {{ htmlelement("audio") }} element, setting the media to play, playing and pausing, and then playing from 5 seconds into the audio:

```js
var myAudio = document.createElement('audio');

if (myAudio.canPlayType('audio/mpeg')) {
  myAudio.setAttribute('src','audiofile.mp3');
}

if (myAudio.canPlayType('audio/ogg')) {
  myAudio.setAttribute('src','audiofile.ogg');
}

alert('play');

myAudio.play();

alert('stop');

myAudio.pause();

alert('play from 5 seconds in');

myAudio.currentTime = 5;
myAudio.play();
```

Let's explore the available properties and methods in more detail.

#### play

The `play()` method is used to tell the audio to play. It takes no parameters.

```js
myAudio.play();
```

#### pause

The `pause()` method is used to tell the audio to pause. It takes no parameters.

```js
myAudio.pause();
```

> **Note:** There is no stop method — to implement a stop function, you'd have to pause the media then set the `{{ anch("currentTime") }}` property value to 0.

#### canPlayType

The `canPlayType()` method asks the browser whether a certain audio file type is supported. It takes the mime type of the type to check as a parameter.

```js
if (myAudio.canPlayType('audio/mpeg')) {
  // It's supported.
  // Do something here!
}
```

`canPlayType()` returns one of three values:

1.  `probably`
2.  `maybe`
3.  "" (an empty string)

In practice, we usually check if the result is true or false. Non-empty strings are true.

> **Note:** A very early spec specified that the browser should return `no` instead of an empty string, but thankfully the number of people using older browsers that implement this version of the spec are few and far between.

#### currentTime

The `currentTime` property gets or sets the current time the audio should play at. This is useful in many ways, for example since `play()` does not take a parameter we need to set the point to play from separately if we don't want it to be 0.

The value of `currentTime` is a number which represents the time in seconds.

```js
if (myAudio.currentTime > 5) {
  myAudio.currentTime = 3;
}
```

#### volume

The `volume` property allows us to set the audio volume, as a number between 0 and 1.

```js
// set the volume at 50%
myAudio.volume = 0.5;
```

## Creating your own custom audio player

The JavaScript media API allows you to create your own custom player. Let's take a look at a very minimal example. We can combine HTML and JavaScript to create a very simple player with a play and a pause button. First, we'll set up the audio in the HTML, without the `controls` attribute, since we are creating our own controls:

```html
<audio id="my-audio">
  <source src="audiofile.mp3" type="audio/mpeg">
  <source src="audiofile.ogg" type="audio/ogg">
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <p>Download<a href="audiofile.mp3">audiofile.mp3</a></p>
</audio>

<!-- custom play and pause buttons -->
<button id="play">play</button>
<button id="pause">pause</button>
```

Next, we attach some functionality to the player using JavaScript:

```js
window.onload = function(){

  var myAudio = document.getElementById('my-audio');
  var play = document.getElementById('play');
  var pause = document.getElementById('pause');

  // associate functions with the 'onclick' events
  play.onclick = playAudio;
  pause.onclick = pauseAudio;

  function playAudio() {
    myAudio.play();
  }

  function pauseAudio() {
    myAudio.pause();
  }

}
```

## Media loading events

Above we have shown how you can create a very simple audio player, but what if we want to show progress, buffering and only activate the buttons when the media is ready to play? Fortunately, there are a number of events we can use to let our player know exactly what is happening.

First, let's take a look at the media loading process in order:

### loadstart

The `loadstart` event tells us that load process has started and the browser is connecting to the media.

```js
myAudio.addEventListener("loadstart", function() {
  //grabbing the file
});
```

### durationchange

If you just want to know as soon as the duration of your media is established, this is the event for you. This can be useful because the initial value for duration is `NaN` (Not a Number), which you probably don't want to display to your users.

```js
myAudio.addEventListener("durationchange", function() {
  //you can display the duration now
});
```

### loadedmetadata

Metadata can consist of more than just duration — if you want to wait for all the metadata to download before doing something, you can detect the `loadedmetadata` event.

```js
myAudio.addEventListener("loadedmetadata", function() {
  //you can display the duration now
});
```

### loadeddata

The `loadeddata` event is fired when the first bit of media arrives. The playhead is in position but not quite ready to play.

```js
myAudio.addEventListener("loadeddata", function() {
  //you could display the playhead now
});
```

### progress

The `progress` event indicates that the download of media is still in progress. It is good practice to display some kind of 'loader' at this point.

```js
myAudio.addEventListener("progress", function() {
  // you could let the user know the media is downloading
});
```

### canplay

`canplay` is a useful event to detect should you want to determine whether the media is ready to play. You could, for example, disable custom controls until this event occurs.

```js
myAudio.addEventListener("canplay", function() {
  //audio is ready to play
});
```

### canplaythrough

`canplaythrough` is similar to `canplay` but it lets you know that the media is ready to be played all the way through (that is to say that the file has completely downloaded, or it is estimated that it will download in time so that buffering stops do not occur).

```js
myAudio.addEventListener("canplaythrough", function() {
  //audio is ready to play all the way through
});
```

### Media loading event order

To recap, the order of the media loading events are:

`loadstart` > `durationchange` > `loadedmetadata` > `loadeddata` > `progress` > `canplay` > `canplaythrough`

### Loading interruption events

We also have a few events available that will fire when there is some kind of interruption to the media loading process.

- suspend
  - : Media data is no longer being fetched even though the file has not been entirely downloaded.
- abort
  - : Media data download has been aborted but not due to an error.
- error
  - : An error is encountered while media data is being download.
- emptied
  - : The media buffer has been emptied, possibly due to an error or because the load() method was invoked to reload it.
- stalled
  - : Media data is unexpectedly no longer available.

## Media Playing Events

We also have another set of events that are useful for reacting to the state of the media playback.

### timeupdate

The `timeupdate` event is triggered every time the `currentTime` property changes. In practice, this occurs every 250 milliseconds. This event can be used to trigger the displaying of playback progress.

    myAudio.addEventListener("timeupdate", function() {
      //update something related to playback progress
    });

### playing

The `playing` event is initiated when playback is ready to start after having being paused due to lack of media data.

### waiting

The `waiting` event is triggered when playback has stopped due to lack of media data, although it is expected to resume once data becomes available.

### play

The `play` event is initiated after the `play()` method is returned or when the `autoplay` attribute has caused playback to begin. This is when the state of the media switches from paused to playing.

### pause

The `pause` event is triggered after the `pause()` method is returned. This is when the states switch from playing to paused.

### ended

The `ended` event is initiated when the end of the media is reached.

```js
myAudio.addEventListener("ended", function() {
  //do something once audio track has finished playing
});
```

### volumechange

The `volumechange` event signifies that the volume has changed; that includes being muted.

## An Audio Player with Feedback

Consider this snippet of HTML:

```html
<audio id="my-audio">
  <source src="http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3" type="audio/mpeg">
  <source src="http://jPlayer.org/audio/ogg/Miaow-07-Bubble.ogg" type="audio/ogg">
  <!-- place fallback here as <audio> supporting browsers will ignore it -->
  <a href="audiofile.mp3">audiofile.mp3</a>
</audio>

<div id="controls">
  <span id="loading">loading</span>
  <button id="play" style="display:none">play</button>
  <button id="pause" style="display:none" >pause</button>
</div>
<div id="progress">
  <div id="bar"></div>
</div>
```

Styled like so:

```css
#controls {
   width: 80px;
   float: left;
}

#progress {
   margin-left: 80px;
   border: 1px solid black;
}

#bar {
   height: 20px;
   background-color: green;
   width: 0;
}
```

Now let's wire this thing up with JavaScript:

```js
window.onload = function(){

   var myAudio = document.getElementById('my-audio');
   var play = document.getElementById('play');
   var pause = document.getElementById('pause');
   var loading = document.getElementById('loading');
   var bar = document.getElementById('bar');

   function displayControls() {
      loading.style.display = "none";
      play.style.display = "block";
   }

   // check that the media is ready before displaying the controls
   if (myAudio.paused) {
      displayControls();
   } else {
      // not ready yet - wait for canplay event
      myAudio.addEventListener('canplay', function() {
         displayControls();
      });
   }

   play.addEventListener('click', function() {
      myAudio.play();
      play.style.display = "none";
      pause.style.display = "block";
   });

   pause.addEventListener('click', function() {
      myAudio.pause();
      pause.style.display = "none";
      play.style.display = "block";
   });

   // display progress

   myAudio.addEventListener('timeupdate', function() {
      //sets the percentage
      bar.style.width = parseInt(((myAudio.currentTime / myAudio.duration) * 100), 10) + "%";
   });

}
```

You should end up with something like this:

![A basic audio player with play/pause button and seek bar](simpleplayer.png)

### Seeking using the seek bar

This is a good start, but it would be nice to be able to navigate the audio using the progress bar. Fortunately this isn't too difficult to implement.

First of all, we apply a quick update to the progress bar CSS to display the hand pointer on hover:

```css
#progress {
   margin-left: 80px;
   border: 1px solid black;
   cursor: pointer;
}
```

Then we add the code that detects the click and moves the 'playhead' to the correct position:

```js
var progress = document.getElementById('progress');

progress.addEventListener('click', function(e) {

  // calculate the normalized position clicked
  var clickPosition = (e.pageX  - this.offsetLeft) / this.offsetWidth;
  var clickTime = clickPosition * myAudio.duration;

  // move the playhead to the correct position
  myAudio.currentTime = clickTime;
});
```

### Buffering

Ok, we're getting there, but there is another piece of useful information we can display: the amount of audio has been buffered or downloaded in advance.

There are a couple of properties we haven't looked at yet, `buffered` and `seekable`.

#### buffered

This property lets us know which parts of the audio has been buffered (downloaded in advance). It returns something called a `TimeRanges` object.

```js
myBufferedTimeRanges = myAudio.buffered;
```

#### seekable

The seekable property informs you of whether you can jump directly to that part of the media without further buffering.

```js
mySeekableTimeRanges = myAudio.seekable;
```

#### Buffering events

There are also a couple of events related to buffering:

- `seeking`
  - : The `seeking` event is fired when media is being sought.
- `seeked`
  - : `seeked` occurs when the `seeking` attribute changes to `false`.

> **Note:** You can read more on [Buffering, Seeking and Time Ranges](/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges) elsewhere.

## Browser support

The following tables list basic audio support across desktop and mobile browsers, and what audio codecs are supported.

### Desktop

| Desktop Browser   | Version |
| ----------------- | ------- |
| Chrome            | 4+      |
| Firefox           | 3.5+    |
| Internet Explorer | 9+      |
| Opera             | 10.5+   |
| Safari            | 4+      |

### Mobile

| Mobile Browser    | Version |
| ----------------- | ------- |
| Chrome (Android)  | 32+     |
| Firefox (Android) | 26+     |
| IE Mobile         | 10+     |
| Opera Mobile      | 11+     |
| Safari (iOS)      | 4+      |
| Android Browser   | 2.3+    |
| Blackberry        | 7+      |

## Audio Codec Support

| Browser                  | Ogg | MP3     | AAC | PCM      | Opus    |
| ------------------------ | --- | ------- | --- | -------- | ------- |
| Firefox 3.5+             | ✓   | ✓ \*26+ |     | ✓        | ✓ \*14+ |
| Safari 5+                |     | ✓       | ✓   |          |         |
| Chrome 6+                | ✓   | ✓       | ✓   | ✓ \*9+   |         |
| Opera 10.5+              | ✓   |         |     |          |         |
| Internet Explorer 9+     |     | ✓       | ✓   |          |         |
| Firefox Mobile           | ✓   | ✓       | ✓   | ✓        | ✓       |
| Safari iOS3+             |     | ✓       | ✓   | ✓ \*4.2+ |         |
| Chrome Mobile            | ✓   | ✓       | ✓   | ✓        |         |
| Opera Mobile             | ✓   | ✓       | ✓   | ✓        |         |
| Internet Explorer Mobile | ✓   | ✓       | ✓   | ✓        |         |
| Android 2.3+             | ✓   | ✓       | ✓   | ✓        |         |

> **Note:** Nearly all browsers support MP3 — for more details see this page on [media format browser compatibility](/en-US/docs/Web/Media/Formats#browser_compatibility).

## See also

- [Buffering, Seeking and Time Ranges](/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges)
- [HTMLMediaElement events](/en-US/docs/Web/API/HTMLMediaElement#events)
- [Event reference > Media](/en-US/docs/Web/Events#media)
- [Using HTML5 audio and video](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Creating a cross-browser video player](/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player)
- [jPlayer](https://jPlayer.org): An open source audio and video library for jQuery and Zepto.
- [Media Event Inspector](https://jplayer.org/HTML5.Media.Event.Inspector)
