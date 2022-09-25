const mongoose = require("mongoose");
//const ObjectId = mongoose.Schema.Types.ObjectId;

const studentSchema = new mongoose.Schema(
    {
        StudentName: {
            type: String,
            required: true,
            trim: true
        },
        classRoom: {
            type: Number,
            lowercase: true,
            
        },
        unitTest:{
            sub1: {
                type: Number,
                required: true,
                
    
            },
            sub2: {
                type: Number,
                required: true,
                
    
            }, 
            sub3: {
                type: Number,
                required: true,
              
            },
             sub4: {
                type: Number,
                required: true,
               
    
            },
            sub5: {
                type: Number,
                required: true,
               
    
            },
        },
        
        isDeleted: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
);

module.exports = mongoose.model("student", studentSchema); //Interns