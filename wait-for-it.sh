#!/bin/bash
# wait-for-it.sh
# 
# Wait for a service to be available before executing a command.
# 
# Usage: wait-for-it.sh host:port [-s] [-t timeout] [-- command args]
#   -h HOST | --host=HOST       Host or IP under test
#   -p PORT | --port=PORT       TCP port under test
#   -s | --strict               Only execute subcommand if the test succeeds
#   -t TIMEOUT | --timeout=TIMEOUT
#                               Timeout in seconds, zero for no timeout
#   -- COMMAND ARGS             Execute command with args after the test finishes
# 
# Thanks to https://github.com/vishnubob/wait-for-it for the original implementation

set -e

# Variables
HOST
