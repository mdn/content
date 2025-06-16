---
title: Firefox 140 for developers
short-title: Firefox 140 (Beta)
slug: Mozilla/Firefox/Releases/140
page-type: firefox-release-notes-active
sidebar: firefoxsidebar
---

This article provides information about the changes in Firefox 140 that affect developers. Firefox 140 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [June 24, 2025](https://whattrainisitnow.com/release/?version=140).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The [CSS Custom Highlight API](/en-US/docs/Web/API/CSS_Custom_Highlight_API) is now supported. It provides a mechanism for styling arbitrary text ranges in a document, generalizing the behavior of other highlight pseudo-elements such as {{cssxref('::selection')}}, {{cssxref('::spelling-error')}}, {{cssxref('::grammar-error')}}, and {{cssxref('::target-text')}}.
  You define text ranges in JavaScript using [`Range`](/en-US/docs/Web/API/Range) instances that are grouped in a [`Highlight`](/en-US/docs/Web/API/Highlight), and then register them with a name using [`HighlightRegistry`](/en-US/docs/Web/API/HighlightRegistry).
  You can apply styles to a registered highlight using the CSS [`::highlight`](/en-US/docs/Web/CSS/::highlight) pseudo-element. ([Firefox bug 1964089](https://bugzil.la/1964089)).

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

- The [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API) is now supported ([Firefox bug 1958875](https://bugzil.la/1958875)).

  This provides a modern, {{glossary("asynchronous")}} {{jsxref("Promise")}}-based method of managing cookies, which can be used in both the main thread and in [service workers](/en-US/docs/Web/API/Service_Worker_API).
  The API is supported with the exception that cookie objects returned by the [`get()`](/en-US/docs/Web/API/CookieStore/get) and [`getAll()`](/en-US/docs/Web/API/CookieStore/getAll) methods of the {{domxref("CookieStore")}} interface, and in the `change` event, omit all properties other than `name` and `value` (matching the information returned by the {{domxref("document.cookie")}}). The other cookie properties can still be [set](/en-US/docs/Web/API/CookieStore/set), and these will be used internally.

### Escape < and > in attributes when serializing HTML

- {{domxref("Element.innerHTML")}}, {{domxref("Element.outerHTML")}}, {{domxref("Element.getHTML()")}}, {{domxref("ShadowRoot.innerHTML")}}, and {{domxref("ShadowRoot.getHTML()")}} now replace the `<` and `>` characters with `&lt;` and `&gt;` (respectively) when serializing the HTML to a string. This prevents certain exploits where HTML is serialized and then injected back into the DOM.
  ([Firefox bug 1962084](https://bugzil.la/1962084)).

#### DOM

- The [`pointerrawupdate` event](/en-US/docs/Web/API/Element/pointerrawupdate_event) is now supported.
  This event typically provides lower-latency access to pointer movement properties compared to the corresponding [`pointermove`](/en-US/docs/Web/API/Element/pointermove_event) events, firing as soon as the pointer data is available.
  It is intended for applications that require high-precision input handling, and that cannot achieve smooth interaction using coalesced `pointermove` events alone.
  Because listening to this event may impact performance, you should avoid using it for other use cases.
  ([Firefox bug 1550462](https://bugzil.la/1550462)).

#### Media, WebRTC, and Web Audio

#### Removals

- The {{domxref("MutationEvent")}} interface and its associated events (`DOMSubtreeModified`, `DOMNodeInserted`, `DOMNodeRemoved`, `DOMCharacterDataModified`, `DOMAttrModified`) have been removed. ([Firefox bug 1963043](https://bugzil.la/1963043)).

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

- **`closedBy` attribute for `<dialog>`** (Nightly): `dom.dialog.light-dismiss.enabled`

  The {{domxref("HTMLDialogElement/closedBy", "closedBy")}} attribute of the {{domxref("HTMLDialogElement")}} interface, and corresponding [`closedby`](/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) attribute of the {{htmlelement("dialog")}} element, are supported.
  Developers can use these to specify what mechanisms are able to close the dialogs, such as user interaction outside the dialog ("light dismiss") or programmatic closing.
  ([Firefox bug 1964077](https://bugzil.la/1964077)).

- **`Atomics.waitAsync()`**: `javascript.options.atomics_wait_async`

  The {{jsxref("Atomics.waitAsync()")}} static method waits asynchronously on a shared memory location and returns an object representing the result of the operation.
  It is non-blocking and usable on the main thread.
  ([Firefox bug 1467846](https://bugzil.la/1467846)).

- **Prioritized Task Scheduling API** (Nightly release).
  The [Prioritized Task Scheduling API](/en-US/docs/Web/API/Prioritized_Task_Scheduling_API) provides a standardized way to prioritize all tasks belonging to an application, whether they are defined in a website developer's code, or in third-party libraries and frameworks.
  This adds support for the [`TaskSignal.any()`](/en-US/docs/Web/API/TaskSignal/any_static) static method, which returns a signal that is triggered when any of the `TaskSignal` objects it is created from are triggered.
  The API is now feature complete.
  ([Firefox bug 1964407](https://bugzil.la/1964407)).

- **`CloseWatcher`** (Nightly - desktop only): `dom.closewatcher.enabled`.
  The {{domxref("CloseWatcher")}} interface enables you to implement components that can be closed using device-native mechanisms, in the same way as built-in components. On Windows, for example, you can use this interface to make a custom sidebar close when users press the <kbd>Esc</kbd> key. ([Firefox bug 1966459](https://bugzil.la/1966459)).

## Older versions

{{Firefox_for_developers}}
