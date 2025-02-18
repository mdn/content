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

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Microsyntax</th>
      <th scope="col">Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Valid month string</td>
      <td><code><em>YYYY</em>-<em>MM</em></code></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tr>
    <tr>
      <td>Valid date string</td>
      <td><code><em>YYYY</em>-<em>MM</em>-<em>DD</em></code></td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>Valid yearless date string</td>
      <td><code><em>MM</em>-<em>DD</em></code></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>Valid time string</td>
      <td>
        <code><em>HH</em>:<em>MM</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>23:59</code><br />
        <code>12:15:47</code><br />
        <code>12:15:52.998</code>
      </td>
    </tr>
    <tr>
      <td>Valid local date and time string</td>
      <td>
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>2013-12-25 11:12</code><br />
        <code>1972-07-25 13:43:07</code><br />
        <code>1941-03-15 07:06:23.678</code><br />
        <code>2013-12-25T11:12</code><br />
        <code>1972-07-25T13:43:07</code><br />
        <code>1941-03-15T07:06:23.678</code>
      </td>
    </tr>
    <tr>
      <td>Valid time-zone offset string</td>
      <td>
        <code>Z</code><br />
        <code>+<em>HHMM</em></code><br />
        <code>+<em>HH</em>:<em>MM</em></code><br />
        <code>-<em>HHMM</em></code><br />
        <code>-<em>HH</em>:<em>MM</em></code>
      </td>
      <td>
        <code>Z</code><br />
        <code>+0200</code><br />
        <code>+04:30</code><br />
        <code>-0300</code><br />
        <code>-08:00</code>
      </td>
    </tr>
    <tr>
      <td>Valid global date and time string</td>
      <td style="max-width:12em">
        Any combination of a valid local date and time string followed by a
        valid time-zone offset string
      </td>
      <td>
        <code>2013-12-25 11:12+0200</code><br />
        <code>1972-07-25 13:43:07+04:30</code><br />
        <code>1941-03-15 07:06:23.678Z</code><br />
        <code>2013-12-25T11:12-08:00</code>
      </td>
    </tr>
    <tr>
      <td>Valid week string</td>
      <td><code><em>YYYY</em>-W<em>WW</em></code></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td>Four or more ASCII digits</td>
      <td><code><em>YYYY</em></code></td>
      <td><code>2013</code>, <code>0001</code></td>
    </tr>
    <tr>
      <td>Valid duration string</td>
      <td>
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S<br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code><em>w</em>w <em>d</em>d <em>h</em>h <em>m</em>m <em>s</em>s</code>
      </td>
      <td>
        <code>P12DT7H12M13S</code><br />
        <code>P12DT7H12M13.3S</code><br />
        <code>P12DT7H12M13.45S</code><br />
        <code>P12DT7H12M13.455S</code><br />
        <code>PT7H12M13S</code><br />
        <code>PT7H12M13.2S</code><br />
        <code>PT7H12M13.56S</code><br />
        <code>PT7H12M13.999S</code><br />
        <code>7d 5h 24m 13s</code>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Basic example

#### HTML

```html
<p>The concert starts at <time datetime="2018-07-07T20:00:00">20:00</time>.</p>
```

#### Result

{{EmbedLiveSample('Basic_example', 250, 80)}}

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
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">time</a
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
