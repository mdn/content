---
title: Firefox 161 release notes for developers (Beta)
short-title: Firefox 161 (Beta)
slug: Mozilla/Firefox/Releases/161
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 161 that affect developers.
Firefox 161 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [November 24, 2026](https://whattrainisitnow.com/release/?version=161).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

### SVG

- The [`referrerpolicy`](/en-US/docs/Web/SVG/Reference/Attribute/referrerpolicy) attribute is now supported on the {{SVGElement("image")}}, {{SVGElement("script")}}, and {{SVGElement("feImage")}} elements, along with the corresponding {{domxref("SVGImageElement.referrerPolicy")}}, {{domxref("SVGScriptElement.referrerPolicy")}}, and {{domxref("SVGFEImageElement.referrerPolicy")}} properties.
  These control how much referrer information is sent in the {{HTTPHeader("Referer")}} header when the element fetches the resource referenced by its `href` attribute, in the same way as the `referrerpolicy` attribute on the HTML {{HTMLElement("img")}} and {{HTMLElement("script")}} elements.
  ([Firefox bug 2079321](https://bugzil.la/2079321)).

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The {{domxref("WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams", "anticipatedConcurrentIncomingUnidirectionalStreams")}} and {{domxref("WebTransport.anticipatedConcurrentIncomingBidirectionalStreams","anticipatedConcurrentIncomingBidirectionalStreams")}} properties of the `WebTransport` interface are now supported, along with the corresponding `options` properties that can be used to set them in the {{domxref("WebTransport/WebTransport", "WebTransport()")}} constructor.
  These properties represent the maximum number of incoming unidirectional and bidirectional streams, respectively, that the application expects the server to have open at the same time.
  ([Firefox bug 2007825](https://bugzil.la/2007825)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 161 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
