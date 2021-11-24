---
title: Firefox 76 for developers
slug: Mozilla/Firefox/Releases/76
tags:
  - '76'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 76 that will affect developers. Firefox 76 was released on [May 5, 2020](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates/docs/).

**See also the accompanying hacks post — [Firefox 76: Audio worklets and other tricks](https://hacks.mozilla.org/2020/05/firefox-76-audio-worklets-and-other-tricks/).**

## Changes for web developers

### Developer tools

#### Debugger

- You can now enable/disable blackboxing of source groups and folders listed in the [Source list pane](/en-US/docs/Tools/Debugger/UI_Tour#source_list_pane) via context menu options ({{bug(1118152)}}).
- The [Call stack pane](/en-US/docs/Tools/Debugger/UI_Tour#call_stack)'s _Copy stack trace_ context menu option now copies full URLs, not just filenames ({{bug(1619039)}}).

#### Network monitor

- In the network request list, you can now double-click a column divider to resize the column to the left of it to fit its contents ({{bug(1615102)}}).
- The network request _Copy > [Copy as cURL](/en-US/docs/Tools/Network_Monitor/request_list#copy_as_curl)_ context menu option has a new option available, `--globoff`, which suppresses cURL's globbing (wildcard matching) feature if the copied URL includes square bracket characters ({{bug(1549773)}}).
- The _Messages_ tab of the details pane for [web socket requests](/en-US/docs/Tools/Network_Monitor/Inspecting_web_sockets) has a new filter — _Control_ — for showing control frames, and the filters are now grouped together into a selection lst ({{bug(1566780)}}).

#### Web console

- In [multi-line mode](/en-US/docs/Tools/Web_Console/The_command_line_interpreter#multi-line_mode), code snippets longer than five lines are abbreviated to five lines, preceded by a disclosure triangle (or "twistie"), and followed by an ellipsis (…). You can click anywhere in this area to show the code, and click again in that area to collapse it ({{bug(1578212)}}).
- DOM element references outputted into the console now have a "Reveal in inspector" context menu option, which shows the element in the HTML pane of the [Page inspector](/en-US/docs/Tools/Page_Inspector) ({{bug(1612276)}}).

#### Remote debugging

- Because of differences in DevTools versions, it is not possible to debug releases of Firefox for Android that are based on version 68, from desktop Firefox versions 69 or later. When attempting to do this, the Firefox desktop browser will now show a message informing the user of this problem, and offering possible next steps ({{bug(1625906)}}). See [Connection to Firefox for Android 68](/en-US/docs/Tools/about:debugging#connection_to_firefox_for_android_68) for more information.

### HTML

- The {{HTMLElement("input")}} element's {{htmlattrxref("min", "input")}} and {{htmlattrxref("max", "input")}} attributes now work correctly when the value of `min` is greater than the value of `max` for control types whose values are periodic (that is, values that wrap around at some point). This is particularly helpful, for example, with date and time inputs, where you might want to specify a time range of 11 PM to 2 AM ({{bug(1608010)}}).

### CSS

- Firefox now supports [CSS4 system colors](/en-US/docs/Web/CSS/color_value#system_colors) ({{bug(1590894)}}).

### SVG

_No changes._

### JavaScript

- The `numberingSystem` and `calendar` options of the {{jsxref("Intl.NumberFormat")}}, {{jsxref("Intl.DateTimeFormat")}}, and {{jsxref("Intl.RelativeTimeFormat")}} constructors are now enabled by default ({{bug(1625975)}}).

### APIs

#### New APIs

- Firefox now supports audio worklets by default, with support for {{domxref("BaseAudioContext.audioWorklet", "AudioContext.audioWorklet")}}, which lets you use the {{domxref("AudioWorkletProcessor")}} and {{domxref("AudioWorkletNode")}} interfaces to process audio in real time off the main thread ({{bug(1616725)}}).

#### DOM

- UI-parts related items in the `windowFeatures` parameter of {{domxref("window.open()")}} can no longer control the visibility of each UI part separately, but become a condition for whether to open a popup or not ({{bug(1507375)}}).
- Attempts to navigate to an unknown protocol using methods such as [`location.href`](/en-US/docs/Web/API/Location/href) or [`<meta http-equiv="refresh">`](/en-US/docs/Web/HTML/Element/meta) are now blocked (see {{bug(1528305)}}.
- The {{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}} constructor now accepts a {{domxref("Document")}} object as its `root`, as well as an {{domxref("Element")}} object ({{bug(1623623)}}). This lets you explicitly use a window's entire content area as the intersection bounds.
- The [Fetch API](/en-US/docs/Web/API/Fetch_API) now supports the `audioworklet` {{domxref("Request.destination", "destination")}} for requests. This causes received data to be dispatched to an {{domxref("AudioWorklet")}} ({{bug(1402784)}}).

#### Removals

- We've completely removed the [Window `appinstalled` event](/en-US/docs/Web/API/Window/appinstalled_event) (and the associated [`Window.onappinstalled`](/en-US/docs/Web/API/Window/onappinstalled) handler property) — these were never shipped, and have now been removed from the [Web Manifest spec](https://w3c.github.io/manifest/) ({{bug(1625384)}}).

### HTTP

_No changes._

### Security

_No changes._

### WebDriver conformance (Marionette)

- Firefox no longer reports `false` for `navigator.webdriver` when used for automation / testing via geckodriver ({{bug(1632556)}}).

## Changes for add-on developers

_No changes._

## Older versions

{{Firefox_for_developers(75)}}
