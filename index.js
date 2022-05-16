import * as picnicPlanner from './services/picnic-planner/index.js';

const args = process.argv.slice(2);
picnicPlanner.planPinic(args[0], new Date());