---
title: Firefox 157 release notes for developers (Beta)
short-title: Firefox 157 (Beta)
slug: Mozilla/Firefox/Releases/157
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 157 that affect developers.
Firefox 157 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [September 29, 2026](https://whattrainisitnow.com/release/?version=157).

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

- The [`at-rule()`](/en-US/docs/Web/CSS/Reference/At-rules/@supports#at-rule) function in the {{cssxref("@supports")}} at-rule lets you test whether the browser supports a given CSS at-rule, for example @supports at-rule(@scope). It also works in the [`supports()`](/en-US/docs/Web/CSS/Reference/At-rules/@import#supports-condition) function of {{cssxref("@import")}} CSS at-rule. ([Firefox bug 2060755](https://bugzil.la/2060755)).
- The {{cssxref("overscroll-behavior")}} shorthand property and the {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-x")}} and {{cssxref("overscroll-behavior-y")}} longhand properties now support the [`chain`](/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior#chain) value. This gives all the options for controlling what happens when an in page element has scroll. The `chain` value adds the ability for the scroll to pass to another scrollable area, but does not allow the browsers default behavior (such as "bounce") when reaching the boundary. ([Firefox bug 2036966](https://bugzil.la/2036966)).

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- The [WebGPU](/en-US/docs/Web/API/WebGPU_API) `TRANSIENT_ATTACHMENT` [texture usage type](/en-US/docs/Web/API/GPUTexture/usage#value) is now supported. This enables creating memory-efficient attachments that are only used within the current render pass. Related render pass operations stay in tile memory, which avoids VRAM traffic and can avoid VRAM allocation for the textures. ([Firefox bug 2005061](https://bugzil.la/2005061)).

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

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 157 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
