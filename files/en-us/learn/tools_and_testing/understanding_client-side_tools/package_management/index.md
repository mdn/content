---
title: Package management basics
slug: Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

In this article, we'll look at package managers in some detail to understand how we can use them in our own projects — to install project tool dependencies, keep them up-to-date, and more.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Familiarity with the core <a href="/en-US/docs/Learn/HTML">HTML</a>,
        <a href="/en-US/docs/Learn/CSS">CSS</a>, and
        <a href="/en-US/docs/Learn/JavaScript">JavaScript</a> languages.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand what package managers and package repositories are, why
        they are needed, and the basics of how to use them.
      </td>
    </tr>
  </tbody>
</table>

## A dependency in your project

A **dependency** is a third-party bit of software that was probably written by someone else and ideally solves a single problem for you. A web project can have any number of dependencies, ranging from none to many, and your dependencies might include sub-dependencies that you didn't explicitly install — your dependencies may have their own dependencies.

A simple example of a useful dependency that your project might need is some code to calculate relative dates as human-readable text. You could certainly code this yourself, but there's a strong chance that someone else has already solved this problem — why waste time reinventing the wheel? Moreover, a reliable third-party dependency will likely have been tested in a lot of different situations, making it more robust and cross-browser compatible than your own solution.

A project dependency can be an entire JavaScript library or framework — such as React or Vue — or a very small utility like our human-readable date library, or it can be a command line tool such as Prettier or ESLint, which we talked about in previous articles.

Without modern build tools, dependencies like this might be included in your project using a simple [`<script>`](/en-US/docs/Web/HTML/Element/script) element, but this might not work right out of the box and you will likely need some modern tooling to bundle your code and dependencies together when they are released on the web. A bundle is a term that's generally used to refer to a single file on your web server that contains all the JavaScript for your software — typically compressed as much as possible to help reduce the time it takes to get your software downloaded and displayed in your visitors' browser.

In addition, what happens if you find a better tool that you want to use instead of the current one, or a new version of your dependency is released that you want to update to? This is not too painful for a couple of dependencies, but in larger projects with many dependencies, this kind of thing can become really challenging to keep track of. It makes more sense to use a **package manager** such as npm, as this will guarantee that the code is added and removed cleanly, as well as a host of other advantages.

## What exactly is a package manager?

We've met [npm](https://www.npmjs.com/) already, but stepping back from npm itself, a package manager is a system that will manage your project dependencies.

The package manager will provide a method to install new dependencies (also referred to as "packages"), manage where packages are stored on your file system, and offer capabilities for you to publish your own packages.

In theory, you may not need a package manager and you could manually download and store your project dependencies, but a package manager will seamlessly handle installing and uninstalling packages. If you didn't use one, you'd have to manually handle:

- Finding all the correct package JavaScript files.
- Checking them to make sure they don't have any known vulnerabilities.
- Downloading them and putting them in the correct locations in your project.
- Writing the code to include the package(s) in your application (this tends to be done using [JavaScript modules](/en-US/docs/Web/JavaScript/Guide/Modules), another subject that is worth reading up on and understanding).
- Doing the same thing for all of the packages' sub-dependencies, of which there could be tens, or hundreds.
- Removing all the files again if you want to remove the packages.

In addition, package managers handle duplicate dependencies (something that becomes important and common in front-end development).

In the case of npm (and JavaScript- and Node-based package managers) you have two options for where you install your dependencies. As we touched on in the previous article, dependencies can be installed globally or locally to your project. Although there tend to be more pros for installing globally, the pros for installing locally are more important — such as code portability and version locking.

For example, if your project relied on Webpack with a certain configuration, you'd want to ensure that if you installed that project on another machine or returned to it much later on, the configuration would still work. If a different version of Webpack was installed, it may not be compatible. To mitigate this, dependencies are installed locally to a project.

To see local dependencies really shine, all you need to do is try to download and run an existing project — if it works and all the dependencies work right out of the box, then you have local dependencies to thank for the fact that the code is portable.

> **Note:** npm is not the only package manager available. A successful and popular alternative package manager is [Yarn](https://yarnpkg.com/). Yarn resolves the dependencies using a different algorithm that can mean a faster user experience. There are also a number of other emerging clients, such as [pnpm](https://pnpm.js.org/).

## Package registries

For a package manager to work, it needs to know where to install packages from, and this comes in the form of a package registry. The registry is a central place where a package is published and thus can be installed from. npm, as well as being a package manager, is also the name of the most commonly-used package registry for JavaScript packages. The npm registry exists at [npmjs.com](https://www.npmjs.com/).

npm is not the only option. You could manage your own package registry — products like [Microsoft Azure](https://azure.microsoft.com/) allow you to create proxies to the npm registry (so you can override or lock certain packages), [GitHub also offers a package registry service](https://github.com/features/packages), and there will be likely more options appearing as time goes on.

What is important is that you ensure you've chosen the best registry for you. Many projects will use npm, and we'll stick to this in our examples throughout the rest of the module.

## Using the package ecosystem

Let's run through an example to get you started with using a package manager and registry to install a command line utility.

[Parcel](https://parceljs.org/) is another tool that developers commonly use in their development process. Parcel is clever in that it can watch the contents of our code for calls to dependencies and automatically installs any dependencies it sees that our code needs. It can also automatically build our code.

### Setting up the app as an npm package

First of all, create a new directory to store our experimental app in, somewhere sensible that you'll find again. We'll call it parcel-experiment, but you can call it whatever you like:

```bash
mkdir parcel-experiment
cd parcel-experiment
```

Next, let's initialise our app as an npm package, which creates a config file — `package.json` — that allows us to save our configuration details in case we want to recreate this environment later on, or even publish the package to the npm registry (although this is somewhat beyond the scope of this article).

Type the following command, making sure you are inside the `parcel-experiment` directory:

```bash
npm init
```

You will now be asked some questions; npm will then create a default `package.json` file based on the answers:

- `name`: A name to identify the app. Just press

  <kbd>Return</kbd>

  to accept the default `parcel-experiment`.

- `version`: The starting version number for the app. Again, just press

  <kbd>Return</kbd>

  to accept the default `1.0.0`.

- `description`: A quick description of the app's purpose. Type in something really simple, like "A simple npm package to learn about using npm", then press

  <kbd>Return</kbd>

  .

- `entry point`: This will be the top-level JavaScript file of the app. The default `index.js` is fine for now — press

  <kbd>Return</kbd>

  .

- `test command`, `git repository`, and `keywords`: press

  <kbd>Return</kbd>

  to leave each of these blank for now.

- `author`: The author of the project. Type your own name, and press

  <kbd>Return</kbd>

  .

- `license`: The license to publish the package under. Press

  <kbd>Return</kbd>

  to accept the default for now.

Press <kbd>Return</kbd> one more time to accept these settings.

Go into your `parcel-experiment` directory and you should now find you've got a package.json file. Open it up and it should look something like this:

```json
{
  "name": "parcel-experiment",
  "version": "1.0.0",
  "description": "A simple npm package to learn about using npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Chris Mills",
  "license": "ISC"
}
```

So this is the config file that defines your package. This is good for now, so let's move on.

### Installing parcel

Run the following command to install Parcel locally:

```bash
npm install parcel-bundler
```

Once that's done _All The Things_, we're now ready for some "modern client-side development" (which really means using build tools to make the developer experience a little easier). First of all however, take another look at your package.json file. You'll see that npm has added a new field, dependencies:

```json
"dependencies": {
  "parcel-bundler": "^1.12.4"
}
```

This is part of the npm magic — if in the future you move your codebase to another location, on another machine, you can recreate the same setup by running the command `npm install`, and npm will look at the dependencies and install them for you.

One disadvantage is that Parcel is only available inside our `parcel-experiment` app; you won't be able to run it in a different directory. But the advantages outweigh the disadvantages.

### Setting up our example app

Anyway, on with the setup.

Parcel expects an `index.html` and an `index.js` file to work with, but otherwise, it is very unopinionated about how you structure your project. Other tools can be very different, but at least Parcel makes it easy for our initial experiment.

So now we need to add an `index.html` file to our working directory. Create `index.html` in your test directory, and give it the following contents:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

Next, we need to add an `index.js` file in the same directory as `index.html`. For now, `index.js` can be empty; it just needs to exist. Create this now.

### Having fun with Parcel

Now we'll run our newly installed Parcel tool. In your terminal, run the following command:

```bash
 npx parcel index.html
```

You should see something like this printed in your terminal:

```bash
Server running at http://localhost:1234
✨  Built in 193ms.
```

> **Note:** If you have trouble with the terminal returning a "command not found" type error, try running the above command with the `npx` utility, i.e. `npx parcel index.html`.

Now we're ready to benefit from the full JavaScript package ecosystem. For a start, there is now a local web server running at `http://localhost:1234`. Go there now and you'll not see anything for now, but what is cool is that when you do make changes to your app, Parcel will rebuild it and refresh the server automatically so you can instantly see the effect your update had.

Now for some page content. Let's say we want to show human-readable relative dates, such as "2 hours ago", "4 days ago" and so on. The [`date-fns`](https://date-fns.org/) package's `formatDistanceToNow()` method is useful for this (there's other packages that do the same thing too).

In the `index.js` file, add the following code and save it:

```js
import { formatDistanceToNow } from "date-fns";

const date = "1996-09-13 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
```

Go back to `http://localhost:1234` and you'll see how long ago it is since the author turned 18.

What's particularly special about the code above is that it is using the `formatDistanceToNow()` function from the `date-fns` package, which we didn't install! Parcel has spotted that you need the module, searched for it in the `npmjs.com` package registry, and installed it locally for us, automatically. You can prove this by looking in our `package.json` file again — you'll see that the `dependencies` field has been updated for us:

```json
"dependencies": {
  "date-fns": "^2.12.0",
  "parcel-bundler": "^1.12.4"
}
```

Parcel has also added the files required for someone else to pick up this project and install any dependencies that we've used. If you take a look in the directory you ran the `parcel` command in, you'll find a number of new files; the most interesting of which are:

- `node_modules`: The dependency files of Parcel and date-fns.
- `dist`: The distribution directory — these are the automatically packaged, minified files Parcel has built for us, and the files it is serving at `localhost:1234`. These are the files you would upload to your web server when releasing the site online for public consumption.

So long as we know the package name, we can use it in our code and Parcel will go off, fetch, and install (actually "copy") the package into our local directory (under `node_modules`).

### Building our code for production

However, this code is not ready for production. Most build tooling systems will have a "development mode" and a "production mode". The important difference is that a lot of the helpful features you will use in development are not needed in the final site, so will be stripped out for production, e.g. "hot module replacement", "live reloading", and "uncompressed and commented source code". Though far from exhaustive, these are some of the common web development features that are very helpful at the development stage but are not very useful in production. In production, they will just bloat your site.

Now stop the previous Parcel command using <kbd>Ctrl</kbd> + <kbd>C</kbd>.

We can now prepare our bare bones example site for an imaginary deployment. Parcel provides an additional command to generate files that are suited to publication, making bundles (mentioned earlier) with the build option.

Run the following command:

```bash
npx parcel build index.html
```

You should see an output like so:

```bash
✨  Built in 9.35s.

dist/my-project.fb76efcf.js.map    648.58 KB     64ms
dist/my-project.fb76efcf.js        195.74 KB    8.43s
dist/index.html                        288 B    806ms
```

Again, the destination for our production files is the `dist` directory.

### Reducing your app's file size

However, as with all tools that "help" developers there's often a tradeoff. In this particular case, it's the file size. The JavaScript bundle my-project.fb76efcf.js is a whopping 195K — very large, given that all it does is print a line of text. Sure, there's some calculation, but we definitely don't need 195K worth of JavaScript to do this!

When you use development tooling it's worth questioning whether they're doing the right thing for you. In this case, the bundle is nearly 200K because it has in fact included the entire `date-fns` library, not just the function we're using.

If we had avoided any development tools and pointed a `<script src="">` element to a hosted version of `date-fns`, roughly the same thing would have happened — all of the library would be downloaded when our example page is loaded in a browser.

However, this is where development tooling has a chance to shine. Whilst the tooling is on our machine, we can ask the software to inspect our use of the code and only include the functions that we're actually using in production — a process known as "Tree Shaking".

This makes a lot of sense as we want to reduce file size and thus make our app load as quickly as possible. Different tooling will let you tree shake in different ways.

Although the list grows by the month, there are three main offerings for tools that generate bundles from our source code: Webpack, [Rollup](https://rollupjs.org/guide/en/), and Parcel. There will be more available than this, but these are popular ones:

- The RollUp tool offers tree shaking and code splitting as its core features.
- Webpack requires some configuration (though "some" might be understating the complexity of some developers' Webpack configurations).
- In the case of Parcel (prior to Parcel version 2), there's a special flag required — `--experimental-scope-hoisting` — which will tree shake while building.

Let's stick with Parcel for now, given that we've already got it installed. Try running the following command:

```bash
npx parcel build index.html --experimental-scope-hoisting
```

You'll see that this makes a huge difference:

```bash
✨  Built in 7.87s.

dist/my-project.86f8a5fc.js    10.34 KB    7.17s
dist/index.html                   288 B    753ms
```

Now the bundle is approximately 10K. Much better.

If we were to release this project to a server, we would only release the files in the `dist` folder. Parcel has automatically handled all the filename changes for us. We recommend having a look at the source code in `dist/index.html` just so you can see what changes Parcel has performed automatically.

> **Note:** At the time of writing, Parcel 2 had not been released. However when it does, these commands will all still work because the authors of Parcel have had the good sense to name the tool slightly differently. To install Parcel 1.x you have to install `parcel-bundler`, but parcel 2.x is called `parcel`.

There's a lot of tools available and the JavaScript package ecosystem is growing at an unprecedented rate, which has pros and cons. There's improvements being made all the time and the choice, for better or worse, is constantly increasing. Faced with the overwhelming choice of tooling, probably the most important lesson is to learn what the tool you select is capable of.

## A rough guide to package manager clients

This tutorial installed the Parcel package using npm, but as mentioned earlier on there are some alternatives. It's worth at least knowing they exist and having some vague idea of the common commands across the tools. You've already seen some in action, but let's look at the others.

The list will grow over time, but at the time of writing, the following main package managers are available:

- npm at [npmjs.org](https://www.npmjs.com/)
- pnpm at [pnpm.js.org](https://pnpm.js.org/)
- Yarn at [yarnpkg.com](https://yarnpkg.com/)

npm and pnpm are similar from a command line point of view — in fact, pnpm aims to have full parity over the argument options that npm offers. It differs in that it uses a different method for downloading and storing the packages on your computer, aiming to reduce the overall disk space required.

Where npm is shown in the examples below, pnpm can be swapped in and the command will work.

Yarn is often thought to be quicker than npm in terms of the installation process (though your mileage may vary). This is important to developers because there can be a significant amount of time wasted on waiting for dependencies to install (and copy to the computer).

> **Note:** The npm package manager is **not** required to install packages from the npm registry, even though they share the same name. pnpm and Yarn can consume the same `package.json` format as npm, and can install any package from the npm and other package registries.

Let's review the common actions you'll want to perform with package managers.

### Initialise a new project

```bash
npm init
yarn init
```

As shown above, this will prompt and walk you through a series of questions to describe your project (name, license, description, and so on) then generate a `package.json` for you that contains meta-information about your project and its dependencies.

### Installing dependencies

```bash
npm install date-fns
yarn add date-fns
```

We also saw `install` in action above. This would directly add the `date-fns` package to the working directory in a subdirectory called `node_modules`, along with `date-fns`'s own dependencies.

By default, this command will install the latest version of `date-fns`, but you can control this too. You can ask for `date-fns@1`, which gives you the latest 1.x version (which is 1.30.1). Or you could try `date-fns@^2.3.0`, which means the latest version after or including 2.3.0 (2.8.1 at the time of writing).

### Updating dependencies

```bash
npm update
yarn upgrade
```

This will look at the currently installed dependencies and update them, if there is an update available, within the range that's specified in the package.

The range is specified in the version of the dependency in your `package.json`, such as `date-fns@^2.0.1` — in this case, the caret character `^` means all minor and patch releases after and including 2.0.1, up to but excluding 3.0.0.

This is determined using a system called [semver](https://semver.org/), which might look a bit complicated from the documentation but can be simplified by considering only the summary information and that a version is represented by `MAJOR.MINOR.PATCH`, such as 2.0.1 being major version 2 with patch version 1. An excellent way to try out semver values is to use the [semver calculator](https://semver.npmjs.com/).

It's important to remember that `npm update` will not upgrade the dependencies to beyond the range defined in the `package.json` — to do this you will need to install that version specifically.

### Audit for vulnerabilities

```bash
npm audit
yarn audit
```

This will check all of the dependency tree for your project and run the specific versions you're using against a vulnerability database and notify you if there are potential vulnerable packages in your project.

A good starting point for learning about vulnerabilities is the [Snyk project](https://snyk.io/), which covers both JavaScript packages and other programming languages.

### Checking on a dependency

```bash
npm ls date-fns
yarn why date-fns
```

This command will show what version of a dependency is installed and how it came to be included in your project. It's possible that another, top-level, package could have pulled in `date-fns`. It's equally possible (and not ideal) that you have multiple versions of a package in your project (this has been seen many times over with the [lodash](https://lodash.com/) package, as it's so useful).

Although the package manager will do its best to deduplicate packages you may want to investigate exactly which version is installed.

### More commands

You can find out more about the individual commands for [npm](https://docs.npmjs.com/cli-documentation/) and [yarn](https://classic.yarnpkg.com/en/docs/cli/) online. Again, [pnpm](https://pnpm.js.org/en/cli/add) commands will have parity with npm, with a handful of additions.

## Making your own commands

The package managers also support creating your own commands and executing them from the command line. For instance, we could create the following command:

```bash
npm run dev
# or yarn run dev
```

This would run a custom script for starting our project in "development mode". In fact, we regularly include this in all projects as the local development setup tends to run slightly differently to how it would run in production.

If you tried running this in your Parcel test project from earlier it would (likely) claim the "dev script is missing". This is because npm, Yarn (and the like) are looking for a property called dev in the `scripts` property of your `package.json` file.

Parcel can run a development server using the command `parcel serve filename.html`, and we'd like to use that often during our development.

So, let's create a custom shorthand command — "dev" — in our `package.json`.

If you followed the tutorial from earlier, you should have a `package.json` file inside your parcel-experiment directory. Open it up, and its `scripts` member should look like this:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
},
```

Update it so that it looks like this, and save the file:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "parcel serve index.html"
},
```

We've added a custom `dev` command as an npm script.

Now try running the following in your terminal, making sure you are inside the `parcel-experiment` directory:

```bash
 npm run dev
```

This should start Parcel and serve up your `index.html` at the local development server, as we saw before:

```bash
Server running at http://localhost:1234
✨  Built in 5.48s.
```

In addition, the npm (and yarn) commands are clever in that they will search for command line tools that are locally installed to the project before trying to find them through conventional methods (where your computer will normally store and allow software to be found). You can [learn more about the technical intricacies of the `run` command](https://docs.npmjs.com/cli/run-script/), although in most cases your own scripts will run just fine.

You can add all kinds of things to the `scripts` property that help you do your job. We certainly have, and [others have too](https://github.com/facebook/create-react-app/blob/c5b96c2853671baa3f1f297ec3b36d7358898304/package.json#L6).

## Summary

This brings us to the end of our tour of package managers. Our next move is to build up a sample toolchain, putting all that we've learnt so far into practice.

{{PreviousMenuNext("Learn/Tools_and_testing/Understanding_client-side_tools/Command_line","Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain", "Learn/Tools_and_testing/Understanding_client-side_tools")}}

## See also

- [npm scripts reference](https://docs.npmjs.com/cli/v8/using-npm/scripts/)
- [package.json reference](https://docs.npmjs.com/cli/v8/configuring-npm/package-json/)
