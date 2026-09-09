---
title: Firefox 156 release notes for developers (Beta)
short-title: Firefox 156 (Beta)
slug: Mozilla/Firefox/Releases/156
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 156 that affect developers.
Firefox 156 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [September 15, 2026](https://whattrainisitnow.com/release/?version=156).

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

- The [`theme`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest key adds the `backgrounds_area` property. This property enables a theme to specify where its background images and gradients are drawn. Setting it to `"window"` draws them across the whole browser window, while `"top_toolbars"` restricts them to the horizontal toolbars at the top of the window. When `backgrounds_area` is omitted or set to `"auto"`, Firefox chooses the area based on `properties.additional_backgrounds_alignment`. ([Firefox bug 2059526](https://bugzil.la/2059526))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 156 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
