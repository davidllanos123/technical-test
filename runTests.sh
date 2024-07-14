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

calculate_time_difference() {
    timestamp1="$1"
    timestamp2="$2"
    difference=$((timestamp2 - timestamp1))

    hours=$((difference / 3600))
    minutes=$(( (difference % 3600) / 60 ))
    seconds=$((difference % 60 ))

    echo -e "[Execution time]$BLUE ${hours}h:${minutes}m:${seconds}s$ENDC"
}

[[ ! -z $tag ]] && filter="-g (?=.*@$tag)" || filter=""

if [[ ! -z $tag ]]; then
  echo -e "$BOLD   · Test filter:$BLUE $tag $ENDC $ENDC"
fi

echo "TAG: $tag"
echo "FILTER: $filter"

npx playwright test -c src/config/config.ts $filter

end_time=$(date "+%s")

calculate_time_difference "$start_time" "$end_time"



exit 0
