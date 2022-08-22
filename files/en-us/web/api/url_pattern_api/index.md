---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
page-type: web-api-overview
tags:
  - API
  - Overview
  - URL
  - URLPattern
  - URL Pattern API
  - Web
  - Experimental
browser-compat: api.URLPattern
---
{{DefaultAPISidebar("URL Pattern API")}}{{SeeCompatTable}}

The URL Pattern API defines a syntax that is used to create URL pattern
matchers. These patterns can be matched against URLs or individual URL
components. The URL Pattern API is used by the {{domxref("URLPattern")}}
interface.

## Concepts and usage

The pattern syntax is based on the syntax from the
[path-to-regexp](https://github.com/pillarjs/path-to-regexp) library. Patterns
can contain:

- Literal strings which will be matched exactly.
- Wildcards (`/posts/*`) that match any character.
- Named groups (`/books/:id`) which extract a part of the matched URL.
- Non-capturing groups (`/books{/old}?`) which make parts of a pattern optional
  or be matched multiple times.
- {{jsxref("RegExp")}} groups (`/books/(\\d+)`) which make arbitrarily complex
  regex matches with a few [limitations](#regex_matchers_limitations).

You can find details about the syntax in the [pattern syntax](#pattern_syntax)
section below.

## URL Pattern API interfaces

The URL Pattern API only has a single related interface:

- {{domxref("URLPattern")}} {{Experimental_Inline}}

## Pattern syntax

The syntax for patterns is based on the
[path-to-regexp](https://github.com/pillarjs/path-to-regexp) JavaScript library.
This syntax is similar to the one used in
[Ruby on Rails](https://rubyonrails.org), or JavaScript frameworks like
[Express](https://expressjs.com/) or [Next.js](https://nextjs.org/).

### Fixed text and capture groups

Each pattern can contain a combination of fixed text and groups. The fixed text
is a sequence of characters that is matched exactly. Groups match an arbitrary
string based on matching rules. Each URL part has its own default rules that are
explained below, but they can be overwritten.

```js
// A pattern matching some fixed text
const pattern = new URLPattern({ pathname: '/books' });
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.exec('https://example.com/books').pathname.groups); // {}
```

```js
// A pattern matching with a named group
const pattern = new URLPattern({ pathname: '/books/:id' });
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.exec('https://example.com/books/123').pathname.groups); // { id: '123' }
```

### Segment wildcard

By default, a group matching the `pathname` part of the URL will match all
characters but the forward slash (`/`). In the `hostname` part, the group will
match all characters except the dot (`.`). In all other parts, the group will
match all characters. The segment wildcard is non-greedy, meaning that it will
match the shortest possible string.

### Regex matchers

Instead of using the default match rules for a group, you can use a regex for
each group. This regex defines the matching rules for the group. Below is an
example of a regex matcher on a named group that constrains the group to only
match if it contains one or more digits:

```js
const pattern = new URLPattern('/books/:id(\\d+)', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books/abc')); // false
console.log(pattern.test('https://example.com/books/')); // false
```

### Regex matchers limitations

Some regex patterns do not work as you may expect:

- Starts with `^` will only match if used at the start of the protocol portion of the URLPattern and is redundant if used.

  ```js
  // with `^` in pathname
  const pattern = new URLPattern({ pathname: '(^b)' });
  console.log(pattern.test('https://example.com/ba')); // false
  console.log(pattern.test('https://example.com/xa')); // false
  ```

  ```js
  // with `^` in protocol
  const pattern = new URLPattern({ protocol: '(^https?)' });
  console.log(pattern.test('https://example.com/index.html')); // true
  console.log(pattern.test('xhttps://example.com/index.html')); // false
  ```

  ```js
  // without `^` in protocol
  const pattern = new URLPattern({ protocol: '(https?)' });
  console.log(pattern.test('https://example.com/index.html')); // true
  console.log(pattern.test('xhttps://example.com/index.html')); // false
  ```

- Ends with `$` will only match if used at the end of the hash portion of the URLPattern and is redundant if used.

  ```js
  // with `$` in pathname
  const pattern = new URLPattern({ pathname: '(path$)' });
  console.log(pattern.test('https://example.com/path')); // false
  console.log(pattern.test('https://example.com/other')); // false
  ```

  ```js
  // with `$` in protocol
  const pattern = new URLPattern({ hash: '(hash$)' });
  console.log(pattern.test('https://example.com/#hash')); // true
  console.log(pattern.test('xhttps://example.com/#otherhash')); // false
  ```

  ```js
  // without `$` in protocol
  const pattern = new URLPattern({ hash: '(hash)' });
  console.log(pattern.test('https://example.com/#hash')); // true
  console.log(pattern.test('xhttps://example.com/#otherhash')); // false
  ```

- Lookaheads, and lookbehinds will never match any portion of the URLPattern.

  ```js
  // lookahead
  const pattern = new URLPattern({ pathname: '(a(?=b))' });
  console.log(pattern.test('https://example.com/ab')); // false
  console.log(pattern.test('https://example.com/ax')); // false
  ```

  ```js
  // negative-lookahead
  const pattern = new URLPattern({ pathname: '(a(?!b))' });
  console.log(pattern.test('https://example.com/ab')); // false
  console.log(pattern.test('https://example.com/ax')); // false
  ```

  ```js
  // lookbehind
  const pattern = new URLPattern({ pathname: '((?<=b)a)' });
  console.log(pattern.test('https://example.com/ba')); // false
  console.log(pattern.test('https://example.com/xa')); // false
  ```

  ```js
  // negative-lookbehind
  const pattern = new URLPattern({ pathname: '((?<!b)a)' });
  console.log(pattern.test('https://example.com/ba')); // false
  console.log(pattern.test('https://example.com/xa')); // false
  ```

- Parentheses need to be escaped in range expressions within URLPattern even though they don't in RegExp.

  ```js
  new URLPattern({ pathname: '([()])' }); // throws
  new URLPattern({ pathname: '([\\(\\)])' }); // ok

  new RegExp('[()]'); // ok
  new RegExp('[\\(\\)]'); // ok
  ```

### Unnamed and named groups

Groups can either be named or unnamed. Named groups are specified by prefixing
the group name with a colon (`:`). Regexp groups that are not prefixed by a
colon and a name are unnamed. Unnamed groups are numerically indexed in the match
result based on their order in the pattern.

```js
// A named group
const pattern = new URLPattern('/books/:id(\\d+)', 'https://example.com');
console.log(pattern.exec('https://example.com/books/123').pathname.groups); // { id: '123' }
```

```js
// An unnamed group
const pattern = new URLPattern('/books/(\\d+)', 'https://example.com');
console.log(pattern.exec('https://example.com/books/123').pathname.groups); // { '0': '123' }
```

### Group modifiers

Groups can also have modifiers. These are specified after the group name (or
after the regexp if there is one). There are three modifiers: `?` to make the
group optional, `+` to make the group repeat one or more times, and `*` to make
the group repeat zero or more times.

```js
// An optional group
const pattern = new URLPattern('/books/:id?', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/books/')); // false
console.log(pattern.test('https://example.com/books/123/456')); // false
console.log(pattern.test('https://example.com/books/123/456/789')); // false
```

```js
// A repeating group with a minimum of one
const pattern = new URLPattern('/books/:id+', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // false
console.log(pattern.test('https://example.com/books/')); // false
console.log(pattern.test('https://example.com/books/123/456')); // true
console.log(pattern.test('https://example.com/books/123/456/789')); // true
```

```js
// A repeating group with a minimum of zero
const pattern = new URLPattern('/books/:id*', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/books/')); // false
console.log(pattern.test('https://example.com/books/123/456')); // true
console.log(pattern.test('https://example.com/books/123/456/789')); // true
```

### Group delimiters

Patterns can also contain group delimiters. These are pieces of a pattern that
are surrounded by curly braces (`{}`). These group delimiters are not captured
in the match result like capturing groups, but can still have modifiers applied
to them, just like groups. If group delimiters are not modified by a modifier,
they are treated as if the items in them were just part of the parent pattern.
Group delimiters may not contain other group delimiters, but may contain any
other pattern items (capturing groups, regex, wildcard, or fixed text).

```js
// A group delimiter with a ? (optional) modifier
const pattern = new URLPattern('/book{s}?', 'https://example.com');
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/book')); // true
console.log(pattern.exec('https://example.com/books').pathname.groups); // {}
```

```js
// A group delimiter without a modifier
const pattern = new URLPattern('/book{s}', 'https://example.com');
console.log(pattern.pathname); // /books
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/book')); // false
```

```js
// A group delimiter containing a capturing group
const pattern = new URLPattern({ pathname: '/blog/:id(\\d+){-:title}?' });
console.log(pattern.test('https://example.com/blog/123-my-blog')); // true
console.log(pattern.test('https://example.com/blog/123')); // true
console.log(pattern.test('https://example.com/blog/my-blog')); // false
```

### Automatic group prefixing in pathnames

In patterns that match against the `pathname` part of a URL, groups get an
automatic slash (`/`) prefix added if the group definition is preceded by a
slash (`/`). This is useful for groups with modifiers, as it allows for
repeating groups to work as expected.

If you do not want automatic prefixing, you can disable it by surrounding the
group with group delimiters (`{}`). Group delimiters do not have automatic
prefixing behavior.

```js
// A pattern with an optional group, preceded by a slash
const pattern = new URLPattern('/books/:id?', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/books/')); // false
```

```js
// A pattern with a repeating group, preceded by a slash
const pattern = new URLPattern('/books/:id+', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books/123/456')); // true
console.log(pattern.test('https://example.com/books/123/')); // false
console.log(pattern.test('https://example.com/books/123/456/')); // false
```

```js
// Segment prefixing does not occur outside of pathname patterns
const pattern = new URLPattern({ hash: '/books/:id?' });
console.log(pattern.test('https://example.com#/books/123')); // true
console.log(pattern.test('https://example.com#/books')); // false
console.log(pattern.test('https://example.com#/books/')); // true
```

```js
// Disabling segment prefixing for a group using a group delimiter
const pattern = new URLPattern({ pathname: '/books/{:id}?' });
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // false
console.log(pattern.test('https://example.com/books/')); // true
```

### Wildcard tokens

The wildcard token (`*`) is a shorthand for an unnamed capturing group that
matches all characters zero or more times. You can place this anywhere in the
pattern. The wildcard is greedy, meaning that it will match the longest possible
string.

```js
// A wildcard at the end of a pattern
const pattern = new URLPattern('/books/*', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // false
console.log(pattern.test('https://example.com/books/')); // true
console.log(pattern.test('https://example.com/books/123/456')); // true
```

```js
// A wildcard in the middle of a pattern
const pattern = new URLPattern('/*.png', 'https://example.com');
console.log(pattern.test('https://example.com/image.png')); // true
console.log(pattern.test('https://example.com/image.png/123')); // false
console.log(pattern.test('https://example.com/folder/image.png')); // true
console.log(pattern.test('https://example.com/.png')); // true
```

### Pattern normalization

When a pattern is parsed it is automatically normalized to a canonical form. For
example, unicode characters are percent encoded in the pathname property,
punycode encoding is used in the hostname, default port numbers are elided,
paths like `/foo/./bar/` are collapsed to just `/foo/bar`, etc. In addition,
there are some pattern representations that parse to the same underlying
meaning, like `foo` and `{foo}`. Such cases are normalized to the simplest form.
In this case `{foo}` gets changed to `foo`.

## Examples

### Filter on a specific URL component

The following example shows how a `URLPattern` filters a specific URL component.
When the `URLPattern()` constructor is called with a structured object of
component patterns any missing components default to the `*` wildcard value.

```js
// Construct a URLPattern that matches a specific domain and its subdomains.
// All other URL components default to the wildcard `*` pattern.
const pattern = new URLPattern({
  hostname: '{*.}?example.com',
});

console.log(pattern.hostname); // '{*.}?example.com'

console.log(pattern.protocol); // '*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.pathname); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test('https://example.com/foo/bar')); // true

console.log(pattern.test({ hostname: 'cdn.example.com' })); // true

console.log(pattern.test('custom-protocol://example.com/other/path?q=1')); // true

// Prints `false` because the hostname component does not match
console.log(pattern.test('https://cdn-example.com/foo/bar'));
```

### Construct a URLPattern from a full URL string

The following example shows how to construct a `URLPattern` from a full URL
string with embedded patterns. For example, a `:` can be both the URL protocol
suffix, like `https:`, and the beginning of a named pattern group, like `:foo`.
It "just works" if there is no ambiguity between whether a character is part of
the URL syntax or part of the pattern syntax.

```js
// Construct a URLPattern that matches URLs to CDN servers loading jpg images.
// URL components not explicitly specified, like search and hash here, result
// in the empty string similar to the URL() constructor.
const pattern = new URLPattern('https://cdn-*.example.com/*.jpg');

console.log(pattern.protocol); // 'https'

console.log(pattern.hostname); // 'cdn-*.example.com'

console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

// Prints `true`
console.log(
    pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg"));

// Prints `false` because the search component does not match
console.log(
    pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1"));
```

### Constructing a URLPattern with an ambiguous URL string

The following example shows how a `URLPattern` constructed from an ambiguous
string will favor treating characters as part of the pattern syntax. In this
case the `:` character could be the protocol component suffix or it could be the
prefix for a named group in the pattern. The constructor chooses to treat this
as part of the pattern and therefore determines this is a relative pathname
pattern. Since there is no base URL the relative pathname cannot be resolved and
it throws an error.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern('data:foo*');
```

### Escaping characters to disambiguate URLPattern constructor strings

The following example shows how an ambiguous constructor string character can be
escaped to be treated as a URL separator instead of a pattern character. Here
`:` is escaped as `\\:`.

```js
// Constructs a URLPattern treating the `:` as the protocol suffix.
const pattern = new URLPattern('data\\:foo*');

console.log(pattern.protocol); // 'data'

console.log(pattern.pathname); // 'foo*'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.hostname); // ''
console.log(pattern.port); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

console.log(pattern.test('data:foobar')); // true
```

### Using base URLs for test() and exec()

The following example shows how `test()` and `exec()` can use base URLs.

```js
const pattern = new URLPattern({ hostname: 'example.com', pathname: '/foo/*' });

// Prints `true` as the hostname based in the dictionary `baseURL` property
// matches.
console.log(pattern.test({
  pathname: '/foo/bar',
  baseURL: 'https://example.com/baz',
}));

// Prints `true` as the hostname in the second argument base URL matches.
console.log(pattern.test('/foo/bar', 'https://example.com/baz'));

// Throws because the second argument cannot be passed with a dictionary input.
try {
  pattern.test({ pathname: '/foo/bar' }, 'https://example.com/baz');
} catch (e) {}

// The `exec()` method takes the same arguments as `test()`.
const result = pattern.exec('/foo/bar', 'https://example.com/baz');

console.log(result.pathname.input); // '/foo/bar'

console.log(result.pathname.groups[0]); // 'bar'

console.log(result.hostname.input); // 'example.com'
```

### Using base URLs in the URLPattern constructor

The follow example shows how base URLs can also be used to construct the
`URLPattern`. Note that the base URL in these cases is treated strictly as a URL
and cannot contain any pattern syntax itself.

Also, since the base URL provides a value for every component the resulting
`URLPattern` will also have a value for every component, even if it's the empty
string. This means you do not get the "default to wildcard" behavior.

```js
const pattern1 = new URLPattern({ pathname: '/foo/*',
                                  baseURL: 'https://example.com' });

console.log(pattern1.protocol); // 'https'
console.log(pattern1.hostname); // 'example.com'
console.log(pattern1.pathname); // '/foo/*'

console.log(pattern1.username); // ''
console.log(pattern1.password); // ''
console.log(pattern1.port); // ''
console.log(pattern1.search); // ''
console.log(pattern1.hash); // ''

// Equivalent to pattern1
const pattern2 = new URLPattern('/foo/*', 'https://example.com');

// Throws because a relative constructor string must have a base URL to resolve
// against.
try {
  const pattern3 = new URLPattern('/foo/*');
} catch (e) {}
```

### Accessing matched group values

The following example shows how input values that match pattern groups can later
be accessed from the `exec()` result object. Unnamed groups are assigned index
numbers sequentially.

```js
const pattern = new URLPattern({ hostname: '*.example.com' });
const result = pattern.exec({ hostname: 'cdn.example.com' });

console.log(result.hostname.groups[0]); // 'cdn'

console.log(result.hostname.input); // 'cdn.example.com'

console.log(result.inputs); // [{ hostname: 'cdn.example.com' }]
```

### Accessing matched group values using custom names

The following example shows how groups can be given custom names which can be
used to accessed the matched value in the result object.

```js
// Construct a URLPattern using matching groups with custom names.  These
// names can then be later used to access the matched values in the result
// object.
const pattern = new URLPattern({ pathname: '/:product/:user/:action' });
const result = pattern.exec({ pathname: '/store/wanderview/view' });

console.log(result.pathname.groups.product); // 'store'
console.log(result.pathname.groups.user); // 'wanderview'
console.log(result.pathname.groups.action); // 'view'

console.log(result.pathname.input); // '/store/wanderview/view'

console.log(result.inputs); // [{ pathname: '/store/wanderview/view' }]
```

### Custom regular expression groups

The following example shows how a matching group can use a custom regular
expression.

```js
const pattern = new URLPattern({ pathname: '/(foo|bar)' });

console.log(pattern.test({ pathname: '/foo' })); // true
console.log(pattern.test({ pathname: '/bar' })); // true
console.log(pattern.test({ pathname: '/baz' })); // false

const result = pattern.exec({ pathname: '/foo' });

console.log(result.pathname.groups[0]); // 'foo'
```

### Named group with a custom regular expression

The following example shows how to use a custom regular expression with a named
group.

```js
const pattern = new URLPattern({ pathname: '/:type(foo|bar)' });
const result = pattern.exec({ pathname: '/foo' });

console.log(result.pathname.groups.type); // 'foo'
```

### Making matching groups optional

The following example shows how to make a matching group optional by placing a
`?` modifier after it. For the pathname component this also causes any preceding
`/` character to be treated as an optional prefix to the group.

```js
const pattern = new URLPattern({ pathname: '/product/(index.html)?' });

console.log(pattern.test({ pathname: '/product/index.html' })); // true
console.log(pattern.test({ pathname: '/product' })); // true

const pattern2 = new URLPattern({ pathname: '/product/:action?' });

console.log(pattern2.test({ pathname: '/product/view' })); // true
console.log(pattern2.test({ pathname: '/product' })); // true

// Wildcards can be made optional as well.  This may not seem to make sense
// since they already match the empty string, but it also makes the prefix
// `/` optional in a pathname pattern.
const pattern3 = new URLPattern({ pathname: '/product/*?' });

console.log(pattern3.test({ pathname: '/product/wanderview/view' })); // true
console.log(pattern3.test({ pathname: '/product' })); // true
console.log(pattern3.test({ pathname: '/product/' })); // true
```

### Making matching groups repeated

The following example shows how a matching group can be made repeated by placing
`+` modifier after it. In the `pathname` component this also treats the `/`
prefix as special. It is repeated with the group.

```js
const pattern = new URLPattern({ pathname: '/product/:action+' });
const result = pattern.exec({ pathname: '/product/do/some/thing/cool' });

result.pathname.groups.action; // 'do/some/thing/cool'

console.log(pattern.test({ pathname: '/product' })); // false
```

### Making matching groups optional and repeated

The following example shows how to make a matching group that is both optional
and repeated. Do this by placing a `*` modifier after the group. Again, the
pathname component treats the `/` prefix as special. It both becomes optional
and is also repeated with the group.

```js
const pattern = new URLPattern({ pathname: '/product/:action*' });
const result = pattern.exec({ pathname: '/product/do/some/thing/cool' });

console.log(result.pathname.groups.action); // 'do/some/thing/cool'

console.log(pattern.test({ pathname: '/product' })); // true
```

### Using a custom prefix or suffix for an optional or repeated modifier

The following example shows how curly braces can be used to denote a custom
prefix and/or suffix to be operated on by a subsequent `?`, `*`, or `+`
modifier.

```js
const pattern = new URLPattern({ hostname: '{:subdomain.}*example.com' });

console.log(pattern.test({ hostname: 'example.com' })); // true
console.log(pattern.test({ hostname: 'foo.bar.example.com' })); // true
console.log(pattern.test({ hostname: '.example.com' })); // false

const result = pattern.exec({ hostname: 'foo.bar.example.com' });

console.log(result.hostname.groups.subdomain); // 'foo.bar'
```

### Making text optional or repeated without a matching group

The following example shows how curly braces can be used to denote fixed text
values as optional or repeated without using a matching group.

```js
const pattern = new URLPattern({ pathname: '/product{/}?' });

console.log(pattern.test({ pathname: '/product' })); // true
console.log(pattern.test({ pathname: '/product/' })); // true

const result = pattern.exec({ pathname: '/product/' });

console.log(result.pathname.groups); // {}
```

### Using multiple components and features at once

The following example shows how many features can be combined across multiple
URL components.

```js
const pattern = new URLPattern({
  protocol: 'http{s}?',
  username: ':user?',
  password: ':pass?',
  hostname: '{:subdomain.}*example.com',
  pathname: '/product/:action*',
});

const result = pattern.exec(
  'http://foo:bar@sub.example.com/product/view?q=12345',
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

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
- The pattern syntax used by URLPattern is similar to the syntax used by
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
