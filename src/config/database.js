module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  // port: 5433,
  // password: 'docker',
  password: 'app_2019',
  database: 'FindJob',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
