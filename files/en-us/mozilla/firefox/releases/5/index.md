---
title: Firefox 5 for developers
slug: Mozilla/Firefox/Releases/5
tags:
  - Firefox
  - Firefox 5
  - Gecko 5.0
---
{{FirefoxSidebar}}

Firefox 5, based on Gecko 5.0, was released on June 21, 2011. This article provides links to information about the changes that affect developers in this release.

## Changes for web developers

### HTML

- All HTML elements now have the {{ domxref("HTMLElement/accessKey", "accessKey") }} attribute, as well as the {{ domxref("element.blur()", "blur()") }}, {{ domxref("element.click()", "click()") }}, and {{ domxref("element.focus()", "focus()") }} methods. These are specified in the {{ domxref("HTMLElement") }} interface.
- In order to comply with the HTML5 specification, support for the UTF-7 and UTF-32 [character sets](/en-US/docs/Character_Sets_Supported_by_Gecko) has been removed.
- When in quirks mode, empty {{ HTMLElement("map") }}s are no longer skipped over in favor of non-empty ones when matching. See the [Gecko notes](/en-US/docs/Web/HTML/Element/map#gecko_notes) on the {{ HTMLElement("map") }} element for details.
- Firefox mobile on Android now supports WOFF fonts for {{ cssxref("@font-face") }}.
- WebGL [no longer loads textures from domains other than the originating domain](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#cross-domain_textures), as a security measure. [HTTP access control](/en-US/docs/Web/HTTP_access_control) support should be coming sometime in the future to make this possible more securely.

#### Canvas improvements

- The {{ HTMLElement("canvas") }} 2D drawing context now supports specifying an `ImageData` object as the input to the `createImageData()` method; this [creates a new `ImageData` object](/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#creating_an_imagedata_object) initialized with the same dimensions as the specified object, but still with all pixels preset to transparent black. This was documented as implemented already but was not.
- Specifying non-finite values when adding color stops through a call to the {{ domxref("CanvasGradient") }} method `addColorStop()` now correctly throws `INDEX_SIZE_ERR` instead of `SYNTAX_ERR`.
- The {{ domxref("HTMLCanvasElement") }} method `toDataURL()` now correctly lower-cases the specified MIME type before matching.
- `getImageData()` now correctly accepts rectangles that extend beyond the bounds of the canvas; pixels outside the canvas are returned as transparent black.
- `drawImage()` and `createImageData()` now handle negative arguments in accordance with the specification, by flipping the rectangle around the appropriate axis. **We need an article about [CSS sizing](http://dev.w3.org/csswg/css3-images/#default-sizing) and how this works.**
- Specifying non-finite values when calling `createImageData()` now properly throws a `NOT_SUPPORTED_ERR` exception.
- `createImageData()` and `getImageData()` now correctly return at least one pixel's worth of image data if a rectangle smaller than one pixel is specified.
- Specifying a negative radius when calling `createRadialGradient()` now correctly throws `INDEX_SIZE_ERR`.
- Specifying a `null` or `undefined` image when calling `createPattern()` or `drawImage()` now correctly throws a `TYPE_MISMATCH_ERR` exception.
- Specifying invalid values for `globalAlpha` no longer throws a `SYNTAX_ERR` exception; these are now correctly silently ignored.
- Specifying invalid values when calling `translate()`, `transform()`, `rect()`, `clearRect()`, `fillRect()`, `strokeRect()`, `lineTo()`, `moveTo()`, `quadraticCurveTo()`, or `arc()` no longer throws an exception; these calls are now correctly silently ignored.
- Setting the value of `shadowOffsetX`, `shadowOffsetY`, or `shadowBlur` to an invalid value is now silently ignored.
- Setting the value of `rotate` or `scale` to an invalid value is now silently ignored.

### CSS

- [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
  - : Support for CSS animations has been added, using the `-moz-` prefix for now.

### DOM

- The {{ domxref("selection") }} object's [`modify()`](/en-US/docs/Web/API/Selection/modify) method has been changed so that the "word" selection granularity no longer includes trailing spaces; this makes it more consistent across platforms and matches the behavior of WebKit's implementation.
- The {{ domxref("setTimeout()") }} method now clamps to send no more than one timeout per second in inactive tabs. In addition, it now clamps nested timeouts to the smallest value allowed by the HTML5 specification: 4 ms (instead of the 10 ms it used to clamp to).
- Similarly, the {{ domxref("setInterval()") }} method now clamps to no more than one interval per second in inactive tabs.
- [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) now [supports the `loadend` event](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#detecting_any_load_end_condition) for progress listeners. This is sent after any transfer is finished (that is, after the `abort`, `error`, or `load` event). You can use this to handle any tasks that need to be performed regardless of success or failure of a transfer.
- The {{ domxref("Blob") }} and, by extension, the {{ domxref("File") }} objects' `slice()` method has been removed and replaced with a new, proposed syntax that makes it more consistent with [`Array.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) and [`String.slice()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) methods in JavaScript. This method is named [`mozSlice()`](</en-US/docs/Web/API/Blob#mozslice()>) for now.
- The value of {{ domxref("window.navigator.language") }} is now determined by looking at the value of the `Accept-Language` [HTTP header](/en-US/docs/Web/HTTP/Headers).
- The {{ domxref("Element.prefix") }} property is now read only, as required by the DOM specification.
- The {{ domxref("HTMLVideoElement") }} now supports experimental properties to get information about video paint statistics like frame rates.

### JavaScript

- Regular expressions are no longer callable as if they were functions; this change has been made in concert with the WebKit team to ensure compatibility (see {{ WebkitBug(28285) }}. This feature had existed for a long time but was never documented (at least, not here on MDC).
- The [`Function.prototype.isGenerator()`](/en-US/docs/JavaScript/Reference/Global_Objects/Function/isGenerator) method is now supported; this lets you determine if a function is a [generator](/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#generators.3a_a_better_way_to_build_iterators).
- The following [reserved words](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) were previously only treated as reserved when in strict mode; now they're always treated as reserved: `class`, `enum`, `export`, `extends`, `import`, and `super`.
- DOM documents created in chrome code may no longer be exposed to sandboxed scripts.
- The JSON parser has been re-written for improved speed and compliance. This includes a fix for {{ bug("572279") }}.

### SVG

- The {{ SVGAttr("class") }} SVG attribute can now be animated.
- The following SVG-related DOM interfaces representing lists of objects are now indexable and can be accessed like arrays; in addition, they have a `length` property indicating the number of items in the lists: {{ domxref("SVGLengthList") }}, {{ domxref("SVGNumberList") }}, {{ domxref("SVGPathSegList") }}, and {{ domxref("SVGPointList") }}.

### HTTP

- Firefox no longer sends the `Keep-Alive` HTTP header; we weren't formatting it correctly, and it was redundant since we were also sending the {{ httpheader("Connection") }} or {{ httpheader("Proxy-Connection") }} header with the value "keep-alive" anyway.
- The HTTP transaction model has been updated to be more intelligent about reusing connections in the persistent connection pool; instead of treating the pool as a {{ interwiki("wikipedia", "FIFO") }} queue, Necko now attempts to sort the pool with connections with the largest {{ interwiki("wikipedia", "congestion window") }} (CWND) first. This can reduce the round-trip time (RTT) of HTTP transactions by avoiding the need to grow connections' windows in many cases.
- Firefox now handles the `Content-Disposition` HTTP response header more effectively if both the `filename` and `filename*` parameters are provided; it looks through all provided names, using the `filename*` parameter if one is available, even if a `filename` parameter is included first. Previously, the first matching parameter would be used, thereby preventing a more appropriate name from being used. See {{ bug(588781) }}.

### MathML

- Support for [embellished operators](https://www.w3.org/TR/MathML3/chapter3.html#id.3.2.5.7.3)

### Developer tools

- The [Web Console's `Console` object](/en-US/docs/Tools/Web_Console#the_console_object) now has a `debug()` method, which is an alias for its `log()` method; this improves compatibility with certain existing sites.

## Changes for Mozilla and add-on developers

For a guide to updating your add-on for Firefox 5, please see [Updating add-ons for Firefox 5](/en-US/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_5).

> **Note:** Firefox 5 requires that binary components be recompiled, as do all major releases of Firefox. See [Binary Interfaces](/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces) for details.

### Changes to JavaScript code modules

#### New JavaScript code modules

- The [`Dict.jsm`](/en-US/docs/JavaScript_code_modules/Dict.jsm) code module was added; it provides an API for dictionaries of key/value pairs.

#### NetUtil.jsm

- The [`asyncFetch()`](</en-US/docs/JavaScript_code_modules/NetUtil.jsm#asyncFetch()>) method now supports specifying the input source as an {{ interface("nsIInputStream") }}.

### Interface changes

- The {{ interface("nsIHttpChannelInternal") }} interface has new attributes providing access to information about the channels' endpoints' addresses and ports. This information is provided primarily for debugging purposes.
- The {{ HTMLElement("canvas") }} element's {{ htmlattrxref("width", "canvas") }} and {{ htmlattrxref("height", "canvas") }} attributes are now reflected in IDL as unsigned integers instead of signed (see [`HTMLCanvasElement`](/en-US/docs/Web/API/HTMLCanvasElement)).
- The `nsIAppStartup2` and {{ interface("nsIAppStartup_MOZILLA_2_0") }} interfaces have been merged into the {{ interface("nsIAppStartup") }} interface.
- The `nsIDocShell_MOZILLA_2_0_BRANCH` interface has been merged into the {{ interface("nsIDocShell") }} interface.
- The `nsIFocusManager_MOZILLA_2_0_BRANCH` interface has been merged into the {{ interface("nsIFocusManager") }} interface.
- The `nsIHTMLEditor_MOZILLA_2_0_BRANCH` interface has been merged into the {{ interface("nsIHTMLEditor") }} interface.

#### New interfaces

- `nsIDOMAnimationEvent` added. {{domxref("AnimationEvent")}}

#### Removed interfaces

The following interfaces were implementation details that are no longer needed:

- `nsICiter` (see {{ bug("633066") }})
- `nsIDOM3Document` (see {{ bug("639849") }})
- `nsIFIXptrEvaluator`
- `nsISelectElement` (see {{ bug("619996") }})

### Debugging aids

- The new [`DebugOnly<T>`](/en-US/Namespace/Mozilla/DebugOnly%3CT%3E) helper makes it possible to declare variables only for `DEBUG` builds.

### JavaScript API (SpiderMonkey)

- [`JS_DoubleToInt32()`](/en-US/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) and [`JS_DoubleToUint32()`](/en-US/docs/SpiderMonkey/JSAPI_Reference/JS_DoubleToInt32) have been added, for converting [`jsdouble`](/en-US/docs/SpiderMonkey/JSAPI_Reference/jsdouble) values into C integers and unsigned integers.

### Build system changes

- You can now build Firefox without a `mozconfig` file; the [`--enable-application` setting](/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Configuring_Build_Options#choose_an_application) now defaults to "browser". After pulling or downloading the code, you can `configure && make` (or `make -f client.mk`) to build Firefox.

## See also

{{Firefox_for_developers('4')}}
