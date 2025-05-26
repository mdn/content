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

- A subset of the [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API) is now supported ([Firefox bug 1958875](https://bugzil.la/1958875)).

  The API is a modern, {{glossary("asynchronous")}} {{jsxref("Promise")}}-based method of managing cookies, which can be used in both the main thread and in [service workers](/en-US/docs/Web/API/Service_Worker_API). The part of the API that is supported includes:

  - The [`CookieStore`](/en-US/docs/Web/API/CookieStore) interface, for getting, setting, and deleting cookies.
  - The [`Window.cookieStore`](/en-US/docs/Web/API/Window/cookieStore) and [`ServiceWorkerGlobalScope.cookieStore`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) properties for getting `CookieStore` instances.
  - The [`change` event](/en-US/docs/Web/API/CookieStore/change_event) (and its interface [`CookieChangeEvent`](/en-US/docs/Web/API/CookieChangeEvent)), which fires in main thread and service worker contexts when cookies are set or deleted.

    Note that while any of the supported cookie properties can be [set](/en-US/docs/Web/API/CookieStore/set), the cookie objects returned by the [`get()`](/en-US/docs/Web/API/CookieStore/get) and [`getAll()`](/en-US/docs/Web/API/CookieStore/getAll) methods, and in the `change` event, omit all properties other than `name` and `value` (matching the information returned by the {{domxref("document.cookie")}}).

  The following interfaces and properties are not implemented: [`ServiceWorkerRegistration.cookies`](/en-US/docs/Web/API/ServiceWorkerRegistration/cookies), [`CookieStoreManager`](/en-US/docs/Web/API/CookieStoreManager), and [`ExtendableCookieChangeEvent`](/en-US/docs/Web/API/ExtendableCookieChangeEvent).

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

- **Prioritized Task Scheduling API** (Nightly release).
  The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides a standardized way to prioritize all tasks belonging to an application, whether they are defined in a website developer's code, or in third-party libraries and frameworks.
  This adds support for the [`TaskSignal.any()`](/en-US/docs/Web/API/TaskSignal/any_static) static method, which returns a signal that is triggered when any of the `TaskSignal` objects it is created from are triggered.
  The API is now feature complete.
  ([Firefox bug 1964407](https://bugzil.la/1964407)).

## Older versions

{{Firefox_for_developers}}
