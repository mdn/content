---
title: "<title>: The Document Title element"
slug: Web/HTML/Element/title
page-type: html-element
browser-compat: html.elements.title
---

{{HTMLSidebar}}

The **`<title>`** [HTML](/en-US/docs/Web/HTML) element defines the document's title that is shown in a {{glossary("Browser", "browser")}}'s title bar or a page's tab. It only contains text; tags within the element are ignored.

```html
<title>Grandma's Heavy Metal Festival Journal</title>
```

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The `<title>` element is always used within a page's {{HTMLElement("head")}} block.

### Page titles and SEO

The contents of a page title can have significant implications for search engine optimization ({{glossary("SEO")}}). In general, a longer, descriptive title performs better than short or generic titles. The content of the title is one of the components used by search engine algorithms to decide the order in which to list pages in search results. Also, the title is the initial "hook" by which you grab the attention of readers glancing at the search results page.

A few guidelines and tips for composing good titles:

- Avoid one- or two-word titles. Use a descriptive phrase, or a term-definition pairing for glossary or reference-style pages.
- Search engines typically display about the first 55–60 characters of a page title. Text beyond that may be lost, so try not to have titles longer than that. If you must use a longer title, make sure the important parts come earlier and that nothing critical is in the part of the title that is likely to be dropped.
- Don't use "keyword blobs." If your title is just a list of words, algorithms often reduce your page's position in the search results.
- Try to make sure your titles are as unique as possible within your own site. Duplicate—or near-duplicate—titles can contribute to inaccurate search results.

## Accessibility

It is important to provide an accurate and concise title to describe the page's purpose.

A common navigation technique for users of assistive technology is to read the page title and infer the content the page contains. This is because navigating into a page to determine its content can be a time-consuming and potentially confusing process. Titles should be unique to every page of a website, ideally surfacing the primary purpose of the page first, followed by the name of the website. Following this pattern will help ensure that the primary purpose of the page is announced by a screen reader first. This provides a far better experience than having to listen to the name of a website before the unique page title, for every page a user navigates to in the same website.

### Examples

```html
<title>Menu - Blue House Chinese Food - FoodYum: Online takeout today!</title>
```

If a form submission contains errors and the submission re-renders the current page, the title can be used to help make users aware of any errors with their submission. For instance, update the page `title` value to reflect significant page state changes (such as form validation problems).

```html
<title>
  2 errors - Your order - Sea Food Store - Food: Online takeout today!
</title>
```

> [!NOTE]
> Presently, dynamically updating a page's title will not be automatically announced by screen readers. If you are going to update the page title to reflect significant changes to a page's state, then the use of [ARIA Live Regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) may be necessary, as well.

- [MDN Understanding WCAG, Guideline 2.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.2 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

## Examples

```html
<title>Awesome interesting stuff</title>
```

This example establishes a page whose title (as displayed at the top of the window or in the window's tab) as "Awesome interesting stuff".

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
        <a href="/en-US/docs/Web/HTML/Content_categories#metadata_content"
          >Metadata content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        Text that is not inter-element {{glossary("whitespace")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        Both opening and closing tags are required. Note that leaving off
        <code>&#x3C;/title></code> should cause the browser to ignore the rest
        of the page.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        A {{ HTMLElement("head") }} element that contains no other
        <code>&lt;title&gt;</code> element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted.</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTitleElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG [`<title>`](/en-US/docs/Web/SVG/Element/title) element
