#!/bin/sh

git config --global user.email $(cat ${GITHUB_EVENT_PATH} | jq ".pusher.email")
git config --global user.name  $(cat ${GITHUB_EVENT_PATH} | jq ".pusher.name")

sh -c "$*"
