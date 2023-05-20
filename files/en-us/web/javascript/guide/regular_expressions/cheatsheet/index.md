---
title: Regular expression syntax cheat sheet
slug: Web/JavaScript/Guide/Regular_expressions/Cheatsheet
page-type: guide
---

{{jsSidebar("JavaScript Guide")}}

This page provides an overall cheat sheet of all the capabilities of `RegExp` syntax by aggregating the content of the articles in the `RegExp` guide. If you need more information on a specific topic, please follow the link on the corresponding heading to access the full article or head to [the guide](/en-US/docs/Web/JavaScript/Guide/Regular_expressions).

## Character classes

[Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) distinguish kinds of characters such as, for example, distinguishing between letters and digits.

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
          A character class. Matches any one of the enclosed characters. You can
          specify a range of characters by using a hyphen, but if the hyphen
          appears as the first or last character enclosed in the square brackets,
          it is taken as a literal hyphen to be included in the character class
          as a normal character.
        </p>
        <p>
          For example, <code>[abcd]</code> is the same as <code>[a-d]</code>.
          They match the "b" in "brisket", and the "a" or the "c" in "arch",
          but not the "-" (hyphen) in "non-profit".
        </p>
        <p>
          For example, <code>[abcd-]</code> and <code>[-abcd]</code> match the
          "b" in "brisket", the "a" or the "c" in "arch", and the "-" (hyphen)
          in "non-profit".
        </p>
        <p>
          For example, <code>[\w-]</code> is the same as
          <code>[A-Za-z0-9_-]</code>. They both match any of the characters in
          "no_reply@example-server.com" except for the "@" and the ".".
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
          first or last character enclosed in the square brackets, it is taken as
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
        <p>Has one of the following meanings:</p>
        <ul>
          <li>
            Matches any single character <em>except</em> line terminators:
            <code>\n</code>, <code>\r</code>, <code>\u2028</code> or
            <code>\u2029</code>. For example, <code>/.y/</code> matches "my" and
            "ay", but not "yes", in "yes make my day".
          </li>
          <li>
            Inside a character class, the dot loses its special meaning and
            matches a literal dot.
          </li>
        </ul>
        <p>
          Note that the <code>m</code> multiline flag doesn't change the dot
          behavior. So to match a pattern across multiple lines, the character
          class <code>[^]</code> can be used — it will match any character
          including newlines.
        </p>
        <p>
          The <code>s</code> "dotAll" flag allows the dot to
          also match line terminators.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
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
          Matches any alphanumeric character from the basic Latin alphabet,
          including the underscore. Equivalent to <code>[A-Za-z0-9_]</code>. For
          example, <code>/\w/</code> matches "a" in "apple", "5" in "$5.28", and
          "3" in "3D".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          Matches any character that is not a word character from the basic
          Latin alphabet. Equivalent to <code>[^A-Za-z0-9_]</code>. For example,
          <code>/\W/</code> or <code>/[^A-Za-z0-9_]/</code> matches "%" in
          "50%".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          Matches a single white space character, including space, tab, form
          feed, line feed, and other Unicode spaces. Equivalent to
          <code
            >[
            \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. For example, <code>/\s\w*/</code> matches " bar" in "foo bar".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          Matches a single character other than white space. Equivalent to
          <code
            >[^
            \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >. For example, <code>/\S\w*/</code> matches "foo" in "foo bar".
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
        Matches a backspace. If you're looking for the word-boundary character
        (<code>\b</code>), see
        <a
          href="/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions"
          >Boundaries</a
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
          <code>U+0001</code><em>–</em><code>U+001F</code>). For example,
          <code>/\cM/</code> matches "\r" in "\r\n".
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
        <p>
          Note that some characters like <code>:</code>, <code>-</code>,
          <code>@</code>, etc. neither have a special meaning when escaped nor
          when unescaped. Escape sequences like <code>\:</code>,
          <code>\-</code>, <code>\@</code> will be equivalent to their literal,
          unescaped character equivalents in regular expressions. However, in
          regular expressions with the
          <a
            href="/en-US/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags"
            >unicode flag</a
          >, these will cause an <em>invalid identity escape</em> error. This is
          done to ensure backward compatibility with existing code that uses new
          escape sequences like <code>\p</code> or <code>\k</code>.
        </p>
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
          <strong>Disjunction: </strong>Matches either "x" or "y". Each component, separated by a pipe (<code>|</code>), is called an <em>alternative</em>. For example,
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

## Assertions

[Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions).

### Boundary-type assertions

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Characters</th>
      <th scope="col">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          Matches the beginning of input. If the multiline flag is set to true,
          also matches immediately after a line break character. For example,
          <code>/^A/</code> does not match the "A" in "an A", but does match the
          first "A" in "An A".
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> This character has a different meaning when
            it appears at the start of a
            <a
              href="/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
              >character class</a
            >.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          Matches the end of input. If the multiline flag is set to true, also
          matches immediately before a line break character. For example,
          <code>/t$/</code> does not match the "t" in "eater", but does match it
          in "eat".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          Matches a word boundary. This is the position where a word character
          is not followed or preceded by another word-character, such as between
          a letter and a space. Note that a matched word boundary is not
          included in the match. In other words, the length of a matched word
          boundary is zero.
        </p>
        <p>Examples:</p>
        <ul>
          <li><code>/\bm/</code> matches the "m" in "moon".</li>
          <li>
            <code>/oo\b/</code> does not match the "oo" in "moon", because "oo"
            is followed by "n" which is a word character.
          </li>
          <li>
            <code>/oon\b/</code> matches the "oon" in "moon", because "oon" is
            the end of the string, thus not followed by a word character.
          </li>
          <li>
            <code>/\w\b\w/</code> will never match anything, because a word
            character can never be followed by both a non-word and a word
            character.
          </li>
        </ul>
        <p>
          To match a backspace character (<code>[\b]</code>), see
          <a
            href="/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes"
            >Character Classes</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          Matches a non-word boundary. This is a position where the previous and
          next character are of the same type: Either both must be words, or
          both must be non-words, for example between two letters or between two
          spaces. The beginning and end of a string are considered non-words.
          Same as the matched word boundary, the matched non-word boundary is
          also not included in the match. For example,
          <code>/\Bon/</code> matches "on" in "at noon", and
          <code>/ye\B/</code> matches "ye" in "possibly yesterday".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Other assertions

> **Note:** The `?` character may also be used as a quantifier.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Characters</th>
      <th scope="col">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <strong>Lookahead assertion: </strong>Matches "x" only if "x" is
          followed by "y". For example, /<code>Jack(?=Sprat)/</code> matches
          "Jack" only if it is followed by "Sprat".<br /><code
            >/Jack(?=Sprat|Frost)/</code
          >
          matches "Jack" only if it is followed by "Sprat" or "Frost". However,
          neither "Sprat" nor "Frost" is part of the match results.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <strong>Negative lookahead assertion: </strong>Matches "x" only if "x"
          is not followed by "y". For example, <code>/\d+(?!\.)/</code> matches
          a number only if it is not followed by a decimal point. <code
            >/\d+(?!\.)/.exec('3.141')</code
          >
          matches "141" but not "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <strong>Lookbehind assertion: </strong>Matches "x" only if "x" is
          preceded by "y". For example,
          <code>/(?&#x3C;=Jack)Sprat/</code> matches "Sprat" only if it is
          preceded by "Jack". <code>/(?&#x3C;=Jack|Tom)Sprat/</code> matches
          "Sprat" only if it is preceded by "Jack" or "Tom". However, neither
          "Jack" nor "Tom" is part of the match results.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <strong>Negative lookbehind assertion: </strong>Matches "x" only if
          "x" is not preceded by "y". For example,
          <code>/(?&#x3C;!-)\d+/</code> matches a number only if it is not
          preceded by a minus sign. <code>/(?&#x3C;!-)\d+/.exec('3')</code>
          matches "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code>  match is not
          found because the number is preceded by the minus sign.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Groups and backreferences

[Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) indicate groups of expression characters.

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
      <td>\k&#x3C;Name></td>
      <td>
        <p>
          A back reference to the last substring matching the <strong
            >Named capture group </strong
          >specified by <code>&#x3C;Name></code>.
        </p>
        <p>
          For example, <code>/(?&#x3C;title>\w+), yes \k&#x3C;title>/</code
          > matches "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".
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

## Quantifiers

[Quantifiers](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers) indicate numbers of characters or expressions to match.

> **Note:** In the following, _item_ refers not only to singular characters, but also includes [character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) and [groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).

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
