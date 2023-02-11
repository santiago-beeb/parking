import { getConnection } from "../database/database";

const getParking = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM parqueadero WHERE estado = 1"
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPark = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM parqueadero WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addParking = async (req, res) => {
  try {
    const { placa, fecha, hora, estado } = req.body;
    const parking = { placa, fecha, hora, estado };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO parqueadero SET ?",
      parking
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updatePark = async (req, res) => {
  try {
    const { id } = req.params;
    const { placa, fecha, hora, estado } = req.body;
    const park = { placa, fecha, hora, estado };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE parqueadero SET estado = 2 WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deletePark = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM parqueadero WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPlaca = async (req, res) => {
  try {
    const { placa } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM parqueadero WHERE placa = ? and estado = 1",
      placa
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getParking,
  addParking,
  getPark,
  updatePark,
  deletePark,
  getPlaca,
};
