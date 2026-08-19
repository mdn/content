---
title: Firefox 155 release notes for developers (Beta)
short-title: Firefox 155 (Beta)
slug: Mozilla/Firefox/Releases/155
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 155 that affect developers.
Firefox 155 is the current [Beta version of Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) and ships on [September 1, 2026](https://whattrainisitnow.com/release/?version=155).

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

#### DOM

- The {{domxref("SVGNumberList")}}, {{domxref("SVGPointList")}}, {{domxref("SVGStringList")}}, and {{domxref("SVGTransformList")}} interfaces now support indexed setters, so an item in the list can be replaced using bracket notation, such as `transformList[0] = newTransform`, instead of calling {{domxref("SVGTransformList.replaceItem", "replaceItem()")}}.
  The {{domxref("SVGLengthList")}} interface already supported this.
  ([Firefox bug 2059426](https://bugzil.la/2059426)).

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

These features are shipping in Firefox 155 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.
