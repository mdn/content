---
title: Firefox 94 for developers
slug: Mozilla/Firefox/Releases/94
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 94 that will affect developers. Firefox 94 was released on November 2nd, 2021

## Changes for web developers

### HTML

No notable changes

### CSS

No notable changes

### JavaScript

No notable changes

### APIs

- The {{domxref("structuredClone()")}} global function is now supported for copying complex JavaScript objects ([Firefox bug 1722576](https://bugzil.la/1722576)).

#### DOM

- Developers can now provide a hint for the enter key label/icon used on virtual keyboards, using either [`HTMLElement.enterkeyhint`](/en-US/docs/Web/API/HTMLElement/enterKeyHint) or the global attribute [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) ([Firefox bug 1648332](https://bugzil.la/1648332)).
- The {{domxref("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}} static method is now supported. This provides a simple and unified method for feature checking whether a browser supports particular types of scripts, such as JavaScript modules or classic scripts ([Firefox bug 1729239](https://bugzil.la/1729239)).
- The {{domxref("ShadowRoot.delegatesFocus")}} property is now supported, allowing code to check whether the `delegatesFocus` property was set when the [shadow DOM was attached](/en-US/docs/Web/API/Element/attachShadow) ([Firefox bug 1413836](https://bugzil.la/1413836)).

### WebDriver conformance (Marionette)

- `WebDriver:GetWindowHandle` and `WebDriver:GetWindowHandles` now return handles for browser windows instead of tabs, when chrome scope is enabled ([Firefox bug 1729291](https://bugzil.la/1729291))

### HTTP

- The `cache` directive of the [`Clear-Site-Data`](/en-US/docs/Web/HTTP/Headers/Clear-Site-Data) response header has been disabled by default.
  It can be enabled using the preference `privacy.clearsitedata.cache.enabled` ([Firefox bug 1729291](https://bugzil.la/1729291)).

## Changes for add-on developers

- Support for `partitionKey`, the first-party URL of a cookie when it's in storage that is partitioned by top-level site, is added to {{WebExtAPIRef('cookies.get')}}, {{WebExtAPIRef('cookies.getAll')}}, {{WebExtAPIRef('cookies.set')}}, {{WebExtAPIRef('cookies.remove')}}, and {{WebExtAPIRef('cookies.cookie')}}. ([Firefox bug 1669716](https://bugzil.la/1669716))
- When a context menu is activated, {{WebExtAPIRef('menus.OnClickData','menus.OnClickData.srcUrl')}} returns the raw value of the `src` attribute of the clicked element, instead of the current URL (after redirects). ([Firefox bug 1659155](https://bugzil.la/1659155))

## Older versions

{{Firefox_for_developers(93)}}
