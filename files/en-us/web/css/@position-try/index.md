---
title: "@position-try"
slug: Web/CSS/@position-try
page-type: css-at-rule
status:
  - experimental
browser-compat: css.at-rules.position-try
---

{{CSSRef}}{{SeeCompatTable}}

The **`@position-try`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is used to define a custom **position try option**, named with a {{cssxref("dashed-ident")}}. The `<dashed-ident>` can then be used to reference the custom position try option in the {{cssxref("position-try-options")}} property.

When `position-try-options` is set on an **anchor-positioned element**, the browser will try placing the positioned element in the positions specified in the different try options, to stop it from overflowing its container or the viewport.

For detailed information on anchor positioning, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Syntax

```text
@position-try <dashed-ident> {
  declaration-list
}
```

The different parts are as follows:

- {{cssxref("dashed-ident")}}
  - : A developer-defined identifying name for the position try option, which can then be used to add that option to the {{cssxref("position-try-options")}} list.
- `declaration-list`
  - : A list of CSS declarations that define the behavior of the custom try option, i.e., where it will result in the positioned element being placed. The following properties can be used inside a `@position-try` block:
    - {{cssxref("position-anchor")}}
    - {{cssxref("inset-area")}}
    - Inset properties:
      - Physical inset properties: {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, and {{cssxref("right")}}.
      - Logical inset properties: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}.
      - Shorthand inset properties: {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, and {{cssxref("inset")}}.
    - Margin properties:
      - Physical margin properties: {{cssxref("margin-top")}}, {{cssxref("margin-left")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-right")}}.
      - Logical margin properties: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}}
      - Shorthand margin properties: {{cssxref("margin")}}, {{cssxref("margin-block")}}, and {{cssxref("margin-inline")}}
    - Sizing properties:
      - Physical sizing properties: {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, and {{cssxref("max-height")}}.
      - Logical sizing properties: {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("min-block-size")}}, {{cssxref("min-inline-size")}}, {{cssxref("max-block-size")}}, and {{cssxref("max-inline-size")}}.
    - Self-alignment properties: {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, and {{cssxref("justify-self")}}

## Formal syntax

{{csssyntax}}

## Examples

### Custom position try option usage

In this example we'll look at how to set up and use some custom try options.

#### HTML

The HTML includes two {{htmlelement("div")}} elements that will become an anchor and an anchor-positioned element:

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

Next, we use the `@position-try` at-rule to define four custom position try options. with descriptive {{cssxref("dashed-ident")}}s to identify them and describe their purpose. Each one places the positioned element in a specific {{cssxref("inset-area")}} and gives it an appropriate {{cssxref("margin")}} for its position. The left and right options are given a narrower {{cssxref("width")}}:

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

The infobox is given fixed positioning, a {{cssxref("position-anchor")}} property that references the anchor's `anchor-name`, to associate the two together, and it is tethered to the anchor's top edge using an {{cssxref("inset-area")}}. We also give it a fixed {{cssxref("width")}} and some bottom {{cssxref("margin")}}. The custom try options are then referenced in the {{cssxref("position-try-options")}} property to stop the positioned element overflowing when the anchor gets near the edge of the viewport.

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

Scroll the page and check out the effect of these position try options as the anchor nears the edge of the viewport:

{{ EmbedLiveSample("Custom try options", "100%", "250") }}

Let's talk through how these position options work:

- First of all, note that our default position is defined by `inset-area: top`, so the infobox sits above the anchor. We also give the infobox a fixed width and some bottom margin so it doesn't sit right next to the anchor.
- If the infobox starts to overflow, the browser first tries the `--custom-left` position. This moves the infobox to the left of the anchor, adjusts the margin to suit, and also gives the infobox a different width as it sits alongside the anchor.
- Next, the browser tries the `--custom-bottom` position. This moves the infobox to the bottom of the anchor, and sets an appropriate margin. It doesn't set a width, so the infobox returns to its default width — 200px.
- The browser next tries the `--custom-right` position. This works much the same as the `--custom-left` position, with the same width applied, but the `inset-area` and `margin` values are mirrored to place the infobox appropriately to the right.
- If none of the other try options succeed in stopping the postitioned element from overflowing, the browser tries the `--custom-bottom-right` position as a last resort. This works in much the same way as the other options, but it places the positioned element to the bottom-right of the anchor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-try-options")}}, {{cssxref("position-try")}}
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
