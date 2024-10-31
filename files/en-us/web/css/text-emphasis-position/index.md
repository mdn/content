---
title: text-emphasis-position
slug: Web/CSS/text-emphasis-position
page-type: css-property
browser-compat: css.properties.text-emphasis-position
---

{{CSSRef}}

The **`text-emphasis-position`** [CSS](/en-US/docs/Web/CSS) property sets where emphasis marks are drawn. Similar to the text rendered by the [`<ruby>`](/en-US/docs/Web/HTML/Element/ruby) HTML element, if there isn't enough room for emphasis marks, the line height is increased.

{{EmbedInteractiveExample("pages/css/text-emphasis-position.html")}}

## Syntax

```css
/* Initial value */
text-emphasis-position: auto;

/* Keyword values */
text-emphasis-position: over;
text-emphasis-position: under;

text-emphasis-position: over right;
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* Global values */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### Values

The property accepts one or two values:

- If only one value is provided, it can be `auto`, `over`, or `under`. When only `over` or `under` is used, `right` is assumed as the default position.
- If two values are provided, they must include one of `over` or `under`and one of `right` or `left`. Their order does not matter.

The values include:

- `auto`
  - : Draws marks over the text in horizontal writing mode and to the right of the text in vertical writing mode.
- `over`
  - : Draws marks over the text in horizontal writing mode.
- `under`
  - : Draws marks under the text in horizontal writing mode.
- `right`
  - : Draws marks to the right of the text in vertical writing mode.
- `left`
  - : Draws marks to the left of the text in vertical writing mode.

## Description

The preferred position of emphasis marks depends on the language. In Japanese for example, the preferred position is `over right`. In Chinese, on the other hand, the preferred position is `under right`. The informative table below summarizes the preferred emphasis mark positions for Chinese, Mongolian and Japanese:

<table>
  <caption>
    Preferred emphasis mark and ruby position
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">Language</th>
      <th colspan="2" scope="col">Preferred position</th>
      <th colspan="2" rowspan="2" scope="col">Illustration</th>
    </tr>
    <tr>
      <th>Horizontal</th>
      <th>Vertical</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Japanese</td>
      <td rowspan="3">over</td>
      <td rowspan="3">right</td>
      <td rowspan="3">
        <img
          alt="Emphasis marks appear over each emphasized character in horizontal Japanese text."
          src="text-emphasis-ja.png"
          title="Emphasis (shown in blue for clarity) applied above a fragment of Japanese text"
        />
      </td>
      <td rowspan="4">
        <img
          alt="Emphasis marks appear on the right of each emphasized character in vertical Japanese text."
          src="text-emphasis-v.gif"
          title="Emphasis applied on the right of a fragment of Japanese text"
        />
      </td>
    </tr>
    <tr>
      <td>Korean</td>
    </tr>
    <tr>
      <td>Mongolian</td>
    </tr>
    <tr>
      <td>Chinese</td>
      <td>under</td>
      <td>right</td>
      <td>
        <img
          alt="Emphasis marks appear below each emphasized character in horizontal Simplified Chinese text."
          src="text-emphasis-zh.gif"
          title="Emphasis (shown in blue for clarity) applied below a fragment of Chinese text"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> The `text-emphasis-position` cannot be set, and therefore are not reset either, using the {{cssxref("text-emphasis")}} shorthand property.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adding emphasis mark positions

Use the drop down menu to change the position of the emphasis marks. This will change the class on the `<section>` element, which in turn, will update the position of the emphasis marks on the text.

#### HTML

```html hidden
<p class="unsupported">The <code>auto</code> value is not supported in your browser.</p>
<label for="position">Emphasis position:</position>
<select id="position">
  <option value="auto">auto</option>
  <option value="over-right">over right</option>
  <option value="over-left">over left</option>
  <option value="under-right">under right</option>
  <option value="under-left">under left</option>
  <option value="preferred">preferred</option>
</select>
```

```html
<section id="setting" class="auto">
  <p class="horizontal" lang="zh">你好世界</p>
  <!-- Hello World in Chinese -->
  <p class="vertical" lang="ja">世界、こんにちは。</p>
  <!-- Hello World in Japanese -->
</section>
```

#### CSS

```css hidden
.unsupported {
  color: red;
}
@supports (text-emphasis-position: auto) {
  .unsupported {
    display: none;
  }
}
.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
section {
  display: flex;
  justify-content: space-around;
}
```

```css
section p {
  text-emphasis: filled circle tomato;
  text-emphasis-position: auto;
}
.over-right p,
.preferred p [lang="ja"] {
  text-emphasis-position: over right;
}
.over-left p {
  text-emphasis-position: over left;
}
.under-right p,
.preferred p [lang="zh"] {
  text-emphasis-position: under right;
}
.under-left p {
  text-emphasis-position: under left;
}
.preferred p [lang="ja"] {
}
```

```js hidden
const position = document.querySelector("#position");
const setting = document.querySelector("#setting");
const updateClass = () => {
  const currentClass = setting.classList;
  setting.classList.replace(currentClass, position.value);
};
position.addEventListener("change", updateClass);
```

#### Result

Use the "Emphasis position" drop down to choose the location of the emphasis marks. The `preferred` option in the drop down uses the preferred positions, as explained in the [Description](#description) section.

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### Preferring ruby over emphasis marks

Some editors prefer to hide emphasis marks when they conflict with ruby. In HTML, this can be done with the following style rule:

```css
ruby {
  text-emphasis: none;
}
```

### Preferring emphasis marks over ruby

Some other editors prefer to hide ruby when they conflict with emphasis marks. In HTML, this can be done with the following pattern:

```css
em {
  text-emphasis: dot; /* Set text-emphasis for <em> elements */
}

em rt {
  display: none; /* Hide ruby inside <em> elements */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("text-underline-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis")}} shorthand property
- {{cssxref("writing-mode")}}
