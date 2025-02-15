import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        dignissimos!
      </p>
      <nav className="nav">
        <NavLink to='company'>Company </NavLink>
        <NavLink to='team'>Team </NavLink>
        <NavLink to='aim'>Aim </NavLink>
      </nav>
      <section className="outlet">
      <Outlet/></section> 
    </div>
  );
};

export default About;
