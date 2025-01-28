import { useEffect, useState } from "react";
import axios from 'axios';

function ApiAndUseEffectHook() {

    const [res, setRes] = useState([])

useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/users')
                            .then((response) => {
                                console.log(response)
                                setRes(response.data)
                            })
                            .catch((error) => console.error("Error fetching data")) } , []);
   
                            return (
                                <div>
                                  <h1>Users List</h1>
                                  <ul>
                                    {res.map((user) => (
                                      <li key={user.id}>{user.name} {user.email}</li>
                                    ))}
                                  </ul>
                                </div>
                              );


        
}

export default ApiAndUseEffectHook;