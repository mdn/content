---
title: float
slug: Web/CSS/float
page-type: css-property
browser-compat: css.properties.float
---

{{CSSRef}}

The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to [absolute positioning](/en-US/docs/Web/CSS/position#absolute_positioning)).

{{EmbedInteractiveExample("pages/css/float.html")}}

A _floating element_ is one where the computed value of `float` is not `none`.

As `float` implies the use of the block layout, it modifies the computed value of the {{cssxref("display")}} values, in some cases:

| Specified value      | Computed value |
| -------------------- | -------------- |
| `inline`             | `block`        |
| `inline-block`       | `block`        |
| `inline-table`       | `table`        |
| `table-row`          | `block`        |
| `table-row-group`    | `block`        |
| `table-column`       | `block`        |
| `table-column-group` | `block`        |
| `table-cell`         | `block`        |
| `table-caption`      | `block`        |
| `table-header-group` | `block`        |
| `table-footer-group` | `block`        |
| `inline-flex`        | `flex`         |
| `inline-grid`        | `grid`         |
| _other_              | _unchanged_    |

> **Note:** If you're referring to this property from JavaScript as a member of the {{domxref("HTMLElement.style")}} object, modern browsers support `float`, but in older browsers you have to spell it as `cssFloat`. This was an exception to the rule, that the name of the DOM member is the camel-case name of the dash-separated CSS name (because "float" is a reserved word in JavaScript, as seen in the need to escape "class" as "className" and escape \<label>'s "for" as "htmlFor").

## Syntax

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: revert;
float: revert-layer;
float: unset;
```

The `float` property is specified as a single keyword, chosen from the list of values below.

### Values

- `left`
  - : The element must float on the left side of its containing block.
- `right`
  - : The element must float on the right side of its containing block.
- `none`
  - : The element must not float.
- `inline-start`
  - : The element must float on the start side of its containing block. That is the left side with `ltr` scripts, and the right side with `rtl` scripts.
- `inline-end`
  - : The element must float on the end side of its containing block. That is the right side with `ltr` scripts, and the left side with `rtl` scripts.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### How floated elements are positioned

As mentioned above, when an element is floated, it is taken out of the normal flow of the document (though still remaining part of it). It is shifted to the left, or right, until it touches the edge of its containing box, _or another floated element_.

In this example, there are three colored squares. Two are floated left, and one is floated right. Note that the second "left" square is placed to the right of the first. Additional squares would continue to stack to the right, until they filled the containing box, after which they would wrap to the next line.

A floated element is at least as tall as its tallest nested floated children. We gave the parent `width: 100%` and floated it to ensure it is tall enough to encompass its floated children, and to make sure it takes up the width of the parent so we don't have to clear its adjacent sibling.

#### HTML

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique
    sapien ac erat tincidunt, sit amet dignissim lectus vulputate. Donec id
    iaculis velit. Aliquam vel malesuada erat. Praesent non magna ac massa
    aliquet tincidunt vel in massa. Phasellus feugiat est vel leo finibus
    congue.
  </p>
</section>
```

#### CSS

```css
section {
  box-sizing: border-box;
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

#### Result

{{EmbedLiveSample('How_floated_elements_are_positioned','400','190')}}

### Clearing floats

Sometimes you may want to force an item to move below any floated elements. For instance, you may want paragraphs to remain adjacent to floats, but force headings to be on their own line. See {{cssxref("clear")}} for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- Use {{cssxref("clear")}} to force an item to move below a floated element.
