'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on bitcore-payment-protocol Module: {0}'
};

module.exports = require('@dashevo/dashcore-lib').errors.extend(spec);
