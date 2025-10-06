"use client"; // This line marks the file as a Client Component

import { useState, useEffect } from "react";

export default function PersonList() {


    const [ items, setItems ] = useState([]);


    useEffect(() => {
        // Fetch list of people from an API or database
        // For now, we'll just log to the console
        console.log("Fetching list of people...");
        fetch("http://localhost:8080/person")
            .then((response) => response.json())
            .then((data) => {
                console.log("People data:", data);
                setItems(data);
            })
            .catch((error) => {
                console.error("Error fetching people data:", error);
            });     
            
    }, []);


    return  <div>
    
            <div>This page will show a list of people</div>
    
            <div> 
                <h1>Person List</h1>
                <ul>
                
                    {items.map(item => (
                    <li key={item.id}>{item.name} {item.phoneNumber}</li>
                    ))}
                </ul>
            </div>
            
    </div>   ;

  

}