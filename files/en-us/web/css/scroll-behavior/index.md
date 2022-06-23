---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
tags:
  - CSS
  - CSS Property
  - CSSOM View
  - Reference
  - recipe:css-property
browser-compat: css.properties.scroll-behavior
---
{{CSSRef}}

The **`scroll-behavior`** [CSS](/en-US/docs/Web/CSS) property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.

{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}

Note that any other scrolls, such as those performed by the user, are not affected by this property. When this property is specified on the root element, it applies to the viewport instead. This property specified on the `body` element will *not* propagate to the viewport.

User agents are allowed to ignore this property.

## Syntax

```css
/* Keyword values */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Global values */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: revert-layer;
scroll-behavior: unset;
```

The `scroll-behavior` property is specified as one of the keyword values listed below.

### Values

- `auto`
  - : The scrolling box scrolls instantly.
- `smooth`
  - : The scrolling box scrolls in a smooth fashion using a user-agent-defined timing function over a user-agent-defined period of time. User agents should follow platform conventions, if any.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting smooth scroll behavior

#### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<div class="scroll-container">
  <div class="scroll-page" id="page-1">1</div>
  <div class="scroll-page" id="page-2">2</div>
  <div class="scroll-page" id="page-3">3</div>
</div>
```

#### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav, .scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
.scroll-container {
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

#### Result

{{ EmbedLiveSample("Setting_smooth_scroll_behavior", "100%", 250) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
