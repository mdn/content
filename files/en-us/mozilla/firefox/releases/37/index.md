---
title: Firefox 37 for developers
slug: Mozilla/Firefox/Releases/37
tags:
  - Firefox
  - Release Notes
---
{{FirefoxSidebar}}

Firefox 37 was released on March 31st, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Security panel in the Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Animations panel in the Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-37)
- _Support for running a custom build step in WebIDE_

[All devtools bugs fixed between Firefox 36 and Firefox 37](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-01-12&chfield=resolution&query_format=advanced&chfieldfrom=2014-11-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11892733).

### CSS

- {{cssxref("display")}}`:` `contents` is now activated by default ({{bug(1102374)}} and {{bug(1105369)}}).
- [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts) is now working on element with {{cssxref("display")}}`:` `table-caption` ({{bug(1109571)}}).
- Relative positioning ({{cssxref("position")}}`:` `relative`) of table cells has been implemented ({{bug(35168)}}).
- The quirks mode behavior of {{cssxref("empty-cells")}} has been removed: it now defaults to `show` like in standard mode ({{bug(1020400)}}).

### HTML

- The value `<a rel="noreferrer">` now also works when the link is opened in new tab ({{bug(1031264)}}).
- The `'.'` followed by the extension is now allowed in `<input accept>`: when used, a file selector filters with this given extension to be proposed to the user ({{bug(826176)}}).

### JavaScript

- The {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} and {{jsxref("WeakSet")}} constructors now ignore null iterable ({{bug(1092538)}}).
- The {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}} and {{jsxref("WeakSet")}} constructors now supports monkey-patched `prototype.set` or `prototype.add` ({{bug(804279)}}).
- The Non-standard {{jsxref("String.quote","String.prototype.quote()")}} method has been removed ({{bug(1103181)}}).
- The {{jsxref("RegExp.prototype.flags")}} property has been implemented ({{bug(1108467)}}).
- Several {{jsxref("Array")}} methods have been implemented for [typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays) as well:

  - The {{jsxref("TypedArray.every", "every()")}} and {{jsxref("TypedArray.some", "some()")}} methods ({{bug(1116390)}}).
  - The {{jsxref("TypedArray.find", "find()")}} and {{jsxref("TypedArray.findIndex", "findIndex()")}} methods ({{bug(1078975)}}).
  - The {{jsxref("TypedArray.fill", "fill()")}} method ({{bug(1113722)}}).
  - The {{jsxref("TypedArray.indexOf", "indexOf()")}} and {{jsxref("TypedArray.lastIndexOf", "lastIndexOf()")}} methods ({{bug(1107601)}}).
  - The {{jsxref("TypedArray.join", "join()")}} method ({{bug(1115817)}}).
  - The {{jsxref("TypedArray.reduce", "reduce()")}} and {{jsxref("TypedArray.reduceRight", "reduceRight()")}} methods ({{bug(1117350)}}).
  - The {{jsxref("TypedArray.reverse", "reverse()")}} method ({{bug(1111516)}}).
  - The {{jsxref("TypedArray.keys", "keys()")}}, {{jsxref("TypedArray.values", "values()")}}, and {{jsxref("TypedArray.entries", "entries()")}} methods ({{bug(1119217)}}).

- ES2015 Proxy {{jsxref("Global_Objects/Proxy/handler/enumerate", "enumerate")}} trap is implemented ({{bug(783829)}}).
- The `configurable` attribute of the {{jsxref("Function.length")}} property is now `true` per the ES2015 specification ({{bug(911142)}}).
- The development of [ParallelJS (PJS)](https://web.archive.org/web/20161113115816/http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism) has been discontinued due to the limited future prospects, little attention and code complexity. The experimental implementation that had been enabled only on the Nightly channel, including the `Array.prototype.mapPar`, `filterPar` and `reducePar` methods, has been completely removed.

### Interfaces/APIs/DOM

- The {{domxref("StereoPannerNode")}} [Web Audio](/en-US/docs/Web/API/Web_Audio_API) node has been implemented ({{bug(1100349)}}).
- The {{jsxref("Promise")}}-based version of {{domxref("OfflineAudioContext")}} is now available ({{bug(1087944)}}).
- The experimental, not activated by default, implementation of [Service Workers](/en-US/docs/Web/API/Service_Worker_API) progresses: {{domxref("ServiceWorkerRegistration/update", "ServiceWorkerGlobalScope.update()")}} has been implemented {{bug(1065366)}}.
- The [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) can now be used in [Web workers](/en-US/docs/Web/API/Web_Workers_API) ({{bug(701634)}}).
- Our experimental implementation of WebGL 2.0 is going forward!

  - The {{domxref("WebGL2RenderingContext.getBufferSubData()")}} method has been implemented to provide access to Buffer Objects ({{bug(1048731)}}).

- In keeping with the evolving WebRTC specification, we have deprecated {{domxref("RTCIceServer.url")}} in favor of {{domxref("RTCIceServer.urls")}}, which lets you specify more than one URL for a given ICE server.
- Some key names of `KeyboardEvent.key` are changed for conforming [the latest DOM Level 3 Events spec](https://w3c.github.io/DOM-Level-3-Events-key/). See [the tables of `KeyboardEvent.key` values in MDN](/en-US/docs/Web/API/KeyboardEvent/key#key_values). The green cells are new values. And purple values are still unstable. Be careful if you use them (meta bug for these changes is {{bug(900372)}}).
- The {{domxref("console")}} interface is now working on {{domxref("ServiceWorker")}} and {{domxref("SharedWorker")}}. It was previously available but not working ({{bug(1058644)}}).
- The value of {{domxref("KeyboardEvent.key")}} was incorrectly being reported as `"RomanCharacters"` when the `英数` (`Eisu`) key was pressed. Now it correctly returns `"Eisu"`.

### MathML

_No change._

### SVG

- SVG2's `<marker orient="auto-start-reverse">` has been implemented ({{bug(1107584)}}).

### Audio/Video

_No change._

## Networking

- WebSockets now supports the `permessage` compression method, if the server does support it ({{bug(792831)}}).

## Security

- The usage of weak protocols or ciphers, like SSL 3.0 and RC4, are now logged in the console, to warn sites that are using it ({{bug(1092835)}}).
- The [CSP](/en-US/docs/Web/HTTP/CSP) 1.1 `referrer` [directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) is now supported ({{bug(965727)}}).

## Changes for add-on and Mozilla developers

### Add-on SDK

_No change._

### XUL

_No change._

## Older versions

{{Firefox_for_developers('36')}}
