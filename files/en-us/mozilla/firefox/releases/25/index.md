---
title: Firefox 25 for developers
slug: Mozilla/Firefox/Releases/25
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

## Changes for Web developers

### New in Firefox DevTools

- The inspector now features autocompletion for CSS names and values.
- The debugger now lets you "black box" script files, to prevent breakpoints from stopping in library code you're not interested in debugging.
- The Profiler now has the ability to save and import profiling results. "Show Gecko Platform Data" is now an option in the Firefox developer tools options.
- The Network panel has a right-click context menu, with copy and resend URL commands.
- Numerous under-the-hood changes may make some rewriting necessary for addons that modify the DevTools.

### CSS

- The support for the keyword `local` as a value of the {{cssxref("background-attachment")}} CSS property has been added ([Firefox bug 483446](https://bugzil.la/483446)).
- Support of a non-standard Mozilla-only media query to determine the operating system version has been added: [`-moz-os-version`](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-os-version) ([Firefox bug 810399](https://bugzil.la/810399)). The property is currently only implemented on Windows.
- The `-moz-osx-font-smoothing` CSS property has been added ([Firefox bug 857142](https://bugzil.la/857142)).
- Our experimental support for {{cssxref("filter")}} now supports the `hue-rotate()` functional notation ([Firefox bug 897392](https://bugzil.la/897392)). It is still preffed off by default.
- `page-break-inside`: `avoid` is now working with the height of a block ([Firefox bug 883676](https://bugzil.la/883676)).

### HTML

- The [`srcdoc`](/en-US/docs/Web/HTML/Element/iframe#srcdoc) attribute of {{HTMLElement("iframe")}}, allowing the inline specification of the content of an {{HTMLElement("iframe")}}, is now supported ([Firefox bug 802895](https://bugzil.la/802895)).
- When used with a `"image/jpeg"` type, the method `HTMLCanvasElement.toBlob` now accepts a third attribute defining the quality of the image ([Firefox bug 891884](https://bugzil.la/891884)).

### JavaScript

ECMAScript 2015 implementation continues!

- The method {{jsxref("Array.of()")}} is now implemented on [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) ([Firefox bug 866849](https://bugzil.la/866849)).
- Support for the methods {{jsxref("Array.prototype.find()")}} and {{jsxref("Array.prototype.findIndex()")}} has been added ([Firefox bug 885553](https://bugzil.la/885553)).
- The methods {{jsxref("Global_Objects/Number/parseInt", "Number.parseInt()")}} and {{jsxref("Global_Objects/Number/parseFloat", "Number.parseFloat()")}} have been implemented ([Firefox bug 886949](https://bugzil.la/886949))
- The methods {{jsxref("Map.prototype.forEach()")}} and {{jsxref("Set.prototype.forEach()")}} are now implemented ([Firefox bug 866847](https://bugzil.la/866847)).
- New mathematical methods have been implemented on [`Math`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math): `Math.log10()`, `Math.log2()`, `Math.log1p()`, `Math.expm1()`, `Math.cosh()`, `Math.sinh()`, `Math.tanh()`, `Math.acosh()`, `Math.asinh()`, `Math.atanh()`, `Math.trunc()`, `Math.sign()` and `Math.cbrt()` ([Firefox bug 717379](https://bugzil.la/717379)).
- Support for binary and octal integer literals has been added: `0b10101010`, `0B1010`, `0o777`, `0O237` are now valid ([Firefox bug 894026](https://bugzil.la/894026)).
- The machine epsilon constant, that is the smallest representable number that added to 1 will not be 1, is now available as {{jsxref("Global_Objects/Number/EPSILON", "Number.EPSILON")}} ([Firefox bug 885798](https://bugzil.la/885798)).
- [Typed arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) have been updated to [no longer search in the prototype chain for indexed properties](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#property_access) ([Firefox bug 829896](https://bugzil.la/829896)).

### Interfaces/APIs/DOM

- The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) is now supported. An incomplete implementation was previously available behind a preference ([Firefox bug 779297](https://bugzil.la/779297)).
- Some IME related keys on Windows are supported by `KeyboardEvent.key` ([Firefox bug 865565](https://bugzil.la/865565)), see [the key name table](/en-US/docs/Web/API/KeyboardEvent#keyname_table_win) for the detail.
- Firefox for Metro now dispatches key events in the same way as the desktop version ([Firefox bug 843236](https://bugzil.la/843236)).
- `keypress` event is no longer dispatched if `preventDefault()` of preceding `keydown` event is called ([Firefox bug 501496](https://bugzil.la/501496)), see [the document of `keydown` event](</en-US/docs/Web/API/Element/keydown_event#preventdefault()_of_keydown_event>) for the detail.
- Renamed the `Future` interface to `Promise` ([Firefox bug 884279](https://bugzil.la/884279)).
- The `srcDoc` property on the {{domxref("HTMLIFrameElement")}} interface, allowing the inline specification of the content of an {{HTMLElement("iframe")}}, is now supported ([Firefox bug 802895](https://bugzil.la/802895)).
- The `createTBody()` method on the {{domxref("HTMLTableElement")}} interface, allowing to get its {{HTMLElement("tbody")}}, is now supported ([Firefox bug 813034](https://bugzil.la/813034)).
- The {{domxref("Range.collapse()")}} method `toStart` parameter is now optional and default to `false`, as defined in the spec ([Firefox bug 891340](https://bugzil.la/891340)).
- Support of the `ParentNode` mixin on {{domxref("Document")}} and {{domxref("DocumentFragment")}} has been added ([Firefox bug 895974](https://bugzil.la/895974)).
- The `previousElementSibling` and `nextElementSibling` have been moved to the `ChildNode` mixin allowing them to be called not only on a {{domxref("Element")}} object but also on a {{domxref("CharacterData")}} or {{domxref("DocumentType")}} object ([Firefox bug 895974](https://bugzil.la/895974)).
- The `navigator.geolocation` property has been updated to match the spec. It never returns `null`. When the preference `geo.enabled` is set to `false`, it now returns `undefined` ([Firefox bug 884921](https://bugzil.la/884921)).
- The `videoPlaybackQuality` attribute on the {{ domxref("HTMLVideoElement") }} interface has been changed to the `getVideoPlaybackQuality` method. ([Firefox bug 889205](https://bugzil.la/889205))
- The non-standard `GlobalObjectConstructor` interface has been removed ([Firefox bug 898136](https://bugzil.la/898136)). This interface was used to add arguments to the constructors of APIs that Firefox [add-ons](/en-US/docs/Mozilla/Add-ons) were exposing on the global object. This capability has been removed; note that at this time there's no replacement for this functionality.

### MathML

_No change._

### SVG

_No change._

### Older versions

{{Firefox_for_developers}}
