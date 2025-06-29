---
title: sibling-index()
slug: Web/CSS/sibling-index
page-type: css-function
browser-compat: css.types.sibling-index
---

{{CSSRef}}

The **`sibling-index()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) represents an integer of the current element in the DOM tree on which the notation is used among its siblings. The function returns the contextual child index as a number. In other words, the `sibling-index()` function returns a number of the child element according to its position among all the sibling elements within a parent element.

> [!NOTE]
> Like the {{CSSxRef(":nth-child()")}} pseudo-class, `sibling-index()` starts from 1, not 0.

## Syntax

```css
li {
  width: calc(sibling-index() * 100px);
}
```

### Parameters

The `sibling-index()` function doesn't accept parameters.

### Return value

A number representing the current element in the DOM tree among its siblings.

## Examples

### Dynamic list width

For example, set the list item width dynamically based on the `<li>` elements order in a list.

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
  background-color: #faa;
}
```

### Ordered List

Now let's create an alternative ordered list using `sibling-index()`.

#### HTML

```html
<nav arial-label="Ordered list">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</nav>
```

#### CSS

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

## Tree Counting Entrance Animation

Combining `sibling-index()` with CSS animations open new posibilities:

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
  animation-name: fade;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-delay: calc(1s * sibling-index());
}

@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sibling-count", "sibling-count()")}}
