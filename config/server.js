module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://ba8f-77-109-144-90.ngrok.io',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
