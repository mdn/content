---
title: Firefox 49 for developers
slug: Mozilla/Firefox/Releases/49
tags:
  - Firefox
  - Release Notes
---
{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 49 was released on September 20, 2016. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- JavaScript errors logged into the console [now provide a \[Learn more\] link](https://hacks.mozilla.org/2016/06/helping-web-developers-with-javascript-errors/) for additional debugging help ({{bug(1179876)}}).
- CSS autocomplete: show more suggestions in autocomplete popup ({{bug("1260419")}}).
- The Animation Inspector now [exposes animation performance information](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#further-information-about-animation-compositing) in DevTools ({{bug("1254408")}}).
- The [Inspector's context menu](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-context-menu) has been reorganized to be cleaner and easier to use ({{bug("1211613")}}).
- The Inspector now supports `#RRGGBBAA` and `#RGBA` syntax for color values ({{bug("1271191")}}).
- The developer tools no longer display self-closing tags (such as {{HTMLElement("br")}} and {{HTMLElement("img")}} as if they have a closing tag on HTML pages; the behavior is unchanged for XHTML pages ({{bug("820926")}}).
- Accessibility improvements!

  - The toolbox does a better job of ensuring that keyboard focus is more visible ({{bug(1242851)}}).
  - Accessibility labels have been added to unlabeled controls ({{bug(1242715)}}).
  - Added proper tree view semantics and keyboard navigation to the Inspector's markup view ({{bug(1242694)}}).

- The [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) now shows a Cause column, which provides an indication of what caused each particular network request ({{bug(1134073)}}).
- In the _about:debugging_ Add-ons page, the Reload button is only enabled for temporary add-ons. It will be disabled for all other add-ons ({{bug(1273184)}}).
- In the _about:debugging_ Workers page, a warning message will be displayed in the Service Workers section if [service workers are incompatible](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-workers-not-compatible) with the current browser configuration ({{bug(1266415)}}).
- _about:debugging_ now has a [new Tabs page](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#tabs) available, which provides a complete list of all the debuggable tabs open in the current Firefox instance ({{bug(1266128)}}).
- The _Disable Cache_ option in the [Toolbox Advanced settings](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#advanced-settings) has been renamed to Disable HTTP Cache, to make it clearer that this affects the HTTP cache, and not [Service Workers](/en-US/docs/Web/API/Service_Worker_API)/the [Cache API](/en-US/docs/Web/API/Cache) (bug(1253018)).
- The [Storage Inspector now allows IndexedDB databases to be deleted](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html#indexeddb) via their own context menus ({{bug("1205123")}}), and will display warning messages if the IndexedDB cannot be deleted for some reason (if there are still active connections, for example) ({{bug(1268460)}}).

### HTML

- Added support for the {{HTMLElement("details")}} and {{HTMLElement("summary")}} elements ({{bug(1226455)}}).
- The {{htmlattrxref("pattern", "input")}} attribute of the {{HTMLElement("input")}} element now uses the `'u'` parameter in the underlying JavaScript {{jsxref("RegExp")}} ({{bug(1227906)}}).
- To match a spec change, an invalid value of the {{htmlattrxref("kind", "track")}} attribute of the {{HTMLElement('track')}} element is now treated like `"metadata"` instead of `"subtitles"` ({{bug(1269712)}}).
- The {{HTMLElement("iframe")}} element's {{htmlattrxref("sandbox", "iframe")}} attribute now supports the `'allow-popups-to-escape-sandbox'` and `'allow-modals'` values ({{bug(1190641)}}).
- Support for microdata attributes and the Microdata API have been removed ({{bug(909633)}}).
- The {{htmlattrxref("referrerpolicy", "a")}} attribute on the {{HTMLElement("a")}} element now supports the `'no-referrer-when-downgrade`' and `'origin-when-cross-origin'` ({{bug(1178337)}}).
- The {{htmlattrxref("form", "label")}} content attribute of the {{HTMLElement("label")}} element has been removed. The {{domxref("HTMLLabelElement.form")}} property still exists, but now returns the form with which the label's control is associated, if there is a control (and if that control is associated with a form) ({{bug(1268852)}}).

### CSS

- Added {{cssxref("background-position-x")}} and {{cssxref("background-position-y")}}, which allow separately specifying the horizontal and vertical offsets at which to draw a background image; these are components of {{cssxref("background-position")}} ({{bug("550426")}}).
- Added support for the `round` and `space` keywords to {{cssxref("background-repeat")}} ({{bug("548372")}}).
- On {{cssxref("background-clip")}}, the keyword `text` is now activated by default ({{bug(1264905)}}).
- Added support for specifying colors with an alpha channel using 4- and 8-digit CSS hex [color](/en-US/docs/Web/CSS/color_value) values (#RRGGBBAA and #RGBA) ({{bug("567283")}}).
- The pseudo-class {{cssxref(":dir")}} has been unprefixed ({{bug(859301)}}).
- In our experimental implementation (not yet activated by default) of {{cssxref("clip-path")}}, we can now interpolate between {{cssxref("&lt;basic-shape&gt;")}} values ({{bug(1110460)}}).
- Added the [`q` length unit](/en-US/docs/Web/CSS/length#q) ({{bug(1274526)}}).
- The property {{cssxref("text-align-last")}} has been unprefixed ({{bug(1039541)}}).
- Added support for {{cssxref("overflow-wrap")}}, replacing `word-wrap` that is still supported as an alternative name ({{bug(955857)}}).
- Our experimental [CSS Grids](/en-US/docs/Web/CSS/CSS_Grid_Layout) implementation has been improved:

  - Implemented {{cssxref("&lt;percentage&gt;")}} for the `grid-gap`, `grid-row-gap`, and `grid-column-gap` properties ({{bug(1266268)}}).
  - Implemented grid layout support for {{cssxref("align")}}, {{cssxref("justify-self")}}`:baseline` and `last-baseline` (aka "baseline self-alignment") ({{bug(1221525)}}).
  - Implemented grid item baseline content alignment ({{bug(1256429)}}).

- Our experimental [CSS Masks](/en-US/docs/Web/CSS/CSS_Masking) implementation has been improved:

  - The {{cssxref("mask-origin")}} property now uses `border-box` instead of `padding-box` as initial value, to match the spec ({{bug(1258286)}}).
  - The {{cssxref("mask-repeat")}} property now supports the `space` and `round` values ({{bug(1258626)}}).
  - Fixed an issue preventing the {{cssxref("mask-position")}} attribute from being animated ({{bug(1273804)}}).

- The preference controlling {{cssxref("text-emphasis")}} has been removed, so support for this property can no longer be disabled ({{bug(1229609)}}).

### JavaScript

- The ES2015 {{jsxref("Global_Objects/Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}} and {{jsxref("Global_Objects/Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}} {{jsxref("Proxy")}} traps have been implemented ({{bug(888969)}}).
- The ES2015 {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}, {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}, {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}, and {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}} methods, and {{jsxref("RegExp.@@species", "RegExp[@@species]")}} getter have been implemented ({{bug(887016)}}).
- The deprecated, non-standard `flags` argument of `String.prototype.`{{jsxref("String.prototype.match", "match")}}/{{jsxref("String.prototype.search", "search")}}/{{jsxref("String.prototype.replace", "replace")}} has been removed ({{bug(1108382)}}).
- The behavior of the {{jsxref("Date.parse()")}} method when parsing 2-digit years has been changed to be more interoperable with the Google Chrome browser ({{bug(1265136)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- The method {{domxref("DOMTokenList.supports()")}} has been added ({{bug(1257849)}}).
- The {{domxref("DOMTokenList.replace()")}} method has been added ({{bug(1224186)}}).
- Leading `'?'` characters are now ignored in the parameter of the {{domxref("URLSearchParams.URLSearchParams", "URLSearchParams()")}} constructor ({{bug(1268361)}}).
- The value returned by {{domxref("URL.origin")}}, {{domxref("HTMLAnchorElement/origin", "HTMLAnchorElement.origin")}}, and {{domxref("HTMLAnchorElement/origin", "HTMLAreaElement.origin")}} for URL using the `blob:` scheme is no longer incorrectly `null` but is instead the origin of the URL formed by removing the leading `blob:` ({{bug(1270451)}}).
- In prerendering mode, the {{domxref('Document.visibilityState')}} property now returns `'prerender'` ({{bug(1069772)}}).
- The {{domxref("isSecureContext")}} property has been implemented ({{bug(1162772)}}).
- The DOM4 {{domxref("ChildNode.before()")}}, {{domxref("ChildNode.after()")}}, {{domxref("ChildNode.replaceWith()")}}, {{domxref("Element.append")}} and {{domxref("Element.prepend")}} methods have been implemented ({{bug(911477)}}).
- The `TouchList.identifiedTouch()` method has been removed ({{bug(1188539)}}).
- By default, the `scrollbars` {{domxref("Window")}} feature is enabled when calling {{domxref("Window.open()")}}. In the past, while it was strongly recommended to enable it, it wasn't the default ({{bug(1257887)}}).
- Added the _experimental_ and _non-standard_ {{domxref("HTMLMediaElement.seekToNextFrame()")}} method, which allows seeking frame-by-frame through video content ({{bug(1235301)}}). While you're encouraged to experiment with this method to help us understand how useful it is, _do not use it in production code!_
- The {{domxref("HTMLLabelElement.form")}} property now returns the form with which the label's control is associated, if there is a control (and if that control is associated with a form). Previously, labels were directly associated with forms using this property ({{bug(1268852)}}).
- Support for the third parameter of {{domxref("EventTarget.addEventListener()")}}, either a {{jsxref("Boolean")}} or an `EventListenerOptions` has been added ({{bug(1266164)}} and {{bug(1266066)}}).
- The audio volume related values for {{domxref("KeyboardEvent.key")}} have been renamed. `"VolumeDown"` is now `"AudioVolumeDown"`, `"VolumeUp"` is now `"AudioVolumeUp"`, and `"VolumeMute"` is now `"AudioVolumeMute".` This brings Firefox into alignment with the latest draft of the UI Events specification ({{bug(1272578)}}). See {{SectionOnPage("/en-US/docs/Web/API/KeyboardEvent/code", "Code values")}} for a full list of available key codes.
- The keys previously referred to as `"MozHomeScreen"`, `"MozCameraFocusAdjust"`, and `"MozPhoneCall"` now have official names in the UI Events specification: `"GoHome"`, `"CameraFocus"`, and `"Call"`. Firefox 49 has been updated to use the new names ({{bug(1272599)}}). See {{SectionOnPage("/en-US/docs/Web/API/KeyboardEvent/code", "Code values")}} for a full list of available key codes.
- The key values `"Separator"` and `"MediaSkip"` have been removed, as they were deprecated and unused ({{bug(1232919)}}).
- Key values and the corresponding key codes `"Hyper"` and `"Super"` have been added to represent these legacy modifier keys ({{bug(1232919)}}).
- Two key values for multimedia numeric keypad keys have been added: `"Key11"` and `"Key12"` ({{bug(1232919)}}).
- The following new key values have been added for audio control keys: `"AudioBassBoostToggle"`, `"AudioTrebleDown"`, and `"AudioTrebleUp"` ({{bug(123919)}}).
- Key values have been added for these microphone control keys: `MicrophoneToggle`, `MicrophoneVolumeDown`, `MicrophoneVolumeUp`, and `MicrophoneVolumeMute` ({{bug(123919)}}).
- New key values have been added to support speech recognition devices: `SpeechCorrectionList` and `SpeechInputToggle` ({{bug(1232919)}}).
- New key values have been added to support special buttons on phones: `AppSwitch`, `Call`, `CameraFocus`, `EndCall`, `GoBack`, `GoHome`, `HeadsetHook`, `LastNumberRedial`, `Notification`, `MannerMode`, and `VoiceDial` ({{bug(1232919)}}).
- These new application key values have been added: `LaunchContacts` and `LaunchPhone` ({{bug(1232919)}}).
- New key values have been added to support television devices: `TV3DMode`, `TVAntennaCable`, `TVAudioDescription`, `TVAudioDescriptionMixDown`, `TVAudioDescriptionMixUp`, `TVContentsMenu`, `TVDataService`, `TVInput`, `TVInputComponent1`, `TVInputComponent2`, `TVInputComposite1`, `TVInputComposite2`, `TVInputHDMI1`, `TVInputHDMI2`, `TVInputHDMI3`, `TVInputHDMI4`, `TVInputVGA1`, `TVMediaContext`, `TVNetwork`, `TVNumberEntry`, `TVRadioService`, `TVSatellite`, `TVSatelliteBS`, `TVSatelliteCS`, `TVSatelliteToggle`, `TVTerrestrialAnalog`, `TVTerrestrialDigital`, `TVTimer`, and `DVR` ({{bug(1232919)}}).
- The key value `MediaSelect` has been replaced with the standard `LaunchMediaPlayer` key value ({{bug(1272592)}}).
- Additional media player key values have been added as well. These are `MediaAudioTrack`, `MediaSkipBackward`, `MediaSkipForward`, `MediaStepBackward`, `MediaStepForward`, `MediaTopMenu`, `NavigateIn`, `NavigateNext`, `NavigateOut`, and `NavigatePrevious` ({{bug(1232919)}}).

#### Canvas

- The {{domxref("CanvasRenderingContext2D.filter")}} property, which provides support for adding filters to a canvas, is now activated by default and no longer needs to be enabled using a preference ({{bug(1173545)}}).

#### WebGL

- The {{domxref("EXT_color_buffer_float")}} {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} extension has been implemented ({{bug(1129332)}}).
- The {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}} event, which is sent when a WebGL context creation attempt fails, has been implemented ({{bug(1271478)}}). Use this to help understand what went wrong, both for debugging and for production error handling.

#### IndexedDB

- You can now rename IndexedDB indexes; the {{domxref("IDBIndex.name")}} property is no longer read-only ({{bug(1118028)}}).
- You can also now rename {{domxref("IDBObjectStore")}}s; the {{domxref("IDBObjectStore.name")}} property is no longer read-only ({{bug(1118028)}}).

#### Service Workers and related

- The [Fetch API](/en-US/docs/Web/API/Fetch_API)'s {{domxref("Response")}} object now implements the {{domxref("Response.redirected", "redirected")}} property, which indicates whether or not the response is for a request which was redirected. Please review the security related notes in the documentation before using this property ({{bug(1243792)}}).
- In the [Permissions API](/en-US/docs/Web/API/Permissions_API), Firefox no longer supports the 'push' `PermissionDescriptor` dictionary type (referred to in the spec as `PushPermissionDescriptor`); this is because Firefox relies on a quota system for controlling the `userVisibleOnly` status instead, and was throwing an error when it encountered a `PushPermissionDescriptor` instance ({{bug(1266821)}}). With this dictionary removed, Firefox now ignores it.

#### Media Streams

- In the past, it was possible for a call to {{domxref("MediaDevices.getUserMedia()")}} which requests both audio and video to succeed in cases where the user has only one of the two types of hardware available. This has been fixed ({{bug(802326)}}).
- In prior versions of Firefox, it was possible for a call to {{domxref("MediaDevices.getUserMedia()")}} which requests both audio and video to succeed even though the user denied access to one but not both of the matching devices. This has been fixed ({{bug(802326)}}). This involves minor user interface changes as well, to remove the options to choose "No audio" or "No video" when the user is prompted for permissions.
- The {{domxref("MediaStream.getTrackById()")}} method has been implemented ({{bug(1208390)}}).

#### WebRTC

- The {{domxref("RTCPeerConnection.addTrack()")}} method has been updated to allow tracks which are not components of the specified streams to be added to the connection. Instead, the streams are used to group tracks on the receiving end of the connection ({{bug(1271669)}}).

#### New APIs

- The {{domxref("PerformanceObserver")}} API is now activated by default on Nightly. It is not available by default in other versions of Firefox 49 ({{bug(1271487)}}).

#### Others

- {{domxref("XMLHttpRequest.getResponseHeader()")}} and {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} return empty headers in case the preference `network.http.keep_empty_response_headers_as_empty_string` is set to `true` ({{bug(669259)}}).
- The Firefox OS-only Data Store API has been removed ({{bug(1261009)}}).
- The [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) event handlers `Document.onfullscreenchange` and `Document.onfullscreenerror` have been removed from {{domxref("Element")}} as they were never fired there; the prefixed versions of these event handlers have been kept there for compatibility purposes, however ({{bug(1270386)}}). Note that this is not yet activated by default, but is behind the `full-screen-api.unprefix.enabled` preference ({{bug(1268749)}}).
- The obsolete `Document.mozFullScreen` property has been unprefixed to {{domxref("Document.fullscreen")}} {{bug(1269157)}}. Note that this is not yet activated by default by behind the `full-screen-api.unprefix.enabled` preference ({{bug(1268749)}}).
- The read-only properties {{domxref("Document/fullscreenElement", "Document.fullscreenElement")}} and {{domxref("Document.fullscreenEnabled")}} no longer throw an exception if an attempt is made to change their values; instead, the new value is silently ignored and the setter function is a no-op ({{bug(1269798)}}).
- Any kind of data can now be retrieved from the clipboard using {{domxref("DataTransfer.getData()")}}: previously, only data of certain MIME types were supported {{bug(860857)}}.
- Our implementation of the Frame Timing API, consisting of the two interfaces `PerformanceCompositeTiming` and `PerformanceRenderTiming`, has been removed as the spec has been completely rewritten ({{bug(1271846)}}).
- To match the spec, the {{domxref("VTTCue.positionAlign")}} property now returns a `PositionAlign` enum instead of an `Align` enum ({{bug(1276129)}}).
- The speech synthesis part of [Web Speech API](/en-US/docs/Web/API/Web_Speech_API#speech_synthesis) is now activated by default ({{bug(1268633)}}).
- The [Performance Timeline API](/en-US/docs/Web/API/Performance_Timeline) is now available by default in Nightly (though not in Aurora, Beta or Release).
- The {{domxref("ServiceWorkerGlobalScope.install_event", "install")}} event, and the {{domxref("Window.appinstalled_event", "Window.oninstall")}} event handler, are now supported for [Web Manifests](/en-US/docs/Web/Manifest) ({{bug(1265279)}}).
- When using the {{domxref("BaseAudioContext/createPeriodicWave", "AudioContext.createPeriodicWave()")}} method of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API), you can now specify whether the resulting periodic wave should be normalized by including a dictionary object as the third parameter, which includes a single parameter — `{disableNormalization: true}` ({{bug(1265405)}}).
- In the WebVTT API, {{domxref("VTTCue.positionAlign")}} now correctly returns a `PositionAlignSetting` enum as per spec; previously it returned an `AlignSetting` enum ({{bug(1276129)}}).
- The Speech Synthesis part of the Web Speech API is now enabled by default across all desktop browsers ({{bug(1268633)}}).
- The {{domxref("Animation.Animation()", "Animation()")}} constructor of the [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) now accepts a null timeline ({{bug(1096776)}}).
- The {{domxref("KeyframeEffect")}} property {{domxref("KeyframeEffect.target", "target")}} is now supported in Firefox, if you have enabled [Web Animations](/en-US/docs/Web/API/Web_Animations_API) ({{bug(1067769)}}).

### MathML

_No change._

### SVG

- Removed support for the deprecated {{SVGElement('altGlyph')}}, {{SVGElement('altGlyphDef')}} and {{SVGElement('altGlyphItem')}} elements ({{bug(1260032)}}).

### Audio/Video

_No change._

### Plugins and Flash

Beginning in Firefox 49, Firefox, by default, blocks certain kinds of Flash content that aren't necessary for sites to function well. This behavior, controlled by the preference `browser.safebrowsing.blockedURIs.enabled`, helps to improve the performance of sites and Firefox in general without having significant impact on site usability. It also helps improve stability of the browsing experience by eliminating a major cause of crashes. The blocked Flash modules include several used just for fingerprinting purposes, as well as a number of "supercookie" modules, and in the future may be expanded to include more types of blocked modules. See {{bug(1275591)}} for details.

This marks the next step in the journey toward a plugin-free future. HTML is very close to the point where plugins will no longer be needed to get the job done.

## HTTP

- The [`Cache-Control: immutable`](/en-US/docs/Web/HTTP/Headers/Cache-Control) directive has been implemented ({{bug(1267474)}}). See also this [blog post](https://bitsup.blogspot.com/2016/05/cache-control-immutable.html) for more information.
- The {{CSP("require-sri-for")}} {{HTTPHeader("Content-Security-Policy")}} has been implemented ({{bug(1265318)}}).

## Networking

- The [Proxy Auto-Configuration (PAC)](</en-US/docs/Mozilla/Projects/Necko/Proxy_Auto-Configuration_(PAC)_file>) implementation has been updated. Now `weekdayRange`, `dateRange`, and `timeRange` support "reversed ranges", for example, `weekdayRange("SAT", "MON")` will evaluate `true` if the current day is Saturday, Sunday, or Monday ({{bug(1251332)}}).

## Security

- The {{domxref("isSecureContext")}} property, indicating whether a context is capable of using features that require [secure contexts](/en-US/docs/Web/Security/Secure_Contexts), has been implemented ({{bug(1162772)}}).

## Compatibility

In order to improve compatibility with existing content, Firefox now accepts some WebKit prefixed properties and attributes.

- The following properties now also work prefixed with `-webkit`:

  - `-webkit-align-items`
  - `-webkit-align-content`
  - `-webkit-align-self`
  - `-webkit-animation`
  - `-webkit-animation-delay`
  - `-webkit-animation-direction`
  - `-webkit-animation-duration`
  - `-webkit-animation-fill-mode`
  - `-webkit-animation-iteration-count`
  - `-webkit-animation-name`
  - `-webkit-animation-play-state`
  - `-webkit-animation-timing-function`
  - `-webkit-backface-visibility`
  - `-webkit-background-clip`
  - `-webkit-background-origin`
  - `-webkit-background-size`
  - `-webkit-border-bottom-left-radius`
  - `-webkit-border-bottom-right-radius`
  - `-webkit-border-image`
  - `-webkit-border-top-left-radius`
  - `-webkit-border-top-right-radius`
  - `-webkit-border-radius`
  - `-webkit-box-shadow`
  - `-webkit-filter`
  - `-webkit-flex`
  - `-webkit-flex-basis`
  - `-webkit-flex-direction`
  - `-webkit-flex-flow`
  - `-webkit-flex-grow`
  - `-webkit-flex-shrink`
  - `-webkit-flex-wrap`
  - `-webkit-justify-content`
  - `-webkit-order`
  - `-webkit-perspective`
  - `-webkit-perspective-origin`
  - `-webkit-text-size-adjust`
  - `-webkit-transform`
  - `-webkit-transform-origin`
  - `-webkit-transform-style`
  - `-webkit-transition`
  - `-webkit-transition-delay`
  - `-webkit-transition-duration`
  - `-webkit-transition-property`
  - `-webkit-transition-timing-function`
  - `-webkit-user-select`

- The following properties map to the equivalent prefixed property:

  - `-webkit-box-flex`
  - `-webkit-box-ordinal-group`
  - `-webkit-box-orient`
  - `-webkit-box-align`
  - `-webkit-box-pack`

- For {{cssxref("&lt;image&gt;")}} values:

  - The following functions map to their unprefixed equivalents: `-webkit-linear-gradient()`, `-webkit-radial-gradient()`, `-webkit-repeating-linear-gradient()`, and `-webkit-repeating-radial-gradient()`.
  - The outdated `-webkit-gradient` is supported (and translated to a regular gradient)

- The following {{cssxref("display")}} values are translated:

  - `-webkit-box` to `-moz-box`
  - `-webkit-flex` to `flex`
  - `-webkit-inline-box` to `inline-flex`
  - `-webkit-inline-flex` to `-moz-inline-flex`

- The following properties are supported (and don't map to any unprefixed equivalent):

  - {{cssxref("-webkit-text-fill-color")}}
  - {{cssxref("-webkit-text-stroke-color")}}
  - {{cssxref("-webkit-text-stroke-width")}}
  - {{cssxref("-webkit-text-stroke")}}

- The `WebKitCSSMatrix` interface is an alias of {{domxref("DOMMatrix")}}
- The following media query features have been implemented:

  - `-webkit-min-device-pixel-ratio` as an alias of [`min-resolution`](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#resolution) with the same value (in `dppx)`, though this feature is [disabled by default](https://bugzilla.mozilla.org/show_bug.cgi?id=1237720) (behind about:config pref `layout.css.prefixes.device-pixel-ratio-webkit`)
  - `-webkit-max-device-pixel-ratio` as an alias of [`max-resolution`](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#resolution) of the same value (in `dppx`); this feature is also disabled by default, behind the same about:config pref.
  - [`-webkit-transform-3d`](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#-webkit-transform-3d) always matching, indicating 3d transform support.

## Changes for add-on and Mozilla developers

### WebExtensions

- Support for the {{WebExtAPIRef("history")}} has been added. This provides access to the browser history, with methods available for searching the history, getting information about previously-visited pages, and adding and removing history entries.
- Added the {{WebExtAPIRef("tabs.removeCSS()")}} method to the tabs API. This method lets you remove CSS which was previously injected by calling {{WebExtAPIRef("tabs.insertCSS()")}}.

### Interfaces

- In {{domxref("EventTarget.addEventListener()")}}, the value `mozSystemGroup`,  active only in code running in XBL or in Firefox's chrome, is a {{jsxref("Boolean")}} which indicates if the listener is added to the system group. ({{bug(1274520)}})

### Other

_No change._

## Older versions

{{Firefox_for_developers(48)}}
