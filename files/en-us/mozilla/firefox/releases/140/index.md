---
title: Firefox 140 for developers
slug: Mozilla/Firefox/Releases/140
page-type: firefox-release-notes
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 140 that affect developers. Firefox 140 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [June 24, 2025](https://whattrainisitnow.com/release/?version=140).

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

### Escape < and > in attributes when serializing HTML

- {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, {{domxref("Element.getHTML()")}}, {{domxref("ShadowRoot.innerHTML")}}, and {{domxref("ShadowRoot.getHTML()")}} now replace the `<` and `>` characters with `&lt;` and `&gt;` (respectively) when serializing the HTML to a string. This prevents certain exploits where HTML is serialized and then injected back into the DOM.
  ([Firefox bug 1962084](https://bugzil.la/1962084)).

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

- Support added for `unspecified` in {{WebExtAPIRef("cookies.SameSiteStatus")}}. In addition, `unspecified` is now the default value for `sameSite` in {{WebExtAPIRef("cookies.set()")}}. ([Firefox bug 1550032](https://bugzil.la/1550032))

### Removals

### Other

## Experimental web features

These features are shipping in Firefox 140 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`Notification.maxActions`** (Nightly): `dom.webnotifications.actions.enabled`

  The [`Notification.maxActions`](/en-US/docs/Web/API/Notification/maxActions_static) read-only static property returns the browser limit on the number of actions that can be associated with a `Notification`, which you create using {{domxref("ServiceWorkerRegistration.showNotification()")}}.
  This was released prematurely in Firefox version 138, and this change makes it available only in the Nightly build. ([Firefox bug 1963263](https://bugzil.la/1963263)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  The {{jsxref("Atomics.waitAsync()")}} static method waits asynchronously on a shared memory location and returns an object representing the result of the operation.
  It is non-blocking and usable on the main thread.
  ([Firefox bug 1467846](https://bugzil.la/1467846)).

- **Prioritized Task Scheduling API** (Nightly release).
  The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides a standardized way to prioritize all tasks belonging to an application, whether they are defined in a website developer's code, or in third-party libraries and frameworks.
  This adds support for the [`TaskSignal.any()`](/en-US/docs/Web/API/TaskSignal/any_static) static method, which returns a signal that is triggered when any of the `TaskSignal` objects it is created from are triggered.
  The API is now feature complete.
  ([Firefox bug 1964407](https://bugzil.la/1964407)).

## Older versions

{{Firefox_for_developers}}
