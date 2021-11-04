const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
    Name: 'HaJ'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to server!");
    conn.write('Name: HJA');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {connect};