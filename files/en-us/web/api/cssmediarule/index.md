---
title: CSSMediaRule
slug: Web/API/CSSMediaRule
page-type: web-api-interface
browser-compat: api.CSSMediaRule
---

{{ APIRef("CSSOM") }}

The **`CSSMediaRule`** interface represents a single CSS {{cssxref("@media")}} rule.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

- {{domxref("CSSMediaRule.media")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MediaList")}} representing the intended destination medium for style information.

## Instance methods

_No specific methods; inherits methods from its ancestors {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, and {{domxref("CSSRule")}}._

## Examples

The CSS below includes a media query with one style rule.
As this rule lives in the last stylesheet added to the document, it will be the first CSSRule returned by the last stylesheet in the document (`document.styleSheets[document.styleSheets.length-1].cssRules`).
`myRules[0]` returns a {{domxref("CSSMediaRule")}} object, from which we can get the `mediaText`.

```html
<p id="log"></p>
```

```css
@media (min-width: 500px) {
  body {
    color: blue;
  }
}
```

```js
const log = document.getElementById("log");
const myRules = document.styleSheets[document.styleSheets.length - 1].cssRules;
const mediaList = myRules[0]; // a CSSMediaRule representing the media query.
log.textContent += ` ${mediaList.media.mediaText}`;
```

{{EmbedLiveSample("Examples","100%","50px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
