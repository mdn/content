---
title: Firefox 153 release notes for developers (Nightly)
short-title: Firefox 153 (Nightly)
slug: Mozilla/Firefox/Releases/153
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 153 that affect developers.
Firefox 153 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [July 21, 2026](https://whattrainisitnow.com/release/?version=153).

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

- Supports the {{WebExtAPIRef("userScripts.execute()")}} method, enabling extensions to inject user scripts on demand into a tab or frame. Unlike {{WebExtAPIRef("userScripts.register()")}}, this method supports one-off injection of multiple script sources executed in a defined order. ([Firefox bug 1930776](https://bugzil.la/1930776))
- Extension content scripts can now read and modify constructed stylesheets in {{domxref("document.adoptedStyleSheets")}} and {{domxref("ShadowRoot.adoptedStyleSheets")}}, without `.wrappedJSObject`. ([Firefox bug 1751346](https://bugzil.la/1751346))
- Adds the {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} and {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} methods to retrieve the colors and icons available for contextual identities (containers). ([Firefox bug 2044712](https://bugzil.la/2044712))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 153 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
