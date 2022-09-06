---
title: Firefox 26 for developers
slug: Mozilla/Firefox/Releases/26
tags:
  - Firefox
---
{{FirefoxSidebar}}

Firefox 26 was released on December 10, 2013. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### CSS

- The {{cssxref("text-decoration-line")}} property, still prefixed, now considers `'blink'` as a valid value, though it doesn't blink the content at all ({{bug("812995")}}).
- The non-standard {{cssxref("-moz-text-blink")}} property has been removed ({{bug("812995")}}).
- Support for the {{cssxref("image-orientation")}} property, in its CSS Images & Values Level 4 version, that is with the `from-image` keyword and EXIF support, has been added ({{bug(825771)}}).
- Experimental support for `position: sticky` has been implemented and can be enabled by pref `layout.css.sticky.enabled` ({{bug(886646)}}).
- The {{cssxref("text-align")}} property now applies to the `::-moz-placeholder` pseudo-element ({{bug(915551)}}).

### HTML

- The `HTMLSelectElement.selectedOptions` property has been implemented ({{bug("596681")}}).
- In the {{HTMLElement("input")}} element of type `email`, values with domain labels longer than 63 chars are no more considered valid ({{bug("884332")}}).
- The `HTMLInputElement.width` and `height` properties now return `0` when the `type` is not `image` ({{bug("905240")}}).
- A {{HTMLElement("fieldset")}} element is now invalid, and can be styled using the {{cssxref(":invalid")}} pseudo-class, when one of the elements it contains is invalid ({{bug("717181")}}).

### JavaScript

[ECMAScript 2015](/en-US/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) implementation continues!

- The ECMAScript 2015 compliant syntax for [Generators (yield)](https://web.archive.org/web/20170126155949/http://wiki.ecmascript.org/doku.php?id=harmony:generators) has been implemented ({{bug("666399")}}).
- Generator/Iterator results are now boxed like `{ value: foo, done: bool }` ({{bug(907744)}}).
- New mathematical methods have been implemented on [`Math`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math): [`Math.fround()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround) ({{bug("900125")}}).
- The [reserved words](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) cannot be used for function names:such a usage now throws a [`SyntaxError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) ({{bug("907958")}}).
- The [default parameter](/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) syntax has been updated to allow parameters without defaults after default parameters, such as `function f(x=1, y)`. See {{bug(777060)}}.
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} is implemented ({{bug(904701)}}).

### Interfaces/APIs/DOM

- Make the last argument (doctype) to {{domxref("DOMImplementation.createDocument")}} optional ({{bug(909859)}}).
- Implement the new {{domxref("element.classList")}} specification which permits adding/removing several classes with one call ({{bug(814014)}}).
- The {{domxref("URL.URL", "URL()")}} constructor has been implemented on the {{domxref("URL")}} interface ({{bug("887364")}}).
- The properties {{domxref("HTMLAnchorElement/origin", "URLUtils.origin")}}, {{domxref("HTMLAnchorElement/password", "URLUtils.password")}}, and {{domxref("HTMLAnchorElement/username", "URLUtils.username")}} are now available to all interfaces implementing {{domxref("HTMLHyperlinkElementUtils", "URLUtils")}}: {{domxref("URL")}}, {{domxref("Location")}}, {{domxref("HTMLAnchorElement")}}, and {{domxref("HTMLAreaElement")}} ({{bug("887364")}}).
- The {{domxref("URL")}} interface is now accessible from Web Workers ({{bug("887364")}}).
- IndexedDB can now be used as a "optimistic" storage area so it doesn't require any prompts and data is stored in a pool with LRU eviction policy, in short temporary storage ({{bug("785884")}}).
- Support for {{domxref("WaveShaperNode.oversample")}} has been added ({{bug(875277)}}).
- Path of the persistent storage has been changed from `<profile>/indexedDB` to `<profile>/storage/persistent` (on b2g from `/data/local/indexedDB` to `/data/local/storage/persistent`).
- The {{domxref("Screen.orientation")}} property and {{domxref("Screen.lockOrientation()")}} method now support the `default` value, mapping to `portrait-primary` or `landscape-primary`, depending of the device ({{bug(908058)}}) This works only for Firefox OS and Firefox for Android. Firefox Desktop is not supported.
- {{domxref("Event")}} constructors can be used in Web workers ({{bug(910910)}}).
- Trying to set the {{domxref("Document.domain")}} property on a page embedded in an {{HTMLElement("iframe")}} with the `sandbox` attribute now throws a security error ({{bug(907892)}}).
- The {{domxref("MessageEvent")}} interface has been updated to comply with the latest spec. The `initMessageEvent` method has been removed while the interface has now a constructor ({{bug(848294)}}).
- The HTML5 `MessageChannel` API has been implemented, behind the `dom.messageChannel.enabled` preference ({{bug("677638")}}).
- Support for `VTTCue`, behind the `media.webvtt.enabled` preference, like for all WebVTT-related implementations, has been added ({{bug("868509")}}).
- The [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) has been made available by default ({{bug("885505")}}).

### MathML

- Inconsistent renderings of {{MathMLElement("mmultiscripts")}},  {{MathMLElement("msub")}}, {{MathMLElement("msup")}} and {{MathMLElement("msubsup")}} have been unified and the error handling of these elements has been improved ({{bug("827713")}}).

### SVG

- The inclusion of SVG glyphs inside OpenType, _SVG-in-OpenType_, has been updated to match the current version of the specification ({{bug("906521")}}).
- The `SVGElement.ownerSVGElement()` method doesn't throw anymore ({{bug("835048")}}).

## Development tools

- The Inspector is now remotable ({{bug(805526)}}).
- The web console text can be selected, {{cssxref("::before")}} and {{cssxref("::after")}} now inspectable, debugger and responsive design features are planned for this release. (<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/>)

### Older versions

{{Firefox_for_developers('25')}}
