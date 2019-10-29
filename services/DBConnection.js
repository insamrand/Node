module.exports = class DBConnection {
  connect() {
    console.log("DB Connected..");
  }

  disconnect() {
    console.log("DB Disconnected..");
  }
};
