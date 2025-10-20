---
title: list-style
slug: Web/CSS/list-style
page-type: css-shorthand-property
browser-compat: css.properties.list-style
sidebar: cssref
---

The **`list-style`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/CSS_cascade/Shorthand_properties) allows you to set all the list style properties at once.

{{InteractiveExample("CSS Demo: list-style")}}

```css interactive-example-choice
list-style: square;
```

```css interactive-example-choice
list-style: inside;
```

```css interactive-example-choice
list-style: url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style: none;
```

```css interactive-example-choice
list-style: georgian inside url("/shared-assets/images/examples/rocket.svg");
```

```css interactive-example-choice
list-style: georgian outside url("/non-existent.svg");
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>NASA Notable Missions</p>
    <ul class="transition-all" id="example-element">
      <li>Apollo</li>
      <li>Hubble</li>
      <li>Chandra</li>
      <li>Cassini-Huygens</li>
      <li>Spitzer</li>
    </ul>
  </div>
</section>
```

```css interactive-example
.default-example {
  font-size: 1.2rem;
}

#example-element {
  width: 100%;
  background: #be094b;
  color: white;
}

section {
  text-align: left;
  flex-direction: column;
}

hr {
  width: 50%;
  color: lightgray;
  margin: 0.5em;
}

.note {
  font-size: 0.8rem;
}

.note a {
  color: #009e5f;
}

@counter-style space-counter {
  symbols: "\1F680" "\1F6F8" "\1F6F0" "\1F52D";
  suffix: " ";
}
```

The values of this property are applied to list items, including {{HTMLElement("li")}} elements and elements with `{{cssxref("display")}}: list-item;`. Because this property is inherited, it can be set on a parent element (normally {{HTMLElement("ol")}} or {{HTMLElement("ul")}}) to make the same list styling apply to all the nested items.

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
list-style: url("../img/shape.png");

/* position */
list-style: inside;

/* two values */
list-style: georgian outside;
list-style: url("img/pip.svg") inside;

/* three values */
list-style: lower-roman url("img/shape.png") outside;

/* Keyword value */
list-style: none;

/* Global values */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: revert-layer;
list-style: unset;
```

The `list-style` property is specified as one, two, or three values in any order. If {{cssxref("list-style-type")}} and {{cssxref("list-style-image")}} are both set, the `list-style-type` is used as a fallback if the image is unavailable.

### Values

- {{cssxref("list-style-type")}}
  - : A `<counter-style>`, {{cssxref("string")}}, or `none`. If omitted in the shorthand, the default `disc` value is used. See {{cssxref("list-style-type")}}.
- {{cssxref("list-style-image")}}
  - : An {{cssxref("image")}} or `none`. If omitted, the default `none` value is used. See {{cssxref("list-style-image")}}.
- {{cssxref("list-style-position")}}
  - : Either `inside` or `outside`. If omitted, the default `outside` value is used. See {{cssxref("list-style-position")}}.
- `none`
  - : No list style is used.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Accessibility

Safari does not recognize ordered or unordered lists as lists in the accessibility tree if they have a `list-style` value of `none`, unless the list is nested within the {{HTMLElement("nav")}} navigation element. This [behavior is intentional](https://webkit.org/b/170179#c1) and is not considered a bug.

To ensure lists are announced as lists, include [`role="list"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) to {{HTMLElement("ol")}} and {{HTMLElement("ul")}} elements, especially if the list is not nested in a `<nav>`. This restores list semantics without affecting the design:

```html
<ul role="list">
  <li>An item</li>
  <li>Another item</li>
</ul>
```

If an ARIA `role` is not an option for your code, CSS can be used instead. Adding non-empty [pseudo-content](/en-US/docs/Web/CSS/content) such as text or images before each list item can restore list semantics, but impacts the visual appearance. Safari determines if the added pseudo-content suffices as accessible content, restoring list semantics if so. Generally, Safari considers text and images as sufficient, which is why the `content: "+ ";` shown below works (but requires additional styling to not affect the design).

```css
ul {
  list-style: none;
}

ul li::before {
  content: "+ ";
}
```

A declaration of `content: "";` (an empty string) is ignored, as are `content` values that contain only spaces, such as `content: " ";`.

These CSS workarounds should only be used when an HTML solution is unavailable, and only after testing to ensure that they don't result in unexpected behaviors that may negatively impact user experience.

- ['Fixing' Lists](https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html) (2023)
- [VoiceOver and list-style-type: none](https://gerardkcohen.me/writing/2017/voiceover-list-style-type.html) (2017)
- [Understanding WCAG: Create content that can be presented in different ways](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding success criterion 1.3.1: Info and relationships | WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

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

{{EmbedLiveSample('Setting_list_style_type_and_position', 'auto', 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Component properties: {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}, and {{Cssxref("list-style-position")}}
- {{Cssxref("::marker")}} pseudo-element
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
