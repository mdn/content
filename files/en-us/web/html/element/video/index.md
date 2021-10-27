---
title: '<video>: The Video Embed element'
slug: Web/HTML/Element/video
tags:
  - Element
  - HTML
  - HTML Video
  - HTML Video Player
  - HTML embedded content
  - HTML5
  - Media
  - Movie Playback
  - Movies
  - Multimedia
  - Playing Movies
  - Playing Video
  - Reference
  - Showing Video
  - Video
  - Web
browser-compat: html.elements.video
---

{{HTMLRef}}

The **`<video>`** [HTML](/en-US/docs/Web/HTML) element embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the {{HTMLElement("audio")}} element may provide a more appropriate user experience.

{{EmbedInteractiveExample("pages/tabbed/video.html", "tabbed-standard")}}

The above example shows simple usage of the `<video>` element. In a similar manner to the {{htmlelement("img")}} element, we include a path to the media we want to display inside the `src` attribute; we can include other attributes to specify information such as video width and height, whether we want it to autoplay and loop, whether we want to show the browser's default video controls, etc.

The content inside the opening and closing `<video></video>` tags is shown as a fallback in browsers that don't support the element.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("autoplay")}}

  - : A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.

    > **Note:** Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our [autoplay guide](/en-US/docs/Web/Media/Autoplay_guide) for additional information about how to properly use autoplay.

    To disable video autoplay, `autoplay="false"` will not work; the video will autoplay if the attribute is there in the `<video>` tag at all. To remove autoplay, the attribute needs to be removed altogether.

    In some browsers (e.g. Chrome 70.0) autoplay doesn't work if no `muted` attribute is present.

- {{htmlattrdef("autopictureinpicture")}} {{experimental_inline}}
  - : A Boolean attribute which if `true` indicates that the element should automatically toggle picture-in-picture mode when the user switches back and forth between this document and another document or application.
- {{htmlattrdef("controls")}}
  - : If this attribute is present, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.
- {{htmlattrdef("controlslist")}} {{experimental_inline}}

  - : The [`controlslist`](https://wicg.github.io/controls-list/html-output/multipage/embedded-content.html#attr-media-controlslist) attribute, when specified, helps the browser select what controls to show on the media element whenever the browser shows its own set of controls (e.g. when the `controls` attribute is specified).

    The allowed values are `nodownload`, `nofullscreen` and `noremoteplayback`.

    Use the [`disablepictureinpicture`](#attr-disablepictureinpicture) attribute if you want to disable the Picture-In-Picture mode (and the control).

- {{htmlattrdef("crossorigin")}}

  - : This enumerated attribute indicates whether to use CORS to fetch the related video. [CORS-enabled resources](/en-US/docs/Web/HTML/CORS_enabled_image) can be reused in the {{HTMLElement("canvas")}} element without being _tainted_. The allowed values are:

    - `anonymous`
      - : Sends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.
    - `use-credentials`
      - : Sends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.

    When not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in {{HTMLElement('canvas')}} elements. If invalid, it is handled as if the enumerated keyword `anonymous` was used. See [CORS settings attributes](/en-US/docs/Web/HTML/Attributes/crossorigin) for additional information.

- {{htmlattrdef("disablepictureinpicture")}} {{experimental_inline}}
  - : Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases.
- {{htmlattrdef("disableremoteplayback")}} {{experimental_inline}}

  - : A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc).

    In Safari, you can use [`x-webkit-airplay="deny"`](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/AirPlayGuide/OptingInorOutofAirPlay/OptingInorOutofAirPlay.html) as a fallback.

- {{htmlattrdef("height")}}
  - : The height of the video's display area, in [CSS pixels](https://drafts.csswg.org/css-values/#px) (absolute values only; [no percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes).)
- {{htmlattrdef("loop")}}
  - : A Boolean attribute; if specified, the browser will automatically seek back to the start upon reaching the end of the video.
- {{htmlattrdef("muted")}}
  - : A Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is `false`, meaning that the audio will be played when the video is played.
- {{htmlattrdef("playsinline")}}
  - : A Boolean attribute indicating that the video is to be played "inline", that is within the element's playback area. Note that the absence of this attribute _does not_ imply that the video will always be played in fullscreen.
- {{htmlattrdef("poster")}}
  - : A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.
- {{htmlattrdef("preload")}}

  - : This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience with regards to what content is loaded before the video is played. It may have one of the following values:

    - `none`: Indicates that the video should not be preloaded.
    - `metadata`: Indicates that only video metadata (e.g. length) is fetched.
    - `auto`: Indicates that the whole video file can be downloaded, even if the user is not expected to use it.
    - _empty string_: Synonym of the `auto` value.

    The default value is different for each browser. The spec advises it to be set to `metadata`.

    > **Note:**
    >
    > - The `autoplay` attribute has precedence over `preload`. If `autoplay` is specified, the browser would obviously need to start downloading the video for playback.
    > - The specification does not force the browser to follow the value of this attribute; it is a mere hint.

- {{htmlattrdef("src")}}
  - : The URL of the video to embed. This is optional; you may instead use the {{HTMLElement("source")}} element within the video block to specify the video to embed.
- {{htmlattrdef("width")}}
  - : The width of the video's display area, in [CSS pixels](https://drafts.csswg.org/css-values/#px) (absolute values only; [no percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes)).

## Events

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Event Name</th>
      <th scope="col">Fired When</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{domxref("ScriptProcessorNode.audioprocess_event","audioprocess")}}{{Deprecated_Inline}}
      </td>
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
      <td>
        {{domxref("OfflineAudioContext.complete_event", "complete")}}
      </td>
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
        <a href="/en-US/docs/Web/API/HTMLMediaElement/load" rel="internal"
          ><code>load()</code></a
        >
        method is called to reload it.
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
        {{domxref("HTMLMediaElement.progress_event", 'progress')}}
      </td>
      <td>Fired periodically as the browser loads a resource.</td>
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

Browsers don't all support the same video formats; you can provide multiple sources inside nested {{htmlelement("source")}} elements, and the browser will then use the first one it understands.

```html
<video controls>
  <source src="myVideo.webm" type="video/webm">
  <source src="myVideo.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="myVideo.mp4">link to the video</a> instead.</p>
</video>
```

We offer a substantive and thorough [guide to media file types](/en-US/docs/Web/Media/Formats) and the [guide to the codecs supported for video](/en-US/docs/Web/Media/Formats/Video_codecs). Also available is a guide to [audio codecs that can be used with them](/en-US/docs/Web/Media/Formats/Audio_codecs).

Other usage notes:

- If you don't specify the `controls` attribute, the video won't include the browser's default controls; you can create your own custom controls using JavaScript and the {{domxref("HTMLMediaElement")}} API. See [Creating a cross-browser video player](/en-US/docs/Web/Guide/Audio_and_video_delivery/cross_browser_video_player) for more details.
- To allow precise control over your video (and audio) content, `HTMLMediaElement`s fire many different [events](/en-US/docs/Web/API/HTMLMediaElement#events). In addition to providing controllability, these events let you monitor the progress of both download and playback of the media, as well as the playback state and position.
- You can use the {{cssxref("object-position")}} property to adjust the positioning of the video within the element's frame, and the {{cssxref("object-fit")}} property to control how the video's size is adjusted to fit within the frame.
- To show subtitles/captions along with your video, you can use some JavaScript along with the {{htmlelement("track")}} element and the [WebVTT](/en-US/docs/Web/API/WebVTT_API) format. See [Adding captions and subtitles to HTML5 video](/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) for more information.
- You can play audio files using a `<video>` element. This can be useful if, for example, you need to perform audio with a [WebVTT](/en-US/docs/Web/API/WebVTT_API) transcript, since the {{HTMLElement("audio")}} element doesn't allow captions using WebVTT.
- To test the fallback content on browsers that support the element, you can replace `<video>` with a non-existing element like `<notavideo>`.

A good general source of information on using HTML `<video>` is the [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) beginner's tutorial.

### Styling with CSS

The `<video>` element is a replaced element — its {{cssxref("display")}} value is `inline` by default, but its default width and height in the viewport is defined by the video being embedded.

There are no special considerations for styling `<video>`; a common strategy is to give it a `display` value of `block` to make it easier to position, size, etc., and then provide styling and layout information as required. [Video player styling basics](/en-US/docs/Web/Guide/Audio_and_video_delivery/Video_player_styling_basics) provides some useful styling techniques.

### Detecting track addition and removal

You can detect when tracks are added to and removed from a `<video>` element using the {{event("addtrack")}} and {{event("removetrack")}} events. However, these events aren't sent directly to the `<video>` element itself. Instead, they're sent to the track list object within the `<video>` element's {{domxref("HTMLMediaElement")}} that corresponds to the type of track that was added to the element:

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : An {{domxref("AudioTrackList")}} containing all of the media element's audio tracks. You can add a listener for `addtrack` to this object to be alerted when new audio tracks are added to the element.
- {{domxref("HTMLMediaElement.videoTracks")}}
  - : Add an `addtrack` listener to this {{domxref("VideoTrackList")}} object to be informed when video tracks are added to the element.
- {{domxref("HTMLMediaElement.textTracks")}}
  - : Add an `addtrack` event listener to this {{domxref("TextTrackList")}} to be notified when new text tracks are added to the element.

For example, to detect when audio tracks are added to or removed from a `<video>` element, you can use code like this:

```js
var elem = document.querySelector("video");

elem.audioTrackList.onaddtrack = function(event) {
  trackEditor.addTrack(event.track);
};

elem.audioTrackList.onremovetrack = function(event) {
  trackEditor.removeTrack(event.track);
};
```

This code watches for audio tracks to be added to and removed from the element, and calls a hypothetical function on a track editor to register and remove the track from the editor's list of available tracks.

You can also use {{domxref("EventTarget.addEventListener", "addEventListener()")}} to listen for the {{event("addtrack")}} and {{event("removetrack")}} events.

## Examples

### Simple video example

This example plays a video when activated, providing the user with the browser's default video controls to control playback.

```html
<!-- Simple video example -->
<!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org -->
<!-- Poster from peach.blender.org -->
<video controls
    src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    width="620">

Sorry, your browser doesn't support embedded videos,
but don't worry, you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
and watch it with your favorite video player!

</video>
```

{{EmbedLiveSample('Simple_video_example', '640', '370', '', 'Web/HTML/Element/video')}}

Until the video starts playing, the image provided in the `poster` attribute is displayed in its place. If the browser doesn't support video playback, the fallback text is displayed.

### Multiple sources example

This example builds on the last one, offering three different sources for the media; this allows the video to be watched regardless of which video codecs are supported by the browser.

```html
<!-- Using multiple sources as fallbacks for a video tag -->
<!-- 'Elephants Dream' by Orange Open Movie Project Studio, licensed under CC-3.0, hosted by archive.org -->
<!-- Poster hosted by Wikimedia -->
<video width="620" controls
  poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" >
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
    type="video/ogg">
  <source
    src="https://archive.org/download/ElephantsDream/ed_hd.avi"
    type="video/avi">
  <source
    src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
    type="video/mp4">

  Your browser doesn't support HTML5 video tag.
</video>
```

{{EmbedLiveSample('Multiple_sources_example', '640', '370')}}

First [WebM](/en-US/docs/Web/Media/Formats/Containers#webm) is tried. If that can't be played, then [MP4](/en-US/docs/Web/Media/Formats/Containers#mp4) is tried. Finally, [Ogg](/en-US/docs/Web/Media/Formats/Containers#ogg) is tried. A fallback message is displayed if the video element isn't supported, but not if all sources fail.

Some media file types let you provide more specific information using the [`codecs`](/en-US/docs/Web/Media/Formats/codecs_parameter) parameter as part of the file's type string. A relatively simple example is `video/webm; codecs="vp8, vorbis"`, which says that the file is a [WebM](/en-US/docs/Web/Media/Formats/Containers#webm) video using [VP8](/en-US/docs/Web/Media/Formats/Video_codecs#vp8) for its video and [Vorbis](/en-US/docs/Web/Media/Formats/Audio_codecs#vorbis) for audio.

### Server support for video

If the MIME type for the video is not set correctly on the server, the video may not show or show a gray box containing an X (if JavaScript is enabled).

If you use Apache Web Server to serve Ogg Theora videos, you can fix this problem by adding the video file type extensions to "video/ogg" MIME type. The most common video file type extensions are ".ogm", ".ogv", or ".ogg". To do this, edit the "mime.types" file in "/etc/apache" or use the `"AddType"` configuration directive in `httpd.conf`.

    AddType video/ogg .ogm
    AddType video/ogg .ogv
    AddType video/ogg .ogg

If you serve your videos as WebM, you can fix this problem for the Apache Web Server by adding the extension used by your video files (".webm" is the most common one) to the MIME type "video/webm" via the "mime.types" file in "/etc/apache" or via the "AddType" configuration directive in `httpd.conf`.

    AddType video/webm .webm

Your web host may provide an easy interface to MIME type configuration changes for new technologies until a global update naturally occurs.

## Accessibility concerns

Videos should provide both captions and transcripts that accurately describe its content (see [Adding captions and subtitles to HTML5 video](/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) for more information on how to implement these). Captions allow people who are experiencing hearing loss to understand a video's audio content as the video is being played, while transcripts allow people who need additional time to be able to review audio content at a pace and format that is comfortable for them.

It's worth noting that while you can caption audio-only media, you can only do so when playing audio in a {{HTMLElement("video")}} element, since the video region of the element is used to present the captions. This is one of the special scenarios in which it's useful to play audio in a video element.

If automatic captioning services are used, it is important to review the generated content to ensure it accurately represents the source video.

In addition to spoken dialog, subtitles and transcripts should also identify music and sound effects that communicate important information. This includes emotion and tone:

    14
    00:03:14 --> 00:03:18
    [Dramatic rock music]

    15
    00:03:19 --> 00:03:21
    [whispering] What's that off in the distance?

    16
    00:03:22 --> 00:03:24
    It's… it's a…

    16 00:03:25 --> 00:03:32
    [Loud thumping]
    [Dishes clattering]

Captions should not obstruct the main subject of the video. They can be positioned using [the `align` VTT cue setting](/en-US/docs/Web/API/WebVTT_API#cue_settings).

- [MDN Subtitles and closed caption — Plugins](/en-US/docs/Plugins/Flash_to_HTML5/Video/Subtitles_captions)
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
        {{htmlattrxref("controls", "video")}} attribute: interactive
        content and palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <p>
          If the element has a {{htmlattrxref("src", "video")}}
          attribute: zero or more {{HTMLElement("track")}} elements,
          followed by transparent content that contains no media elements–that
          is no {{HTMLElement("audio")}} or
          {{HTMLElement("video")}}
        </p>
        <p>
          Else: zero or more {{HTMLElement("source")}} elements, followed
          by zero or more {{HTMLElement("track")}} elements, followed by
          transparent content that contains no media elements–that is no
          {{HTMLElement("audio")}} or {{HTMLElement("video")}}.
        </p>
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
      <td>{{domxref("HTMLVideoElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Guide to media types and formats on the web](/en-US/docs/Web/Media/Formats)

  - [Media container formats (file types)](/en-US/docs/Web/Media/Formats/Containers)
  - [Web video codec guide](/en-US/docs/Web/Media/Formats/Video_codecs)
  - [Web audio codec guide](/en-US/docs/Web/Media/Formats/Audio_codecs)

- Positioning and sizing the picture within its frame: {{cssxref("object-position")}} and {{cssxref("object-fit")}}
- {{htmlelement("audio")}}
- [Using HTML5 audio and video](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Manipulating video using canvas](/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Configuring servers for Ogg media](/en-US/docs/Web/HTTP/Configuring_servers_for_Ogg_media)
