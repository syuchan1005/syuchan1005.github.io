FROM alpine:3.9

LABEL "com.github.actions.name"="Git(alpine)" \
       "com.github.actions.description"="git" \
       "com.github.actions.icon"="command" \
       "com.github.actions.color"="green" \
       "repository"="https://github.com/syuchan1005/syuchan1005.github.io" \
       "homepage"="https://syuchan1005.github.io" \
       "maintainer"="syuchan1005<syuchan.dev@gmail.com>"

ADD entrypoint.sh /entrypoint.sh

RUN apk add --no-cache git jq \
    && chmod 777 entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
