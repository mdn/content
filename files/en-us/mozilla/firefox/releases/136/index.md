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

#### Removals

### CSS

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

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- {{WebExtAPIRef("menus.update")}} and {{WebExtAPIRef("menus.remove")}} and the aliases {{WebExtAPIRef("contextMenus.update")}} and {{WebExtAPIRef("contextMenus.remove")}} now reject with an error when the menu item doesn't exist. Previously, the error was ignored and the promise fulfilled. ([Firefox bug 1688743](https://bugzil.la/1688743)).

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
