import { where } from "sequelize";

const tables = require("../../models");
export const add_rxtorx=async(req:any,res:any)=>{
  const rx_id = req.body.rx_id;
  const drug_ids = req.body.drugs;
  console.log(drug_ids,rx_id)
  const arr=drug_ids.map((item:any)=>{
    return {rx_group_id:rx_id,drug_id:item.id} 
  })
  console.log(arr)
  const data=await tables.rx_drugs.bulkCreate(arr)
console.log(data)
 
res.send("succesd")

}

export const all_drugs = async (req: any, res: any) => {
  // const data = await tables.drugs.findAll({ include:[{model:tables.drugs_types,include:[{
  //   model:[tables.comsumption_types,tables.comsumption_day_types]
  // }] }]});
  const data = await tables.drugs.findAll({
    include: [
      {
        model: tables.drugs_types,
      },
    ],
  });

  res.send(data);
};
export const allSpecs = async (req: any, res: any) => {
  const rx_drug_id = req.body.rx_drug_id;
  const data = await tables.drugs_specs.create({
    rx_drug: rx_drug_id,
    no_of_days: req.body.no_of_days,
    quantity: req.body.quantity,
    time_to_take: req.body.time_to_take,
    drug_time: req.body.drug_time,
    comsumption_type_id: req.body.comsumption_type_id,
    comsumption_day_type_id: req.body.comsumption_day_type_id,
  });
  res.send(data);
};
export const add_rx = async (req: any, res: any) => {
  const doctor_id: number = 1;
  const doctor_name = await tables.doctors.findAll({
    where: {
      id: doctor_id,
    },
  });

  const data = await tables.rx_groups.create({
    name: req.body.name,
    doctor_id: 1,
    created_by: doctor_name.name,
    updated_by: doctor_name.name,
  });
  console.log("rx added");
  res.send(data);
};
export const all_rx = async (req: any, res: any) => {
  console.log("all Rx");
  const data = await tables.rx_groups.findAll({
    include: [
      {
        model: tables.rx_drugs,
        include: [
          tables.drugs,
          {
            model: tables.drugs_specs,
            include: [tables.comsumption_types, tables.comsumption_day_types],
          },
        ],
        // attributes: { exclude: ['created_by',"updated_by"] }
      },
    ],
    attributes: {
      exclude: [
        "created_by",
        "updated_by",
        "createdAt",
        "updatedAt",
        "is_deleted",
        "is_active",
      ],
    },
  });

  res.send(data);
};
export const deletedrx_drug = async (req: any, res: any) => {
  const { rx_id, drug_id } = req.body;
  console.log(rx_id, drug_id);
  try {
    await tables.rx_drugs.destroy({
      where: {
        rx_group_id: rx_id,
        drug_id: drug_id,
      },
    });

    console.log(`Deleted rx_group_id: ${rx_id}, drug_id: ${drug_id}`);
    res.send("success");
  } catch (error) {
    console.log(error);
    console.error("Error deleting rx_drug record:", error);
    res.status(500).send("Failed to delete the record");
  }
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
  console.log("added");
  console.log(req.body, rx_id);
  const add_drug_data = await tables.rx_drugs.create({
    rx_group_id: rx_id,
    drug_id: req.body.drug_id,
  });
  // console.log(add_drug_data)
  console.log("add drug ", add_drug_data);
  const data = await tables.drugs_specs.create({
    rx_drug_id: add_drug_data.rx_group_id,
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
  const rx_id = req.params.id;

  const data = tables.rx_groups.update(
    { name: req.body.name },
    { where: { id: rx_id } }
  );
  console.log("renamed");

  res.send(data);
};
export const changetakentime = async (req: any, res: any) => {
  const spec_id = req.body.spec_id;

  const data = tables.drugs_specs.update(
    { drug_time: req.body.drug_time },
    { where: { id: spec_id } }
  );

  res.send(data);
};
export const change_comsumption_type = async (req: any, res: any) => {
  const spec_id = req.body.spec_id;

  const data = tables.drugs_specs.update(
    { drug_time: req.body.comsumption_type_id },
    { where: { id: spec_id } }
  );

  res.send(data);
};
export const change_comsumption_day_type = async (req: any, res: any) => {
  const spec_id = req.body.spec_id;

  const data = tables.drugs_specs.update(
    { drug_time: req.body.comsumption_day_type_id },
    { where: { id: spec_id } }
  );

  res.send(data);
};
