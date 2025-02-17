const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias, // This is crucial!
      '@components': path.join(__dirname, 'components'),
      // ... other aliases
    };
    return config;
  },
  // ... other Next.js config
};