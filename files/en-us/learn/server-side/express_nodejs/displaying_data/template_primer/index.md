---
title: Template primer
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer
tags:
  - Express
  - Node
  - displaying data
  - part 5
  - server-side
---
A template is a text file defining the _structure_ or layout of an output file, with placeholders used to represent where data will be inserted when the template is rendered (in _Express_, templates are referred to as _views_).

## Express template choices

Express can be used with many different [template rendering engines](https://expressjs.com/en/guide/using-template-engines.html). In this tutorial we use [Pug](https://pugjs.org/api/getting-started.html) (formerly known as _Jade_) for our templates. This is the most popular Node template language, and describes itself as a "clean, whitespace-sensitive syntax for writing HTML, heavily influenced by [Haml](https://haml.info/)".

Different template languages use different approaches for defining layout and marking placeholders for data—some use HTML to define the layout while others use different markup formats that can be transpiled to HTML. Pug is of the second type; it uses a _representation_ of HTML where the first word in any line usually represents an HTML element, and indentation on subsequent lines is used to represent nesting. The result is a page definition that translates directly to HTML, but is more concise and arguably easier to read.

> **Note:** The downside of using _Pug_ is that it is sensitive to indentation and whitespace (if you add an extra space in the wrong place you may get an unhelpful error code). Once you have your templates in place, however, they are very easy to read and maintain.

## Template configuration

The _LocalLibrary_ was configured to use [Pug](https://pugjs.org/api/getting-started.html) when we [created the skeleton website](/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website). You should see the pug module included as a dependency in the website's **package.json** file, and the following configuration settings in the **app.js** file. The settings tell us that we're using pug as the view engine, and that _Express_ should search for templates in the **/views** subdirectory.

```js
// View engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
```

If you look in the views directory you will see the .pug files for the project's default views.
These include the view for the home page (**index.pug**) and base template (**layout.pug**) that we will need to replace with our own content.

```plain
/express-locallibrary-tutorial  //the project root
  /views
    error.pug
    index.pug
    layout.pug
```

## Template syntax

The example template file below shows off many of Pug's most useful features.

The first thing to notice is that the file maps the structure of a typical HTML file, with the first word in (almost) every line being an HTML element, and indentation being used to indicate nested elements. So for example, the `body` element is inside an `html` element, and paragraph elements (`p`) are within the `body` element, etc. Non-nested elements (e.g. individual paragraphs) are on separate lines.

```pug
doctype html
html(lang="en")
  head
    title= title
    script(type='text/javascript').
  body
    h1= title

    p This is a line with #[em some emphasis] and #[strong strong text] markup.
    p This line has un-escaped data: !{'<em> is emphasized</em>'} and escaped data: #{'<em> is not emphasized</em>'}.
      | This line follows on.
    p= 'Evaluated and <em>escaped expression</em>:' + title

    <!-- You can add HTML comments directly -->
    // You can add single line JavaScript comments and they are generated to HTML comments
    //- Introducing a single line JavaScript comment with "//-" ensures the comment isn't rendered to HTML

    p A line with a link
      a(href='/catalog/authors') Some link text
      |  and some extra text.

    #container.col
      if title
        p A variable named "title" exists.
      else
        p A variable named "title" does not exist.
      p.
        Pug is a terse and simple template language with a
        strong focus on performance and powerful features.

    h2 Generate a list

    ul
      each val in [1, 2, 3, 4, 5]
        li= val
```

Element attributes are defined in parentheses after their associated element. Inside the parentheses, the attributes are defined in comma- or whitespace- separated lists of the pairs of attribute names and attribute values, for example:

- `script(type='text/javascript')`, `link(rel='stylesheet', href='/stylesheets/style.css')`
- `meta(name='viewport' content='width=device-width initial-scale=1')`

The values of all attributes are _escaped_ (e.g. characters like "`>`" are converted to their HTML code equivalents like "`&gt;"`) to prevent JavaScript injection or cross-site scripting attacks.

If a tag is followed by the equals sign, the following text is treated as a JavaScript _expression_. So for example, in the first line below, the content of the `h1` tag will be _variable_ `title` (either defined in the file or passed into the template from Express). In the second line the paragraph content is a text string concatenated with the `title` variable. In both cases the default behavior is to _escape_ the line.

```pug
h1= title
p= 'Evaluated and <em>escaped expression</em>:' + title
```

If there is no equals symbol after the tag then the content is treated as plain text. Within the plain text you can insert escaped and unescaped data using the `#{}` and `!{}` syntax respectively, as shown below. You can also add raw HTML within the plain text.

```pug
p This is a line with #[em some emphasis] and #[strong strong text] markup.
p This line has an un-escaped string: !{'<em> is emphasized</em>'}, an escaped string: #{'<em> is not emphasized</em>'}, and escaped variables: #{title}.
```

> **Note:** You will almost always want to escape data from users (via the **`#{}`** syntax). Data that can be trusted (e.g. generated counts of records, etc.) may be displayed without escaping the values.

You can use the pipe ('**|**') character at the beginning of a line to indicate "[plain text](https://pugjs.org/language/plain-text.html)". For example, the additional text shown below will be displayed on the same line as the preceding anchor, but will not be linked.

```pug
a(href='http://someurl/') Link text
| Plain text
```

Pug allows you to perform conditional operations using `if`, `else` , `else if` and `unless`—for example:

```pug
if title
  p A variable named "title" exists
else
  p A variable named "title" does not exist
```

You can also perform loop/iteration operations using `each-in` or `while` syntax. In the code fragment below we've looped through an array to display a list of variables (note the use of the 'li=' to evaluate the "val" as a variable below. The value you iterate across can also be passed into the template as a variable!

```pug
ul
  each val in [1, 2, 3, 4, 5]
    li= val
```

The syntax also supports comments (that can be rendered in the output—or not—as you choose), mixins to create reusable blocks of code, case statements, and many other features. For more detailed information see [The Pug docs](https://pugjs.org/api/getting-started.html).

## Extending templates

Across a site, it is usual for all pages to have a common structure, including standard HTML markup for the head, footer, navigation, etc. Rather than forcing developers to duplicate this "boilerplate" in every page, _Pug_ allows you to declare a base template and then extend it, replacing just the bits that are different for each specific page.

For example, the base template **layout.pug** created in our [skeleton project](/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website) looks like this:

```pug
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    block content
```

The `block` tag is used to mark up sections of content that may be replaced in a derived template (if the block is not redefined then its implementation in the base class is used).

The default **index.pug** (created for our skeleton project) shows how we override the base template. The `extends` tag identifies the base template to use, and then we use `block section_name` to indicate the new content of the section that we will override.

```pug
extends layout

block content
  h1= title
  p Welcome to #{title}
```

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [The LocalLibrary base template](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template).
