---
title: Delete Author form
slug: Learn/Server-side/Express_Nodejs/forms/Delete_author_form
page-type: learn-module-chapter
---

This subarticle shows how to define a page to delete `Author` objects.

As discussed in the [form design](/en-US/docs/Learn/Server-side/Express_Nodejs/forms#form_design) section, our strategy will be to only allow deletion of objects that are not referenced by other objects (in this case that means we won't allow an `Author` to be deleted if it is referenced by a `Book`).
In terms of implementation this means that the form needs to confirm that there are no associated books before the author is deleted.
If there are associated books, it should display them, and state that they must be deleted before the `Author` object can be deleted.

## Controller—get route

Open **/controllers/authorController.js**. Find the exported `author_delete_get()` controller method and replace it with the following code.

```js
// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    res.redirect("/catalog/authors");
  }

  res.render("author_delete", {
    title: "Delete Author",
    author: author,
    author_books: allBooksByAuthor,
  });
});
```

The controller gets the id of the `Author` instance to be deleted from the URL parameter (`req.params.id`).
It uses `await` on the promise returned by `Promise.all()` to asynchronously wait on the specified author record and all associated books (in parallel).
When both operations have completed it renders the **author_delete.pug** view, passing variables for the `title`, `author`, and `author_books`.

> **Note:** If `findById()` returns no results the author is not in the database.
> In this case there is nothing to delete, so we immediately redirect to the list of all authors.
>
> ```js
> if (author === null) {
>   // No results.
>   res.redirect("/catalog/authors");
> }
> ```

## Controller—post route

Find the exported `author_delete_post()` controller method, and replace it with the following code.

```js
// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (allBooksByAuthor.length > 0) {
    // Author has books. Render in same way as for GET route.
    res.render("author_delete", {
      title: "Delete Author",
      author: author,
      author_books: allBooksByAuthor,
    });
    return;
  } else {
    // Author has no books. Delete object and redirect to the list of authors.
    await Author.findByIdAndRemove(req.body.authorid);
    res.redirect("/catalog/authors");
  }
});
```

First we validate that an id has been provided (this is sent via the form body parameters, rather than using the version in the URL).
Then we get the author and their associated books in the same way as for the `GET` route.
If there are no books then we delete the author object and redirect to the list of all authors.
If there are still books then we just re-render the form, passing in the author and list of books to be deleted.

> **Note:** We could check if the call to `findById()` returns any result, and if not, immediately render the list of all authors.
> We've left the code as it is above for brevity (it will still return the list of authors if the id is not found, but this will happen after `findByIdAndRemove()`).

## View

Create **/views/author_delete.pug** and copy in the text below.

```pug
extends layout

block content
  h1 #{title}: #{author.name}
  p= author.lifespan

  if author_books.length

    p #[strong Delete the following books before attempting to delete this author.]

    div(style='margin-left:20px;margin-top:20px')

      h4 Books

      dl
      each book in author_books
        dt
          a(href=book.url) #{book.title}
        dd #{book.summary}

  else
    p Do you really want to delete this Author?

    form(method='POST' action='')
      div.form-group
        input#authorid.form-control(type='hidden',name='authorid', required='true', value=author._id )

      button.btn.btn-primary(type='submit') Delete
```

The view extends the layout template, overriding the block named `content`. At the top it displays the author details.
It then includes a conditional statement based on the number of **`author_books`** (the `if` and `else` clauses).

- If there _are_ books associated with the author then the page lists the books and states that these must be deleted before this `Author` may be deleted.
- If there _are no_ books then the page displays a confirmation prompt.
- If the **Delete** button is clicked then the author id is sent to the server in a `POST` request and that author's record will be deleted.

## Add a delete control

Next we will add a **Delete** control to the _Author detail_ view (the detail page is a good place from which to delete a record).

> **Note:** In a full implementation the control would be made visible only to authorized users.
> However at this point we haven't got an authorization system in place!

Open the **author_detail.pug** view and add the following lines at the bottom.

```pug
hr
p
  a(href=author.url+'/delete') Delete author
```

The control should now appear as a link, as shown below on the _Author detail_ page.

![The Author details section of the Local library application. The left column has a vertical navigation bar. The right section contains the author details with a heading that has the Author's name followed by the life dates of the author and lists the books written by the author below it. There is a button labelled 'Delete Author' at the bottom.](locallibary_express_author_detail_delete.png)

## What does it look like?

Run the application and open your browser to `http://localhost:3000/`.
Then select the _All authors_ link, and then select a particular author. Finally select the _Delete author_ link.

If the author has no books, you'll be presented with a page like this.
After pressing delete, the server will delete the author and redirect to the author list.

![The Delete Author section of the Local library application of an author who does not have any books. The left column has a vertical navigation bar. The right section contains the author's name and life dates. There is the question "Do you really want to delete this author" with a button labeled 'Delete'.](locallibary_express_author_delete_nobooks.png)

If the author does have books, then you'll be presented with a view like the following.
You can then delete the books from their detail pages (once that code is implemented!).

![The Delete Author section of the Local library application of an author who does have books under his name. The section contains the author's name and life dates of the author. There is a statement that reads "Delete the following books before attempting to delete this author" followed by the author's books. The list includes the titles of each book, as links, followed by a brief description in plain text.](locallibary_express_author_delete_withbooks.png)

> **Note:** The other pages for deleting objects can be implemented in much the same way.
> We've left that as a challenge.

## Next steps

- Return to [Express Tutorial Part 6: Working with forms](/en-US/docs/Learn/Server-side/Express_Nodejs/forms).
- Proceed to the final subarticle of part 6: [Update Book form](/en-US/docs/Learn/Server-side/Express_Nodejs/forms/Update_Book_form).
