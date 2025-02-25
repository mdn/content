---
title: Firefox 136 for developers
slug: Mozilla/Firefox/Releases/136
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 136 that affect developers. Firefox 136 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [March 4, 2025](https://whattrainisitnow.com/release/?version=136).

## Changes for web developers

### Developer Tools

### HTML

- The [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) global attribute allows autocorrection in editable text elements including: most kinds of text {{htmlelement("input")}} elements, {{htmlelement("textarea")}} elements, and elements that have the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute set. The specific autocorrection behavior depends on the user agent and underlying OS. ([Firefox bug 1927977](https://bugzil.la/1927977)).
- The `plaintext-only` value of the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) global attribute indicates that the element is editable; rich text formatting is disabled and any formatting in pasted text is automatically stripped ([Firefox bug 1922724](https://bugzil.la/1922724)).

#### Removals

### CSS

- The {{CSSXRef(":has-slotted")}} [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is used to style elements in {{HTMLElement("template")}} that have content added to a {{HTMLElement("slot")}} element when rendering a [web component](/en-US/docs/Web/API/Web_components) ([Firefox bug 1940691](https://bugzil.la/1940691)).
- The [`:open`](/en-US/docs/Web/CSS/:open) pseudo-class is now supported and allows you to select any element that is currently in an open state, this applies to the {{htmlelement("details")}}, {{htmlelement("dialog")}}, {{htmlelement("input")}} elements with a picker and {{htmlelement("select")}} elements which present a drop-down box. ([Firefox bug 1936113](https://bugzil.la/1936113)).

#### Removals

### JavaScript

- {{jsxref("Intl.DurationFormat")}} is now supported, enabling locale-sensitive formatting of durations. ([Firefox bug 1933303](https://bugzil.la/1933303)).

#### Removals

### SVG

#### Removals

### HTTP

- The {{httpheader("Referer")}} HTTP header is now sent in requests following a page refresh that redirects to a new page (if permitted by the {{httpheader("Referrer-Policy")}}), and {{domxref("document.referrer")}} will be set to the referrer URL after navigating.
  The page refresh may be triggered by the {{httpheader("Refresh")}} response header, or equivalent {{htmlelement("meta")}} in markup (for example `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />`).
  Note that same-page refreshes are treated as same-page navigation to a page fragment: since the page isn't re-requested, {{httpheader("Referer")}} isn't sent.
  ([Firefox bug 1928291](https://bugzil.la/1928291))

#### Removals

### Security

#### Removals

### APIs

- The maximum size of [Data URLs](/en-US/docs/Web/URI/Schemes/data) has been increased from 32MB to 512MB, matching the limit for Chromium browsers ([Firefox bug 1911300](https://bugzil.la/1911300)).
- The [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API) is a modern, {{glossary("asynchronous")}} {{jsxref("Promise")}}-based method of managing cookies, which can be used in both the main thread and in [service workers](/en-US/docs/Web/API/Service_Worker_API).
  A subset of the Cookie Store API has been implemented ([Firefox bug 1937477](https://bugzil.la/1937477)). This includes:

  - The [`CookieStore`](/en-US/docs/Web/API/CookieStore) interface, for getting, setting, and deleting cookies.
  - The [`Window.cookieStore`](/en-US/docs/Web/API/Window/cookieStore) and [`ServiceWorkerGlobalScope.cookieStore`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) properties for getting `CookieStore` instances.
  - The [`change` event](/en-US/docs/Web/API/CookieStore/change_event) (and its interface [`CookieChangeEvent`](/en-US/docs/Web/API/CookieChangeEvent)), which fires in main thread and service worker contexts when cookies are set or deleted.

  Note that while any of the supported cookie properties can be [set](/en-US/docs/Web/API/CookieStore/get), the cookie objects returned by the [`get()`](/en-US/docs/Web/API/CookieStore/get) and [`getAll()`](/en-US/docs/Web/API/CookieStore/getAll) methods, and in the `change` event, omit all properties other than `name` and `value` (matching the information returned by the {{domxref("document.cookie")}}).
  The following interfaces and properties are not implemented: [`ServiceWorkerRegistration.cookies`](/en-US/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/en-US/docs/Web/API/CookieStoreManager), and [`ExtendableCookieChangeEvent`](/en-US/docs/Web/API/ExtendableCookieChangeEvent).

#### DOM

#### Media, WebRTC, and Web Audio

- WebRTC can now send and receive video encoded using the [AV1 codec](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs#av1_table).
  When sending, it can be used for both sending multiple simultaneous versions of the same source ("[simulcast](/en-US/docs/Web/API/WebRTC_API/Protocols#simulcast)") and singlecast.
  ([Firefox bug 1944878](https://bugzil.la/1944878) and [Firefox bug 1932065](https://bugzil.la/1932065)).
- WebRTC simulcast of screen-shared video with the [H264 codec](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) is also supported (AV1, H264, and [VP8](/en-US/docs/Web/Media/Guides/Formats/WebRTC_codecs#supported_video_codecs) can now be used for simulcast).
  Note that the H264 codec is hardware-enabled on Android.
  ([Firefox bug 1210175](https://bugzil.la/1210175)).
- WebRTC support for the [Dependency Descriptor (DD) RTP Header Extension](/en-US/docs/Web/API/WebRTC_API/Protocols#dependency_descriptor_rtp_header_extension), and its use with AV1, VP8, and VP9 codecs.
  The DD header extension enables codec-independent forwarding of simulcast streams, including in scenarios where the payload is end-to-end encrypted (E2EE).
  ([Firefox bug 1945261](https://bugzil.la/1945261)).

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- {{WebExtAPIRef("menus.update")}} and {{WebExtAPIRef("menus.remove")}} and the aliases {{WebExtAPIRef("contextMenus.update")}} and {{WebExtAPIRef("contextMenus.remove")}} now reject with an error when the menu item doesn't exist. Previously, the error was ignored and the promise fulfilled. ([Firefox bug 1688743](https://bugzil.la/1688743)).
- A new version of the {{WebExtAPIRef("userScripts")}} API is available. This version of the API is for use in Manifext V3 extensions and provides broad compatibility with Chrome, although [permissons mechanisms](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions) differ across the browsers. ([Firefox bug 1943050](https://bugzil.la/1943050)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 136 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Error.captureStackTrace()**: `javascript.options.experimental.error_capture_stack_trace`.
  The {{jsxref("Error.captureStackTrace()")}} static method installs stack trace information on a provided object as the {{jsxref("Error.stack")}} property.
  Its main use case is to install a stack trace on a custom error object that does not derive from the {{jsxref("Error")}} interface.
  ([Firefox bug 1886820](https://bugzil.la/1886820)).
- **Clear-Site-Data: cache**: `privacy.clearSiteDataHeader.cache.enabled`.
  The [`Clear-Site-Data`](/en-US/docs/Web/HTTP/Headers/Clear-Site-Data) header can be used with the [`cache`](/en-US/docs/Web/HTTP/Headers/Clear-Site-Data#cache) or `*` directives to clear the browser cache.
  ([Firefox bug 1942272](https://bugzil.la/1942272)).

## Older versions

{{Firefox_for_developers}}
