workflow "Build and Deploy" {
  on = "push"
  resolves = ["Deploy", "E2E Test"]
}

action "Add git worktree" {
  uses = "./action-git"
  args = "git worktree add docs master"
}

action "Install" {
  uses = "actions/npm@master"
  needs = ["Add git worktree"]
  args = ["ci"]
}

action "E2E Test" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = ["run", "test:e2e"]
}

action "Build" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = ["run", "build"]
}

action "Deploy" {
  uses = "./action-git"
  needs = [
    "Build",
    "E2E Test",
  ]
  args = "cd docs && git add -A && git commit -m \"$(cat ${GITHUB_EVENT_PATH} | jq -r '.commits[0].message')\" && git push https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git master"
  secrets = ["ACCESS_TOKEN"]
}
