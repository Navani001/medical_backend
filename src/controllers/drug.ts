const tables = require("../../models");

export const all_drugs = async (req: any, res: any) => {
  const data = await tables.drugs.findAll({ include: tables.drugs_types });
  
  res.send(data);
};
export const all_rx = async (req: any, res: any) => {
  const data = await tables.rx_groups.findAll();
 
  res.send(data);
};
export const rx_drug = async (req: any, res: any) => {
  const userId = req.params.id;
  const data = await tables.rx_groups.findAll({include:tables.drugs});
 
  res.send(data);
};
