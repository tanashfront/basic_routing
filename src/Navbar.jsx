import {Link, NavLink}  from "react-router-dom"
import members from './Members.json';

export const Navbar = () => {
    return (
        <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/team' end>Team</NavLink>
            </li>
            <li>
                <NavLink to='/team/joe' end>
                    Joe
                </NavLink>
            </li>
            <li>
                {members.map(m => (
                    <div key={m.id}>
                        <NavLink to={`/team/${m.id}`}>
                            {m.name}
                        </NavLink>
                    </div>
                ))}
            </li>
        </ul>
    </nav>
    )
}