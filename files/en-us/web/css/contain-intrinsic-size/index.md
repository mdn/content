---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
page-type: css-shorthand-property
browser-compat: css.properties.contain-intrinsic-size
---

{{CSSRef}}

The **`contain-intrinsic-size`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the size of an element that a browser will use for layout when the element is subject to [size containment](/en-US/docs/Web/CSS/CSS_containment#size_containment).

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`contain-intrinsic-width`](/en-US/docs/Web/CSS/contain-intrinsic-width)
- [`contain-intrinsic-height`](/en-US/docs/Web/CSS/contain-intrinsic-height)

## Syntax

```css
/* Keyword values */
contain-intrinsic-width: none;

/* <length> values */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* width | height */
contain-intrinsic-size: 1000px 1.5em;

/* auto <length> */
contain-intrinsic-size: auto 300px;
contain-intrinsic-size: auto none;

/* auto width | auto height */
contain-intrinsic-size: auto 300px auto 4rem;

/* Global values */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: revert-layer;
contain-intrinsic-size: unset;
```

### Values

Either one or two of the following values may be specified for an element.
If two values are specified, the first value applies to the width, and the second to the height.
If a single value is specified, it applies to both width and height.

- `none`
  - : The element has no intrinsic size in the given dimension(s).
- `<length>`
  - : The element has the specified {{cssxref("&lt;length&gt;")}} in the given dimension(s).
- `auto [<length> | none]`
  - : A remembered value of the "normally rendered" element size if one exists and the element is skipping its contents (for example, when it is offscreen); otherwise the specified `<length>`.
    The `none` keyword may be used in place of `<length>` where `0px` fixed lengths behave differently than `none` (such as in multi column, or grid layouts).

## Description

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility).

Size containment allows a user agent to layout an element as though it had a fixed size, preventing unnecessary reflows by avoiding the re-rendering of child elements to determine the actual size (thereby improving user experience).
By default, size containment treats elements as though they had no contents, and may collapse the layout in the same way as if the contents had no width or height.
The `contain-intrinsic-size` property allows authors to specify an appropriate value to be used as the size for layout.

The `auto <length>` value allows the size of the element to be stored if the element is ever "normally rendered" (with its child elements), and then used instead of the specified length when the element is skipping its contents.
This allows offscreen elements with [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility) to benefit from size containment without developers having to be as precise in their estimates of element size.
The remembered value is not used if the child elements are being rendered (if size containment is enabled, the `<length>` will be used).

In grid and multi column layouts, an explicit height is treated as a stronger command than an implicit content-based height.
Elements might lay out substantially differently than it would have were it simply filled with content up to that height.
The `auto none` value allows the element to fallback to `contain-intrinsic-size: none` if no remembered value exists, which will allow the element to be laid out as though it had no contents instead of 0px height.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using auto value pairs for intrinsic size

This example demonstrates `contain-intrinsic-size: auto <length>` and `contain-intrinsic-size: auto none` approximating an 'infinite scroll' layout where there are many of the same type of elements repeated vertically.
Using `content-visibility: auto` skips rendering elements when they are offscreen, so this property is a good candidate to combine with `contain-intrinsic-size` to improve rendering performance and minimize [reflows](/en-US/docs/Glossary/Reflow).

The `contain-intrinsic-size: auto 500px` value pair tells the browser to use 500px as a kind of 'placeholder' size (width and height) for the element when it is offscreen and the page is being laid out.
When the element needs to be rendered onscreen (when the user scrolls to it), the browser will perform a render of the element and its contents.

Once the browser has actual size information for the element, it will remember this size when the element scrolls offscreen again, and use the remembered size for layout calculations instead of the placeholder value.
The benefit is that the browser does not need to repeatedly render the element contents to calculate its size and is especially useful when the contents are complex or depend on network resources or JavaScript.

#### HTML

```html
<div id="container">
  <div class="auto-length">
    <p>Item one</p>
  </div>
  <div class="auto-length">
    <p>Item two</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item three</p>
  </div>
  <div class="auto-length large-intrinsic-size">
    <p class="small">Item four</p>
  </div>
  <div class="auto-length none">
    <p>Item five</p>
  </div>
  <div class="auto-length none">
    <p>Item six</p>
  </div>
</div>
```

#### CSS

```css hidden
div,
p {
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-family: sans-serif;
}

#container {
  padding: 1rem;
  width: 90%;
  height: 80%;
}
```

```css
p {
  height: 500px;
  width: 500px;
  border: 4px dotted;
  background: lightblue;
}

.auto-length {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
  background-color: linen;
  outline: 4px dotted blue;
}

.large-intrinsic-size {
  /* Setting an inaccurate intrinsic size for the element */
  contain-intrinsic-size: auto 5000px;
  background-color: lightgray;
  outline: 4px dotted red;
}

.small {
  /* This element is a lot smaller than expected */
  height: 100px;
  width: 100px;
}

.none {
  background-color: papayawhip;
  contain-intrinsic-size: auto none;
  outline: 4px dotted red;
}
```

#### Result

- The first two boxes have an intrinsic size that matches their actual size, so as they flow into view, the layout is recalculated but we see no change in the scrollbar or the scroll position.

- The third and fourth boxes have a huge intrinsic size, so the initial layout that the browser calculated is far too big.
  The paragraphs in these boxes are much smaller so that it's obvious you've reached a point that forces a drastic layout change.

  When the third and fourth boxes scroll into view, the size is recalculated, making the box and its parent less tall.
  The effect is that the scroller jumps down the page (we've effectively scrolled further through the box than we'd estimated) and the scroller is longer, because the entire page is less tall than we'd estimated.

- The last boxes have `auto none`, so they have zero estimated size.
  When they scroll into view the size of the parent increases, the scroller decreases in size and moves up the bar.

{{EmbedLiveSample('Using_auto_value_pairs_for_intrinsic_size', 800, 400)}}

### Setting the intrinsic size

This example provides selection lists that can be used to modify `contain-intrinsic-size`, `content-visibility` and `contain` on an element in order to observe the effect of the different settings.

#### CSS

```css
#contained_element {
  border: 2px solid green;
  width: 120px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

#### JavaScript

The code below adds styles to, and removes styles from, the containing element based on the selected options.

```js
const containedElement = document.querySelector("#contained_element");
const intrinsicSizeSelector = document.querySelector(
  "#contain_intrinsic_size_selector",
);
const containSelector = document.querySelector("#contain_selector");
const contentVisibilitySelector = document.querySelector(
  "#content_visibility_selector",
);

containedElement.style["contain-intrinsic-size"] =
  intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
containedElement.style["contain"] =
  containSelector.options[containSelector.selectedIndex].text;
containedElement.style["content-visibility"] =
  contentVisibilitySelector.options[
    contentVisibilitySelector.selectedIndex
  ].text;

intrinsicSizeSelector.addEventListener("change", () => {
  containedElement.style["contain-intrinsic-size"] =
    intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
});

containSelector.addEventListener("change", () => {
  containedElement.style["contain"] =
    containSelector.options[containSelector.selectedIndex].text;
});

contentVisibilitySelector.addEventListener("change", () => {
  containedElement.style["content-visibility"] =
    contentVisibilitySelector.options[
      contentVisibilitySelector.selectedIndex
    ].text;
});
```

#### HTML

The HTML defines two buttons, a container element that is subject to containment via the `content-visibility` property.

```html
<p>
  <label for="contain_intrinsic_size_selector">contain-intrinsic-size:</label>
  <select id="contain_intrinsic_size_selector">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></select
  >;<br />

  <label for="contain_selector">contain:</label>
  <select id="contain_selector">
    <option>none</option>
    <option>size</option>
    <option>strict</option></select
  >;<br />

  <label for="content_visibility_selector">content-visibility:</label>
  <select id="content_visibility_selector">
    <option>visible</option>
    <option>auto</option>
    <option>hidden</option></select
  >;
</p>

<div id="contained_element">
  <div class="child_element"></div>
</div>
```

#### Result

Use the selectors to apply the given styles to the containing `div` element.
Note that when `content-visibility` is `visible` or `auto`, changing `contain-intrinsic-size` makes no difference.
However if the content is hidden, having a `contain-intrinsic-size` of `none` collapses the parent element as though its child element had no size.

{{EmbedLiveSample('Setting the intrinsic size', '100%', 170)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
