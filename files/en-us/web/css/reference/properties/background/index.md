---
title: background
slug: Web/CSS/Reference/Properties/background
page-type: css-shorthand-property
browser-compat: css.properties.background
sidebar: cssref
---

The **`background`** [shorthand](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property sets all background style properties at once, such as color, image, origin and size, or repeat method.

{{InteractiveExample("CSS Demo: background")}}

```css interactive-example-choice
background: green;
```

```css interactive-example-choice
background: content-box radial-gradient(crimson, skyblue);
```

```css interactive-example-choice
background: no-repeat url("/shared-assets/images/examples/lizard.png");
```

```css interactive-example-choice
background: left 5% / 15% 60% repeat-x
  url("/shared-assets/images/examples/star.png");
```

```css interactive-example-choice
background:
  center / contain no-repeat
    url("/shared-assets/images/examples/firefox-logo.svg"),
  #eeeeee 35% url("/shared-assets/images/examples/lizard.png");
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}

## Syntax

```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <visual-box> and <'background-color'> */
background: border-box red;

/* A single image, centered and scaled */
background: no-repeat center/80% url("../img/image.png");

/* Global values */
background: inherit;
background: initial;
background: revert;
background: revert-layer;
background: unset;
```

### Values

- `<attachment>`
  - : See {{cssxref("background-attachment")}}. Default: `scroll`.
- `<visual-box>`
  - : See {{cssxref("background-clip")}} and {{cssxref("background-origin")}}. Default: `border-box` and `padding-box` respectively.
- `<'background-color'>`
  - : See {{cssxref("background-color")}}. Default: `transparent`.
- `<bg-image>`
  - : See {{Cssxref("background-image")}}. Default: `none`.
- `<bg-position>`
  - : See {{cssxref("background-position")}}. Default: `0% 0%`.
- `<repeat-style>`
  - : See {{cssxref("background-repeat")}}. Default: `repeat`.
- `<bg-size>`
  - : See {{cssxref("background-size")}}. Default: `auto`.

## Description

The following three lines of CSS are equivalent:

```css
background: none;
background: transparent;
background: repeat scroll 0% 0% / auto padding-box border-box none transparent;
```

### Property components

The `background` shorthand property enables you to declare all CSS background properties in a single declaration. The background lies underneath the content of an element; the content of an element is painted on top of it's background. When you have multiple, comma separated background values, each is background layer that is painted on top of the previous layers.

The `background` property is specified as one or more background layers, separated by commas. Each layer may include zero, one, or two `<visual-box>` and and zero or one `<attachment>`, `<bg-image>`, `<bg-position>`, `<bg-size>`, and `<repeat-style>`. If the `<bg-position>`, `<bg-size>`, or `<repeat-style>` components contain two values, the first value is the horizontal value and the second value is the vertical behavior. If only a single value is set, that value is applied the both vertices.

Component properties not set in the `background` shorthand property value declaration are set to their default values.

The `<'background-color'>` value may only be included in the last layer specified.

### Component property order

Because some of the component properties share value types, the order of those component properties within the shorthand is important.

The `<bg-size>` value may only be included immediately after `<bg-position>`, separated with the '/' character. For example: `10px 10px / 80% 80%` means the background image that is 80% as tall and 80% as wide as the element will be position 10px from the top and 10px from the left of the top-left corner of that element.

Each background layer can include zero, one, or two [`<visual-box>`](/en-US/docs/Web/CSS/Reference/Values/box-edge#visual-box) values. If only one value is included, it sets both {{cssxref("background-origin")}} and {{cssxref("background-clip")}}. If two values are present, the first occurrence specifies the `background-origin` and the second specifies the `background-clip` value. If no `<visual-box>` values are present, the `background-origin` defaults to `border-box` and the `background-clip` defaults to `padding-box`.

### Image painting order

If multiple comma-separate backgrounds are included, each creates a background layer that are laid on top of each other. The first value in the list is the top layer. If the layer provides no transparent areas, this is the only layer that will be visible.

The last layer is the bottom layer. The background color is always this last layer.

### Body background applied to the entire document

If the document root is the {{htmlelement("html")}} element and the computed value of `background-image` on the root element is `none` and its `background-color` is `transparent`, the browser will promote the `background` style of the first {{htmlelement("body")}} element onto the `:root`, and treat the `<body>` as if `background: initial` were set. In other words, the `:root` gets all the `background` styles that were set on `body`, and `<body>` element's background properties are their initial values. Because of this behavior, it's preferable to set your document's background styles in your `body` style block rather than your `html` style block.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Accessibility

Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users. If the image contains information critical to understanding the page's overall purpose, it is better to describe it semantically in the document.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Examples

### Setting backgrounds with color keywords and images

#### HTML

```html
<p class="top-banner">
  Starry sky<br />
  Twinkle twinkle<br />
  Starry sky
</p>
<p class="warning">Here is a paragraph</p>
<p></p>
```

#### CSS

```css
.warning {
  background: pink;
}

.top-banner {
  background: url("star-solid.gif") #9999ff repeat-y fixed;
}
```

#### Result

{{EmbedLiveSample("Setting_backgrounds_with_color_keywords_and_images")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("box-decoration-break")}}
- [Using gradients](/en-US/docs/Web/CSS/Guides/Images/Using_gradients)
- [Using multiple backgrounds](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
