---
title: Firefox 141 for developers
short-title: Firefox 141 (Beta)
slug: Mozilla/Firefox/Releases/141
page-type: firefox-release-notes-active
sidebar: firefox
---

This article provides information about the changes in Firefox 141 that affect developers.
Firefox 141 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [July 22, 2025](https://whattrainisitnow.com/release/?version=141).

> [!NOTE]
> The release notes for this Firefox version are still a work in progress. You can [view the project tracker for this release here](https://github.com/mdn/mdn/issues/698).

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Changes for web developers

<!-- ### Developer Tools -->

### HTML

- The HTML [`webkitdirectory`](/en-US/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) attribute and the corresponding {{domxref("HTMLInputElement.webkitdirectory")}} property are now partially supported on Firefox Android ([Firefox bug 1887878](https://bugzil.la/1887878)).
  The attribute can be set to indicate that an [`<input type="file">`](/en-US/docs/Web/HTML/Reference/Elements/input/file) element should offer selection of directories instead of files.
  Note that the returned file entries for the selected folder always contain an empty string in ({{domxref("File.webkitRelativePath")}}), which means that using `webkitdirectory` is not suitable for use cases where information about the directory structure is needed ([Firefox bug 1973726](https://bugzil.la/1973726)).

<!-- #### Removals -->

<!-- ### CSS -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

### HTTP

- The [`"cache"`](/en-US/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) directive of the {{httpheader("Clear-Site-Data")}} response header now clears the {{glossary("bfcache")}} (backwards-forwards cache).
  This allows a site to ensure that if anyone navigates backward after a user has signed out, private details that were visible during the initial session will not be exposed. ([Firefox bug 1930501](https://bugzil.la/1930501)).

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

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

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Changes for add-on developers

- Adds the {{WebExtAPIRef('i18n.getPreferredSystemLanguages')}} method to retrieve the preferred locales of the operating system. This complements {{WebExtAPIRef('i18n.getAcceptLanguages')}} which return details of the locales set in the browser. ([Firefox bug 1888486](https://bugzil.la/1888486))

<!-- ### Removals -->

<!-- ### Other -->

## Experimental web features

These features are shipping in Firefox 141 but are disabled by default.
To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`.
You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
