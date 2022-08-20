---
title: Firefox 52 for developers
slug: Mozilla/Firefox/Releases/52
tags:
  - Firefox
  - Mozilla
  - Release Notes
---
{{FirefoxSidebar}}

Firefox 52 was released on March 7, 2017. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

- [Completely revamped Responsive Design Mode, including UA selection and network throttling.](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html)
- [The Animation Inspector now displays timing functions.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html)
- [The Page Inspector now includes a CSS grid inspector.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [about:debugging now shows service worker state.](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#service-worker-state)
- [The Page Inspector includes an easy way to highlight the selected element.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#element-rule)
- [The Page Inspector displays whitespace-only text nodes.](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#whitespace-only-text-nodes)

[All devtools bugs fixed between Firefox 51 and Firefox 52](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2016-11-14&query_format=advanced&chfield=resolution&chfieldfrom=2016-09-19&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%20about%3Adebugging&component=Developer%20Tools%3A%20Animation%20Inspector&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Computed%20Styles%20Inspector&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20CSS%20Rules%20Inspector&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20DOM&component=Developer%20Tools%3A%20Font%20Inspector&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20JSON%20Viewer&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Design%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Shared%20Components&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=13333174).

### HTML

- The `rel="noopener"` [Link type](/en-US/docs/Web/HTML/Link_types) has been implemented (see {{bug(1222516)}}).

### CSS

#### New features

- Added {{cssxref(":focus-within")}} pseudo-class ({{bug(1176997)}}).
- Added support for `display:flex/grid` and columnset layout inside {{HTMLElement("button")}} elements ({{bug(984869)}}).
- Implemented interpolation between numeric color and [currentcolor](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) ({{bug(1299741)}}).
- Implemented flexbox layout for `{{cssxref("justify-content")}}: space-evenly` and `{{cssxref("align-content")}}: space-evenly` ({{bug(1235922)}}).
- Added support for subpixel antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} ({{bug(1305259)}}).
- Implemented CSS Text 3 segment break transformation rules ({{bug(1081858)}}).
- Basic shape clipping (as applied via the {{cssxref("clip-path")}} property) can now be applied to SVG content ({{bug(1246741)}}).
- Implemented Flexbox layout for {{cssxref("align-self")}}|{{cssxref("justify-self")}}: \[ first | last ]? baseline ({{bug(1221524)}}).
- The {{cssxref("touch-action")}} property is now enabled by default on all platforms. (For the full story, see [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) and [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} handling & single-line-sizing should depend on {{cssxref("flex-wrap")}}, not number of lines ({{bug(1090031)}}).
- [CSS Animations](/en-US/docs/Web/CSS/CSS_Animations) can now be used to animate non-interpolated properties (see {{bug("1064937")}}).
- Changed `baseline|last-baseline` to `[ first | last ]? baseline` ({{bug(1313254)}}).
- The used value for `left`/`right` is `start` for the block-axis ({{bug(1221565)}}).
- Stretching flexible tracks with an indefinite containing block length now respects the min/max size({{bug(1309407)}}).
- The initial values of {{cssxref("mask-position")}} and {{cssxref("mask-repeat")}} have been changed to `0% 0%` and `repeat`, respectively ({{bug(1308963)}}).
- There have been a number of changes to CSS {{cssxref("&lt;color&gt;")}} values (see {{bug(1295456)}}):

  - `rgba()` and `hsla()` have now been redefined as aliases of `rgb()` and `hsl()`; both accept the same parameter syntax.
  - `rgb(`) and `hsl()` now accept an optional alpha value, e.g. `rgb(255, 0, 0, 0.5)`.
  - Color functions now accept space-separated parameters rather than commas, e.g. `rgb(255 0 0 / 0.5)`.
  - Alpha values can now be specified as percentages as well as numbers, e.g. `rgb(255 0 0 / 50%)`.
  - The hue component in `hsl()` colors can now be specified as an angle, as well as a number, e.g. `hsl(120deg, 60%, 70%)`.

- Firefox's implementation of child-indexed pseudo-classes (such as {{cssxref(":nth-child")}}, {{cssxref(":first-child")}}, and so forth) has been updated to match the CSS selectors level 4 specification: these pseudo-classes now match the appropriate sibling elements rather than the children of their parent element. This allows these pseudo-classes to be used when there is no parent, or the parent is not an {{domxref("Element")}} ({{bug(1300374)}}.

#### CSS Grids

- [CSS Grids](/en-US/docs/Web/CSS/CSS_Grid_Layout) are implemented.

#### Changes and removals

- Unprefixed multi-column properties (and added back `-moz` prefixed versions as aliases, for now) ({{bug(1300895)}}).
- Stopped wrapping abspos children of flex container in anonymous flex items({{bug(1269045)}}).
- Implemented grid container baselines ({{bug(1151204)}}).
- Removed `<flex>` min-sizing from the style system ({{bug(1305244)}}).
- Remove preference `layout.css.masking.enabled` ({{bug(1308239)}}).
- The proprietary `-moz-images-in-menus` and `-moz-images-in-buttons` [media types](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) have been removed (see {{bug(1302157)}}).
- Removed `-moz-use-text-color` value from color properties; use [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) instead ({{bug(1306214)}}).
- \[css-grid] 'max-width' set on grid item causes text to overflow ({{bug(1330380)}}).

### JavaScript

#### New features

- Support for the async functions has been added. This adds {{jsxref("Statements/async_function", "async function")}}, {{jsxref("Operators/async_function", "async function expression")}}, and the {{jsxref("Operators/await", "await")}} keyword ({{bug(1185106)}}).
- Implemented ES2017 [trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas) in functions ({{bug(1303788)}}).
- Implemented {{jsxref("Functions/rest_parameters", "rest parameter destructuring", "#Destructuring_rest_parameters", 1)}} ({{bug(1243717)}}).
- The {{jsxref("Operators", "exponentiation operator (**)", "#Exponentiation_(**)", 1)}} is now enabled by default ({{bug(1291212)}}).
- You can now use [IANA time zone names](https://www.iana.org/time-zones) in the `timeZone` option of date related APIs like {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} or {{jsxref("Date.toLocaleString()")}} ({{bug(837961)}}).

#### Changes and removals

- [Array destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#assigning_the_rest_of_an_array_to_a_variable) now throws a {{jsxref("SyntaxError")}} when using destructuring rest with trailing comma ({{bug(1041341)}}).
- Duplicate `__proto__` properties are now allowed in [object destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ({{bug(1204024)}}).
- {{jsxref("Array.prototype.toLocaleString()")}} has been re-implemented to support the Intl API parameters "`locales`" and "`options`" ({{bug(1130636)}}).
- {{jsxref("TypedArray")}} constructors now accept [iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) to create new typed arrays ({{bug(1232266)}}).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} now require that their `this` values are valid Typed Array constructors ({{bug(1122396)}}).
- The non-standard {{jsxref("ArrayBuffer.slice()")}} method (not {{jsxref("ArrayBuffer.prototype.slice()")}}) is deprecated and now presents a warning when used ({{bug(1316913)}}).
- [Unicode code point escapes](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) can now also be used as identifiers (e.g. "`let \u{61} = 123`", see {{bug(1314037)}}).
- To conform with ES2015, `\u2e2f` and `ⸯ` now throw when used as identifier, for details see {{bug(917436)}} and {{bug(1197230)}}.

### WebAssembly

- Support for [WebAssembly](/en-US/docs/WebAssembly) has been added to Gecko.

### DOM

- The [Selection API](/en-US/docs/Web/API/Selection) has fully shipped, including the new {{domxref("Document/selectstart_event", "selectstart")}} and {{domxref("Document/selectionchange_event", "selectionchange")}} events ({{bug(1309612)}}).
- The property {{domxref("Event.composed")}} is now supported; this Boolean value indicates whether or not the event can bubble through the shadow root into the standard DOM ({{bug(1292063)}}).
- Only HTML elements, plus the {{SVGElement("svg")}} and {{MathMLElement("math")}} elements, can be put into full-screen mode by calling {{domxref("Element.requestFullscreen()")}} ({{bug(1305928)}}).
- [Touch events](/en-US/docs/Web/API/Touch_events) have been reenabled on Windows desktop platforms — see {{bug(1244402)}}. (They were disabled in Firefox 24 because they broke a number of major sites; see {{bug(888304)}}.)
- The {{domxref("Element/focusin_event", "focusin")}} and {{domxref("Element/focusout_event", "focusout")}} events are now implemented ({{bug("687787")}}).
- The {{domxref("isSecureContext")}} property has been implemented (see {{bug(1269052)}}).
- The [Web App Manifest](/en-US/docs/Web/Manifest) install event has been renamed appinstalled (see {{domxref("Window.appinstalled_event")}}, {{domxref("Window.appinstalled", "appinstalled")}}) to avoid confusion with the service worker install event (see {{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}}). See {{bug(1309099)}} for more details about this update.
- The {{domxref("DataTransfer.types")}} property of the [Drag and drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) now returns a frozen array of strings rather than a {{domxref("DOMStringList")}} (see {{bug(1298243)}}).
- The `loadstart` and `loadend` events are now fired on {{htmlelement("img")}} elements (see {{bug(1264769)}}).
- The {{domxref("Notification.requireInteraction")}} of the [Notifications API](/en-US/docs/Web/API/Notifications_API) has been implemented (see {{bug(862395)}}.)
- The {{domxref("Window.open()")}} method now has a `noopener` [window feature](/en-US/docs/Web/API/Window/open#window_functionality_features) available (see {{bug(1267339)}}), which mirrors the functionality of the `rel="noopener"` [Link type](/en-US/docs/Web/HTML/Link_types).
- The {{domxref("CustomElementRegistry.get()")}} method of the [Web Components API](/en-US/docs/Web/Web_Components) has been implemented (see {{bug(1275838)}}).
- [Pointer Event](/en-US/docs/Web/API/Pointer_events) {{domxref("PointerEvent.width","width")}} and {{domxref("PointerEvent.height","height")}} properties now default to a value of 1 (see {{bug(1304315)}}).
- The [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) has been updated to include changes in the [latest spec](https://wicg.github.io/entries-api/) (see {{bug(1284987)}} for the exact details).
- The {{domxref("Event.cancelBubble", "cancelBubble")}} property, which was defined on {{domxref("UIEvent")}}, is now defined on the {{domxref("Event")}} interface instead. See {{bug(1298970)}} for more details.

#### Changes and removals

- The Firefox OS APIs that deal with managing phone calls (Contacts, MobileConnection, Icc, etc.) have been removed ({{bug(1311206)}}).
- The Firefox OS `Identity` interface has been removed ({{bug(1309030)}}).
- The Firefox OS Voicemail API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) has been removed ({{bug(1309723)}}).
- The Firefox OS Cell Broadcast API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) has been removed ({{bug(1306772)}}).
- The Firefox OS TV broadcast-related APIs have been removed ({{bug(1306778)}}).
- The Firefox OS FM Radio API (`FMRadio`, `Navigator.mozFMRadio`) has been removed ({{bug(1306779)}}).

### Service Workers and Fetch

- The `Headers.getAll()` method has been removed, and {{domxref("Headers.get()")}} now retrieves all values of the specified header, not just the first one (see {{bug(1278275)}}). This is in accordance with the latest Fetch API spec updates.

### Web Audio API

- The {{domxref("ConstantSourceNode")}} interface has been added; it represents an audio source which always outputs a stream of samples which all have the same value. See [Controlling multiple parameters with ConstantSourceNode](/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) for an example showing how this can be used to simplify some complex audio flows.

### WebRTC

- When an ICE connection is temporarily disrupted, the {{domxref("RTCPeerConnection.iceConnectionState")}} property now gets set to `"disconnected"`; this indicates a transitory failure that may resolve itself shortly, with the connection returning to the `"connected"` state afterward ({{bug(852665)}}).
- The {{domxref("MediaDevices.devicechange_event")}} event and its corresponding handler, which were implemented but disabled by default on Mac only in Firefox 51, have been implemented on Windows and Linux and are now enabled by default on all platforms.
- The {{domxref("MediaStream.active")}} property is now supported. This read-only Boolean property indicates whether or not at least one track on the stream is currently playing.
- Prior to Firefox 52, the {{domxref("MediaStreamTrack.stop()")}} method could only stop local tracks (that is, tracks obtained through {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}). Now a variety of tracks can be stopped, including those on a {{domxref("MediaStream")}} associated with a [WebRTC](/en-US/docs/Glossary/WebRTC) connection, [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) stream, or {{domxref("CanvasCaptureMediaStreamTrack", "CanvasCaptureMediaStream")}}.
- Previously, changing a {{domxref("TextTrack")}}'s {{domxref("TextTrack.mode", "mode")}} repeatedly during a single pass through the Firefox event loop would result in multiple {{domxref("HTMLElement/change_event", "change")}} events being delivered to the {{domxref("TextTrackList")}} specified by the parent media element's {{domxref("HTMLMediaElement.textTracks", "textTracks")}} property. Now these changes are consolidated into one event ({{bug(882674)}}).

### Audio/Video/Media

- The {{domxref("MediaError")}} objects specified in {{domxref("HTMLMediaElement.error")}} when an error occurs handling an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element now include a {{domxref("MediaError.message", "message")}} property, which provides a specific description of the error which occurred. This string offers details particular to this exact error occurrence, offering insight into why things went wrong ({{bug(1299072)}}). This field has been included in Firefox nightly builds since Firefox 51, but is now available in all builds, up to and including release.

### Other APIs

- The method {{domxref("FileSystemFileEntry.createWriter()")}}, which was added (but always returned an error) in Firefox 50 has been removed ({{bug(1315185)}}.
- The proprietary Firefox OS `Apps installation/management APIs` have been removed from the platform (see {{bug(1261019)}}).
- The proprietary Firefox OS `Web Telephony API` has been removed from the platform (see {{bug(1309719)}}).
- The proprietary Firefox OS `Web Bluetooth API` has been removed from the platform (see {{bug(1310020)}}).
- The [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) is now available only to chrome/privileged code (see {{bug(1313580)}}).
- `ImageBitmapRenderingContext.transferImageBitmap()` has been renamed to {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} (see {{bug(1304767)}}).
- The `mozDash` and `mozDashOffset` members have been removed from {{domxref("CanvasRenderingContext2D")}} (see {{bug(931389)}}).

### HTTP

- The {{HTTPHeader("Referrer-Policy")}} header now supports the directives `same-origin`, `strict-origin`, and `strict-origin-when-cross-origin` ({{bug(1276836)}}).
- The [`'strict-dynamic'` source expression](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic) is now supported for {{HTTPHeader("Content-Security-Policy")}} directives, such as {{CSP("script-src")}} ({{bug(1299483)}}).
- Insecure sites (`http:`) can't [set cookies](/en-US/docs/Web/HTTP/Cookies) with the "secure" directive anymore as per the [Strict Secure Cookies specification](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ({{bug(976073)}}).
- The maximum table size format of the HTTP/2 header compression format [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) has been increased from 4 KB to 64 KB ({{bug(1296280)}}).
- The {{HTTPHeader("Large-Allocation")}} header has been added ({{bug(1304140)}}).

### SVG

- SVG documents are now represented using the {{domxref("XMLDocument")}} interface instead of SVGDocument. This is a change made in the SVG 2 specification.

### Security

- When login pages (i.e., those containing an [`<input type="password">`](/en-US/docs/Web/HTML/Element/input/password) field) are created so that they would be submitted insecurely, Firefox displays an in-context warning message below the password field to warn users ({{bug(1319119)}}). Autofill is also disabled on insecure login forms ({{bug(1217152)}}). See [Insecure passwords](/en-US/docs/Web/Security/Insecure_passwords) for more details.
- Support for SHA-1 SSL certificates has been removed; navigating to a secure page that uses a SHA-1 certificate will now result in an `Untrusted Connection` error ({{bug(1330043)}}).

## Plugins

All NPAPI plugin support except Flash has been dropped. Flash usage is also set to be phased out in the future.

## Changes for add-on and Mozilla developers

### WebExtensions

New APIs:

- [`sessions` API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sessions)
- [`topSites` API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/topSites)
- [`omnibox` API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/omnibox)
- [`runtime.onInstalled`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled) and [`runtime.onStartup`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup) events
- [asynchronous event listeners in webRequest](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest#modifying_requests)
- [`bookmarks.onMoved`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved), [`bookmarks.onCreated`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onCreated), [`bookmarks.onChanged`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged) events
- `_execute_browser_action` and `_execute_page_action` in the [commands manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)
- [`match_about_blank`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#match_about_blank) in the content_scripts manifest key

### Interfaces

- `nsIDroppedLinkHandler.dropLinks` method and `nsIDroppedLinkItem` interface have been added to handle dropping multiple items ({{bug(92737)}}).

### XUL

- `tabbrowser.loadTabs(uris, params)` method overload has been added ({{bug(92737)}}).
- `browser.droppedLinkHandler` function signature has been changed ({{bug(92737)}}).

## Older versions

{{Firefox_for_developers(51)}}
