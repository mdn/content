---
title: Audio for Web games
slug: Games/Techniques/Audio_for_Web_Games
page-type: guide
---

{{GamesSidebar}}

Audio is an important part of any game; it adds feedback and atmosphere. Web-based audio is maturing fast, but there are still many browser differences to navigate. We often need to decide which audio parts are essential to our games' experience and which are nice to have but not essential, and devise a strategy accordingly. This article provides a detailed guide to implementing audio for web games, looking at what works currently across as wide a range of platforms as possible.

## Mobile audio caveats

By far the most difficult platforms to provide web audio support for are mobile platforms. Unfortunately these are also the platforms that people often use to play games. There are a couple of differences between desktop and mobile browsers that may have caused browser vendors to make choices that can make web audio difficult for game developers to work with. Let's look at these now.

### Autoplay

Browser autoplay policy now affects desktop _and_ mobile browsers. There is further information about it [here from the Google Developers site](https://developer.chrome.com/blog/autoplay/).

It is worth noting that autoplay with sound is allowed if:

- the User has interacted with the domain.
- on mobile the user has [made the application installable](/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable).

Many browsers will ignore any requests made by your game to automatically play audio; instead playback for audio needs to be started by a user-initiated event, such as a click or tap. This means you will have to structure your audio playback to take account of that. This is usually mitigated against by loading the audio in advance and priming it on a user-initiated event.

For more passive audio autoplay, for example background music that starts as soon as a game loads, one trick is to detect _any_ user initiated event and start playback then. For other more active sounds that are to be used during the game we could consider priming them as soon as something like a _Start_ button is pressed.

To prime audio like this we want to play a part of it; for this reason it is useful to include a moment of silence at the end of your audio sample. Jumping to, playing, and then pausing that silence will mean we can now use JavaScript to play that file at arbitrary points. You can find out more about [best practices with the autoplay policy here](/en-US/docs/Web/API/Web_Audio_API/Best_practices#autoplay_policy).

> [!NOTE]
> Playing part of your file at zero volume could also work if the browser allows you to change volume (see below). Also note that playing and immediately pausing your audio does not guarantee that a small piece of audio won't be played.

> [!NOTE]
> Adding a web app to your mobile's homescreen may change its capabilities. In the case of autoplay on iOS, this appears to be the case currently. If possible, you should try your code on several devices and platforms to see how it works.

### Volume

Programmatic volume control may be disabled in mobile browsers. The reason often given is that the user should be in control of the volume at the OS level and this shouldn't be overridden.

### Buffering and preloading

Likely as an attempt to mitigate runaway mobile network data use, we also often find that buffering is disabled before playback has been initiated. Buffering is the process of the browser downloading the media in advance, which we often need to do to ensure smooth playback.

The {{domxref("HTMLMediaElement")}} interface comes with [lots of properties](/en-US/docs/Web/API/HTMLMediaElement#instance_properties) to help determine whether a track is in a state to be playable.

> [!NOTE]
> In many ways the concept of buffering is an outdated one. As long as byte-range requests are accepted (which is the default behavior), we should be able to jump to a specific point in the audio without having to download the preceding content. However, preloading is still useful — without it, there would always need to be some client-server communication required before playing can commence.

### Concurrent audio playback

A requirement of many games is the need to play more than one piece of audio at the same time; for example, there might be background music playing along with sound effects for various things happening in the game. Although the situation is soon going to get better with the adoption of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), the current most widely-supported method — using the vanilla {{htmlelement("audio")}} element — leads to patchy results on mobile devices.

### Testing and support

Here's a table that shows what mobile platforms support the features talked about above.

<table class="standard-table">
  <caption>
    Mobile support for web audio features
  </caption>
  <thead>
    <tr>
      <th scope="row">Mobile browser</th>
      <th scope="col">Version</th>
      <th scope="col">Concurrent play</th>
      <th scope="col">Autoplay</th>
      <th scope="col">Volume adjusting</th>
      <th scope="col">Preload</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chrome (Android)</th>
      <td>69+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Firefox (Android)</th>
      <td>62+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Edge Mobile</th>
      <td></td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Opera Mobile</th>
      <td>46+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Safari (iOS)</th>
      <td>7+</td>
      <td>Y/N*</td>
      <td>N</td>
      <td>N</td>
      <td>Y</td>
    </tr>
    <tr>
      <th scope="row">Android Browser</th>
      <td>67+</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
      <td>Y</td>
    </tr>
  </tbody>
</table>

There's a [full compatibility chart for mobile and desktop HTMLMediaElement support here](/en-US/docs/Web/API/HTMLMediaElement#browser_compatibility).

> [!NOTE]
> Concurrent audio playback is tested using our [concurrent audio test example](https://jsfiddle.net/dmkyaq0r/), where we attempt to play three pieces of audio at the same time using the standard audio API.

> [!NOTE]
> Simple autoplay functionality is tested with our [autoplay test example](https://jsfiddle.net/vpdspp2b/).

> [!NOTE]
> Volume changeability is tested with our [volume test example](https://jsfiddle.net/7ta12vw4/).

## Mobile workarounds

Although mobile browsers can present problems, there are ways to work around the issues detailed above.

### Audio sprites

Audio sprites borrow their name from [CSS sprites](/en-US/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS), which is a visual technique for using CSS with a single graphic resource to break it into a series of sprites. We can apply the same principle to audio so that rather than having a bunch of small audio files that take time to load and play, we have one larger audio file containing all the smaller audio snippets we need. To play a specific sound from the file, we just use the known start and stop times for each audio sprite.

The advantage is that we can prime one piece of audio and have our sprites ready to go. To do this we can just play and instantly pause the larger piece of audio. You'll also reduce the number of server requests and save bandwidth.

```js
const myAudio = document.createElement("audio");
myAudio.src = "my-sprite.mp3";
myAudio.play();
myAudio.pause();
```

You'll need to sample the current time to know when to stop. If you space your individual sounds by at least 500ms then using the `timeUpdate` event (which fires every 250ms) should be sufficient. Your files may be slightly longer than they strictly need to be, but silence compresses well.

Here's an example of an audio sprite player — first let's set up the user interface in HTML:

```html
<audio id="myAudio" src="http://jPlayer.org/tmp/countdown.mp3"></audio>
<button data-start="18" data-stop="19">0</button>
<button data-start="16" data-stop="17">1</button>
<button data-start="14" data-stop="15">2</button>
<button data-start="12" data-stop="13">3</button>
<button data-start="10" data-stop="11">4</button>
<button data-start="8" data-stop="9">5</button>
<button data-start="6" data-stop="7">6</button>
<button data-start="4" data-stop="5">7</button>
<button data-start="2" data-stop="3">8</button>
<button data-start="0" data-stop="1">9</button>
```

Now we have buttons with start and stop times in seconds. The "countdown.mp3" MP3 file consists of a number being spoken every 2 seconds, the idea being that we play back that number when the corresponding button is pressed.

Let's add some JavaScript to make this work:

```js
const myAudio = document.getElementById("myAudio");
const buttons = document.getElementsByTagName("button");
let stopTime = 0;

for (const button of buttons) {
  button.addEventListener(
    "click",
    () => {
      myAudio.currentTime = button.getAttribute("data-start");
      stopTime = button.getAttribute("data-stop");
      myAudio.play();
    },
    false,
  );
}

myAudio.addEventListener(
  "timeupdate",
  () => {
    if (myAudio.currentTime > stopTime) {
      myAudio.pause();
    }
  },
  false,
);
```

> [!NOTE]
> You can [try out our audio sprite player live](https://jsfiddle.net/59vwaame/) on JSFiddle.

> [!NOTE]
> On mobile we may need to trigger this code from a user-initiated event such as a start button being pressed, as described above.

> [!NOTE]
> Watch out for bit rates. Encoding your audio at lower bit rates means smaller file sizes but lower seeking accuracy.

### Background music

Music in games can have a powerful emotional effect. You can mix and match various music samples and assuming you can control the volume of your audio element you could cross-fade different musical pieces. Using the [`playbackRate()`](/en-US/docs/Web/API/HTMLMediaElement/playbackRate) method you can even adjust the speed of your music without affecting the pitch, to sync it up better with the action.

All this is possible using the standard {{htmlelement("audio")}} element and associated {{domxref("HTMLMediaElement")}}, but it becomes much easier and more flexible with the more advanced [Web Audio API](/en-US/docs/Web/API/Web_Audio_API). Let's look at this next.

### Web Audio API for games

The Web Audio API is supported across all modern desktop and mobile browsers, except for Opera Mini. With that in mind, it's an acceptable approach for many situations to use the Web Audio API (see the [Can I use Web Audio API page](https://caniuse.com/#feat=audio-api) for more on browser compatibility). The Web Audio API is an advanced audio JavaScript API that is ideal for game audio. Developers can generate audio and manipulate audio samples as well as positioning sound in 3D game space.

A feasible cross-browser strategy would be to provide basic audio using the standard `<audio>` element and, where supported, enhance the experience using the Web Audio API.

> [!NOTE]
> Significantly, iOS Safari now supports the Web Audio API, which means it's now possible to write web-based games with native-quality audio for iOS.

As the Web Audio API allows precise timing and control of audio playback, we can use it to play samples at specific moments, which is a crucial immersive aspect of gaming. You want those explosions to be accompanied by a thundering boom, not followed by one, after all.

### Background music with the Web Audio API

Although we can use the `<audio>` element to deliver linear background music that doesn't change in reaction to the game environment, the Web Audio API is ideal for implementing a more dynamic musical experience. You may want music to change depending on whether you are trying to build suspense or encourage the player in some way. Music is an important part of the gaming experience and depending on the type of game you are making you may wish to invest significant effort into getting it right.

One way you can make your music soundtrack more dynamic is by splitting it up into component loops or tracks. This is often the way that musicians compose music anyway, and the Web Audio API is extremely good at keeping these parts in sync. Once you have the various tracks that make up your piece you can bring tracks in and out as appropriate.

You can also apply filters or effects to music. Is your character in a cave? Increase the echo. Maybe you have underwater scenes, during which you could apply a filter that muffles the sound.

Let's look at some Web Audio API techniques for dynamically adjusting music from its base tracks.

### Loading your tracks

With the Web Audio API you can load separate tracks and loops individually using the [Fetch API](/en-US/docs/Web/API/Fetch_API) or {{domxref("XMLHttpRequest")}}, which means you can load them synchronously or in parallel. Loading synchronously might mean parts of your music are ready earlier and you can start playing them while others load.

Either way you may want to synchronize tracks or loops. The Web Audio API contains the notion of an internal clock that starts ticking the moment you create an audio context. You'll need to take account of the time between creating an audio context and when the first audio track starts playing. Recording this offset and querying the playing track's current time gives you enough information to synchronize separate pieces of audio.

To see this in action, let's lay out some separate tracks:

```html
<section id="tracks">
  <ul>
    <li data-loading="true">
      <a href="leadguitar.mp3" class="track">Lead Guitar</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="guitar-play-label">
        <span id="guitar-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="bassguitar.mp3" class="track">Bass Guitar</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="bass-play-label">
        <span id="bass-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="drums.mp3" class="track">Drums</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="drums-play-label">
        <span id="drums-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="horns.mp3" class="track">Horns</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="horns-play-label">
        <span id="horns-play-label">Play</span>
      </button>
    </li>
    <li data-loading="true">
      <a href="clav.mp3" class="track">Clavi</a>
      <p class="loading-text">Loading…</p>
      <button data-playing="false" aria-describedby="clavi-play-label">
        <span id="clavi-play-label">Play</span>
      </button>
    </li>
  </ul>
  <p class="sourced">
    All tracks sourced from <a href="https://jplayer.org/">jplayer.org</a>
  </p>
</section>
```

All of these tracks are the same tempo and are designed to be synchronized with each other, so we need to make sure they are loaded and available to the API _before_ we are able to play them. We can do this with JavaScript's [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await) functionality.

Once they are available to play, we need to make sure they start at the correct point that other tracks might be playing at, so they sync up.

Let's create our audio context:

```js
const audioCtx = new AudioContext();
```

Now let's select all the {{htmlelement("li")}} elements; later we can harness these elements to give us access to the track file path and each individual play button.

```js
const trackEls = document.querySelectorAll("li");
```

We want to make sure each file has loaded and been decoded into a buffer before we use it, so let's create an `async` function to allow us to do this:

```js
async function getFile(filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

We can then use the `await` operator when calling this function, which ensures that we can run subsequent code when it has finished executing.

Let's create another `async` function to set up the sample — we can combine the two async functions in a nice promise pattern to perform further actions when each file is loaded and buffered:

```js
async function loadFile(filePath) {
  const track = await getFile(filePath);
  return track;
}
```

Let's also create a `playTrack()` function, which we can call once a file has been fetched. We need an offset here, so if we have started one file playing, we have a record of how far through to start another file.

`start()` takes two optional parameters. The first is when to commence playback and the second is where, which is our offset.

```js
let offset = 0;

function playTrack(audioBuffer) {
  const trackSource = audioCtx.createBufferSource();
  trackSource.buffer = audioBuffer;
  trackSource.connect(audioCtx.destination);

  if (offset === 0) {
    trackSource.start();
    offset = audioCtx.currentTime;
  } else {
    trackSource.start(0, audioCtx.currentTime - offset);
  }

  return trackSource;
}
```

Finally, let's loop over our `<li>` elements, grab the correct file for each one and then allow playback by hiding the "loading" text and displaying the play button:

```js
trackEls.forEach((el, i) => {
  // Get children
  const anchor = el.querySelector("a");
  const loadText = el.querySelector("p");
  const playButton = el.querySelector("button");

  // Load file
  loadFile(anchor.href).then((track) => {
    // Set loading to false
    el.dataset.loading = "false";

    // Hide loading text
    loadText.style.display = "none";

    // Show button
    playButton.style.display = "inline-block";

    // Allow play on click
    playButton.addEventListener("click", () => {
      // Check if context is in suspended state (autoplay policy)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      playTrack(track);
      playButton.dataset.playing = true;
    });
  });
});
```

> [!NOTE]
> You can [see this demo in action here](https://mdn.github.io/webaudio-examples/multi-track/) and [view the source code here](https://github.com/mdn/webaudio-examples/tree/main/multi-track).

In the context of your game world you may have loops and samples that are played in different circumstances, and it can be useful to be able to synchronize with other tracks for a more seamless experience.

> [!NOTE]
> This example does not wait for the beat to end before introducing the next piece; we could do this if we knew the BPM (Beats Per Minute) of the tracks.

You may find that the introduction of a new track sounds more natural if it comes in on the beat/bar/phrase or whatever units you want to chunk your background music into.

To do this before playing the track you want to sync, you should calculate how long it is until the start of the next beat/bar etc.

Here's a bit of code that given a tempo (the time in seconds of your beat/bar) will calculate how long to wait until you play the next part — you feed the resulting value to the `start()` function with the first parameter, which takes the absolute time of when that playback should commence. Note the second parameter (where to start playing from in the new track) is relative:

```js
if (offset === 0) {
  source.start();
  offset = context.currentTime;
} else {
  const relativeTime = context.currentTime - offset;
  const beats = relativeTime / tempo;
  const remainder = beats - Math.floor(beats);
  const delay = tempo - remainder * tempo;
  source.start(context.currentTime + delay, relativeTime + delay);
}
```

> [!NOTE]
> You can [try our wait calculator code](https://jsfiddle.net/c87z11jj/2/) here, on JSFiddle (I've synched to the bar in this case).

> [!NOTE]
> If the first parameter is 0 or less than the context `currentTime`, playback will commence immediately.

### Positional audio

Positional audio can be an important technique in making audio a key part of an immersive gaming experience. The Web Audio API not only enables us to position a number of audio sources in three-dimensional space but it can also allow us to apply filters that make that audio appear more realistic.

The [`pannerNode`](/en-US/docs/Web/API/PannerNode) harnesses the positional capabilities of the Web Audio API so we can relate further information about the game world to the player. There's a [tutorial here](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics) to help understand the `pannerNode` in better detail.

We can relate:

- The position of objects
- The direction and movement of objects
- The environment (cavernous, underwater, etc.)

This is especially useful in a three-dimensional environment rendered using WebGL, where the Web Audio API makes it possible to tie audio to the objects and viewpoints.

## See also

- [Web Audio API on MDN](/en-US/docs/Web/API/Web_Audio_API)
- [`<audio>` on MDN](/en-US/docs/Web/HTML/Element/audio)
- [Songs of Diridum: Pushing the Web Audio API to Its Limits](https://hacks.mozilla.org/2013/10/songs-of-diridum-pushing-the-web-audio-api-to-its-limits/)
- [Making HTML5 Audio Actually Work on Mobile](https://pupunzi.open-lab.com/2013/03/13/making-html5-audio-actually-work-on-mobile/)
- [Audio Sprites (and fixes for iOS)](https://remysharp.com/2010/12/23/audio-sprites/)
