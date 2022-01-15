---
title: Firefox 43 for developers
slug: Mozilla/Firefox/Releases/43
tags:
  - Firefox
---
{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 43 was released on December 15, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Server logging in the Web Console](/en-US/docs/Tools/Web_Console/Console_messages#server)
- [Quickly find the rule that overrode a CSS declaration](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#overridden_declarations)
- ["Use in Console" context menu item in Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#element_popup_menu)
- ["Strict" option for filtering in the Rules view](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#strict_search)
- [Network entries in the Console now link to the Network Monitor](/en-US/docs/Tools/Web_Console/Console_messages#network)
- [Markup view shows indicators for pseudo-classes locked for elements](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#setting_hover_active_focus)
- New sidebar UI for WebIDE

[All devtools bugs fixed between Firefox 42 and Firefox 43](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678).

### CSS

- Support for the standard, unprefixed version of {{Cssxref("hyphens")}} has been landed ({{bug(953408)}}).
- The shorthand property {{cssxref("font")}} has been updated to accept {{cssxref("font-stretch")}} values ({{bug(1057680)}}).
- To match a latest evolution of the specification, the {{cssxref(":fullscreen")}} pseudo-class now selects the whole stack of elements in full screen, and not only the top-level one ({{bug(1199522)}}).
- The deprecated SVG values for the {{cssxref("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb`, and `tb-rl`, have been added in CSS as aliases to standard properties ({{bug(1205787)}}).

### HTML

- For {{htmlelement("img")}} with ICO image containing multiple frames, the intrinsic dimension of the image is set to the one of the largest frame, and no more of the smallest frame {{bug(1201796)}}.
- The value of the document's viewport (defined with `<meta name="viewport>`)can now dynamically be changed via JavaScript ({{bug(976616)}}).

### JavaScript

#### New APIs

- The new ES2016 methods {{jsxref("Array.prototype.includes()")}} and {{jsxref("TypedArray.prototype.includes()")}} are now enabled by default ({{bug(1070767)}}).

#### Changes regarding the `arguments` object

- To match the ES2015 specification, [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) no longer have their own [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object. The `arguments` object is now lexically bound (inherited from the outer function). In most cases, [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) are a good alternative `(...args) => args[i]`, see {{bug(889158)}}.
- The [arguments](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object is now allowed in conjunction with [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) ({{bug(1133298)}}).
- From now on, a mapped [`arguments`](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object in non-strict functions is only provided if the function does **not** contain any [rest parameters](/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), any [default parameters](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) or any [destructured parameters](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) ({{bug(1175394)}}).

#### Other changes

- [Generators](/en-US/docs/Web/JavaScript/Reference/Statements/function*) and [generator methods](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) are no longer constructable as per ES2016 ({{bug(1191486)}}).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

_No change._

#### IndexedDB

- A new feature called [locale-aware sorting](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) has been added allowing for the creation of indexes with a locale specified, which can then be used to sort data according to the rules of that locale ({{bug(871846)}}). This is a non-standard Firefox-specific feature.

#### Service Workers

- As per the specification, if {{domxref("ExtendableEvent.waitUntil()")}} is called outside of the {{domxref("ExtendableEvent")}} handler, Firefox will now throw an `InvalidStateError`; in addition, multiple calls to {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} will now stack up, and the resulting promises will be added to the list of [extend lifetime promises](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) ({{bug(1180274)}}).
- {{domxref("PushMessageData")}} methods have been implemented ({{bug(1149195)}}).

#### WebRTC

- The {{domxref("HTMLCanvasElement.captureStream()")}} method has been activated by default ({{bug(1177276)}}).
- The non-standard constraint style option list for `RTCOfferOptions` has been deprecated and will be removed entirely in Firefox 44.

#### Miscellaneous

- The [Battery Status API](/en-US/docs/Web/API/Battery_Status_API) now uses the new promise syntax for {{domxref("Navigator.getBattery()")}}, as specified in the recent evolution of the specification ({{bug(1050749)}}).
- The `User-Agent` header is no longer in the list of {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} so it can now be set in a [Fetch](/en-US/docs/Web/API/Fetch_API) {{domxref("Headers")}} object, via XHR {{domxref("XMLHttpRequest.setRequestHeader()")}},… ({{bug(1188932)}}).
- The {{domxref("MediaRecorder.MediaRecorder()")}} constructor can now accept an options dictionary as a parameter, which allows you to set custom bitrates for the audio/video to be recorded ({{bug("1161276")}}).
- The {{domxref("PerformanceObserver")}} interface, belonging to the [Performance Timeline API](/en-US/docs/Web/API/Performance_Timeline_API) has been implemented ({{bug(1165796)}}).
- The Frame Timing API has been added: the {{domxref("PerformanceRenderTiming")}} and {{domxref("PerformanceCompositeTiming")}} interfaces are now available ({{bug(1191178)}}).
- The modern [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API) has been implemented: unprefixed {{domxref("Screen.orientation")}} and the {{domxref("ScreenOrientation")}} interface are now available ({{bug("1131470")}}). The non-standard {{domxref("Screen.mozOrientation")}}, {{domxref("Screen.onmozorientationchange")}}, {{domxref("Screen.mozLockOrientation()")}}, and {{domxref("Screen.mozUnlockOrientation()")}} will be removed in the future.
- Under Linux, like under Windows, {{domxref("Event.timeStamp")}} now returns a {{domxref("DOMHighResTimeStamp")}} ({{bug(1026803)}}).
- Experimental support for {{domxref("Selection")}} events {{event("selectionchange")}} and {{event("selectstart")}}, as well as the {{domxref("GlobalEventHandlers/onselectionchange", "Document.onselectionchange")}} and {{domxref("GlobalEventHandlers.onselectstart")}} event handlers property has been added ({{bug(571294)}}). The `selectionchange` event is fired on the {{domxref("Document")}} if the associated `Selection` object is concerned, or on the specific {{domxref("HTMLInputElement")}} or {{domxref("HTMLTextAreaElement")}} ({{bug(1196479)}}). This feature is controlled by the `dom.select_events.enabled` preference, that defaults to `false`, except on Nightly.
- Support for {{domxref("MouseEvent.offsetX")}} and {{domxref("MouseEvent.offsetY")}} have been activated on Firefox for Android and Firefox OS ({{bug(1204841)}}).
- The {{domxref("HTMLCanvasElement.mozFetchAsStream()")}} method has been removed ({{bug(1206030)}}).
- The constructor {{domxref("Request.Request", "Request()")}} as well as {{domxref("fetch()")}} will now raise a {{exception("TypeError")}} exception when used with a URL containing a username and password ({{bug(1195820)}}).

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

- Access to Web Storage (i.e. `localStorage` and `sessionStorage`) from third-party IFrames is now denied if the user has [disabled third-party cookies](https://support.mozilla.org/en-US/kb/disable-third-party-cookies) ({{bug("536509")}}).
- This whitelist has even been removed in Nightly and Aurora/Dev Edition of the browser ({{bug(1201023)}}). It is currently scheduled that this removal will also happen for Beta and Release versions for the next version (Firefox 44).
- Subresource integrity has been implemented for {{htmlelement("script")}} and {{htmlelement("link")}} that links to stylesheets ({{bug("992096")}}).

## Changes for add-on and Mozilla developers

### Interfaces

_No change_

### XUL

_No change._

### JavaScript code modules

_No change._

### XPCOM

_No change._

### Plugins

- In preparation for future releases to switch over to multi-process content, [NPAPI](/en-US/docs/Plugins) plugins can no longer be run in the same process as the page content. The preferences starting with `dom.ipc.plugins` are no longer used.

### Other

_No change._

## Older versions

{{Firefox_for_developers('42')}}
