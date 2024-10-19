require('dotenv').config();


module.exports = {
  development: {
    username: 'postgres',
    password: process.env.PASSWORD, // Replace with your actual development password
    database: 'postgres',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, 
  
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'Navani001', // Supabase username
    password: 'Navani@2006krish', // Supabase password
    database: 'medical', // Supabase database name
    host: 'postgresql://postgres.sppocderibkuoinguugo:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres', // Supabase host
    port: 5432, // PostgreSQL port
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

