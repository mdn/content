---
title: margin-left
slug: Web/CSS/margin-left
page-type: css-property
browser-compat: css.properties.margin-left
---

{{CSSRef}}

The **`margin-left`** [CSS](/en-US/docs/Web/CSS) property sets the [margin area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

{{EmbedInteractiveExample("pages/css/margin-left.html")}}

The vertical margins of two adjacent boxes may fuse. This is called [_margin collapsing_](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing).

In the rare cases where width is overconstrained (i.e., when all of `width`, `margin-left`, `border`, `padding`, the content area, and `margin-right` are defined), `margin-left` is ignored, and will have the same calculated value as if the `auto` value was specified.

## Syntax

```css
/* <length> values */
margin-left: 10px; /* An absolute length */
margin-left: 1em; /* relative to the text size */
margin-left: 5%; /* relative to the nearest block container's width */

/* Keyword values */
margin-left: auto;

/* Global values */
margin-left: inherit;
margin-left: initial;
margin-left: revert;
margin-left: revert-layer;
margin-left: unset;
```

The `margin-left` property is specified as the keyword `auto`, or a `<length>`, or a `<percentage>`. Its value can be positive, zero, or negative.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The size of the margin as a fixed value.
- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the margin as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/Containing_block).
- `auto`

  - : The left margin receives a share of the unused horizontal space, as determined mainly by the layout mode that is used. If the values of `margin-left` and `margin-right` are both `auto`, the calculated space is evenly distributed. This table summarizes the different cases:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Value of {{cssxref("display")}}</th>
          <th scope="col">Value of {{cssxref("float")}}</th>
          <th scope="col">Value of {{cssxref("position")}}</th>
          <th scope="col">Computed value of <code>auto</code></th>
          <th scope="col">Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <code>inline</code>, <code>inline-block</code>,
            <code>inline-table</code>
          </th>
          <th><em>any</em></th>
          <th><code>static</code> or <code>relative</code></th>
          <td><code>0</code></td>
          <td>Inline layout mode</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><em>any</em></th>
          <th><code>static</code> or <code>relative</code></th>
          <td>
            <code>0</code>, except if both <code>margin-left</code> and
            <code>margin-right</code> are set to <code>auto</code>. In this case, it
            is set to the value centering the element inside its parent.
          </td>
          <td>Block layout mode</td>
        </tr>
        <tr>
          <th>
            <code>block</code>, <code>inline</code>, <code>inline-block</code>,
            <code>block</code>, <code>table</code>, <code>inline-table</code>,
            <code>list-item</code>, <code>table-caption</code>
          </th>
          <th><code>left</code> or <code>right</code></th>
          <th><code>static</code> or <code>relative</code></th>
          <td><code>0</code></td>
          <td>Block layout mode (floating element)</td>
        </tr>
        <tr>
          <th>
            <em>any </em><code>table-*</code><em>, except </em
            ><code>table-caption</code>
          </th>
          <th><em>any</em></th>
          <th><em>any</em></th>
          <td><code>0</code></td>
          <td>
            Internal <code>table-*</code> elements don't have margins, use
            {{ cssxref("border-spacing") }} instead
          </td>
        </tr>
        <tr>
          <th>
            <em>any, except <code>flex</code>,</em> <code>inline-flex</code
            ><em>, or </em><code>table-*</code>
          </th>
          <th><em>any</em></th>
          <th>
            <em><code>fixed</code></em> or <code>absolute</code>
          </th>
          <td>
            <code>0</code>, except if both <code>margin-left</code> and
            <code>margin-right</code> are set to <code>auto</code>. In this case, it
            is set to the value centering the border area inside the available
            <code>width</code>, if fixed.
          </td>
          <td>Absolutely positioned layout mode</td>
        </tr>
        <tr>
          <th><code>flex</code>, <code>inline-flex</code></th>
          <th><em>any</em></th>
          <th><em>any</em></th>
          <td>
            <code>0</code>, except if there is any positive horizontal free space.
            In this case, it is evenly distributed to all horizontal
            <code>auto</code> margins.
          </td>
          <td>Flexbox layout mode</td>
        </tr>
      </tbody>
    </table>

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

Percentage values for `margin-left` are relative to the container's inline size.

### CSS

```css
.example {
  margin-left: 50%;
}
```

### HTML

```html
<p>
  A large rose-tree stood near the entrance of the garden: the roses growing on
  it were white, but there were three gardeners at it, busily painting them red.
</p>
<p class="example">
  Alice thought this a very curious thing, and she went nearer to watch them,
  and just as she came up to them she heard one of them say, "Look out now,
  Five! Don't go splashing paint over me like that!"
</p>
<p>
  "I couldn't help it," said Five, in a sulky tone; "Seven jogged my elbow."
</p>
```

### Result

{{EmbedLiveSample("","","250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, and {{cssxref("margin-bottom")}} and the {{cssxref("margin")}} shorthand
- The mapped logical properties: {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}} and the shorthands {{cssxref("margin-block")}} and {{cssxref("margin-inline")}}
