---
title: ':blank'
slug: Web/CSS/:blank
tags:
  - ':blank'
  - CSS
  - CSS Selectors
  - Draft
  - Experimental
  - NeedsContent
  - NeedsExample
  - Pseudo-class
  - Selector
browser-compat: css.selectors.blank
---
{{CSSRef}}{{SeeCompatTable}}

> **Note:** The `:blank` selector is considered at risk, as the CSSWG keeps changing it.
>
> See [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967).

The **`:blank`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects empty user input elements (e.g. {{HTMLElement("input")}} or {{HTMLElement("textarea")}}).

## Syntax

```
:blank
```

## Examples

### Simple :blank example

In eventual supporting browsers, the `:blank` pseudo-class will enable developers to highlight in some way input controls that are not required, but still have no content filled in, perhaps as a reminder to users.

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### Result

{{EmbedLiveSample('Simple_blank_example', '100%', 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef(":empty")}}
