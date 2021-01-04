const core = require("@actions/core");
const github = require("@actions/github");

async function main() {
  // const client = new github.GitHub(process.env.GITHUB_TOKEN);
  const context = github.context;

  const contextPullRequest = context.payload.pull_request;
  if (!contextPullRequest) {
    throw new Error(
      "This action can only be invoked in `pull_request` events. Otherwise the pull request can't be inferred."
    );
  }

  console.log(contextPullRequest);
  const { title } = contextPullRequest;
  if (title === "Update index.html") {
    // This is the default title you get when you use the GitHub UI to
    // edit a file and following web form steps to create a PR.
    // These PRs are hard to triage and to organize because of the
    // rather "useless" title so let's put the onus back on the author
    // to come up with a better title.
    // See https://github.com/mdn/content/issues/782
    throw new Error(
      'Pull request title can\'t just be "Update index.html".\n' +
        "Please update the pull request to be more descriptive. " +
        "For example 'fix typo on Web/JavaScript'"
    );
  }

  const { body } = contextPullRequest;
  if (!body.trim()) {
    // Even for typos it's required that to explain something about the PR.
    throw new Error(
      "Pull request body can't be empty. " +
        "Please try to explain what the pull request accomplishes."
    );
  }
}

main();
