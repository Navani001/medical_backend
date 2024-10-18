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
  const data = await tables.rx_groups.findAll({include:[{model: tables.rx_drugs, include: [{model:tables.drugs_specs,include:[tables.comsumption_types,tables.comsumption_day_types]},tables.drugs] }]});
 
  res.send(data);
};
