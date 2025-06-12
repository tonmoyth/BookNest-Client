import React from 'react';

const NavBerButton = ({level,onClick}) => {
    return (
        <button onClick={onClick} href="#_" class="rounded px-5 py-2.5 overflow-hidden group bg-secondary relative hover:bg-gradient-to-r hover:from-white-500 hover:to-white-400 text-primary hover:ring-1 hover:ring-offset-1 hover:ring-white-400 transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative">{level}</span>
</button>
    );
};

export default NavBerButton;



