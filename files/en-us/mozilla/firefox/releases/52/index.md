---
title: Firefox 52 for developers
slug: Mozilla/Firefox/Releases/52
page-type: firefox-release-notes
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

- The `rel="noopener"` [Link type](/en-US/docs/Web/HTML/Reference/Attributes/rel) has been implemented (see [Firefox bug 1222516](https://bugzil.la/1222516)).

### CSS

#### New features

- Added {{cssxref(":focus-within")}} pseudo-class ([Firefox bug 1176997](https://bugzil.la/1176997)).
- Added support for `display:flex/grid` and columnset layout inside {{HTMLElement("button")}} elements ([Firefox bug 984869](https://bugzil.la/984869)).
- Implemented interpolation between numeric color and [currentcolor](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) ([Firefox bug 1299741](https://bugzil.la/1299741)).
- Implemented flexbox layout for `{{cssxref("justify-content")}}: space-evenly` and `{{cssxref("align-content")}}: space-evenly` ([Firefox bug 1235922](https://bugzil.la/1235922)).
- Added support for subpixel antialiasing in CSS {{cssxref("mask")}} / {{cssxref("clip-path")}} ([Firefox bug 1305259](https://bugzil.la/1305259)).
- Implemented CSS Text 3 segment break transformation rules ([Firefox bug 1081858](https://bugzil.la/1081858)).
- Basic shape clipping (as applied via the {{cssxref("clip-path")}} property) can now be applied to SVG content ([Firefox bug 1246741](https://bugzil.la/1246741)).
- Implemented Flexbox layout for {{cssxref("align-self")}} and {{cssxref("justify-self")}} ([Firefox bug 1221524](https://bugzil.la/1221524)).
- The {{cssxref("touch-action")}} property is now enabled by default on all platforms. (For the full story, see [intent to ship mail #1](https://groups.google.com/forum/#!topic/mozilla.dev.platform/6CGjsm1XpD4) and [intent to ship mail #2](https://groups.google.com/forum/#!topic/mozilla.dev.platform/SYEzvXJKw9M).)
- Flexbox {{cssxref("align-content")}} handling & single-line-sizing should depend on {{cssxref("flex-wrap")}}, not number of lines ([Firefox bug 1090031](https://bugzil.la/1090031)).
- [CSS Animations](/en-US/docs/Web/CSS/CSS_animations) can now be used to animate non-interpolated properties (see [Firefox bug 1064937](https://bugzil.la/1064937)).
- Changed `baseline|last-baseline` to `[ first | last ]? baseline` ([Firefox bug 1313254](https://bugzil.la/1313254)).
- The used value for `left`/`right` is `start` for the block-axis ([Firefox bug 1221565](https://bugzil.la/1221565)).
- Stretching flexible tracks with an indefinite containing block length now respects the min/max size([Firefox bug 1309407](https://bugzil.la/1309407)).
- The initial values of {{cssxref("mask-position")}} and {{cssxref("mask-repeat")}} have been changed to `0% 0%` and `repeat`, respectively ([Firefox bug 1308963](https://bugzil.la/1308963)).
- There have been a number of changes to CSS {{cssxref("&lt;color&gt;")}} values (see [Firefox bug 1295456](https://bugzil.la/1295456)):

  - `rgba()` and `hsla()` have now been redefined as aliases of `rgb()` and `hsl()`; both accept the same parameter syntax.
  - `rgb(`) and `hsl()` now accept an optional alpha value, e.g., `rgb(255, 0, 0, 0.5)`.
  - Color functions now accept space-separated parameters rather than commas, e.g., `rgb(255 0 0 / 0.5)`.
  - Alpha values can now be specified as percentages as well as numbers, e.g., `rgb(255 0 0 / 50%)`.
  - The hue component in `hsl()` colors can now be specified as an angle, as well as a number, e.g., `hsl(120deg, 60%, 70%)`.

- Firefox's implementation of child-indexed pseudo-classes (such as {{cssxref(":nth-child")}}, {{cssxref(":first-child")}}, and so forth) has been updated to match the CSS selectors level 4 specification: these pseudo-classes now match the appropriate sibling elements rather than the children of their parent element. This allows these pseudo-classes to be used when there is no parent, or the parent is not an {{domxref("Element")}} ([Firefox bug 1300374](https://bugzil.la/1300374).

#### CSS Grids

- [CSS Grids](/en-US/docs/Web/CSS/CSS_grid_layout) are implemented.

#### Changes and removals

- Unprefixed multi-column properties (and added back `-moz` prefixed versions as aliases, for now) ([Firefox bug 1300895](https://bugzil.la/1300895)).
- Stopped wrapping abspos children of flex container in anonymous flex items([Firefox bug 1269045](https://bugzil.la/1269045)).
- Implemented grid container baselines ([Firefox bug 1151204](https://bugzil.la/1151204)).
- Removed `<flex>` min-sizing from the style system ([Firefox bug 1305244](https://bugzil.la/1305244)).
- Remove preference `layout.css.masking.enabled` ([Firefox bug 1308239](https://bugzil.la/1308239)).
- The proprietary `-moz-images-in-menus` and `-moz-images-in-buttons` [media types](/en-US/docs/Web/CSS/@media#media_features) have been removed (see [Firefox bug 1302157](https://bugzil.la/1302157)).
- Removed `-moz-use-text-color` value from color properties; use [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword) instead ([Firefox bug 1306214](https://bugzil.la/1306214)).
- \[css-grid] 'max-width' set on grid item causes text to overflow ([Firefox bug 1330380](https://bugzil.la/1330380)).

### JavaScript

#### New features

- Support for the async functions has been added. This adds {{jsxref("Statements/async_function", "async function")}} declaration, {{jsxref("Operators/async_function", "async function")}} expression, and the {{jsxref("Operators/await", "await")}} keyword ([Firefox bug 1185106](https://bugzil.la/1185106)).
- Implemented ES2017 [trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas) in functions ([Firefox bug 1303788](https://bugzil.la/1303788)).
- Implemented {{jsxref("Functions/rest_parameters", "rest parameter destructuring", "#Destructuring_rest_parameters", 1)}} ([Firefox bug 1243717](https://bugzil.la/1243717)).
- The {{jsxref("Operators", "exponentiation operator (**)", "#Exponentiation_(**)", 1)}} is now enabled by default ([Firefox bug 1291212](https://bugzil.la/1291212)).
- You can now use [IANA time zone names](https://www.iana.org/time-zones) in the `timeZone` option of date related APIs like {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} or {{jsxref("Date.toLocaleString()")}} ([Firefox bug 837961](https://bugzil.la/837961)).

#### Changes and removals

- [Array destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#array_destructuring) now throws a {{jsxref("SyntaxError")}} when using destructuring rest with trailing comma ([Firefox bug 1041341](https://bugzil.la/1041341)).
- Duplicate `__proto__` properties are now allowed in [object destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring) ([Firefox bug 1204024](https://bugzil.la/1204024)).
- {{jsxref("Array.prototype.toLocaleString()")}} has been re-implemented to support the Intl API parameters `locales` and `options` ([Firefox bug 1130636](https://bugzil.la/1130636)).
- {{jsxref("TypedArray")}} constructors now accept [iterables](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) to create new typed arrays ([Firefox bug 1232266](https://bugzil.la/1232266)).
- {{jsxref("TypedArray.from()")}}, {{jsxref("TypedArray.of()")}}, {{jsxref("TypedArray.prototype.filter()")}}, {{jsxref("TypedArray.prototype.map()")}}, {{jsxref("TypedArray.prototype.slice()")}}, {{jsxref("TypedArray.prototype.subarray()")}} now require that their `this` values are valid Typed Array constructors ([Firefox bug 1122396](https://bugzil.la/1122396)).
- The non-standard {{jsxref("ArrayBuffer.slice()")}} method (not {{jsxref("ArrayBuffer.prototype.slice()")}}) is deprecated and now presents a warning when used ([Firefox bug 1316913](https://bugzil.la/1316913)).
- [Unicode code point escapes](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#unicode_code_point_escapes) can now also be used as identifiers (e.g., `let \u{61} = 123`, see [Firefox bug 1314037](https://bugzil.la/1314037)).
- To conform with ES2015, `\u2e2f` and `ⸯ` now throw when used as identifier, for details see [Firefox bug 917436](https://bugzil.la/917436) and [Firefox bug 1197230](https://bugzil.la/1197230).

### WebAssembly

- Support for [WebAssembly](/en-US/docs/WebAssembly) has been added to Gecko.

### DOM

- The [Selection API](/en-US/docs/Web/API/Selection) has fully shipped, including the new {{domxref("Node/selectstart_event", "selectstart")}} and {{domxref("Document/selectionchange_event", "selectionchange")}} events ([Firefox bug 1309612](https://bugzil.la/1309612)).
- The property {{domxref("Event.composed")}} is now supported; this Boolean value indicates whether or not the event can bubble through the shadow root into the standard DOM ([Firefox bug 1292063](https://bugzil.la/1292063)).
- Only HTML elements, plus the {{SVGElement("svg")}} and {{MathMLElement("math")}} elements, can be put into full-screen mode by calling {{domxref("Element.requestFullscreen()")}} ([Firefox bug 1305928](https://bugzil.la/1305928)).
- [Touch events](/en-US/docs/Web/API/Touch_events) have been re-enabled on Windows desktop platforms — see [Firefox bug 1244402](https://bugzil.la/1244402). (They were disabled in Firefox 24 because they broke a number of major sites; see [Firefox bug 888304](https://bugzil.la/888304).)
- The {{domxref("Element/focusin_event", "focusin")}} and {{domxref("Element/focusout_event", "focusout")}} events are now implemented ([Firefox bug 687787](https://bugzil.la/687787)).
- The {{domxref("WorkerGlobalScope.isSecureContext")}} property has been implemented (see [Firefox bug 1269052](https://bugzil.la/1269052)).
- The [Web App Manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) install event has been renamed {{domxref("Window.appinstalled_event", "appinstalled")}} to avoid confusion with the service worker install event (see {{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}}). See [Firefox bug 1309099](https://bugzil.la/1309099) for more details about this update.
- The {{domxref("DataTransfer.types")}} property of the [Drag and drop API](/en-US/docs/Web/API/HTML_Drag_and_Drop_API) now returns a frozen array of strings rather than a {{domxref("DOMStringList")}} (see [Firefox bug 1298243](https://bugzil.la/1298243)).
- The `loadstart` and `loadend` events are now fired on {{htmlelement("img")}} elements (see [Firefox bug 1264769](https://bugzil.la/1264769)).
- The {{domxref("Notification.requireInteraction")}} of the [Notifications API](/en-US/docs/Web/API/Notifications_API) has been implemented (see [Firefox bug 862395](https://bugzil.la/862395).)
- The {{domxref("Window.open()")}} method now has a `noopener` [window feature](/en-US/docs/Web/API/Window/open#window_functionality_features) available (see [Firefox bug 1267339](https://bugzil.la/1267339)), which mirrors the functionality of the `rel="noopener"` [Link type](/en-US/docs/Web/HTML/Reference/Attributes/rel).
- The {{domxref("CustomElementRegistry.get()")}} method of the [Web Components API](/en-US/docs/Web/API/Web_components) has been implemented (see [Firefox bug 1275838](https://bugzil.la/1275838)).
- [Pointer Event](/en-US/docs/Web/API/Pointer_events) {{domxref("PointerEvent.width","width")}} and {{domxref("PointerEvent.height","height")}} properties now default to a value of 1 (see [Firefox bug 1304315](https://bugzil.la/1304315)).
- The [File and Directory Entries API](/en-US/docs/Web/API/File_and_Directory_Entries_API) has been updated to include changes in the [latest spec](https://wicg.github.io/entries-api/) (see [Firefox bug 1284987](https://bugzil.la/1284987) for the exact details).
- The {{domxref("Event.cancelBubble", "cancelBubble")}} property, which was defined on {{domxref("UIEvent")}}, is now defined on the {{domxref("Event")}} interface instead. See [Firefox bug 1298970](https://bugzil.la/1298970) for more details.

#### Changes and removals

- The Firefox OS APIs that deal with managing phone calls (Contacts, MobileConnection, Icc, etc.) have been removed ([Firefox bug 1311206](https://bugzil.la/1311206)).
- The Firefox OS `Identity` interface has been removed ([Firefox bug 1309030](https://bugzil.la/1309030)).
- The Firefox OS Voicemail API (`MozVoicemail`, `MozVoicemailEvent`, `MozVoicemailStatus`, `Navigator.mozVoicemail`) has been removed ([Firefox bug 1309723](https://bugzil.la/1309723)).
- The Firefox OS Cell Broadcast API (`MozCellBroadcast`, `MozCellBroadcastEvent`, `MozCellBroadcastMessage`, `Navigator.mozCellBroadcast`) has been removed ([Firefox bug 1306772](https://bugzil.la/1306772)).
- The Firefox OS TV broadcast-related APIs have been removed ([Firefox bug 1306778](https://bugzil.la/1306778)).
- The Firefox OS FM Radio API (`FMRadio`, `Navigator.mozFMRadio`) has been removed ([Firefox bug 1306779](https://bugzil.la/1306779)).

### Service Workers and Fetch

- The `Headers.getAll()` method has been removed, and {{domxref("Headers.get()")}} now retrieves all values of the specified header, not just the first one (see [Firefox bug 1278275](https://bugzil.la/1278275)). This is in accordance with the latest Fetch API spec updates.

### Web Audio API

- The {{domxref("ConstantSourceNode")}} interface has been added; it represents an audio source which always outputs a stream of samples which all have the same value. See [Controlling multiple parameters with ConstantSourceNode](/en-US/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) for an example showing how this can be used to simplify some complex audio flows.

### WebRTC

- When an ICE connection is temporarily disrupted, the {{domxref("RTCPeerConnection.iceConnectionState")}} property now gets set to `"disconnected"`; this indicates a transitory failure that may resolve itself shortly, with the connection returning to the `"connected"` state afterward ([Firefox bug 852665](https://bugzil.la/852665)).
- The `MediaDevices` {{domxref("MediaDevices.devicechange_event", "devicechange")}} event and its corresponding handler, which were implemented but disabled by default on Mac only in Firefox 51, have been implemented on Windows and Linux and are now enabled by default on all platforms.
- The {{domxref("MediaStream.active")}} property is now supported. This read-only Boolean property indicates whether or not at least one track on the stream is currently playing.
- Prior to Firefox 52, the {{domxref("MediaStreamTrack.stop()")}} method could only stop local tracks (that is, tracks obtained through {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}). Now a variety of tracks can be stopped, including those on a {{domxref("MediaStream")}} associated with a [WebRTC](/en-US/docs/Glossary/WebRTC) connection, [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) stream, or {{domxref("CanvasCaptureMediaStreamTrack", "CanvasCaptureMediaStream")}}.
- Previously, changing a {{domxref("TextTrack")}}'s {{domxref("TextTrack.mode", "mode")}} repeatedly during a single pass through the Firefox event loop would result in multiple {{domxref("HTMLElement/change_event", "change")}} events being delivered to the {{domxref("TextTrackList")}} specified by the parent media element's {{domxref("HTMLMediaElement.textTracks", "textTracks")}} property. Now these changes are consolidated into one event ([Firefox bug 882674](https://bugzil.la/882674)).

### Audio/Video/Media

- The {{domxref("MediaError")}} objects specified in {{domxref("HTMLMediaElement.error")}} when an error occurs handling an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element now include a {{domxref("MediaError.message", "message")}} property, which provides a specific description of the error which occurred. This string offers details particular to this exact error occurrence, offering insight into why things went wrong ([Firefox bug 1299072](https://bugzil.la/1299072)). This field has been included in Firefox nightly builds since Firefox 51, but is now available in all builds, up to and including release.

### Other APIs

- The method {{domxref("FileSystemFileEntry.createWriter()")}}, which was added (but always returned an error) in Firefox 50 has been removed ([Firefox bug 1315185](https://bugzil.la/1315185).
- The proprietary Firefox OS `Apps installation/management APIs` have been removed from the platform (see [Firefox bug 1261019](https://bugzil.la/1261019)).
- The proprietary Firefox OS `Web Telephony API` has been removed from the platform (see [Firefox bug 1309719](https://bugzil.la/1309719)).
- The proprietary Firefox OS `Web Bluetooth API` has been removed from the platform (see [Firefox bug 1310020](https://bugzil.la/1310020)).
- The [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) is now available only to chrome/privileged code (see [Firefox bug 1313580](https://bugzil.la/1313580)).
- `ImageBitmapRenderingContext.transferImageBitmap()` has been renamed to {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} (see [Firefox bug 1304767](https://bugzil.la/1304767)).
- The `mozDash` and `mozDashOffset` members have been removed from {{domxref("CanvasRenderingContext2D")}} (see [Firefox bug 931389](https://bugzil.la/931389)).

### HTTP

- The {{HTTPHeader("Referrer-Policy")}} header now supports the directives `same-origin`, `strict-origin`, and `strict-origin-when-cross-origin` ([Firefox bug 1276836](https://bugzil.la/1276836)).
- The [`'strict-dynamic'` source expression](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#strict-dynamic) is now supported for {{HTTPHeader("Content-Security-Policy")}} directives, such as {{CSP("script-src")}} ([Firefox bug 1299483](https://bugzil.la/1299483)).
- Insecure sites (`http:`) can't [set cookies](/en-US/docs/Web/HTTP/Guides/Cookies) with the "secure" directive anymore as per the [Strict Secure Cookies specification](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-alone-01) ([Firefox bug 976073](https://bugzil.la/976073)).
- The maximum table size format of the HTTP/2 header compression format [HPACK](https://datatracker.ietf.org/doc/html/rfc7541) has been increased from 4 KB to 64 KB ([Firefox bug 1296280](https://bugzil.la/1296280)).
- The {{HTTPHeader("Large-Allocation")}} header has been added ([Firefox bug 1304140](https://bugzil.la/1304140)).

### SVG

- SVG documents are now represented using the {{domxref("XMLDocument")}} interface instead of SVGDocument. This is a change made in the SVG 2 specification.

### Security

- When login pages (i.e., those containing an [`<input type="password">`](/en-US/docs/Web/HTML/Reference/Elements/input/password) field) are created so that they would be submitted insecurely, Firefox displays an in-context warning message below the password field to warn users ([Firefox bug 1319119](https://bugzil.la/1319119)). Autofill is also disabled on insecure login forms ([Firefox bug 1217152](https://bugzil.la/1217152)). See [Insecure passwords](/en-US/docs/Web/Security/Insecure_passwords) for more details.
- Support for SHA-1 SSL certificates has been removed; navigating to a secure page that uses a SHA-1 certificate will now result in an `Untrusted Connection` error ([Firefox bug 1330043](https://bugzil.la/1330043)).

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

- `nsIDroppedLinkHandler.dropLinks` method and `nsIDroppedLinkItem` interface have been added to handle dropping multiple items ([Firefox bug 92737](https://bugzil.la/92737)).

### XUL

- `tabbrowser.loadTabs(uris, params)` method overload has been added ([Firefox bug 92737](https://bugzil.la/92737)).
- `browser.droppedLinkHandler` function signature has been changed ([Firefox bug 92737](https://bugzil.la/92737)).

## Older versions

{{Firefox_for_developers}}
