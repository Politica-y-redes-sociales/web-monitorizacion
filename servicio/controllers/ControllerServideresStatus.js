
const ServidoresStatus={};
var servidores=require('../models/servidores.json');
var fs = require('fs');


ServidoresStatus.StatusServidores= async (req,res)=>{
    return await res.status(200).json(servidores);
}

ServidoresStatus.ActualizarServidor=  async(req,res)=>{
    const {status,query,totalQuery,fechainicio,fechatermino,error} = req.body;
    const parametro=req.params;
    let cambio=false;

    servidores.forEach((s)=>{
        if(s.servidor===parseInt(parametro.servidor)){
            s.status=(status==null) ? s.status: status;
            s.fechainicio = (fechainicio==null) ? s.fechainicio : fechainicio;
            s.fechatermino = (fechatermino==null) ? s.fechatermino : fechatermino;
            s.query = (query==null) ? s.query : query;
            s.totalQuery = (totalQuery==null) ? s.totalQuery : totalQuery;
            s.error = (error == null) ? s.error : error;
            cambio=true;
        }
    });
    fs.writeFileSync('servicio/models/servidores.json',JSON.stringify(servidores,'\n',' '));
    if(cambio){
        return  res.status(200).json(servidores);
    }
    else{
        return  res.status(404).json({error:"error con encontrar servidor"});
    }
}


module.exports=ServidoresStatus;

