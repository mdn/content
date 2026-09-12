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

### CSS

- The non-standard {{cssxref("::-webkit-scrollbar")}} pseudo-element is now reported as unsupported in {{cssxref("@supports")}} conditions on every site, so `@supports selector(::-webkit-scrollbar)` returns `false` and `@supports not (selector(::-webkit-scrollbar))` returns `true`. This includes the sites listed in the `layout.css.fake-webkit-scrollbar.enabled-domains` preference introduced in [Firefox 155](/en-US/docs/Mozilla/Firefox/Releases/155#css). Firefox still acts on `::-webkit-scrollbar` rules on those sites, but it no longer reports the pseudo-element as supported. Sites use this check as a signal that the whole `::-webkit-scrollbar-*` family is supported, but Firefox doesn't doesn't support the other pseudo-elements in this family. Sites that guard their standard scrollbar styles behind `@supports not (selector(::-webkit-scrollbar))` now get those styles applied in Firefox. ([Firefox bug 2062782](https://bugzil.la/2062782)).

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
