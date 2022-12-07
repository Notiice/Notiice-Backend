module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://2af1-83-76-236-236.ngrok.io',
  app: {
    keys: env.array('APP_KEYS'),
  },
});
