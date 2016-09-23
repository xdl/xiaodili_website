#!/bin/bash

#pushd ~/dev/xdl_notes_generator && node xdl_notes_generator.js ~/notes staging config.json && ./copy_to_website.sh && popd;
#pushd ~/dev/xdl_generator && sudo node craft.js ~/dev/xiaodili/src /var/www/html http://localhost && popd;

pushd ~/dev/xdl_notes_generator && node xdl_notes_generator.js ~/Documents/notes staging config.json && ./copy_to_website.sh && popd;
pushd ~/dev/craft && sudo node craft.js ~/dev/xiaodili/src /Library/WebServer/Documents http://localhost && popd;
