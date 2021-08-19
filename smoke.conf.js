import { config } from './wdio.conf';

config.specs = [
    './test/specs/smoke/game-creation.js'
]

exports.config = config;