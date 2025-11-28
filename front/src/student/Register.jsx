import React, { useState } from "react"




function Register() {

    const [names, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");

  function handlesubmitt() {

        const params = {
            names: names,
            roll: roll,
            department: department,
            email: email
        }


        fetch("http://localhost:4000/student/reg", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                alert("Labour registered successfully!");
                setName("");
                setRoll("");
                setDepartment("");
                setEmail("");

            });
    };




return (
    <>
        <div>

            <label>Name</label>
            <input type="text"  value={names} onChange={(e)=>setName(e.target.value)} />
            <label>roll number</label>
            <input type="number"  value={roll} onChange={(e)=>setRoll(e.target.value)} />
            <label>department</label>
            <input type="text"  value={department} onChange={(e)=>setDepartment(e.target.value)}  />
            <label>email</label>
            <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit" onClick={handlesubmitt}>save</button>

        </div>

    </>
)

}
export default Register
