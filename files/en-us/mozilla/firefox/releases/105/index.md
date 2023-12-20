---
title: Firefox 105 for developers
slug: Mozilla/Firefox/Releases/105
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 105 that affect developers. Firefox 105 was released on September 20, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

- Embedded content, such as SVG definitions and content in an [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), now respects the theme preferences of the elements in which it is embedded, rather than OS or browser preferences (which may be different).
  Specifically, embedded content now inherits the [`color-scheme`](/en-US/docs/Web/CSS/color-scheme) of the embedding element, and [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media queries in the embedded content respect this value rather than the OS/browser level theme setting ([Firefox bug 1779457](https://bugzil.la/1779457)).

### JavaScript

- Range restrictions have been relaxed on `formatRange` and `selectRange` functions for [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), [`Intl.NumberFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), and [`Intl.PluralRules`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) objects. This change now allows negative ranges ([Firefox bug 1780545](https://bugzil.la/1780545)).

### APIs

#### DOM

- The [TextDecoderStream](/en-US/docs/Web/API/TextDecoderStream) and [TextEncoderStream](/en-US/docs/Web/API/TextEncoderStream) interfaces, part of the [Encoding API](/en-US/docs/Web/API/Encoding_API), are now supported ([Firefox bug 1486949](https://bugzil.la/1486949)).

- The [OffscreenCanvas](/en-US/docs/Web/API/OffscreenCanvas) API provides a canvas that can be rendered off-screen in both window and [web worker](/en-US/docs/Web/API/OffscreenCanvas#asynchronous_display_of_frames_produced_by_an_offscreencanvas) contexts.
  This allows `<canvas>` elements to be decoupled from the DOM. The [OffscreenCanvasRenderingContext2D](/en-US/docs/Web/API/OffscreenCanvasRenderingContext2D) interface provides support for this and is now enabled by default ([Firefox bug 1779009](https://bugzil.la/1779009)).

- The [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API) can now be used in worker threads ([Firefox bug 1072107](https://bugzil.la/1072107)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- On systems with IPv6 preferred DNS resolution clients will no longer fail to connect when `localhost` is used as host for the WebSocket server ([Firefox bug 1769994](https://bugzil.la/1769994)).

- Improved `RemoteValue` support to allow plain JS objects with simple JSON-serializable fields to be serialized ([Firefox bug 1779226](https://bugzil.la/1779226)).

#### Marionette

- The `WebDriver:GetElementProperty` command is now able to return node properties as set by web content ([Firefox bug 1398792](https://bugzil.la/1398792)).

## Changes for add-on developers

- Support for defining persistent scripts using {{WebExtAPIRef("scripting")}} has been added. A script is identified as persistent using the `persistAcrossSessions` property in {{WebExtAPIRef("scripting.RegisteredContentScript")}} ([Firefox bug 1751436](https://bugzil.la/1751436)).
- An extension's resources can no longer be loaded by other extensions by default. To enable other extensions to load resources they must be listed in the extension's [`web_accessible_resources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) manifest key ([Firefox bug 1711168](https://bugzil.la/1711168)).

## Older versions

{{Firefox_for_developers(104)}}
