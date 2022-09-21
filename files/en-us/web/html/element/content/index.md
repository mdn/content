---
title: '<content>: The Shadow DOM Content Placeholder element'
slug: Web/HTML/Element/content
tags:
  - Content
  - DOM
  - Deprecated
  - Element
  - HTML
  - HTML Web Components
  - Placeholder
  - Reference
  - Web
  - Web Components
  - shadow dom
  - Non-standard
browser-compat: html.elements.content
---

{{Deprecated_Header}}{{Non-standard_header}}

The **`<content>`** [HTML](/en-US/docs/Web/HTML) element—an obsolete part of the [Web Components](/en-US/docs/Web/Web_Components) suite of technologies—was used inside of [Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM) as an {{glossary("insertion point")}}, and wasn't meant to be used in ordinary HTML. It has now been replaced by the {{HTMLElement("slot")}} element, which creates a point in the DOM at which a shadow DOM can be inserted.

> **Note:** Though present in early draft of the specifications and implemented in several browsers, this element has been removed in later versions of the spec, and should not be used. It is documented here to assist in adapting code written during the time it was included in the spec to work with newer versions of the specification.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#transparent_content_model"
          >Transparent content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parent elements</th>
      <td>Any element that accepts flow content.</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLContentElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `select`
  - : A comma-separated list of selectors. These have the same syntax as CSS selectors. They select the content to insert in place of the `<content>` element.

## Example

Here is a simple example of using the `<content>` element. It is an HTML file with everything needed in it.

> **Note:** For this code to work, the browser you display it in must support Web Components. See [Enabling Web Components in Firefox](/en-US/docs/Web/Web_Components#enabling_web_components_in_firefox).

```html
<html lang="en">
  <head></head>
  <body>
    <!-- The original content accessed by <content> -->
    <div>
      <h4>My Content Heading</h4>
      <p>My content text</p>
    </div>

    <script>
      // Get the <div> above.
      const myContent = document.querySelector("div");

      // Create a shadow DOM on the <div>
      const shadowroot = myContent.createShadowRoot();

      // Insert into the shadow DOM a new heading and
      // part of the original content: the <p> tag.
      shadowroot.innerHTML =
        '<h2>Inserted Heading</h2> <content select="p"></content>';
    </script>
  </body>
</html>
```

If you display this in a web browser it should look like the following.

![content example](content-example.png)

## Specifications

This element is no longer defined by any specifications.

## Browser compatibility

{{Compat}}

## See also

- [Web Components](/en-US/docs/Web/Web_Components)
- {{HTMLElement("shadow")}}, {{HTMLElement("slot")}}, {{HTMLElement("template")}}, {{HTMLElement("element")}}

{{HTMLRef}}
