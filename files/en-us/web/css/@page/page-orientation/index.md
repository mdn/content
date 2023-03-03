---
title: page-orientation
slug: Web/CSS/@page/page-orientation
page-type: css-at-rule-descriptor
tags:
  - "@page"
  - At-rule descriptor
  - CSS
  - CSS Property
  - NeedsBrowserCompatibility
  - Reference
  - Web
browser-compat: css.at-rules.page.page-orientation
---

{{CSSRef}}

The **`page-orientation`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) descriptor, {{cssxref("@page")}} at-rule, the rotation of a page. This differs from the [`size`](/en-US/docs/Web/CSS/@page/size) descriptor in that the user can define which direction the content is rotated.

Size may either be defined with a "scalable" keyword (in this case the page will fill the available dimensions) or with absolute dimensions.

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
  - : default, blah blah blah.
- `rotate-left`
  - : anti-clockwise, blah blah blah.
- `rotate-right`
  - : clockwise, blah blah blah.

## Formal syntax

{{csssyntax}}

## Examples

### Example of rotating printed pages

```html hidden
<fieldset id="printStyle">
  <legend>
    Click print and your page will print in landscape and portrait
  </legend>
  <button id="print">Print</button>
</fieldset>
<div id="print-area">
  <section class="upright">
    <h2>Section in Portrait/Upright</h2>
    <p>This section will be printed in Portrait and upright with:</p>
    <pre>
.upright{
  size: a4 portrait;
  page-orientation: upright;
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
  <section class="left">
    <h2>Section in Landscape/Left</h2>
    <p>This section will be printed in Landscape and rotated left with:</p>
    <pre>
.left{
  size: a4 landscape;
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
    <p>
      This section will be printed in Landscape and is using a named page with:
    </p>
    <pre>
.right{
  size: a4 landscape;
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

```css hidden

```

```css
@page upright {
  page-orientation: upright;
}

@page left {
  page-orientation: rotate-left;
}

@page right {
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

{{ EmbedLiveSample('Example_of_rotating_printed_pages', '100%', 520) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
