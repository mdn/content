---
title: page-orientation
slug: Web/CSS/@page/page-orientation
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.page.page-orientation
---

{{CSSRef}}

The **`page-orientation`** [CSS](/en-US/docs/Web/CSS) descriptor for the {{cssxref("@page")}} at-rule controls the rotation of a printed page. It handles the flow of content across pages when the orientation of a page is changed. This behavior differs from the [`size`](/en-US/docs/Web/CSS/@page/size) descriptor in that a user can define the direction in which to rotate the page.

This descriptor helps with the layout and orientation of printed documents, especially when documents are printed double-sided. A user can specify how the pages will be rotated when printed. This is particularly useful to lay out content such as tables, which may be wider than the rest of the content, in a different orientation.

> **Note:** [Margin boxes](/en-US/docs/Web/CSS/@page#margin_at-rules) and other positional elements have no special interaction with this descriptor. Margins are laid out as normal in the unrotated page, then rotated along with everything else.

## Syntax

```css
/* Displays the print content in an upright position */
@page {
  page-orientation: upright;
}

/* Displays the print content rotated counter-clockwise */
@page {
  page-orientation: rotate-left;
}

/* Displays the print content rotated counter-clockwise */
@page {
  page-orientation: rotate-right;
}
```

## Values

- `upright`
  - : No orientation is applied and the page is laid out and formatted as normal.
- `rotate-left`
  - : After a page is laid out, the page must be displayed rotated a quarter turn to the left (counter-clockwise).
- `rotate-right`
  - : After the page is laid out, the page must be displayed rotated a quarter turn to the right (clockwise).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Rotating printed pages

This example shows how the contents of a print document can be rotated to suit the page content and the page position.

```html hidden
<fieldset id="printStyle">
  <legend>
    Click Print. The page will be laid out in the defined orientation.
  </legend>
  <button id="print">Print</button>
</fieldset>
<div id="print-area">
  <section class="upright">
    <h2>Section in Portrait/Upright</h2>
    <p>This section will be printed in portrait and upright with:</p>
    <pre>
.upright {
  size: portrait;
  page-orientation: upright;
}
    </pre>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu
      convallis ligula, tincidunt malesuada tortor. Ut ac turpis erat. Mauris
      consequat, leo rhoncus venenatis elementum, sem nisl venenatis justo, non
      mattis diam massa vitae dolor. Aenean ac dolor et leo laoreet tincidunt.
      Suspendisse tempus risus nibh, a feugiat mauris pharetra a. Nulla mi dui,
      scelerisque vitae sollicitudin nec, placerat eget purus. Vivamus enim
      elit, scelerisque id venenatis eu, sodales vel leo. Quisque bibendum
      feugiat diam, ut feugiat urna suscipit et. Nulla lacinia metus a nisi
      volutpat interdum. Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum vitae elit vel orci malesuada bibendum ut vitae enim. Ut
      ultrices elit nec vestibulum blandit. In in eleifend dui. Nam nec aliquet
      nunc. Praesent convallis ipsum sed fermentum scelerisque.
    </p>
    <p>
      Praesent posuere, neque non fringilla ultricies, purus mi ullamcorper
      velit, vitae egestas nisl eros at ex. Nulla sed viverra libero. Praesent
      sed placerat magna, iaculis commodo lectus. Ut gravida ligula sed purus
      molestie, in accumsan est eleifend. Etiam consectetur nulla pretium
      blandit iaculis. Nunc semper libero ut mauris faucibus placerat. Cras ac
      justo ac est laoreet sollicitudin. Aliquam vel sapien ut sapien vestibulum
      dictum.
    </p>
  </section>
  <section class="left">
    <h2>Section in Landscape/Left</h2>
    <p>This section will be printed in landscape and rotated left with:</p>
    <pre>
.left {
  size: landscape;
  page-orientation: rotate-left;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100m</th>
          <th>1500m</th>
          <th>Hurdles</th>
          <th>Long Jump</th>
          <th>High Jump</th>
          <th>Javelin</th>
          <th>Discus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54m</td>
          <td>1.95m</td>
          <td>56.65m</td>
          <td>47.63m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16m</td>
          <td>1.96m</td>
          <td>59.03m</td>
          <td>45.72m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04m</td>
          <td>2.01m</td>
          <td>62.58m</td>
          <td>46.83m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96m</td>
          <td>2.02m</td>
          <td>63.87m</td>
          <td>47.73m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66m</td>
          <td>1.97m</td>
          <td>56.43m</td>
          <td>43.87m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87m</td>
          <td>1.95m</td>
          <td>67.03m</td>
          <td>42.73m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34m</td>
          <td>1.94m</td>
          <td>62.84m</td>
          <td>46.72m</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="right">
    <h2>Section in Landscape/Right</h2>
    <p>This section will be printed in landscape and rotated right with:</p>
    <pre>
.right {
  size: landscape;
  page-orientation: rotate-right;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100m</th>
          <th>1500m</th>
          <th>Hurdles</th>
          <th>Long Jump</th>
          <th>High Jump</th>
          <th>Javelin</th>
          <th>Discus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54m</td>
          <td>1.95m</td>
          <td>56.65m</td>
          <td>47.63m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16m</td>
          <td>1.96m</td>
          <td>59.03m</td>
          <td>45.72m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04m</td>
          <td>2.01m</td>
          <td>62.58m</td>
          <td>46.83m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96m</td>
          <td>2.02m</td>
          <td>63.87m</td>
          <td>47.73m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66m</td>
          <td>1.97m</td>
          <td>56.43m</td>
          <td>43.87m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87m</td>
          <td>1.95m</td>
          <td>67.03m</td>
          <td>42.73m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34m</td>
          <td>1.94m</td>
          <td>62.84m</td>
          <td>46.72m</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
```

#### CSS

In this first part of the CSS code, [named pages](/en-US/docs/Web/CSS/@page#named_pages) are set up to define the direction in which to rotate the content.

```css
@page upright {
  size: portrait;
  page-orientation: upright;
}

@page left {
  size: landscape;
  page-orientation: rotate-left;
}

@page right {
  size: landscape;
  page-orientation: rotate-right;
}
```

```css hidden
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
p {
  max-width: 60ch;
}
@media print {
  fieldset {
    display: none;
  }
  section {
    font-family: Roboto;
    font-size: 1.5rem;
  }
}
```

The following second part of the CSS code declares a named page rule defined above for the selectors, such as `<section class="left">…</section>`.

```css
@media print {
  .upright {
    page: upright;
  }
  .left {
    page: left;
  }
  .right {
    page: right;
  }
}
```

```js hidden
const printButton = document.querySelector("#print");
printButton.addEventListener("click", () => {
  window.print();
});
```

### Result

Click the print button to see the pages rotated.

{{ EmbedLiveSample('Rotating_printed_pages', '100%', 520) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
