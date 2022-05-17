---
title: Firefox 101 for developers
slug: Mozilla/Firefox/Releases/101
tags:
  - '101'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 101 that will affect developers. Firefox 101 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [May 31, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

The [`prefers-contrast`](/en-US/docs/Web/CSS/@media/prefers-contrast) media feature that is used to detect whether the user has specified a preference for higher (`more`)  or lower (`less`) contrast in the presentation of web content is now available by default. This feature now also lets users specify a set of colors to use for the contrast through the new `custom` value ({{bug(1656363)}}).

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/en-US/docs/Web/API/HTMLMediaElement/preservesPitch) is now supported without the `moz` prefix.
  `mozPreservesPitch` is now an alias of `preservesPitch`, but is deprecated, and may be removed in future releases.
  ({{bug(1652950)}}).

- [`HTMLInputElement.showPicker()`](/en-US/docs/Web/API/HTMLInputElement/showPicker) is now supported, allowing the picker for an input element to be displayed when a user interacts with some other element, such as a button ({{bug(1745005)}}).

- [AV1 codec parameters](/en-US/docs/Web/Media/Formats/codecs_parameter#av1) are now properly parsed in media support queries.
  This means that [`MediaCapabilities.decodingInfo()`](/en-US/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/en-US/docs/Web/API/HTMLMediaElement/canPlayType), and [`MediaSource.isTypeSupported()`](/en-US/docs/Web/API/MediaSource/isTypeSupported) will now accurately report support for playback for AV1 sources based on the provided codec parameters.
  [`MediaCapabilities.decodingInfo()`](/en-US/docs/Web/API/MediaCapabilities/decodingInfo) will also use the information to accurately report on "efficient decoding" of AV1 videos.
  For more information, see {{bug(1757861)}}.

- [`DOMException`](/en-US/docs/Web/API/DOMException) is now a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker.postMessage()", "postMessage()")}} ({{bug(1561357)}}).

- [`RTCRtpEncodingParameters.maxFramerate`](/en-US/docs/Web/API/RTCRtpEncodingParameters/maxFramerate) is now supported for setting the maximum framerate that can be used to send an encoding (in {{domxref("RTCPeerConnection.addTransceiver()")}} and {{domxref("RTCRtpSender.setParameters()")}}).
  Note that zero if a valid frame rate value, but is interpreted by Firefox as "no frame rate limit".
  For more information see {{bug(1611957)}}.
  
#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

- Addition of the {{WebExtAPIRef("scripting")}} API, which provides features to execute a script, insert and remove CSS, and manage the registration of content scripts ({{bug(1687764)}}). This API is available to Manifest V3 extensions and takes over the execute script and insert and remove CSS features from the {{WebExtAPIRef("tabs")}} API.
- Addition of the {{WebExtAPIRef("action")}} API, which takes over the features of the {{WebExtAPIRef("browserAction")}} API in Manifest V3 extensions. Corresponding addition of the [`"action"`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) manifest key. Note that the {{WebExtAPIRef("browserAction")}} API and [`"action"`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest key are only available in Manifest V2 extensions.
- The [`"background"`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) manifest key property `"persistent"` can be set to `false` under the control of preferences: for Manifest V2, the <code>extensions.eventPages.enabled</code> preference, and in Manifest V3, the <code>extensions.manifestV3.enabled</code> preference.
- Addition of the [`"host_permissions"`](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) manifest key, which is available for Manifest V3 extensions.

#### Removals

### Other

## Older versions

{{Firefox_for_developers(100)}}
