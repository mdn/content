---
title: Firefox 160 release notes for developers (Beta)
short-title: Firefox 160 (Beta)
slug: Mozilla/Firefox/Releases/160
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 160 that affect developers.
Firefox 160 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [November 10, 2026](https://whattrainisitnow.com/release/?version=160).

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

- The {{domxref("WebTransport.WebTransport", "WebTransport()")}} constructor now accepts the [`headers`](/en-US/docs/Web/API/WebTransport/WebTransport#headers) option, which adds custom HTTP headers to the [extended `CONNECT`](/en-US/docs/Web/HTTP/Reference/Methods/CONNECT#extended_connect) request that sets up the session.
  The headers that the server sends in its response are available in the {{domxref("WebTransport.responseHeaders")}} property once the session is established.
  ([Firefox bug 2081470](https://bugzil.la/2081470), [Firefox bug 2033220](https://bugzil.la/2033220)).

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

- {{WebExtAPIRef("runtime.PlatformInfo")}} now returns `arch` as `arm64` for ARM64 platforms. Previously, it returned `aarch64`. This aligns the value returned by Firefox for ARM64 platforms with Chrome. ([Firefox bug 2080310](https://bugzil.la/2080310))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 160 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
