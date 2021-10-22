---
title: The Unicode Bidirectional Text Algorithm
slug: Web/Guide/Unicode_Bidrectional_Text_Algorithm
tags:
  - Algorithm
  - BiDi
  - Guide
  - Internationalization
  - Introduction
  - Localization
  - Text
  - Unicode
  - direction
  - i18n
  - l10n
  - ltr
  - rtl
---
{{draft}}

The **Unicode**® **Bidirectional Algorithm** (also known as the **BiDi Algorithm**) is part of the Unicode text standard that describes how the {{Glossary("user agent")}} should order characters while rendering Unicode text. Understanding this algorithm in at least basic terms is helpful when you're striving to produce localization-ready web content or apps.

In this guide, we'll take a look at the BiDi Algorithm and learn in general what it does and how it applies to your content, so that you'll be better prepared when using the features of {{Glossary("HTML")}} and {{Glossary("CSS")}} to which the algorithm applies while determining the order and directionality of text during rendering.

## Fundamentals

(base direction, character types, etc)

## The algorithm

### Character level directionality

### Directional runs

(what they are, how base direction applies)

### Handling neutral characters

## Overriding the algorithm

Content about using HTML and CSS to override the default behavior of the algorithm; include info about isolating ranges etc.

### Overriding BiDi using Unicode control characters

Unicode provides a number of special control characters that make it possible to control directionality of ranges of text. There are two sets of control characters; one set opens the override, and another restores the original directionality. You must always follow each opening character with an appropriate closing character.

<table class="standard-table">
  <caption>
    Initial Unicode BiDi algorithm control characters
  </caption>
  <thead>
    <tr>
      <th scope="row">Character</th>
      <th scope="col">Code point</th>
      <th scope="col">HTML entity</th>
      <th scope="col">Markup equivalent</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Left-to-Right Isolate (LRI)</th>
      <td>U+2066</td>
      <td><code>&#x26;#x2066;</code></td>
      <td><code>dir="ltr"</code></td>
      <td>
        Sets the base direction to LTR, isolating the embedded content from the
        surrounding text
      </td>
    </tr>
    <tr>
      <th scope="row">Right-to-Left Isolate (LRI)</th>
      <td>U+2067</td>
      <td><code>&#x26;#x2067;</code></td>
      <td><code>dir="rtl"</code></td>
      <td>
        Sets the base direction to RTL, isolating the embedded content from the
        surrounding text
      </td>
    </tr>
    <tr>
      <th scope="row">First Strong Isolate (FSI)</th>
      <td>U+2068</td>
      <td><code>&#x26;#x2068;</code></td>
      <td><code>dir="auto"</code></td>
      <td>
        Isolates the content and sets the base direction according to the first
        strongly-typed directional character in the embedded content
      </td>
    </tr>
    <tr>
      <th scope="row">Left-to-Right Embedding (LRE)</th>
      <td>U+202A</td>
      <td><code>&#x26;#x202A;</code></td>
      <td><code>dir="ltr"</code></td>
      <td>
        Sets the base direction to LTR but allows the embedded text to interact
        with the surrounding content; this risks the effect spilling over to the
        outer content
      </td>
    </tr>
    <tr>
      <th scope="row">Right-to-Left Embedding (RLE)</th>
      <td>U+202B</td>
      <td><code>&#x26;#x202B;</code></td>
      <td><code>dir="rtl"</code></td>
      <td>
        Sets the base direction to RTL, but lets the embedded text interact with
        the surrounding content, risking spillover effects
      </td>
    </tr>
    <tr>
      <th scope="row">Left-to-Right Override (LRO)</th>
      <td>U+202D</td>
      <td><code>&#x26;#x202D;</code></td>
      <td><code>&#x3C;bdo dir="ltr"></code></td>
      <td>
        Overrides the BiDi algorithm, displaying the characters in memory order,
        from left to right
      </td>
    </tr>
    <tr>
      <th scope="row">Right-to-Left Override (RLO)</th>
      <td>U+202E</td>
      <td><code>&#x26;#x202E;</code></td>
      <td><code>&#x3C;bdo dir="rtl"></code></td>
      <td>
        Overrides the BiDi algorithm and displays the embedded characters in
        reverse memory order, from right to left
      </td>
    </tr>
  </tbody>
</table>

<table class="standard-table">
  <caption>
    Closing Unicode BiDi algorithm control characters
  </caption>
  <thead>
    <tr>
      <th scope="row">Character</th>
      <th scope="col">Code point</th>
      <th scope="col">HTML entity</th>
      <th scope="col">Markup equivalent</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" scope="row">Pop Directional Formatting (PDF)</th>
      <td rowspan="2">U+202C</td>
      <td rowspan="2"><code>&#x26;#x202C;</code></td>
      <td>
        Closing whatever opening tag used the {{htmlattrxref("dir")}}
        attribute
      </td>
      <td>Used for RLE or LRE</td>
    </tr>
    <tr>
      <td><code>&#x3C;/bdo></code></td>
      <td>Used for RLO or LRO</td>
    </tr>
    <tr>
      <th scope="row">Pop Directional Isolate (PDI)</th>
      <td>U+2069</td>
      <td><code>&#x26;#x2069;</code></td>
      <td>
        Closing whatever opening tag used the {{htmlattrxref("dir")}}
        attribute
      </td>
      <td>Used for RLI, LRI, or FSI</td>
    </tr>
  </tbody>
</table>

## See also

- [Unicode® Standard Annex #9: Unicode Bidirectional Algorithm](https://www.unicode.org/reports/tr9/)
- [W3C: Unicode Bidirectional Algorithm basics](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- [W3C Q\&A: How to use Unicode controls for bidi text](https://www.w3.org/International/questions/qa-bidi-unicode-controls)
