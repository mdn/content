---
title: Firefox 158 release notes for developers (Beta)
short-title: Firefox 158 (Beta)
slug: Mozilla/Firefox/Releases/158
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 158 that affect developers.
Firefox 158 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [October 13, 2026](https://whattrainisitnow.com/release/?version=158).

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

- {{domxref("WebTransport.getStats()")}} is now supported, and returns statistics for the transport's underlying connection and its datagrams. ([Firefox bug 2007202](https://bugzil.la/2007202)).

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

- {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}} now throws an error when passed an invalid hostname, instead of returning `false`. ([Firefox bug 2066620](https://bugzil.la/2066620))
- Adds [`runtime.getVersion()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/getVersion) to return the extension's version as declared in the manifest. ([Firefox bug 1992418](https://bugzil.la/1992418))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 158 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
