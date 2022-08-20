import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>React Hook Boilerplate Code</h1>
            <p>An example app showing(Mock Services) how to list, add, edit and delete user records with React Hooks.</p>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}

export { Home };