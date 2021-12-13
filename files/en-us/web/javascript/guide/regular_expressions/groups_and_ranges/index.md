---
title: Groups and ranges
slug: Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
tags:
  - Guide
  - JavaScript
  - Reference
  - Regular Expressions
  - groups
  - ranges
  - regex
---
{{jsSidebar("JavaScript Guide")}}

Groups and ranges indicate groups and ranges of expression characters.

{{EmbedInteractiveExample("pages/js/regexp-groups-ranges.html")}}

## Types

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Characters</th>
      <th scope="col">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          Matches either "x" or "y". For example,
          <code>/green|red/</code> matches "green" in "green apple" and "red" in
          "red apple".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          A character class. Matches any one of the enclosed characters. You can
          specify a range of characters by using a hyphen, but if the hyphen
          appears as the first or last character enclosed in the square brackets
          it is taken as a literal hyphen to be included in the character class
          as a normal character.
        </p>
        <p>
          For example, <code>[abcd]</code> is the same as <code>[a-d]</code>.
          They match the "b" in "brisket", and the "c" in "chop".
        </p>
        <p>
          For example, <code>[abcd-]</code> and <code>[-abcd]</code> match the
          "b" in "brisket", the "c" in "chop", and the "-" (hyphen) in
          "non-profit".
        </p>
        <p>
          For example, <code>[\w-]</code> is the same as
          <code>[A-Za-z0-9_-]</code>. They both match the "b" in "brisket", the
          "c" in "chop", and the "n" in "non-profit".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>[^xyz]<br />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          A negated or complemented character class. That is, it matches
          anything that is not enclosed in the brackets. You can specify a range
          of characters by using a hyphen, but if the hyphen appears as the
          first or last character enclosed in the square brackets it is taken as
          a literal hyphen to be included in the character class as a normal
          character. For example, <code>[^abc]</code> is the same as
          <code>[^a-c]</code>. They initially match "o" in "bacon" and "h" in
          "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> The ^ character may also indicate the
            <a
              href="/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
              >beginning of input</a
            >.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <strong>Capturing group: </strong>Matches <code><em>x</em></code> and
          remembers the match. For example, <code>/(foo)/</code> matches and
          remembers "foo" in "foo bar".
        </p>
        <p>
          A regular expression may have multiple capturing groups. In results,
          matches to capturing groups typically in an array whose members are in
          the same order as the left parentheses in the capturing group. This is
          usually just the order of the capturing groups themselves. This
          becomes important when capturing groups are nested. Matches are
          accessed using the index of the result's elements (<code
            >[1], ..., [n]</code
          >) or from the predefined <code>RegExp</code> object's properties
          (<code>$1, ..., $9</code>).
        </p>
        <p>
          Capturing groups have a performance penalty. If you don't need the
          matched substring to be recalled, prefer non-capturing parentheses
          (see below).
        </p>
        <p>
          <code
            ><a
              href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.match()</a
            ></code
          >
          won't return groups if the <code>/.../g</code> flag is set. However,
          you can still use
          <code
            ><a
              href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.matchAll()</a
            ></code
          >
          to get all matches.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          Where "n" is a positive integer. A back reference to the last
          substring matching the n parenthetical in the regular expression
          (counting left parentheses). For example,
          <code>/apple(,)\sorange\1/</code> matches "apple, orange," in "apple,
          orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\k&#x3C;Name></code></td>
      <td>
        <p>
          A back reference to the last substring matching the
          <strong>Named capture group</strong> specified by
          <code>&#x3C;Name></code>.
        </p>
        <p>
          For example,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> matches "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> <code>\k</code> is used literally here to
            indicate the beginning of a back reference to a Named capture group.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <strong>Named capturing group: </strong>Matches "x" and stores it on
          the groups property of the returned matches under the name specified
          by <code>&#x3C;Name></code>. The angle brackets (<code>&#x3C;</code>
          and <code>></code>) are required for group name.
        </p>
        <p>
          For example, to extract the United States area code from a phone
          number, we could use <code>/\((?&#x3C;area>\d\d\d)\)/</code>. The
          resulting number would appear under <code>matches.groups.area</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <strong>Non-capturing group: </strong>Matches "x" but does not remember
        the match. The matched substring cannot be recalled from the resulting
        array's elements (<code>[1], ..., [n]</code>) or from the predefined
        <code>RegExp</code> object's properties (<code>$1, ..., $9</code>).
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Counting vowels

```js
var aliceExcerpt = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels = /[aeiouy]/g;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 25
```

### Using groups

```js
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match[1]} ${match[2]}`);
} while((match = regexpNames.exec(personList)) !== null);
```

### Using named groups

```js
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames =  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;
let match = regexpNames.exec(personList);
do {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
} while((match = regexpNames.exec(personList)) !== null);
```

## See also

- [Regular expressions guide](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [Quantifiers](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
  - [Unicode property escapes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

- [The `RegExp()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [ClassRanges in the ECMAScript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-classranges)
