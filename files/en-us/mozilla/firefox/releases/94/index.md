---
title: Firefox 94 for developers
slug: Mozilla/Firefox/Releases/94
tags:
  - '94'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 94 that will affect developers. Firefox 94 was released on November 2nd, 2021

## Changes for web developers

### HTML

No notable changes

### CSS

- The [`@import`](/en-US/docs/Web/CSS/@import) rule now supports the `layer()` function, which specifies a cascade layer defined using the [`@layer`](/en-US/docs/Web/CSS/@layer) rule ({{bug(1699217)}}).

### JavaScript

No notable changes

### APIs

- The {{domxref("structuredClone()")}} global function is now supported for copying complex JavaScript objects ({{bug(1722576)}}).

#### DOM

- Developers can now provide a hint for the enter key label/icon used on virtual keyboards, using either [`HTMLElement.enterkeyhint`](/en-US/docs/Web/API/HTMLElement/enterkeyhint) or the global attribute [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) ({{bug(1648332)}}).
- The {{domxref("HTMLScriptElement.supports()")}} static method is now supported. This provides a simple and unified method for feature checking whether a browser supports particular types of scripts, such as JavaScript modules or classic scripts ({{bug(1729239)}}).
- The {{domxref("ShadowRoot.delegatesFocus")}} property is now supported, allowing code to check whether the `delegatesFocus` property was set when the [shadow DOM was attached](/en-US/docs/Web/API/Element/attachShadow) ({{bug(1413836)}}).

### WebDriver conformance (Marionette)

- `WebDriver:GetWindowHandle` and `WebDriver:GetWindowHandles` now return handles for browser windows instead of tabs, when chrome scope is enabled ({{bug(1729291)}})

## Changes for add-on developers

- Support for `partitionKey`, the first-party URL of a cookie when it's in storage that is partitioned by top-level site, is added to {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, and {{WebExtAPIRef('cookies.cookie')}}. ({{bug(1669716)}})

## Older versions

{{Firefox_for_developers(93)}}
