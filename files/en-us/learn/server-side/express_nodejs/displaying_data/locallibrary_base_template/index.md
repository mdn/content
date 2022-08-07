---
title: LocalLibrary base template
slug: Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template
tags:
  - Express
  - Node
  - displaying data
  - part 5
  - server-side
---
Now that we understand how to extend templates using Pug, let's start by creating a base template for the project. This will have a sidebar with links for the pages we hope to create across the tutorial articles (e.g. to display and create books, genres, authors, etc.) and a main content area that we'll override in each of our individual pages.

Open **/views/layout.pug** and replace the content with the code below.

```pug
doctype html
html(lang='en')
  head
    title= title
    meta(charset='utf-8')
    meta(name='viewport', content='width=device-width, initial-scale=1')
    link(rel="stylesheet", href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css", integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z", crossorigin="anonymous")
    script(src="https://code.jquery.com/jquery-3.5.1.slim.min.js", integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj", crossorigin="anonymous")
    script(src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js", integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV", crossorigin="anonymous")
    link(rel='stylesheet', href='/stylesheets/style.css')
  body
    div(class='container-fluid')
      div(class='row')
        div(class='col-sm-2')
          block sidebar
            ul(class='sidebar-nav')
              li
                a(href='/catalog') Home
              li
                a(href='/catalog/books') All books
              li
                a(href='/catalog/authors') All authors
              li
                a(href='/catalog/genres') All genres
              li
                a(href='/catalog/bookinstances') All book-instances
              li
                hr
              li
                a(href='/catalog/author/create') Create new author
              li
                a(href='/catalog/genre/create') Create new genre
              li
                a(href='/catalog/book/create') Create new book
              li
                a(href='/catalog/bookinstance/create') Create new book instance (copy)

        div(class='col-sm-10')
          block content
```

The template uses (and includes) JavaScript and CSS from [Bootstrap](https://getbootstrap.com/) to improve the layout and presentation of the HTML page. Using Bootstrap or another client-side web framework is a quick way to create an attractive page that can scale well on different browser sizes, and it also allows us to deal with the page presentation without having to get into any of the details—we just want to focus on the server-side code here!

The layout should be fairly obvious if you've read our above [Template primer](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data#template_primer). Note the use of `block content` as a placeholder for where the content for our individual pages will be placed.

The base template also references a local CSS file (**style.css**) that provides a little additional styling. Open **/public/stylesheets/style.css** and replace its content with the following CSS code:

```css
.sidebar-nav {
  margin-top: 20px;
  padding: 0;
  list-style: none;
}
```

Now we have a base template for creating pages with a sidebar. In the next sections we will use it to define the individual pages.

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Home page](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page).
