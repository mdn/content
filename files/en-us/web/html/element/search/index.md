---
title: "<search>: The Generic search element"
slug: Web/HTML/Element/search
page-type: html-element
browser-compat: html.elements.search
---

{{HTMLSidebar}}

The **`<search>`** [HTML](/en-US/docs/Web/HTML) element represents a part that contains a set of form controls or other content related to performing a search or filtering operation. This could be a search of the website or application, a way of searching or filtering search results on the current web page, or a global or internet-wide search function.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

It's not appropriate to use the `<search>` element just for presenting search results, though suggestions and links as part of "quick search" results can be included as part of a search feature. Rather, a returned web page of search results would instead be expected to be presented as part of the main content of that web page.

## Examples

### Header search form

Include a search form within a website header to perform a simple site-wide search.

```html
<header>
  <h1>Movies website</h1>
  <search>
    <form action="./search/">
      <label for="movie">Find a Movie</label>
      <input type="search" id="movie" name="q">
      <button type="submit">Search</button>
    </form>
  </search>
</header>
```

### Result

{{EmbedLiveSample('Header search form')}}

### Web app search

JavaScript search functionality in a web application. No form element to perform a server-side submission, but for semantics a search element represents search and filtering capabilities.

```html
<search>
  <label>
    Find and filter your query
    <input type="search" id="query">
  </label>
  <label>
    <input type="checkbox" id="exact-only">
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

### Result

{{EmbedLiveSample('Web app search')}}

### Multiple searches

A page with two search features. The first is a global site search located on the header. The second is a search and filter based on the page context, in our example a car search.

```html
<body>
  <header>
    <h1>Car rental agency</h1>
    <search title="Website">
      ...
    </search>
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

### Result

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
      <td>{{no_tag_omission}}</td>
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
