import React from "react";
import Navbar from "../components/Navbar";

function About() {
  
  return (
    <>
      <Navbar aboutActivityStatus="active border-bottom border-3 border-info rounded-0" />
      <div id="pageTitleColor">
      <p className="fs-1 fw-bold text-center">About Us!!</p>
      <div className="container my-5">
        <p>
          Welcome to Technology Tips, a website dedicated to providing the
          latest and greatest technology tips, tricks, and advice. Our goal is
          to help individuals and businesses stay ahead of the game by staying
          up-to-date with the latest trends and developments in technology.
        </p>
        <p>
          Whether you're a tech-savvy individual or just someone looking to
          improve your technology skills, we have something for everyone. Our
          team of experts work tirelessly to bring you the latest and greatest
          tips, tricks, and advice to help you get the most out of your
          technology.
        </p>
        <p>We cover a wide range of topics, including but not limited to:</p>
        <ul>
          <li>Smartphone and tablet tips</li>
          <li>Computer and laptop tips</li>
          <li>Internet and online security tips</li>
          <li>Software and app tips</li>
          <li>And much more!</li>
        </ul>
        <p>
          So whether you're looking to improve your technology skills, stay
          up-to-date with the latest trends, or just have some fun, Technology
          Tips is the perfect resource for you. Check back often for the latest
          and greatest tips, tricks, and advice, and let us help you stay ahead
          of the game!
        </p>
      </div>
      <div className="container my-5">
      <p className="fs-1 fw-bold text-center">About Me!!</p>
        <div>
          Om Patel is a multi-talented individual who excels in both technology
          and the arts. As a front-end web developer, Om Patel has a strong
          understanding of HTML, CSS, and JavaScript and creates visually
          appealing and user-friendly websites. Additionally, Om Patel's skills as
          a UI/UX designer ensure that websites not only look good but also have
          a seamless user experience. But Om Patel's talents don't stop there, as
          they also have a passion for playing the piano. This unique
          combination of technical and artistic skills allows Om Patel to bring a
          fresh and innovative approach to their work, making them a valuable
          asset to any team.
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
