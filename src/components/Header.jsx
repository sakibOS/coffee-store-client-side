import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-12">
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/users'>Users</NavLink>
           <NavLink to='/signUp'>SignUP</NavLink>
           <NavLink to='/signIN'>SignIn</NavLink>
           <NavLink to='/addCoffee'>Add Coffee</NavLink>
            
        </div>
    );
};

export default Header;