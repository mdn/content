---
title: Vendor Prefix
slug: Glossary/Vendor_Prefix
tags:
  - CodingScripting
  - Glossary
---
Browser vendors sometimes add prefixes to experimental or nonstandard CSS properties and JavaScript APIs, so developers can experiment with new ideas while—in theory—preventing their experiments from being relied upon and then breaking web developers' code during the standardization process. Developers should wait to include the unprefixed property until browser behavior is standardized.

> **Note:** Browser vendors are working to stop using vendor prefixes for experimental features. Web developers have been using them on production Web sites, despite their experimental nature. This has made it more difficult for browser vendors to ensure compatibility and to work on new features; it's also been harmful to smaller browsers who wind up forced to add other browsers' prefixes in order to load popular web sites.
>
> Lately, the trend is to add experimental features behind user-controlled flags or preferences, and to create smaller specifications which can reach a stable state much more quickly.

## CSS prefixes

The major browsers use the following prefixes:

- `-webkit-` (Chrome, Safari, newer versions of Opera, almost all iOS browsers including Firefox for iOS; basically, any WebKit based browser)
- `-moz-` (Firefox)
- `-o-` (old pre-WebKit versions of Opera)
- `-ms-` (Internet Explorer and Microsoft Edge)

Sample usage:

    -webkit-transition: all 4s ease;
    -moz-transition: all 4s ease;
    -ms-transition: all 4s ease;
    -o-transition: all 4s ease;
    transition: all 4s ease;

## API prefixes

Historically, vendors have also used prefixes for experimental APIs. If an entire interface is experimental, then the interface's name is prefixed (but not the properties or methods within). If an experimental property or method is added to a standardized interface, then the individual method or property is prefixed.

### Interface prefixes

Prefixes for interface names are upper-cased:

- `WebKit` (Chrome, Safari, newer versions of Opera, almost all iOS browsers (including Firefox for iOS); basically, any WebKit based browser)
- `Moz` (Firefox)
- `O` (Older, pre-WebKit, versions of Opera)
- `MS` (Internet Explorer and Microsoft Edge)

### Property and method prefixes

The prefixes for properties and methods are lower-case:

- `webkit` (Chrome, Safari, newer versions of Opera, almost all iOS browsers (including Firefox for iOS); basically, any WebKit based browser)
- `moz` (Firefox)
- `o` (Old, pre-WebKit, versions of Opera)
- `ms` (Internet Explorer and Microsoft Edge)

Sample usage:

```js
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
```

## See also

- {{Interwiki("wikipedia", "CSS_hack#Browser_prefixes", "Vendor prefix")}} on Wikipedia
