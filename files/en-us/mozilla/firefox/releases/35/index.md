---
title: Firefox 35 for developers
slug: Mozilla/Firefox/Releases/35
tags:
  - Firefox
  - Releases
---
{{FirefoxSidebar}}

Firefox 35 was released on January 13th, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [See ::before and ::after pseudo elements in the Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#.3a.3abefore-and-.3a.3aafter)
- [CSS source maps are now enabled by default](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#source-map-support)
- ["Show DOM Properties" from the Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[All devtools bugs fixed between Firefox 34 and Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- The {{cssxref("mask-type")}} property has been activated by default ({{bug(1058519)}}).
- The {{cssxref("filter")}} property is now activated by default ({{bug(1057180)}}).
- The {{cssxref("@font-face")}} at-rule now supports WOFF2 fonts ({{bug(1064737)}}).
- The {{cssxref("symbols", "symbols()")}} functional notation is now supported ({{bug(966168)}}).
- The CSS Font Loading API has been implemented ({{bug(1028497)}}).
- Using `-moz-appearance` with the `none` value on a combobox now remove the dropdown button ({{bug(649849)}}).
- The property accessor `element.style["css-property-name"]` has been added to match other browsers ({{bug(958887)}}).

### HTML

- The obsolete and non-conforming `bottommargin`, `leftmargin`, `rightmargin` and `topmargin` attributes of the {{HTMLElement("body")}} element have been activated in non-quirks mode ({{bug(95530)}}).

### JavaScript

- The "[temporal dead zone](/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_and_errors_with_let)" for [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) declarations has been implemented. In conformance with ES2015 `let` semantics, the following situations now throw errors. See also this [newsgroup announcement](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds) and {{bug(1001090)}}.

  - Redeclaring existing variables or arguments using `let` within the same scope in function bodies is now a syntax error.
  - Using a variable declared using `let` in function bodies before the declaration is reached and evaluated is now a runtime error.

- ES2015 {{jsxref("Global_Objects/Symbol", "Symbols")}} (only available in the Nightly channel) have been updated to conform with recent specification changes:

  - `String(Symbol("1"))` now no longer throws a {{jsxref("TypeError")}}; instead a string (`"Symbol(1)"`) gets returned ({{bug(1058396)}}).

- The various [_TypedArray_ constructors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) now have as their `[[Prototype]]` a single function, denoted `%TypedArray%` in ES2015 (but otherwise not directly exposed). Each typed array prototype now inherits from `%TypedArray%.prototype`. (`%TypedArray%` and `%TypedArray%.prototype` inherit from [`Function.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) and [`Object.prototype`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), respectively, so that typed array constructors and instances still have the properties found on those objects.) Typed array function properties now reside on `%TypedArray%.prototype` and work on any typed array. See [_TypedArray_](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#description) and {{bug(896116)}} for more information.
- ES2015 semantics for [prototype mutations using object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_mutation) have been implemented ({{bug(1061853)}}).

  - Now only a single member notated as `__proto__:value` will mutate the `[[Prototype]]` in the object literal syntax.
  - Method members like `__proto__() {}` will not overwrite the `[[Prototype]]` anymore.

### Interfaces/APIs/DOM

- {{domxref("WorkerNavigator.language", "navigator.language")}} and {{domxref("WorkerNavigator.languages", "navigator.languages")}} are now available to workers on {{domxref("WorkerNavigator")}} ({{bug(925849)}}).
- The {{domxref("Element.closest()")}} method returns the closest ancestor of the current element ({{bug(1055533)}}).
- Experimental support for the {{domxref("CanvasRenderingContext2D.filter")}} property has been added behind the `canvas.filters.enabled` flag ({{bug(927892)}}).
- Our experimental implementation of Web Animations progresses with the landing of the `Animation.target` property. This always is behind the `dom.animations-api.core.enabled` pref, off by default ({{bug(1067701)}}).
- The {{domxref("Element.hasAttributes", "hasAttributes()")}} method has been moved from {{domxref("Node")}} to {{domxref("Element")}} as required by the spec ({{bug("1055773")}}).
- The `crossOrigin` reflected attribute of {{domxref("HTMLImageElement")}}, {{domxref("HTMLLinkElement")}}, {{domxref("HTMLMediaElement")}}, {{domxref("HTMLScriptElement")}}, and {{domxref("SVGScriptElement")}} only accepts valid values, and `""` isn't, `null` has to be used instead ({{bug(880997)}}).
- The Resource Timing API has been activated by default ({{bug(1002855)}}).
- To match the spec, the first argument of {{domxref("Selection.containsNode()")}} cannot be `null` anymore ({{bug(1068058)}}).
- The new {{domxref("ImageCapture")}} API has been implemented: {{domxref("ImageCapture.takePhoto()")}} is available ({{bug(916643)}}).
- Non-HTTP {{domxref("XMLHttpRequest")}} requests now return `200` in case of success (instead of the erroneous `0`) ({{bug(716491)}}).
- {{domxref("XMLHttpRequest.responseURL")}} has been adapted to the latest spec and doesn't include the fragment (`'#xyz'`) of the URL, if relevant ({{bug(1073882)}}).
- The internal, non-standard, `File.mozFullPath` property is no more visible from content ({{bug(1048293)}}).
- The constructor of {{domxref("File")}} has been extended to match the specification ({{bug(1047483)}}).
- An experimental implementation of `AbortablePromise`, a promise that can be aborted by a different entity that the one who created it, has been added. It is prefixed with `Moz` and controlled by the `dom.abortablepromise.enabled` property, defaulting to `false` ({{bug(1035060)}}).
- The non-standard {{domxref("Navigator.mozIsLocallyAvailable")}} property has been removed ({{bug(1066826)}}).
- The preference `network.websocket.enabled,` `true` by default, has been removed; [Websocket](/en-US/docs/Web/API/WebSockets_API) API cannot be deactivated anymore ({{bug(1091016)}}).
- The non-standard methods and properties of {{domxref("Crypto")}} have been removed ({{bug(1030963)}}). Only methods and properties defined in the standard WebCrypto API are left.
- Our experimental implementation of WebGL 2.0 is going forward!

  - The {{domxref("WebGL2RenderingContext.copyBufferSubData()")}} method has been implemented ({{bug(1048668)}}).

### MathML

- The `dtls` OpenType feature (via the CSS {{cssxref("font-feature-settings")}} on the default stylesheet) is now applied automatically to MathML elements when positioning scripts over it (e.g. dotless i with mathematical hat).

### SVG

_No change._

### Audio/Video

_No change._

## Network & Security

- HTTP/2 has been implemented and activated, with AEAD ciphers only ({{bug(1027720)}}) and ({{bug('1047594')}}).
- The HTTP/2 `alt-svc` header is now supported ({{bug(1003448)}}).
- The Public Key Pinning Extension for HTTP (HPKP) has been implemented ({{bug(787133)}}).
- The [CSP](/en-US/docs/Web/HTTP/CSP) 1.1 `base-uri` [directive](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) is now supported ({{bug(1045897)}}).
- Path of the source is now considered too when host-source matching happens in [CSP](/en-US/docs/Web/HTTP/CSP) ({{bug(808292)}}).

## Changes for add-on and Mozilla developers

### XUL & Add-ons

- The private `_getTabForBrowser()` method on the `<xul:tabbrowser>` element has been deprecated. In its place, we've added a new, public, method called `getTabForBrowser`. This returns, predictably, the `<xul:tab>` element that contains the specified `<xul:browser>`.
- `Components.utils.now()`, matching {{domxref("Performance.now()")}} has been implemented for non-window chrome code ({{bug(969490)}}).

### Add-on SDK

#### Highlights

- Added access keys for context menu.
- Removed `isPrivateBrowsing` from `BrowserWindow`.
- Added `toJSON` method to `URL` instances.

#### Details

[GitHub commits made between Firefox 34 and Firefox 35](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35). This will not include any uplifts made after this release entered Aurora.

[Bugs fixed between Firefox 34 and Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). This will not include any uplifts made after this release entered Aurora.

## Older versions

{{Firefox_for_developers('34')}}
