const studentModel=require("./model")

const createStudent=async(req,res)=>{

    try{
    const data=req.body
        let saveddata = await studentModel.create(data);
        return res.status(201).send({ status: true, msg: "student data enter successfully ", data: saveddata });
    }
    
    catch (err) {
        console.log("this is the error:", err.message)
        return res.status(500).send({ msg: "error", error: err.message })
    }
}
const unitTestResult=async (req,res) =>{
    try{
        const className = req.params.class
        const subName=req.param.unitTest
        let result=await studentModel.find( {$and:[{ class: className}, {isDeleted: false },{unitTest:subName} ]}).select({StudentName:1,unitTest:1})
        return res.status(200).send({ status: true, data: result });

    }
    catch (err) {
        console.log("this is the error:", err.message)
        return res.status(500).send({ msg: "error", error: err.message })
    }
}

module.exports={createStudent, unitTestResult}
