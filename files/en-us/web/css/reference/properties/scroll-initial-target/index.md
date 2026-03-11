---
title: scroll-initial-target
slug: Web/CSS/Reference/Properties/scroll-initial-target
page-type: css-property
status:
  - experimental
browser-compat: css.properties.scroll-initial-target
sidebar: cssref
---

{{SeeCompatTable}}

The **`scroll-initial-target`** [CSS](/en-US/docs/Web/CSS) property enables the definition of elements that are potential snap targets when their ancestor {{glossary("scroll container")}} is first rendered.

## Syntax

```css
/* Keyword values */
scroll-initial-target: none;
scroll-initial-target: nearest;

/* Global values */
scroll-initial-target: inherit;
scroll-initial-target: initial;
scroll-initial-target: revert;
scroll-initial-target: revert-layer;
scroll-initial-target: unset;
```

### Values

- `none`
  - : The element is not an initial scroll target.
- `nearest`
  - : The element is potentially an initial scroll target for its nearest scroll container ancestor.

## Description

The `scroll-initial-target` property enables defining elements that should be snapped when their parent {{glossary("scroll snap")}} containers are first rendered. Setting the value to `nearest` defines the element as a potential target that should be snapped to when the nearest ancestor {{glossary("scroll container")}} first shows up on the page.

If multiple elements or pseudo-elements in the scroll container are set to `nearest`, the first element in the tree order is the initial scroll-snapping target.

The initial value is `none`, meaning a scroll-snappable element is not by default an initial scroll target. The `none` value can also be set on an element to explicitly make it not be an initial scroll target.

If a scroll container's initial scroll position is potentially set by both the {{cssxref("place-content")}} content-distribution property and by `scroll-initial-target` on any descendants — the first descendant with `scroll-initial-target: nearest` wins.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using `scroll-initial-target`

The example below demonstrates the two values of `scroll-initial-target`, and how the first element with `scroll-initial-target` gets snapped.

#### HTML

We include 5 containers, preceded by a paragraph explaining the expected effect.

```html
<p><code>none</code> on #4 only</p>
<div class="none">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> on #4 only</p>
<div class="nearest">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> on even elements</p>
<div class="nearest">
  <div>1</div>
  <div class="set">2</div>
  <div>3</div>
  <div class="set">4</div>
  <div>5</div>
</div>

<p><code>nearest</code> on odd elements</p>
<div class="nearest">
  <div class="set">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>

<p><code>nearest</code> on odd elements, with <code>none</code> on #1</p>
<div class="nearest">
  <div class="set unset">1</div>
  <div>2</div>
  <div class="set">3</div>
  <div>4</div>
  <div class="set">5</div>
</div>
```

#### CSS

We set up the nearest and none elements as scroll-snap containers, centering the snapped elements.

```css
/* mandatory scroll-snap on parent */
div.nearest,
div.none {
  scroll-snap-type: x mandatory;
}

/* scroll-snap alignment for children */
div > div {
  scroll-snap-align: center;
  scroll-initial-target: always;
}
```

We then set `scroll-initial-target` of either `none` or `nearest` on all the elements with the `.set` class.

```css
.none .set,
.nearest .set.unset {
  scroll-initial-target: none;
}
.nearest .set {
  scroll-initial-target: nearest;
}
```

```css hidden
/* setup */
body {
  height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  font-family: sans-serif;
  text-align: center;
}

div.nearest,
div.none {
  display: flex;
  overflow: auto;
  font-size: 3rem;
}

div div {
  width: 90%;
  min-width: 15rem;
  flex: none;
  outline: 1px solid #333333;
}

/* coloration */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}

p {
  margin: 1em 0 0;
}

@supports not (scroll-initial-target: nearest) {
  body::before {
    content: "Your browser doesn't support the scroll-initial-target property.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 1em;
  }
}
```

#### Result

{{EmbedLiveSample("Using scroll-initial-target", "100%", "500")}}

The property's effect is demonstrated when the scroll-snap container is drawn to the page.

Each row snaps to the first element with `nearest` set, if any, in tree order. In the last example, we've overridden the `nearest` value with `none` on the first element, so the first element with `nearest` applied is #3.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS scroll snap](/en-US/docs/Web/CSS/Guides/Scroll_snap)
