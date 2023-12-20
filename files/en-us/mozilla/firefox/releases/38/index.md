---
title: Firefox 38 for developers
slug: Mozilla/Firefox/Releases/38
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 38 was released on May 12th, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Bypass audio nodes in Web Audio Editor](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html#bypassing-nodes)
- ["copy" command in Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#helper-commands)
- [Highlight and filter XmlHttpRequests in Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#xhr)
- [See optimized-out variables in the Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/set_watch_expressions/index.html)
- [See security warnings in the Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [See transferred sizes in the Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Play/pause all animations in the page](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animations-view)

[All devtools bugs fixed between Firefox 37 and Firefox 38](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-02-23&query_format=advanced&chfield=resolution&chfieldfrom=2015-01-12&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12076303).

### CSS

- Support for {{cssxref("ruby-position")}} and {{cssxref("ruby-align")}} have been added and is available by default ([Firefox bug 1055676](https://bugzil.la/1055676) [Firefox bug 1123917](https://bugzil.la/1123917) and [Firefox bug 1039006](https://bugzil.la/1039006)).
- The {{cssxref(":unresolved")}} pseudo-class has been implemented for custom elements ([Firefox bug 1111633](https://bugzil.la/1111633)).
- The predefined style {{cssxref("list-style-type", "ethiopic-numeric")}} now uses a space, instead of a dot, as the suffix to match a recent change to the spec ([Firefox bug 1120721](https://bugzil.la/1120721)).
- CSS transitions on generated content (with {{cssxref("::before")}} and {{cssxref("::after")}}) on both an inline and the block that splits them now start as expected by the specification ([Firefox bug 1110277](https://bugzil.la/1110277)).
- The implementation of CSS Logical Properties made big progress. The following properties are available behind the `layout.css.vertical-text.enabled` flag (`false` by default):

  - Direction-independent equivalents of {{cssxref("width")}} and {{cssxref("height")}}: {{cssxref("block-size")}} and {{cssxref("inline-size")}} ([Firefox bug 1117983](https://bugzil.la/1117983)).
  - Direction-independent equivalents of {{cssxref("min-width")}} and {{cssxref("min-height")}}: {{cssxref("min-block-size")}} and {{cssxref("min-inline-size")}} ([Firefox bug 1117983](https://bugzil.la/1117983)).
  - Direction-independent equivalents of {{cssxref("max-width")}} and {{cssxref("max-height")}}: {{cssxref("max-block-size")}} and {{cssxref("max-block-size")}} ([Firefox bug 1117983](https://bugzil.la/1117983)).
  - Direction-independent equivalents of {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} and {{cssxref("margin-left")}}: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}} and {{cssxref("margin-inline-end")}} ([Firefox bug 649142](https://bugzil.la/649142)).
  - Direction-independent equivalents of {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} and {{cssxref("padding-left")}}: {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} and {{cssxref("padding-inline-end")}} ([Firefox bug 649142](https://bugzil.la/649142)).
  - Direction-independent equivalents of {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} and {{cssxref("border-left")}} and their longhands for width, style and color: {{cssxref("border-block-start")}}, {{cssxref("border-block-start-width")}}, {{cssxref("border-block-start-style")}}, {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-end-width")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-inline-start-width")}}, {{cssxref("border-inline-start-style")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-end-width")}}, {{cssxref("border-inline-end-style")}} and {{cssxref("border-inline-end-color")}} ([Firefox bug 649142](https://bugzil.la/649142)).
  - Direction-independent equivalents of {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} and {{cssxref("left")}}: {{cssxref("inset-block-start")}}, `offset-block-end`, `offset-inline-start` and `offset-inline-end` ([Firefox bug 1120283](https://bugzil.la/1120283)).

- How [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) start has been modified to match a recent change of the specifications, aiming at having an interoperable behavior between browsers ([Firefox bug 960465](https://bugzil.la/960465)).

### HTML

- The {{HTMLElement("label")}} element no longer dispatches events to the label target element if interactive content is found between the event target and the label ([Firefox bug 229925](https://bugzil.la/229925)).
- The {{HTMLElement("picture")}} element has been activated by default ([Firefox bug 1017875](https://bugzil.la/1017875)).
- The `<meta name="referrer">` is supported for navigations from the context menu or via a middle-click ([Firefox bug 1113431](https://bugzil.la/1113431)).

### JavaScript

- {{jsxref("Generator/return", "Generator.prototype.return()")}} is implemented ([Firefox bug 1115868](https://bugzil.la/1115868)).
- {{jsxref("Functions/set", "Setter")}} with a {{jsxref("Functions/rest_parameters", "rest parameter", "", 1)}} is now a {{jsxref("SyntaxError")}} ([Firefox bug 1089632](https://bugzil.la/1089632)).
- The {{jsxref("Function/name", "name")}} property of functions is configurable now ([Firefox bug 1084019](https://bugzil.la/1084019)).
- Several {{jsxref("Array")}} methods have been implemented for [typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) as well:

  - The {{jsxref("TypedArray.of", "of()")}} and {{jsxref("TypedArray.from", "from()")}} methods ([Firefox bug 896608](https://bugzil.la/896608)).
  - The {{jsxref("TypedArray.forEach", "forEach()")}} method ([Firefox bug 1107645](https://bugzil.la/1107645)).
  - The {{jsxref("TypedArray.filter", "filter()")}} and {{jsxref("TypedArray.map", "map()")}} methods ([Firefox bug 1121936](https://bugzil.la/1121936)).
  - The {{jsxref("TypedArray.slice", "slice()")}} method ([Firefox bug 1121935](https://bugzil.la/1121935)).

- Duplicated parameter name is no longer allowed when rest-parameter is present ([Firefox bug 1096376](https://bugzil.la/1096376)).
- Duplicated parameter name is no longer allowed in arrow functions ([Firefox bug 1096377](https://bugzil.la/1096377)).
- Duplicated parameter name is no longer allowed in concise method definitions ([Firefox bug 1096378](https://bugzil.la/1096378)).
- Warning is shown when {{jsxref("Map")}}/{{jsxref("Set")}}/{{jsxref("WeakMap")}} constructor is called without {{jsxref("Operators/new", "new")}} ([Firefox bug 1108930](https://bugzil.la/1108930)).
- The {{jsxref("WeakMap.get", "get")}}, {{jsxref("WeakMap.has", "has")}}, and {{jsxref("WeakMap.delete", "delete")}} methods of {{jsxref("WeakMap")}} objects no longer throw when the `key` parameter is not an object ([Firefox bug 1127827](https://bugzil.la/1127827)).
- The optional and non-standard second `fallback` parameter for {{jsxref("WeakMap.prototype.get()")}} has been removed ([Firefox bug 1127827](https://bugzil.la/1127827)).
- When defining a [generator method](/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions), "`set`" and "`get`" are no longer invalid names ([Firefox bug 1073809](https://bugzil.la/1073809)).
- {{jsxref("RegExp.prototype.source")}} now returns "(?:)" instead of an empty string for empty regular expressions ([Firefox bug 1130798](https://bugzil.la/1130798)).
- {{jsxref("RegExp.prototype.source")}} and {{jsxref("RegExp.prototype.toString()")}} now escape regular expression patterns properly (e.g. line terminators, "\n") ([Firefox bug 1130860](https://bugzil.la/1130860)).
- The {{jsxref("Regexp")}} {{jsxref("Regexp.global", "global")}}, {{jsxref("Regexp.ignoreCase", "ignoreCase")}}, {{jsxref("Regexp.multiline", "multiline")}}, and {{jsxref("Regexp.sticky", "sticky")}} properties are now prototype accessor properties rather than own data properties of `RegExp` instances ([Firefox bug 1120169](https://bugzil.la/1120169)).
- The {{jsxref("RegExp.prototype.source")}} property is now prototype accessor property rather than own data property of `RegExp` instances ([Firefox bug 1120169](https://bugzil.la/1120169)). Available only in non-Release version, due to [Firefox bug 1150297](https://bugzil.la/1150297).
- {{jsxref("Function.prototype.toString()")}} now throws for {{jsxref("Proxy")}} objects ([Firefox bug 1100936](https://bugzil.la/1100936)).

### Interfaces/APIs/DOM

- The Fetch API {{domxref("fetch()")}} method has been implemented ([Firefox bug 1039846](https://bugzil.la/1039846)).
- {{domxref("BroadcastChannel")}} API has been implemented and is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) ([Firefox bug 966439](https://bugzil.la/966439) and [Firefox bug 1121420](https://bugzil.la/1121420)).
- The Console API is now available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} has been implemented ([Firefox bug 1119527](https://bugzil.la/1119527)).
- Constants of {{domxref("KeyboardEvent.location")}}, `DOM_KEY_LOCATION_MOBILE` and DOM_KEY_LOCATION_JOYSTICK, have been removed, since they were removed from the DOM Level 3 Spec ([Firefox bug 936313](https://bugzil.la/936313).
- {{domxref("KeyboardEvent.code")}} is now available; previously it was only available in prerelease builds. ([Firefox bug 1126673](https://bugzil.la/1126673))
- {{domxref("KeyboardEvent.code")}} now supports special keys on Sun keyboards on Linux, Android, and Firefox OS. ([Firefox bug 1020139](https://bugzil.la/1020139))
- The {{domxref("TextEncoder.TextEncoder", "TextEncoder()")}} constructor has been changed to match the spec: when an invalid parameter is passed, the `RangeError` {{domxref("DOMException")}} is now raised, rather than the erroneous {{jsxref("TypeError")}} ([Firefox bug 1125766](https://bugzil.la/1125766)).
- The User Timing API, adding {{domxref("Performance.mark()")}}, {{domxref("Performance.clearMarks()")}}, {{domxref("Performance.measure()")}}, and {{domxref("Performance.clearMeasures()")}} has been implemented ([Firefox bug 782751](https://bugzil.la/782751)).
- The prefixed version of {{domxref("indexedDB")}}, `mozIndexedDB` has been removed ([Firefox bug 975699](https://bugzil.la/975699)).
- The {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event is no longer cancelable ([Firefox bug 1134559](https://bugzil.la/1134559)).
- You can now use [WebSockets](/en-US/docs/Web/API/WebSockets_API) in [Workers](/en-US/docs/Web/API/Web_Workers_API) ([Firefox bug 504553](https://bugzil.la/504553)).
- The {{domxref("XMLHttpRequest.responseType")}} and {{domxref("XMLHttpRequest.withCredentials")}} properties can now be set before calling {{domxref("XMLHttpRequest.open()")}} ([Firefox bug 707484](https://bugzil.la/707484)).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## Networking

_No change._

## Security

- In Firefox, the [`autocomplete`](/en-US/docs/Web/HTML/Element/input#autocomplete)`=false` attribute is now ignored when dealing with a login form ([Firefox bug 1025703](https://bugzil.la/1025703)). This is intended to encourage the use of more secure passwords by allowing password manager tools to work more reliably.
- RC4 is now disabled when using TLS, except for a few specifically allowed websites. This whitelist is an interim measure until those sites are fixed ([Firefox bug 1124039](https://bugzil.la/1124039)). This fallback is controlled by the `security.tls.unrestricted_rc4_fallback` preference, `true` by default for the moment ([Firefox bug 1138882](https://bugzil.la/1138882)).
- Websites needing to fall back to an insecure version of TLS in order to work are now in a hardcoded whitelist which will shrink over time ([Firefox bug 1114816](https://bugzil.la/1114816)). The whitelist can be disabled by setting `security.tls.insecure_fallback_hosts.use_static_list` to `false`.

## Changes for add-on and Mozilla developers

### Add-on SDK

#### Highlights

- `sdk/context-menu@2` was implemented ([Firefox bug 1070952](https://bugzil.la/1070952)).
- `sdk/addon/bootstrap` was implemented ([Firefox bug 1075541](https://bugzil.la/1075541)).
- `sdk/windows/loader` was removed ([Firefox bug 970135](https://bugzil.la/970135)).
- Fix for default language detection on Linux ([Firefox bug 1114712](https://bugzil.la/1114712)).
- `toolkit/loader` now has opt-in module compatibility checking, which is enabled for all jpm add-ons ([Firefox bug 1037235](https://bugzil.la/1037235)).

#### Electrolysis (E10s) updates

- `sdk/page-worker` e10s updates ([Firefox bug 1116004](https://bugzil.la/1116004)).
- `sdk/content/worker` e10s updates ([Firefox bug 1116544](https://bugzil.la/1116544)).
- `sdk/tabs` e10s updates ([Firefox bug 1033838](https://bugzil.la/1033838)).

#### Details

- [GitHub commits made between Firefox 37 and Firefox 38](https://github.com/mozilla/addon-sdk/compare/firefox36...firefox38).

### XUL

_No change._

### JavaScript code modules

#### Downloads.jsm

- [`DownloadTarget`](/en-US/docs/Mozilla/JavaScript_code_modules/Downloads.jsm/DownloadTarget) objects now have `exists` and `size` properties, allowing you to determine the existence of and the size of the download's target file on disk, as well as a new `refresh()` method, which asks that these values be updated.

### XPCOM

- `"@mozilla.org/network/atomic-file-output-stream;1"` and `"@mozilla.org/network/safe-file-output-stream;1"` now throw an exception if `PR_APPEND` is passed without `PR_TRUNCATE` ([Firefox bug 1117580](https://bugzil.la/1117580)).
- `nsICompositionStringSynthesizer` and `nsIDOMWindowUtils.sendCompositionEvent()` have been removed. Instead, use `nsITextInputProcessor`. ([Firefox bug 917322](https://bugzil.la/917322))
- `nsIDOMWindowUtils.sendKeyEvent()` is now deprecated. Instead, use `nsITextInputProcessor` ([Firefox bug 1119609](https://bugzil.la/1119609)).

## Older versions

{{Firefox_for_developers('37')}}
