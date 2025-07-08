---
title: "<header>: The Header element"
slug: Web/HTML/Reference/Elements/header
page-type: html-element
browser-compat: html.elements.header
---

{{HTMLSidebar}}

The **`<header>`** [HTML](/en-US/docs/Web/HTML) element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

{{InteractiveExample("HTML Demo: &lt;header&gt;", "tabbed-standard")}}

```html interactive-example
<header>
  <a class="logo" href="#">Cute Puppies Express!</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08.12.2014</time>
  </header>
  <p>
    I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and
    their ears are so, so snugly soft!
  </p>
</article>
```

```css interactive-example
.logo {
  background: left / cover
    url("/shared-assets/images/examples/puppy-header.jpg");
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  font:
    bold calc(1em + 2 * (100vw - 120px) / 100) "Dancing Script",
    fantasy;
  color: #ff0083;
  text-shadow: #000 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## Usage notes

The `<header>` element serves as a [`banner` landmark](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) **only when** it is a direct child of `<body>` and contains site-wide content such as a logo or navigation.

When nested inside sectioning content (such as `<article>`, `<section>`, or `<main>`), it loses its landmark status and behaves like a non-semantic container. See [Accessibility](#accessibility) for details.

> [!WARNING]
> **Avoid nested `<header>` for semantics**
> While valid HTML, it provides no structural meaning inside sections. Prefer:

```html
<section aria-labelledby="section-heading">
  <h2 id="section-heading">Heading</h2>
  <!-- Content -->
</section>
```

### Historical Usage

The `<header>` element originally existed at the very beginning of HTML for headings. It is seen in [the very first website](https://info.cern.ch/). At some point, headings became [`<h1>` through `<h6>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements), allowing `<header>` to be free to fill a different role.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

## Accessibility

The `<header>` element defines a [`banner`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) landmark **only when** it is a direct child of the {{HTMLElement('body')}} element.

When placed inside sectioning content such as {{HTMLElement('article')}}, {{HTMLElement('main')}}, {{HTMLElement('section')}}, {{HTMLElement('nav')}}, or {{HTMLElement('aside')}}:

- It is **not** exposed as a landmark to assistive technologies
- It receives a [`generic` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- It **cannot** be labeled with `aria-label` or `aria-labelledby`

This behavior aligns with the WAI-ARIA specification and is visible in browser accessibility trees using developer tools.

## Examples

### Page Header

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

#### Result

{{EmbedLiveSample('Page Header')}}

### Article Header

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>
      Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by
      Jane Smith
    </p>
  </header>
  <p>
    We live on a planet that's blue and green, with so many things still unseen.
  </p>
  <p><a href="https://example.com/the-planet-earth/">Continue reading…</a></p>
</article>
```

#### Result

{{EmbedLiveSample('Article Header')}}

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
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >, but with no <code>&#x3C;header></code> or
        {{HTMLElement("footer")}} descendant.
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
          >flow content</a
        >. Note that a <code>&#x3C;header></code> element must not be a
        descendant of an {{HTMLElement("address")}},
        {{HTMLElement("footer")}} or another
        <code>&lt;header&gt;</code> element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role">banner</a
        >, or
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
          >generic</a
        >
        if a descendant of an
        <code><a href="/en-US/docs/Web/HTML/Reference/Elements/article">article</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Reference/Elements/aside">aside</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Reference/Elements/main">main</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Reference/Elements/nav">nav</a></code> or
        <code><a href="/en-US/docs/Web/HTML/Reference/Elements/section">section</a></code>
        element, or an element with
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
            >article</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"
            >complementary</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"
            >main</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"
            >navigation</a
          ></code
        >
        or
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"
            >region</a
          ></code
        > role
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> or
        <a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
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

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
