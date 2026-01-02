---
title: "<hr>: The Thematic Break (Horizontal Rule) element"
slug: Web/HTML/Reference/Elements/hr
page-type: html-element
browser-compat: html.elements.hr
sidebar: htmlsidebar
---

The **`<hr>`** [HTML](/en-US/docs/Web/HTML) element represents a thematic break between elements: for example, a change of scene in a story, or a shift of topic within a section.

{{InteractiveExample("HTML Demo: &lt;hr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr />

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```

```css interactive-example
hr {
  border: none;
  border-top: 3px double #333333;
  color: #333333;
  overflow: visible;
  text-align: center;
  height: 5px;
}

hr::after {
  background: white;
  content: "§";
  padding: 0 4px;
  position: relative;
  top: -13px;
}
```

Historically, this has been presented as a horizontal rule or line. While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS.

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `align` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the alignment of the rule on the page. If no value is specified, the default value is `left`.
- `color` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the color of the rule through color name or hexadecimal value.
- `noshade` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the rule to have no shading.
- `size` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the height, in pixels, of the rule.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Sets the length of the rule on the page through a pixel or percentage value.

## Example

### Thematic break between paragraphs

The following example adds a thematic break between paragraph-level elements.

#### HTML

```html
<p>
  This is the first paragraph of text. This is the first paragraph of text. This
  is the first paragraph of text. This is the first paragraph of text.
</p>
<hr />
<p>
  This is the second paragraph of text. This is the second paragraph of text.
  This is the second paragraph of text. This is the second paragraph of text.
</p>
```

#### Result

{{EmbedLiveSample("Thematic break between paragraphs")}}

### Thematic break between list items

The `<hr>` tag can be placed within a list item for visual separation, to create a separator between sections of a list.

There are three primary types of lists in HTML, all of which use `<li>` elements for the individual list items:

* Unordered List (`<ul>`): Used for grouping items where the order does not matter. Items are typically displayed with bullet points.
* Ordered List (`<ol>`): Used for items where the order is meaningful (e.g., steps in a recipe). Items are typically displayed with a numerical or alphabetical marker.
* Description List (`<dl>`): Used for term/description pairs, using `<dt>` for the term and `<dd>` for the description. 

#### HTML

```html
<h2>My To-Do List</h2>
<ul>
  <li>Task 1</li>
  <li>Task 2</li>
  <li>Task 3</li>
  <li><hr></li> <!-- Thematic break -->
  <li>Completed Task A</li>
  <li>Completed Task B</li>
</ul>

<h2>Steps in a Recipe</h2>
<ol>
  <li>Mix dry ingredients thoroughly.</li>
  <li>Pour in wet ingredients.</li>
  <li><hr style="background-color: blue;"></li> <!-- Thematic break with inline style -->
  <li>Mix for 10 minutes.</li>
  <li>Bake for one hour at 300 degrees.</li>
</ol>
```

#### Result

{{EmbedLiveSample("Thematic break between list items")}}

### Thematic break between select options

The `<hr>` element is allowed inside a `<select>` element to create a visual separator between `<option>` elements.

#### HTML

```html
<select>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <hr>
  <option value="option3">Option 3</option>
  <option value="option4">Option 4</option>
</select>
```

#### Result

{{EmbedLiveSample("Thematic break between select options")}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        <ul>
          <li>Any element that accepts <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content">flow content</a></li>
          <li><a href="/en-US/docs/Web/HTML/Reference/Elements/select"><code>&lt;select></code></a> element</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> or <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement('p')}}
- [`<hr>` in `<select>`](/en-US/docs/Web/HTML/Reference/Elements/select#select_with_grouping_options)
