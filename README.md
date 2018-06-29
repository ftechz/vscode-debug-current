# Debug Current Extension README

## Features

Launch the debugger for the currently open file. This is done by indirectly passing the filename to the launch file via a config.

Just run the `Debug Current File` command afterwards to start debugging.

## Requirements

Add `${config:debug-current.file}` to `launch.json` where you want to specify the file to debug.

## Extension Settings

There are no user configurable settings.

This extension uses a global setting to pass the value to the launch config. Modifying this config is only necessary to debug without using the provided command (and changing the launch.json file).
