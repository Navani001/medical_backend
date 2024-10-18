const tables = require("../../models");

export const all_drugs = async (req: any, res: any) => {
  const data = await tables.drugs.findAll({ include: tables.drugs_types });
  
  res.send(data);
};
export const all_rx = async (req: any, res: any) => {
  const data = await tables.rx_groups.findAll();
 
  res.send(data);
};
