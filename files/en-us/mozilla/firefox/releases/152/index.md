---
title: Firefox 152 release notes for developers (Beta)
short-title: Firefox 152 (Beta)
slug: Mozilla/Firefox/Releases/152
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 152 that affect developers.
Firefox 152 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [June 16, 2026](https://whattrainisitnow.com/release/?version=152).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

### Developer Tools

- The developer tools now have a "Show comments" option to toggle the display of HTML comment nodes in the Inspector.
  This option can be found in the [Settings panel](https://firefox-source-docs.mozilla.org/devtools-user/settings/index.html#settings-inspector).
  ([Firefox bug 1455294](https://bugzil.la/1455294)).

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

### SVG

- The {{domxref("SVGTextPathElement.side")}} read-only property is now supported, indicating whether text is drawn on the left-hand side or right-hand side of a text path.
  This reflects the corresponding [`side`](/en-US/docs/Web/SVG/Reference/Attribute/side) attribute on the [`<textPath>`](/en-US/docs/Web/SVG/Reference/Element/textPath) element.
  ([Firefox bug 2034371](https://bugzil.la/2034371)).

<!-- #### Removals -->

### CSS

- The {{cssxref("field-sizing")}} CSS property lets you control the sizing behavior of form control elements. This property has two values: `content` allows elements to adjust in size to fit their content, and `fixed` sets a fixed size on elements.
  ([Firefox bug 2036620](https://bugzil.la/2036620)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("PerformanceResourceTiming.firstInterimResponseStart","firstInterimResponseStart")}} and {{domxref("PerformanceResourceTiming.finalResponseHeadersStart","finalResponseHeadersStart")}} properties of the {{domxref("PerformanceResourceTiming")}} interface are supported.
  These can be used to measure how long it takes for the browser to receive interim HTTP responses and the final HTTP response after sending a request, respectively.
  ([Firefox bug 2006340](https://bugzil.la/2006340)).
- The {{domxref("AnimationEvent.animation")}} and {{domxref("TransitionEvent.animation")}} properties are now supported.
  These provide a more ergonomic way to access the associated animation than calling {{domxref("element.getAnimations()")}} and filtering on the event's `animationName` or `propertyName`.
  ([Firefox bug 1929118](https://bugzil.la/1929118)).

#### DOM

- Notification actions are supported. This includes the {{domxref("ServiceWorkerRegistration.showNotification#actions", "actions")}} parameter of {{domxref("ServiceWorkerRegistration.showNotification()")}}, and the {{domxref("Notification/actions","actions")}} read-only property and the [`maxActions`](/en-US/docs/Web/API/Notification/maxActions_static) static read-only property of the {{domxref("Notification")}} interface.
  This allows you to include action buttons on device notifications, and react to when they're pressed.
  ([Firefox bug 1959931](https://bugzil.la/1959931)).
- The {{domxref("Element.getAnimations()")}} method can now accept the [`options.pseudoElement`](/en-US/docs/Web/API/Element/getAnimations#pseudoelement) parameter.
  This allows you to directly target a specific pseudo-element, rather than filtering the results of `{ subtree: true }`.
  ([Firefox bug 1935557](https://bugzil.la/1935557)).
- The {{domxref("Element.requestPointerLock()")}} method now supports the [`options.unadjustedMovement`](/en-US/docs/Web/API/Element/requestPointerLock#unadjustedmovement) parameter.
  This allows code to disable OS-level mouse acceleration and use raw mouse input instead, which is useful in cases where slow and precise control over mouse movement is needed.
  ([Firefox bug 2037802](https://bugzil.la/2037802)).

#### Media, WebRTC, and Web Audio

- The `receiveTime` property is now included in the metadata returned from [`RTCEncodedVideoFrame.getMetadata()`](/en-US/docs/Web/API/RTCEncodedVideoFrame/getMetadata#receivetime) and [`RTCEncodedAudioFrame.getMetadata()`](/en-US/docs/Web/API/RTCEncodedAudioFrame/getMetadata#receivetime), and can be passed to the [`RTCEncodedVideoFrame()`](/en-US/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) and [`RTCEncodedAudioFrame()`](/en-US/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) constructors as a property in the `options` parameter.
  ([Firefox bug 2033420](https://bugzil.la/2033420)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Improved the Marionette and WebDriver BiDi screenshot commands to enforce maximum allowed dimensions. ([Firefox bug 2020302](https://bugzil.la/2020302)).

#### WebDriver BiDi

- Extended the `webExtension.install` command to support installing web extensions in Firefox enabled in Private Browsing mode. ([Firefox bug 1947679](https://bugzil.la/1947679)).
- Improved the `browser.setDownloadBehavior` command to allow overriding the download target folder before the temporary file is created. ([Firefox bug 2017252](https://bugzil.la/2017252)).
- Fixed network events to only forward in-memory cached JavaScript responses when there is a matching network event collector, avoiding unnecessary data forwarding. ([Firefox bug 2018237](https://bugzil.la/2018237)).

#### Marionette

- Improved the `WebDriver:Navigate` and `WebDriver:Refresh` commands to properly report errors when triggering the navigation fails, instead of silently ignoring them. ([Firefox bug 2033769](https://bugzil.la/2033769)).

## Changes for add-on developers

- The ability of extensions to dynamically execute code in their `moz-extension:` documents with {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, and {{WebExtAPIRef("scripting.removeCSS")}} has been removed. This feature was deprecated in Firefox 149. ([Firefox bug 2015559](https://bugzil.la/2015559))

  As an alternative, an extension can run code in its documents dynamically by registering a {{WebExtAPIRef("runtime.onMessage")}} listener in the document's script, then sending a message to trigger execution of the required code.

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 152 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Check if a media encoding/decoding configuration is supported for WebRTC**: `media.mediacapabilities.webrtc.enabled`

  The `webrtc` type can now be passed as an option for [`MediaCapabilities.decodingInfo()`](/en-US/docs/Web/API/MediaCapabilities/decodingInfo#webrtc) and [`MediaCapabilities.encodingInfo()`](/en-US/docs/Web/API/MediaCapabilities/encodingInfo#webrtc) to check if an encoding/decoding configuration can be used for WebRTC.
  This replaces the non-standard [`transmission`](/en-US/docs/Web/API/MediaCapabilities/encodingInfo#transmission) type, which was previously used as an alias in Firefox.
  ([Firefox bug 1825286](https://bugzil.la/1825286)).

- **TC39 Iterator includes proposal**: `javascript.options.experimental.iterator_includes`

  The [`Iterator.prototype.includes()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/includes) method tests whether the iterator will produce a specified value.
  ([Firefox bug 2025779](https://bugzil.la/2025779)).

- **TC39 Intl.Locale info proposal**: `javascript.options.experimental.intl_locale_info`

  The [TC39 Intl.Locale info proposal](https://github.com/tc39/proposal-intl-locale-info) is now supported on nightly builds if the preference is enabled.
  This includes all the [`Intl.Locale` instance methods prefixed with "get"](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#instance_methods).
  ([Firefox bug 1693576](https://bugzil.la/1693576)).

- **Text module import**: `javascript.options.experimental.import_text`

  The `with` clause [`{ type: "text" }`](/en-US/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text) allows importing a module's source as a string value.
  The media type of the response is ignored, and the content is parsed as text even if the source contains scripts or other executable code.
  ([Firefox bug 2024854](https://bugzil.la/2024854)).

- **`<timeline-range-name>` values in `@keyframes` selectors**: `layout.css.scroll-driven-animations.enabled`

  The {{cssxref("@keyframes")}} at-rule now supports [`<timeline-range-name>`](/en-US/docs/Web/CSS/Reference/Values/timeline-range-name) values. These [values](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) let you specify the segment within which a scroll-driven animation takes place. ([Firefox bug 1824875](https://bugzil.la/1824875)).
