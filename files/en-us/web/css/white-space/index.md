---
title: white-space
slug: Web/CSS/white-space
page-type: css-property
browser-compat: css.properties.white-space
---

{{CSSRef}}

The **`white-space`** CSS property sets how {{Glossary("whitespace", "white space")}} inside an element is handled.

{{EmbedInteractiveExample("pages/css/white-space.html")}}

The property specifies two things:

- Whether and how white space is [collapsed](#collapsing_of_white_space).
- Whether and how lines wrap.

> **Note:** To make words break _within themselves_, use {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, or {{CSSxRef("hyphens")}} instead.

## Syntax

```css
/* Single keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;
white-space: break-spaces;

/* white-space-collapse and text-wrap shorthand values */
white-space: collapse balance;
white-space: preserve nowrap;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: revert;
white-space: revert-layer;
white-space: unset;
```

### Values

`white-space` property values can be specified as a single keyword chosen from the list of values below, or two values representing shorthand for the {{CSSxRef("white-space-collapse")}} and {{cssxref("text-wrap")}} properties.

- `normal`
  - : Sequences of white space are [collapsed](#collapsing_of_white_space). Newline characters in the source are handled the same as other white space. Lines are broken as necessary to fill line boxes.
- `nowrap`
  - : [Collapses](#collapsing_of_white_space) white space as for `normal`, but suppresses line breaks (text wrapping) within the source.
- `pre`
  - : Sequences of white space are preserved. Lines are only broken at newline characters in the source and at {{HTMLElement("br")}} elements.
- `pre-wrap`
  - : Sequences of white space are preserved. Lines are broken at newline characters, at {{HTMLElement("br")}}, and as necessary to fill line boxes.
- `pre-line`
  - : Sequences of white space are [collapsed](#collapsing_of_white_space). Lines are broken at newline characters, at {{HTMLElement("br")}}, and as necessary to fill line boxes.
- `break-spaces`

  - : The behavior is identical to that of `pre-wrap`, except that:

    - Any sequence of preserved white space always takes up space, including at the end of the line.
    - A line-breaking opportunity exists after every preserved white space character, including between white space characters.
    - Such preserved spaces take up space and do not hang, thus affecting the box's intrinsic sizes (`min-content` size and `max-content` size).

The following table summarizes the behavior of the various `white-space` keyword values:

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>New lines</th>
      <th>Spaces and tabs</th>
      <th>Text wrapping</th>
      <th>End-of-line spaces</th>
      <th>End-of-line other space separators</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>normal</code></th>
      <td>Collapse</td>
      <td>Collapse</td>
      <td>Wrap</td>
      <td>Remove</td>
      <td>Hang</td>
    </tr>
    <tr>
      <th><code>nowrap</code></th>
      <td>Collapse</td>
      <td>Collapse</td>
      <td>No wrap</td>
      <td>Remove</td>
      <td>Hang</td>
    </tr>
    <tr>
      <th><code>pre</code></th>
      <td>Preserve</td>
      <td>Preserve</td>
      <td>No wrap</td>
      <td>Preserve</td>
      <td>No wrap</td>
    </tr>
    <tr>
      <th><code>pre-wrap</code></th>
      <td>Preserve</td>
      <td>Preserve</td>
      <td>Wrap</td>
      <td>Hang</td>
      <td>Hang</td>
    </tr>
    <tr>
      <th><code>pre-line</code></th>
      <td>Preserve</td>
      <td>Collapse</td>
      <td>Wrap</td>
      <td>Remove</td>
      <td>Hang</td>
    </tr>
    <tr>
      <th><code>break-spaces</code></th>
      <td>Preserve</td>
      <td>Preserve</td>
      <td>Wrap</td>
      <td>Wrap</td>
      <td>Wrap</td>
    </tr>
  </tbody>
</table>

> **Note:** There is a distinction made between **spaces** and **other space separators**. These are defined as follows:
>
> - spaces
>   - : Spaces (U+0020), tabs (U+0009), and segment breaks (such as newlines).
> - other space separators
>   - : All other space separators defined in Unicode, other than those already defined as spaces.
>
> Where white space is said to _hang_, this can affect the size of the box when measured for intrinsic sizing.

## Collapsing of white space

The {{cssxref("white-space-collapse")}} property page explains the [browser algorithm for collapsing white space](/en-US/docs/Web/CSS/white-space-collapse#collapsing_of_white_space).

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic example

```css
code {
  white-space: pre;
}
```

### Line breaks inside \<pre> elements

```css
pre {
  white-space: pre-wrap;
}
```

### In action

```html hidden
<div id="css-code" class="box">
  p { white-space:
  <select>
    <option>normal</option>
    <option>nowrap</option>
    <option>pre</option>
    <option>pre-wrap</option>
    <option>pre-line</option>
    <option>break-spaces</option>
    <option>preserve nowrap</option>
  </select>
  }
</div>
<div id="results" class="box">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
```

```css hidden
.box {
  width: 300px;
  padding: 16px;
}

#css-code {
  background-color: rgb(220, 220, 220);
  font-size: 16px;
  font-family: monospace;
}

#css-code select {
  font-family: inherit;
}

#results {
  background-color: rgb(230, 230, 230);
  overflow-x: scroll;
  white-space: normal;
  font-size: 14px;
}
```

```js hidden
const select = document.querySelector("#css-code select");
const results = document.querySelector("#results p");
select.addEventListener("change", (e) => {
  results.setAttribute("style", `white-space: ${e.target.value}`);
});
```

{{EmbedLiveSample("In_action", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that define how words break _within themselves_: {{CSSxRef("overflow-wrap")}}, {{CSSxRef("word-break")}}, {{CSSxRef("hyphens")}}
