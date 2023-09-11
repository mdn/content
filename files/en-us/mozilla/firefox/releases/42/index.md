---
title: Firefox 42 for developers
slug: Mozilla/Firefox/Releases/42
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

[To test the latest developer features of Firefox, install Firefox Developer Edition](https://www.mozilla.org/firefox/developer/) Firefox 42 was released on November 3, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [Debugging Firefox for Android over Wi-Fi](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#connecting-over-the-network)
- _Firefox OS Simulator configuration in WebIDE_
- [CSS filter presets](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html#saving-filter-presets)

[All devtools bugs fixed between Firefox 41 and Firefox 42](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437).

### CSS

- Vertical {{cssxref('writing-mode')}} is now supported with rtl scripts ([Firefox bug 1131451](https://bugzil.la/1131451)).
- The values of {{cssxref("caption-side")}} are now relative to the table, and changing actual meaning according to its {{cssxref("writing-mode")}} value [Firefox bug 1202993](https://bugzil.la/1202993).
- Non-standard properties like `-moz-margin-start` are now aliases of their standard counterpart ({{cssxref('margin-inline-start')}}, …). Previously, it was the opposite. This affects the value returned by {{domxref('CSSStyleDeclaration.cssText')}} and iteration of the properties in a style rule, which both use the canonical form ([Firefox bug 1118103](https://bugzil.la/1118103)).
- The prefixed version of CSS gradients can be turned off by setting the `layout.css.prefixes.gradients` preference to `false`.
- Several old bugs with {{cssxref("float")}} and margin collapsing behavior have been fixed ([Firefox bug 478834](https://bugzil.la/478834), [Firefox bug 538194](https://bugzil.la/538194), and [Firefox bug 451791](https://bugzil.la/451791)).

### HTML

- Experimental support for the [`referrer`](/en-US/docs/Web/HTML/Element/input#referrer) attribute of the {{HTMLElement("img")}} ([Firefox bug 1166910](https://bugzil.la/1166910)), {{htmlElement("iframe")}} ([Firefox bug 1175736](https://bugzil.la/1175736)), {{HTMLElement("a")}} and {{HTMLElement("area")}} ([Firefox bug 1174913](https://bugzil.la/1174913)) has been added. There is no effect by default, the `network.http.enablePerElementReferrer` being `false` by default.

### JavaScript

- The {{jsxref("Reflect")}} object has been implemented ([Firefox bug 987514](https://bugzil.la/987514)).
- The implementation of the {{jsxref("Proxy")}} {{jsxref("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}} trap has been updated to match the final ES2015 specification ([Firefox bug 1049662](https://bugzil.la/1049662)).
- Calling {{jsxref("Map")}}, {{jsxref("Set")}}, or {{jsxref("WeakMap")}} without {{jsxref('Operators', 'new')}}, will now throw a {{jsxref("TypeError")}} ([Firefox bug 1083752](https://bugzil.la/1083752)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- Images with an [`id`](/en-US/docs/Web/HTML/Element/img#id) are no more listed as property of the {{domxref("Window")}} interface: `<img id="login">` isn't accessible as `window.login` anymore. This behavior was introduced in Firefox 26 and has been removed to match a later change in the spec. ([Firefox bug 959992](https://bugzil.la/959992))
- {{domxref('MouseEvent.offsetX')}} and {{domxref('MouseEvent.offsetY')}} have been added ([Firefox bug 69787](https://bugzil.la/69787)).
- The {{domxref("HTMLInputElement")}} interface has been experimentally extended to handle the upload of directories ([Firefox bug 1164310](https://bugzil.la/1164310)). These four members can be exposed by setting the `dom.input.dirpicker` preference to `true`:

  - {{domxref("HTMLInputElement.directory")}}
  - {{domxref("HTMLInputElement.isFilesAndDirectoriesSupported")}}
  - {{domxref("HTMLInputElement.getFilesAndDirectories()")}}
  - {{domxref("HTMLInputElement.chooseDirectory()")}}

- The {{domxref("Directory")}} interface has been experimentally extended ([Firefox bug 1177688](https://bugzil.la/1177688)). The two members {{domxref("Directory.path")}} and {{domxref("Directory.getContents")}} can be exposed by setting the `dom.input.dirpicker` preference to `true`.
- The `HTMLMediaElement.mozSrcObject` has been renamed in {{domxref('HTMLMediaElement.srcObject')}} ([Firefox bug 1175523](https://bugzil.la/1175523)).

#### Service Workers

- `Request.context` has been removed ([Firefox bug 1188062](https://bugzil.la/1188062)).
- The [Push API](/en-US/docs/Web/API/Push_API) has been activated by default on Firefox for Desktop ([Firefox bug 1153499](https://bugzil.la/1153499)), but only on the Nightly/Dev Edition/Beta channels. It is being deactivated by default in the Release channel until consumer UX and debugging features have been properly implemented ([Firefox bug 1207875](https://bugzil.la/1207875).) You can still activate it by enabling the `dom.push.enabled` pref in `about:config`.
- The {{domxref("PushManager.hasPermission()")}} method has been deprecated in the spec, and replaced with the {{domxref("PushManager.permissionState()")}} method. Firefox has updated its implementation to reflect this ([Firefox bug 1183853](https://bugzil.la/1183853).)
- Service-worker-related additions to the [Notifications API](/en-US/docs/Web/API/Notifications_API) have been implemented ([Firefox bug 1114554](https://bugzil.la/1114554)), but are disabled in this release.

#### Web Animations API

Our experimental implementation of [Web Animations API](/en-US/docs/Web/API/Web_Animations_API) have been extended to support:

- The {{domxref('Animation/playbackRate', 'AnimationPlayer.playbackRate')}} property ([Firefox bug 1127380](https://bugzil.la/1127380)).
- The {{domxref('CSSAnimation')}} and {{domxref('CSSTransition')}} interfaces ([Firefox bug 1178186](https://bugzil.la/1178186)).
- The {{domxref('Animation.reverse()')}} method ([Firefox bug 1150808](https://bugzil.la/1150808)).
- The {{domxref('AnimationPlaybackEvent')}} interface has been added and {{domxref("Animation/cancel_event", "cancel")}} and {{domxref("Animation/finish_event", "finish")}} are now fired on {{domxref('Animation')}} ([Firefox bug 1178664](https://bugzil.la/1178664)).

#### Web Components

Our experimental implementation of the [Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM) has been modified:

- When trying to invoke {{domxref('Node.cloneNode()')}} on a {{domxref('ShadowRoot')}}, throws a `DataCloneError` exception ([Firefox bug 1176757](https://bugzil.la/1176757)).
- When invoking {{domxref('Document.importNode()')}} with a {{domxref('ShadowRoot')}} as an argument, we now throws a `NotSupportedError` {{domxref("DOMException")}} ([Firefox bug 1177914](https://bugzil.la/1177914)).
- When invoking {{domxref('Document.adoptNode()')}} with a {{domxref('ShadowRoot')}} as an argument, we now throws a `HierarchyRequestError` {{domxref("DOMException")}} ([Firefox bug 1177991](https://bugzil.la/1177991)).

#### WebGL

- WebGL2 {{domxref('WebGLTransformFeedback')}} has been implemented ([Firefox bug 1048724](https://bugzil.la/1048724)).
- To obtain a WebGL2 context, {{domxref('HTMLCanvasElement.getContext()')}} now takes `webgl2` instead of `experimental-webgl2` ([Firefox bug 1187174](https://bugzil.la/1187174)).

#### WebRTC

- The {{domxref("RTCPeerConnection.createOffer()")}}'s options data type, `RTCOfferOptions`, has been updated to more closely match the specification. Among other changes, it is now based upon the `RTCOfferAnswerOptions` dictionary, which provides the `voiceActivityDetection` option.
- The `RTCAnswerOptions` dictionary has been added. This is the type used for the `options` parameter to {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}}.
- The `RTCICECandidatePairStats.mozPriority` has been renamed to {{domxref('RTCICECandidatePairStats.priority')}} ([Firefox bug 1184426](https://bugzil.la/1184426)).

#### New APIs

- The {{domxref("ImageBitmap")}} interface and the {{domxref("createImageBitmap()")}} method have been implemented. They are available on regular window scripts and in Web workers and allow efficient posting of images between window and worker contexts ([Firefox bug 1044102](https://bugzil.la/1044102)).

#### Miscellaneous

- The {{domxref('IDBCursorWithValue')}} interface is now available in [Web workers](/en-US/docs/Web/API/Web_Workers_API) ([Firefox bug 1188115](https://bugzil.la/1188115)).
- Error events sent in [Web workers](/en-US/docs/Web/API/Web_Workers_API) doesn't bubble anymore ([Firefox bug 1188141](https://bugzil.la/1188141)).
- [Media Source Extensions](/en-US/docs/Web/API/Media_Source_Extensions_API) (MSE) has been activated for all websites, and no more for a white list of sites ([Firefox bug 1185611](https://bugzil.la/1185611)).
- The non-standard and deprecated `Window.mozRequestAnimationFrame()` has been removed ([Firefox bug 909154](https://bugzil.la/909154)). Use the standard {{domxref('Window.requestAnimationFrame()')}} instead.
- Speech synthesis (text-to-speech) has been implemented in Firefox Desktop for Windows, hidden behind the `media.webspeech.synth.enabled` flag in `about:config` ([Firefox bug 1003457](https://bugzil.la/1003457).) See [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) for more information.

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

## HTTP

- Firefox 41 and earlier versions were incorrectly accepting undefined or invalid pseudo-header fields in HTTP/2 responses. This is now fixed and the only pseudo-header field accepted from Firefox 42 is the _:status_ as per the specification. Response headers containing arbitrary fields are considered malformed. ([Firefox bug 1136727](https://bugzil.la/1136727))

## Networking

- The CSP [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#upgrade-insecure-requests) directive has been implemented ([Firefox bug 1139297](https://bugzil.la/1139297)).

## Security

- EV certificates with a validity greater than 39 months are now considered and handled as DV certificates ([Firefox bug 1145679](https://bugzil.la/1145679)).

## Changes for add-on and Mozilla developers

### Interfaces

#### nsIContentPolicy

- The `TYPE_EMBED` constant has been added to `nsIContentPolicy` to allow Gecko internals and add-on code to better differentiate different types of requests. Previously, `TYPE_OBJECT` was used for these cases ([Firefox bug 1148030](https://bugzil.la/1148030)).
- Similarly, the `TYPE_SUBDOCUMENT` constants has been split into `TYPE_FRAME` and `TYPE_IFRAME` ([Firefox bug 1148044](https://bugzil.la/1148044)).

### XUL

_No change._

### JavaScript code modules

_No change._

### XPCOM

_No change._

### Other

_No change._

## Older versions

{{Firefox_for_developers('41')}}
