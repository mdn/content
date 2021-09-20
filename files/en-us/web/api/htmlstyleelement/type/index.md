---
title: HTMLStyleElement.type
slug: Web/API/HTMLStyleElement/type
tags:
  - API
  - HTML DOM
  - HTMLStyleElement
  - NeedsMarkupWork
  - NeedsSpecTable
  - Property
  - Read-only
  - Deprecated
browser-compat: api.HTMLStyleElement.type
---
{{APIRef("HTML DOM")}} {{Deprecated_Header}}

The **`HTMLStyleElement.type`** read-only property returns the
type of the current style.

For Gecko, the type is most often given as "text/css." From the W3C spec on CSS: "The
expectation is that binding-specific casting methods can be used to cast down from an
instance of the CSSRule interface to the specific derived interface implied by the
type."

## Syntax

```js
string = style.type;
```

## Example

```js
if (newStyle.type != "text/css"){
   // not supported!
   warnCSS();
}
```

## Browser compatibility

{{Compat}}
