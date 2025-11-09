---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
page-type: web-api-overview
browser-compat: api.URLPattern
spec-urls: https://urlpattern.spec.whatwg.org/
---

{{DefaultAPISidebar("URL Pattern API")}} {{AvailableInWorkers}}

The **URL Pattern API** defines a syntax that is used to create URL pattern matchers.
These patterns can be matched against URLs or individual URL components.

## Concepts and usage

Patterns are specified using the {{domxref("URLPattern")}} interface.
The pattern syntax is based on the syntax from the [path-to-regexp](https://github.com/pillarjs/path-to-regexp) library.
Patterns can contain:

- Literal strings which will be matched exactly.
- Wildcards (`/posts/*`) that match any character.
- Named groups (`/books/:id`) which extract a part of the matched URL.
- Non-capturing groups (`/books{/old}?`) which make parts of a pattern optional or be matched multiple times.
- {{jsxref("RegExp")}} groups (`/books/(\\d+)`) which make arbitrarily complex regex matches.
  _Note that the parentheses are not part of the regex but instead define their contents as a regex._
  Some APIs prohibit the use of regular expression groups in `URLPattern` objects.
  The {{domxref("URLPattern.hasRegExpGroups", "hasRegExpGroups")}} property indicates whether or not regular expression groups are used.

You can find details about the syntax in the [pattern syntax](#pattern_syntax) section below.

## Interfaces

- {{domxref("URLPattern")}}
  - : Represents a pattern that can match URLs or parts of URLs. The pattern can contain capturing groups that extract parts of the matched URL.

## Pattern syntax

The syntax for patterns is based on the [path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript library.
This syntax is similar to the one used in [Ruby on Rails](https://rubyonrails.org/), or JavaScript frameworks like [Express](https://expressjs.com/) or [Next.js](https://nextjs.org/).

### Fixed text and capture groups

Each pattern can contain a combination of fixed text and groups.
The fixed text is a sequence of characters that is matched exactly.
Groups match an arbitrary string based on matching rules.
Each URL part has its own default rules that are explained below, but they can be overwritten.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: "/books" });
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: "/books/:id" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

### Segment wildcard

By default, a group matching the `pathname` part of the URL will match all characters but the forward slash (`/`). In the `hostname` part, the group will match all characters except the dot (`.`).
In all other parts, the group will match all characters.
The segment wildcard is non-greedy, meaning that it will match the shortest possible string.

### Regex matchers

Instead of using the default match rules for a group, you can specify a regex for each group by specifying it in parentheses.
This regex defines the matching rules for the group.
Below is an example of a regex matcher on a named group that constrains the group to only match if it contains one or more digits:

```js
const pattern1 = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern1.test("https://example.com/books/123")); // true
console.log(pattern1.test("https://example.com/books/abc")); // false
console.log(pattern1.test("https://example.com/books/")); // false
```

You can also use regex when constructing a `URLPattern` with the object syntax.

```js
const pattern2 = new URLPattern({ pathname: "/books/:id(\\d+)" });
console.log(pattern2.test("https://example.com/books/123")); // true
console.log(pattern2.test("https://example.com/books/abc")); // false
console.log(pattern2.test("https://example.com/books/")); // false
```

#### Pathname matching

The `pathname` URL-part always starts with `/`.
If you omit the `/` in your regular expression the match will fail.
The example below

```js example-bad
// Doesn't match, because omits the `/`
const pattern1 = new URLPattern({ pathname: "(b.*)" });
console.log(pattern1.test("https://example.com/b")); // false
console.log(pattern1.test("https://example.com/ba")); // false
```

The following examples include the `/`:

```js example-good
// Matches URL where path is exactly "/b"
const pattern2 = new URLPattern({ pathname: "(/b)" });
console.log(pattern2.test("https://example.com/b")); // true
console.log(pattern2.test("https://example.com/ba")); // false

// Matches URL where path is /b followed by any number of characters
const pattern3 = new URLPattern({ pathname: "(/b.*)" });
console.log(pattern3.test("https://example.com/b")); // true
console.log(pattern3.test("https://example.com/ba")); // true
```

#### Start and end of line anchors

The start of line anchor (`^`) and end-of line anchor (`$`) are used to anchor patterns to the start and end of the test string, respectively.
While these can be specified for the start and end of a URL-part they are redundant.
This is because all URL-parts are implicitly preceded by the `^` anchor, and followed by the `$` anchor.

The following code demonstrates that it doesn't matter whether or not `^` is specified.
The example uses a pattern in the `protocol` URL-part, but the other parts of the URL behave the same.

```js
// with `^` in protocol
const pattern1 = new URLPattern({ protocol: "(^https?)" });
console.log(pattern1.test("https://example.com/index.html")); // true

// without `^` in protocol
const pattern2 = new URLPattern({ protocol: "(https?)" });
console.log(pattern2.test("https://example.com/index.html")); // true
```

The code below demonstrates that it doesn't matter whether or not `$` is specified.

```js
// with `$` in pathname
const pattern1 = new URLPattern({ pathname: "(/path$)" });
console.log(pattern1.test("https://example.com/path")); // true

// without `$` in pathname
const pattern2 = new URLPattern({ pathname: "(/path)" });
console.log(pattern2.test("https://example.com/path")); // true

// with `$` in hash
const pattern3 = new URLPattern({ hash: "(/hash$)" });
console.log(pattern3.test("https://example.com/#hash")); // true

// without `$` in hash
const pattern4 = new URLPattern({ hash: "(/hash)" });
console.log(pattern4.test("https://example.com/#hash")); // true
```

#### Lookahead and lookbehind assertions

[Lookahead](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) and [lookbehind](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) asserts allow you to specify that text ahead or behind the current parsing position matches a particular pattern, without that match being captured, or the characters being consumed.

There are four types of assertions:

- `(?=...)`: A positive lookahead assertion specifies a pattern that the following characters must match.
- `(?!...)`: A negative lookahead assertion specifies a pattern that the following characters must not match.
- `(?<=...)`: A positive lookbehind assertion specifies a pattern that the preceding characters must match.
- `(?<!...)`: A negative lookbehind assertion specifies a pattern that the preceding characters must not match.

Be careful when using lookahead and lookbehind assertions with `URLPattern`, as there is some behavior you may find unintuitive.
For example, you would expect the following lookahead assertion to match a `pathname` of `/ab`, but this is not what happens.

```js example-bad
const pattern = new URLPattern({ pathname: "(/a(?=b))" });
console.log(pattern.test("https://example.com/ab")); // false
```

The `URLPattern` engine matches the test string against the `pathname` pattern, first finding the match for `/a` and then asserts that the next character in the test URL is `b` — but not consuming it.
The engine continues matching the test URL at the unconsumed character `b`, but there is nothing left in the pattern to match it against, which causes the match to fail.

For the match to work the pattern has to consume all the characters in the test string.
To consume the `b` character you could add `b` to the end of the expression, a `.` to match any character, or `.*` to match all characters after the lookahead assertion:

```js example-good
// positive-lookahead
const pattern1 = new URLPattern({ pathname: "(/a(?=b).*)" });
console.log(pattern1.test("https://example.com/ab")); // true
console.log(pattern1.test("https://example.com/ax")); // false
```

The next example shows a negative lookahead match for `/a` which is not followed by `b`.
Note that the assertion is followed by `.*` to consume the character matched by the assertion.

```js
// negative-lookahead - matches /a<not b><anything>
const pattern2 = new URLPattern({ pathname: "(/a(?!b).*)" });
console.log(pattern2.test("https://example.com/ab")); // false
console.log(pattern2.test("https://example.com/ax")); // true
```

The following example shows a positive lookbehind match that matches on a pathname like `/ba`.
The pattern matches `/`, then `.` to consume the next character, followed by the assertion that the previous character was a `b`, and then an `a`.

```js
// positive-lookbehind
const pattern = new URLPattern({ pathname: "(/.(?<=b)a)" });
console.log(pattern.test("https://example.com/ba")); // true
console.log(pattern.test("https://example.com/xa")); // false
```

This example shows a negative lookbehind match that matches on a pathname like `/<not b>a`.
The pattern matches `/`, then `.` to consume the next character (`x`), followed by the assertion that the previous character was not `b`, and then an `a`.

```js
// negative-lookbehind
const pattern4 = new URLPattern({ pathname: "(/.*(?<!b)a)" });
console.log(pattern4.test("https://example.com/ba")); // false
console.log(pattern4.test("https://example.com/xa")); // true
```

#### Other regex matcher limitations

Some other regex patterns may not work as you may expect:

- Parentheses need to be escaped in range expressions within URLPattern even though they don't in RegExp.

  ```js
  new URLPattern({ pathname: "([()])" }); // throws
  new URLPattern({ pathname: "([\\(\\)])" }); // ok

  new RegExp("[()]"); // ok
  new RegExp("[\\(\\)]"); // ok
  ```

### Unnamed and named groups

Groups can either be named or unnamed. Named groups are specified by prefixing the group name with a colon (`:`).
Regex groups that are not prefixed by a colon and a name are unnamed. Unnamed groups are numerically indexed in the match result based on their order in the pattern.

```js
// A named group
const pattern = new URLPattern("/books/:id(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { id: '123' }
```

```js
// An unnamed group
const pattern = new URLPattern("/books/(\\d+)", "https://example.com");
console.log(pattern.exec("https://example.com/books/123").pathname.groups); // { '0': '123' }
```

### Group modifiers

Groups can also have modifiers.
These are specified after the group name (or after the regex if there is one).
There are three modifiers: `?` to make the group optional, `+` to make the group repeat one or more times, and `*` to make the group repeat zero or more times.

```js
// An optional group
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // false
console.log(pattern.test("https://example.com/books/123/456/789")); // false
```

```js
// A repeating group with a minimum of one
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

```js
// A repeating group with a minimum of zero
const pattern = new URLPattern("/books/:id*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/456/789")); // true
```

### Group delimiters

Patterns can also contain group delimiters. These are pieces of a pattern that are surrounded by curly braces (`{}`).
These group delimiters are not captured in the match result like capturing groups, but can still have modifiers applied to them, just like groups.
If group delimiters are not modified by a modifier, they are treated as if the items in them were just part of the parent pattern.
Group delimiters may not contain other group delimiters, but may contain any other pattern items (capturing groups, regex, wildcard, or fixed text).

```js
// A group delimiter with a ? (optional) modifier
const pattern = new URLPattern("/book{s}?", "https://example.com");
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // true
console.log(pattern.exec("https://example.com/books").pathname.groups); // {}
```

```js
// A group delimiter without a modifier
const pattern = new URLPattern("/book{s}", "https://example.com");
console.log(pattern.pathname); // /books
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/book")); // false
```

```js
// A group delimiter containing a capturing group
const pattern = new URLPattern({ pathname: "/blog/:id(\\d+){-:title}?" });
console.log(pattern.test("https://example.com/blog/123-my-blog")); // true
console.log(pattern.test("https://example.com/blog/123")); // true
console.log(pattern.test("https://example.com/blog/my-blog")); // false
```

### Automatic group prefixing in pathnames

In patterns that match against the `pathname` part of a URL, groups get an automatic slash (`/`) prefix added if the group definition is preceded by a slash (`/`).
This is useful for groups with modifiers, as it allows for repeating groups to work as expected.

If you do not want automatic prefixing, you can disable it by surrounding the group with group delimiters (`{}`).
Group delimiters do not have automatic prefixing behavior.

```js
// A pattern with an optional group, preceded by a slash
const pattern = new URLPattern("/books/:id?", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // true
console.log(pattern.test("https://example.com/books/")); // false
```

```js
// A pattern with a repeating group, preceded by a slash
const pattern = new URLPattern("/books/:id+", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
console.log(pattern.test("https://example.com/books/123/")); // false
console.log(pattern.test("https://example.com/books/123/456/")); // false
```

```js
// Segment prefixing does not occur outside of pathname patterns
const pattern = new URLPattern({ hash: "/books/:id?" });
console.log(pattern.test("https://example.com#/books/123")); // true
console.log(pattern.test("https://example.com#/books")); // false
console.log(pattern.test("https://example.com#/books/")); // true
```

```js
// Disabling segment prefixing for a group using a group delimiter
const pattern = new URLPattern({ pathname: "/books/{:id}?" });
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
```

### Wildcard tokens

The wildcard token (`*`) is a shorthand for an unnamed capturing group that matches all characters zero or more times.
You can place this anywhere in the pattern.
The wildcard is greedy, meaning that it will match the longest possible string.

```js
// A wildcard at the end of a pattern
const pattern = new URLPattern("/books/*", "https://example.com");
console.log(pattern.test("https://example.com/books/123")); // true
console.log(pattern.test("https://example.com/books")); // false
console.log(pattern.test("https://example.com/books/")); // true
console.log(pattern.test("https://example.com/books/123/456")); // true
```

```js
// A wildcard in the middle of a pattern
const pattern = new URLPattern("/*.png", "https://example.com");
console.log(pattern.test("https://example.com/image.png")); // true
console.log(pattern.test("https://example.com/image.png/123")); // false
console.log(pattern.test("https://example.com/folder/image.png")); // true
console.log(pattern.test("https://example.com/.png")); // true
```

### Trailing slashes in pathname are not matched by default

Trailing slashes in a pathname are not automatically matched.
The example below demonstrates that a `URLPattern` match for a pathname of `/books` will match `https://example.com/books` but not `https://example.com/books/` (and vice versa):

```js
const patternSlash = new URLPattern({ pathname: "/books/" });
console.log(patternSlash.test("https://example.com/books")); // false
console.log(patternSlash.test("https://example.com/books/")); // true

const patternNoSlash = new URLPattern({ pathname: "/books" });
console.log(patternNoSlash.test("https://example.com/books")); // false
console.log(patternNoSlash.test("https://example.com/books/")); // true
```

If you want to match both then you need to use a match pattern that allows either.
The easiest approach is to use a [group delimiter](#group_delimiters) that contains a forward slash, followed by the optional modifier.
This will match the pattern with or without a terminating forward slash.

```js
const patternOptionalSlash = new URLPattern({ pathname: "/books{/}?" });
console.log(patternOptionalSlash.test("https://example.com/books")); // true
console.log(patternOptionalSlash.test("https://example.com/books/")); // true
```

### Pattern normalization

When a pattern is parsed it is automatically normalized to a canonical form.
For example, Unicode characters are [percent-encoded](/en-US/docs/Glossary/Percent-encoding) in the pathname property, punycode encoding is used in the hostname, default port numbers are elided, paths like `/foo/./bar/` are collapsed to `/foo/bar`, etc.
In addition, there are some pattern representations that parse to the same underlying meaning, like `foo` and `{foo}`.
Such cases are normalized to the simplest form.
In this case `{foo}` is normalized to `foo`, for example.

## Inheritance from a base URL

Both the match patterns defined in {{domxref("URLPattern")}} and the test URLs used in {{domxref("URLPattern.test()")}} and {{domxref("URLPattern.exec()")}} allow the inputs to be specified with an optional base URL (this base URL is a separate parameter when specifying the URL as a string, and a separate property when specifying the URL as an object).

If a base URL is defined then URL-parts _may_ be inherited from the base URL and used to set parts of the pattern or test URL.
URL resolution is much the same as you would expect when resolving a {{domxref("URL")}} that is specified with a base URL.

The `username` and `password` are never inherited from the base URL.

Only URL parts that are "more specific" than the most-specific part defined in the input will be inherited from the base URL.
The following lists show the order of specificity:

- `protocol` (most specific), `hostname`, `port`, `pathname`, `search`, `hash`
- `protocol`, `hostname`, `port`, `username`, `password`

What this means, for example, is that if the `protocol` is specified in the input URL, then nothing is more specific, so nothing will be inherited from the base URL.
However if the `pathname` part is specified in the input, the `protocol`, `hostname` and `port` may be inherited from the base URL, but the `search` and `hash` will not.

Note that URL components that are not specified in the string/input object or inherited from the base URL will default to the wildcard value (`"*"`) for a `URLPattern` and to the empty string (`""`) for a test URL.

## Case sensitivity

The URL Pattern API treats many parts of the URL as case-sensitive by default when matching.
In contrast, many client-side JavaScript frameworks use case-insensitive URL matching.
An `ignoreCase` option is available on the {{domxref("URLPattern.URLPattern", "URLPattern()")}} constructor to enable case-insensitive matching if desired.

```js
// Case-sensitive matching by default
const pattern = new URLPattern("https://example.com/2022/feb/*");
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // false
```

Setting the `ignoreCase` option to `true` in the constructor switches all matching operations to case-insensitive for the given pattern:

```js
// Case-insensitive matching
const pattern = new URLPattern("https://example.com/2022/feb/*", {
  ignoreCase: true,
});
console.log(pattern.test("https://example.com/2022/feb/xc44rsz")); // true
console.log(pattern.test("https://example.com/2022/Feb/xc44rsz")); // true
```

## Examples

### Filter on a specific URL component

The following example shows how a `URLPattern` filters a specific URL component.
When the `URLPattern()` constructor is called with a structured object of component patterns any missing components default to the `*` wildcard value.

```js
// Construct a URLPattern that matches a specific domain and its subdomains.
// All other URL components default to the wildcard `*` pattern.
const pattern = new URLPattern({
  hostname: "{*.}?example.com",
});

console.log(pattern.hostname); // '{*.}?example.com'

console.log(pattern.protocol); // '*'
console.log(pattern.port); // '*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.pathname); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("https://example.com/foo/bar")); // true
console.log(pattern.test({ hostname: "cdn.example.com" })); // true
console.log(pattern.test("custom-protocol://example.com/other/path?q=1")); // true

// Prints `false` because the hostname component does not match
console.log(pattern.test("https://cdn-example.com/foo/bar"));
```

### Construct a URLPattern from a full URL string

The following example shows how to construct a `URLPattern` from a full URL string with embedded patterns.
For example, a `:` can be both the URL protocol suffix, like `https:`, and the beginning of a named pattern group, like `:foo`.
It "just works" if there is no ambiguity between whether a character is part of the URL syntax or part of the pattern syntax.

```js
// Construct a URLPattern that matches URLs to CDN servers loading jpg images.
// URL components not explicitly specified result in the wild string ("*")
const pattern = new URLPattern("https://cdn-*.example.com/*.jpg");

console.log(pattern.protocol); // 'https'
console.log(pattern.hostname); // 'cdn-*.example.com'
console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

// `true`
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg"),
);

// `true` because the search pattern defaults to wildcard
console.log(
  pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1"),
);
```

### Constructing a URLPattern with an ambiguous URL string

The following example shows how a `URLPattern` constructed from an ambiguous string will favor treating characters as part of the pattern syntax.
In this case the `:` character could be the protocol component suffix or it could be the prefix for a named group in the pattern.
The constructor chooses to treat this as part of the pattern and therefore determines this is a relative pathname pattern.
Since there is no base URL the relative pathname cannot be resolved and it throws an error.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern("data:foo*");
```

### Escaping characters to disambiguate URLPattern constructor strings

The following example shows how an ambiguous constructor string character can be escaped to be treated as a URL separator instead of a pattern character.
Here `:` is escaped as `\\:`.

```js
// Constructs a URLPattern treating the `:` as the protocol suffix.
const pattern = new URLPattern("data\\:foo*");

console.log(pattern.protocol); // 'data'
console.log(pattern.pathname); // 'foo*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.hostname); // ''
console.log(pattern.port); // ''
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test("data:foobar")); // true
```

### Using base URLs for test() and exec()

The following example shows how `test()` and `exec()` can use base URLs.

```js
const pattern = new URLPattern({ hostname: "example.com", pathname: "/foo/*" });

console.log(pattern.protocol); // '*'
console.log(pattern.pathname); // '/foo/*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.hostname); // 'example.com'
console.log(pattern.port); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

// `true` as the hostname is inherited from `baseURL` property
// (so is the protocol, but that is matched by the pattern wildcard)
console.log(
  pattern.test({
    pathname: "/foo/bar",
    baseURL: "https://example.com/baz",
  }),
);

// Prints `true` as the hostname in the second argument base URL matches.
console.log(pattern.test("/foo/bar", "https://example.com/baz"));

// Throws because the second argument cannot be passed with the object input.
try {
  pattern.test({ pathname: "/foo/bar" }, "https://example.com/baz");
} catch (e) {}

// The `exec()` method takes the same arguments as `test()`.
const result = pattern.exec("/foo/bar", "https://example.com/baz");
console.log(result.pathname.input); // '/foo/bar'
console.log(result.pathname.groups[0]); // 'bar'
console.log(result.hostname.input); // 'example.com'
```

### Using base URLs in the URLPattern constructor

The following example shows how base URLs can also be used to construct the `URLPattern`.
The base URL is treated strictly as a URL and cannot contain any pattern syntax itself.

The pattern only [inherits URL parts from the base URL](#inheritance_from_a_base_url) that are less specific than those in the other properties.

In this case the `pathname` is specified so the protocol and host can be inherited, but not the search, hash, username, or password.
The properties that are not inherited default to the wildcard string (`"*"`).
The exception is the port, which is set to the empty string because the _hostname_ is inherited from the base URL ([which has an implied "default port" value](/en-US/docs/Web/API/URLPattern/URLPattern#hostname_in_url_or_baseurl_affects_default_port)).

```js
const pattern1 = new URLPattern({
  pathname: "/foo/*",
  baseURL: "https://example.com",
});

console.log(pattern1.protocol); // 'https'
console.log(pattern1.hostname); // 'example.com'
console.log(pattern1.pathname); // '/foo/*'
console.log(pattern1.username); // '*'
console.log(pattern1.password); // '*'
console.log(pattern1.port); // ''
console.log(pattern1.search); // '*'
console.log(pattern1.hash); // '*'

// Equivalent to pattern1
const pattern2 = new URLPattern("/foo/*", "https://example.com");

// Throws because a relative constructor string must have a base URL to resolve
// against.
try {
  const pattern3 = new URLPattern("/foo/*");
} catch (e) {}
```

### Accessing matched group values

The following example shows how input values that match pattern groups can later be accessed from the {{domxref("URLPattern/exec","exec()")}} result object.

The `input` property is the string that is matched by the pattern: in this case it's `cdn.example.com`.
The `groups` property contains captured groups, indexed by number for unnamed groups, and name for named groups.
In this case, there is only one unnamed group for the wildcard property, with the value `cdn`.

```js
const pattern = new URLPattern({ hostname: "*.example.com" });
const result = pattern.exec({ hostname: "cdn.example.com" });

console.log(result.hostname); // {"groups": {"0": "cdn"}, "input": "cdn.example.com"}
```

### Accessing matched named group values

The following example shows how groups can be given custom names which can be used to accessed the matched value in the result object.

The match patterns in the pattern are indicated by the `:` symbol followed by a name.
The same names then appear as keys in the `groups` property, with the matching values being the matched part of the test URL.
The `input` property contains the whole part of the URL that matched the `pathname` pattern.

```js
// Construct a URLPattern using matching groups with custom names.

const pattern = new URLPattern({ pathname: "/:product/:user/:action" });
const result = pattern.exec({ pathname: "/store/wanderview/view" });

console.log(result.pathname);
/*
{
    "groups": {
        "product": "store",
        "user": "wanderview",
        "action": "view"
    },
    "input": "/store/wanderview/view"
}
*/

// These names can then be later used to access the matched values
// in the result object, such as "user" below.
console.log(result.pathname.groups.user); // 'wanderview'
```

### Regular expression with unnamed group

The following example shows how a matching group can use a regular expression to match either `/foo` or `/bar` in a test URL.
The group is unnamed, so will be referenced by an index number in the result.

```js
const pattern = new URLPattern({ pathname: "/(foo|bar)" });

console.log(pattern.test({ pathname: "/foo" })); // true
console.log(pattern.test({ pathname: "/bar" })); // true
console.log(pattern.test({ pathname: "/baz" })); // false

const result = pattern.exec({ pathname: "/foo" });
console.log(result.pathname.groups[0]); // 'foo'
```

### Regular expression with a named group

The following example shows how to use a custom regular expression with a named group.

The group is named `type`, and matches a path which is either `/foo` or `/bar`.

```js
const pattern = new URLPattern({ pathname: "/:type(foo|bar)" });
const result = pattern.exec({ pathname: "/foo" });

console.log(result.pathname.groups.type); // 'foo'
```

### Making matching groups optional

The following example shows how to make a matching group optional by placing a `?` modifier after it.

For the pathname component this also causes any preceding `/` character to be treated as an optional prefix to the group.

```js
const pattern = new URLPattern({ pathname: "/product/(index.html)?" });

console.log(pattern.test({ pathname: "/product/index.html" })); // true
console.log(pattern.test({ pathname: "/product" })); // true

const pattern2 = new URLPattern({ pathname: "/product/:action?" });

console.log(pattern2.test({ pathname: "/product/view" })); // true
console.log(pattern2.test({ pathname: "/product" })); // true
```

Wildcards can be made optional as well.
This may not seem to make sense since they already match the empty string, but it also makes the prefix `/` optional in a pathname pattern.

```js
const pattern3 = new URLPattern({ pathname: "/product/*?" });

console.log(pattern3.test({ pathname: "/product/wanderview/view" })); // true
console.log(pattern3.test({ pathname: "/product" })); // true
console.log(pattern3.test({ pathname: "/product/" })); // true
```

### Making matching groups repeated

The following example shows how a matching group can be made repeated by placing `+` modifier after it.
In the `pathname` component this also treats the `/` prefix as special, so that it effectively the start of the repeating group.

```js
const pattern = new URLPattern({ pathname: "/product/:action+" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Note that `/product` does not match because it is not followed by `/` and at least one character.

```js
console.log(pattern.test({ pathname: "/product" })); // false
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Making matching groups optional and repeated

The following example shows how to make a matching group that is both optional and repeated.
Do this by placing a `*` modifier after the group.
Again, the pathname component treats the `/` prefix as special.

It both becomes optional and is also repeated with the group.

```js
const pattern = new URLPattern({ pathname: "/product/:action*" });
const result = pattern.exec({ pathname: "/product/do/some/thing/cool" });

console.log(result.pathname);
// { "groups": { "action": "do/some/thing/cool" }, "input": "/product/do/some/thing/cool" }
```

Note that unlike the previous example, `/product` matches because the repeating segments, including `/` are optional.
However there must be at least one character to capture after a forward slash to match the repeating group.

```js
console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // false
console.log(pattern.test({ pathname: "/product/do" })); // true
console.log(pattern.test({ pathname: "/product/do/" })); // false
```

### Using a custom prefix or suffix for an optional or repeated modifier

The following example shows how curly braces (a [group delimiter](#group_delimiters)) can be with a named group to denote a custom prefix and/or suffix to be operated on by a subsequent `?`, `*`, or `+` modifier.

For example, `{:subdomain.}*` matches against any subdomain of `example.com` and the domain itself.
The match is assigned to the named group "subdomain".

```js
const pattern = new URLPattern({ hostname: "{:subdomain.}*example.com" });
const result = pattern.exec({ hostname: "foo.bar.example.com" });

console.log(pattern.test({ hostname: "example.com" })); // true
console.log(pattern.test({ hostname: "foo.bar.example.com" })); // true
console.log(pattern.test({ hostname: ".example.com" })); // false

console.log(result.hostname);
// { "groups": { "subdomain": "foo.bar" }, "input": "foo.bar.example.com" }
```

### Making text optional or repeated without a matching group

The following example shows how curly braces can be used to denote fixed text values as optional or repeated without using a matching group.

The pattern below matches either `/product` or `/products/` but because [group delimiter](#group_delimiters) are non-capturing by default, the result is not found in a corresponding match group.

```js
const pattern = new URLPattern({ pathname: "/product{/}?" });

console.log(pattern.test({ pathname: "/product" })); // true
console.log(pattern.test({ pathname: "/product/" })); // true

const result = pattern.exec({ pathname: "/product/" });
console.log(result.pathname.groups); // {}
```

### Using multiple components and features at once

The following example shows how many features can be combined across multiple URL components.

```js
const pattern = new URLPattern({
  protocol: "http{s}?",
  username: ":user?",
  password: ":pass?",
  hostname: "{:subdomain.}*example.com",
  pathname: "/product/:action*",
});

const result = pattern.exec(
  "http://foo:bar@sub.example.com/product/view?q=12345",
);

console.log(result.username.groups.user); // 'foo'
console.log(result.password.groups.pass); // 'bar'
console.log(result.hostname.groups.subdomain); // 'sub'
console.log(result.pathname.groups.action); // 'view'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
- The pattern syntax used by URLPattern is similar to the syntax used by [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
