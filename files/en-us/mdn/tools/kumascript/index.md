---
title: KumaScript
slug: MDN/Tools/KumaScript
tags:
  - Guide
  - Kuma
  - KumaScript
  - MDN Meta
  - NeedsContent
  - Site-wide
---
{{MDNSidebar}}

On the [Yari](/en-US/docs/MDN/Yari) platform that powers MDN, we still have a legacy template/macro system available called [KumaScript](https://github.com/mdn/yari/tree/main/kumascript) for automating certain aspects of content. We are hoping to stop using it some day, but until then MDN will still rely on it. This article provides basic information about using KumaScript.

### What is KumaScript?

- A way to reuse and localize content that appears repeatedly between documents (e.g., compatibility labels, section navigation, warning banners).
- A way to build documents out of content pulled from other documents.
- A way to fetch and include content from other websites and services (e.g., Bugzilla).

### What KumaScript is not

KumaScript does not

- support interactive scripting of the kind that can accept form submissions.
- have access to a database, files, or any other way to store information persistently.
- support site personalization based on the currently logged in user.
- have access to user information, only to the content and metadata of an MDN page being viewed.

## Basics

KumaScript is used on MDN via [embedded JavaScript templates](https://github.com/mde/ejs). These templates can be invoked in document content by any MDN author, through the use of macros.

A script in KumaScript is a _template_, and each template is a file in [the macros directory](https://github.com/mdn/yari/tree/main/kumascript/macros) of the `mdn/yari` repository on GitHub. A sample template might look like this:

```js
<% for (let i = 0; i < $0; i++) { %>
  Hello #<%= i %>
<% } %>
```

Invoking a template is done with a _macro_, which can be used anywhere in any page content. Invoking the above template would look like this (provided it was saved in the macros directory with a filename of `hello.ejs`):

```plain
\{{hello(3)}}
```

The output of the macro would look like this:

```
Hello #0
Hello #1
Hello #2
```

### Macro syntax

Macro syntax takes the following general form:

```plain
\{{templateName("arg0", "arg1", /* …, */ "argN")}}
```

Macro syntax follows these rules:

- Macros start and end with `\{{` and `\}}` characters.
- The first part of the macro is the name of a template. The lowercase value of this name should match the lowercase value of one of the filenames under the macros directory.
- A template can accept parameters, and this parameter list starts and ends with parentheses.
- All non-numeric parameters must be in quotes. Numbers can be left unquoted.

#### Using JSON as a macro parameter

As a semi-experimental feature (not guaranteed to work), you can supply a JSON object for the first and only parameter, like so:

```plain
\{{templateName({ "Alpha": "one", "Beta": ["a", "b", "c"], "Foo": "https:\/\/mozilla.org\/" })}}
```

The data from this macro is available in template code as an object in the `$0` argument (e.g., `$0.Alpha`, `$0.Beta`, `$0.Foo`). This also allows you to express complex data structures in macro parameters that are hard or impossible to do with a simple list of parameters.

Note that this parameter style is very picky — it must adhere to [JSON syntax](https://json.org/) exactly, which has some requirements about escaping characters that are easy to miss (e.g., all forward slashes are escaped). When in doubt, [try running your JSON through a validator](https://jsonlint.com/).

#### How to write "\\{{" in text

Since the character sequence "`\{{`" is used to indicate the start of a macro, this can be troublesome if you actually just want to use "`\{{`" and "`\}\}`" in a page. It will probably produce `DocumentParsingError` messages.

In this case, you can escape the first brace with a backslash, like so: `\\{{`.

### Template syntax

Each KumaScript template is a file under [the macros directory](https://github.com/mdn/yari/tree/main/kumascript/macros) of the `mdn/yari` repository on GitHub. You create and edit these files as you would the files of any open-source project on GitHub.

KumaScript templates are processed by an [embedded JavaScript template engine](https://ejs.co) with a few simple rules:

- Within a template, the parameters passed in from the macro are available as the variables `$0`, `$1`, `$2`, and so on. The entire list of parameters is also available in a template as the variable `arguments`.
- Most text is treated as output and included in the output stream.
- JavaScript variables and expressions can be inserted into the output stream with these blocks:

  - `<%= expr %>` — the value of a JavaScript expression is escaped for HTML before being included in output (e.g., characters like `<` and `>` are turned into `&lt;` and `&gt;`).
  - `<%- expr %>` — the value of a JavaScript expression is included in output without any escaping. (Use this if you want to dynamically build markup or use the results of another template that may include markup.)
  - It is an error to include semicolons inside these blocks.

- Anything inside a `<% %>` block is interpreted as JavaScript. This can include loops, conditionals, etc.
- Nothing inside a `<% %>` block can ever contribute to the output stream. But, you can transition from JS mode to output mode using `<% %>`—for example:

  ```js
  <% for (let i = 0; i < $0; i++) { %>
    Hello #<%= i %>
  <% } %>
  ```

  Note how the JavaScript code is contained in `<% … %>`, and output happens in the space between `%> … <%`. The `for` loop in JS can begin with one `<% %>` block, transition to output mode, and finish up in a second `<% %>` JS block.

- For more details on EJS syntax, [check out the upstream module documentation](https://ejs.co).

## Advanced Features

Beyond the basics, the KumaScript system offers some advanced features.

### Environment variables

When the wiki makes a call to the KumaScript service, it passes along some context on the current document that KumaScript makes available to templates as variables:

- `env.path`
  - : The path to the current MDN document
- `env.url`
  - : The full URL to the current MDN document
- `env.id`
  - : A short, unique ID for the current MDN document
- `env.files`
  - : An array of the files attached to the current MDN document; each object in the array is as described under [File objects](#file_objects) below
- `env.review_tags`
  - : An array of the review tags on the article ("technical", "editorial", etc.)
- `env.locale`
  - : The locale of the current MDN document
- `env.title`
  - : The title of the current MDN document
- `env.slug`
  - : The URL slug of the current MDN document
- `env.tags`
  - : An array list of tag names for the current MDN document
- `env.modified`
  - : Last modified timestamp for the current MDN document
- `env.cache_control`
  - : `Cache-Control` header sent in the request for the current MDN document, useful in deciding whether to invalidate caches

#### File objects

Each file object has the following fields:

- `title`
  - : The attachment's title
- `description`
  - : A textual description of the current revision of the file
- `filename`
  - : The file's name
- `size`
  - : The size of the file in bytes
- `author`
  - : The username of the person who uploaded the file
- `mime`
  - : The MIME type of the file
- `url`
  - : The URL at which the file can be found

#### Working with tag lists

The `env.tags` and `env.review_tags` variables return arrays of tags. You can work with these in many ways, of course, but here are a couple of suggestions.

##### Looking to see if a specific tag is set

You can look to see if a specific tag exists on a page like this:

```js
if (env.tags.indexOf("tag") !== −1) {
  // The page has the tag "tag"
}
```

##### Iterating over all the tags on a page

You can also iterate over all the tags on a page, like this:

```js
env.tag.forEach(function(tag) {
  // do whatever you need to do, such as:
  if (tag.indexOf("a") === 0) {
    // this tag starts with "a" - woohoo!
  }
});
```

### APIs and Modules

KumaScript offers some built-in methods and APIs for KumaScript macros. Macros can also use `module.exports` to export new API methods.

#### Built-in methods

This manually-maintained documentation is likely to fall out of date with the code. With that in mind, you can always check out the latest state of built-in APIs in the [KumaScript source](https://github.com/mdn/yari/tree/main/kumascript/src/api). But here is a selection of useful methods exposed to templates:

- `md5(string)`
  - : Returns an MD5 hex digest of the given string.
- `template("name", ["arg0", "arg1", …, "argN"])`

  - : Executes and returns the result of the named template with the given list of parameters.

    Example: `<%- template("warning", ["foo", "bar", "baz"]) %>`.

    Example using the `DOMxRef` macro: `<%- template("DOMxRef", ["Event.bubbles", "bubbles"]) %>`.

    This is a JavaScript function. So, if one of the parameters is an arg variable like `$2`, do not put it in quotes. Like this: `<%- template("warning", [$1, $2, "baz"]) %>`. If you need to call another template from within a block of code, do not use `<%` … `%>`. Example: `myvar = "<li>" + template("LXRSearch", ["ident", "i", $1]) + "</li>";`

- `require(name)`
  - : Loads another template as a module; any output is ignored. Anything assigned to `module.exports` in the template is returned. Used in templates like so: `<% const my_module = require('MyModule'); %>`.
- `cacheFn(key, timeout, function_to_cache)`
  - : Using the given key and cache entry lifetime, cache the results of the given function. Honors the value of `env.cache_control` to invalidate cache on `no-cache`, which can be sent by a logged-in user hitting shift-refresh.
- `request`
  - : Access to [`request/request`](https://github.com/request/request), a library for making HTTP requests. Using this module in KumaScript templates is not yet very friendly, so you may want to wrap usage in module APIs that simplify things.
- `log.debug(string)`
  - : Outputs a debug message into the script log on the page (i.e. the big red box that usually displays errors).

#### Built-in API modules

There are a set of built-in APIs that are automatically loaded and made available to every template by the environment script, as well as providing some features from the ancient legacy DekiScript system that MDN relied on many years ago.

These are used to share common variables and methods between templates:

- `kuma.*` - [Kuma](https://github.com/mdn/yari/blob/main/kumascript/src/api/kuma.js)
- `MDN.*` - [MDN:Common](https://github.com/mdn/yari/blob/main/kumascript/src/api/mdn.js)
- `page.*` - [DekiScript:Page](https://github.com/mdn/yari/blob/main/kumascript/src/api/page.js)
- `string.*` - [DekiScript:String](https://github.com/mdn/yari/blob/main/kumascript/src/api/string.js)
- `web.*` - [DekiScript:Web](https://github.com/mdn/yari/blob/main/kumascript/src/api/web.js)
- `wiki.*` - [DekiScript:Wiki](https://github.com/mdn/yari/blob/main/kumascript/src/api/wiki.js)

Other available APIs include:

- `kuma.inspect(object)`
  - : Renders any JS object as a string, handy for use with `log.debug()`. See also: [node.js `util.inspect()`](https://nodejs.org/api/util.html#util_util_inspect_object_options).
- `kuma.htmlEscape(string)`
  - : Escapes the characters `&, <, >, "` to `&amp, &lt;, &gt;, &quot;`, respectively.
- `kuma.url`
  - : See also: [node.js `url` module](https://nodejs.org/api/url.html).
- `kuma.fetchFeed(url)`
  - : Fetch an RSS feed and parse it into a JS object.

#### Creating modules

Using the built-in `require()` method, you can load a template as a module to share common variables and methods between templates. A module can be defined in a template like this:

```js
<%
module.exports = {
    add(a, b) {
        return a + b;
    }
}
%>
```

Assuming this template were saved in the macros directory as `MathLib.ejs`, you could use it in another template like so:

```js
<%
const math_lib = require("MathLib");
%>
The result of 2 + 2 = <%= math_lib.add(2, 2) %>
```

And, the output of this template would be:

```
The result of 2 + 2 = 4
```

## Tips and caveats

### Debugging

A useful tip when debugging. You can use the `log.debug()` method to output text to the scripting messages area at the top of the page that's running your template. Note that you need to be really sure to remove these when you're done debugging, as they're visible to all users! To use it, just do something like this:

```js
<%- log.debug("Some text goes here"); %>
```

You can, of course, create more complex output using script code if it's helpful.

### Caching

KumaScript templates are heavily cached to improve performance. For the most part, this works great to serve up content that doesn't change very often. But, as a logged-in user, you have two options to force a page to be regenerated, in case you notice issues with scripting:

- Hit Refresh in your browser. This causes KumaScript to invalidate its cache for the content on the current page by issuing a request with a `Cache-Control: max-age=0` header.
- Hit Shift-Refresh in your browser. This causes KumaScript to invalidate cache for the current page, as well as for any templates or content used by the current page by issuing a request with a `Cache-Control: no-cache` header.

## Cookbook

This section will list examples of common patterns for templates used on MDN, including samples of legacy DekiScript templates and their new KumaScript equivalents.

### Force templates used on a page to be reloaded

It bears repeating: To force templates used on a page to be reloaded after editing, hit Shift-Reload. Just using Reload by itself will cause the page contents to be regenerated, but using cached templates and included content. A Shift-Reload is necessary to invalidate caches beyond just the content of the page itself.

### Recovering from "Unknown Error"

Sometimes, you'll see a scripting message like this when you load a page:

```plain
Kumascript service failed unexpectedly: <class 'httplib.BadStatusLine'>
```

This is probably a temporary failure of the KumaScript service. If you Refresh the page, the error may disappear. If that doesn't work, try a Shift-Refresh. If, after a few tries, the error persists - [file an IT bug](https://bugzilla.mozilla.org/enter_bug.cgi?product=mozilla.org&format=itrequest) for Mozilla Developer Network to ask for an investigation.

### Broken wiki.languages() macros

On some pages, you'll see a scripting error like this:

```plain
Syntax error at line 436, column 461: Expected valid JSON object as the parameter of the preceding macro but…
```

If you edit the page, you'll probably see a macro like this at the bottom of the page:

```plain
\{{ wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", … }) }}
```

To fix the problem, just delete the macro. Or, replace the curly braces on either side with HTML comments `<!-- -->` to preserve the information, like so:

```html
<!-- wiki.languages({ "zh-tw": "zh_tw/Core_JavaScript_1.5_教學/JavaScript_概要", ... }) -->
```

Because Kuma supports localization differently, these macros aren't actually needed any more. But, they've been left intact in case we need to revisit the relationships between localized pages. Unfortunately, it seems like migration has failed to convert some of them properly.

### Finding the Current Page's Language

In KumaScript, the locale of the current document is exposed as an environment variable:

```js
const lang = env.locale;
```

The `env.locale` variable should be reliable and defined for every document.

### Reading the contents of a page attachment

You can read the contents of an attached file by using the `mdn.getFileContent()` function, like this:

```js
<%
  let contents = mdn.getFileContent(fileUrl);
  // do stuff with the contents…
%>
```

or

```js
<%- mdn.getFileContent(fileObject); %>
```

In other words, you may specify either the URL of the file to read or as a file object. The file objects for a page can be accessed through the array `env.files`. So, for example, to embed the contents of the first file attached to the article, you can do this:

```js
<%- mdn.getFileContent(env.files[0]); %>
```

> **Note:** You probably don't want to try to embed the contents of a non-text file this way, as the raw contents would be injected as text. This is meant to let you access the contents of text attachments.

If the file isn't found, an empty string is returned. There is currently no way to tell the difference between an empty file and a nonexistent one. But if you're putting empty files on the wiki, you're doing it wrong.

### Localizing template content

Templates are not translated like wiki pages, rather any single template might be used for any number of locales.

Templates can be localized using the `mdn.localString()` method, which takes an object containing a mapping of locales to strings. For example:

```js
<%
const text = mdn.localString({
  "en-US": "Hello world!",
  "es": "¡Hola mundo!",
  // ...
});
%>
```

Each locale may also take an object containing a mapping of keys to strings, for more than one string. For example;

```js
<%
const text = mdn.localStringMap({
  'en-US': {
    'Complete_beginners_start_here': 'Complete beginners start here!',
    'Getting_started_with_the_web': 'Getting started with the web',
  },
  'de': {
    'Complete_beginners_start_here': 'Anfänger starten hier!',
    'Getting_started_with_the_web': 'Lernen Sie das Internet kennen',
  },
  'fr': {
    'Complete_beginners_start_here': 'Bienvenue aux débutants !',
    'Getting_started_with_the_web': 'Commencer avec le Web',
  },
  // ...
});
%>
```

The `mdn.localString()` function will automatically load strings for the appropriate locale. If a string is missing for a locale, it will fall back to `en-US` for that string.  For example:

```js
<%
const s_title = mdn.localString({
  "en-US": "Firefox for Developers",
  "de": "Firefox für Entwickler",
  "es": "Firefox para desarrolladores"
});

const body = mdn.localString({
  "en-US": {
    "hello": "Hello!",
    "goodbye": "Goodbye!",
  },
  "de": {
    "hello": "Hallo!",
    "goodbye": "Auf Wiedersehen!",
  },
  "es": {
    "hello": "¡Hola!"
  }
});
%>
<%= s_title %> / <%= body['hello'] %> / <%= body['goodbye'] %>
```

Will render, for `de`:

```
Firefox für Entwickler / Hallo! / Auf Wiedersehen!
```

...and for `es`:

```
Firefox para desarrolladores / ¡Hola! / Goodbye!
```

...and for `en-US` / `ko`:

```
Firefox for Developers / Hello! / Goodbye!
```
