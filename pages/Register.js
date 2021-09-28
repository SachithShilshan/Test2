const Register = () =>{
    return(
        <>
           <h1 className="jumbotron text-center bg-primary square">Register</h1>
           <p>Login page</p>
        </>
    );
};

export default Register;

// import {useState} from "react";

// const Register = () =>{
//     const [name, setName]=useState("");
//     const [email, setEmail]=useState("");
//     const [password, setPassword]=useState("");

// const handleSubmit =(e) =>{
//     e.preventDefault();
//     console.table({name,email,password});
// };

//     return(
//         <>
//            <h1 className="jumbotron text-center bg-primary square">Register</h1>
//            <div className="container col-md-4 offset-md-4 pb-5">
//                 <from onSubmit={handleSubmit}>
//                      <input 
//                      type="text" 
//                      className="from-control mb-4 p-4" 
//                      value={name} 
//                      onChange={(e)=>setName(e.target.value)}
//                      placeholder="Enter name"
//                      required
//                      />
//                      <input 
//                      type="email" 
//                      className="from-control mb-4 p-4" 
//                      value={email} 
//                      onChange={(e)=>setName(e.target.value)}
//                      placeholder="Enter email"
//                      required
//                      />
//                      <input 
//                      type="password" 
//                      className="from-control mb-4 p-4" 
//                      value={password} 
//                      onChange={(e)=>setName(e.target.value)}
//                      placeholder="Enter password"
//                      required
//                      />

//                      <button type="submit" className="btn btn-block btn-primary">Submit</button>
//                 </from>
//            </div>
//         </>
//     );
// };

// export default Register;