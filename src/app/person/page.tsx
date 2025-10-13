"use client"; // This line marks the file as a Client Component

import { Cell, Column, Row, TableBody, TableHeader, TableView } from "@react-spectrum/s2";
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
                <TableView>
                    <TableHeader>
                        <Column isRowHeader> Name </Column>
                         <Column> Phone Number </Column>
                         <Column> Likes Code </Column>
                    </TableHeader>
                    <TableBody items={items}>
                        {item => (
                            <Row id={item.id}>
                                <Cell>{item.name}</Cell>
                                <Cell>{item.phoneNumber}</Cell>
                                <Cell>{item.likesCode ? "yes" : "no"  }</Cell>
                            </Row>
                        )}  
                    </TableBody>
                </TableView>


            </div>
            
    </div>   ;

  

}