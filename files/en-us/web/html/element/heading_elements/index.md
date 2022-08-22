---
title: '<h1>–<h6>: The HTML Section Heading elements'
slug: Web/HTML/Element/Heading_Elements
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
  - Web
browser-compat: html.elements.h1
---

{{HTMLRef}}

The **`<h1>`** to **`<h6>`** [HTML](/en-US/docs/Web/HTML) elements represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest.

{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, heading content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >; don't use a heading element as a child of the
        {{HTMLElement("hgroup")}} element — it is now deprecated.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/heading_role"
          >heading</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("tab")}}, {{ARIARole("presentation")}} or
        {{ARIARole("none")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLHeadingElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

These elements only include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Note:** The `align` attribute is obsolete; don't use it.

## Usage notes

- Heading information can be used by user agents to construct a table of contents for a document automatically.
- Avoid using heading elements to resize text. Instead, use the {{glossary("CSS")}} {{cssxref("font-size")}} property.
- Avoid skipping heading levels: always start from `<h1>`, followed by `<h2>` and so on.
- Use only one `<h1>` per page or view. It should concisely describe the overall purpose of the content.

### Multiple `<h1>` elements on one page

Using more than one `<h1>` is allowed by the HTML specification, but is not considered a best practice. Using only one `<h1>` is beneficial for screen reader users.

The HTML specification includes the concept of an _outline_ formed by the use of {{htmlelement("section")}} elements.
If this were implemented it would enable the use of multiple `<h1>` elements, giving user agents—including screen readers—a way to understand that an `<h1>` nested inside a defined section is a subheading. This functionality has never been implemented; therefore it is important to use your headings to describe the outline of your document.

The following articles give more information about the status of outlines:

- [Computer says no to the HTML5 outline](https://html5doctor.com/computer-says-no-to-html5-document-outline/)
- [A decade + a year of heading backwards](https://html5accessibility.com/stuff/2021/03/21/a-decade-a-year-of-heading-backwards/)

## Examples

### All headings

The following code shows all the heading levels, in use.

```html
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

Here is the result of this code:

{{ EmbedLiveSample('All_headings', '280', '300', '') }}

### Example page

The following code shows a few headings with some content under them.

```html
<h1>Heading elements</h1>
<h2>Summary</h2>
<p>Some text here…</p>

<h2>Examples</h2>
<h3>Example 1</h3>
<p>Some text here…</p>

<h3>Example 2</h3>
<p>Some text here…</p>

<h2>See also</h2>
<p>Some text here…</p>
```

Here is the result of this code:

{{ EmbedLiveSample('Example_page', '280', '480', '') }}

## Accessibility concerns

### Navigation

A common navigation technique for users of screen reading software is jumping from heading to quickly determine the content of the page. Because of this, it is important to not skip one or more heading levels. Doing so may create confusion, as the person navigating this way may be left wondering where the missing heading is.

#### Don't

```html example-bad
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

#### Do

```html example-good
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

#### Nesting

Headings may be nested as subsections to reflect the organization of the content of the page. Most screen readers can also generate an ordered list of all the headings on a page, which can help a person quickly determine the hierarchy of the content:

1. `h1` Beetles

    1. `h2` Etymology
    2. `h2` Distribution and Diversity
    3. `h2` Evolution

        1. `h3` Late Paleozoic
        2. `h3` Jurassic
        3. `h3` Cretaceous
        4. `h3` Cenozoic

    4. `h2` External Morphology

        1. `h3` Head

            1. `h4` Mouthparts

        2. `h3` Thorax

            1. `h4` Prothorax
            2. `h4` Pterothorax

        3. `h3` Legs
        4. `h3` Wings
        5. `h3` Abdomen

When headings are nested, heading levels may be "skipped" when closing a subsection.

- [Headings • Page Structure • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_—_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html)
- [MDN Understanding WCAG, Guideline 2.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)
- [Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html)
- [Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html)

### Labeling section content

Another common navigation technique for users of screen reading software is to generate a list of [sectioning content](/en-US/docs/Web/HTML/Element#content_sectioning) and use it to determine the page's layout.

Sectioning content can be labeled using a combination of the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) and {{htmlattrxref("id")}} attributes, with the label concisely describing the purpose of the section. This technique is useful for situations where there is more than one sectioning element on the same page.

#### Example

```html
<header>
  <nav aria-labelledby="primary-navigation">
    <h2 id="primary-navigation">Primary navigation</h2>
    <!-- navigation items -->
  </nav>
</header>

<!-- page content -->

<footer>
  <nav aria-labelledby="footer-navigation">
    <h2 id="footer-navigation">Footer navigation</h2>
    <!-- navigation items -->
  </nav>
</footer>
```

In this example, screen reading technology would announce that there are two {{HTMLElement("nav")}} sections, one called "Primary navigation" and one called "Footer navigation". If labels were not provided, the person using screen reading software may have to investigate each `nav` element's contents to determine their purpose.

- [Using the aria-labelledby attribute](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("p")}}
- {{HTMLElement("div")}}
- {{HTMLElement("section")}}
