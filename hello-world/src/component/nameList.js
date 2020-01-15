import React from 'react'
import Person from './person'

function NameList() {
    const persons = [
        {
            id:1,
            name: "Iron Man",
            age: 35,
            skill: "React"
        },
        {
            id:2,
            name: "Iron Man",
            age: 30,
            skill: "Angular"
        },
        {
            id:3,
            name: "Hulk",
            age: 38,
            skill: "Vue"
        }
    ]
const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList

