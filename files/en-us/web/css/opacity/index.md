---
title: opacity
slug: Web/CSS/opacity
tags:
  - CSS
  - CSS Property
  - Opacity
  - Reference
  - recipe:css-property
browser-compat: css.properties.opacity
---
{{CSSRef}}

The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.

{{EmbedInteractiveExample("pages/css/opacity.html")}}

## Syntax

```css
opacity: 0.9
opacity: 90%

/* Global values */
opacity: inherit;
opacity: initial;
opacity: revert;
opacity: unset;
```

### Values

- `<alpha-value>`

  - : A {{cssxref("number")}} in the range `0.0` to `1.0`, inclusive, or a {{cssxref("percentage")}} in the range `0%` to `100%`, inclusive, representing the opacity of the channel (that is, the value of its alpha channel). Any value outside the interval, though valid, is clamped to the nearest limit in the range.

    | Value                                                         | Meaning                                                                       |
    | ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
    | `0`                                                           | The element is fully transparent (that is, invisible).                        |
    | Any {{cssxref("number")}} strictly between `0` and `1` | The element is translucent (that is, content behind the element can be seen). |
    | `1` (default value)                                           | The element is fully opaque (visually solid).                                 |

## Description

`opacity` applies to the element as a whole, including its contents, even though the value is not inherited by child elements. Thus, the element and its children all have the same opacity relative to the element's background, even if they have different opacities relative to one another.

Using `opacity` with a value other than `1` places the element in a new [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).

If you [do not want to apply opacity to child elements](http://stackoverflow.com/questions/13508877/resetting-the-opacity-of-a-child-elements-maple-browser-samsung-tv-app), use the {{cssxref("background")}} property instead. For example:

```css
background: rgba(0, 0, 0, 0.4);
```

## Accessibility concerns

If text opacity is adjusted, it is important to ensure that the contrast ratio between the color of the text and the background the text is placed over is high enough that people experiencing low vision conditions will be able to read the content of the page.

Color contrast ratio is determined by comparing the luminosity of the opacity-adjusted text and background color values. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), a ratio of 4.5:1 is required for text content and 3:1 for larger text such as headings. Large text is defined as 18.66px and [bold](/en-US/docs/Web/CSS/font-weight) or larger, or 24px or larger.

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting background opacity

#### HTML

```html
<div class="light">You can barely see this.</div>
<div class="medium">This is easier to see.</div>
<div class="heavy">This is very easy to see.</div>
```

#### CSS

```css
div { background-color: yellow; }
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

{{EmbedLiveSample('Setting_background_opacity', '640', '85')}}

### Setting opacity on hover

#### HTML

```html
<img src="//developer.mozilla.org/static/img/opengraph-logo.png"
  alt="MDN logo" width="128" height="146"
  class="opacity">
```

#### CSS

```css
img.opacity {
  opacity: 1;
  filter: alpha(opacity=100); /* IE8 and lower */
  zoom: 1; /* Triggers "hasLayout" in IE 7 and lower */
}

img.opacity:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  zoom: 1;
}
```

#### Result

{{EmbedLiveSample('Setting_opacity_on_hover', '150', '175')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Microsoft's filter:alpha(opacity=xx)](https://msdn.microsoft.com/en-us/library/ms532910%28VS.85%29.aspx)
