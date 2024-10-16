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

/* Keywords value */
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

### Emphasis mark positions

The select field is used to change the class on the `<section>` and the class updates the position of the emphasis marks.

```html hidden
<label for="position">position:</position>
<select id="position">
  <option value="auto">auto</option>
  <option value="over-right">over right</option>
  <option value="over-left">over left</option>
  <option value="under-right">under right</option>
  <option value="under-left">under left</option>
  <option value="preferred">preferred</option>
</select>
```

#### HTML

```html
<section id="setting" class="auto">
  <p class="horizontal" lang="zh">你好世界</p>
  <p class="vertical" lang="ja">世界、こんにちは。</p>
</section>
```

#### CSS

```css hidden
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
p {
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

Use the position select to choose the location of the emphasis marks. The **preferred** option uses the preferred positions highlighted it the [table above](#description).

{{EmbedLiveSample("Emphasis_mark_positions", 450, 170)}}

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

- The longhand properties {{cssxref("text-emphasis-style")}}, {{cssxref("text-emphasis-color")}}, and the corresponding shorthand property {{cssxref("text-emphasis")}}.
