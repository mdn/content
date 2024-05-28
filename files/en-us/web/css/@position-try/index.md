---
title: "@position-try"
slug: Web/CSS/@position-try
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.position-try
---

{{CSSRef}}{{SeeCompatTable}}

The **`@position-try`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to define a custom **position try option**, which can be used to define positioning and alignment for **anchor-positioned elements**. One or more sets of position try options can be applied to the anchored element via the {{cssxref("position-try-options")}} property. When the positioned element is moved to a position where it starts to overflow its containing block or the viewport, the browser will select the first position try option it finds that places the positioned element fully back on-screen.

Each position try option is named with a {{cssxref("dashed-ident")}} and contains a descriptor list specifying declarations that define information such as inset position, margin, sizing, and self-alignment. The `<dashed-ident>` is used to reference the custom position try option in the {{cssxref("position-try-options")}} property.

For detailed information on anchor positioning, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Syntax

```text
@position-try <dashed-ident> {
  descriptor-list
}
```

The different parts are as follows:

- {{cssxref("dashed-ident")}}
  - : A developer-defined identifying name for the position try option, which can then be used to add that option to the {{cssxref("position-try-options")}} list.
- `descriptor-list`
  - : Descriptors specifying declarations that define the behavior of the custom try option, i.e., where it will result in the positioned element being placed. The following descriptors can be used inside a `@position-try` block:
    - `position-anchor` descriptor
      - : Specifies a {{cssxref("position-anchor")}} property value that defines the anchor element that the positioned element is tethered to, by specifying a {{cssxref("dashed-ident")}} value equal to the anchor element's {{cssxref("anchor-name")}} property value.
    - `inset-area` descriptor
      - : Specifies an {{cssxref("inset-area")}} property value that defines the position of the the anchor-positioned element relative to the anchor.
    - Inset property descriptors
      - : Specify [`anchor()`](/en-US/docs/Web/CSS/anchor) function values that define the position of the the anchor-positioned element's edges relative to the anchor element's edge. Inset property descriptors can be set that represent the following properties:
        - Physical inset properties: {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, and {{cssxref("right")}}.
        - Logical inset properties: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}.
        - Shorthand inset properties: {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, and {{cssxref("inset")}}.
    - Margin property descriptors
      - : Specify the margin set on the anchor-positioned element. Margin property descriptors can be set that represent the following properties:
        - Physical margin properties: {{cssxref("margin-top")}}, {{cssxref("margin-left")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-right")}}.
        - Logical margin properties: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}}
        - Shorthand margin properties: {{cssxref("margin")}}, {{cssxref("margin-block")}}, and {{cssxref("margin-inline")}}
    - Sizing property descriptors
      - : Specify [`anchor-size()`](/en-US/docs/Web/CSS/anchor-size) function values that define the size of the anchor-positioned element relative to the anchor element size. Sizing property descriptors can be set that represent the following properties:
        - Physical sizing properties: {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, and {{cssxref("max-height")}}.
        - Logical sizing properties: {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-block-size")}}, {{cssxref("min-inline-size")}}, {{cssxref("max-block-size")}}, and {{cssxref("max-inline-size")}}.
    - Self-alignment property descriptors
      - : Specify the [`anchor-center`](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center) value to align the anchor-positioned element relative to the anchor element's center, in the block or inline direction. {{cssxref("align-self")}} and {{cssxref("justify-self")}} property descriptors can take the `anchor-center` value.

> **Note:** When a position option is applied to an element, the property values defined in the at-rule descriptors take precedence over the values set on the element via standard CSS properties.

## Formal syntax

{{csssyntax}}

## Examples

### Custom position try option usage

In this example, we define an anchor element and an anchor-positioned element, then create four named custom position try options. These options are applies to the positioned element to ensure its contents are always visible no matter where the anchor element is within the viewport.

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
  anchor-name: --infobox;
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

Next, we use the `@position-try` at-rule to define four custom position try options, with descriptive {{cssxref("dashed-ident")}} names to identify them and describe their purpose. Each one places the positioned element in a specific {{cssxref("inset-area")}} and gives it an appropriate 10px {{cssxref("margin")}} to create some space between the positioned element and the anchor. The left and right position try options are given a narrower {{cssxref("width")}}.

```css
@position-try --custom-left {
  inset-area: left;
  width: 100px;
  margin: 0 10px 0 0;
}

@position-try --custom-bottom {
  inset-area: bottom;
  margin: 10px 0 0 0;
}

@position-try --custom-right {
  inset-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}

@position-try --custom-bottom-right {
  inset-area: bottom right;
  margin: 10px 0 0 10px;
}
```

The infobox is given fixed positioning, a {{cssxref("position-anchor")}} property that references the anchor's `anchor-name`, to associate the two together, and it is tethered to the anchor's top edge using an {{cssxref("inset-area")}}. We also give it a fixed {{cssxref("width")}} and some bottom {{cssxref("margin")}}. The custom try options are then referenced in the {{cssxref("position-try-options")}} property to prevent the positioned element from overflowing, or being scrolled out of view, when the anchor gets near the edge of the viewport.

```css
.infobox {
  position: fixed;
  position-anchor: --infobox;
  inset-area: top;
  width: 200px;
  margin: 0 0 10px 0;
  position-try-options: --custom-left, --custom-bottom, --custom-right,
    --custom-bottom-right;
}
```

#### Result

Scroll the page and notice the change in the positioned element's placement as the anchor nears the different edges of the viewport. This is due to different position options being applied.

{{ EmbedLiveSample("Custom try options", "100%", "250") }}

Let's talk through how these position options work:

- First of all, note that our default position is defined by `inset-area: top`. When the infobox isn't overflowing the page in any direction, the infobox sits above the anchor, and the position try options set in the `position-try-options` property are ignored. Also note that the infobox has a fixed width and bottom margin set. These values will change as different position try options are applied.
- If the infobox starts to overflow, the browser first tries the `--custom-left` position. This moves the infobox to the left of the anchor, adjusts the margin to suit, and also gives the infobox a different width.
- Next, the browser tries the `--custom-bottom` position. This moves the infobox to the bottom of the anchor, and sets an appropriate margin. It doesn't include a `width` descriptor, so the infobox returns to its default width of `200px` set by the `width` property.
- The browser next tries the `--custom-right` position. This works much the same as the `--custom-left` position, with the same `width` descriptor value applied, but the `inset-area` and `margin` values are mirrored to place the infobox appropriately to the right.
- If none of the other try options succeed in stopping the postitioned element from overflowing, the browser tries the `--custom-bottom-right` position as a last resort. This works in much the same way as the other options, but it places the positioned element to the bottom-right of the anchor.

When a position try option is applied, its values will override the default values set on the positioned element. For example, the default `width` set on the positioned element is `200px`, but when the `--custom-right` position try option is applied, its width is set to `100px`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-try-options")}}, {{cssxref("position-try")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
