---
title: Firefox 142 for developers
short-title: Firefox 142 (Beta)
slug: Mozilla/Firefox/Releases/142
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 142 that affect developers.
Firefox 142 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [August 19, 2025](https://whattrainisitnow.com/release/?version=142).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

#### DOM

- The {{domxref("Selection.getComposedRanges()")}} method is now supported, allowing developers to accurately get selected text ranges across shadow DOM boundaries. In addition, the methods {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}, {{domxref("Selection.collapse()","collapse()")}}, and {{domxref("Selection.extend()","extend()")}} of the {{domxref("Selection")}} interface have been modified to accept nodes inside a shadow root. ([Firefox bug 1903870](https://bugzil.la/1903870)).

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Cookies created with {{WebExtAPIRef("cookies.set()")}} in Nightly are now validated, and invalid cookies are rejected. The implementation in Nightly is to enable monitoring for any issues. The intention is to enforce validation in all channels in a future release. ([Firefox bug 1976197](https://bugzil.la/1976197))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 142 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
