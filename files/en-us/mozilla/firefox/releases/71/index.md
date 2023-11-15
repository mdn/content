---
title: Firefox 71 for Developers
slug: Mozilla/Firefox/Releases/71
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 71 that will affect developers. Firefox 71 was released on December 3, 2019.

## Changes for web developers

### Developer tools

[Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html):

- The Console's [multi-line mode](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode) is now available by default.
- Console configuration options are now combined in a new [toolbar settings menu](https://firefox-source-docs.mozilla.org/devtools-user/web_console/ui_tour/index.html#toolbar) ([Firefox bug 1523868](https://bugzil.la/1523868)).

[JavaScript debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html):

- [Inline variable preview](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_a_breakpoint/index.html#inline-variable-preview) has been enabled ([Firefox bug 1576679](https://bugzil.la/1576679)).
- [Logging on events](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#logging-on-events) is now available ([Firefox bug 1110276](https://bugzil.la/1110276)), as is the ability to [filter by event type](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html#filter-by-event-type).
- The new debugger [paused overlay](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/step_through_code/index.html#pause-on-breakpoints-overlay) can now be disabled using the `devtools.debugger.features.overlay` pref ([Firefox bug 1579768](https://bugzil.la/1579768)).
- We've got new [keyboard shortcuts](https://firefox-source-docs.mozilla.org/devtools-user/keyboard_shortcuts/index.html) for opening the debugger: `Ctrl` + `Shift` + `Z` on Linux/Windows and `Cmd` + `Opt` + `Z` on macOS ([Firefox bug 1583042](https://bugzil.la/1583042)).
- Pausing on a [DOM Mutation Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/break_on_dom_mutation/index.html) now mentions the DOM node that has the breakpoint and, if available, the child node that was added/removed ([Firefox bug 1576145](https://bugzil.la/1576145)).
- Locations in [pretty printed sources](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/pretty-print_a_minified_file/index.html) are now correct after pretty-printing and when jumping to the source from the Inspector's [events listener tooltip](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_event_listeners/index.html) ([Firefox bug 1500222](https://bugzil.la/1500222)).

[Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html):

- The [Web sockets inspector](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/inspecting_web_sockets/index.html) is now enabled by default ([Firefox bug 1573805](https://bugzil.la/1573805)).
- You can now do a [full text search](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#search-in-requests) of request/response bodies, headers, and cookies.
- You can now enter patterns to [block specific URLs](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_list/index.html#blocking-specific-urls) from loading.
- The [Timings tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#timings) now exposes timing data sent in the {{httpheader("Server-Timing")}} header ([Firefox bug 1403051](https://bugzil.la/1403051)).

[Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html):

- Color swatches are now shown next to CSS variable definitions that have color values ([Firefox bug 1456167](https://bugzil.la/1456167)).
- {{cssxref(":visited")}} styles are now shown in the CSS rules view ([Firefox bug 713106](https://bugzil.la/713106)).

### CSS

- Added the [subgrid](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid) value from CSS Grid Level 2 to {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} ([Firefox bug 1580894](https://bugzil.la/1580894))
- Added support for the {{cssxref("column-span")}} property to [Multiple-column Layout](/en-US/docs/Web/CSS/CSS_multicol_layout) ([Firefox bug 1426010](https://bugzil.la/1426010))
- Added support for the `path()` value of {{cssxref("clip-path")}} ([Firefox bug 1488530](https://bugzil.la/1488530))
- Mapped the `height` and `width` HTML attributes on the {{htmlelement("img")}} element to an internal {{cssxref("aspect-ratio")}} property ([Firefox bug 1585637](https://bugzil.la/1585637)). [See the guide to this feature on MDN](/en-US/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images).

#### Removals

- CSS Radial Gradients no longer accept negative radii ([Firefox bug 1583736](https://bugzil.la/1583736)).

### JavaScript

- The {{jsxref("Promise.allSettled()")}} method is now supported ([Firefox bug 1549176](https://bugzil.la/1549176)). This method lets you easily wait until every promise in a set of promises is either fulfilled or rejected before running further code.

#### Removals

- The non-standard Array generic methods have been removed in Firefox 71 ([Firefox bug 1222547](https://bugzil.la/1222547)). They were first introduced in Firefox 1.5 ([JavaScript 1.6](/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6)) and deprecated from Firefox 68 onwards. If your use case is to use array generics on array-like objects, you can convert your object to a proper array using [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) and then use standard array methods.

### MathML

- [MathML elements](/en-US/docs/Web/MathML/Element) now implement a MathML DOM and their class is {{domxref("MathMLElement")}}. With a proper MathML DOM, you can now use `mathmlEl.style`, or global event handlers, for example. Prior to this change, MathML elements only implemented the {{domxref("Element")}} class ([Firefox bug 1571487](https://bugzil.la/1571487)).

### APIs

#### New APIs

The [Media Session API](/en-US/docs/Web/API/Media_Session_API) is now partially implemented. This API provides a standard mechanism for your content to share with the underlying operating system information about the state of media it's playing. This includes metadata such as artist, album, and track name, as well as potentially album artwork ([Firefox bug 1580602](https://bugzil.la/1580602)).

The API also provides a way to receive notifications when the device's media controls (such as play, pause, and seek buttons) are activated by the user. To that end, the {{domxref("MediaSession")}} interface is now partially implemented, with support for setting and fetching the currently-playing media's metadata and for the {{domxref("MediaSession.setActionHandler", "setActionHandler()")}} method. To access the `MediaSession` API, use the {{domxref("navigator.mediaSession")}} property.

#### DOM

- The {{domxref("StaticRange.StaticRange()", "StaticRange()")}} constructor is now supported ([Firefox bug 1575980](https://bugzil.la/1575980)).
- The MathML {{domxref("MathMLElement")}} interface has been implemented ([Firefox bug 1571487](https://bugzil.la/1571487)).

#### Media, Web Audio, and WebRTC

- The {{domxref("MediaRecorder")}} interface now implements the {{domxref("MediaRecorder.audioBitsPerSecond", "audioBitsPerSecond")}} and {{domxref("MediaRecorder.videoBitsPerSecond", "videoBitsPerSecond")}} properties ([Firefox bug 1514158](https://bugzil.la/1514158)).

#### Canvas and WebGL

- The {{domxref("OVR_multiview2")}} and {{domxref("OES_fbo_render_mipmap")}} WebGL extensions are now exposed by default ([Firefox bug 1584277](https://bugzil.la/1584277), [Firefox bug 1583878](https://bugzil.la/1583878)).

#### Removals

The following non-standard {{domxref("DataTransfer")}} members have been removed ([Firefox bug 1345192](https://bugzil.la/1345192)):

- {{domxref("DataTransfer.mozItemCount")}}
- {{domxref("DataTransfer.mozClearDataAt()")}}
- {{domxref("DataTransfer.mozGetDataAt()")}}
- {{domxref("DataTransfer.mozSetDataAt()")}}
- {{domxref("DataTransfer.mozTypesAt()")}}

### WebDriver conformance (Marionette)

- Both the `WebDriver:TakeScreenshot` and `WebDriver:TakeElementScreenshot` commands have been updated to respect the unhandled prompt behavior setting ([Firefox bug 1584927](https://bugzil.la/1584927)).
- The command `Marionette:Quit` has been updated to also allow quitting or restarting of other Gecko-driven applications besides Firefox ([Firefox bug 1298921](https://bugzil.la/1298921)).
- For GeckoView-based browsers on Android, the returned `browserName` in the session capabilities will now always be `firefox` ([Firefox bug 1587364](https://bugzil.la/1587364)).

## Changes for add-on developers

### API changes

- {{WebExtAPIRef("downloads.download")}} now identifies and reports as errors the following HTTP response codes:

  - 404 returning `SERVER_BAD_CONTENT`
  - 403 returning `SERVER_FORBIDDEN`
  - 402 and Proxy 407 returning `SERVER_UNAUTHORIZED`
  - Anything else above 400 returning `SERVER_FAILED` ([Firefox bug 1576333](https://bugzil.la/1576333))

- {{WebExtAPIRef("downloads.download")}} now includes the optional `options` parameter property `allowHttpErrors`. When set to `true`, this `boolean` flag enables a download to continue after encountering an HTTP error. When set to `false`, a download is canceled when an HTTP error is encountered. Default value: `false`. ([Firefox bug 1578955](https://bugzil.la/1578955))

#### Removals

- The [`proxy.register()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy) and [`proxy.unregister()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy) functions have been removed ([Firefox bug 1443259](https://bugzil.la/1443259)). {{WebExtAPIRef("proxy.onRequest")}} should now be used to handle the proxying of requests.

## See also

- Hacks release post: [Firefox 71: A year-end arrival](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)

## Older versions

{{Firefox_for_developers(70)}}
