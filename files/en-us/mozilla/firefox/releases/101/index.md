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

This article provides information about the changes in Firefox 101 that will affect developers. Firefox 101 was released on May 31, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

- The [`prefers-contrast`](/en-US/docs/Web/CSS/@media/prefers-contrast) media feature that is used to detect whether the user has specified a preference for higher (`more`)  or lower (`less`) contrast in the presentation of web content is now available by default. This feature now also lets users specify a set of colors to use for the contrast through the new `custom` value ({{bug(1656363)}}).

- Three new viewport sizes have been introduced: small (`s`), large (`l`), and dynamic (`d`). These new sizes have added new [viewport-percentage length units](/en-US/docs/Web/CSS/length) in addition to the existing ones - `vh`, `vw`, `vmax`, and `vmin`. The new viewport-percentage length units include `svh`, `lvh`, `dvh`, `svw`, `lvw`, `dvw`, `svmax`, `lvmax`, `dvmax`, `svmin`, `lvmin`, and `dvmin` ({{bug(1610815)}}). Additionally, the units `vb` and `vi` are now supported by default ({{bug(1610815)}}).

- Support for the [`inline-size`](/en-US/docs/Web/CSS/contain#inline-size) value for the `contain` property has been added. For more information, see  ({{bug(1755565)}}).

### JavaScript

No notable changes.

### APIs

#### DOM

- [`HTMLMediaElement.preservesPitch`](/en-US/docs/Web/API/HTMLMediaElement/preservesPitch) is now supported without the `moz` prefix.
  `mozPreservesPitch` is now an alias of `preservesPitch`, but is deprecated, and may be removed in future releases ({{bug(1652950)}}).

- [`HTMLInputElement.showPicker()`](/en-US/docs/Web/API/HTMLInputElement/showPicker) is now supported, allowing the picker for an input element to be displayed when a user interacts with some other element, such as a button ({{bug(1745005)}}).

- [`DOMException`](/en-US/docs/Web/API/DOMException) is now a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker.postMessage()", "postMessage()")}} ({{bug(1561357)}}).

- _Constructable stylesheets_ are now supported, making it much easier to create reusable stylesheets for use with [Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM).
  The update includes the addition of a [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet) for creating new stylesheets, the {{domxref("CSSStyleSheet.replace()")}} and {{domxref("CSSStyleSheet.replaceSync()")}} methods that can be used to add/replace CSS rules in the sheet, and the [`Document.adoptedStyleSheets`](/en-US/docs/Web/API/Document/adoptedStyleSheets) and [`ShadowRoot.adoptedStyleSheets`](/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets) properties that are used to share sheets to a document and its shadow DOM subtrees.
  See {{bug(1520690)}} for more information.

#### Media, WebRTC, and Web Audio

- [AV1 codec parameters](/en-US/docs/Web/Media/Formats/codecs_parameter#av1) are now properly parsed in media support queries.
  This means that [`MediaCapabilities.decodingInfo()`](/en-US/docs/Web/API/MediaCapabilities/decodingInfo), [`HTMLMediaElement.canPlayType()`](/en-US/docs/Web/API/HTMLMediaElement/canPlayType), and [`MediaSource.isTypeSupported()`](/en-US/docs/Web/API/MediaSource/isTypeSupported) will now accurately report support for playback for AV1 sources based on the provided codec parameters.
  [`MediaCapabilities.decodingInfo()`](/en-US/docs/Web/API/MediaCapabilities/decodingInfo) will also use the information to accurately report on "efficient decoding" of AV1 videos.
  For more information, see {{bug(1757861)}}.

- [`RTCRtpEncodingParameters.maxFramerate`](/en-US/docs/Web/API/RTCRtpEncodingParameters/maxFramerate) is now supported for setting the maximum framerate that can be used to send an encoding (in {{domxref("RTCPeerConnection.addTransceiver()")}} and {{domxref("RTCRtpSender.setParameters()")}}).
  Note that zero if a valid frame rate value, but is interpreted by Firefox as "no frame rate limit".
  For more information, see {{bug(1611957)}}.

#### SVG

- SVG images in the Firefox UI that are styled using [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) will respect the [`color-scheme`](/en-US/docs/Web/CSS/color-scheme) of the embedder (previously `prefers-color-scheme` ignored the `color-scheme` of the embedder and triggered off either the device or browser theme).
  This ensures that a favicon, for example, is always styled to match the theme of the elements that nest it, and not necessarily the (potentially different) theme of the device. ({{bug(1764354)}}).

### WebDriver conformance (WebDriver BiDi, Marionette)

Starting with this release of Firefox the [WebDriver BiDi](https://wiki.mozilla.org/WebDriver/RemoteProtocol/WebDriver_BiDi) protocol will be enabled by default. A WebDriver BiDi session can be requested by using WebDriver classic (geckodriver, Marionette) and setting the [`webSocketURL` capability](/en-US/docs/Web/WebDriver/Capabilities/webSocketUrl) to `true` when creating a new WebDriver session. The same capability will then contain the WebSocket end-point for BiDi clients to connect to.

The following commands and events are available:

- Adds the [`session` module](https://w3c.github.io/webdriver-bidi/#module-session) including a partial implementation for the commands to globally subscribe ([`session.subscribe`](https://w3c.github.io/webdriver-bidi/#command-session-subscribe)) to and unsubscribe ([`session.unsubscribe`](https://w3c.github.io/webdriver-bidi/#command-session-unsubscribe)) from events, and the ability to create a direct WebDriver BiDi session ([`session.new`](https://w3c.github.io/webdriver-bidi/#command-session-new)) when not using WebDriver classic.

- Adds the [`browsingContext` module](https://w3c.github.io/webdriver-bidi/#module-browsingContext) including the commands to open a new tab or window ([`browsingContext.create`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-create)) or close such one ([`browsingContext.close`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-close)), retrieve open browsing contexts ([`browsingContext.getTree`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-getTree)) and to navigate within a browsing context ([`browsingContext.navigate`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-navigate)). There is also support for the event when a browsing context got created ([`browsingContext.contextCreated`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-contextCreated)).

- Adds the [`log` module](https://w3c.github.io/webdriver-bidi/#module-log) including support for log events ([`log.entryAdded`](https://w3c.github.io/webdriver-bidi/#event-log-entryAdded)).

For more information, see the [full bug list](https://bugzilla.mozilla.org/buglist.cgi?component=Agent&component=Marionette&component=WebDriver%20BiDi&v1=fixed&query_format=advanced&f1=cf_status_firefox101&o1=equals&product=Remote%20Protocol&product=Testing&j_top=OR&list_id=16095473&resolution=FIXED).

## Changes for add-on developers

- Addition of the {{WebExtAPIRef("scripting")}} API, which provides features to execute a script, insert and remove CSS, and manage the registration of content scripts ({{bug(1687764)}}). This API is available to Manifest V3 extensions and takes over the execute script and insert and remove CSS features from the {{WebExtAPIRef("tabs")}} API.
- Addition of the {{WebExtAPIRef("action")}} API, which takes over the features of the {{WebExtAPIRef("browserAction")}} API in Manifest V3 extensions. Corresponding addition of the [`"action"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) manifest key. Note that the {{WebExtAPIRef("browserAction")}} API and [`"action"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) manifest key are only available in Manifest V2 extensions.
- The [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) manifest key property `"persistent"` can be set to `false` under the control of preferences: for Manifest V2, the <code>extensions.eventPages.enabled</code> preference, and in Manifest V3, the <code>extensions.manifestV3.enabled</code> preference.
- Addition of the [`"host_permissions"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) manifest key, which is available for Manifest V3 extensions.
- The content script execution environment has changed for Manifest V3 extensions:
  - Content scripts can no longer rely on host permissions to perform cross-origin requests. Cross-origin requests from content scripts are possible with [CORS](/en-US/docs/Web/HTTP/CORS).
  - The `content` object (that offered `content.fetch`, `content.XMLHttpRequest`, and `content.WebSocket`) is removed from the content script execution environment.
- Addition of the {{WebExtAPIRef("storage.StorageArea.onChanged")}} event that enables you to listen for changes in content in the `local` and `sync` storage areas ({{bug(1758475)}}).

#### Removals

### Other

## Older versions

{{Firefox_for_developers(100)}}
