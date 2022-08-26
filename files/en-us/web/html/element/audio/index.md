---
title: '<audio>: The Embed Audio element'
slug: Web/HTML/Element/audio
tags:
  - Audio
  - Element
  - HTML
  - HTML embedded content
  - HTML:Embedded content
  - HTML:Flow content
  - HTML:Phrasing content
  - Media
  - Multimedia
  - Reference
  - Web
  - sound
browser-compat: html.elements.audio
---
{{HTMLRef}}

The **`<audio>`** [HTML](/en-US/docs/Web/HTML) element is used to embed sound content in documents. It may contain one or more audio sources, represented using the `src` attribute or the {{HTMLElement("source")}} element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a {{domxref("MediaStream")}}.

{{EmbedInteractiveExample("pages/tabbed/audio.html","tabbed-standard")}}

The above example shows simple usage of the `<audio>` element. In a similar manner to the {{htmlelement("img")}} element, we include a path to the media we want to embed inside the `src` attribute; we can include other attributes to specify information such as whether we want it to autoplay and loop, whether we want to show the browser's default audio controls, etc.

The content inside the opening and closing `<audio></audio>` tags is shown as a fallback in browsers that don't support the element.

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("autoplay")}}

  - : A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.

    > **Note:** Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our [autoplay guide](/en-US/docs/Web/Media/Autoplay_guide) for additional information about how to properly use autoplay.

- {{htmlattrdef("controls")}}
  - : If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.
- {{htmlattrdef("crossorigin")}}

  - : This enumerated attribute indicates whether to use CORS to fetch the related audio file. [CORS-enabled resources](/en-US/docs/Web/HTML/CORS_enabled_image) can be reused in the {{HTMLElement("canvas")}} element without being _tainted_. The allowed values are:

    - `anonymous`
      - : Sends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.
    - `use-credentials`
      - : Sends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.

    When not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in {{HTMLElement('canvas')}} elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for additional information.

- {{htmlattrdef("disableremoteplayback")}} {{experimental_inline}}

  - : A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.). See [this proposed specification](https://www.w3.org/TR/remote-playback/#the-disableremoteplayback-attribute) for more information.

    > **Note:** In Safari, you can use [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) as a fallback.

- {{htmlattrdef("loop")}}
  - : A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.
- {{htmlattrdef("muted")}}
  - : A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`.
- {{htmlattrdef("preload")}}

  - : This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:

    - `none`: Indicates that the audio should not be preloaded.
    - `metadata`: Indicates that only audio metadata (e.g. length) is fetched.
    - `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.
    - _empty string_: A synonym of the `auto` value.

    The default value is different for each browser. The spec advises it to be set to `metadata`.

    > **Note:**
    >
    > - The `autoplay` attribute has precedence over `preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.
    > - The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.

- {{htmlattrdef("src")}}
  - : The URL of the audio to embed. This is subject to [HTTP access controls](/en-US/docs/Web/HTTP/CORS). This is optional; you may instead use the {{htmlelement("source")}} element within the audio block to specify the audio to embed.

## Events

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Event name</th>
      <th scope="col">Fired when</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("ScriptProcessorNode/audioprocess_event", "audioprocess")}}</td>
      <td>
        The input buffer of a {{DOMxRef("ScriptProcessorNode")}} is
        ready to be processed.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
      </td>
      <td>
        The browser can play the media, but estimates that not enough data has
        been loaded to play the media up to its end without having to stop for
        further buffering of content.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
      </td>
      <td>
        The browser estimates it can play the media up to its end without
        stopping for content buffering.
      </td>
    </tr>
    <tr>
      <td>{{domxref("OfflineAudioContext/complete_event", "complete")}}</td>
      <td>
        The rendering of an {{DOMxRef("OfflineAudioContext")}} is
        terminated.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
      </td>
      <td>The <code>duration</code> attribute has been updated.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
      </td>
      <td>
        The media has become empty; for example, this event is sent if the media
        has already been loaded (or partially loaded), and the
        {{domxref("HTMLMediaElement.load")}} method is called to
        reload it.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ended_event", 'ended')}}
      </td>
      <td>Playback has stopped because the end of the media was reached.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
      </td>
      <td>The first frame of the media has finished loading.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
      </td>
      <td>The metadata has been loaded.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.pause_event", 'pause')}}
      </td>
      <td>Playback has been paused.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.play_event", 'play')}}
      </td>
      <td>Playback has begun.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.playing_event", 'playing ')}}
      </td>
      <td>
        Playback is ready to start after having been paused or delayed due to
        lack of data.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
      </td>
      <td>The playback rate has changed.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
      </td>
      <td>A <em>seek</em> operation completed.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
      </td>
      <td>A <em>seek</em> operation began.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
      </td>
      <td>
        The user agent is trying to fetch media data, but data is unexpectedly
        not forthcoming.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
      </td>
      <td>Media data loading has been suspended.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
      </td>
      <td>
        The time indicated by the <code>currentTime</code> attribute has been
        updated.
      </td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
      </td>
      <td>The volume has changed.</td>
    </tr>
    <tr>
      <td>
        {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
      </td>
      <td>Playback has stopped because of a temporary lack of data</td>
    </tr>
  </tbody>
</table>

## Usage notes

Browsers don't all support the same [file types](/en-US/docs/Web/Media/Formats/Containers) and [audio codecs](/en-US/docs/Web/Media/Formats/Audio_codecs); you can provide multiple sources inside nested {{htmlelement("source")}} elements, and the browser will then use the first one it understands:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg">
  <source src="myAudio.ogg" type="audio/ogg">
  <p>Download <a href="myAudio.mp3">MP3</a> or
     <a href="myAudio.ogg">OGG</a> audio.</p>
</audio>
```

We offer a substantive and thorough [guide to media file types](/en-US/docs/Web/Media/Formats) and the [audio codecs that can be used within them](/en-US/docs/Web/Media/Formats/Audio_codecs). Also available is [a guide to the codecs supported for video](/en-US/docs/Web/Media/Formats/Video_codecs).

Other usage notes:

- If you don't specify the `controls` attribute, the audio player won't include the browser's default controls. You can, however, create your own custom controls using JavaScript and the {{domxref("HTMLMediaElement")}} API.
- To allow precise control over your audio content, `HTMLMediaElement`s fire many different [events](/en-US/docs/Web/API/HTMLMediaElement#events). This also provides a way to monitor the audio's fetching process so you can watch for errors or detect when enough is available to begin to play or manipulate it.
- You can also use the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) to directly generate and manipulate audio streams from JavaScript code rather than streaming pre-existing audio files.
- `<audio>` elements can't have subtitles or captions associated with them in the same way that `<video>` elements can. See [WebVTT and Audio](https://www.iandevlin.com/blog/2015/12/html5/webvtt-and-audio/) by Ian Devlin for some useful information and workarounds.

A good general source of information on using HTML `<audio>` is the [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) beginner's tutorial.

### Styling with CSS

The `<audio>` element has no intrinsic visual output of its own unless the `controls` attribute is specified, in which case the browser's default controls are shown.

The default controls have a {{cssxref("display")}} value of `inline` by default, and it is often a good idea set the value to `block` to improve control over positioning and layout, unless you want it to sit within a text block or similar.

You can style the default controls with properties that affect the block as a single unit, so for example you can give it a {{cssxref("border")}} and {{cssxref("border-radius")}}, {{cssxref("padding")}}, {{cssxref("margin")}}, etc. You can't however style the individual components inside the audio player (e.g. change the button size or icons, change the font, etc.), and the controls are different across the different browsers.

To get a consistent look and feel across browsers, you'll need to create custom controls; these can be marked up and styled in whatever way you want, and then JavaScript can be used along with the {{domxref("HTMLMediaElement")}} API to wire up their functionality.

[Video player styling basics](/en-US/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics) provides some useful styling techniques — it is written in the context of `<video>`, but much of it is equally applicable to `<audio>`.

### Detecting addition and removal of tracks

You can detect when tracks are added to and removed from an `<audio>` element using the {{domxref("AudioTrackList/addtrack_event", "addtrack")}} and {{domxref("AudioTrackList/removetrack_event", "removetrack")}} events. However, these events aren't sent directly to the `<audio>` element itself. Instead, they're sent to the track list object within the `<audio>` element's {{domxref("HTMLMediaElement")}} that corresponds to the type of track that was added to the element:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : An {{domxref("AudioTrackList")}} containing all of the media element's audio tracks. You can add a listener for `addtrack` to this object to be alerted when new audio tracks are added to the element.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Add an `addtrack` listener to this {{domxref("VideoTrackList")}} object to be informed when video tracks are added to the element.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Add an `addtrack` event listener to this {{domxref("TextTrackList")}} to be notified when new text tracks are added to the element.

> **Note:** Even though it's an `<audio>` element, it still has video and text track lists, and can in fact be used to present video, although the use interface implications can be odd.

For example, to detect when audio tracks are added to or removed from an `<audio>` element, you can use code like this:

```js
const elem = document.querySelector("audio");

elem.audioTrackList.onaddtrack = (event) => {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = (event) => {
  trackEditor.removeTrack(event.track);
};
```

This code watches for audio tracks to be added to and removed from the element, and calls a hypothetical function on a track editor to register and remove the track from the editor's list of available tracks.

You can also use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to listen for the {{domxref("AudioTrackList/addtrack_event", "addtrack")}} and {{domxref("AudioTrackList/removetrack_event", "removetrack")}} events.

## Examples

### Basic usage

The following example shows simple usage of the `<audio>` element to play an OGG file. It will autoplay due to the `autoplay` attribute—if the page has permission to do so—and also includes fallback content.

```html
<!-- Simple audio playback -->
<audio
  src="AudioTest.ogg"
  autoplay>
  <a href="AudioTest.ogg">Download OGG audio</a>.
</audio>
```

For details on when autoplay works, how to get permission to use autoplay, and how and when it's appropriate to use autoplay, see our [autoplay guide](/en-US/docs/Web/Media/Autoplay_guide).

### \<audio> element with \<source> element

This example specifies which audio track to embed using the `src` attribute on a nested `<source>` element rather than directly on the `<audio>` element. It is always useful to include the file's MIME type inside the `type` attribute, as the browser is able to instantly tell if it can play that file, and not waste time on it if not.

```html
<audio controls>
  <source src="foo.wav" type="audio/wav">
  <a href="foo.wav">Download WAV audio</a>.
</audio>
```

### \<audio> with multiple \<source> elements

This example includes multiple `<source>` elements. The browser tries to load the first source element (Opus) if it is able to play it; if not it falls back to the second (Vorbis) and finally back to MP3:

```html
<audio controls>
 <source src="foo.opus" type="audio/ogg; codecs=opus"/>
 <source src="foo.ogg" type="audio/ogg; codecs=vorbis"/>
 <source src="foo.mp3" type="audio/mpeg"/>
</audio>
```

## Accessibility concerns

Audio with spoken dialog should provide both captions and transcripts that accurately describe its content. Captions, which are specified using [WebVTT](/en-US/docs/Web/API/WebVTT_API), allow people who are experiencing hearing loss to understand an audio recording's content as the recording is being played, while transcripts allow people who need additional time to be able to review the recording's content at a pace and format that is comfortable for them.

If automatic captioning services are used, it is important to review the generated content to ensure it accurately represents the source audio.

The `<audio>` element doesn't directly support WebVTT. You will have to find a library or framework that provides the capability for you, or write the code to display captions yourself. One option is to play your audio using a {{HTMLElement("video")}} element, which does support WebVTT.

In addition to spoken dialog, subtitles and transcripts should also identify music and sound effects that communicate important information. This includes emotion and tone. For example, in the WebVTT below, note the use of square brackets to provide tone and emotional insight to the viewer; this can help establish the mood otherwise provided using music, nonverbal sounds and crucial sound effects, and so forth.

```
1
00:00:00 --> 00:00:45
[Energetic techno music]

2
00:00:46 --> 00:00:51
Welcome to the Time Keeper's podcast! In this episode we're discussing which Swisswatch is a wrist switchwatch?

16
00:00:52 --> 00:01:02
[Laughing] Sorry! I mean, which wristwatch is a Swiss wristwatch?
```

Also it's a good practice to provide some content (such as the direct download link) as a fallback for viewers who use a browser in which the `<audio>` element is not supported:

```html
<audio controls>
  <source src="myAudio.mp3" type="audio/mpeg">
  <source src="myAudio.ogg" type="audio/ogg">
  <p>
    Download <a href="myAudio.mp3">MP3</a> or <a href="myAudio.ogg">OGG</a> audio.
  </p>
</audio>
```

- [Web Video Text Tracks Format (WebVTT)](/en-US/docs/Web/API/WebVTT_API)
- [WebAIM: Captions, Transcripts, and Audio Descriptions](https://webaim.org/techniques/captions/)
- [MDN Understanding WCAG, Guideline 1.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.2_—_providing_text_alternatives_for_time-based_media)
- [Understanding Success Criterion 1.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-av-only-alt.html)
- [Understanding Success Criterion 1.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, phrasing content, embedded content. If it has a
        {{htmlattrxref("controls", "audio")}} attribute: interactive
        content and palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        If the element has a {{htmlattrxref("src", "audio")}}
        attribute: zero or more {{HTMLElement("track")}} elements
        followed by transparent content that contains no
        {{HTMLElement("audio")}} or {{HTMLElement("video")}}
        media elements.<br />Else: zero or more {{HTMLElement("source")}}
        elements followed by zero or more {{HTMLElement("track")}}
        elements followed by transparent content that contains no
        {{HTMLElement("audio")}} or {{HTMLElement("video")}}
        media elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>Any element that accepts embedded content.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>{{ARIARole("application")}}</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLAudioElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web media technologies](/en-US/docs/Web/Media)

  - [Media container formats (file types)](/en-US/docs/Web/Media/Formats/Containers)
  - [Guide to audio codecs used on the web](/en-US/docs/Web/Media/Formats/Audio_codecs)

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- {{domxref("HTMLAudioElement")}}
- {{htmlelement("source")}}
- {{htmlelement("video")}}
- [Learning area: Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Cross-browser audio basics](/en-US/docs/Web/Guide/Audio_and_video_delivery/Cross-browser_audio_basics)
