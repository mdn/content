---
title: Firefox 144 for developers
short-title: Firefox 144 (Nightly)
slug: Mozilla/Firefox/Releases/144
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 144 that affect developers.
Firefox 144 is the current [Nightly version of Firefox](https://www.firefox.com/en-US/channel/desktop/#nightly) and ships on [October 14, 2025](https://whattrainisitnow.com/release/?version=144).

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

- Adds the ability to specify the style origin for CSS injections from [`"content_scripts"` manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts), in {{WebExtAPIRef("scripting.registerContentScripts()")}} with the `cssOrigin` property on {{WebExtAPIRef("scripting.RegisteredContentScript")}}, and the `cssOrigin` property in {{WebExtAPIRef("contentScripts.register")}}. The style origin can be `"user"`, to add the CSS as a user stylesheet, or `"author"`, to add it as an author stylesheet. Default, to the `"author"` origin. These properties are case-insensitive. In addition, the value of the [`origin`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) property of {{WebExtAPIRef("scripting.insertCSS()")}} is now case insensitive. ([Firefox bug 1679997](https://bugzil.la/1679997))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 144 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
