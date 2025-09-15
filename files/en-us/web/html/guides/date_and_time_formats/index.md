---
title: Using date and time formats in HTML
short-title: Date and time formats
slug: Web/HTML/Guides/Date_and_time_formats
page-type: guide
sidebar: htmlsidebar
---

Certain HTML elements use date and/or time values. The formats of the strings that specify these values are described in this article.

Elements that use such formats include certain forms of the {{HTMLElement("input")}} element that let the user choose or specify a date, time, or both, as well as the {{HTMLElement("ins")}} and {{HTMLElement("del")}} elements, whose [`datetime`](/en-US/docs/Web/HTML/Reference/Elements/ins#datetime) attribute specifies the date or date and time at which the insertion or deletion of content occurred.

For `<input>`, the [`type`](/en-US/docs/Web/HTML/Reference/Elements/input#type) values of inputs whose [`value`](/en-US/docs/Web/HTML/Reference/Elements/input#value) contains a string representing a date and/or time are:

- [`date`](/en-US/docs/Web/HTML/Reference/Elements/input/date)
- [`datetime-local`](/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local)
- [`month`](/en-US/docs/Web/HTML/Reference/Elements/input/month)
- [`time`](/en-US/docs/Web/HTML/Reference/Elements/input/time)
- [`week`](/en-US/docs/Web/HTML/Reference/Elements/input/week)

## Examples

Before getting into the intricacies of how date and time strings are written and parsed in HTML, here are some examples that should give you a good idea what the more commonly-used date and time string formats look like.

<table class="standard-table">
  <caption>
    Example HTML date and time strings
  </caption>
  <thead>
    <tr>
      <th scope="col">String</th>
      <th colspan="2" scope="col">Date and/or time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>June 7, 2005</td>
      <td>
        <a href="#date_strings">[details]</a>
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>8:45 AM</td>
      <td>
        <a href="#time_strings">[details]</a>
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>8:45 AM and 25 seconds</td>
      <td>
        <a href="#time_strings">[details]</a>
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>3:40 AM on August 4, 33</td>
      <td>
        <a href="#local_date_and_time_strings">[details]</a>
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>30 seconds after 2:00 PM on April 1, 1977</td>
      <td>
        <a href="#local_date_and_time_strings">[details]</a>
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>Midnight UTC on January 1, 1901</td>
      <td>
        <a href="#global_date_and_time_strings">[details]</a>
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00:01-04:00</code></td>
      <td>1 second past midnight Eastern Standard Time (EST) on January 1, 1901</td>
      <td>
        <a href="#global_date_and_time_strings">[details]</a>
      </td>
    </tr>
  </tbody>
</table>

## Basics

Before looking at the various formats of date and time related strings used by HTML elements, it is helpful to understand a few fundamental facts about the way they're defined. HTML uses a variation of the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard for its date and time strings. It's worth reviewing the descriptions of the formats you're using in order to ensure that your strings are in fact compatible with HTML, as the HTML specification includes algorithms for parsing these strings that are more precise than ISO 8601.

### Character set

Dates and times in HTML are always strings which use the {{Glossary("ASCII")}} character set.

### Year numbers

All years are given using the modern (or **proleptic**) [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) and are at least four digits long. Years prior to 1000 are padded with leading zeroes (`0`).

#### Leap years

A **leap year** is any year divisible by 400, or divisible by 4 but not by 100. February has 29 days in leap years.

### Months of the year

Months are numbered `01`–`12`. See the table in [Days of the month](#days_of_the_month) for details.

### Days of the month

Month lengths vary:

| Month | Days |
| ----- | ---- |
| 01,03,05,07,08,10,12 | 31 |
| 04,06,09,11 | 30 |
| 02 | 28 (29 in leap years) |

## Week, Month, Date, and Time strings

> Same as your current file; keep tables and explanations.

## Local date and time strings

A valid [`datetime-local`](/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local) string consists of a `date` string and a `time` string concatenated with a `T` or space. No time zone is included; the date and time are in the user's local time zone.

### Showing a Time Picker

The `datetime-local` input type allows users to select both a date and a time. Browsers typically display a **calendar for the date** and a **time picker** for the time. You can use the `step` attribute to control the granularity of time selection:

```html
<label for="meeting-time">Choose a meeting time:</label>
<input type="datetime-local" id="meeting-time" name="meeting-time" step="60">
