import React, { useEffect, useState } from 'react'

function View() {

    const [view, setView] = useState([])



    useEffect(() => {

        fetch('http://localhost:4000/student/view', {
            method: "GET",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json"
            }
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setView(result)

            })
            .catch((error) => {
                console.error('Error fetching labs:', error)

            })
    }, [])



    return (

        <>
        

            <table border="1" >
                <tr>
                    <th>name</th>
                    <th>roll</th>
                    <th>department</th>
                    <th>email</th>
                </tr>

                {view.map((item, index) => (
                    <tr>
                        <th>{item.names}</th>
                        <th>{item.roll}</th>
                        <th>{item.department}</th>
                        <th>{item.email}</th>
                    </tr>
                ))}

            </table>

        </>

    )
}

export default View