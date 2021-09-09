---
title: Intl.Locale.prototype.calendars
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendars
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
  - Calendars
browser-compat: javascript.builtins.Intl.Locale.calendars
---
{{JSRef}}

The **`Intl.Locale.prototype.calendars`** property is an accessor property which returns a list of 1 or more unique calendar identifiers for the `Locale`.

## Description

The `calendar` property returns a list of all supported calendars for the  `Locale`  all list items indicates the `Locale`'s calendar era. The following table shows all the valid Unicode calendar key strings, along with a description of the calendar era they represent.

### Unicode calendar keys

<table class="standard-table">
  <caption>
    Unicode calendar keys
  </caption>
  <thead>
    <tr>
      <th scope="col">Calendar key (name)</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>buddhist</code></td>
      <td>Thai Buddhist calendar</td>
    </tr>
    <tr>
      <td><code>chinese</code></td>
      <td>Traditional Chinese calendar</td>
    </tr>
    <tr>
      <td><code>coptic</code></td>
      <td>Coptic calendar</td>
    </tr>
    <tr>
      <td><code>dangi</code></td>
      <td>Traditional Korean calendar</td>
    </tr>
    <tr>
      <td><code>ethioaa</code></td>
      <td>Ethiopic calendar, Amete Alem (epoch approx. 5493 B.C.E)</td>
    </tr>
    <tr>
      <td><code>ethiopic</code></td>
      <td>Ethiopic calendar, Amete Mihret (epoch approx, 8 C.E.)</td>
    </tr>
    <tr>
      <td><code>gregory</code></td>
      <td>Gregorian calendar</td>
    </tr>
    <tr>
      <td><code>hebrew</code></td>
      <td>Traditional Hebrew calendar</td>
    </tr>
    <tr>
      <td><code>indian</code></td>
      <td>Indian calendar</td>
    </tr>
    <tr>
      <td><code>islamic</code></td>
      <td>Islamic calendar</td>
    </tr>
    <tr>
      <td><code>islamic-umalqura</code></td>
      <td>Islamic calendar, Umm al-Qura</td>
    </tr>
    <tr>
      <td><code>islamic-tbla</code></td>
      <td>
        Islamic calendar, tabular (intercalary years
        [2,5,7,10,13,16,18,21,24,26,29] - astronomical epoch)
      </td>
    </tr>
    <tr>
      <td><code>islamic-civil</code></td>
      <td>
        Islamic calendar, tabular (intercalary years
        [2,5,7,10,13,16,18,21,24,26,29] - civil epoch)
      </td>
    </tr>
    <tr>
      <td><code>islamic-rgsa</code></td>
      <td>Islamic calendar, Saudi Arabia sighting</td>
    </tr>
    <tr>
      <td><code>iso8601</code></td>
      <td>
        ISO calendar (Gregorian calendar using the ISO 8601 calendar week rules)
      </td>
    </tr>
    <tr>
      <td><code>japanese</code></td>
      <td>Japanese Imperial calendar</td>
    </tr>
    <tr>
      <td><code>persian</code></td>
      <td>Persian calendar</td>
    </tr>
    <tr>
      <td><code>roc</code></td>
      <td>Republic of China calendar</td>
    </tr>
    <tr>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warning:</strong> The <code>islamicc</code> calendar key has
            been deprecated. Please use <code>islamic-civil</code>.
          </p>
        </div>
        <p><code>islamicc</code></p>
      </td>
      <td>Civil (algorithmic) Arabic calendar</td>
    </tr>
  </tbody>
</table>

## Examples

### Obtaining supported calendars

List supported calendars for a given `Locale`.

```js
let arEG = new Intl.Locale("ar-EG");
console.log(arEG.calendars); // Prints ["gregory", "coptic", "islamic", "islamic-civil", "islamic-tbla"
```

```js
let jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.calendars); // Prints ["gregory", "japanese"]
```
## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [Unicode Calendar Identifiers](https://www.unicode.org/reports/tr35/#UnicodeCalendarIdentifier)
