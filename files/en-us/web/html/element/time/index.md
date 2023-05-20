---
title: "<time>: The (Date) Time element"
slug: Web/HTML/Element/time
page-type: html-element
browser-compat: html.elements.time
---

{{HTMLSidebar}}

The **`<time>`** [HTML](/en-US/docs/Web/HTML) element represents a specific period in time. It may include the `datetime` attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.

It may represent one of the following:

- A time on a 24-hour clock.
- A precise date in the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) (with optional time and timezone information).
- [A valid time duration](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string).

{{EmbedInteractiveExample("pages/tabbed/time.html", "tabbed-shorter")}}

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `datetime`
  - : This attribute indicates the time and/or date of the element and must be in one of the formats described below.

## Usage notes

This element is for presenting dates and times in a machine-readable format. For example, this can help a user agent offer to add an event to a user's calendar.

This element should not be used for dates prior to the introduction of the Gregorian calendar (due to complications in calculating those dates).

The _datetime value_ (the machine-readable value of the datetime) is the value of the element's `datetime` attribute, which must be in the proper format (see below). If the element does not have a `datetime` attribute, **it must not have any element descendants**, and the _datetime value_ is the element's child text content.

### Valid datetime values

- a valid year string
  - : `2011`
- a valid month string
  - : `2011-11`
- a valid date string
  - : `2011-11-18`
- a valid yearless date string
  - : `11-18`
- a valid week string
  - : `2011-W47`
- a valid time string

  - : `14:54`

    `14:54:39`

    `14:54:39.929`

- a valid local date and time string

  - : `2011-11-18T14:54:39.929`

    `2011-11-18 14:54:39.929`

- a valid global date and time string

  - : `2011-11-18T14:54:39.929Z`

    `2011-11-18T14:54:39.929-0400`

    `2011-11-18T14:54:39.929-04:00`

    `2011-11-18 14:54:39.929Z`

    `2011-11-18 14:54:39.929-0400`

    `2011-11-18 14:54:39.929-04:00`

- a valid duration string
  - : `PT4H18M3S`

## Examples

### Simple example

#### HTML

```html
<p>The concert starts at <time datetime="2018-07-07T20:00:00">20:00</time>.</p>
```

#### Result

{{EmbedLiveSample('Simple_example', 250, 80)}}

### `datetime` example

#### HTML

```html
<p>
  The concert took place on <time datetime="2001-05-15T19:00">May 15</time>.
</p>
```

#### Result

{{EmbedLiveSample('datetime_example', 250, 80)}}

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
      <td>{{no_tag_omission}}</td>
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >No corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("data")}} element, allowing to signal other kind of values.
