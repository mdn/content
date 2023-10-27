---
title: Firefox 120 for developers
slug: Mozilla/Firefox/Releases/120
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 120 that affect developers. Firefox 120 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [November 21, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- {{jsxref("Date.parse()")}} now accepts numeric dashed dates which do not meet the formal ISO standard, e.g.

  - `"01-12-1999"` (month first)
  - `"1999-1-5"` (single-digit month or day)
  - `"10000-01-12"` (year > 9999)
  - `"99-01-05"` or `"01-05-99"` (2-digit year, year must be >31 if it comes first)
  - `"1999-01-05 10:00:00"` (space between date and time).

  These dates will be parsed with behavior typical of other non-ISO dates, such as local time zone and month rollover (April 31 rolls over to May 1 since April 31 doesn't exist).

- The [Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object now parses several additional date formats, including formats such as `"MonDDYYYY"`, `"Mon.DD.YYYY"`, and `"Mon DD YYYY hh:mmXm"` ([Firefox bug 449921](https://bugzil.la/449921)).

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(119)}}
