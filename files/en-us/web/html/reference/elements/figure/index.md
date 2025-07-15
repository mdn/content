---
title: "<figure>: The Figure with Optional Caption element"
slug: Web/HTML/Reference/Elements/figure
page-type: html-element
browser-compat: html.elements.figure
sidebar: htmlsidebar
---

The **`<figure>`** [HTML](/en-US/docs/Web/HTML) element represents self-contained content, potentially with an optional caption, which is specified using the {{HTMLElement("figcaption")}} element. The figure, its caption, and its contents are referenced as a single unit.

{{InteractiveExample("HTML Demo: &lt;figure&gt;", "tabbed-shorter")}}

```html interactive-example
<figure>
  <img
    src="/shared-assets/images/examples/elephant.jpg"
    alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

```css interactive-example
figure {
  border: thin #c0c0c0 solid;
  display: flex;
  flex-flow: column;
  padding: 5px;
  max-width: 220px;
  margin: auto;
}

img {
  max-width: 220px;
  max-height: 150px;
}

figcaption {
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
  padding: 3px;
  text-align: center;
}
```

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

## Usage notes

- Usually a `<figure>` is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.
- A caption can be associated with the `<figure>` element by inserting a {{HTMLElement("figcaption")}} inside it (as the first or the last child). The first `<figcaption>` element found in the figure is presented as the figure's caption.
- The `<figcaption>` provides the {{glossary("accessible name")}} for the parent `<figure>`.

## Examples

### Images

```html
<!-- Just an image -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
</figure>

<!-- Image with a caption -->
<figure>
  <img src="favicon-192x192.png" alt="The beautiful MDN logo." />
  <figcaption>MDN Logo</figcaption>
</figure>
```

#### Result

{{EmbedLiveSample("Images", "100%", 375)}}

### Code snippets

```html
<figure>
  <figcaption>Get browser details using <code>navigator</code>.</figcaption>
  <pre>
function NavigatorExample() {
  let txt = `Browser CodeName: ${navigator.appCodeName};\n`;
  txt += `Browser Name: ${navigator.appName};\n`;
  txt += `Browser Version: ${navigator.appVersion};\n`;
  txt += `Cookies Enabled: ${navigator.cookieEnabled};\n`;
  txt += `Platform: ${navigator.platform};\n`;
  txt += `User-agent header: ${navigator.userAgent};`;
  console.log("NavigatorExample", txt);
}
  </pre>
</figure>
```

#### Result

{{EmbedLiveSample("Code_snippets", "100%", 250)}}

### Quotations

```html
<figure>
  <figcaption><b>Edsger Dijkstra:</b></figcaption>
  <blockquote>
    If debugging is the process of removing software bugs, then programming must
    be the process of putting them in.
  </blockquote>
</figure>
```

#### Result

{{EmbedLiveSample('Quotations')}}

### Poems

```html
<figure>
  <p>
    Bid me discourse, I will enchant thine ear,<br />
    Or like a fairy trip upon the green,<br />
    Or, like a nymph, with long dishevelled hair,<br />
    Dance on the sands, and yet no footing seen:<br />
    Love is a spirit all compact of fire,<br />
    Not gross to sink, but light, and will aspire.<br />
  </p>
  <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
</figure>
```

#### Result

{{EmbedLiveSample("Poems", "100%", 250)}}

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
        >,
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >palpable content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        A {{HTMLElement("figcaption")}} element, followed by
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        >; or flow content followed by a
        {{HTMLElement("figcaption")}} element; or flow content.
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
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role"
          >figure</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        With no
        <a href="/en-US/docs/Web/HTML/Reference/Elements/figcaption">figcaption</a> descendant:
        <a href="https://w3c.github.io/html-aria/#dfn-any-role">any</a>,
        otherwise no permitted roles
      </td>
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

- The {{HTMLElement("figcaption")}} element.
