import React from 'react';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-navbar-container"> 
        <ul>
            <li>
                <a href="Link" className="admin-nav-item active">Meus Produtos</a>
            </li>
            <li>
                <a href="Link" className="admin-nav-item">Minhas Categoris</a>
            </li>
            <li>
                <a href="Link" className="admin-nav-item">Meus Usuários</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;