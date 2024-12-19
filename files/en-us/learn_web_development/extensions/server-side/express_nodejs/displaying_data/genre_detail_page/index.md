---
title: Genre detail page
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page
page-type: learn-module-chapter
---

{{LearnSidebar}}

The genre _detail_ page needs to display the information for a particular genre instance, using its automatically generated `_id` field value as the identifier.
The ID of the required genre record is encoded at the end of the URL and extracted automatically based on the route definition (**/genre/:id**).
It is then accessed within the controller via the request parameters: `req.params.id`.

The page should display the genre name and a list of all books in the genre with links to each book's details page.

## Controller

Open **/controllers/genreController.js** and require the `Book` module at the top of the file (the file should already `require()` the `Genre` module and "express-async-handler").

```js
const Book = require("../models/book");
```

Find the exported `genre_detail()` controller method and replace it with the following code.

```js
// Display detail page for a specific Genre.
exports.genre_detail = asyncHandler(async (req, res, next) => {
  // Get details of genre and all associated books (in parallel)
  const [genre, booksInGenre] = await Promise.all([
    Genre.findById(req.params.id).exec(),
    Book.find({ genre: req.params.id }, "title summary").exec(),
  ]);
  if (genre === null) {
    // No results.
    const err = new Error("Genre not found");
    err.status = 404;
    return next(err);
  }

  res.render("genre_detail", {
    title: "Genre Detail",
    genre: genre,
    genre_books: booksInGenre,
  });
});
```

We first use `Genre.findById()` to get Genre information for a specific ID, and `Book.find()` to get all books records that have that same associated genre ID.
Because the two requests do not depend on each other, we use `Promise.all()` to run the database queries in parallel (this same approach for running queries in parallel was demonstrated in the [home page](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page#controller)).

We `await` on the returned promise, and once it settles we check the results.
If the genre does not exist in the database (i.e. it may have been deleted) then `findById()` will return successfully with no results.
In this case we want to display a "not found" page, so we create an `Error` object and pass it to the `next` middleware function in the chain.

> [!NOTE]
> Errors passed to the `next` middleware function propagate through to our error handling code (this was set up when we [generated the app skeleton](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website#app.js) - for more information see [Handling Errors](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#handling_errors)).

If the `genre` is found, then we call `render()` to display the view.
The view template is **genre_detail** (.pug).
The values for the title, `genre` and `booksInGenre` are passed into the template using the corresponding keys (`title`, `genre` and `genre_books`).

## View

Create **/views/genre_detail.pug** and fill it with the text below:

```pug
extends layout

block content

  h1 Genre: #{genre.name}

  div(style='margin-left:20px;margin-top:20px')

    h2(style='font-size: 1.5rem;') Books
    if genre_books.length
      dl
        each book in genre_books
          dt
            a(href=book.url) #{book.title}
          dd #{book.summary}
    else
      p This genre has no books.
```

The view is very similar to all our other templates. The main difference is that we don't use the `title` passed in for the first heading (though it is used in the underlying **layout.pug** template to set the page title).

## What does it look like?

Run the application and open your browser to `http://localhost:3000/`. Select the _All genres_ link, then select one of the genres (e.g. "Fantasy"). If everything is set up correctly, your page should look something like the following screenshot.

![Genre Detail Page - Express Local Library site](locallibary_express_genre_detail.png)

> [!NOTE]
> You might get an error similar to the one below if `req.params.id` (or any other ID) cannot be cast to a [`mongoose.Types.ObjectId()`](https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.Types).
>
> ```bash
> Cast to ObjectId failed for value " 59347139895ea23f9430ecbb" at path "_id" for model "Genre"
> ```
>
> The most likely cause is that the ID being passed into the mongoose methods is not actually an ID.
> [`Mongoose.prototype.isValidObjectId()`](<https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.isValidObjectId()>) can be used to check whether a particular ID is valid.

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Book detail page](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page).
