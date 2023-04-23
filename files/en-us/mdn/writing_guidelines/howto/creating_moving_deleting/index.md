---
title: How to create, move, delete, and edit pages
slug: MDN/Writing_guidelines/Howto/Creating_moving_deleting
page-type: mdn-writing-guide
---

{{MDNSidebar}}

This article describes how to create, move, delete, or edit a page. In all these instances, it's a good idea to check our guidelines for [What we write](/en-US/docs/MDN/Writing_guidelines/What_we_write) to confirm if any of these actions should be taken and discuss it with the MDN Web Docs team on the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms) before proceeding.

## Creating pages

All pages on MDN Web Docs are authored in Markdown format. The content is written in a file named `index.md`, which is stored in its own unique directory. The directory name represents the name of the page. For example, if `align-content` is a new CSS property for which you want to create a new reference page, you'd create a folder in `en-us/web/css` named `align-content` and create a file called `index.md` inside it.

> **Note:** The name of the directory differs slightly from the slug of the page. Most notably, the slug follows sentence casing.

There are a lot of different [page types](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types) with certain structures and supporting page templates for them, which you can copy to get you started.

A document's `index.md` file must start with front matter that defines the `title`, `slug`, and `page-type`. All of this front matter information can be found in the aforementioned page templates. Alternatively, you might find it helpful to refer to the front matter within a similar document's `index.md`.

The general step-by-step process for creating a page would be:

1. Start a fresh, up-to-date branch to work in.

   ```sh
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-add
   ```

2. Create one or more new document folders, each with their own `index.md` files.

3. Add and commit your new files as well as push your new branch to your fork.

   ```sh
   git add files/en-us/folder/you/created
   git commit -m "appropriate message about your changes"
   git push -u origin my-add
   ```

4. Create your pull request.

## Moving pages

Moving one or more documents or an entire tree of documents is easy
because we've created a special command that takes care of the details for you:

```sh
yarn content move <from-slug> <to-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to move (e.g., `Learn/Accessibility`), as well as the slug of its new
location (e.g., `Learn/A11y`), optionally followed by the locale of the
existing document (defaults to `en-US`).

If the existing document that you'd like to move has child documents (i.e.,
it represents a document tree), the `yarn content move` command will move
the entire tree.

For example, let's say you want to move the entire
`/en-US/Learn/Accessibility` tree to `/en-US/Learn/A11y`, you'd perform the following steps:

1. You'll start a fresh branch to work in.

   ```sh
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-move
   ```

2. Perform the move (which will delete and modify existing files as well as create new files).

   ```sh
   yarn content move Learn/Accessibility Learn/A11y
   ```

3. Add and commit all of the deleted, created, and modified files as well as push your branch to your fork.

   ```sh
   git commit -a
   git push -u origin my-move
   ```

4. Create your pull request.

> **Note:** `yarn content move` automatically adds the necessary redirect information to the `_redirects.txt` file so that the old location will redirect to the new one. Don't edit the `_redirects.txt` file manually! Mistakes can easily creep in if you do. If you need to add a redirect without moving a file, talk to the MDN Web Docs team on the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms) about it.

## Deleting pages

Documents should only be removed from MDN Web Docs under special circumstances. If you are thinking about deleting pages, please discuss it with the MDN Web Docs team on the [MDN Web Docs chat rooms](/en-US/docs/MDN/Community/Communication_channels#chat_rooms) first.

Deleting one or more documents or an entire tree of documents is easy, just like moving pages, because we've created a special command that takes care of the
details for you:

```sh
yarn content delete <document-slug> [locale]
```

> **Note:** You need to use the `yarn content delete` command to delete pages from MDN Web Docs. Don't just delete their directories from the repo. The `yarn content delete` command also handles other necessary changes such as updating the `_wikihistory.json` file.

You just have to specify the slug of the existing document that you'd like
to delete (e.g., `Learn/Accessibility`), optionally followed by the locale
of the existing document (defaults to `en-US`).

If the existing document that you'd like to delete has child documents (i.e., it represents a
document tree), you must also specify the `-r, --recursive` option, otherwise
the command will fail.

For example, if you want to delete the
entire `/en-US/Learn/Accessibility` tree, you'd perform the following steps:

1. You'll start a fresh branch to work in.

   ```sh
   cd ~/repos/mdn/content
   git checkout main
   git pull mdn main
   # Run "yarn" again just to ensure you've
   # installed the latest Yari dependency.
   yarn
   git checkout -b my-delete
   ```

2. Perform the delete.

   ```sh
   yarn content delete Learn/Accessibility --recursive
   ```

3. Add a redirect. The target page can be an external URL or another page on MDN Web Docs.

   ```sh
   yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
   ```

4. Add and commit all of the deleted files as well as push your branch to your fork.

   ```sh
   git commit -a
   git push -u origin my-delete
   ```

5. Create your pull request.

> **Note:** If the slug of the page you wish to delete contains special characters, include it in quotes, like so:
>
> ```sh
> yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
> ```

Removing content from MDN Web Docs will inevitably result in updating the existing content as well. As a lot of articles link to others, the removed content will likely be referenced elsewhere. Adding the redirect will mitigate the impact of removing content; however, it's best practice to edit content to reflect the change and include the content edits along with the removal pull request.

## Editing existing pages

To edit a page, you need to find the page source in our [content](https://github.com/mdn/content) repository. The easiest way to find it is to navigate to the page you want to edit, go to the bottom of the page, and click on the "Source on GitHub" link.

### Preview changes

If you are editing the page locally, to see what your changes look like you can go to the content repo folder, execute the CLI command `yarn start`, go to `localhost:5042` in your browser, and navigate to the page and view it. Enter the title in the search box to find it easily. The previewed page will update in the browser as you edit the source.

### Attach files

To attach a file to your article, you just need to include it in the same directory as the article's `index.md` file. Include the file in your page, typically via an {{htmlelement("a")}} element.
