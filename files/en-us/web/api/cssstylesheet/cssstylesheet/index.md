---
title: CSSStyleSheet()
slug: Web/API/CSSStyleSheet/CSSStyleSheet
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - CSSStyleSheet
browser-compat: api.CSSStyleSheet.CSSStyleSheet
---
{{APIRef("CSSOM")}}

The **`CSSStyleSheet()`** constructor creates a new {{domxref("CSSStyleSheet")}} object which represents a single [Stylesheet](/en-US/docs/Glossary/Stylesheet).

After constructing a stylesheet the {{domxref("CSSStyleSheet.replace()")}}, {{domxref("CSSStyleSheet.replaceSync()")}}, {{domxref("CSSStyleSheet.insertRule()")}}, and {{domxref("CSSStyleSheet.deleteRule()")}} methods can be used to modify the rules of the new stylesheet.

A stylesheet created using this method is referred to as a "constructed stylesheet".
A constructed stylesheet can be shared between a document and its shadow DOM subtrees using {{domxref("ShadowRoot.adoptedStyleSheets")}} and {{domxref("Document.adoptedStyleSheets")}}.

## Syntax

```js
new CSSStyleSheet()
new CSSStyleSheet(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object containing the following:

    - `baseURL` {{optional_inline}}
      - : A string containing the `baseURL` used to resolve relative URLs in the stylesheet.
    - `media` {{optional_inline}}
      - : A {{domxref("MediaList")}} containing a list of media rules, or a string containing a single rule.
    - `disabled` {{optional_inline}}
      - : A {{jsxref("Boolean")}} indicating whether the stylesheet is disabled. False by default.

## Examples

In the following example, a new {{domxref("CSSStyleSheet")}} is constructed with a media rule of `"print"`.
Printing {{domxref("StyleSheet.media")}} to the console returns a {{domxref("MediaList")}} with a single entry for this print rule.

```js
let stylesheet = new CSSStyleSheet({ media: "print" });
console.log(stylesheet.media);
```

### Sharing stylesheets with a shadow DOM

The code below shows the sheet being constructed and then {{domxref("CSSStyleSheet.replaceSync()")}} is called to add a rule to the sheet.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync('a { color: red; }');
```

We then create a {{domxref("ShadowRoot")}} and pass the sheet object to the {{domxref("ShadowRoot.adoptedStyleSheets")}} property inside an array.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement('div');
const shadow = node.attachShadow({ mode: 'open' });

//Adopt the sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

We can modify the stylesheets after they have been added to the array.
Below we append a new rule to the same sheet using {{domxref("CSSStyleSheet.insertRule()")}}.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

The same sheet can be shared with multiple shadow subtrees in the same document.
For more examples see {{domxref("ShadowRoot.adoptedStyleSheets")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constructable Stylesheets](https://web.dev/constructable-stylesheets/) (web.dev)
- [Using the Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [construct-style-sheets-polyfill](https://www.npmjs.com/package/construct-style-sheets-polyfill)
