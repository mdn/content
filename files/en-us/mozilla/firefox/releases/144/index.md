---
title: Firefox 144 for developers
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 144 that affect developers.
Firefox 144 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [October 14, 2025](https://whattrainisitnow.com/release/?version=144).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

### MathML

#### Removals

- Support for the deprecated MathML STIXGeneral font has now been removed. The setting `mathml.stixgeneral_operator_stretching.disabled` has also been removed. ([Firefox bug 1336058](https://bugzil.la/1336058)).

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The [`lock()`](/en-US/docs/Web/API/ScreenOrientation/lock) and [`unlock()`](/en-US/docs/Web/API/ScreenOrientation/unlock) methods of the {{domxref("ScreenOrientation")}} interface are now supported for Android and for Windows tablets. ([Firefox bug 1983483](https://bugzil.la/1983483))

#### DOM

- The `moveBefore()` method is now supported on the {{domxref("Element.moveBefore()","Element")}}, {{domxref("DocumentFragment.moveBefore()","DocumentFragment")}} and {{domxref("Document.moveBefore()","Document")}} interfaces. This allows moving of an immediate child element of the object, before another of its child elements. Unlike with {{domxref("Node.insertBefore()")}}, moved elements retain their state. ([Firefox bug 1983688](https://bugzil.la/1983688)).

#### Media, WebRTC, and Web Audio

- Cross-origin {{htmlelement("iframe")}}s now require either user interaction ({{glossary("sticky activation")}}) or explicit permission to redirect the top-level page using `window.top.location`.
  See [Top navigation in cross-origin frames](/en-US/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) for more information. ([Firefox bug 1419501](https://bugzil.la/1419501)).
- {{domxref("RTCDataChannel")}} instances are now [transferrable objects](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects), and hence can be passed to [workers](/en-US/docs/Web/API/Worker). ([Firefox bug 1209163](https://bugzil.la/1209163)).
- The [`closing` event](/en-US/docs/Web/API/RTCDataChannel/closing_event) and the `onclosing()` event handler are now supported on the {{domxref("RTCDataChannel")}} interface. ([Firefox bug 1611953](https://bugzil.la/1611953)).
- The {{domxref("MediaDevices/getUserMedia","getUserMedia()")}} and {{domxref("MediaDevices/getDisplayMedia","getDisplayMedia()")}} methods of the {{domxref("MediaDevices")}} interface now support the [`resizeMode`](/en-US/docs/Web/API/MediaTrackConstraints#resizemode) constraint.
  This constraint allows developers to request video that matches other constraints, such as resolution and frame rate, even if the requested constraints are not supported by the underlying hardware.
  The browser may then crop, downscale, or reduce the frame rate of the video captured from a camera, or downscale (but not crop) the video captured from a screen or window. ([Firefox bug 1286945](https://bugzil.la/1286945)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Adds the ability to determine the priority of CSS injected from the [`"content_scripts"` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), in {{WebExtAPIRef("scripting.registerContentScripts()")}} with the `cssOrigin` property on {{WebExtAPIRef("scripting.RegisteredContentScript")}}, and the `cssOrigin` property in {{WebExtAPIRef("contentScripts.register")}}. By default, the `"author"` origin takes precedence. ([Firefox bug 1679997](https://bugzil.la/1679997))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 144 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
