---
title: Firefox 94 for developers
slug: Mozilla/Firefox/Releases/94
tags:
  - '94'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 94 that will affect developers. Firefox 94 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), and will ship on [November 1, 2021](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

- The {{domxref("structuredClone()")}} global function is now supported for copying complex JavaScript objects ({{bug(1722576)}}).

#### DOM

- Developers can now provide a hint for the enter key label/icon used on virtual keyboards, using either [`HTMLElement.enterkeyhint`](/en-US/docs/Web/API/HTMLElement/enterkeyhint) or the global attribute [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) ({{bug(1648332)}}).
- The {{domxref("HTMLScriptElement.supports()")}} static method is now supported. This provides a simple and unified method for feature checking whether a browser supports particular types of scripts, such as JavaScript modules or classic scripts ({{bug(1729239)}}).
- The {{domxref("ShadowRoot.delegatesFocus")}} property is now supported, allowing code to check whether the `delegatesFocus` property was set when the [shadow DOM was attached](/en-US/docs/Web/API/Element/attachShadow) ({{bug(1413836)}}).

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

- `WebDriver:GetWindowHandle` and `WebDriver:GetWindowHandles` now return handles for browser windows instead of tabs, when chrome scope is enabled ({{bug(1729291)}})

#### Removals

## Changes for add-on developers

- Support for `partitionKey`, the first-party URL of a cookie when it's in storage that is partitioned by top-level site, is added to {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, and {{WebExtAPIRef('cookies.cookie')}}. ({{bug(1669716)}})

#### Removals

### Other

## Older versions

{{Firefox_for_developers(93)}}
