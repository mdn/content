---
title: list-style
slug: Web/CSS/list-style
tags:
  - CSS
  - CSS Lists
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.list-style
---
{{CSSRef}}

The **`list-style`** CSS [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) allows you to set all the list style properties at once.

{{EmbedInteractiveExample("pages/css/list-style.html")}}

> **Note:** This property is applied to list items, i.e., elements with `{{cssxref("display")}}: list-item;` . [By default](https://www.w3.org/TR/html5/rendering.html#lists) this includes {{HTMLElement("li")}} elements. Because this property is inherited, it can be set on a parent element (normally {{HTMLElement("ol")}} or {{HTMLElement("ul")}}) to make the same list styling apply to all the items inside.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`list-style-image`](/en-US/docs/Web/CSS/list-style-image)
- [`list-style-position`](/en-US/docs/Web/CSS/list-style-position)
- [`list-style-type`](/en-US/docs/Web/CSS/list-style-type)

## Syntax

```css
/* type */
list-style: square;

/* image */
list-style: url('../img/shape.png');

/* position */
list-style: inside;

/* type | position */
list-style: georgian inside;

/* type | image | position */
list-style: lower-roman url('../img/shape.png') outside;

/* Keyword value */
list-style: none;

/* Global values */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: unset;
```

The `list-style` property is specified as one, two, or three keywords in any order. If {{cssxref("list-style-type")}} and {{cssxref("list-style-image")}} are both set, then `list-style-type` is used as a fallback if the image is unavailable.

### Values

- {{cssxref("list-style-type")}}
  - : See {{cssxref("list-style-type")}}.
- {{cssxref("list-style-image")}}
  - : See {{cssxref("list-style-image")}}.
- {{cssxref("list-style-position")}}
  - : See {{cssxref("list-style-position")}}.
- `none`
  - : No list style is used.

## Accessibility concerns

In a notable exception, Safari will not recognize an unordered list as a list in the accessibility tree if has a `list-style` value of `none`.

The most straightforward way to address this is to add an explicit `role="list"` to the `<ul>` element in the markup. This will restore the list semantics without affecting the design.

CSS-only workarounds are also available for those who do not have access to the markup. One is to add a [zero-width space](https://en.wikipedia.org/wiki/Zero-width_space) as [pseudo-content](/en-US/docs/Web/CSS/content) before each list item:

```css
ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}
```

A second approach is to apply a url value to the list-style property:

```css
nav ol, nav ul {
  list-style: none;
}

/* becomes */

nav ol, nav ul {
  list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");
}
```

These CSS workarounds should be used only when the HTML solution is not available, and only after testing to ensure that they don’t result in unexpected behaviors that may negatively impact users’ experiences.

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html)
- [VoiceOver and list-style-type: none – Unfettered Thoughts](https://unfetteredthoughts.net/2017/09/26/voiceover-and-list-style-type-none/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting list style type and position

#### HTML

```html
List 1
<ul class="one">
  <li>List Item1</li>
  <li>List Item2</li>
  <li>List Item3</li>
</ul>
List 2
<ul class="two">
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
</ul>
```

#### CSS

```css
.one {
  list-style: circle;
}

.two {
  list-style: square inside;
}
```

#### Result

{{EmbedLiveSample('Setting_list_style_type_and_position', 'auto', 220)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
