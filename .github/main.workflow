workflow "Build and Deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Filter develop" {
  uses = "actions/bin/filter@c6471707d308175c57dfe91963406ef205837dbd"
  args = "branch develop"
}

action "Add git worktree" {
  uses = "./action-git/"
  needs = ["Filter develop"]
  args = "git worktree add docs master"
}

action "Install" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Add git worktree"]
  args = "ci"
}

action "Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Install"]
  args = "run build"
}

action "Deploy" {
  uses = "./action-git/"
  needs = ["Build"]
  args = "cd docs && date && git status && git add -A && git reset -q -- .github/main.workflow && git commit -m \"$(cat ${GITHUB_EVENT_PATH} | jq -r '.commits[0].message')\" && date && git status && git push https://${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git master"
  secrets = ["GITHUB_TOKEN"]
}
