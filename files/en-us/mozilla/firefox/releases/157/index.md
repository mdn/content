---
title: Firefox 157 release notes for developers (Nightly)
short-title: Firefox 157 (Nightly)
slug: Mozilla/Firefox/Releases/157
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 157 that affect developers.
Firefox 157 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [September 29, 2026](https://whattrainisitnow.com/release/?version=157).

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

- [`alarms.clearAll()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/clearAll) now fulfills its promise with `undefined` instead of a boolean. Extensions that relied on the fulfillment value to determine whether any alarms were cleared should call [`alarms.getAll()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/alarms/getAll) instead. ([Firefox bug 2067229](https://bugzil.la/2067229))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 157 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
