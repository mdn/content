---
title: "@position-try"
slug: Web/CSS/@position-try
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.position-try
---

{{CSSRef}}{{SeeCompatTable}}

The **`@position-try`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) is used to define a custom position try fallback option, which can be used to define positioning and alignment for anchor-positioned elements. One or more sets of position try fallback options can be applied to the anchored element via the {{cssxref("position-try-fallbacks")}} property or {{cssxref("position-try")}} shorthand. When the positioned element is moved to a position where it starts to overflow its containing block or the viewport, the browser will select the first position try fallback option it finds that places the positioned element fully back on-screen.

Each position option is named with a {{cssxref("dashed-ident")}} and contains a descriptor list specifying declarations that define information such as inset position, margin, sizing, and self-alignment. The `<dashed-ident>` is used to reference the custom position option in the {{cssxref("position-try-fallbacks")}} property and {{cssxref("position-try")}} shorthand.

For detailed information on anchor features and position try fallback usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide.

## Syntax

```css
@position-try --try-option-name {
  descriptor-list
}
```

> [!NOTE]
> The `--try-option-name` is a {{cssxref("dashed-ident")}} specifying an identifying name for the custom position option, which can then be used to add that fallback option to the {{cssxref("position-try-fallbacks")}} list.

### Descriptors

The descriptors specify property values that define the behavior of the custom position option, i.e., where it will result in the positioned element being placed.

- `position-anchor`
  - : Specifies a {{cssxref("position-anchor")}} property value that defines the anchor element that the positioned element is tethered to, by specifying a {{cssxref("dashed-ident")}} value equal to the anchor element's {{cssxref("anchor-name")}} property value.
- `position-area`
  - : Specifies a {{cssxref("position-area")}} property value that defines the position of the anchor-positioned element relative to the anchor.
- [Inset property](/en-US/docs/Glossary/Inset_properties) descriptors
  - : Specify [`anchor()`](/en-US/docs/Web/CSS/anchor) function values that define the position of the anchor-positioned element's edges relative to the anchor element's edge. Inset property descriptors can be set that represent the following properties:
    - {{cssxref("top")}}
    - {{cssxref("left")}}
    - {{cssxref("bottom")}}
    - {{cssxref("right")}}.
    - {{cssxref("inset-block-start")}}
    - {{cssxref("inset-block-end")}}
    - {{cssxref("inset-inline-start")}}
    - {{cssxref("inset-inline-end")}}
    - {{cssxref("inset-block")}}
    - {{cssxref("inset-inline")}}
    - {{cssxref("inset")}}
- Margin property descriptors
  - : Specify the margin set on the anchor-positioned element. Margin property descriptors can be set that represent the following properties:
    - {{cssxref("margin-top")}}
    - {{cssxref("margin-left")}}
    - {{cssxref("margin-bottom")}}
    - {{cssxref("margin-right")}}
    - {{cssxref("margin-block-start")}}
    - {{cssxref("margin-block-end")}}
    - {{cssxref("margin-inline-start")}}
    - {{cssxref("margin-inline-end")}}
    - {{cssxref("margin")}}
    - {{cssxref("margin-block")}}
    - {{cssxref("margin-inline")}}
- Sizing property descriptors
  - : Specify [`anchor-size()`](/en-US/docs/Web/CSS/anchor-size) function values that define the size of the anchor-positioned element relative to the anchor element size. Sizing property descriptors can be set that represent the following properties:
    - {{cssxref("width")}}
    - {{cssxref("height")}}
    - {{cssxref("min-width")}}
    - {{cssxref("min-height")}}
    - {{cssxref("max-width")}}
    - {{cssxref("max-height")}}
    - {{cssxref("block-size")}}
    - {{cssxref("inline-size")}}
    - {{cssxref("min-block-size")}}
    - {{cssxref("min-inline-size")}}
    - {{cssxref("max-block-size")}}
    - {{cssxref("max-inline-size")}}
- Self-alignment property descriptors
  - : Specify the [`anchor-center`](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) value to align the anchor-positioned element relative to the anchor element's center, in the block or inline direction. {{cssxref("align-self")}} and {{cssxref("justify-self")}} property descriptors can take the `anchor-center` value.

> [!NOTE]
> When a custom position option is applied to an element, the property values defined in the `@position-try` at-rule descriptor takes precedence over the values set on the element via standard CSS properties.

## Formal syntax

{{csssyntax}}

## Examples

### Custom position option usage

In this example, we define an anchor element and an anchor-positioned element, then create four named custom position try fallback options. These options are applied to the positioned element to ensure its contents are always visible no matter where the anchor element is within the viewport.

#### HTML

We include two {{htmlelement("div")}} elements that will become an anchor and an anchor-positioned element:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

We first style the `<body>` element to be very large, so that we can scroll the anchor and the positioned element around in the viewport, both horizontally and vertically:

```css
body {
  width: 1500px;
  height: 500px;
}
```

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

The anchor is given an {{cssxref("anchor-name")}} and has a {{cssxref("position")}} value of `absolute` set on it. We then position it somewhere near the center of the initial `<body>` rendering using {{cssxref("top")}} and {{cssxref("left")}} values:

```css
.anchor {
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 350px;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Next, we use the `@position-try` at-rule to define four custom position options, with descriptive {{cssxref("dashed-ident")}} names to identify them and describe their purpose. Each one places the positioned element in a specific position around the anchor element and gives it an appropriate `10px` margin between the positioned element and its anchor. The positioning is handled in a variety of ways, to demonstrate the different techniques available:

- The first and last position options use a {{cssxref("position-area")}}.
- The second position option uses {{cssxref("top")}} with an {{cssxref("anchor()")}} value and {{cssxref("justify-self", "justify-self: anchor-center")}} to center the positioned element on the anchor in the inline direction.
- The third position option uses {{cssxref("left")}} with an {{cssxref("anchor()")}} value, wrapped inside a {{cssxref("calc()")}} function that adds `10px` of spacing (rather than creating the spacing with {{cssxref("margin")}} like the other options do). It then uses {{cssxref("align-self", "align-self: anchor-center")}} to center the positioned element on the anchor in the block direction.

Finally, the left and right position options are given a narrower {{cssxref("width")}}

```css
@position-try --custom-left {
  position-area: left;
  width: 100px;
  margin: 0 10px 0 0;
}

@position-try --custom-bottom {
  top: anchor(bottom);
  justify-self: anchor-center;
  margin: 10px 0 0 0;
  position-area: none;
}

@position-try --custom-right {
  left: calc(anchor(right) + 10px);
  align-self: anchor-center;
  width: 100px;
  position-area: none;
}

@position-try --custom-bottom-right {
  position-area: bottom right;
  margin: 10px 0 0 10px;
}
```

The infobox is given fixed positioning, a {{cssxref("position-anchor")}} property that references the anchor's `anchor-name` to associate the two together, and it is tethered to the anchor's top edge using an {{cssxref("position-area")}}. We also give it a fixed {{cssxref("width")}} and some bottom {{cssxref("margin")}}. The custom position options are then referenced in the {{cssxref("position-try-fallbacks")}} property to prevent the positioned element from overflowing, or being scrolled out of view, when the anchor gets near the edge of the viewport.

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  position-area: top;
  width: 200px;
  margin: 0 0 10px 0;
  position-try-fallbacks:
    --custom-left, --custom-bottom,
    --custom-right, --custom-bottom-right;
}
```

#### Result

Scroll the page and notice the change in the positioned element's placement as the anchor nears the different edges of the viewport. This is due to different fallback position options being applied.

{{ EmbedLiveSample("Custom position option usage", "100%", "250") }}

Let's talk through how these position options work:

- First of all, note that our default position is defined by `position-area: top`. When the infobox isn't overflowing the page in any direction, the infobox sits above the anchor, and the position try fallback options set in the `position-try-fallbacks` property are ignored. Also note that the infobox has a fixed width and bottom margin set. These values will change as different position try fallback options are applied.
- If the infobox starts to overflow, the browser first tries the `--custom-left` position. This moves the infobox to the left of the anchor using `position-area: left`, adjusts the margin to suit, and also gives the infobox a different width.
- Next, the browser tries the `--custom-bottom` position. This moves the infobox to the bottom of the anchor using `top` and `justify-self` instead of a `position-area`, and sets an appropriate margin. It doesn't include a `width` descriptor, so the infobox returns to its default width of `200px` set by the `width` property.
- The browser next tries the `--custom-right` position. This works much the same as the `--custom-left` position, with the same `width` descriptor value applied. However, we are using `left` and `align-self` to place the positioned element instead of a `position-area`. And we are wrapping the `left` value in a `calc()` function inside which we are adding `10px` to create spacing, instead of using `margin`.
- If none of the other try fallback options succeed in stopping the positioned element from overflowing, the browser tries the `--custom-bottom-right` position as a last resort. This places the positioned element to the bottom-right of the anchor using `position-area: bottom right`.

When a position option is applied, its values override the initial values set on the positioned element. For example, the `width` initially set on the positioned element is `200px`, but when the `--custom-right` position option is applied, its width is set to `100px`.

In some cases, we need to set values inside the custom position options to turn off the initial values. The `--custom-bottom` and `--custom-right` options use inset property and `*-self: anchor-center` values to place the positioned element, therefore we remove the previously-set `position-area` value in each case by setting `position-area: none`. If we didn't do this, the initially set `position-area: top` value would still take effect and interfere with the other positioning information.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-area")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("position-try")}}
- The {{cssxref("anchor()")}} function
- The {{cssxref("anchor-size()")}} function
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide
- {{domxref("CSSPositionTryRule")}}
