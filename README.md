# Contributing to the content of MDN Web Docs

:tada: First of all, thanks for taking the time to contribute to
[MDN Web Docs](https://developer.mozilla.org)! :tada:

The following is a set of guidelines for contributing to the
[content of MDN Web Docs](https://github.com/mdn/content), which is
hosted within the [MDN Organization](https://github.com/mdn) on GitHub.

> **Note:** Just want to find a task and jump in?
  See [Getting started on MDN](https://developer.mozilla.org/en-US/docs/MDN/Community/Contributing/Getting_started)
  for an overview of how to join, and [Contributing to MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute)
  for a filtered list of tasks.

## Code of Conduct

Everyone participating in this project is expected to follow our
[Code of Conduct](CODE_OF_CONDUCT.md).

## License

When contributing to the content you agree to license your contributions
according to [our license](LICENSE.md).

## Making contributions

A good place to learn about general guidelines for contributing to
[MDN Web Docs](https://developer.mozilla.org) is the
[Guidelines document](https://developer.mozilla.org/en-US/docs/MDN/Guidelines).
For example, you can find out more about MDN's writing-style guidelines via the
[Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide).

### Prerequisite knowledge

We expect contributors to MDN to have a certain amount of prerequisite knowledge
before they start working on the content. If you are new to the following
topics, we'd advise you to look at the provided links to help you get up to
speed:

- Web technologies: If you are new to HTML, CSS, JavaScript, etc., check out our
  [Learn web development](https://developer.mozilla.org/en-US/docs/Learn) tutorials.
- Open source: If you've never contributed to an open source project before,
  have a read of [Basic etiquette for open source projects](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Open_source_etiquette).
- Git and GitHub: If you are unfamiliar with these tools, [GitHub for complete beginners](https://developer.mozilla.org/en-US/docs/MDN/Contribute/GitHub_beginners)
  will get you started.
- MDN's repo structures: If you are not sure what repos to edit to make changes
  to the different parts of MDN's content,
  [Where is everything on MDN?](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Where_is_everything)
  will point you towards the correct places.

### Setup

No matter how you wish to contribute, you'll need
[a GitHub account](https://github.com/join) if you don't have one already.
If you're not familiar with [`git`](https://git-scm.com) and
[`GitHub`](https://github.com), you might find the
[MDN Git and GitHub document](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub)
helpful.

There are several ways forward from this point. It's up to you.
Here are some options:

1. Go to <https://github.com/mdn/content> and just use the
[GitHub UI](https://docs.github.com/en/repositories/working-with-files/managing-files).
This is the easiest approach if you just want to make a simple change to
a single file, like fixing a typo.
1. Install and use the [GitHub Desktop](https://docs.github.com/en/get-started/using-github/github-desktop)
1. Install and use the [GitHub CLI](https://docs.github.com/en/github-cli/github-cli/about-github-cli)
1. [Install `git`](https://git-scm.com/downloads) and use it from the
command line. You might find these resources helpful:
    - [Using Git](https://docs.github.com/en/get-started)
    - [`git` cheatsheet](https://training.github.com/)

If you choose an option other than the GitHub UI, you want to install
[Node.js (version >=12.11)](https://nodejs.org) and [`yarn`](https://classic.yarnpkg.com/en/docs/install).

### Fundamental concepts

These are some important things to keep in mind about the MDN content.

- **A document's main content is written in an `index.html` or an `index.md`
file** — We're currently in the process of converting our content from HTML
into Markdown. Pages that are in HTML have their content in a file called
"index.html". Pages that are in Markdown  have their content in a file called
"index.md".
- **Documents are folders** —  Documents are always
represented by a folder (e.g., [`files/en-us/web/javascript`](files/en-us/web/javascript)),
and that folder will contain the content of that specific document as an
`index.html` or `index.md` file (e.g., [`files/en-us/web/javascript/index.md`](files/en-us/web/javascript/index.md)).
- **Documents are hierarchical** - A document folder may contain other folders,
where those folders would represent child documents (e.g., [`files/en-us/web/javascript/closures/index.md`](files/en-us/web/javascript/closures/index.md)).
- **Document folders may contain image files** — A document folder may also
contain image files, which are referenced within that document's
`index.html` or `index.md` file.
- **All redirects are specified in a single file** — All of the redirects
are specified within [`files/en-us/_redirects.txt`](files/en-us/_redirects.txt),
one redirect per line. Each line specifies a `from` and `to` URI
separated by whitespace. When you move a document, you'll need to add a
redirect to this file specifying that its old URI now redirects to its new URI.
Both of these tasks are done using the `yarn content move` tool — see
[Moving one or more documents](#moving-one-or-more-documents).
- **Don't edit the `_redirects.txt` file manually!**
If both an `index.html` or `index.md` file and a redirect exist for a document, the
document takes precedence and the redirect is ignored.
- **A document's `index.html` or `index.md` starts with "front-matter"** — Each
document's `index.html` or `index.md` file must begin with some [YAML](https://en.wikipedia.org/wiki/YAML)
called front-matter that defines some important information about the
document: `title`, `slug`, and [`tags`](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Tag)
(if any). Here's an example that shows the front-matter from the
[JavaScript landing page](files/en-us/web/javascript/index.md):

    ```yaml
    ---
    title: JavaScript
    slug: Web/JavaScript
    tags:
      - JavaScript
      - Landing
      - Landing page
      - Learn
      - 'l10n:priority'
    ---
    ```

### Simple changes

If you just want to make a simple change to a single file, like fixing a typo,
the GitHub UI is the simplest way to do that. For example, if you've found
a typo within the [JavaScript landing page](https://developer.mozilla.org/en-US/docs/Web/JavaScript),
you can sign in to GitHub, go to <https://github.com/mdn/content>,
navigate to the source file `files/en-us/web/javascript/index.md`,
and then click on the edit (pencil) button.

> **Tip:** Click the **Source on GitHub** link in the footer of any MDN page
  to jump to its source file on GitHub.

From there the GitHub UI will take your hand and
[walk you through the rest](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files),
like automatically creating a
[fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
and branch to commit your changes to, as well as helping you reach the
ultimate goal, a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
Your pull request represents the work you want to be reviewed,
hopefully approved, and then merged into the `main` branch of this repository.

> **Note:** See the [pull request etiquette section](#pull-request-etiquette)
  for more details on creating and handling pull requests successfully.

If you're not certain of the changes that you want to make, get in touch
with us first!
You can [chat with us](https://chat.mozilla.org/#/room/#mdn:mozilla.org) or
[file an issue](https://github.com/mdn/content/issues).

You may be asked to further edit files in your pull request.
To open a file for editing, select the _Files changed_ tab on the PR,
scroll down to the section for the file you want to edit, and then select
the "three dots" icon (at the top right of the section).
Choose **Edit file** from the popup menu to start editing the file.
After editing, your changes will result in a new commit.

### More substantial changes

If you need to do some work that requires changes to more than one file, like
moving one or more documents, the GitHub UI is not very efficient.
You'd have to make a separate pull request for every page you want to change.
Instead, you're going to have to use `git` or one of the other
`git`-based approaches like the
[GitHub Desktop](https://docs.github.com/en/get-started/using-github/github-desktop).

1. You'll want to create a
[fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
of this repository, so you can freely experiment with branches and
changes in your own copy before submitting your changes as a
[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
Let's assume your GitHub username is `octocat`. Your fork would be a copy
of this repository but in your own account, so
`https://github.com/octocat/content`.

1. Once you've created your fork on GitHub, you'll want to clone it locally.
For example, assuming again that your GitHub username is `octocat`, you
would do something like the following:

    ```sh
    cd ~/repos
    git clone git@github.com:octocat/content.git mdn/content
    ```

1. You'll also want to create a
[`remote`](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
to the main repository
([https://github.com/mdn/content](https://github.com/mdn/content)),
which you'll use to keep your
local clone as well as your fork (`https://github.com/octocat/content`)
up-to-date. For these examples, we'll name
it `mdn`, but you can name it anything you'd like.

    ```sh
    cd ~/repos/mdn/content
    git remote add mdn git@github.com:mdn/content.git
    git remote -v
    ```

1. When you run the `git remote -v` command above, you'll see that you have
two remotes: `mdn` and `origin`. The `origin` remote is the default name
that `git` has assigned to your fork (`https://github.com/octocat/content`).

1. Once you've created your local clone, there's no need to do that
again next time you want to make a contribution. However, each time before
you start a new chunk of work make sure you update your local clone.
The following checks-out your local clone's `main` branch, fetches the
latest content from the `main` branch of the `mdn` repository and merges
it into your local `main` branch, and finally checks out a new branch
called `my-work` (you can call it anything you'd like) for you to work within.
When you're ready, you'll push your `my-work` branch to your fork
and use it to make a pull request.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    git checkout -b my-work
    ```

1. Next, you'll want to start the local preview service, so you can see
the changes you'll make as they would look in production. Once started,
this local preview service is available at `http://localhost:5042/`
within your browser.

    ```sh
    # Switch to a separate terminal.
    cd ~/repos/mdn/content
    yarn
    yarn start
    ```

1. When browsing a page locally, you can press the **Open in your editor**
   button to edit the associated `index.html` or `index.md` file.

   To specify VS Code as your preferred editor, create a file named `.env` in
   the root of your local `content` directory that contains the following line:

   ```sh
   EDITOR=code
   ```

   You can create the file from a terminal using `bash` or PowerShell with the
   command `echo 'EDITOR=code' >> .env`.

   `EDITOR` is an environment variable. You can set it to any editor you like
   using the normal mechanism for your operating system/shell (i.e. you don't
   have to use the `.env` file or VS Code).

1. Make your desired changes to one or more `index.html` or `index.md` files
using your preferred code editor. **When thinking about your desired changes,
it's important to keep the following in mind:**
    - **Make sure you've read the
    [MDN guidelines](https://developer.mozilla.org/en-US/docs/MDN/Guidelines),
    including the
    [Writing style guide](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Writing_style_guide).**
    - **If you're editing a Markdown file, see the
    [guide to writing Markdown for MDN](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN).**
    - **Large chunks of work can be difficult to review, so try to group your
    changes into the smallest logical chunks that make sense, and create a
    separate pull request for each logical chunk.**

1. Once you've made and saved your changes, open a browser, and navigate
to the page(s) you've changed. For example, if you changed
`files/en-us/web/javascript/index.md`, open
`http://localhost:5042/en-us/docs/web/javascript` in your browser.

1. You might have noticed that at the top of each page that you preview,
for example the `http://localhost:5042/en-us/docs/web/javascript` page,
there is a `Show flaws` button. Click on that button to see if your
changes have introduced flaws on the page. You can also fix flaws on a
particular page by running the command:

    ```sh
    yarn content flaws <slug>
    ```

1. Once you're happy with your changes, add and commit them to your branch,
and then push the branch to your fork. Remember, the default name that
`git` assigned to the remote that represents your fork is `origin`.

    ```sh
    cd ~/repos/mdn/content
    git add .
    git commit
    git push -u origin my-work
    ```

1. You're now ready to create a
[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

1. Once you've created your pull request, sit back, relax, and wait for
a review.
**You do not need to request a review. One or more reviewers will be selected for**
**you automatically.**
Your pull request will have to be reviewed and eventually approved before
it's merged into the `main` branch, and then later (within 48 hours)
published on [MDN Web Docs](https://developer.mozilla.org). Along the way,
you may be asked, not only
to answer questions about your work, but to make changes as well. Don't
worry, that's a common and natural part of the process.
**See the [pull request etiquette section](#pull-request-etiquette) for more details**
**on creating and handling pull requests successfully.**

### Pull request etiquette

Here are some important rules of etiquette to remember when working
with pull requests.

1. When you submit a pull request, a number of tests are automatically run
as GitHub Actions (see [.github/workflows](.github/workflows)). If
one or more of these tests fail, it is your responsibility to try and
resolve the underlying issue(s). If you don't know how to resolve the
underlying issue(s), you can ask for help. Your pull request will not be
approved and merged if these tests are failing.

1. If your pull request has merge conflicts with the `main` branch (GitHub
checks for this automatically and notifies you), you are responsible for
resolving them. You can do this by merging the `main` branch into your
branch (`git pull mdn main`), and then pushing the updated branch to
your fork (`git push`).

1. An alternative strategy is `git rebase` of `main` on your branch.
This will rewrite the git history and might confuse reviewers as notifications
from GitHub lead to nowhere. Your changes are replayed on top of the current
main branch at that point in time.

1. Each pull request should contain a single logical change, or related set
of changes that make sense to submit together. If a pull request becomes
too large or contains too many unrelated changes, it becomes too difficult
to review, and may begin to look suspicious (it is easier to hide malicious
changes in a large pull request). In such cases, the reviewer has the right
to close your pull request, and ask that you submit a separate pull request
for each logical set of changes that belong together.

1. If your pull request contains any kind of significant complexity
(it contains technical changes, and isn't just a typo fix, grammatical
improvement, or formatting/structural change), please describe why you're
making the change and anything else we need to know about it.
   - If the pull request is simple (it is really clear what has been
   changed and why, and the change is obviously a good thing), you can do
   this in your pull request's description.
   - If the pull request is complex (the changes and the reasoning behind
   them need a bit more explanation), then the requestor should file an
   issue describing the intended change first, and seek discussion/approval
   as needed. When the time is right to submit the PR, they should
   reference the issue (or an existing issue that describes the motivation
   for the change) in the PR. You can reference an existing issue
   using `#` followed by the issue's ID, for example `#1234`.
   - Pull requests should not contain large amounts of grammar updates.
   Seemingly insignificant changes can change the meaning of technical
   content, so these need a careful review. Keep in mind that MDN contains
   technical documentation; you should not report merely basic improvements
   in the grammar but only cases where the grammar is incorrect.

1. Do not re-open a pull request that a reviewer has closed.

### Adding a new document

Adding a new document is relatively straightforward, especially if you can
start by copying the `index.html` or `index.md` of a similar document.
There are only a few things to keep in mind:

- Documents must be authored in Markdown.
- Remember that a document is represented by an `index.html` or `index.md` file
  within its own folder.
- Determine where in the document hierarchy your document belongs. For
  example, if you're
  creating a new CSS document for a new property `foo`, you'll want to create
  a new folder
  `files/en-us/web/css/foo/` and its `files/en-us/web/css/foo/index.md` file.
- Remember that a document's `index.html` or `index.md` file must start with
  front-matter that defines the `title`, `slug`, and
  [`tags`](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Tag)
  (if any) for the document. You might find it helpful to refer
  to the front-matter within a similar document's `index.html` or `index.md`.

As we outlined above, the step-by-step process in general would be:

1. Start a fresh, up-to-date branch to work within:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-add
    ```

1. Create one or more new document folders, each with their own `index.md` file.

1. Add and commit your new files, as well as push your new branch to your fork:

    ```sh
    git add files/en-us/folder/you/created
    git commit
    git push -u origin my-add
    ```

1. And finally create your
[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

### Moving one or more documents

Moving one or more documents, or an entire tree of documents is easy,
because we've created a special command that takes care of the details for you:

```sh
yarn content move <from-slug> <to-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to move (e.g., `Learn/Accessibility`), as well as the slug of its new
location (e.g., `Learn/A11y`), optionally followed by the locale of the
existing document (defaults to `en-US`).
If the existing document that you'd like to move has child documents (i.e.
it represents a document tree), the `yarn content move` command will move
the entire tree. For example, let's say you want to move the entire
`/en-US/Learn/Accessibility` tree to `/en-US/Learn/A11y`:

1. First, as we've outlined above, you'll start a fresh branch to work within:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-move
    ```

1. Perform the move (which will delete and modify existing files, as well
as create new files):

    ```sh
    yarn content move Learn/Accessibility Learn/A11y
    ```

1. Add and commit all of the deleted, created, and modified files, as well as
push your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-move
    ```

1. Now you're ready to create your [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

**Important: `yarn content move` automatically adds the necessary redirect
information to the `_redirects.txt` file so that the old location will redirect
to the new one. Don't edit the `_redirects.txt` file manually!
mistakes can easily creep in if you do. If you need to add a redirect without
moving a file, talk to us about it.**

### Deleting a document

Deleting one or more documents, or an entire tree of documents is also easy,
again because we've created a special command that takes care of the
details for you:

```sh
yarn content delete <document-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to delete (e.g., `Learn/Accessibility`), optionally followed by the locale
of the existing document (defaults to `en-US`). If the existing document
that you'd like to delete has child documents (i.e. it represents a
document tree), you must also specify the `-r, --recursive` option, or
the command will fail.

**Important: you need to use the `delete` command to delete MDN documents. Don't
just delete their directories from the repo, as `delete` also handles other
necessary changes such as updating the `_wikihistory.json` file.**

For example, let's say you want to delete the
entire `/en-US/Learn/Accessibility` tree:

1. First, as we've outlined above, you'll start a fresh branch to work in:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-delete
    ```

1. Perform the delete:

    ```sh
    yarn content delete Learn/Accessibility --recursive
    ```

1. [Add a redirect](#redirecting-a-document) (if needed).
1. Add and commit all of the deleted files, as well as
push your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-delete
    ```

1. Now you're ready to create your [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

> **Note:** If the slug of the page you wish to delete contain special
  characters, include it in quotes:

```sh
yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
```

### Redirecting a document

If you are [moving a document](#moving-one-or-more-documents) as shown
above you don't need to create a redirect. However, you may need to when
[deleting a document](#deleting-a-document) or otherwise fixing up a broken link.

The best way to do this is to use the `yarn content add-redirect` command:

1. Start a fresh branch to work in:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-delete
    ```

1. Perform the redirect:

    ```sh
    yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
    ```

    Note that the target page can be an external URL or another page.

1. Commit all of the changed files, as well as
pushing your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-delete
    ```

## Learn more

You can learn more about contributing to MDN on
[the MDN Web Docs for Contributors site](https://mdn-contributor-docs.mozilla.org/).
