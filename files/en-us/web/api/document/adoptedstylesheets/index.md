---
title: "Document: adoptedStyleSheets property"
short-title: adoptedStyleSheets
slug: Web/API/Document/adoptedStyleSheets
page-type: web-api-instance-property
browser-compat: api.Document.adoptedStyleSheets
---

{{APIRef("CSSOM")}}

The **`adoptedStyleSheets`** property of the {{domxref("Document")}} interface is used for setting an array of constructed stylesheets to be used by the document.

> [!NOTE]
> A constructed stylesheet is a stylesheet created programmatically using the [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet) (as compared to one created by a user-agent when importing a stylesheet from a script, imported using {{HTMLElement('style')}} and {{CSSXref('@import')}}, or linked to via {{HTMLElement('link')}}).

The same constructed stylesheets can also be shared with one or more {{domxref("ShadowRoot")}} instances using the [`ShadowRoot.adoptedStyleSheets`](/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets) property.
Changing an adopted stylesheet will affect all the objects that adopt it.

Stylesheets in the property are evaluated along with the document's other stylesheets using the [CSS cascade algorithm](/en-US/docs/Web/CSS/CSS_cascade/Cascade).
Where the resolution of rules considers stylesheet order, `adoptedStyleSheets` are assumed to be ordered after those in [`Document.styleSheets`](/en-US/docs/Web/API/Document/styleSheets).

Only stylesheets created using the [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet) within the context of the current {{domxref("Document")}} may be adopted.

## Value

The value is an array of {{domxref("CSSStyleSheet")}} instances that must have been created using the {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}} constructor within the context of the same {{domxref("Document")}}.

If the array needs to be modified, use in-place mutations like `push()`. The {{domxref("CSSStyleSheet")}} instances themselves can also be modified, and these changes will apply wherever the stylesheet is adopted.

In an earlier version of the specification, the array was not modifiable, so the only way to add new stylesheets was to assign a new array to `adoptedStyleSheets`.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : One of the {{domxref("CSSStyleSheet")}} instances in the array was not created using the [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet) or was constructed in a different document than the current document, such as one in a frame.

## Examples

### Adopting a stylesheet

The code below shows a stylesheet being constructed, and then {{domxref("CSSStyleSheet.replaceSync()")}} is called to add a rule to the sheet.
The stylesheet is then added to an array and assigned to the `adoptedStyleSheets` property.

```js
// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("a { color: red; }");

// Apply the stylesheet to a document
document.adoptedStyleSheets = [sheet];
```

We can append a new rule to the stylesheet using {{domxref("CSSStyleSheet.insertRule()")}}.

```js
sheet.insertRule("* { background-color: blue; }");
// The document will now have blue background.
```

### Append a new stylesheet

To append a whole new stylesheet to the `adoptedStyleSheets` property we have to create and assign a new combined array.
This is demonstrated below using spread-syntax:

```js
const extraSheet = new CSSStyleSheet();
extraSheet.replaceSync("p { color: green; }");

// Combine the existing sheets and new one
document.adoptedStyleSheets = [...document.adoptedStyleSheets, extraSheet];
```

## Sharing a stylesheet with a shadow DOM

We can share a stylesheet to a shadow root in a similar way.

```js
// Create an element in the document and then create a shadow root:
const node = document.createElement("div");
const shadow = node.attachShadow({ mode: "open" });

//Adopt the same sheet into the shadow DOM
shadow.adoptedStyleSheets = [sheet];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Constructable Stylesheets](https://web.dev/articles/constructable-stylesheets) (web.dev)
- [Using the Shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [`CSSStyleSheet()` constructor](/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet)
- {{domxref("CSSStyleSheet.replaceSync()")}}
- {{domxref("CSSStyleSheet.replace()")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSStyleSheet.deleteRule()")}}
