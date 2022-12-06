module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'LOCALHOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi_db'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Papel123@'),
      ssl: env.bool('DATABASE_SSL', ),
    },
    pool: {
      min: 0,
      max: 5
    }
  },
});
