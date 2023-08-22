---
title: Firefox 69 for developers
slug: Mozilla/Firefox/Releases/69
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 69 that will affect developers. Firefox 69 was released on September 3, 2019.

## Changes for web developers

### Developer tools

#### Debugger

- [Event Listener Breakpoints](https://firefox-source-docs.mozilla.org/devtools-user/debugger/set_event_listener_breakpoints/index.html) let you diagnose which code a page executes in response to browser events. You can pick specific types, such as `click` or `keydown`, or whole categories of events, like all mouse input events. ([Firefox bug 1526082](https://bugzil.la/1526082)).
- Scripts shown in the debugger's [source list pane](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane) can now be saved via the _Download file_ context menu option ([Firefox bug 888161](https://bugzil.la/888161)).
- In the debugger's source list pane, loaded extensions are listed with their name, rather than just their {{Glossary("UUID")}} ([Firefox bug 1486416](https://bugzil.la/1486416)), making it much easier to find the extension code you want to debug.
- The debugger now loads significantly faster via lazy-loading scripts ([Firefox bug 1527488](https://bugzil.la/1527488)).

#### Console

- [Browser Console](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) messages from [tracking protection errors](/en-US/docs/Web/Privacy/Firefox_tracking_protection), [CSP errors](/en-US/docs/Web/HTTP/CSP), and [CORS errors](/en-US/docs/Web/HTTP/CORS/Errors) are grouped automatically to reduce noise from repeated blocked resources and storage access ([Firefox bug 1522396](https://bugzil.la/1522396)).
- All visible logs in the console can shared by saving to a file or copying to clipboard via a new _Export visible messages to_ context menu item ([Firefox bug 1517728](https://bugzil.la/1517728)).
- The console's toolbar now responsively reduces its height into a single row to save vertical space ([Firefox bug 972530](https://bugzil.la/972530)).
- Messages from content can now be hidden in the console to focus on logs from the Firefox UI ([Firefox bug 1523842](https://bugzil.la/1523842)).

#### Network

- Resources that got blocked because of [CSP](/en-US/docs/Web/HTTP/CSP) or [Mixed Content](/en-US/docs/Web/Security/Mixed_content) are now shown in the Network panel, with details of the reason ([Firefox bug 1556451](https://bugzil.la/1556451)).
- A new optional _URL_ column in the Network panel can be enabled to show the full URL for resources ([Firefox bug 1341155](https://bugzil.la/1341155)).

#### Inspector

- When you hover over an element in the [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html), the infobar that appears now includes the fact that an element is a flex container, or flex item ([Firefox bug 1521188](https://bugzil.la/1521188)).
- When inspecting a page containing a grid with a subgrid, the parent grid's overlay lines are displayed whenever the subgrid's lines are displayed; if the parent grid's overlay checkbox is unselected, then its lines are translucent ([Firefox bug 1550519](https://bugzil.la/1550519)).

#### Remote debugging

- For our mobile web developers, we have migrated remote debugging from the old WebIDE into a re-designed [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html), making the experience of debugging [GeckoView](https://hacks.mozilla.org/2019/06/geckoview-in-2019/) on remote devices via USB much better ([Firefox bug 1462208](https://bugzil.la/1462208)).

#### General

- The DevTools panel order has been changed to reflect popularity ([Firefox bug 1558630](https://bugzil.la/1558630)).

### HTML

- In order to align more closely to the specification, the text track associated with a {{HTMLElement("track")}} element no longer loads the WebVTT file containing the text cues if the element is created in its default `disabled` {{domxref("TextTrack.mode", "mode")}}. To access or manipulate the cues when the `mode` is `disabled`, change the `mode` to either `started` or `hidden`; this will trigger loading of the WebVTT data ([Firefox bug 1550633](https://bugzil.la/1550633)).

#### Removals

- The HTML `<keygen>` element has been removed from Firefox. It was deprecated some time ago, and its purpose has generally been supplanted by other technologies ([Firefox bug 1315460](https://bugzil.la/1315460)).

### CSS

- We implemented the `break-spaces` value of the {{cssxref("white-space")}} property ([Firefox bug 1351432](https://bugzil.la/1351432)).
- The SVG geometry attributes (such as {{SVGAttr("width")}} and {{SVGAttr("height")}}) can now also be defined as CSS properties ([Firefox bug 1383650](https://bugzil.la/1383650)).
- The {{cssxref("::cue")}} selector — used to style the captions ("cues") displayed by [WebVTT](/en-US/docs/Web/API/WebVTT_API) — now enforces the limitations on which CSS properties may be used within cues, as per the specification ([Firefox bug 1321488](https://bugzil.la/1321488)).
- We've restricted the properties that may apply to {{cssxref("::marker")}} as per the specification ([Firefox bug 1552578](https://bugzil.la/1552578))
- The {{cssxref("overflow-block")}} and {{cssxref("overflow-inline")}} properties have been implemented ([Firefox bug 1470695](https://bugzil.la/1470695)).
- We added the ability to test for support of a selector when using CSS Feature Queries ({{cssxref("@supports")}}), with the `selector()` method ([Firefox bug 1513643](https://bugzil.la/1513643)).
- The {{cssxref("user-select")}} property — which specifies whether or not the user is able to select text in the affected element — has been unprefixed ([Firefox bug 1492739](https://bugzil.la/1492739)).
- We implemented local-specific casing behavior for Lithuanian ([Firefox bug 1322992](https://bugzil.la/1322992)), [as seen in this example](/en-US/docs/Web/CSS/text-transform#lowercase_lithuanian).
- We've implemented the {{cssxref("line-break")}} property of CSS Text ([Firefox bug 1011369](https://bugzil.la/1011369) and [Firefox bug 1531715](https://bugzil.la/1531715)).
- The {{cssxref("contain")}} property — which allows developers to define that an element and its contents are mostly independent of the rest of the DOM tree — got implemented [Firefox bug 1487493](https://bugzil.la/1487493).

### SVG

- We've added support for gzip-compressed SVG-in-OpenType ([Firefox bug 1359240](https://bugzil.la/1359240)).
- The {{domxref("SVGGeometryElement.isPointInFill()")}} and {{domxref("SVGGeometryElement.isPointInStroke()")}} methods have been implemented ([Firefox bug 1325319](https://bugzil.la/1325319)).

### JavaScript

- [Public class fields](/en-US/docs/Web/JavaScript/Reference/Classes#field_declarations) are enabled by default ([Firefox bug 1555464](https://bugzil.la/1555464)). See also [Class fields](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) for more information.
- The promise rejection events [`unhandledrejection`](/en-US/docs/Web/API/Window/unhandledrejection_event) and [`rejectionhandled`](/en-US/docs/Web/API/Window/rejectionhandled_event) are now enabled by default ([Firefox bug 1362272](https://bugzil.la/1362272)). To learn more about how these work, see [Promise rejection events](/en-US/docs/Web/JavaScript/Guide/Using_promises#promise_rejection_events).

### HTTP

- The HTTP headers {{HTTPHeader("Access-Control-Expose-Headers")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}, and {{HTTPHeader("Access-Control-Allow-Headers")}} now accept a wildcard value "`*`" for requests without credentials ([Firefox bug 1309358](https://bugzil.la/1309358)). This change has also been uplifted to Firefox 68 ESR.

### APIs

#### New APIs

- The [Resize Observer API](/en-US/docs/Web/API/Resize_Observer_API) is supported by default ([Firefox bug 1543839](https://bugzil.la/1543839)).
- The Microtask API ({{domxref("queueMicrotask()")}}) has been implemented ([Firefox bug 1480236](https://bugzil.la/1480236)).

#### DOM

- The {{domxref("DOMMatrix")}}, {{domxref("DOMPoint")}}, and related objects are now supported in workers ([Firefox bug 1420580](https://bugzil.la/1420580)).
- The `pageX` and `pageY` properties have been moved from {{domxref("UIEvent")}} to {{domxref("MouseEvent")}}, for better spec compliance ([Firefox bug 1178763](https://bugzil.la/1178763)). These properties are no longer exposed to the {{domxref("CompositionEvent")}}, {{domxref("FocusEvent")}}, {{domxref("InputEvent")}}, {{domxref("KeyboardEvent")}}, and {{domxref("TouchEvent")}} interfaces, which all inherit from `UIEvent`.
- The {{domxref("Blob.text()")}}, {{domxref("Blob.arrayBuffer()")}}, and {{domxref("Blob.stream()")}} methods are now implemented ([Firefox bug 1557121](https://bugzil.la/1557121)).
- {{domxref("DOMMatrix.fromMatrix()")}} has been implemented ([Firefox bug 1560462](https://bugzil.la/1560462)).
- We now support the six-parameter version of the {{domxref("DOMMatrix.scale()")}} method ([Firefox bug 1397945](https://bugzil.la/1397945)).
- The arguments for {{domxref("DOMMatrix.translate()")}}, {{domxref("DOMMatrix.skewX()")}}, and {{domxref("DOMMatrix.skewY()")}} are now all optional, as per spec ([Firefox bug 1397949](https://bugzil.la/1397949)).
- The {{domxref("Navigator.userAgent")}}, {{domxref("Navigator.platform")}}, and {{domxref("Navigator.oscpu")}} properties no longer reveal whether a user is running 32-bit Firefox on a 64-bit OS ([Firefox bug 1559747](https://bugzil.la/1559747)). They now say `Linux x86_64` instead of `Linux i686 on x86_64`, and `Win64` instead of `WOW64`.
- The remaining methods of {{domxref("HTMLDocument")}} have been moved to {{domxref("Document")}}. This should have no appreciable impact on your work in most cases. In particular, the {{domxref("document.close", "close()")}}, {{domxref("document.open", "open()")}}, and {{domxref("document.write", "write()")}} methods have been moved. So have the various editor related methods, including {{domxref("document.execCommand", "execCommand()")}} as well as various properties ([Firefox bug 1549560](https://bugzil.la/1549560)).
- We have implemented {{domxref("AbstractRange")}} and {{domxref("StaticRange")}} ([Firefox bug 1444847](https://bugzil.la/1444847)).

#### Media, Web Audio, and WebRTC

- For improved user security, and in-keeping with the latest versions of the [Media Capture and Streams](/en-US/docs/Web/API/Media_Capture_and_Streams_API) specification, the {{domxref("navigator.mediaDevices")}} property is no longer present if the context is insecure. To use {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}, and so forth, be sure your content is loaded using {{Glossary("HTTPS")}} ([Firefox bug 1528031](https://bugzil.la/1528031)).
- The Web Audio API's {{domxref("AudioParam.value")}} property now returns the actual value of the property at the current time, taking into account all scheduled or graduated value changes. Previously, Firefox only returned the most recent explicitly-set value (as through using the `value` setter) ([Firefox bug 893020](https://bugzil.la/893020)).
- We've updated {{domxref("MediaStreamAudioSourceNode")}} to use the new, lexicographical, ordering for tracks. Previously, track ordering was up to the individual browser, and could even change arbitrarily. In addition, attempting to create a `MediaStreamAudioSourceNode` using a stream that has no audio tracks now throws an `InvalidStateError` exception ([Firefox bug 1553215](https://bugzil.la/1553215)).
- The {{domxref("MediaTrackSettings.facingMode", "facingMode")}}, {{domxref("MediaTrackSettings.deviceId", "deviceId")}}, and {{domxref("MediaTrackSettings.groupId", "groupId")}} settings are now included as members of the {{domxref("MediaTrackSettings")}} object returned by calls to {{domxref("MediaStreamTrack.getSettings()")}} ([Firefox bug 1537986](https://bugzil.la/1537986)).

#### Removals

- The {{domxref("DOMMatrix.scaleNonUniformSelf()")}} method has been removed ([Firefox bug 1560119](https://bugzil.la/1560119)).

### WebDriver conformance (Marionette)

#### Other

- Marionette now dynamically handles the opening and closing of modal dialogs and user prompts ([Firefox bug 1477977](https://bugzil.la/1477977)), which also means that multiple open prompts will be handled ([Firefox bug 1487358](https://bugzil.la/1487358)).
- Tracking protection and DOM push features are now disabled by default to avoid the removal of parts of the DOM, and extra notifications ([Firefox bug 1542244](https://bugzil.la/1542244)).
- Automatic unloading of background tabs if Firefox runs into a low memory condition is now disabled — this badly interacts with automation when switching between tabs ([Firefox bug 1553748](https://bugzil.la/1553748)).

## Changes for add-on developers

### API changes

- The [UserScripts API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts) is now enabled by default.
- The [`topSites.get()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/topSites/get) method now has new options available — `includePinned` and `includeSearchShortcuts` ([Firefox bug 1547669](https://bugzil.la/1547669)).

### Other changes

- There are now [Group Policy options](https://github.com/mozilla/policy-templates/blob/master/README.md#extensionsettings) to blacklist all extensions except the ones that have been whitelisted ([Firefox bug 1522823](https://bugzil.la/1522823)).

## See also

- Hacks release post: [Firefox 69 — a tale of Resize Observer, microtasks, CSS, and DevTools](https://hacks.mozilla.org/2019/09/firefox-69-a-tale-of-resize-observer-microtasks-css-and-devtools/)

## Older versions

{{Firefox_for_developers(68)}}
