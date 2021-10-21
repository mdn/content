---
title: Firefox 71 for Developers
slug: Mozilla/Firefox/Releases/71
tags:
  - '71'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 71 that will affect developers. Firefox 71 was released on December 3, 2019.

## Changes for web developers

### Developer tools

[Console](/en-US/docs/Tools/Web_Console):

- The Console's [multi-line mode](/en-US/docs/Tools/Web_Console/The_command_line_interpreter#multi-line_mode) is now available by default.
- Console configuration options are now combined in a new [toolbar settings menu](/en-US/docs/Tools/Web_Console/UI_Tour#toolbar) ({{bug(1523868)}}).

[JavaScript debugger](/en-US/docs/Tools/Debugger):

- [Inline variable preview](/en-US/docs/Tools/Debugger/How_to/Set_a_breakpoint#inline_variable_preview) has been enabled ({{bug(1576679)}}).
- [Logging on events](/en-US/docs/Tools/Debugger/Set_event_listener_breakpoints#logging_on_events) is now available ({{bug(1110276)}}), as is the ability to [filter by event type](/en-US/docs/Tools/Debugger/Set_event_listener_breakpoints#filter_by_event_type).
- The new debugger [paused overlay](/en-US/docs/Tools/Debugger/How_to/Step_through_code#pause_on_breakpoints_overlay) can now be disabled using the `devtools.debugger.features.overlay` pref ({{bug(1579768)}}).
- We've got new [keyboard shortcuts](/en-US/docs/Tools/Keyboard_shortcuts) for opening the debugger: `Ctrl` + `Shift` + `Z` on Linux/Windows and `Cmd` + `Opt` + `Z` on macOS ({{bug(1583042)}}).
- Pausing on a [DOM Mutation Breakpoints](/en-US/docs/Tools/Debugger/Break_on_DOM_mutation) now mentions the DOM node that has the breakpoint and, if available, the child node that was added/removed ({{bug(1576145)}}).
- Locations in [pretty printed sources](/en-US/docs/Tools/Debugger/How_to/Pretty-print_a_minified_file) are now correct after pretty-printing and when jumping to the source from the Inspector's [events listener tooltip](/en-US/docs/Tools/Page_Inspector/How_to/Examine_event_listeners) ({{bug(1500222)}}).

[Network Monitor](/en-US/docs/Tools/Network_Monitor):

- The [Web sockets inspector](/en-US/docs/Tools/Network_Monitor/Inspecting_web_sockets) is now enabled by default ({{bug(1573805)}}).
- You can now do a [full text search](/en-US/docs/Tools/Network_Monitor/request_list#search_in_requests) of request/response bodies, headers, and cookies.
- You can now enter patterns to [block specific URLs](/en-US/docs/Tools/Network_Monitor/request_list#blocking_specific_urls) from loading.
- The [Timings tab](/en-US/docs/Tools/Network_Monitor/request_details#timings) now exposes timing data sent in the {{httpheader("Server-Timing")}} header ({{bug(1403051)}}).

[Page Inspector](/en-US/docs/Tools/Page_Inspector):

- Color swatches are now shown next to CSS variable definitions that have color values ({{bug(1456167)}}).
- {{cssxref(":visited")}} styles are now shown in the CSS rules view ({{bug(713106)}}).

### CSS

- Added the [subgrid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) value from CSS Grid Level 2 to {{cssxref("grid-template-columns")}} and {{cssxref("grid-template-rows")}} ({{bug(1580894)}})
- Added support for the {{cssxref("column-span")}} property to [Multiple-column Layout](/en-US/docs/Web/CSS/CSS_Columns) ({{bug(1426010)}})
- Added support for the `path()` value of {{cssxref("clip-path")}} ({{bug(1488530)}})
- Mapped the `height` and `width` HTML attributes on the {{htmlelement("img")}} element to an internal {{cssxref("aspect-ratio")}} property ({{bug(1585637)}}). [See the guide to this feature on MDN](/en-US/docs/Web/Media/images/aspect_ratio_mapping).

#### Removals

- CSS Radial Gradients no longer accept negative radii ({{bug(1583736)}}).

### JavaScript

- The {{jsxref("Promise.allSettled()")}} method is now supported ({{bug(1549176)}}). This method lets you easily wait until every promise in a set of promises is either fulfilled or rejected before running further code.

#### Removals

- The non-standard Array generic methods have been removed in Firefox 71 ({{bug(1222547)}}). They were first introduced in Firefox 1.5 ([JavaScript 1.6](/en-US/docs/Web/JavaScript/New_in_JavaScript/1.6)) and deprecated from Firefox 68 onwards. If your use case is to use array generics on array-like objects, you can convert your object to a proper array using [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) and then use standard array methods.

### MathML

- [MathML elements](/en-US/docs/Web/MathML/Element) now implement a MathML DOM and their class is {{domxref("MathMLElement")}}. With a proper MathML DOM, you can now use `mathmlEl.style`, or global event handlers, for example. Prior to this change, MathML elements only implemented the {{domxref("Element")}} class ({{bug(1571487)}}).

### APIs

#### New APIs

The [Media Session API](/en-US/docs/Web/API/Media_Session_API) is now partially implemented. This API provides a standard mechanism for your content to share with the underlying operating system information about the state of media it's playing. This includes metadata such as artist, album, and track name, as well as potentially album artwork ({{bug(1580602)}}).

The API also provides a way to receive notifications when the device's media controls (such as play, pause, and seek buttons) are activated by the user. To that end, the {{domxref("MediaSession")}} interface is now partially implemented, with support for setting and fetching the currently-playing media's metadata. and for the {{domxref("MediaSession.setActionHandler", "setActionHandler()")}} method. To access the `MediaSession` API, use the {{domxref("navigator.mediaSession")}} property.

#### DOM

- The {{domxref("StaticRange.StaticRange()", "StaticRange()")}} constructor is now supported ({{bug(1575980)}}).
- The MathML {{domxref("MathMLElement")}} interface has been implemented ({{bug(1571487)}}).

#### Media, Web Audio, and WebRTC

- The {{domxref("MediaRecorder")}} interface now implements the {{domxref("MediaRecorder.audioBitsPerSecond", "audioBitsPerSecond")}} and {{domxref("MediaRecorder.videoBitsPerSecond", "videoBitsPerSecond")}} properties ({{bug(1514158)}}).

#### Canvas and WebGL

- The {{domxref("OVR_multiview2")}} and {{domxref("OES_fbo_render_mipmap")}} WebGL extensions are now exposed by default ({{bug(1584277)}}, {{bug(1583878)}}).

#### Removals

The following non-standard {{domxref("DataTransfer")}} members have been removed ({{bug(1345192)}}):

- {{domxref("DataTransfer.mozItemCount")}}
- {{domxref("DataTransfer.mozClearDataAt()")}}
- {{domxref("DataTransfer.mozGetDataAt()")}}
- {{domxref("DataTransfer.mozSetDataAt()")}}
- {{domxref("DataTransfer.mozTypesAt()")}}

### WebDriver conformance (Marionette)

- Both the `WebDriver:TakeScreenshot` and `WebDriver:TakeElementScreenshot` commands have been updated to respect the unhandled prompt behavior setting ({{bug(1584927)}}).
- The command `Marionette:Quit` has been updated to also allow quitting or restarting of other Gecko-driven applications besides Firefox ({{bug(1298921)}}).
- For GeckoView-based browsers on Android, the returned `browserName` in the session capabilities will now always be `firefox` ({{bug(1587364)}}).

## Changes for add-on developers

### API changes

- {{WebExtAPIRef("downloads.download")}} now identifies and reports as errors the following HTTP response codes:

  - 404 returning `SERVER_BAD_CONTENT`
  - 403 returning `SERVER_FORBIDDEN`
  - 402 and Proxy 407 returning `SERVER_UNAUTHORIZED`
  - Anything else above 400 returning `SERVER_FAILED`  ({{bug(1576333)}})

- {{WebExtAPIRef("downloads.download")}} now includes the optional `options` parameter property `allowHttpErrors`. When set to `true`, this `boolean` flag enables a download to continue after encountering an HTTP error. When set to `false`, a download is canceled when an HTTP error is encountered. Default value: `false`. ({{bug(1578955)}})

#### Removals

- The [`proxy.register()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/register) and [`proxy.unregister()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy/unregister) functions have been removed ({{bug(1443259)}}). {{WebExtAPIRef("proxy.onRequest")}} should now be used to handle the proxying of requests.

## See also

- Hacks release post: [Firefox 71: A year-end arrival](https://hacks.mozilla.org/2019/12/firefox-71-a-year-end-arrival/)

## Older versions

{{Firefox_for_developers(70)}}
