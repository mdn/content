---
title: Firefox 147 release notes for developers (Nightly)
short-title: Firefox 147 (Nightly)
slug: Mozilla/Firefox/Releases/147
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 147 that affect developers.
Firefox 147 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [January 13, 2026](https://whattrainisitnow.com/release/?version=147).

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

<!-- ### APIs -->

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

- When using [navigator.clipboard.readText()](/en-US/docs/Web/API/Clipboard/readText) or [navigator.clipboard.read()](/en-US/docs/Web/API/Clipboard/read) without the `clipboardRead` permission, a clipboard paste button is displayed to obtain user confirmation. If the extension has `clipboardRead` permission, it reads the clipboard data without user confirmation. For more information on working with the clipboard in extensions, see [Interact with the clipboard](/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard). ([Firefox bug 1773681](https://bugzil.la/1773681))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 147 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
