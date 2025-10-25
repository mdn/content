---
title: Firefox 146 release notes for developers (Nightly)
short-title: Firefox 146 (Nightly)
slug: Mozilla/Firefox/Releases/146
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 146 that affect developers.
Firefox 146 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [December 9, 2025](https://whattrainisitnow.com/release/?version=146).

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

<!-- No notable changes. -->

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

- {{WebExtAPIRef("browsingData.removeLocalStorage")}} and {{WebExtAPIRef("browsingData.remove")}} (when `localStorage` is set in {{WebExtAPIRef("browsingData.DataTypeSet")}}) now delete objects from [sessionStorage](/en-US/docs/Web/API/Window/sessionStorage). ([Firefox bug 1886894](https://bugzil.la/1886894))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 146 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
