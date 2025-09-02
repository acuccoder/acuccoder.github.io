#!/bin/sh
echo -ne '\033c\033]0;Platformer 2D\a'
base_path="$(dirname "$(realpath "$0")")"
"$base_path/platformer.x86_64" "$@"
