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

<!-- ### SVG -->

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
- The [Clipboard API](/en-US/docs/Web/API/Clipboard_API) now supports [custom clipboard formats](/en-US/docs/Web/API/Clipboard_API#custom_clipboard_formats), which allow web apps to write and read their own data formats using {{domxref("Clipboard.write()")}} and {{domxref("Clipboard.read()")}}.
  A custom format is a MIME type prefixed with `"web "`, such as `"web text/x-my-format"`.
  Custom formats can only be read by a page that is same-origin with the page that wrote them.
  ([Firefox bug 2053725](https://bugzil.la/2053725), [Firefox bug 2086505](https://bugzil.la/2086505)).

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
