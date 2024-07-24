---
title: "<samp>: The Sample Output element"
slug: Web/HTML/Element/samp
page-type: html-element
browser-compat: html.elements.samp
---

{{HTMLSidebar}}

The **`<samp>`** [HTML](/en-US/docs/Web/HTML) element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as [Courier](<https://en.wikipedia.org/wiki/Courier_(typeface)>) or Lucida Console).

{{EmbedInteractiveExample("pages/tabbed/samp.html", "tabbed-shorter")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

You can use a CSS rule to override the browser's default font face for the `<samp>` element; however, it's possible that the browser's preferences may take precedence over any CSS you specify.

The CSS to override the default font face would look like this:

```css
samp {
  font-family: "Courier";
}
```

> **Note:** If you need an element which will serve as a container for output generated by your website or app's JavaScript code, you should instead use the {{HTMLElement("output")}} element.

## Examples

### Basic example

In this simple example, a paragraph includes an example of the output of a program.

```html
<p>
  When the process is complete, the utility will output the text
  <samp>Scan complete. Found <em>N</em> results.</samp> You can then proceed to
  the next step.
</p>
```

#### Result

{{EmbedLiveSample("Basic_example", 650, 100)}}

### Sample output including user input

You can nest the {{HTMLElement("kbd")}} element within a `<samp>` block to present an example that includes text entered by the user. For example, consider this text presenting a transcript of a Linux (or macOS) console session:

#### HTML

```html
<pre>
<samp><span class="prompt">mike@interwebz:~$</span> <kbd>md5 -s "Hello world"</kbd>
MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62

<span class="prompt">mike@interwebz:~$</span> <span class="cursor">█</span></samp></pre>
```

Note the use of {{HTMLElement("span")}} to allow customization of the appearance of specific portions of the sample text such as the shell prompts and the cursor. Note also the use of `<kbd>` to represent the command the user entered at the prompt in the sample text.

#### CSS

The CSS that achieves the appearance we want is:

```css
.prompt {
  color: #b00;
}

samp > kbd {
  font-weight: bold;
}

.cursor {
  color: #00b;
}
```

This gives the prompt and cursor fairly subtle colorization and emboldens the keyboard input within the sample text.

#### Result

The resulting output is this:

{{EmbedLiveSample("Sample_output_including_user_input", 650, 120)}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related elements: {{HTMLElement("kbd")}}, {{HTMLElement("code")}}, {{HTMLElement("pre")}}
- The {{HTMLElement("output")}} element: a container for script-generated output