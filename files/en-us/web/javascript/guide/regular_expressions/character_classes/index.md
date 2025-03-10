---
title: Character classes
slug: Web/JavaScript/Guide/Regular_expressions/Character_classes
page-type: guide
---

{{jsSidebar("JavaScript Guide")}}

Character classes distinguish kinds of characters such as, for example, distinguishing between letters and digits.

{{InteractiveExample("JavaScript Demo: RegExp Character classes")}}

```js interactive-example
const chessStory = "He played the King in a8 and she moved her Queen in c2.";
const regexpCoordinates = /\w\d/g;
console.log(chessStory.match(regexpCoordinates));
// Expected output: Array [ 'a8', 'c2']

const moods = "happy 🙂, confused 😕, sad 😢";
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu;
console.log(moods.match(regexpEmoticons));
// Expected output: Array ['🙂', '😕', '😢']
```

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
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Character class:</strong></a>
          Matches any one of the enclosed characters. You can
          specify a range of characters by using a hyphen, but if the hyphen
          appears as the first or last character enclosed in the square brackets,
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
        <p>
          When the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets"><code>unicodeSets</code></a> (<code>v</code>) flag is enabled, the character class has some additional features. See the <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class">character class</a> reference for more information.
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
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class"><strong>Negated character class:</strong></a>
          Matches anything that is not enclosed in the square brackets. You can specify a range
          of characters by using a hyphen, but if the hyphen appears as the
          first character after the <code>^</code> or the last character enclosed in the square brackets, it is taken as
          a literal hyphen to be included in the character class as a normal
          character. For example, <code>[^abc]</code> is the same as
          <code>[^a-c]</code>. They initially match "o" in "bacon" and "h" in
          "chop".
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> The ^ character may also indicate the
            <a
              href="/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
              >beginning of input</a
            >.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard"><strong>Wildcard:</strong></a>
          Matches any single character <em>except</em> line terminators:
          <code>\n</code>, <code>\r</code>, <code>\u2028</code> or
          <code>\u2029</code>. For example, <code>/.y/</code> matches "my" and
          "ay", but not "yes", in "yes make my day", as there is no character before "y" in "yes". If the <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"><code>dotAll</code></a> (s) flag is enabled, also matches line terminators.
          Inside a character class, the dot loses its special meaning and
          matches a literal dot.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Digit character class escape:</strong></a>
          Matches any digit (Arabic numeral). Equivalent to <code>[0-9]</code>.
          For example, <code>/\d/</code> or <code>/[0-9]/</code> matches "2" in
          "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Non-digit character class escape:</strong></a>
          Matches any character that is not a digit (Arabic numeral). Equivalent
          to <code>[^0-9]</code>. For example, <code>/\D/</code> or
          <code>/[^0-9]/</code> matches "B" in "B2 is the suite number".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Word character class escape:</strong></a>
          Matches any alphanumeric character from the basic Latin alphabet,
          including the underscore. Equivalent to <code>[A-Za-z0-9_]</code>. For
          example, <code>/\w/</code> matches "a" in "apple", "5" in "$5.28", "3"
          in "3D" and "m" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Non-word character class escape:</strong></a>
          Matches any character that is not a word character from the basic
          Latin alphabet. Equivalent to <code>[^A-Za-z0-9_]</code>. For example,
          <code>/\W/</code> or <code>/[^A-Za-z0-9_]/</code> matches "%" in "50%"
          and "É" in "Émanuel".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>White space character class escape:</strong></a>
          Matches a single white space character, including space, tab, form
          feed, line feed, and other Unicode spaces. Equivalent to
          <code>[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. For example, <code>/\s\w*/</code> matches " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape"><strong>Non-white space character class escape:</strong></a>
          Matches a single character other than white space. Equivalent to
          <code>[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. For example, <code>/\S\w*/</code> matches "foo" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Matches a horizontal tab.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Matches a carriage return.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Matches a linefeed.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Matches a vertical tab.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Matches a form-feed.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Matches a backspace. If you're looking for the word-boundary assertion
        (<code>\b</code>), see
        <a
          href="/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Assertions</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Matches a NUL character. Do not follow this with another digit.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Matches a control character using
          <a href="https://en.wikipedia.org/wiki/Caret_notation"
            >caret notation</a
          >, where "X" is a letter from A–Z (corresponding to code points
          <code>U+0001</code><em>–</em><code>U+001A</code>). For example,
          <code>/\cM\cJ/</code> matches "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Matches the character with the code <code><em>hh</em></code> (two
        hexadecimal digits).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Matches a UTF-16 code-unit with the value
        <code><em>hhhh</em></code> (four hexadecimal digits).
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> or <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Only when the <code>u</code> flag is set.) Matches the character with
        the Unicode value <code>U+<em>hhhh</em></code> or <code
          >U+<em>hhhhh</em></code
        >
        (hexadecimal digits).
      </td>
    </tr>
    <tr>
      <td>
        <code>\p{<em>UnicodeProperty</em>}</code>,
        <code>\P{<em>UnicodeProperty</em>}</code>
      </td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape"><strong>Unicode character class escape:</strong></a>
          Matches a character based on its Unicode character properties: for example, emoji characters, or Japanese
          <em>katakana</em> characters, or Chinese/Japanese Han/Kanji characters,
          etc.).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Indicates that the following character should be treated specially, or
          "escaped". It behaves one of two ways.
        </p>
        <ul>
          <li>
            For characters that are usually treated literally, indicates that
            the next character is special and not to be interpreted literally.
            For example, <code>/b/</code> matches the character "b". By placing
            a backslash in front of "b", that is by using <code>/\b/</code>, the
            character becomes special to mean match a word boundary.
          </li>
          <li>
            For characters that are usually treated specially, indicates that
            the next character is not special and should be interpreted
            literally. For example, "*" is a special character that means 0 or
            more occurrences of the preceding character should be matched; for
            example, <code>/a*/</code> means match 0 or more "a"s. To match
            <code>*</code> literally, precede it with a backslash; for example,
            <code>/a\*/</code> matches "a*".
          </li>
        </ul>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> To match this character literally, escape it
            with itself. In other words to search for <code>\</code> use
            <code>/\\/</code>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          <a href="/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction"><strong>Disjunction:</strong></a>
          Matches either "x" or "y". Each component, separated by a pipe (<code>|</code>), is called an <em>alternative</em>. For example,
          <code>/green|red/</code> matches "green" in "green apple" and "red" in
          "red apple".
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> A disjunction is another way to specify "a set of choices", but it's not a character class. Disjunctions are not atoms — you need to use a <a href="/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences">group</a> to make it part of a bigger pattern. <code>[abc]</code> is functionally equivalent to <code>(?:a|b|c)</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Looking for a series of digits

In this example, we match a sequence of 4 digits with `\d{4}`. `\b` indicates a [word boundary](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) (i.e. do not start or end matching in the middle of a number sequence).

```js
const randomData = "015 354 8787 687351 3512 8735";
const regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));
// ['8787', '3512', '8735']
```

See more examples in the [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) reference.

### Looking for a word (from the latin alphabet) starting with A

In this example, we match a word starting with the letter A. `\b` indicates a [word boundary](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) (i.e. do not start matching in the middle of a word). `[aA]` indicates the letter "a" or "A". `\w+` indicates any character _from the Latin alphabet_, multiple times (`+` is a [quantifier](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers)). Note that because we already match until there are no more word characters, an end `\b` boundary is not necessary.

```js
const aliceExcerpt =
  "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
const regexpWordStartingWithA = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));
// ['Ada', 'and', 'at', 'all']
```

See more examples in the [character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape) reference.

### Looking for a word (from Unicode characters)

Instead of the Latin alphabet, we can use a range of Unicode characters to identify a word (thus being able to deal with text in other languages like Russian or Arabic). The "Basic Multilingual Plane" of Unicode contains most of the characters used around the world and we can use character classes and ranges to match words written with those characters.

```js
const nonEnglishText = "Приключения Алисы в Стране чудес";
const regexpBMPWord = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP goes through U+0000 to U+FFFF but space is U+0020

console.table(nonEnglishText.match(regexpBMPWord));
["Приключения", "Алисы", "в", "Стране", "чудес"];
```

See more examples in the [Unicode character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) reference.

### Counting vowels

In this example, we count the number of vowels (A, E, I, O, U, Y) in a text. The `g` flag is used to match all occurrences of the pattern in the text. The `i` flag is used to make the pattern case-insensitive, so it matches both uppercase and lowercase vowels.

```js
const aliceExcerpt =
  "There was a long silence after this, and Alice could only hear whispers now and then.";
const regexpVowels = /[aeiouy]/gi;

console.log("Number of vowels:", aliceExcerpt.match(regexpVowels).length);
// Number of vowels: 26
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) guide
- [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) guide
- [Quantifiers](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) guide
- [Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) guide
- [`RegExp`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [Regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions) reference
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Wildcard: `.`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
