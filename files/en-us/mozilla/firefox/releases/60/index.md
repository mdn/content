---
title: Firefox 60 for developers
slug: Mozilla/Firefox/Releases/60
tags:
  - '60'
  - Firefox
  - Release Notes
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 60 that will affect developers. Firefox 60 was released on May 9, 2018.

## Stylo comes to Firefox for Android in 60

[Firefox's new parallel CSS engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — also known as **Quantum CSS** or **Stylo** — which was [first enabled by default in Firefox 57 for desktop](/en-US/docs/Mozilla/Firefox/Releases/57#firefox_57_firefox_quantum), has now been enabled in Firefox for Android.

## Changes for web developers

### Developer tools

- In the CSS Pane rules view (see [Examine and edit CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html)), the keyboard shortcuts for precise value increments (increase/decrease by 0.1) have changed from `Alt` + `Up`/`Down` to `Ctrl` + `Up`/`Down` on Linux and Windows, to avoid clashes with default OS-level shortcuts (see {{bug("1413314")}}).
- Also in the CSS Pane rules view, [CSS variable names](/en-US/docs/Web/CSS/Using_CSS_custom_properties) will now auto-complete ({{bug(1422635)}}). If you enter `var(` into a property value and then type a dash (`-`), any variables you have declared in your CSS will then appear in an autocomplete list.
- In [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), a _Reload when…_ dropdown has been added to allow users to enable/disable automatic page reloads when touch simulation is toggled, or simulated user agent is changed. See [Controlling page reload behavior](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html#controlling-page-reload-behavior) for more details ({{bug(1428816)}}).
- The `view_source.tab` preference has been removed so you can no longer toggle [View Source](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) mode between appearing in a new tab or new window. Page sources will always appear in new tabs from now on ({{bug(1418403)}}).

### HTML

Pressing the Enter key in `designMode` and `contenteditable` now inserts `<div>` elements when the caret is in an inline element or text node which is a child of a block level editing host — instead of inserting `<br>` elements like it used to. If you want to use the old behavior on your app, you can do it with `document.execCommand()`. See [Differences in markup generation](/en-US/docs/Web/Guide/HTML/Editable_content#differences_in_markup_generation) for more details (also see {{bug(1430551)}}).

### CSS

- The {{cssxref("align-content")}}, {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-content")}}, and {{cssxref("place-content")}} property values have been updated as per the latest [CSS Box Alignment Module Level 3](https://drafts.csswg.org/css-align-3/) spec ({{bug(1430817)}}).
- The {{cssxref("paint-order")}} property has been implemented ({{bug(1426146)}}).

### SVG

_No changes._

### JavaScript

- ECMAScript 2015 modules have been enabled by default in ({{bug(1438139)}}). See [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) and [ES modules: A cartoon deep dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) for more information, or consult MDN reference docs:

  - [`<script src="main.js" type="module">`](/en-US/docs/Web/HTML/Element/script#attr-type) and [`<script nomodule src="fallback.js">`](/en-US/docs/Web/HTML/Element/script#attr-nomodule)
  - [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export) statements.

- The {{jsxref("Array.prototype.values()")}} method has been added again ({{bug(1420101)}}). Make sure your code doesn't have any custom implementation of this method.

### APIs

#### New APIs

- The [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) has been enabled in ({{bug(1432542)}}).

#### DOM

- In the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API), the `MakePublicKeyCredentialOptions` dictionary object has been renamed {{domxref("PublicKeyCredentialCreationOptions")}}; this change has been made in Firefox ({{bug(1436473)}}).
- The `dom.workers.enabled` pref has been removed, meaning workers can no longer be disabled since ({{bug(1434934)}}).
- The {{domxref("Document.body","body")}} property is now implemented on the {{domxref("Document")}} interface, rather than the {{domxref("HTMLDocument")}} interface ({{bug(1276438)}}).
- {{domxref("PerformanceResourceTiming")}} is now available in workers ({{bug(1425458)}}).
- The {{domxref("PerformanceObserver.takeRecords()")}} method has been implemented ({{bug(1436692)}}).
- The {{domxref("KeyboardEvent.keyCode")}} attribute of punctuation key becomes non-zero even if the active keyboard layout doesn't produce ASCII characters. See [these notes for more detail](/en-US/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout). Please do **not** use `KeyboardEvent.keyCode` in new applications — use {{domxref("KeyboardEvent.key")}} or {{domxref("KeyboardEvent.code")}} instead.
- The {{domxref("Animation.updatePlaybackRate()")}} method has been implemented ({{bug("1436659")}}).
- New rules have been included for determining [keyCode values of punctuation keys](/en-US/docs/Web/API/KeyboardEvent/keyCode#keycode_of_punctuation_keys_on_some_keyboard_layout) ({{bug(1036008)}}).
- The Gecko-only options object `storage` option of the {{domxref("IDBFactory.open()")}} method (see [Experimental Gecko options object](/en-US/docs/Web/API/IDBFactory/open#experimental_gecko_options_object)) has been deprecated ({{bug(1442560)}}).
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) can now be used within [IndexedDB](/en-US/docs/Web/API/IndexedDB_API) code ({{bug(1193394)}}).

#### DOM events

_No changes._

#### Service workers

_No changes._

#### Media and WebRTC

- When recording or sharing media obtained using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, muting the camera by setting the corresponding track's {{domxref("MediaStreamTrack.enabled")}} property to `false` now turns off the camera's "in use" indicator light, to help the user more easily see that the camera is not in use ({{bug(1299515)}}). See {{SectionOnPage("/en-US/docs/Web/API/MediaDevices/getUserMedia", "User privacy")}} for more details. See also [this blog post](https://blog.mozilla.org/webrtc/better-privacy-on-camera-mute-in-firefox-60/).
- Removing a track from an {{domxref("RTCPeerConnection")}} using {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}} no longer removes the track's {{domxref("RTCRtpSender")}} from the peer connection's list of senders as reported by {{domxref("RTCPeerConnection.getSenders", "getSenders()")}} ({{bug(1290949)}}).
- The {{domxref("RTCRtpContributingSource")}} and {{domxref("RTCRtpSynchronizationSource")}} objects' timestamps were previously being reported based on values returned by {{jsxref("Date.getTime()")}}. In Firefox 60, these have been fixed to correctly use the [Performance Timing API](/en-US/docs/Web/API/Performance_API) instead ({{bug(1433576)}}).
- As per spec, the {{domxref("ConvolverNode.ConvolverNode","ConvolverNode()")}} constructor now throws a `NotSupportedError` {{domxref("DOMException")}} if the referenced {{domxref("AudioBuffer")}} does not have 1, 2, or 4 channels ({{bug(1443228)}}).
- The obsolete {{domxref("RTCPeerConnection")}} event handler {{domxref("RTCPeerConnection.removestream_event", "RTCPeerConnection.onremovestream")}} has been removed; by now you should be using {{domxref("MediaStream/removetrack_event", "removetrack")}} events instead ({{bug(1442385)}}).
- The primary name for {{domxref("RTCDataChannel")}} is now in fact `RTCDataChannel`, instead of being an alias for `DataChannel`. The name `DataChannel` is no longer supported ({{bug(1173851)}}).

#### Canvas and WebGL

- If the `privacy.resistFingerprinting` preference is set to `true`, the {{domxref("WEBGL_debug_renderer_info")}} WebGL extension will be disabled from now on ({{bug(1337157)}}).

### CSSOM

_No changes._

### HTTP

- `SameSite` cookies are now supported ({{bug(795346)}}). See {{HTTPHeader("Set-Cookie")}} for more information.

### Security

The {{httpheader("X-Content-Type-Options")}} header, when set to `no-sniff`, now follows the specification for JavaScript MIME types. In particular, `text/json` and `application/json` are no longer valid values ({{bug(1431095)}}).

### Plugins

_No changes._

### Other

Fetches that include credentials can now share connections with fetches that don't include credentials. For example, if the same origin requests some web fonts as well as some credentialed user data from the same CDN, both could share a connection, potentially leading to a quicker turnaround ({{bug(1363284)}}).

## Removals from the web platform

### HTML

_No changes._

### CSS

- The proprietary {{cssxref("-moz-user-input")}} property's `enabled` and `disabled` values are no longer available ({{bug("1405087")}}).
- The proprietary {{cssxref("-moz-border-top-colors")}}, {{cssxref("-moz-border-right-colors")}}, {{cssxref("-moz-border-bottom-colors")}}, and {{cssxref("-moz-border-left-colors")}} properties have been removed from the platform completely ({{bug(1429723)}}).

### JavaScript

The non-standard [expression closure](/en-US/docs/Web/JavaScript/Reference/Operators/Expression_closures) syntax has been removed ({{bug(1426519)}}).

### APIs

_No changes._

### SVG

_No changes._

### Other

_No changes._

## Changes for add-on and Mozilla developers

### WebExtensions

Theme API:

- headerURL is now optional
- When creating a browser [theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme), any {{cssxref("text-shadow")}} applied to the header text is removed if no `headerURL` is specified (see {{bug(1404688)}}).
- New properties are supported:

  - **tab_line**
  - **tab_selected**
  - **popup**
  - **popup_border**
  - **popup_text**
  - **tab_loading**
  - **icons**
  - **icons_attention**
  - **frame_inactive**
  - **button_background_active**
  - **button_background_hover**

## Older versions

{{Firefox_for_developers(59)}}
