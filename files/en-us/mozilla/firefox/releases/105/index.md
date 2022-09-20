---
title: Firefox 105 for developers
slug: Mozilla/Firefox/Releases/105
tags:
  - '105'
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 105 that will affect developers. Firefox 105 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [September 20, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

- The [TextDecoderStream](/en-US/docs/Web/API/TextDecoderStream) and [TextEncoderStream](/en-US/docs/Web/API/TextEncoderStream) interfaces, part of the [Encoding API](/en-US/docs/Web/API/Encoding_API), are now supported ({{bug(1486949)}}).

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- On systems with IPv6 preferred DNS resolution clients will no longer fail to connect when `localhost` is used as host for the WebSocket server ({{bug("1769994")}}).

- Improved `RemoteValue` support to allow plain JS objects with simple JSON-serializable fields to be serialized ({{bug("1779226")}}).

#### Marionette

- The `WebDriver:GetElementProperty` command is now able to return node properties as set by web content ({{bug("1398792")}}).

## Changes for add-on developers

- Support for defining persistent scripts using {{WebExtAPIRef("scripting")}} has been added. A script is identified as persistent using the `persistAcrossSessions` property in {{WebExtAPIRef("scripting.RegisteredContentScript")}} ({{bug("1751436")}}).

### Removals

### Other

## Older versions

{{Firefox_for_developers(104)}}
