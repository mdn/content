---
title: "<search>: The generic search element"
slug: Web/HTML/Element/search
page-type: html-element
browser-compat: html.elements.search
---

{{HTMLSidebar}}

The **`<search>`** [HTML](/en-US/docs/Web/HTML) element is a container representing the parts of the document or application with form controls or other content related to performing a search or filtering operation. The `<search>` element semantically identifies the purpose of the element's contents as having search or filtering capabilities. The search or filtering functionality can be for the website or application, the current web page or document, or the entire Internet or subsection thereof.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The `<search>` element is not for presenting search results. Rather, search or filtered results should be presented as part of the main content of that web page. That said, suggestions and links that are part of "quick search" functionality within the search or filtering functionality are appropriately nested within the contents of the `<search>` element as they are search features.

## Accessibility

The `<search>` element defines a [`search`](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role) landmark. This removes the need for adding `role=search` to a {{HTMLElement('form')}} element.

## Examples

### Header search form

This example demonstrates the use of `<search>` as the container for a search within a website header to perform a simple site-wide search. The `<search>` is a semantic container for the {{HTMLElement("form")}} that submits the user-entered search query to a server.

#### HTML

```html
<header>
  <h1>Movie website</h1>
  <search>
    <form action="./search/">
      <label for="movie">Find a Movie</label>
      <input type="search" id="movie" name="q" />
      <button type="submit">Search</button>
    </form>
  </search>
</header>
```

#### Result

{{EmbedLiveSample('Header search form')}}

### Web app search

This example demonstrates potential DOM content when dynamically including JavaScript search functionality in a web application. When search functionality is implemented entirely with JavaScript, if no form is submitted, neither a {{HTMLElement("form")}} element nor a submit {{HTMLElement("button")}} is required. For semantics, the `<search>` element is included to contain the search and filtering capabilities.

#### HTML

```html
<search>
  <label>
    Find and filter your query
    <input type="search" id="query" />
  </label>
  <label>
    <input type="checkbox" id="exact-only" />
    Exact matches only
  </label>

  <section>
    <h3>Results:</h3>
    <ul id="results">
      <!-- search result content -->
    </ul>
    <output id="no-results">
      <!-- no results content -->
    </output>
  </section>
</search>
```

#### Result

{{EmbedLiveSample('Web app search')}}

> **Note:** Remember that some users don't have JavaScript, and none of your users have JavaScript running until the JavaScript is successfully downloaded, parsed, and executed, ensure your users can access the content of your site with JavaScript disabled.

### Multiple searches

This example demonstrates a page with two search features. The first is a global site search located on the header. The second is a search and filter based on the page context, in our example a car search.

#### HTML

```html
<body>
  <header>
    <h1>Car rental agency</h1>
    <search title="Website">...</search>
  </header>
  <main>
    <h2>Cars available for rent</h2>
    <search title="Cars">
      <h3>Filter results</h3>
      ...
    </search>
    <article>
      <!-- search result content -->
    </article>
  </main>
</body>
```

#### Result

{{EmbedLiveSample('Multiple searches')}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>, <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content">palpable content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/form_role"><code>form</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>
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

- Other search-related elements: {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}}, {{HTMLElement("form")}}
- [ARIA: Search role](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)
