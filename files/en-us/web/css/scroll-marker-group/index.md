---
title: scroll-marker-group
slug: Web/CSS/scroll-marker-group
page-type: css-property
status:
  - experimental
browser-compat: css.properties.scroll-marker-group
---

{{CSSRef}}{{seecompattable}}

The **`scroll-marker-group`** [CSS](/en-US/docs/Web/CSS) property controls whether a {{glossary("scroll container")}} has a {{cssxref("::scroll-marker-group")}} pseudo-element generated, and if so, whether it is generated before _or_ after the container's child DOM elements.

## Syntax

```css
/* Single values */
scroll-marker-group: before;
scroll-marker-group: after;
scroll-marker-group: none;

/* Global values */
scroll-marker-group: inherit;
scroll-marker-group: initial;
scroll-marker-group: revert;
scroll-marker-group: revert-layer;
scroll-marker-group: unset;
```

### Values

- `after`

  - : The {{cssxref("::scroll-marker-group")}} pseudo-element is generated as a sibling of the scroll container's child DOM elements, immediately preceding them, and any generated {{cssxref("::scroll-button()")}} pseudo-elements. It does however appear at the end of the container's tab order and layout box order (but not DOM structure).

- `before`

  - : The `::scroll-marker-group` pseudo-element is generated as a sibling of the scroll container's child DOM elements, immediately preceding them, and any generated {{cssxref("::scroll-button()")}} pseudo-elements. It also appears at the start of the container's tab order and layout box order.

- `none`

  - : The scroll container does not have a generated `::scroll-marker-group` pseudo-element. This is the default value if the `scroll-marker-group` property is not explicitly set.

> [!NOTE]
> It is a best practice to match the visual rendering position of the scroll marker group with the tab order. When placing the group at the start of the content, put it at the beginning of the tab order using `before`. When placing the group at the end of the content, put it at the end of the tab order using `after`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

See [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels) for full examples that use the `scroll-marker-group` property.

### Placement of the scroll markers

In this example, we demonstrate the three values of the `scroll-marker-group` property.

#### HTML

We have a basic HTML {{htmlelement("ul")}} list with several {{htmlelement("li")}} list items. Every even list item contains an {{htmlelement("a")}} element, linking to the current page.

```html hidden
<fieldset>
  <legend><code>scroll-marker-group</code> value:</legend>
  <label><input type="radio" name="p" value="before" /> before</label>
  <label><input type="radio" name="p" value="after" checked /> after</label>
  <label><input type="radio" name="p" value="none" /> none</label>
</fieldset>
```

```html
<ul>
  <li>Item 1</li>
  <li><a href="#">Item 2</a></li>
  <li>Item 3</li>
  <li><a href="#">Item 4</a></li>
  <li>Item 5</li>
  <li><a href="#>Item 6</a></li>
  <li>Item 7</li>
  <li><a href="#>Item 8</a></li>
</ul>
```

#### CSS

We convert our `<ul>` into a carousel by setting the {{cssxref("display")}} to `flex`, creating a single, non-wrapping flex line of `<li>` elements. The {{cssxref("overflow-x")}} is set to `auto`, meaning if the items are wider than, or overflow, their container on the x-axis, the content will scroll in the horizontal direction. We make the `<ul>` a scroll-snap container, ensuring that items always snap into place when the container is scrolled with the {{cssxref("scroll-snap-type")}} value of `mandatory`.

We create a scroll marker group with the `scroll-marker-group`, placing the group after all the content.

```css
ul {
  display: flex;
  gap: 4vw;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;

  scroll-marker-group: after;
}
```

We style the `<li>` elements, using the {{cssxref("flex")}} property to make them 33% of the width of the container. The {{cssxref("scroll-snap-align")}} value of `left` means when they scroll, the left-hand side of the left-most visible item will snap to the left of the container.

```css
li {
  list-style-type: none;
  background-color: #eee;
  flex: 0 0 33%;
  scroll-snap-align: left;
  text-align: center;
}
```

We then use the {{cssxref("::scroll-marker")}} to create a square marker for each list item with a red border, applying styles on the {{cssxref("::scroll-marker-group")}} pseudo-element that add `0.2em` gap between ever marker in a flex-line of markers.

```css
li::scroll-marker {
  content: " ";
  border: 1px solid red;
  height: 1em;
  width: 1em;
}

::scroll-marker-group {
  display: flex;
  gap: 0.2em;
}
```

We also style the marker of the currently scrolled element differently from the others, targeting the marker with the {{cssxref(":target-current")}} pseudoclass.

```css
::scroll-marker:target-current {
  background: red;
}
```

```css hidden
fieldset {
  width: 15em;
}

label {
  font-family: monospace;
  display: block;
}

:has([value="before"]:checked) ul {
  scroll-marker-group: before;
}
:has([value="after"]:checked) ul {
  scroll-marker-group: after;
}

:has([value="none"]:checked) ul {
  scroll-marker-group: none;
}
```

#### Result

{{EmbedLiveSample("Examples", '', '240')}}

Notice the placement of the scroll marker group. Check out how the keyboard tabbing order is different for `before` versus `after`, and note how the group disappears when the value is set to `none`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interactivity")}} property
- {{cssxref("::scroll-button()")}}, {{cssxref("::scroll-marker-group")}}, {{cssxref("::scroll-marker")}}, and {{cssxref("::column")}} pseudo-elements
- {{cssxref(":target-current")}} pseudo-class
- [Creating CSS carousels](/en-US/docs/Web/CSS/CSS_overflow/CSS_carousels)
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS Carousel Gallery](https://chrome.dev/carousel/) on chrome.dev (2025)
