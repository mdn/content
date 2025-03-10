---
title: Firefox 76 for developers
slug: Mozilla/Firefox/Releases/76
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 76 that will affect developers. Firefox 76 was released on [May 5, 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/).

**See also the accompanying hacks post — [Firefox 76: Audio worklets and other tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Changes for web developers

### Developer tools

#### Debugger

- You can now enable/disable blackboxing of source groups and folders listed in the [Source list pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) via context menu options ([Firefox bug 1118152](https://bugzil.la/1118152)).
- The [Call stack pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#call-stack)'s _Copy stack trace_ context menu option now copies full URLs, not just filenames ([Firefox bug 1619039](https://bugzil.la/1619039)).

#### Network monitor

- In the network request list, you can now double-click a column divider to resize the column to the left of it to fit its contents ([Firefox bug 1615102](https://bugzil.la/1615102)).
- The network request _Copy > [Copy as cURL](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#copy-as-curl)_ context menu option has a new option available, `--globoff`, which suppresses cURL's globbing (wildcard matching) feature if the copied URL includes square bracket characters ([Firefox bug 1549773](https://bugzil.la/1549773)).
- The _Messages_ tab of the details pane for [web socket requests](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) has a new filter — _Control_ — for showing control frames, and the filters are now grouped together into a selection list ([Firefox bug 1566780](https://bugzil.la/1566780)).

#### Web console

- In [multi-line mode](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode), code snippets longer than five lines are abbreviated to five lines, preceded by a disclosure triangle (or "twisty"), and followed by an ellipsis (…). You can click anywhere in this area to show the code, and click again in that area to collapse it ([Firefox bug 1578212](https://bugzil.la/1578212)).
- DOM element references outputted into the console now have a "Reveal in inspector" context menu option, which shows the element in the HTML pane of the [Page inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) ([Firefox bug 1612276](https://bugzil.la/1612276)).

#### Remote debugging

- Because of differences in DevTools versions, it is not possible to debug releases of Firefox for Android that are based on version 68, from desktop Firefox versions 69 or later. When attempting to do this, the Firefox desktop browser will now show a message informing the user of this problem, and offering possible next steps ([Firefox bug 1625906](https://bugzil.la/1625906)). See [Connection to Firefox for Android 68](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connection-to-firefox-for-android-68) for more information.

### HTML

- The {{HTMLElement("input")}} element's [`min`](/en-US/docs/Web/HTML/Element/input#min) and [`max`](/en-US/docs/Web/HTML/Element/input#max) attributes now work correctly when the value of `min` is greater than the value of `max` for control types whose values are periodic (that is, values that wrap around at some point). This is particularly helpful, for example, with date and time inputs, where you might want to specify a time range of 11 PM to 2 AM ([Firefox bug 1608010](https://bugzil.la/1608010)).

### CSS

- Firefox now supports [CSS colors level 4 system colors](https://www.w3.org/TR/css-color-4/#typedef-system-color) ([Firefox bug 1590894](https://bugzil.la/1590894)).

### SVG

_No changes._

### JavaScript

- The `numberingSystem` and `calendar` options of the {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}}, and {{jsxref("Intl.RelativeTimeFormat")}} constructors are now enabled by default ([Firefox bug 1625975](https://bugzil.la/1625975)).

### APIs

#### New APIs

- Firefox now supports audio worklets by default, with support for {{domxref("BaseAudioContext.audioWorklet", "AudioContext.audioWorklet")}}, which lets you use the {{domxref("AudioWorkletProcessor")}} and {{domxref("AudioWorkletNode")}} interfaces to process audio in real time off the main thread ([Firefox bug 1616725](https://bugzil.la/1616725)).

#### DOM

- UI-parts related items in the `windowFeatures` parameter of {{domxref("window.open()")}} can no longer control the visibility of each UI part separately, but become a condition for whether to open a popup or not ([Firefox bug 1507375](https://bugzil.la/1507375)).
- Attempts to navigate to an unknown protocol using methods such as [`location.href`](/en-US/docs/Web/API/Location/href) or [`<meta http-equiv="refresh">`](/en-US/docs/Web/HTML/Element/meta) are now blocked (see [Firefox bug 1528305](https://bugzil.la/1528305).
- The {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} constructor now accepts a {{domxref("Document")}} object as its `root`, as well as an {{domxref("Element")}} object ([Firefox bug 1623623](https://bugzil.la/1623623)). This lets you explicitly use a window's entire content area as the intersection bounds.
- The [Fetch API](/en-US/docs/Web/API/Fetch_API) now supports the `audioworklet` {{domxref("Request.destination", "destination")}} for requests. This causes received data to be dispatched to an {{domxref("AudioWorklet")}} ([Firefox bug 1402784](https://bugzil.la/1402784)).

#### Removals

- We've completely removed the [Window `appinstalled` event](/en-US/docs/Web/API/Window/appinstalled_event) (and the associated `Window.onappinstalled` handler property) — these were never shipped, and have now been removed from the [Web Manifest spec](https://w3c.github.io/manifest/) ([Firefox bug 1625384](https://bugzil.la/1625384)).

### HTTP

_No changes._

### Security

_No changes._

### WebDriver conformance (Marionette)

- Firefox no longer reports `false` for `navigator.webdriver` when used for automation / testing via geckodriver ([Firefox bug 1632556](https://bugzil.la/1632556)).

## Changes for add-on developers

_No changes._

## Older versions

{{Firefox_for_developers}}
