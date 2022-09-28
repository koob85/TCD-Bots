/*
TCD Bots Main File
-----
Controls the bots, provides commands, and improves the game community.
*/

// Services
const keep_alive = require('./keep_alive.js');

// Bots
let MainModules = './MainModules'
const DiscordBot = require(MainModules+'/DiscordBot')
const SocialIntegrations = require(MainModules+'/SocialIntergration.js')

// Test Check
require(`./testCheck.js`);