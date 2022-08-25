---
title: Autoplay guide for media and Web Audio APIs
slug: Web/Media/Autoplay_guide
tags:
  - API
  - Audio
  - Draft
  - Guide
  - HTML
  - JavaScript
  - Media
  - Muting
  - Playback
  - Video
  - Web
  - Web Audio API
  - autoplay
  - mute
  - muted
  - play
---
Automatically starting the playback of audio (or videos with audio tracks) immediately upon page load can be an unwelcome surprise to users. While autoplay of media serves a useful purpose, it should be used carefully and only when needed. In order to give users control over this, browsers often provide various forms of autoplay blocking. In this guide, we'll cover autoplay functionality in the various media and Web Audio APIs, including a brief overview of how to use autoplay and how to work with browsers to handle autoplay blocking gracefully.

Autoplay blocking is _not_ applied to {{HTMLElement("video")}} elements when the source media does not have an audio track, or if the audio track is muted. Media with an active audio track are considered to be **audible**, and autoplay blocking applies to them. **Inaudible** media are not affected by autoplay blocking.

## Autoplay and autoplay blocking

The term **autoplay** refers to any feature that causes audio to begin to play without the user specifically requesting that playback begin. This includes both the use of HTML attributes to autoplay media as well as the user of JavaScript code to start playback outside the context of handling user input.

That means that both of the following are considered autoplay behavior, and are therefore subject to the browser's autoplay blocking policy:

```html
<audio src="/music.mp3" autoplay>
```

and

```js
audioElement.play();
```

The following web features and APIs may be affected by autoplay blocking:

- The {{Glossary("HTML")}} {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements
- The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)

From the user's perspective, a web page or app that spontaneously starts making noise without warning can be jarring, inconvenient, or off-putting. Because of that, browsers generally only allow autoplay to occur successfully under specific circumstances.

### Autoplay availability

As a general rule, you can assume that media will be allowed to autoplay only if _at least one_ of the following is true:

- The audio is muted or its volume is set to 0
- The user has interacted with the site (by clicking, tapping, pressing keys, etc.)
- If the site has been allowlisted; this may happen either automatically if the browser determines that the user engages with media frequently, or manually through preferences or other user interface features
- If the autoplay feature policy is used to grant autoplay support to an {{HTMLElement("iframe")}} and its document.

Otherwise, the playback will likely be blocked. The exact situations that result in blocking, and the specifics of how sites become allowlisted vary from browser to browser, but the above are good guidelines to go by.

For details, see the auto-play policies for [Google Chrome](https://developer.chrome.com/blog/autoplay/) and [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/).

> **Note:** Put another way, playback of any media that includes audio is generally blocked if the playback is programmatically initiated in a tab which has not yet had any user interaction. Browsers may additionally choose to block under other circumstances.

## Autoplay of media elements

Now that we've covered what autoplay is and what can prevent autoplay from being allowed, we'll look at how your web site or app can automatically play media upon page load, how to detect when autoplay fails to occur, and tips for coping when autoplay is denied by the browser.

### The autoplay attribute

The simplest way to automatically play content is to add the {{htmlattrxref("autoplay", "audio")}} attribute to your {{HTMLElement("audio")}} or {{HTMLElement("video")}} element. This sets the {{domxref("HTMLMediaElement.autoplay", "autoplay")}} property on the element to `true`, and when `autoplay` is `true`, the media will automatically begin to play as soon as possible after the following have occurred:

- The page is allowed to use autoplay functionality
- The element has been created during page load
- Enough media has been received to begin playback and continue to play through to the end of the media without interruption, assuming there are no dramatic changes in network performance or bandwidth.

#### Example: The autoplay attribute

An {{HTMLElement("audio")}} element using the `autoplay` attribute might look like this:

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp3">
</audio>
```

#### Example 2: Detecting autoplay failure

If you rely on autoplay for anything important, or if autoplay failure will impact your app in any way, you will probably want to be able to tell when autoplay didn't begin. Unfortunately, in the case of the {{htmlattrxref("autoplay", "audio")}} attribute, recognizing whether or not autoplay successfully began is tricky. There's not an event triggered when autoplay fails. Nor is there an exception thrown or a callback you can set up or even a flag on the media element that tells you if autoplay worked. All you can really do is examine a few values and make an educated guess as to whether or not autoplay worked.

A better approach, if you're able to adjust the direction you look at things from, is to instead rely on knowing that playback of the media has successfully started, instead of when it fails to start. You can do this easily, by listening for the {{domxref("HTMLMediaElement/play_event", "play")}} event to be fired on the media element.

The `play` event is sent both when the media is resumed after being paused _and_ when autoplay occurs. That means that the first time the `play` event is fired, you know your media is being started for the first time after the page is opened.

Consider this HTML for a media element:

```html
<video src="myvideo.mp4" autoplay onplay="handleFirstPlay(event)">
```

Here we have a {{HTMLElement("video")}} element whose {{htmlattrxref("autoplay", "video")}} attribute is set, with an {{domxref("HTMLMediaElement.play_event", "onplay")}} event handler set up; the event is handled by a function called `handleFirstPlay()`, which receives as input the `play` event.

`handleFirstPlay()` looks like this:

```js
let hasPlayed = false;
function handleFirstPlay(event) {
  if (!hasPlayed) {
    hasPlayed = true;

    const vid = event.target;

    vid.onplay = null;

    // Start whatever you need to do after first playback has started
  }
}
```

After getting a reference to the video element from the {{domxref("Event")}} object's {{domxref("Event.target", "target")}}, the element's `onplay` handler is set to `null`. This will prevent any future `play` events from being delivered to the handler. That could happen if the video is paused and resumed by the user or automatically by the browser when the document is in a background tab.

At this point, your site or app can begin whatever it needs to do that relies upon the video having been started up.

> **Note:** This approach doesn't differentiate between autoplay and the user starting playback manually.

### The play() method

The term "autoplay" also refers to scenarios in which a script tries to trigger the playback of media that includes audio, outside the context of handling a user input event. This is done by calling the media element's {{domxref("HTMLMediaElement.play", "play()")}} method.

> **Note:** It is strongly recommended that you use the `autoplay` attribute whenever possible, because support for autoplay preferences are more widespread for the `autoplay` attribute than for other means of playing media automatically. It also lets the browser take responsibility for starting playback, letting it optimize the timing of that taking place.

#### Example: Playing video

This simple example plays the first {{HTMLElement("video")}} element found in the document. `play()` won't let the playback begin unless the document has permission to automatically play media.

```js
document.querySelector("video").play();
```

#### Example: Handling play() failures

It's much easier to detect a failure to autoplay media when you use the {{domxref("HTMLMediaElement.play", "play()")}} method to start it. `play()` returns a {{jsxref("Promise")}} which is resolved once the media successfully begins to play, and is rejected when playback fails to begin (such as if autoplay is denied). When autoplay fails, you likely will want to offer a way for the user to manually tell the browser to ask the user to grant permission to play media.

You might use code like this to accomplish the job:

```js
let startPlayPromise = videoElem.play();

if (startPlayPromise !== undefined) {
  startPlayPromise.then(() => {
    // Start whatever you need to do only after playback
    // has begun.
  }).catch((error) => {
    if (error.name === "NotAllowedError") {
      showPlayButton(videoElem);
    } else {
      // Handle a load or playback error
    }
  });
}
```

The first thing we do with the result of `play()` is make sure it's not `undefined`. We check for this because in earlier versions of the HTML specification, `play()` didn't return a value. Returning a promise to allow you to determine success or failure of the operation was added more recently. Checking for `undefined` prevents this code from failing with an error on older versions of web browsers.

If the promise returned by `play()` is resolved without error, the `then()` clause is run and can begin whatever needs to be done when autoplay has begun.

We then add a {{jsxref("Promise.catch", "catch()")}} handler to the promise. This looks at the error's {{domxref("DOMException.name", "name")}} to see if it's `NotAllowedError`. This indicates that playback failed due to a permission issue, such as autoplay being denied. If that's the case, we should present a user interface to let the user manually start playback; that's handled here by a function `showPlayButton()`.

Any other errors are handled as appropriate.

If you want to start playing the video after the first interaction with the page, [`setInterval()`](/en-US/docs/Web/API/setInterval) might be used to achieve this:

```js
let playAttempt = setInterval(() => {
  videoElem.play()
    .then(() => {
      clearInterval(playAttempt);
    })
    .catch((error) => {
      console.log('Unable to play the video, User has not interacted yet.');
    });
}, 3000);
```

## Autoplay using the Web Audio API

In the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), a web site or app can start playing audio using the `start()` method on a source node linked to the {{domxref("AudioContext")}}. Doing so outside the context of handling a user input event is subject to autoplay rules.

## The autoplay feature policy

In addition to the browser-side management and control over autoplay functionality described above, a web server can also express its willingness to allow autoplay to function. The {{Glossary("HTTP")}} {{HTTPHeader("Feature-Policy")}} header's [`autoplay`](/en-US/docs/Web/HTTP/Headers/Feature-Policy/autoplay) directive is used to control which domains, if any, can be used to autoplay media. By default, the `autoplay` feature policy is set to `'self'` (_including the single quote characters_), indicating that autoplay is permitted as they're hosted on the same domain as the document.

You can also specify `'none'` to disable autoplay entirely, `'*'` to allow autoplay from all domains, or one or more specific origins from which media can be automatically played. These origins are separated by space characters.

> **Note:** The specified feature policy applies to the document and every {{HTMLElement("iframe")}} nested within it, unless those frames include an {{htmlattrxref("allow", "iframe")}}, which sets a new feature policy for that frame and all frames nested within it.

When using the {{htmlattrxref("allow", "iframe")}} attribute on an `<iframe>` to specify a feature policy for that frame and its nested frames, you can also specify the value `'src'` to allow autoplay of media only from the same domain as that specified by the frame's {{htmlattrxref("src", "iframe")}} attribute.

### Example: Allowing autoplay only from the document's domain

To use the {{HTTPHeader("Feature-Policy")}} header to only allow media to autoplay from the document's {{Glossary("origin")}}:

```http
Feature-Policy: autoplay 'self'
```

To do the same for an {{HTMLElement("iframe")}}:

```html
<iframe src="mediaplayer.html"
        allow="autoplay 'src'">
</iframe>
```

### Example: Allowing autoplay and fullscreen mode

Adding [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) permission to the previous example results in a `Feature-Policy` header like the following if fullscreen access is allowed regardless of the domain; a domain restriction can be added as well as needed.

```http
Feature-Policy: autoplay 'self'; fullscreen
```

The same permissions, grated using the `<iframe>` element's `allow` property, look like this:

```html
<iframe src="mediaplayer.html"
        allow="autoplay 'src'; fullscreen">
</iframe>
```

### Example: Allowing autoplay from specific sources

The `Feature-Policy` header to allow media to be played from both the document's (or `<iframe>`'s) own domain and `https://example.media` looks like this:

```http
Feature-Policy: autoplay 'self' https://example.media
```

An {{HTMLElement("iframe")}} can be written to specify that this autoplay policy should be applied to itself and any child frames would be written thusly:

```html
<iframe width="300" height="200"
        src="mediaplayer.html"
        allow="autoplay 'src' https://example.media">
</iframe>
```

### Example: Disabling autoplay

Setting the `autoplay` feature policy to `'none'` disables autoplay entirely for the document or `<iframe>` and all nested frames. The HTTP header is:

```http
Feature-Policy: autoplay 'none'
```

Using the `<iframe>`'s `allow` attribute:

```html
<iframe src="mediaplayer.html"
        allow="autoplay 'none'">
</iframe>
```

## Best practices

Tips and recommended best practices to help you make the most of working with autoplay are offered here.

### Handling autoplay failure with media controls

A common use case for autoplay is to automatically begin to play a video clip that goes along with an article, an advertisement, or a preview of the page's main functionality. To autoplay videos like these, you have two options: don't have an audio track, or have an audio track but configure the {{HTMLElement("video")}} element to mute the audio by default, like this:

```html
<video src="/videos/awesomevid.webm" controls autoplay playsinline muted>
```

This video element is configured to include the user controls (typically play/pause, scrubbing through the video's timeline, volume control, and muting); also, since the {{htmlattrxref("muted", "video")}} attribute is included, and the {{htmlattrxref("playsinline", "video")}} attribute that is required for autoplay in Safari, the video will autoplay but with the audio muted. The user has the option, however, of re-enabling the audio by clicking on the unmute button in the controls.

## Browser configuration options

Browsers may have preferences that control the way autoplay works, or how autoplay blocking is handled. Here, any such preferences that may be of special significance or importance to you as a web developer are listed. These include any that may aid in testing or debugging as well as any that could be set in a way that you need to be prepared to handle.

### Firefox

- `media.allowed-to-play.enabled`
  - : A Boolean preference which specifies whether or not the {{domxref("HTMLMediaElement.allowedToPlay")}} property is exposed to the web. This is currently `false` by default (except in nightly builds, where it's `true` by default). If this is `false`, the `allowedToPlay` property is missing from the `HTMLMediaElement` interface, and is thus not present on either {{HTMLElement("audio")}} or {{HTMLElement("video")}} elements.
- `media.autoplay.allow-extension-background-pages`
  - : This Boolean preference, if `true`, allows browser extensions' background scripts to autoplay audio media. Setting this value to `false` disables this capability. The default value is `true`.
- `media.autoplay.allow-muted`
  - : A Boolean preference which if `true` (the default) allows audio media which is currently muted to be automatically played. If this has been changed to `false`, media with an audio track will not be permitted to play even if muted.
- `media.autoplay.block-webaudio`
  - : A Boolean preference which indicates whether or not to apply autoplay blocking to the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API). The default is `false`, except on Nightly where it is `true`.
- `media.autoplay.default`
  - : An integer preference which specifies whether per-domain configuration for autoplay support by default is allowed (`0`), blocked (`1`), or prompt-on-use (`2`). The default value is `0`.
- `media.autoplay.enabled.user-gestures-needed` (Nightly builds only)
  - : A Boolean preference which controls whether or not detection of user gestures is allowed to override the setting of `media.autoplay.default`. If `media.autoplay.default` is _not_ set to `0` (autoplay allowed by default), this preference being `true` allows autoplay of media with audio tracks anyway if the page has been activated by user gestures, and media that isn't audible is not restricted at all.
- `media.block-autoplay-until-in-foreground`
  - : A Boolean preference which indicates whether or not media playback is blocked when started on a background tab. The default value, `true`, means that even when otherwise available, autoplay won't take place until after a tab is brought to the foreground. This prevents the distracting situation in which a tab begins playing sound and the user can't find the tab among all their tabs and windows.

## See also

- [Web media technologies](/en-US/docs/Web/Media)
- [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Learning guide)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-browser audio basics](/en-US/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics)
