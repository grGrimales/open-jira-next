import moongose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconecting
 */

const mongoConnection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("YA estamos conectados");
    return;
  }

  if (moongose.connections.length > 0) {
    mongoConnection.isConnected = moongose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Usando conexión anterior");
      return;
    }

    await moongose.disconnect();
  }

  await moongose.connect(process.env.MONGO_URL || "");

  mongoConnection.isConnected = 1;

  console.log("Conectadose a mongo");
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (mongoConnection.isConnected === 0) return;

  mongoConnection.isConnected = 0;

  await moongose.disconnect();

  console.log("Desconectado de MongoDB");
};
