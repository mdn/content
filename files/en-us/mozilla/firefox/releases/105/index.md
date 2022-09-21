---
title: Firefox 105 for developers
slug: Mozilla/Firefox/Releases/105
tags:
  - "105"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 105 that will affect developers. Firefox 105 was released on September 20, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

- Embedded content, such as SVG definitions and content in an [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), now respects the theme preferences of the elements in which it is embedded, rather than OS or browser preferences (which may be different).
  Specifically, embedded content now inherits the [`color-scheme`](/en-US/docs/Web/CSS/color-scheme) of the embedding element, and [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media queries in the embedded content respect this value rather than the OS/browser level theme setting ({{bug(1779457)}}).

### JavaScript

No notable changes.

### APIs

#### DOM

- The [TextDecoderStream](/en-US/docs/Web/API/TextDecoderStream) and [TextEncoderStream](/en-US/docs/Web/API/TextEncoderStream) interfaces, part of the [Encoding API](/en-US/docs/Web/API/Encoding_API), are now supported ({{bug(1486949)}}).


### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- On systems with IPv6 preferred DNS resolution clients will no longer fail to connect when `localhost` is used as host for the WebSocket server ({{bug("1769994")}}).

- Improved `RemoteValue` support to allow plain JS objects with simple JSON-serializable fields to be serialized ({{bug("1779226")}}).

#### Marionette

- The `WebDriver:GetElementProperty` command is now able to return node properties as set by web content ({{bug("1398792")}}).

## Changes for add-on developers

- Support for defining persistent scripts using {{WebExtAPIRef("scripting")}} has been added. A script is identified as persistent using the `persistAcrossSessions` property in {{WebExtAPIRef("scripting.RegisteredContentScript")}} ({{bug("1751436")}}).


## Older versions

{{Firefox_for_developers(104)}}
