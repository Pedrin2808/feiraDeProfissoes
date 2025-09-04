import { conectionBuscar } from "./conection.js";

export async function buscarPorCPF(cpf) {
  const [rows] = await conectionBuscar.execute(
    'SELECT nome, cpf FROM Formulario WHERE cpf = ?',
    [cpf]
  );
  return rows[0];
}