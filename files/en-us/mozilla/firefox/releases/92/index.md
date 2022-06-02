---
title: Firefox 92 for developers
slug: Mozilla/Firefox/Releases/92
tags:
  - '92'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 92 that will affect developers. Firefox 92 was released on September 7, 2021.

> **Note:** See also [Time for a review of Firefox 92](https://hacks.mozilla.org/2021/09/time-for-a-review-of-firefox-92/) on Mozilla Hacks.

## Changes for web developers

### HTML

No changes

### CSS

- The keywords `avoid-page` and `avoid-column` are now supported for the {{cssxref("break-inside")}} property ({{bug(1722945)}}).
- The two-value syntax for the {{cssxref("font-size-adjust")}} property is now supported ({{bug(1720131)}}).
- The {{cssxref("@font-face/size-adjust")}} descriptor is now supported ({{bug(1720131)}}).
- The CSS {{cssxref("accent-color")}} property has been implemented ({{bug(1722031)}}).
- The `system-ui` value is now supported for the {{cssxref("font-family")}} property ({{bug(1226042)}}).

### JavaScript

- {{jsxref("Object.hasOwn()")}} can be used to test whether a property was defined on an object or inherited ({{bug(1721149)}}).
- The default 5MB storage quota is now available to each origin. The quota previously applied to an entire domain group (also known as eTLD+1 domain; e.g., `*.wikipedia.org`). ({{bug(1064466)}}).
- Storage quotas for {{domxref("Window.localStorage")}} are now shared with [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) and {{domxref("Cache", "Cache API")}} ({{bug(742822)}}).

### HTTP

- Firefox will automatically upgrade an HTTP request to HTTPS when a usable {{Glossary("HTTPS RR")}} is available.
  It will also use information provided in an _HTTPS RR_ to optimize the process of establishing HTTPS connections⁠—this is conceptually similar to using the {{HTTPHeader("Alt-Svc")}} header.
  ({{bug(1721132)}}).

### APIs

- The `disabledFeatures` static property has been implemented for Custom Elements ({{bug(1723396)}}).

#### DOM

- The [Imperative Slotting API](/en-US/docs/Web/API/HTMLSlotElement) (part of the [Shadow Dom API](/en-US/docs/Web/Web_Components/Using_shadow_DOM)) Has been implemented. ({{bug(1705141)}})
- You can now monitor for changes to text selections in {{HTMLElement("input")}} or {{HTMLElement("textarea")}} by listening for `selectionchange` events in {{domxref("HTMLInputElement.selectionchange_event", "HTMLInputElement")}} and {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}}, respectively ({{bug(1648944)}}).

#### Media, WebRTC, and Web Audio

- Access to audio output devices, like speakers and headphones, is now protected by the [speaker-selection](speaker-selection) feature policy ({{bug(1577199)}}).

### WebDriver conformance (Marionette)

- Improved support for the `webSocketUrl` capability, which now returns the WebDriver BiDi websocket URL if `true` was passed and if BiDi is supported. ({{bug(1692984)}}).

## Changes for add-on developers

- Support for `cookieStoreId` is added to {{WebExtAPIRef('downloads.download')}}, {{WebExtAPIRef('downloads.DownloadQuery')}}, and {{WebExtAPIRef('downloads.DownloadItem')}}. The addition to the types {{WebExtAPIRef('downloads.DownloadQuery')}} and {{WebExtAPIRef('downloads.DownloadItem')}} provides support in {{WebExtAPIRef('downloads.search')}} and {{WebExtAPIRef('downloads.erase')}}. Web extensions can now associate downloads with specific cookie stores, such as container tabs ([contextual identities](/en-US/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)). ({{bug(1669566)}})

## Older versions

{{Firefox_for_developers(91)}}
