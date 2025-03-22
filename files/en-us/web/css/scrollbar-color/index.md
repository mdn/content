---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
page-type: css-property
browser-compat: css.properties.scrollbar-color
---

{{CSSRef}}

The **`scrollbar-color`** [CSS](/en-US/docs/Web/CSS) property sets the color of the scrollbar track and thumb.

The **track** refers to the background of the scrollbar, which is generally fixed regardless of the scrolling position.

The **thumb** refers to the moving part of the scrollbar, which usually floats on top of the track.

When `scrollbar-color` value is set on the document's root element, the values are applied to the viewport scrollbars.

## Syntax

```css
/* Keyword values */
scrollbar-color: auto;

/* <color> values */
scrollbar-color: rebeccapurple green; /* Two valid colors.
The first applies to the thumb of the scrollbar, the second to the track. */

/* Global values */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: revert;
scrollbar-color: revert-layer;
scrollbar-color: unset;
```

### Values

- `<scrollbar-color>`

  - : Defines the color of the scrollbar.

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>
            Default platform rendering for the track portion of the scrollbar, in
            the absence of any other related scrollbar color properties.
          </td>
        </tr>
        <tr>
          <td><code>&#x3C;color> &#x3C;color></code></td>
          <td>
            Applies the first color to the scrollbar thumb, the second to the
            scrollbar track.
          </td>
        </tr>
      </tbody>
    </table>

> **Note:** [`@media (forced-colors: active)`](/en-US/docs/Web/CSS/@media/forced-colors) sets `scrollbar-color` to `auto`.

## Accessibility

When using `scrollbar-color` property with specific color values, authors should ensure the specified colors have enough contrast between them. For keyword values, UAs should ensure the colors they use have enough contrast. See [Techniques for WCAG 2.0: G183: Using a contrast ratio of 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Coloring overflow scrollbars

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: #007 #bada55;
}
```

#### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

#### Result

{{EmbedLiveSample("Coloring_overflow_scrollbars")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS scrollbars styling](/en-US/docs/Web/CSS/CSS_scrollbars_styling) module
- {{CSSxRef("overflow")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
