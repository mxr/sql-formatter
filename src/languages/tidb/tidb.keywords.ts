export const keywords: string[] = [
  // https://docs.pingcap.com/tidb/stable/keywords
  'ADD', // (R)
  'ALL', // (R)
  'ALTER', // (R)
  'ANALYZE', // (R)
  'AND', // (R)
  'ARRAY', // (R)
  'AS', // (R)
  'ASC', // (R)
  'BETWEEN', // (R)
  'BIGINT', // (R)
  'BINARY', // (R)
  'BLOB', // (R)
  'BOTH', // (R)
  'BY', // (R)
  'CALL', // (R)
  'CASCADE', // (R)
  'CASE', // (R)
  'CHANGE', // (R)
  'CHAR', // (R)
  'CHARACTER', // (R)
  'CHECK', // (R)
  'COLLATE', // (R)
  'COLUMN', // (R)
  'CONSTRAINT', // (R)
  'CONTINUE', // (R)
  'CONVERT', // (R)
  'CREATE', // (R)
  'CROSS', // (R)
  'CUME_DIST', // (R)
  'CURRENT_DATE', // (R)
  'CURRENT_ROLE', // (R)
  'CURRENT_TIME', // (R)
  'CURRENT_TIMESTAMP', // (R)
  'CURRENT_USER', // (R)
  'CURSOR', // (R)
  'DATABASE', // (R)
  'DATABASES', // (R)
  'DAY_HOUR', // (R)
  'DAY_MICROSECOND', // (R)
  'DAY_MINUTE', // (R)
  'DAY_SECOND', // (R)
  'DECIMAL', // (R)
  'DEFAULT', // (R)
  'DELAYED', // (R)
  'DELETE', // (R)
  'DENSE_RANK', // (R)
  'DESC', // (R)
  'DESCRIBE', // (R)
  'DISTINCT', // (R)
  'DISTINCTROW', // (R)
  'DIV', // (R)
  'DOUBLE', // (R)
  'DROP', // (R)
  'DUAL', // (R)
  'ELSE', // (R)
  'ELSEIF', // (R)
  'ENCLOSED', // (R)
  'ESCAPED', // (R)
  'EXCEPT', // (R)
  'EXISTS', // (R)
  'EXIT', // (R)
  'EXPLAIN', // (R)
  'FALSE', // (R)
  'FETCH', // (R)
  'FIRST_VALUE', // (R)
  'FLOAT', // (R)
  'FLOAT4', // (R)
  'FLOAT8', // (R)
  'FOR', // (R)
  'FORCE', // (R)
  'FOREIGN', // (R)
  'FROM', // (R)
  'FULLTEXT', // (R)
  'GENERATED', // (R)
  'GRANT', // (R)
  'GROUP', // (R)
  'GROUPS', // (R)
  'HAVING', // (R)
  'HIGH_PRIORITY', // (R)
  'HOUR_MICROSECOND', // (R)
  'HOUR_MINUTE', // (R)
  'HOUR_SECOND', // (R)
  'IF', // (R)
  'IGNORE', // (R)
  'ILIKE', // (R)
  'IN', // (R)
  'INDEX', // (R)
  'INFILE', // (R)
  'INNER', // (R)
  'INOUT', // (R)
  'INSERT', // (R)
  'INT', // (R)
  'INT1', // (R)
  'INT2', // (R)
  'INT3', // (R)
  'INT4', // (R)
  'INT8', // (R)
  'INTEGER', // (R)
  'INTERSECT', // (R)
  'INTERVAL', // (R)
  'INTO', // (R)
  'IS', // (R)
  'ITERATE', // (R)
  'JOIN', // (R)
  'KEY', // (R)
  'KEYS', // (R)
  'KILL', // (R)
  'LAG', // (R)
  'LAST_VALUE', // (R)
  'LEAD', // (R)
  'LEADING', // (R)
  'LEAVE', // (R)
  'LEFT', // (R)
  'LIKE', // (R)
  'LIMIT', // (R)
  'LINEAR', // (R)
  'LINES', // (R)
  'LOAD', // (R)
  'LOCALTIME', // (R)
  'LOCALTIMESTAMP', // (R)
  'LOCK', // (R)
  'LONG', // (R)
  'LONGBLOB', // (R)
  'LONGTEXT', // (R)
  'LOW_PRIORITY', // (R)
  'MATCH', // (R)
  'MAXVALUE', // (R)
  'MEDIUMBLOB', // (R)
  'MEDIUMINT', // (R)
  'MEDIUMTEXT', // (R)
  'MIDDLEINT', // (R)
  'MINUTE_MICROSECOND', // (R)
  'MINUTE_SECOND', // (R)
  'MOD', // (R)
  'NATURAL', // (R)
  'NOT', // (R)
  'NO_WRITE_TO_BINLOG', // (R)
  'NTH_VALUE', // (R)
  'NTILE', // (R)
  'NULL', // (R)
  'NUMERIC', // (R)
  'OF', // (R)
  'ON', // (R)
  'OPTIMIZE', // (R)
  'OPTION', // (R)
  'OPTIONALLY', // (R)
  'OR', // (R)
  'ORDER', // (R)
  'OUT', // (R)
  'OUTER', // (R)
  'OUTFILE', // (R)
  'OVER', // (R)
  'PARTITION', // (R)
  'PERCENT_RANK', // (R)
  'PRECISION', // (R)
  'PRIMARY', // (R)
  'PROCEDURE', // (R)
  'RANGE', // (R)
  'RANK', // (R)
  'READ', // (R)
  'REAL', // (R)
  'RECURSIVE', // (R)
  'REFERENCES', // (R)
  'REGEXP', // (R)
  'RELEASE', // (R)
  'RENAME', // (R)
  'REPEAT', // (R)
  'REPLACE', // (R)
  'REQUIRE', // (R)
  'RESTRICT', // (R)
  'REVOKE', // (R)
  'RIGHT', // (R)
  'RLIKE', // (R)
  'ROW', // (R)
  'ROWS', // (R)
  'ROW_NUMBER', // (R)
  'SECOND_MICROSECOND', // (R)
  'SELECT', // (R)
  'SET', // (R)
  'SHOW', // (R)
  'SMALLINT', // (R)
  'SPATIAL', // (R)
  'SQL', // (R)
  'SQLEXCEPTION', // (R)
  'SQLSTATE', // (R)
  'SQLWARNING', // (R)
  'SQL_BIG_RESULT', // (R)
  'SQL_CALC_FOUND_ROWS', // (R)
  'SQL_SMALL_RESULT', // (R)
  'SSL', // (R)
  'STARTING', // (R)
  'STATS_EXTENDED', // (R)
  'STORED', // (R)
  'STRAIGHT_JOIN', // (R)
  'TABLE', // (R)
  'TABLESAMPLE', // (R)
  'TERMINATED', // (R)
  'THEN', // (R)
  'TINYBLOB', // (R)
  'TINYINT', // (R)
  'TINYTEXT', // (R)
  'TO', // (R)
  'TRAILING', // (R)
  'TRIGGER', // (R)
  'TRUE', // (R)
  'TiDB_CURRENT_TSO', // (R)
  'UNION', // (R)
  'UNIQUE', // (R)
  'UNLOCK', // (R)
  'UNSIGNED', // (R)
  'UNTIL', // (R)
  'UPDATE', // (R)
  'USAGE', // (R)
  'USE', // (R)
  'USING', // (R)
  'UTC_DATE', // (R)
  'UTC_TIME', // (R)
  'UTC_TIMESTAMP', // (R)
  'VALUES', // (R)
  'VARBINARY', // (R)
  'VARCHAR', // (R)
  'VARCHARACTER', // (R)
  'VARYING', // (R)
  'VIRTUAL', // (R)
  'WHEN', // (R)
  'WHERE', // (R)
  'WHILE', // (R)
  'WINDOW', // (R)
  'WITH', // (R)
  'WRITE', // (R)
  'XOR', // (R)
  'YEAR_MONTH', // (R)
  'ZEROFILL', // (R)
];

export const dataTypes: string[] = [
  // https://docs.pingcap.com/tidb/stable/data-type-overview
  'BIGINT', // (R)
  'BINARY', // (R)
  'BIT',
  'BLOB', // (R)
  'BOOL', // (R)
  'BOOLEAN', // (R)
  'CHAR', // (R)
  'CHARACTER', // (R)
  'DATE', // (R)
  'DATETIME', // (R)
  'DEC', // (R)
  'DECIMAL', // (R)
  'DOUBLE PRECISION',
  'DOUBLE', // (R)
  'ENUM',
  'FIXED',
  'FLOAT', // (R)
  'FLOAT4', // (R)
  'FLOAT8', // (R)
  'INT', // (R)
  'INT1', // (R)
  'INT2', // (R)
  'INT3', // (R)
  'INT4', // (R)
  'INT8', // (R)
  'INTEGER', // (R)
  'LONGBLOB', // (R)
  'LONGTEXT', // (R)
  'MEDIUMBLOB', // (R)
  'MEDIUMINT', // (R)
  'MEDIUMTEXT', // (R)
  'MIDDLEINT', // (R)
  'NATIONAL CHAR', // (R)
  'NATIONAL VARCHAR', // (R)
  'NUMERIC', // (R)
  'PRECISION', // (R)
  'REAL', // (R)
  'SMALLINT', // (R)
  'TEXT',
  'TIME',
  'TIMESTAMP', // (R)
  'TINYBLOB', // (R)
  'TINYINT', // (R)
  'TINYTEXT', // (R)
  'VARBINARY', // (R)
  'VARCHAR', // (R)
  'VARCHARACTER', // (R)
  'VARYING', // (R)
  'YEAR',
  // 'SET' // handled as special-case in postProcess
];
