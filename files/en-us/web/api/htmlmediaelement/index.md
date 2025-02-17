---
title: HTMLMediaElement
slug: Web/API/HTMLMediaElement
page-type: web-api-interface
browser-compat: api.HTMLMediaElement
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement`** interface adds to {{domxref("HTMLElement")}} the properties and methods needed to support basic media-related capabilities that are common to audio and video.

The {{domxref("HTMLVideoElement")}} and {{domxref("HTMLAudioElement")}} elements both inherit this interface.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its ancestors {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

- {{domxref("HTMLMediaElement.audioTracks")}}
  - : An {{domxref("AudioTrackList")}} that lists the {{domxref("AudioTrack")}} objects contained in the element.
- {{domxref("HTMLMediaElement.autoplay")}}

  - : A boolean value that reflects the [`autoplay`](/en-US/docs/Web/HTML/Element/video#autoplay) HTML attribute, indicating whether playback should automatically begin as soon as enough media is available to do so without interruption.

    > [!NOTE]
    > Automatically playing audio when the user doesn't expect or desire it is a poor user experience and should be avoided in most cases, though there are exceptions. See the [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Guides/Autoplay) for more information. Keep in mind that browsers may ignore autoplay requests, so you should ensure that your code isn't dependent on autoplay working.

- {{domxref("HTMLMediaElement.buffered")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("TimeRanges")}} object that indicates the ranges of the media source that the browser has buffered (if any) at the moment the `buffered` property is accessed.
- {{domxref("HTMLMediaElement.controls")}}
  - : A boolean that reflects the [`controls`](/en-US/docs/Web/HTML/Element/video#controls) HTML attribute, indicating whether user interface items for controlling the resource should be displayed.
- {{domxref("HTMLMediaElement.controlsList")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("DOMTokenList")}} that helps the user agent select what controls to show on the media element whenever the user agent shows its own set of controls. The `DOMTokenList` takes one or more of three possible values: `nodownload`, `nofullscreen`, and `noremoteplayback`.
- {{domxref("HTMLMediaElement.crossOrigin")}}
  - : A string indicating the [CORS setting](/en-US/docs/Web/HTML/Attributes/crossorigin) for this media element.
- {{domxref("HTMLMediaElement.currentSrc")}} {{ReadOnlyInline}}
  - : Returns a string with the absolute URL of the chosen media resource.
- {{domxref("HTMLMediaElement.currentTime")}}
  - : A double-precision floating-point value indicating the current playback time in seconds; if the media has not started to play and has not been seeked, this value is the media's initial playback time. Setting this value seeks the media to the new time. The time is specified relative to the media's timeline.
- {{domxref("HTMLMediaElement.defaultMuted")}}
  - : A boolean that reflects the [`muted`](/en-US/docs/Web/HTML/Element/video#muted) HTML attribute, which indicates whether the media element's audio output should be muted by default.
- {{domxref("HTMLMediaElement.defaultPlaybackRate")}}
  - : A `double` indicating the default playback rate for the media.
- {{domxref("HTMLMediaElement.disableRemotePlayback")}}
  - : A boolean that sets or returns the remote playback state, indicating whether the media element is allowed to have a remote playback UI.
- {{domxref("HTMLMediaElement.duration")}} {{ReadOnlyInline}}
  - : A read-only double-precision floating-point value indicating the total duration of the media in seconds. If no media data is available, the returned value is `NaN`. If the media is of indefinite length (such as streamed live media, a WebRTC call's media, or similar), the value is `+Infinity`.
- {{domxref("HTMLMediaElement.ended")}} {{ReadOnlyInline}}
  - : Returns a boolean that indicates whether the media element has finished playing.
- {{domxref("HTMLMediaElement.error")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MediaError")}} object for the most recent error, or `null` if there has not been an error.
- {{domxref("HTMLMediaElement.loop")}}
  - : A boolean that reflects the [`loop`](/en-US/docs/Web/HTML/Element/video#loop) HTML attribute, which indicates whether the media element should start over when it reaches the end.
- {{domxref("HTMLMediaElement.mediaKeys")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Returns a {{domxref("MediaKeys")}} object, that is a set of keys that the element can use for decryption of media data during playback. If no key is available, it can be `null`.
- {{domxref("HTMLMediaElement.muted")}}
  - : A boolean that determines whether audio is muted. `true` if the audio is muted and `false` otherwise.
- {{domxref("HTMLMediaElement.networkState")}} {{ReadOnlyInline}}
  - : Returns a `unsigned short` (enumeration) indicating the current state of fetching the media over the network.
- {{domxref("HTMLMediaElement.paused")}} {{ReadOnlyInline}}
  - : Returns a boolean that indicates whether the media element is paused.
- {{domxref("HTMLMediaElement.playbackRate")}}
  - : A `double` that indicates the rate at which the media is being played back.
- {{domxref("HTMLMediaElement.played")}} {{ReadOnlyInline}}
  - : Returns a {{domxref('TimeRanges')}} object that contains the ranges of the media source that the browser has played, if any.
- {{domxref("HTMLMediaElement.preload")}}
  - : A string that reflects the [`preload`](/en-US/docs/Web/HTML/Element/video#preload) HTML attribute, indicating what data should be preloaded, if any. Possible values are: `none`, `metadata`, `auto`.
- {{domxref("HTMLMediaElement.preservesPitch")}}
  - : A boolean value that determines if the pitch of the sound will be preserved. If set to `false`, the pitch will adjust to the speed of the audio.
- {{domxref("HTMLMediaElement.readyState")}} {{ReadOnlyInline}}
  - : Returns a `unsigned short` (enumeration) indicating the readiness state of the media.
- {{domxref("HTMLMediaElement.remote")}} {{ReadOnlyInline}}
  - : Return a {{domxref("RemotePlayback")}} object instance associated with the media element.
- {{domxref("HTMLMediaElement.seekable")}} {{ReadOnlyInline}}
  - : Returns a {{domxref('TimeRanges')}} object that contains the time ranges that the user is able to seek to, if any.
- {{domxref("HTMLMediaElement.seeking")}} {{ReadOnlyInline}}
  - : Returns a boolean that indicates whether the media is in the process of seeking to a new position.
- {{domxref("HTMLMediaElement.sinkId")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Returns a string that is the unique ID of the audio device delivering output, or an empty string if the user agent default audio device is being used.
- {{domxref("HTMLMediaElement.src")}}
  - : A string that reflects the [`src`](/en-US/docs/Web/HTML/Element/video#src) HTML attribute, which contains the URL of a media resource to use.
- {{domxref("HTMLMediaElement.srcObject")}}
  - : An object which serves as the source of the media associated with the {{domxref("HTMLMediaElement")}}, or `null` if not assigned.
- {{domxref("HTMLMediaElement.textTracks")}} {{ReadOnlyInline}}
  - : Returns a {{domxref('TextTrackList')}} object containing the list of {{domxref("TextTrack")}} objects contained in the element.
- {{domxref("HTMLMediaElement.videoTracks")}} {{ReadOnlyInline}}
  - : Returns a {{domxref('VideoTrackList')}} object containing the list of {{domxref("VideoTrack")}} objects contained in the element.
- {{domxref("HTMLMediaElement.volume")}}
  - : A `double` indicating the audio volume, from 0.0 (silent) to 1.0 (loudest).

## Obsolete properties

These properties are obsolete and should not be used, even if a browser still supports them.

- {{domxref("HTMLMediaElement.controller")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A {{domxref("MediaController")}} object that represents the media controller assigned to the element, or `null` if none is assigned.
- {{domxref("HTMLMediaElement.mediaGroup")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : A string that reflects the `mediagroup` HTML attribute, which indicates the name of the group of elements it belongs to. A group of media elements shares a common {{domxref('MediaController')}}.
- {{domxref("HTMLMediaElement.mozAudioCaptured")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Returns a boolean. Related to audio stream capture.
- {{domxref("HTMLMediaElement.mozFragmentEnd")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : A `double` that provides access to the fragment end time if the media element has a fragment URI for `currentSrc`, otherwise it is equal to the media duration.

## Instance methods

_This interface also inherits methods from its ancestors {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}._

- {{domxref("HTMLMediaElement.addTextTrack()")}}
  - : Adds a new {{domxref("TextTrack")}} object (such as a track for subtitles) to a media element. This is a programmatic interface only and does not affect the DOM.
- {{domxref("HTMLMediaElement.captureStream()")}}
  - : Returns {{domxref("MediaStream")}}, captures a stream of the media content.
- {{domxref("HTMLMediaElement.canPlayType()")}}
  - : Given a string specifying a MIME media type (potentially with the [`codecs` parameter](/en-US/docs/Web/Media/Guides/Formats/codecs_parameter) included), `canPlayType()` returns the string `probably` if the media should be playable, `maybe` if there's not enough information to determine whether the media will play or not, or an empty string if the media cannot be played.
- {{domxref("HTMLMediaElement.fastSeek()")}}
  - : Quickly seeks to the given time with low precision.
- {{domxref("HTMLMediaElement.load()")}}
  - : Resets the media to the beginning and selects the best available source from the sources provided using the [`src`](/en-US/docs/Web/HTML/Element/video#src) attribute or the {{HTMLElement("source")}} element.
- {{domxref("HTMLMediaElement.pause()")}}
  - : Pauses the media playback.
- {{domxref("HTMLMediaElement.play()")}}
  - : Begins playback of the media.
- {{domxref("HTMLMediaElement.seekToNextFrame()")}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Seeks to the next frame in the media. This non-standard, experimental method makes it possible to manually drive reading and rendering of media at a custom speed, or to move through the media frame-by-frame to perform filtering or other operations.
- {{domxref("HTMLMediaElement.setMediaKeys()")}} {{SecureContext_Inline}}
  - : Returns {{jsxref("Promise")}}. Sets the {{domxref("MediaKeys")}} keys to use when decrypting media during playback.
- {{domxref("HTMLMediaElement.setSinkId()")}} {{SecureContext_Inline}}
  - : Sets the ID of the audio device to use for output and returns a {{jsxref("Promise")}}. This only works when the application is authorized to use the specified device.

## Obsolete methods

_These methods are obsolete and should not be used, even if a browser still supports them._

- {{domxref("HTMLMediaElement.captureStream", "HTMLMediaElement.mozCaptureStream()")}} {{Non-standard_Inline}}
  - : The Firefox-prefixed equivalent of {{domxref("HTMLMediaElement.captureStream()")}}. See its [browser compatibility](/en-US/docs/Web/API/HTMLMediaElement/captureStream#browser_compatibility) for details.
- {{domxref("HTMLMediaElement.mozCaptureStreamUntilEnded()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : \[enter description]
- {{domxref("HTMLMediaElement.mozGetMetadata()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Returns {{jsxref('Object')}}, which contains properties that represent metadata from the playing media resource as `{key: value}` pairs. A separate copy of the data is returned each time the method is called. This method must be called after the [`loadedmetadata`](/en-US/docs/Web/API/HTMLMediaElement/loadedmetadata_event) event fires.

## Events

_Inherits events from its parent, {{domxref("HTMLElement")}}_.

Listen to these events using {{domxref("EventTarget.addEventListener", "addEventListener()")}} or by assigning an event listener to the `oneventname` property of this interface.

- {{domxref("HTMLMediaElement.abort_event", 'abort')}}
  - : Fired when the resource was not fully loaded, but not as the result of an error.
- {{domxref("HTMLMediaElement.canplay_event", 'canplay')}}
  - : Fired when the user agent can play the media, but estimates that **not** enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
- {{domxref("HTMLMediaElement.canplaythrough_event", 'canplaythrough')}}
  - : Fired when the user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
- {{domxref("HTMLMediaElement.durationchange_event", 'durationchange')}}
  - : Fired when the duration property has been updated.
- {{domxref("HTMLMediaElement.emptied_event", 'emptied')}}
  - : Fired when the media has become empty; for example, when the media has already been loaded (or partially loaded), and the {{domxref("HTMLMediaElement.load()")}} method is called to reload it.
- {{domxref("HTMLMediaElement.encrypted_event", 'encrypted')}}
  - : Fired when initialization data is found in the media that indicates the media is encrypted.
- {{domxref("HTMLMediaElement.ended_event", 'ended')}}
  - : Fired when playback stops when end of the media (\<audio> or \<video>) is reached or because no further data is available.
- {{domxref("HTMLMediaElement.error_event", 'error')}}
  - : Fired when the resource could not be loaded due to an error.
- {{domxref("HTMLMediaElement.loadeddata_event", 'loadeddata')}}
  - : Fired when the first frame of the media has finished loading.
- {{domxref("HTMLMediaElement.loadedmetadata_event", 'loadedmetadata')}}
  - : Fired when the metadata has been loaded.
- {{domxref("HTMLMediaElement.loadstart_event", 'loadstart')}}
  - : Fired when the browser has started to load a resource.
- {{domxref("HTMLMediaElement.pause_event", 'pause')}}
  - : Fired when a request to pause play is handled and the activity has entered its paused state, most commonly occurring when the media's {{domxref("HTMLMediaElement.pause()")}} method is called.
- {{domxref("HTMLMediaElement.play_event", 'play')}}
  - : Fired when the `paused` property is changed from `true` to `false`, as a result of the {{domxref("HTMLMediaElement.play()")}} method, or the `autoplay` attribute.
- {{domxref("HTMLMediaElement.playing_event", "playing")}}
  - : Fired when playback is ready to start after having been paused or delayed due to lack of data.
- {{domxref("HTMLMediaElement.progress_event", "progress")}}
  - : Fired periodically as the browser loads a resource.
- {{domxref("HTMLMediaElement.ratechange_event", 'ratechange')}}
  - : Fired when the playback rate has changed.
- {{domxref("HTMLMediaElement.seeked_event", 'seeked')}}
  - : Fired when a seek operation completes.
- {{domxref("HTMLMediaElement.seeking_event", 'seeking')}}
  - : Fired when a seek operation begins.
- {{domxref("HTMLMediaElement.stalled_event", 'stalled')}}
  - : Fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
- {{domxref("HTMLMediaElement.suspend_event", 'suspend')}}
  - : Fired when the media data loading has been suspended.
- {{domxref("HTMLMediaElement.timeupdate_event", 'timeupdate')}}
  - : Fired when the time indicated by the {{domxref("HTMLMediaElement.currentTime", "currentTime")}} property has been updated.
- {{domxref("HTMLMediaElement.volumechange_event", 'volumechange')}}
  - : Fired when the volume has changed.
- {{domxref("HTMLMediaElement.waiting_event", 'waiting')}}
  - : Fired when playback has stopped because of a temporary lack of data.
- {{domxref("HTMLMediaElement.waitingforkey_event", 'waitingforkey')}}
  - : Fired when playback is first blocked while waiting for a key.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

### References

- {{HTMLElement("video")}} and {{HTMLElement("audio")}} HTML elements
- {{domxref("HTMLVideoElement")}} and {{domxref("HTMLAudioElement")}} interfaces, derived from `HTMLMediaElement`

### Guides

- [Web media technologies](/en-US/docs/Web/Media)
- Learning area: [HTML video and audio](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Media type and format guide](/en-US/docs/Web/Media/Guides/Formats)
- [Handling media support issues in web content](/en-US/docs/Web/Media/Guides/Formats/Support_issues)
