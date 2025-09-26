class Logger {
  constructor() {
    this.levels = {
      info: 'info',
      warn: 'warn', 
      error: 'error'
    };
  }

  log(level, message, details = null) {
    // Console log
    console.log(`[${new Date().toISOString()}] ${level.toUpperCase()}: ${message}`);
    if (details) {
      console.log('Details:', details);
    }

    // Database log
    try {
      const { getDatabase } = require('../database/init');
      const db = getDatabase();
      if (db) {
        db.run(
          'INSERT INTO logs (level, message, details) VALUES (?, ?, ?)',
          [level, message, details ? JSON.stringify(details) : null],
          (err) => {
            if (err) {
              console.error('Failed to log to database:', err);
            }
          }
        );
      }
    } catch (error) {
      console.error('Logger database error:', error);
    }
  }

  info(message, details) {
    this.log(this.levels.info, message, details);
  }

  warn(message, details) {
    this.log(this.levels.warn, message, details);
  }

  error(message, details) {
    this.log(this.levels.error, message, details);
  }
}

const logger = new Logger();

module.exports = { logger };