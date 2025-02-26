---
title: margin-right
slug: Web/CSS/margin-right
page-type: css-property
browser-compat: css.properties.margin-right
---

{{CSSRef}}

The **`margin-right`** [CSS](/en-US/docs/Web/CSS) property sets the [margin area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#margin_area) on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.

{{EmbedInteractiveExample("pages/css/margin-right.html")}}

The vertical margins of two adjacent boxes may fuse. This is called [_margin collapsing_](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing).

## Syntax

```css
/* <length> values */
margin-right: 20px; /* An absolute length */
margin-right: 1em; /* relative to the text size */
margin-right: 5%; /* relative to the nearest block container's width */
margin-right: anchor-size(self-block);
margin-right: calc(anchor-size(--myAnchor height, 20px) / 4);

/* Keyword values */
margin-right: auto;

/* Global values */
margin-right: inherit;
margin-right: initial;
margin-right: revert;
margin-right: revert-layer;
margin-right: unset;
```

The `margin-right` property is specified as the keyword `auto`, or a `<length>`, or a `<percentage>`. Its value can be positive, zero, or negative.

### Values

- {{cssxref("&lt;length&gt;")}}

  - : The size of the margin as a fixed value.

    - For _anchor-positioned elements_, the {{cssxref("anchor-size()")}} function resolves to a {{cssxref("&lt;length&gt;")}} value relative to the associated _anchor element_'s width or height (see [Setting element margin based on anchor size](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#setting_element_margin_based_on_anchor_size)).

- {{cssxref("&lt;percentage&gt;")}}
  - : The size of the margin as a percentage, relative to the inline size (_width_ in a horizontal language, defined by {{cssxref("writing-mode")}}) of the [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block).
- `auto`

  - : The right margin receives a share of the unused horizontal space, as determined mainly by the layout mode that is used. If the values of `margin-left` and `margin-right` are both `auto`, the calculated space is evenly distributed. This table summarizes the different cases:

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

### Setting right margin using pixels and percentages

```css
.content {
  margin-right: 5%;
}
.side-box {
  margin-right: 10px;
}
.logo {
  margin-right: -5px;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("margin-top")}}, {{cssxref("margin-bottom")}}, and {{cssxref("margin-left")}}
- {{cssxref("margin")}} shorthand
- {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}}, {{cssxref("margin-inline-start")}}, and {{cssxref("margin-inline-end")}}
- {{cssxref("margin-block")}} and {{cssxref("margin-inline")}} shorthands
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
