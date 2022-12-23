import { Pool } from 'pg';

export const pool = new Pool({
    // user: 'postgres',
    // password: 'something_secure',
    // database: 'flashcards'
    // port?: number | undefined;
    host: 'postgres'
});

// export pool;
