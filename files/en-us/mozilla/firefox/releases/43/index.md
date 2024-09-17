---
title: Firefox 43 for developers
slug: Mozilla/Firefox/Releases/43
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) Firefox 43 was released on December 15, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Server logging in the Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#server)
- [Quickly find the rule that overrode a CSS declaration](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#overridden-declarations)
- ["Use in Console" context menu item in Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- ["Strict" option for filtering in the Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#strict-search)
- [Network entries in the Console now link to the Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#network)
- [Markup view shows indicators for pseudo-classes locked for elements](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#setting-hover-active-focus)
- New sidebar UI for WebIDE

[All devtools bugs fixed between Firefox 42 and Firefox 43](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Support for the standard, unprefixed version of {{Cssxref("hyphens")}} has been landed ([Firefox bug 953408](https://bugzil.la/953408)).
- The shorthand property {{cssxref("font")}} has been updated to accept {{cssxref("font-stretch")}} values ([Firefox bug 1057680](https://bugzil.la/1057680)).
- To match the latest evolution of the specification, the {{cssxref(":fullscreen")}} pseudo-class now selects the whole stack of elements in full screen, and not only the top-level one ([Firefox bug 1199522](https://bugzil.la/1199522)).
- The deprecated SVG values for the {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb`, and `tb-rl`, have been added in CSS as aliases to standard properties ([Firefox bug 1205787](https://bugzil.la/1205787)).

### HTML

- For {{htmlelement("img")}} with ICO image containing multiple frames, the intrinsic dimension of the image is set to the one of the largest frame, and no more of the smallest frame [Firefox bug 1201796](https://bugzil.la/1201796).
- The value of the document's viewport (defined with `<meta name="viewport>`)can now dynamically be changed via JavaScript ([Firefox bug 976616](https://bugzil.la/976616)).

### JavaScript

#### New APIs

- The new ES2016 methods {{jsxref("Array.prototype.includes()")}} and {{jsxref("TypedArray.prototype.includes()")}} are now enabled by default ([Firefox bug 1070767](https://bugzil.la/1070767)).

#### Changes regarding the `arguments` object

- To match the ES2015 specification, [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) no longer have their own [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object. The `arguments` object is now lexically bound (inherited from the outer function). In most cases, [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) are a good alternative `(...args) => args[i]`, see [Firefox bug 889158](https://bugzil.la/889158).
- The [arguments](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object is now allowed in conjunction with [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) ([Firefox bug 1133298](https://bugzil.la/1133298)).
- From now on, a mapped [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object in non-strict functions is only provided if the function does **not** contain any [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), any [default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) or any [destructured parameters](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ([Firefox bug 1175394](https://bugzil.la/1175394)).

#### Other changes

- [Generators](/en-US/docs/Web/JavaScript/Reference/Statements/function*) and [generator methods](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) are no longer constructable as per ES2016 ([Firefox bug 1191486](https://bugzil.la/1191486)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

_No change._

#### IndexedDB

- A new feature called [locale-aware sorting](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) has been added allowing for the creation of indexes with a locale specified, which can then be used to sort data according to the rules of that locale ([Firefox bug 871846](https://bugzil.la/871846)). This is a non-standard Firefox-specific feature.

#### Service Workers

- As per the specification, if {{domxref("ExtendableEvent.waitUntil()")}} is called outside of the {{domxref("ExtendableEvent")}} handler, Firefox will now throw an `InvalidStateError`; in addition, multiple calls to {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} will now stack up, and the resulting promises will be added to the list of [extend lifetime promises](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) ([Firefox bug 1180274](https://bugzil.la/1180274)).
- {{domxref("PushMessageData")}} methods have been implemented ([Firefox bug 1149195](https://bugzil.la/1149195)).

#### WebRTC

- The {{domxref("HTMLCanvasElement.captureStream()")}} method has been activated by default ([Firefox bug 1177276](https://bugzil.la/1177276)).
- The non-standard constraint style option list for `RTCOfferOptions` has been deprecated and will be removed entirely in Firefox 44.

#### Miscellaneous

- The [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) now uses the new promise syntax for {{domxref("Navigator.getBattery()")}}, as specified in the recent evolution of the specification ([Firefox bug 1050749](https://bugzil.la/1050749)).
- The `User-Agent` header is no longer in the list of {{Glossary("Forbidden_header_name", "forbidden header names")}} so it can now be set in a [Fetch](/en-US/docs/Web/API/Fetch_API) {{domxref("Headers")}} object, via XHR {{domxref("XMLHttpRequest.setRequestHeader()")}},… ([Firefox bug 1188932](https://bugzil.la/1188932)).
- The {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}} constructor can now accept an options dictionary as a parameter, which allows you to set custom bitrates for the audio/video to be recorded ([Firefox bug 1161276](https://bugzil.la/1161276)).
- The {{domxref("PerformanceObserver")}} interface, belonging to the [Performance APIs](/en-US/docs/Web/API/Performance_API) has been implemented ([Firefox bug 1165796](https://bugzil.la/1165796)).
- The Frame Timing API has been added: the `PerformanceRenderTiming` and `PerformanceCompositeTiming` interfaces are now available ([Firefox bug 1191178](https://bugzil.la/1191178)).
- The modern [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API) has been implemented: unprefixed {{domxref("Screen.orientation")}} and the {{domxref("ScreenOrientation")}} interface are now available ([Firefox bug 1131470](https://bugzil.la/1131470)). The non-standard `Screen.mozOrientation`, `Screen.onmozorientationchange`, `Screen.mozLockOrientation()`, and `Screen.mozUnlockOrientation()` will be removed in the future.
- Under Linux, like under Windows, {{domxref("Event.timeStamp")}} now returns a {{domxref("DOMHighResTimeStamp")}} ([Firefox bug 1026803](https://bugzil.la/1026803)).
- Experimental support for {{domxref("Selection")}} events {{domxref("Document/selectionchange_event", "selectionchange")}} and {{domxref("Node/selectstart_event", "selectstart")}}, as well as the {{domxref("Document.selectionchange_event", "Document.onselectionchange")}} and {{domxref("Node/selectstart_event", "HTMLInputElement.onselectstart")}} event handlers property has been added ([Firefox bug 571294](https://bugzil.la/571294)). The `selectionchange` event is fired on the {{domxref("Document")}} if the associated `Selection` object is concerned, or on the specific {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} ([Firefox bug 1196479](https://bugzil.la/1196479)). This feature is controlled by the `dom.select_events.enabled` preference, which defaults to `false`, except on Nightly.
- Support for {{domxref("MouseEvent.offsetX")}} and {{domxref("MouseEvent.offsetY")}} have been activated on Firefox for Android and Firefox OS ([Firefox bug 1204841](https://bugzil.la/1204841)).
- The `HTMLCanvasElement.mozFetchAsStream()` method has been removed ([Firefox bug 1206030](https://bugzil.la/1206030)).
- The constructor {{domxref("Request.Request", "Request()")}} as well as {{domxref("Window/fetch", "fetch()")}} will now raise a {{jsxref("TypeError")}} exception when used with a URL containing a username and password ([Firefox bug 1195820](https://bugzil.la/1195820)).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## HTTP

_No change._

## Networking

_No change._

## Security

- Access to Web Storage (i.e. `localStorage` and `sessionStorage`) from third-party IFrames is now denied if the user has [disabled third-party cookies](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) ([Firefox bug 536509](https://bugzil.la/536509)).
- This whitelist has even been removed in Nightly and Aurora/Dev Edition of the browser ([Firefox bug 1201023](https://bugzil.la/1201023)). It is currently scheduled that this removal will also happen for Beta and Release versions for the next version (Firefox 44).
- Subresource integrity has been implemented for {{htmlelement("script")}} and {{htmlelement("link")}} that links to stylesheets ([Firefox bug 992096](https://bugzil.la/992096)).

## Changes for add-on and Mozilla developers

### Interfaces

_No change._

### XUL

_No change._

### JavaScript code modules

_No change._

### XPCOM

_No change._

### Plugins

- In preparation for future releases to switch over to multi-process content, [NPAPI](/en-US/docs/Glossary/Plugin) plugins can no longer be run in the same process as the page content. The preferences starting with `dom.ipc.plugins` are no longer used.

### Other

_No change._

## Older versions

{{Firefox_for_developers}}
