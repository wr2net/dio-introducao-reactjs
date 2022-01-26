import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Nome 1',
        skills: ['PHP','NodeJs','Laravel','React']

    },
    {
        id: 2,
        name: 'Nome 2',
        skills: ['Laravel','NodeJs','VueJs','React']
    },
    {
        id: 3,
        name: 'Nome 3',
        skills: ['Angular','VueJs','React']
    },
    {
        id: 4,
        name: 'Nome 4',
        skills: ['NodeJs','React']
    }
];

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        );
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: `30px`}}  key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        );
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D.</p>
            <div>
                <ul>
                    {listCustomer.map((renderCustomers))}
                </ul>
            </div>
        </div>
    );
};
export default App;