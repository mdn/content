---
title: Firefox 141 for developers
short-title: Firefox 141
slug: Mozilla/Firefox/Releases/141
page-type: firefox-release-notes
sidebar: firefox
---

This article provides information about the changes in Firefox 141 that affect developers.
Firefox 141 was released on [July 22, 2025](https://whattrainisitnow.com/release/?version=141).

## Changes for web developers

### HTML

- The HTML [`webkitdirectory`](/en-US/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) attribute and the corresponding {{domxref("HTMLInputElement.webkitdirectory")}} property are now partially supported on Firefox Android ([Firefox bug 1887878](https://bugzil.la/1887878)).
  The attribute can be set to indicate that an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element should offer selection of directories instead of files.
  Note that the returned file entries for the selected folder always contain an empty string in ({{domxref("File.webkitRelativePath")}}), which means that using `webkitdirectory` is not suitable for use cases where information about the directory structure is needed ([Firefox bug 1973726](https://bugzil.la/1973726)).

### CSS

- The CSS {{CSSXRef("font-variant-emoji")}} property allows you to set a default presentation style for displaying emojis ([Firefox bug 1954214](https://bugzil.la/1954214)).

### JavaScript

- The [`variants`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants) accessor property is now supported on {{jsxref("Intl.Locale")}} instances.
  This property returns the variants associated with a locale as a string of dash (`-`) separated identifiers.
  It offers a more robust way to get and set variant subtags of a language identifier as opposed to manually parsing or modifying a locale string ([Firefox bug 1970161](https://bugzil.la/1970161)).
- The explicit [resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management) API, which includes the {{jsxref("Statements/using", "using")}} and {{jsxref("Statements/await_using", "await using")}} declarations, the {{jsxref("DisposableStack")}}, {{jsxref("AsyncDisposableStack")}}, and {{jsxref("SuppressedError")}} objects, and the {{jsxref("Symbol.dispose")}} and {{jsxref("Symbol.asyncDispose")}} well-known symbols, is now supported. These features ensure automatic cleanup of resources such as file handles or stream readers when they go out of scope, reducing leaks and simplifying error handling ([Firefox bug 1967744](https://bugzil.la/1967744)).

### HTTP

- The [`"cache"`](/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) directive of the {{httpheader("Clear-Site-Data")}} response header now clears the {{glossary("bfcache")}} (backwards-forwards cache).
  This allows a site to ensure that if anyone navigates backward after a user has signed out, private details that were visible during the initial session will not be exposed. ([Firefox bug 1930501](https://bugzil.la/1930501)).

### APIs

- The {{domxref("PointerEvent/persistentDeviceId","persistentDeviceId")}} property of the {{domxref("PointerEvent")}} interface is now supported. This gives each pointing device that interacts with the screen a unique ID that persists for the session. It provides a reliable way to identify multiple pointing devices (such as pens) interacting with the screen simultaneously. ([Firefox bug 1968400](https://bugzil.la/1968400)).
- The {{domxref("IntersectionObserver/scrollMargin","scrollMargin")}} property of the {{domxref("IntersectionObserver")}} interface is now supported. It adds a margin to all nested {{glossary("scroll container","scroll containers")}} within the root element of the observer, which allows targets inside those elements to be observed before (or after) they are scrolled into view—instead of only when they first become visible. ([Firefox bug 1860030](https://bugzil.la/1860030)).
- The {{domxref("HTMLDialogElement/closedBy", "closedBy")}} attribute of the {{domxref("HTMLDialogElement")}} interface and the corresponding [`closedby`](/en-US/docs/Web/HTML/Reference/Elements/dialog#closedby) attribute of the {{htmlelement("dialog")}} element are supported.
  Developers can use these to specify which mechanisms can close a dialog, such as user interaction outside the dialog ("light dismiss") or programmatic closing.
  ([Firefox bug 1964078](https://bugzil.la/1964078)).
- The [`showPopover()`](/en-US/docs/Web/API/HTMLElement/showPopover) and [`togglePopover()`](/en-US/docs/Web/API/HTMLElement/togglePopover) methods of the {{domxref("HTMLElement")}} interface now take an [`options.source`](/en-US/docs/Web/API/HTMLElement/showPopover#source) argument, and [`togglePopover()`](/en-US/docs/Web/API/HTMLElement/togglePopover) also takes the [`force`](/en-US/docs/Web/API/HTMLElement/togglePopover#force) or [`options.force`](/en-US/docs/Web/API/HTMLElement/togglePopover#force_2) argument. ([Firefox bug 1936411](https://bugzil.la/1936411)).
  ([Firefox bug 1936411](https://bugzil.la/1936411))
  - [`options.source`](/en-US/docs/Web/API/HTMLElement/showPopover#source) establishes a relationship between a popover and its invoker (control element).
    In the same way as the equivalent declarative attribute, [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget), this makes the popover more accessible to keyboard users (see [Popover accessibility features](/en-US/docs/Web/API/Popover_API/Using#popover_accessibility_features)). It also creates an implicit anchor reference between the two, which enables more natural positioning of popovers relative to their controls (see [Popover anchor positioning](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning)).
  - The [`force`](/en-US/docs/Web/API/HTMLElement/togglePopover#force) or [`options.force`](/en-US/docs/Web/API/HTMLElement/togglePopover#force_2) arguments to `togglePopover()` can be used to force the popover open or closed, and is ignored if the popover is already in the forced state.
    Unlike `showPopover()` and `hidePopover()`, this does not throw an exception if the popover is already in the target state.
- The [WebGPU API](/en-US/docs/Web/API/WebGPU_API) is now fully supported on Windows, in all contexts except for service workers. This allows developers to perform computation and graphics rendering using the [Graphics Processing Unit](https://en.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) of a user's computer. ([Firefox bug 1972486](https://bugzil.la/1972486)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- Removed the experimental CDP (Chrome DevTools Protocol) implementation from Firefox. With it we also removed the support for the `remote.active-protocols` preference. More details on this topic can be found on [Firefox Developer Experience](https://fxdx.dev/cdp-retirement-in-firefox/) ([Firefox bug 1882096](https://bugzil.la/1882096)).
- Removed the temporary `remote.system-access-check.enabled` preference. This preference can no longer be used to disable system access checks when using WebDriver in Firefox's chrome scope during testing ([Firefox bug 1955007](https://bugzil.la/1955007)).

#### WebDriver BiDi

- Added support for the "proxy" argument of the `browser.createUserContext` command. This allows clients to setup either a "direct" or "manual" proxy when creating a user context (ie Firefox Container). Support for additional proxy types will be added later on ([Firefox bug 1967653](https://bugzil.la/1967653)).
- Implemented the new `browsingContext.historyUpdated` event which is emitted when `history.pushState()`, `history.replaceState()` or `document.open()` is called within the context of a web page ([Firefox bug 1906051](https://bugzil.la/1906051)).
- Improved the error message shown when attempting to permanently install an unpacked, unsigned web extension ([Firefox bug 1958723](https://bugzil.la/1958723)).
- Updated the `browsingContext.navigate` and `browsingContext.reload` commands to wait for the `browsingContext.navigationCommitted` event when using the "wait" condition "none" ([Firefox bug 1967469](https://bugzil.la/1967469)).
- Updated the WebDriver BiDi cookie APIs to support "default" value in "sameSite" property to address recent changes in platform API which wouldn't allow anymore to set a cookie with "sameSite=None" and "secure=false" on HTTP pages ([Firefox bug 1971488](https://bugzil.la/1971488)).

#### Marionette

- To avoid unnecessary 200ms delays for each call to `WebDriver:ElementClick` - even when no navigation occurs - we lowered the click-and-wait timeout for a potential navigation to 50ms for backward compatibility. The [timeout is now also configurable](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-timeout) and [can be completely disabled](https://firefox-source-docs.mozilla.org/testing/marionette/Prefs.html#marionette-navigate-after-click-enabled) by users through a preference ([Firefox bug 1972271](https://bugzil.la/1972271)).
- Added support in Marionette for interacting with CHIPS cookies (Cookies Having Independent Partitioned State) ([Firefox bug 1972830](https://bugzil.la/1972830)).

## Changes for add-on developers

- Adds the {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} method to retrieve the preferred locales of the operating system. This complements {{WebExtAPIRef('i18n.getAcceptLanguages')}}, which returns details of the locales set in the browser. ([Firefox bug 1888486](https://bugzil.la/1888486))

## Experimental web features

These features are shipping in Firefox 141 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **`:active-view-transition`** (Nightly): `dom.viewTransitions.enabled`

  The CSS {{CSSXRef(":active-view-transition")}} pseudo-class enables you to style content while a [view transition](/en-US/docs/Web/API/View_Transition_API) is taking place in a single-page app (SPA). ([Firefox bug 1956140](https://bugzil.la/1956140)).
