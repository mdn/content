---
title: sibling-index()
slug: Web/CSS/sibling-index
page-type: css-function
status:
  - experimental
browser-compat: css.types.sibling-index
sidebar: cssref
---

{{SeeCompatTable}}

The **`sibling-index()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) returns an integer representing the position of the current element in the DOM tree relative to all its sibling elements. The returned value is the index number of the contextual child's position among all the sibling elements within a parent element, with the first child returning `1` and the last child, returning {{domxref("Element.children")}}.length.

{{InteractiveExample("CSS Demo: sibling-index()")}}

```css interactive-example-choice
--width: calc(sibling-index() * 30px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 20px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 10px);
```

```css interactive-example-choice
--width: 100px;
```

```html interactive-example
<ul id="example-element">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```css interactive-example
#example-element {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

#example-element > li {
  text-align: center;
  padding: 2px;
  border-radius: 8px;
  width: var(--width, calc(sibling-index() * 30px));
  color: white;
  background-color: hsl(
    calc(360deg / sibling-count() * sibling-index()) 50% 50%
  );
}
```

> [!NOTE]
> Like the {{CSSxRef(":nth-child()")}} pseudo-class, `sibling-index()` starts from 1, not 0.

## Syntax

```css-nolint
sibling-index()
```

### Parameters

The `sibling-index()` function doesn't accept parameters.

### Return value

An integer; the position of the current element in the DOM tree's sibling order.

## Examples

### Dynamic list width

This example demonstrates how to dynamically increase the width of each {{htmlelement("li")}} item in the {{htmlelement("ul")}} by `50px`.

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

```css
li {
  width: calc(sibling-index() * 50px);
  background-color: #ffaaaa;
}
```

#### Results

{{EmbedLiveSample("Dynamic list width", "300", "100")}}

### Ordered list

This example demonstrates how to create an ordered list using `sibling-index()`, without using the {{htmlelement("ol")}} element. Always use the most semantic element for the context; this example is included to demonstrate what can be done with CSS when you don't have the ability to change the HTML.

#### HTML

We include a {{htmlelement("nav")}} container and several children {{htmlelement("div")}} elements.

```html
<nav aria-label="Ordered list">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</nav>
```

#### CSS

We make it visually appear as a numbered list by displaying the sibling-index before each {{htmlelement("div")}} element using the {{CSSxRef("::before")}} pseudo-element, setting the {{CSSxRef("content")}} to be the integer returned by the `sibling-index()` function.

```css
div {
  --list-index: sibling-index();
  display: flex;
  gap: 1ch;
}

div::before {
  content: var(--list-index);
}
```

#### Results

{{EmbedLiveSample("Ordered List", "300", "100")}}

### Sequential animations

Combining `sibling-index()` with CSS animations opens new possibilities. In this example, the opacity of elements in sequential order by setting an {{cssxref("animation-delay")}} based on their order in the DOM.

#### HTML

We include a container element with four children:

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

We apply the `fade-in` animation to each element. We use the `sibling-index()` function within a {{cssxref("calc()")}} function to set the duration of the `animation-delay` based on the source element's position in the source order. The {{cssxref("animation-fill-mode")}} applies the animation's `0%` keyframe until the `animation-duration` expires.

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-delay: calc(1s * sibling-index());
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### Results

{{EmbedLiveSample("Sequential animations", "300", "100")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sibling-count", "sibling-count()")}}
