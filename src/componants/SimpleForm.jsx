import {useState} from 'react';
// This is commented
// const  SimpleForm=()=>{

//     const [formData, setFormData]=useState({
//         feild:'',
//         feild1:''
//     });

//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         setFormData({ 
//             ...formData,
//             [name]:value
//         });
//         console.log(formData.feild)
//         console.log(formData.feild1)
//     };

//     const handleSubmit=(e)=>{
//      e.preventDefaule();
//      console.log('form data',formData)
//     };
//    return(
//     <form onSubmit={handleSubmit}>

//         <div>
//             <lable>
//             feild:
//             </lable>
//             <input 
//             type="text"
//             name="feild"
//             value={formData.feild}
//             onChange={handleChange}
//             />

//             </div>
//             <div>
//                 <lable>
//                     field2:
//                 </lable>
//                 <input
//                 type="text"
//                 name="field1"
//                 value={formData.feild1}
//                 onChange={handleChange}
                
//                 />
//             </div>
//             <button type="submit"> Submit</button>
//     </form>
//    );

// };
// export default SimpleForm;


function SimpleForm(){
   const [name,setName]=('');
   const [password,setPassword]=('');
    const handleChangeName=(e)=>{ setName(e.target.value)
        
    }
    const handleChangePassword=(e)=>{ setPassword(e.target.value)
        
    }

 return(<>
 <lable>
    Name:
 </lable>
 <input
  />
  <input type="text"
  value={name}
  onChange={handleChangeName}/>

  <input
  type="password"
  value={password}
  onChange={handleChangePassword}
  /> 

 </>)
}