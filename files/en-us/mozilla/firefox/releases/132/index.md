---
title: Firefox 132 for developers
slug: Mozilla/Firefox/Releases/132
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 132 that affect developers. Firefox 132 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [October 29, 2024](https://whattrainisitnow.com/release/?version=132).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

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

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 132 but are disabled by default or enabled in Nightly only. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Cookie Store API:** `dom.cookieStore.enabled`.

  The [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API) is a modern, {{jsxref("Promise")}}-based method of managing cookies that does not block the event loop and does not rely on {{domxref("Document")}} (it can therefore be made available to [service workers](/en-US/docs/Web/API/Service_Worker_API)). As of Firefox 132, a subset of the Cookie Store API has been implemented. ([Firefox bug 1800882](https://bugzil.la/1800882)). This includes:

  - The [`CookieStore`](/en-US/docs/Web/API/CookieStore) interface, but `partitioned` is not included in return values.
  - The [`CookieChangeEvent`](/en-US/docs/Web/API/CookieChangeEvent) interface, excluding `partitioned` properties.
  - The [`Window.cookieStore`](/en-US/docs/Web/API/Window/cookieStore) property.
  - The [`ServiceWorkerGlobalScope.cookieStore`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) property.

## Older versions

{{Firefox_for_developers}}
