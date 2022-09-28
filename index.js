/*
TCD Bots Main File
-----
Controls the bots, provides commands, and improves the game community.
*/

// Services
require('dotenv').config();

// Bots
let MainModules = './MainModules'
const DiscordBot = require(MainModules+'/DiscordBot')
const SocialIntegrations = require(MainModules+'/SocialIntergration.js')

// Test Check
require(`./testCheck.js`);