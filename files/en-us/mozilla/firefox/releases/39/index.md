---
title: Firefox 39 for developers
slug: Mozilla/Firefox/Releases/39
tags:
  - Firefox
  - Releases
---
{{FirefoxSidebar}}

Firefox 39 was released on July 2, 2015. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### Developer Tools

Highlights:

- [WebIDE now supports debugging Firefox OS devices over Wi-Fi](/en-US/docs/Tools/WebIDE/Setting_up_runtimes#Connecting_over_WiFi)
- [WebIDE now supports Cordova projects](/en-US/docs/Tools/WebIDE/Working_with_Cordova_apps_in_WebIDE)
- [Animations view: rewind, fast-forward, and jump to a specific time](/en-US/docs/Tools/Page_Inspector/How_to/Work_with_animations#firefox_39)
- [The cubic Bézier curve editor now includes 31 presets](/en-US/docs/Tools/Page_Inspector/How_to/Work_with_animations#firefox_39)
- [Drag and drop elements in the Page Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#drag_and_drop)
- [Web console command history is now persisted across sessions](/en-US/docs/Tools/Web_Console#command_history)
- [$\_ console command to print the last result evaluated](/en-US/docs/Tools/Web_Console#helper_commands)
- [Better box model highlighting for inline elements](/en-US/docs/Tools/Page_Inspector/How_to/Examine_and_edit_the_box_model#firefox_39)

[All devtools bugs fixed between Firefox 38 and Firefox 39](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&query_based_on=devtools_resolved_week&chfieldto=2015-03-31&chfield=resolution&query_format=advanced&chfieldfrom=2015-02-22&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&known_name=devtools_resolved_week&list_id=12157026).

### CSS

- Support of the {{cssxref("&lt;string&gt;")}} type on {{cssxref("list-style-type")}}, as well as its shorthand property {{cssxref("list-style")}} has been implemented ({{bug(1144607)}}).
- CSS Scroll Snapping has been implemented ({{bug(945584)}} and {{bug(1138658)}}).
- Cascading of CSS Animations and CSS Transitions has been rewritten to match the latest specification ({{bug(1125455)}}).
- Support for vertical scripts, with the {{cssxref("writing-mode")}} is now turned on by default on Nightly and Developer Edition, but not on Firefox Beta and Firefox Release ({{bug(1099032)}}). Note that implementation is not yet complete and some widgets, like tables, will not obey to all values.
- CSS {{cssxref("filter")}} acts like position: relative + overflow: hidden ({{bug(1125767)}}).

### HTML

- A new {{glossary("ARIA")}} role, `switch`, is now supported ({{bug(1136563)}}).
- Support for `<link rel="preconnect">` allowing to anticipate a future connection without revealing any information has been implemented ({{bug(1135160)}}).

### JavaScript

- The [`RegExp` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) no longer throws when the first argument is a `RegExp` and the second `flags` argument is present ({{bug(1108949)}}).
- The {{jsxref("Object.noSuchMethod", "Object.prototype.__noSuchMethod__")}} property is now deprecated and throws a console warning (see {{bug(1140428)}} and this [platform announcement](https://groups.google.com/forum/#!topic/mozilla.dev.platform/0EkHgphxUo8)).
- The implementation of the {{jsxref("Proxy")}} object has been updated to comply more with the ES2015 specification:

  - The {{jsxref("Global_Objects/Proxy/Proxy/defineProperty", "defineProperty")}} and {{jsxref("Global_Objects/Proxy/Proxy/set", "set")}} handlers now need to explicitly return `true` to be successful, otherwise a {{jsxref("TypeError")}} exception will be thrown in strict mode ({{bug(1132522)}}).
  - If the {{domxref("window")}} object is set as the target, those handlers will now throw a `TypeError` ({{bug(828137)}}).

- When using [arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (`=>`), a line terminator (`\n`) is no longer allowed after arrow function arguments (`() \n => {}`) ({{bug(1141392)}}).
- {{jsxref("RegExp.prototype.toString")}} is now a generic function ({{bug(1079919)}}).
- The non-standard `flags` argument of {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.search()")}}, and {{jsxref("String.prototype.replace()")}} is now deprecated and throws a console warning ({{bug(1142351)}}).
- The try/catch behavior of {{jsxref("Object.assign()")}} has been removed to conform with the latest ES2015 draft ({{bug(1103344)}}).

### Interfaces/APIs/DOM

- The experimental `CanvasRenderingContext2D.addHitRegion()` method now accepts a `path` option, which allows you to add hit regions to {{domxref("Path2D")}} objects ({{bug(1129147)}}).
- New methods have been added to manipulate {{domxref("FormData")}} objects ({{bug(1085283)}}) and `FormData` is now supported in Web workers ({{bug(739173)}}).
- The non-standard {{domxref("XMLHttpRequest.sendAsBinary()")}} method has been removed ({{bug(853162)}}).
- Progress in our experimental implementation of Web Animations: {{domxref("Animation/startTime", "AnimationPlayer.startTime")}} is now writeable ({{bug(1073379)}}).
- Progress in our experimental implementation of [Service Workers](/en-US/docs/Web/API/Service_Worker_API): {{domxref("Cache")}} and {{domxref("CacheStorage")}} interfaces are now implemented ({{bug(940273)}}).
- The experimental [Fetch API](/en-US/docs/Web/API/Fetch_API) has been activated by default ({{bug(1133861)}}).
- Progress in our experimental implementation of WebGL2: {{domxref("WebGLSync")}} is now implemented ({{bug(1048721)}}).
- Support for {{domxref("MouseEvent.offsetX")}} and {{domxref("MouseEvent.offsetY")}} have been added on desktop ({{bug(69787)}}, but not on Firefox for Android or Firefox OS (they will be added in [Firefox 43](/en-US/docs/Mozilla/Firefox/Releases/43)).

### MathML

_No change._

### SVG

_No change._

### Audio/Video

_No change._

### Miscellaneous

- [WOFF2](/en-US/docs/Web/Guide/WOFF) fonts support is now turned on by default in release version of Firefox (Beta and Release, in addition of Nightly and Developer Edition) ({{bug(1084026)}}).
- The [`-remote`](/en-US/docs/Mozilla/Command_Line_Options#-remote_remote_command) command-line option has been removed ({{bug(1080319)}}).
- Support for new [Unicode 8.0 skin tone emoji](https://www.bbc.co.uk/newsbeat/article/32220611/diverse-thumbs-up-emojis-with-different-skin-tones-finally-here) ({{bug(1153460)}}).

## Networking

- Support for SSLv3 has been completely removed ({{bug(1106470)}}).

## Security

_No change._

## Changes for add-on and Mozilla developers

_No change._

## Older versions

{{Firefox_for_developers('38')}}
