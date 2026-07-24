---
title: Firefox 154 release notes for developers (Beta)
short-title: Firefox 154 (Beta)
slug: Mozilla/Firefox/Releases/154
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 154 that affect developers.
Firefox 154 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [August 18, 2026](https://whattrainisitnow.com/release/?version=154).

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

<!-- #### DOM -->

#### Media, WebRTC, and Web Audio

- The {{domxref("RTCDtlsTransport/error_event", "error")}} event is now fired on {{domxref("RTCDtlsTransport")}} to report DTLS and fingerprinting errors.
  ([Firefox bug 1805447](https://bugzil.la/1805447)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Adds support for the [`sandbox`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sandbox) manifest key, enabling extensions to designate pages that load with an opaque origin. A sandboxed page can use `eval()` and similar constructs that are otherwise blocked by the extension's [content security policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy). The sandboxed page can only access WebExtension APIs or the rest of the extension through {{domxref("Window.postMessage()")}}. ([Firefox bug 1685123](https://bugzil.la/1685123))

## Experimental web features

These features are shipping in Firefox 154 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
