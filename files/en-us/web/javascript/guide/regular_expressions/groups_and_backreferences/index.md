---
title: Groups and backreferences
slug: Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences
page-type: guide
---

{{jsSidebar("JavaScript Guide")}}

Groups group multiple patterns as a whole, and capturing groups provide extra submatch information when using a regular expression pattern to match against a string. Backreferences refer to a previously captured group in the same regular expression.

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
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <strong>Capturing group: </strong>Matches <code><em>x</em></code> and
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
            >[1], …, [n]</code
          >) or from the predefined <code>RegExp</code> object's properties
          (<code>$1, …, $9</code>).
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
              >String.prototype.match()</a
            ></code
          >
          won't return groups if the <code>/.../g</code> flag is set. However,
          you can still use
          <code
            ><a
              href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.prototype.matchAll()</a
            ></code
          >
          to get all matches.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Name>x)</code></td>
      <td>
        <p>
          <strong>Named capturing group: </strong>Matches "x" and stores it on
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
        <strong>Non-capturing group: </strong>Matches "x" but does not remember
        the match. The matched substring cannot be recalled from the resulting
        array's elements (<code>[1], …, [n]</code>) or from the predefined
        <code>RegExp</code> object's properties (<code>$1, …, $9</code>).
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
          <strong>Named capture group</strong> specified by
          <code>&#x3C;Name></code>.
        </p>
        <p>
          For example,
          <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code> matches "Sir,
          yes Sir" in "Do you copy? Sir, yes Sir!".
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> <code>\k</code> is used literally here to
            indicate the beginning of a back reference to a Named capture group.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Using groups

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match[1]} ${match[2]}`);
}
```

### Using named groups

```js
const personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

const regexpNames =
  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/gm;
for (const match of personList.matchAll(regexpNames)) {
  console.log(`Hello ${match.groups.firstname} ${match.groups.lastname}`);
}
```

### Using groups and back references

```js
const quote = `Single quote "'" and double quote '"'`;
const regexpQuotes = /(['"]).*?\1/g;
for (const match of quote.matchAll(regexpQuotes)) {
  console.log(match[0]);
}
```

### Using groups and match indices

By providing the `d` flag, the indices of each capturing group is returned. This is especially useful if you are correlating each matched group with the original text — for example, to provide compiler diagnostics.

```js
const code = `function add(x, y) {
  return x + y;
}`;
const functionRegexp =
  /(function\s+)(?<name>[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*)/du;
const match = functionRegexp.exec(code);
const lines = code.split("\n");
lines.splice(
  1,
  0,
  " ".repeat(match.indices[1][1] - match.indices[1][0]) +
    "^".repeat(match.indices.groups.name[1] - match.indices.groups.name[0]),
);
console.log(lines.join("\n"));
// function add(x, y) {
//          ^^^
//   return x + y;
// }
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Quantifiers](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)
- [The `RegExp()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
