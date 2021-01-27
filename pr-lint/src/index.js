const boxen = require("boxen");
const github = require("@actions/github");

async function main() {
  // TODO: Consider being super friendly and possibly...
  //  * Post a comment that is friendly and useful that explains the problems.
  //  * Just edit the PR title (or whatever it is) if it's easily fixable.
  // See https://www.npmjs.com/package/@actions/github for documentation
  // about how to use @actions/github to do authenticated things.
  const context = github.context;

  const contextPullRequest = context.payload.pull_request;
  if (!contextPullRequest) {
    throw new Error(
      "This action can only be invoked in `pull_request` events. Otherwise the pull request can't be inferred."
    );
  }

  const { title } = contextPullRequest;
  if (title === "Update index.html") {
    // This is the default title you get when you use the GitHub UI to
    // edit a file and following web form steps to create a PR.
    // These PRs are hard to triage and to organize because of the
    // rather "useless" title so let's put the onus back on the author
    // to come up with a better title.
    // See https://github.com/mdn/content/issues/782
    return (
      'Pull request title can\'t just be "Update index.html"\n' +
      "Please update the pull request to be more descriptive. " +
      "For example 'fix typo on Web/JavaScript'."
    );
  }

  // No errors or problems!
  return null;
}

main()
  .then((ret) => {
    if (ret) {
      const lines = ret.split("\n");
      console.log(
        boxen(lines[0], { padding: 1, margin: 1, borderStyle: "double" })
      );
      // Because boxen breaks, in GitHub Actions logging, when multiple lines.
      if (lines.length > 1) {
        console.log(`\n${lines.slice(1).join("\n")}\n`);
      }
      process.exitCode = 2;
    } else {
      console.log(
        boxen("Happiness is when nothing's wrong!", {
          padding: 1,
          margin: 1,
          borderStyle: "double",
        })
      );
    }
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
