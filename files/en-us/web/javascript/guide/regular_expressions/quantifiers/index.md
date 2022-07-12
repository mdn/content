---
title: Quantifiers
slug: Web/JavaScript/Guide/Regular_Expressions/Quantifiers
tags:
  - Guide
  - JavaScript
  - Reference
  - Regular Expressions
  - quantifiers
  - regex
---
{{jsSidebar("JavaScript Guide")}}

Quantifiers indicate numbers of characters or expressions to match.

{{EmbedInteractiveExample("pages/js/regexp-quantifiers.html", "taller")}}

## Types

> **Note:** In the following, *item* refers not only to singular characters, but also includes [character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [Unicode property escapes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes), [groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences).

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
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          Matches the preceding item "x" 0 or more times. For example,
          <code>/bo*/</code> matches "boooo" in "A ghost booooed" and "b" in "A
          bird warbled", but nothing in "A goat grunted".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Matches the preceding item "x" 1 or more times. Equivalent to
          <code>{1,}</code>. For example, <code>/a+/</code> matches the "a" in
          "candy" and all the "a"'s in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Matches the preceding item "x" 0 or 1 times. For example,
          <code>/e?le?/</code> matches the "el" in "angel" and the "le" in
          "angle."
        </p>
        <p>
          If used immediately after any of the quantifiers <code>*</code>,
          <code>+</code>, <code>?</code>, or <code>{}</code>, makes the
          quantifier non-greedy (matching the minimum number of times), as
          opposed to the default, which is greedy (matching the maximum number
          of times).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Where "n" is a positive integer, matches exactly "n" occurrences of
          the preceding item "x". For example, <code>/a{2}/</code> doesn't match
          the "a" in "candy", but it matches all of the "a"'s in "caandy", and
          the first two "a"'s in "caaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Where "n" is a positive integer, matches at least "n" occurrences of
          the preceding item "x". For example, <code>/a{2,}/</code> doesn't
          match the "a" in "candy", but matches all of the a's in "caandy" and
          in "caaaaaaandy".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          Where "n" is 0 or a positive integer, "m" is a positive integer, and
          <code><em>m</em> > <em>n</em></code
          >, matches at least "n" and at most "m" occurrences of the preceding
          item "x". For example, <code>/a{1,3}/</code> matches nothing in
          "cndy", the "a" in "candy", the two "a"'s in "caandy", and the first
          three "a"'s in "caaaaaaandy". Notice that when matching "caaaaaaandy",
          the match is "aaa", even though the original string had more "a"s in
          it.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code><em>x</em>*?</code><br /><code><em>x</em>+?</code><br /><code
            ><em>x</em>??</code
          ><br /><code><em>x</em>{n}?</code><br /><code><em>x</em>{n,}?</code
          ><br /><code><em>x</em>{n,m}?</code>
        </p>
      </td>
      <td>
        <p>
          By default quantifiers like <code>*</code> and <code>+</code> are
          "greedy", meaning that they try to match as much of the string as
          possible. The <code>?</code> character after the quantifier makes the
          quantifier "non-greedy": meaning that it will stop as soon as it finds
          a match. For example, given a string like "some &#x3C;foo> &#x3C;bar>
          new &#x3C;/bar> &#x3C;/foo> thing":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> will match "&#x3C;foo> &#x3C;bar> new
            &#x3C;/bar> &#x3C;/foo>"
          </li>
          <li><code>/&#x3C;.*?>/</code> will match "&#x3C;foo>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Repeated pattern

```js
const wordEndingWithAs = /\w+a+\b/;
const delicateMessage = "This is Spartaaaaaaa";

console.table(delicateMessage.match(wordEndingWithAs)); // [ "Spartaaaaaaa" ]
```

### Counting characters

```js
const singleLetterWord = /\b\w\b/g;
const notSoLongWord = /\b\w{2,6}\b/g;
const loooongWord = /\b\w{13,}\b/g;

const sentence = "Why do I have to learn multiplication table?";

console.table(sentence.match(singleLetterWord)); // ["I"]
console.table(sentence.match(notSoLongWord));    // [ "Why", "do", "have", "to", "learn", "table" ]
console.table(sentence.match(loooongWord));      // ["multiplication"]
```

### Optional character

```js
const britishText = "He asked his neighbour a favour.";
const americanText = "He asked his neighbor a favor.";

const regexpEnding = /\w+ou?r/g;
// \w+ One or several letters
// o   followed by an "o",
// u?  optionally followed by a "u"
// r   followed by an "r"

console.table(britishText.match(regexpEnding));
// ["neighbour", "favour"]

console.table(americanText.match(regexpEnding));
// ["neighbor", "favor"]
```

### Greedy versus non-greedy

```js
const text = "I must be getting somewhere near the center of the earth.";
const greedyRegexp = /[\w ]+/;
// [\w ]      a letter of the latin alphabet or a whitespace
//      +     one or several times

console.log(text.match(greedyRegexp)[0]);
// "I must be getting somewhere near the center of the earth"
// almost all of the text matches (leaves out the dot character)

const nonGreedyRegexp = /[\w ]+?/; // Notice the question mark
console.log(text.match(nonGreedyRegexp));
// "I"
// The match is the smallest one possible
```

## See also

- [Regular expressions guide](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

  - [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  - [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
  - [Unicode property escapes](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
  - [Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences)

- [The `RegExp()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Quantifiers in the ECMAScript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-quantifier)
