const { environment } = require('@rails/webpacker');

environment.config.set('node', false);

const customConfig = {
  resolve: {
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false
    }
  }
};

environment.config.merge(customConfig);

module.exports = environment;
