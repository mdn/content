---
title: "::-moz-list-bullet"
slug: Web/CSS/::-moz-list-bullet
page-type: css-pseudo-element
status:
  - non-standard
---

{{CSSRef}}{{Non-standard_header}}

The **`::-moz-list-bullet`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that represents the marker (typically a bullet) of a list item ({{htmlelement("li")}}) in an unordered list ({{htmlelement("ul")}}).

## Syntax

```css
li::-moz-list-bullet {
  /* ... */
}
```

## Examples

### Styling list item markers

#### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### CSS

```css
::-moz-list-bullet {
  color: red;
  font-size: 1.5em;
}
```

#### Result

{{ EmbedLiveSample('Styling list item markers') }}

## Specifications

Not part of any standard.

## See also

- {{cssxref(":-moz-list-number")}}
- {{cssxref("::marker")}}
