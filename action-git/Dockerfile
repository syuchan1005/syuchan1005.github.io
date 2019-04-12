FROM alpine:3.9

LABEL "com.github.actions.name"="Git(alpine)"
LABEL "com.github.actions.description"="git"
LABEL "com.github.actions.icon"="command"
LABEL "com.github.actions.color"="green"

LABEL "repository"="https://github.com/syuchan1005/syuchan1005.github.io"
LABEL "homepage"="https://syuchan1005.github.io"
LABEL "maintainer"="syuchan1005<syuchan.dev@gmail.com>"

ADD entrypoint.sh /entrypoint.sh

RUN apk add --no-cache git jq \
    && chmod 777 entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
