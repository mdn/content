---
title: ':-moz-only-whitespace'
slug: Web/CSS/:-moz-only-whitespace
tags:
  - ':-moz-only-whitespace'
  - CSS
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors.-moz-only-whitespace
---
{{CSSRef}}

{{Non-standard_Header}}

> **Note:** In {{SpecName("CSS4 Selectors", "#the-empty-pseudo")}} the {{CSSxRef(":empty")}} selector was changed to act like `:-moz-only-whitespace`, but no browser currently supports this yet.

The **`:-moz-only-whitespace`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements that only contains text nodes that only contain {{Glossary("whitespace")}}. (This includes elements with empty text nodes and elements with no child nodes.)

## Syntax

{{CSSSyntax}}

## Examples

### Simple :-moz-only-whitespace example

#### HTML

```html
<div> </div>
```

#### CSS

```css
div {
  border: 4px solid red;
}

:-moz-only-whitespace {
  border-color: lime;
}
```

#### Result

{{EmbedLiveSample('Simple_-moz-only-whitespace_example', '100%', 50)}}

## Specifications

Briefly defined as `:blank` in {{SpecName("CSS4 Selectors", "#changes-2018-02")}}, but then the functionality was merged into {{CSSxRef(":empty")}} and {{CSSxRef(":blank")}} redefined to mean empty {{HTMLElement("input")}}.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
