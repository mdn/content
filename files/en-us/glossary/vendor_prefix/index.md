---
title: Vendor Prefix
slug: Glossary/Vendor_Prefix
page-type: glossary-definition
---

{{GlossarySidebar}}

Browser vendors used to add prefixes to experimental or nonstandard CSS properties and JavaScript APIs, so developers could experiment with new ideas. This, in theory, helped to prevent their experiments from being relied upon and then breaking web developers' code during the standardization process.

Web developers included prefixed features on production websites, despite their experimental nature. This made it more difficult for browser vendors to ensure compatibility while working on new features. Including prefixed features also harmed smaller browser vendors who ended up having to add other browsers' prefixes in order to render popular websites.

Now, experimental features in browsers are "put behind a flag". This allows developers to change browser configurations to test upcoming features. Browsers now add experimental features behind user-controlled flags or preferences. Flags can be added for smaller specifications enabling reaching a stable state much more quickly.

## CSS prefixes

The most common browser CSS prefixes you will see in older code bases include:

- `-webkit-` (Chrome, Safari, newer versions of Opera and Edge, almost all iOS browsers including Firefox for iOS; basically, any WebKit or Chromium-based browser)
- `-moz-` (Firefox)
- `-o-` (old pre-WebKit versions of Opera)
- `-ms-` (Internet Explorer and Microsoft Edge, before Chromium)

Sample usage:

```css
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```

If you encounter the above code in a code base, you can safely remove all but the last line. All browsers support [transitions](/en-US/docs/Web/CSS/transition#browser_compatibility) without vendor prefixes:

```css
transition: all 4s ease;
```

## API prefixes

Historically, browser vendors have also used prefixes for experimental APIs. If an entire interface was experimental, then the interface's name was prefixed (but not the properties or methods within). If an experimental property or method was added to a standardized interface, then the individual method or property was prefixed.

### Interface prefixes

Prefixes for interface names are upper-cased:

- `WebKit` (Chrome, Safari, newer versions of Opera and Edge, almost all iOS browsers (including Firefox for iOS); basically, any WebKit and Chromium-based browser)
- `Moz` (Firefox)
- `O` (Older, pre-WebKit, versions of Opera)
- `MS` (Internet Explorer and Microsoft Edge, before Chromium)

### Property and method prefixes

The prefixes for properties and methods are lower-case:

- `webkit` (Chrome, Safari, newer versions of Opera and Edge, almost all iOS browsers (including Firefox for iOS); basically, any WebKit and Chromium-based browser)
- `moz` (Firefox)
- `o` (Old, pre-WebKit, versions of Opera)
- `ms` (Internet Explorer and Microsoft Edge, before Chromium)

Sample usage:

```js
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;
```

If you encounter the above code in a code base, you can safely remove all but the first line. All browsers support [`requestAnimationFrame`](/en-US/docs/Web/API/Window/requestAnimationFrame#browser_compatibility) without vendor prefixes, and without `window`:

```js
requestAnimationFrame(callback);
```

## See also

- [`-moz-` vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/Mozilla_Extensions)
- [`-webkit-` vendor-prefixed CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
- [Browser prefixes](https://en.wikipedia.org/wiki/CSS_hack#Browser_prefixes) on Wikipedia
