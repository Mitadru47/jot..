import React from "react";

const date = new Date();
const CurrentYear = date.getFullYear();

function Footer(){
    return (
        <footer>
            Created with ❤️ by <strong>Mitadru Gangopadhyay</strong>.<br />
            <em>Aspiring Full Stack Developer.</em>
            <br /><br />
            <span id="copyright">Copyright &copy; {CurrentYear}</span> 
        </footer>
    );
}

export default Footer;