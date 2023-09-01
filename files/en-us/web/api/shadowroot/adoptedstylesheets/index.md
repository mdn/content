---
title: "ShadowRoot: adoptedStyleSheets property"
short-title: adoptedStyleSheets
slug: Web/API/ShadowRoot/adoptedStyleSheets
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.adoptedStyleSheets
---

{{APIRef("CSSOM")}}

The **`adoptedStyleSheets`** property of the {{domxref("ShadowRoot")}} interface sets an array of constructed stylesheets to be used by the shadow DOM subtree.

> **Note:** A constructed stylesheet is a stylesheet created programmatically using the [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet) (as compared to one created by a user-agent when importing a stylesheet from a script, imported using {{HTMLElement('style')}} and {{CSSXref('@import')}}, or linked to via {{HTMLElement('link')}}).

The same constructed stylesheet can be adopted by multiple {{domxref("ShadowRoot")}} instances, and by the parent document (using the {{domxref("Document.adoptedStyleSheets")}} property).
Changing an adopted stylesheet will affect all the adopting objects.

Stylesheets in the `adoptedStyleSheets` property are considered along with the shadow DOM's other stylesheets.
For the purpose of determining the final computed CSS of any element, they are considered to have been added _after_ the other stylesheets in the shadow DOM ([`ShadowRoot.styleSheets`](/en-US/docs/Web/API/ShadowRoot/styleSheets)).

Only stylesheets created using the [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet), and from within the same parent {{domxref("Document")}} as the shadow root, may be adopted.

## Value

The value is an array of {{domxref("CSSStyleSheet()")}} instances that must have been created using the {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}} constructor within the context of the shadow root's parent {{domxref("Document")}}.

If the array needs to be modified, then a new array must be assigned (in-place mutations like `push()` will throw an exception).
Note, however, that the {{domxref("CSSStyleSheet()")}} instances themselves can be modified, and these changes will apply wherever the stylesheet is adopted.

## Examples

### Adopting a stylesheet

The code below first shows a stylesheet being constructed, and then {{domxref("CSSStyleSheet.replaceSync()")}} is called to add a rule to the sheet.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");
```

We then create a {{domxref("ShadowRoot")}} and pass the sheet object to `adoptedStyleSheets` inside an array.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

//Adopt the sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

We can still modify the stylesheets after they have been added to the array.
Below we append a new rule to the same sheet using {{domxref("CSSStyleSheet.insertRule()")}}.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Append a new stylesheet

To _append_ a stylesheet to the `adoptedStyleSheets` property we have to create and assign a new array that contains both the original stylesheets in the property and the new style sheet.
This is demonstrated for our shadow root object below using spread-syntax:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Combine the existing sheets and new one
shadow.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constructable Stylesheets](https://web.dev/constructable-stylesheets/) (web.dev)
- [Using the Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSStyleSheet.deleteRule()")}}
