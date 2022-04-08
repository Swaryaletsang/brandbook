module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9f7c1577c7af03ee3047e6d90cc4971c'),
  },
});
