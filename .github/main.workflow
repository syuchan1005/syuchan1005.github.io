workflow "Build and Deploy" {
  on = "push"
  resolves = ["Deploy", "E2E Test"]
}

action "Add git worktree" {
  uses = "./action-git"
  args = "git worktree add docs master"
}

action "Install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Add git worktree"]
  args = "ci"
}

action "Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["E2E Test"]
  args = "run build"
}

action "Deploy" {
  uses = "./action-git"
  needs = [
    "Build",
  ]
  args = "cd docs && git add -A && git commit -m \"$(cat ${GITHUB_EVENT_PATH} | jq -r '.commits[0].message')\" && git push https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git master"
  secrets = ["ACCESS_TOKEN"]
}

action "E2E Test" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  runs = "run test:e2e"
}
