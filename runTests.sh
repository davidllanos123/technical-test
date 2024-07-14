#!/bin/bash

# STYLES
BOLD="\033[1m"
BLUE="\033[0;34m"   #
RED="\033[91m"      #
YELLOW="\033[93m"   #
GREEN="\033[0;32m"  #
ENDC="\033[0m"      # finish style

echo -e "\n······································"
echo -e "·             $BOLD$BLUE TEST RUN$ENDC$ENDC              ·"
echo -e "······································\n"

while getopts t: flag; do
    case $flag in
        t)
          tag=$(echo "${OPTARG}");;
    esac
done

[[ ! -z $tag ]] && filter="-g (?=.*@$tag)" || filter=""

if [[ ! -z $tag ]]; then
  echo -e "$BOLD   · Test filter:$BLUE $tag $ENDC $ENDC"
fi

npx playwright test -c src/config/config.ts $filter

exit 0
