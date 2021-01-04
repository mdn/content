const core = require("@actions/core");
const github = require("@actions/github");

async function main() {
  const client = new github.GitHub(process.env.GITHUB_TOKEN);
  const contextPullRequest = github.context.payload.pull_request;
  if (!contextPullRequest) {
    throw new Error(
      "This action can only be invoked in `pull_request` events. Otherwise the pull request can't be inferred."
    );
  }

  console.log({ title: contextPullRequest.title });
}

main().catch(console.error);
