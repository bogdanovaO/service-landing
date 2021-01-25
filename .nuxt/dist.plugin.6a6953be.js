"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (context, inject) => {
  inject('mail', {
    send: config => context.app.$axios.$post('/mail/send', config)
  });
};

exports.default = _default;
module.exports = exports.default;