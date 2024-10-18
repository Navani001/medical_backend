import { where } from "sequelize";

const tables = require("../../models");

export const all_drugs = async (req: any, res: any) => {
  const data = await tables.drugs.findAll({ include: tables.drugs_types });

  res.send(data);
};
export const add_rx = async (req: any, res: any) => {
  const doctor_id: number = 1;
  const doctor_name = await tables.doctors.findOne({
    where: { id: doctor_id },
  });
  console.log(doctor_name.name);
  const data = await tables.rx_groups.create({
    name: req.body.name,
    doctor_id: 1,
    created_by: doctor_name.name,
    updated_by: doctor_name.name,
  });
  res.send(data);
};
export const all_rx = async (req: any, res: any) => {
  const data = await tables.rx_groups.findAll();

  res.send(data);
};
export const rx_drug = async (req: any, res: any) => {
  const userId = req.params.id;
  const data = await tables.rx_groups.findAll({
    include: [
      {
        model: tables.rx_drugs,
        include: [
          {
            model: tables.drugs_specs,
            include: [tables.comsumption_types, tables.comsumption_day_types],
          },
          tables.drugs,
        ],
      },
    ],
  });

  res.send(data);
};
export const add_drug_rx = async (req: any, res: any) => {
  const rx_id = req.params.id;
  const add_drug_data = await tables.rx_groups.create({
    rx_group_id: rx_id,
    drug_id: req.body.drug_id,
  });
  const data = await tables.drugs_specs.create({
    rx_drug_id: add_drug_data.id,
    no_of_days: req.body.no_of_days,
    quantity: req.body.quantity,
    time_to_take: req.body.time_to_take,
    drug_time: req.body.drug_time,
    comsumption_type_id: req.body.comsumption_type_id,
    comsumption_day_type_id: req.body.comsumption_day_type_id,
  });

  res.send(data);
};
export const rename_rx = async (req: any, res: any) => {
  const rx_id=req.params.id
  
const data=tables.rx_groups.update({name:req.body.name},{where:{id:rx_id}})

  res.send(data);
};
