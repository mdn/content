---
title: scrollbar-width
slug: Web/CSS/scrollbar-width
tags:
  - CSS
  - CSS Property
  - Reference
  - css scrollbars
  - recipe:css-property
  - scrollbar-width
browser-compat: css.properties.scrollbar-width
---
{{CSSRef}}

The **`scrollbar-width`** property allows the author to set the maximum thickness of an element's scrollbars when they are shown.

## Syntax

```css
/* Keyword values */
scrollbar-width: auto;
scrollbar-width: thin;
scrollbar-width: none;

/* Global values */
scrollbar-width: inherit;
scrollbar-width: initial;
scrollbar-width: revert;
scrollbar-width: revert-layer;
scrollbar-width: unset;
```

### Values

- _\<scrollbar-width>_

  - : Defines the width of the scrollbar as a keyword. It must be one of the following values:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>auto</code></td>
          <td>The default scrollbar width for the platform.</td>
        </tr>
        <tr>
          <td><code>thin</code></td>
          <td>
            A thin scrollbar width variant on platforms that provide that option, or
            a thinner scrollbar than the default platform scrollbar width.
          </td>
        </tr>
        <tr>
          <td><code>none</code></td>
          <td>No scrollbar shown, however the element will still be scrollable.</td>
        </tr>
      </tbody>
    </table>

    > **Note:** User Agents must apply any `scrollbar-width` value set on the root element to the viewport.

## Accessibility concerns

Use this property with caution — setting `scrollbar-width` to `thin` or `none` can make content hard or impossible to scroll if the author does not provide an alternative scrolling mechanism. While swiping gestures or mouse wheels can enable scrolling on such content, some devices have no scroll alternative.

WCAG criterion 2.1.1 (Keyboard) has been in place for a long time to advise on basic keyboard accessibility, and this should include scrolling of content areas. And introduced in WCAG 2.1, criterion 2.5.5 (Target Size) advises that touch targets should be at least 44px in width and height (although the problem is compounded on high-resolution screens; thorough testing is advised).

- [MDN Understanding WCAG, Guideline 2.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.1_—_keyboard_accessible_make_all_functionality_available_from_a_keyboard)
- [MDN Understanding WCAG, Guideline 2.5 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.5_input_modalities_make_it_easier_for_users_to_operate_functionality_through_various_inputs_beyond_keyboard.s/)
- [Understanding Success Criterion 2.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [Understanding Success Criterion 2.5.5 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Sizing overflow scrollbars

#### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-width: thin;
}
```

#### HTML

```html
<div class="scroller">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</div>
```

#### Result

{{EmbedLiveSample("Sizing_overflow_scrollbars")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("-ms-overflow-style")}}
- {{CSSxRef("::-webkit-scrollbar")}}
