const config = {
  client: 'sqlite3',
  connection: {
    filename: './src/database/data.sqlite',
  },
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};

module.exports = config;