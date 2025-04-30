---
title: opacity
slug: Web/CSS/opacity
page-type: css-property
browser-compat: css.properties.opacity
---

{{CSSRef}}

The **`opacity`** [CSS](/en-US/docs/Web/CSS) property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

{{InteractiveExample("CSS Demo: opacity")}}

```css interactive-example-choice
opacity: 0;
```

```css interactive-example-choice
opacity: 0.33;
```

```css interactive-example-choice
opacity: 1;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  background-color: #963770;
  color: white;
  padding: 1em;
}
```

## Syntax

```css
opacity: 0.9;
opacity: 90%;

/* Global values */
opacity: inherit;
opacity: initial;
opacity: revert;
opacity: revert-layer;
opacity: unset;
```

### Values

- `<alpha-value>`

  - : A {{cssxref("number")}} in the range `0.0` to `1.0`, inclusive, or a {{cssxref("percentage")}} in the range `0%` to `100%`, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

    | Value                                                  | Meaning                                                                       |
    | ------------------------------------------------------ | ----------------------------------------------------------------------------- |
    | `0`                                                    | The element is fully transparent (that is, invisible).                        |
    | Any {{cssxref("number")}} strictly between `0` and `1` | The element is translucent (that is, content behind the element can be seen). |
    | `1` (default value)                                    | The element is fully opaque (visually solid).                                 |

## Description

`opacity` applies to the element as a whole, including its contents, even though the value is not inherited by child elements. Thus, the element and its children all have the same opacity relative to the element's background, even if they have different opacities relative to one another.

To change the opacity of a background only, use the {{cssxref("background")}} property with a [color value](/en-US/docs/Web/CSS/color_value) that allows for an alpha channel. For example:

```css
background: rgb(0 0 0 / 40%);
```

When `opacity` value is set to `0`, the element and all of its children appear invisible, but they are still part of the DOM. That means they still register [pointer events](/en-US/docs/Web/API/Pointer_events) and, if the elements are in a tabbing order, they do get focus. For good usability, make sure to make such elements visible when they receive user interactions or use the CSS [`pointer-events`](/en-US/docs/Web/CSS/pointer-events) property to disable pointer events and take the element out of the tab order by disabling with the `disabled` attribute or setting [`tab-index="-1"`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) for non-form-related interactive elements.

Using `opacity` with a value other than `1` places the element in a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

Opacity alone should not be used to provide information to screen readers. Use the HTML [`hidden`](/en-US/docs/Web/HTML/Reference/Global_attributes/hidden) attribute, CSS [`visibility`](/en-US/docs/Web/CSS/visibility), or CSS [`display`](/en-US/docs/Web/CSS/display) style properties. It's best to avoid using [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) attribute, but if the element is hidden with opacity, then hide it from screen readers as well.

### Transitioning opacity

When [transitioning](/en-US/docs/Web/CSS/CSS_transitions) the opacity of elements as you add them to the page when content was formerly hidden with [`visibility: hidden`](/en-US/docs/Web/CSS/visibility#hidden), [`display: none`](/en-US/docs/Web/CSS/display#none), or [`content-visibility: hidden`](/en-US/docs/Web/CSS/content-visibility#hidden), you need to include both a [`@starting-style`](/en-US/docs/Web/CSS/@starting-style) and [`transition-behavior: allow-discrete`](/en-US/docs/Web/CSS/transition-behavior#allow-discrete):

```css
.card {
  transition:
    opacity 5s,
    display 5s;
  background-color: orange;

  transition-behavior: allow-discrete;
  @starting-style {
    opacity: 0;
  }
}

.card.hidden {
  display: none;
  opacity: 0;
}
```

To enable first-style transitions, `@starting-style` rules are needed. In the above code, setting `opacity: 0` in `@starting-style` provides a starting point for the transition when the element receives its initial style update. For more details, see [`@starting-style`](/en-US/docs/Web/CSS/@starting-style).

Setting `transition-behavior: allow-discrete` is required to transition to `display: none`. See the [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior) property for more details.

## Accessibility

If text opacity is adjusted, it is important to ensure that the contrast ratio between the color of the text and the background the text is placed over is high enough that people experiencing low vision conditions will be able to read the content of the page.

Color contrast ratio is determined by comparing the luminosity of the opacity-adjusted text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/en-US/docs/Web/CSS/font-weight) or larger, or 24px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

Various operating systems provide a preference for reducing transparency. To set the `opacity` based on the user's operating systems transparency preferences, use the [`prefers-reduced-transparency`](/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) media query.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting opacity

The following example demonstrates how the `opacity` property changes the opacity of the entire element and content, thus making the text very hard to read.

#### HTML

```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```

#### CSS

```css
div {
  background-color: yellow;
  font-weight: bold;
  font-size: 130%;
}
.light {
  opacity: 0.2; /* Barely see the text over the background */
}
.medium {
  opacity: 0.5; /* See the text more clearly over the background */
}
.heavy {
  opacity: 0.9; /* See the text very clearly over the background */
}
```

#### Result

{{EmbedLiveSample('Setting_opacity', '640', '105')}}

### Setting opacity on hover

In the following example opacity is changed on hover, so the striped background image on the parent element shows through the image.

#### HTML

```html
<div class="wrapper">
  <img
    src="//interactive-examples.mdn.mozilla.net/media/dino.svg"
    alt="MDN Dino"
    width="128"
    height="146"
    class="opacity" />
</div>
```

#### CSS

```css
img.opacity {
  opacity: 1;
}

img.opacity:hover {
  opacity: 0.5;
}

.wrapper {
  width: 200px;
  height: 160px;
  background-color: #f03cc3;
  background-image: linear-gradient(
    90deg,
    transparent 50%,
    rgb(255 255 255 / 50%) 50%
  );
  background-size: 20px 20px;
}
```

#### Result

{{EmbedLiveSample('Setting_opacity_on_hover', '150', '200')}}

### Styling based on user preferences

To style elements based on user's operating systems transparency preferences, use the [`prefers-reduced-transparency`](/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) media query. The following example demonstrates how to use the `prefers-color-scheme` media query to specify the desired `opacity` based on the user's preferences.

```css
.element {
  opacity: 0.5;
}

@media (prefers-reduced-transparency) {
  .element {
    opacity: 1;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`prefers-reduced-transparency`](/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) media query
- [CSS color](/en-US/docs/Web/CSS/CSS_colors) module
- SVG {{SVGAttr("opacity")}} attribute
