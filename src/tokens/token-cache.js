const _ = require('lodash');
const signale = require('signale');

const Token = require('../model/token');

let keyedTokens = {};

const logger = signale.scope('token cache');

const initialise = async () => {
  const tokens = await Token.find().lean();

  keyedTokens = _.keyBy(tokens, 'address');

  logger.success(`initialised token cache with ${tokens.length} tokens`);
};

const getTokens = () => _.clone(keyedTokens);

const getToken = tokenAddress => _.clone(keyedTokens[tokenAddress]);

const addToken = token => {
  keyedTokens[token.address] = token;

  logger.success(`added ${token.symbol} to token cache`);
};

module.exports = { addToken, getToken, getTokens, initialise };