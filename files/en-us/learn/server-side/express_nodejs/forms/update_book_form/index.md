---
title: Update Book form
slug: Learn/Server-side/Express_Nodejs/forms/Update_Book_form
tags:
  - Express
  - Forms
  - Node
  - part 6
  - server-side
---
This final subarticle shows how to define a page to update `Book` objects. Form handling when updating a book is much like that for creating a book, except that you must populate the form in the `GET` route with values from the database.

## Controller—get route

Open **/controllers/bookController.js**. Find the exported `book_update_get()` controller method and replace it with the following code.

```js
// Display book update form on GET.
exports.book_update_get = (req, res, next) => {
  // Get book, authors and genres for form.
  async.parallel(
    {
      book(callback) {
        Book.findById(req.params.id)
          .populate("author")
          .populate("genre")
          .exec(callback);
      },
      authors(callback) {
        Author.find(callback);
      },
      genres(callback) {
        Genre.find(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.book == null) {
        // No results.
        const err = new Error("Book not found");
        err.status = 404;
        return next(err);
      }
      // Success.
      // Mark our selected genres as checked.
      for (const genre of results.genres) {
        for (const bookGenre of results.book.genre) {
          if (genre._id.toString() === bookGenre._id.toString()) {
            genre.checked = "true";
          }
        }
      }
      res.render("book_form", {
        title: "Update Book",
        authors: results.authors,
        genres: results.genres,
        book: results.book,
      });
    }
  );
};
```

The controller gets the id of the `Book` to be updated from the URL parameter (`req.params.id`). It uses the `async.parallel()` method to get the specified `Book` record (populating its genre and author fields) and lists of all the `Author` and `Genre` objects.

When the operations complete it checks for any errors in the find operation, and also whether any books were found.

> **Note:** Not finding any book results is **not an error** for a search — but it is for this application because we know there must be a matching book record! The code above compares for (`results==null`) in the callback, but it could equally well have daisy chained the method [orFail()](https://mongoosejs.com/docs/api.html#query_Query-orFail) to the query.

We then mark the currently selected genres as checked and then render the **book_form.pug** view, passing variables for `title`, book, all `authors`, and all `genres`.

## Controller—post route

Find the exported `book_update_post()` controller method, and replace it with the following code.

```js
// Handle book update on POST.
exports.book_update_post = [
  // Convert the genre to an array
  (req, res, next) => {
    if (!Array.isArray(req.body.genre)) {
      req.body.genre = typeof req.body.genre === "undefined" ? [] : [req.body.genre];
    }
    next();
  },

  // Validate and sanitize fields.
  body("title", "Title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("author", "Author must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("summary", "Summary must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("isbn", "ISBN must not be empty").trim().isLength({ min: 1 }).escape(),
  body("genre.*").escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create a Book object with escaped/trimmed data and old id.
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
      isbn: req.body.isbn,
      genre: typeof req.body.genre === "undefined" ? [] : req.body.genre,
      _id: req.params.id, //This is required, or a new ID will be assigned!
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/error messages.

      // Get all authors and genres for form.
      async.parallel(
        {
          authors(callback) {
            Author.find(callback);
          },
          genres(callback) {
            Genre.find(callback);
          },
        },
        (err, results) => {
          if (err) {
            return next(err);
          }

          // Mark our selected genres as checked.
          for (const genre of results.genres) {
            if (book.genre.includes(genre._id)) {
              genre.checked = "true";
            }
          }
          res.render("book_form", {
            title: "Update Book",
            authors: results.authors,
            genres: results.genres,
            book,
            errors: errors.array(),
          });
        }
      );
      return;
    }

    // Data from form is valid. Update the record.
    Book.findByIdAndUpdate(req.params.id, book, {}, (err, thebook) => {
      if (err) {
        return next(err);
      }

      // Successful: redirect to book detail page.
      res.redirect(thebook.url);
    });
  },
];
```

This is very similar to the post route used when creating a Book. First we validate and sanitize the book data from the form and use it to create a new `Book` object (setting its `_id` value to the id of the object to update). If there are errors when we validate the data then we re-render the form, additionally displaying the data entered by the user, the errors, and lists of genres and authors. If there are no errors then we call `Book.findByIdAndUpdate()` to update the `Book` document, and then redirect to its detail page.

## View

Open **/views/book_form.pug** and update the section where the author form control is set to have the conditional code shown below.

```pug
    div.form-group
      label(for='author') Author:
      select#author.form-control(type='select' placeholder='Select author' name='author' required='true' )
        - authors.sort(function(a, b) {let textA = a.family_name.toUpperCase(); let textB = b.family_name.toUpperCase(); return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;});
        for author in authors
          if book
            //- Handle GET form, where book.author is an object, and POST form, where it is a string.
            option(
              value=author._id
              selected=(
                author._id.toString()==book.author._id
                || author._id.toString()==book.author
              ) ? 'selected' : false
            ) #{author.name}
          else
            option(value=author._id) #{author.name}
```

> **Note:** This code change is required so that the book_form can be used for both creating and updating book objects (without this, there is an error on the `GET` route when creating a form).

## Add an update button

Open the **book_detail.pug** view and make sure there are links for both deleting and updating books at the bottom of the page, as shown below.

```pug
  hr
  p
    a(href=book.url+'/delete') Delete Book
  p
    a(href=book.url+'/update') Update Book
```

You should now be able to update books from the _Book detail_ page.

## What does it look like?

Run the application, open your browser to `http://localhost:3000/`, select the _All books_ link, then select a particular book. Finally select the _Update Book_ link.

The form should look just like the _Create book_ page, only with a title of 'Update book', and pre-populated with record values.

![The update book section of the Local library application. The left column has a vertical navigation bar. The right column has a form to update the book with an heading that reads 'Update book'. There are five input fields labelled Title, Author, Summary, ISBN, Genre. Genre is a checkbox option field. There is a button labelled 'Submit' at the end.](locallibary_express_book_update_noerrors.png)

> **Note:** The other pages for updating objects can be implemented in much the same way. We've left that as a challenge.

## Next steps

- Return to [Express Tutorial Part 6: Working with forms](/en-US/docs/Learn/Server-side/Express_Nodejs/forms).
