---
title: Text formatting
slug: Web/JavaScript/Guide/Text_formatting
page-type: guide
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}

This chapter introduces how to work with strings and text in JavaScript.

## Strings

JavaScript's [String](/en-US/docs/Glossary/String) type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values (UTF-16 code units). Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. You can create strings using string literals or string objects.

### String literals

You can create simple strings using either single or double quotes:

```js-nolint
'foo'
"bar"
```

More advanced strings can be created using escape sequences:

#### Hexadecimal escape sequences

The number after \x is interpreted as a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) number.

```js-nolint
"\xA9" // "©"
```

#### Unicode escape sequences

The Unicode escape sequences require at least four hexadecimal digits following `\u`.

```js-nolint
"\u00A9" // "©"
```

#### Unicode code point escapes

With Unicode code point escapes, any character can be escaped using hexadecimal numbers so that it is possible to use Unicode code points up to `0x10FFFF`. With simple Unicode escapes it is often necessary to write the surrogate halves separately to achieve the same result.

See also {{jsxref("String.fromCodePoint()")}} or {{jsxref("String.prototype.codePointAt()")}}.

```js-nolint
"\u{2F804}"

// the same with simple Unicode escapes
"\uD87E\uDC04"
```

### String objects

The {{jsxref("String")}} object is a wrapper around the string primitive data type.

```js
const foo = new String("foo"); // Creates a String object
console.log(foo); // [String: 'foo']
typeof foo; // 'object'
```

You can call any of the methods of the `String` object on a string literal value—JavaScript automatically converts the string literal to a temporary `String` object, calls the method, then discards the temporary `String` object. You can also use the `length` property with a string literal.

You should use string literals unless you specifically need to use a `String` object, because `String` objects can have counterintuitive behavior. For example:

```js
const firstString = "2 + 2"; // Creates a string literal value
const secondString = new String("2 + 2"); // Creates a String object
eval(firstString); // Returns the number 4
eval(secondString); // Returns a String object containing "2 + 2"
```

A `String` object has one property, `length`, that indicates the number of UTF-16 code units in the string. For example, the following code assigns `helloLength` the value 13, because "Hello, World!" has 13 characters, each represented by one UTF-16 code unit. You can access each code unit using an array bracket style. You can't change individual characters because strings are immutable array-like objects:

```js
const hello = "Hello, World!";
const helloLength = hello.length;
hello[0] = "L"; // This has no effect, because strings are immutable
hello[0]; // This returns "H"
```

Characters whose Unicode scalar values are greater than U+FFFF (such as some rare Chinese/Japanese/Korean/Vietnamese characters and some emoji) are stored in UTF-16 with two surrogate code units each. For example, a string containing the single character U+1F600 "Emoji grinning face" will have length 2. Accessing the individual code units in such a string using brackets may have undesirable consequences such as the formation of strings with unmatched surrogate code units, in violation of the Unicode standard. (Examples should be added to this page after MDN bug 857438 is fixed.) See also {{jsxref("String.fromCodePoint()")}} or {{jsxref("String.prototype.codePointAt()")}}.

A `String` object has a variety of methods: for example those that return a variation on the string itself, such as `substring` and `toUpperCase`.

The following table summarizes the methods of {{jsxref("String")}} objects.

<table class="standard-table">
  <caption>
    <h4 id="Methods_of_String">Methods of <code>String</code></h4>
  </caption>
  <thead>
    <tr>
      <th scope="col">Method</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("String/charAt", "charAt()")}}, {{jsxref("String/charCodeAt", "charCodeAt()")}},
        {{jsxref("String/codePointAt", "codePointAt()")}}
      </td>
      <td>
        Return the character or character code at the specified position in
        string.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/indexOf", "indexOf()")}},
        {{jsxref("String/lastIndexOf", "lastIndexOf()")}}
      </td>
      <td>
        Return the position of specified substring in the string or last
        position of specified substring, respectively.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/startsWith", "startsWith()")}},
        {{jsxref("String/endsWith", "endsWith()")}},
        {{jsxref("String/includes", "includes()")}}
      </td>
      <td>
        Returns whether or not the string starts, ends or contains a specified
        string.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/concat", "concat()")}}</td>
      <td>Combines the text of two strings and returns a new string.</td>
    </tr>
    <tr>
      <td>{{jsxref("String/split", "split()")}}</td>
      <td>
        Splits a <code>String</code> object into an array of strings by
        separating the string into substrings.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/slice", "slice()")}}</td>
      <td>Extracts a section of a string and returns a new string.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/substring", "substring()")}},
        {{jsxref("String/substr", "substr()")}}
      </td>
      <td>
        Return the specified subset of the string, either by specifying the
        start and end indexes or the start index and a length.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/match", "match()")}}, {{jsxref("String/matchAll", "matchAll()")}},
        {{jsxref("String/replace", "replace()")}}, {{jsxref("String/replaceAll", "replaceAll()")}},
        {{jsxref("String/search", "search()")}}
      </td>
      <td>Work with regular expressions.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("String/toLowerCase", "toLowerCase()")}},
        {{jsxref("String/toUpperCase", "toUpperCase()")}}
      </td>
      <td>
        <p>
          Return the string in all lowercase or all uppercase, respectively.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/normalize", "normalize()")}}</td>
      <td>
        Returns the Unicode Normalization Form of the calling string value.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/repeat", "repeat()")}}</td>
      <td>
        Returns a string consisting of the elements of the object repeated the
        given times.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("String/trim", "trim()")}}</td>
      <td>Trims whitespace from the beginning and end of the string.</td>
    </tr>
  </tbody>
</table>

### Multi-line template literals

[Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

Template literals are enclosed by backtick ([grave accent](https://en.wikipedia.org/wiki/Grave_accent)) characters (`` ` ``) instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (`${expression}`).

#### Multi-lines

Any new line characters inserted in the source are part of the template literal. Using normal strings, you would have to use the following syntax in order to get multi-line strings:

```js
console.log(
  "string text line 1\n\
string text line 2",
);
// "string text line 1
// string text line 2"
```

To get the same effect with multi-line strings, you can now write:

```js
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

#### Embedded expressions

In order to embed expressions within normal strings, you would use the following syntax:

```js
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);
// "Fifteen is 15 and not 20."
```

Now, with template literals, you are able to make use of the syntactic sugar making substitutions like this more readable:

```js
const five = 5;
const ten = 10;
console.log(`Fifteen is ${five + ten} and not ${2 * five + ten}.`);
// "Fifteen is 15 and not 20."
```

For more information, read about [Template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) in the [JavaScript reference](/en-US/docs/Web/JavaScript/Reference).

## Internationalization

The {{jsxref("Intl")}} object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The constructors for {{jsxref("Intl.Collator")}}, {{jsxref("Intl.NumberFormat")}}, and {{jsxref("Intl.DateTimeFormat")}} objects are properties of the `Intl` object.

### Date and time formatting

The {{jsxref("Intl.DateTimeFormat")}} object is useful for formatting date and time. The following formats a date for English as used in the United States. (The result is different in another time zone.)

```js
// July 17, 2014 00:00:00 UTC:
const july172014 = new Date("2014-07-17");

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

// Local timezone vary depending on your settings
// In CEST, logs: 07/17/14, 02:00 AM GMT+2
// In PDT, logs: 07/16/14, 05:00 PM GMT-7
console.log(americanDateTime(july172014));
```

### Number formatting

The {{jsxref("Intl.NumberFormat")}} object is useful for formatting numbers, for example currencies.

```js
const gasPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.259)); // $5.259

const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
```

### Collation

The {{jsxref("Intl.Collator")}} object is useful for comparing and sorting strings.

For example, there are actually two different sort orders in German, _phonebook_ and _dictionary_. Phonebook sort emphasizes sound, and it's as if "ä", "ö", and so on were expanded to "ae", "oe", and so on prior to sorting.

```js
const names = ["Hochberg", "Hönigswald", "Holzman"];

const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// "Hochberg, Hönigswald, Holzman"
```

Some German words conjugate with extra umlauts, so in dictionaries it's sensible to order ignoring umlauts (except when ordering words differing _only_ by umlauts: _schon_ before _schön_).

```js
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");

// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", "));
// "Hochberg, Holzman, Hönigswald"
```

For more information about the {{jsxref("Intl")}} API, see also [Introducing the JavaScript Internationalization API](https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_expressions")}}
