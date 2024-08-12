import React from 'react';
import './About.css';
import Image3 from './Image3.png'; // Adjust path as needed

function About() {
  return (
    <section className="About" id="about">
      <br/>
      <br/>
      <h2>About Us</h2>
      <p>
        The latest model in computers, the Intel Core i9-13900KS, showcases cutting-edge technology with its advanced 13th-generation architecture, delivering unprecedented performance for both gaming and professional applications. Featuring up to 24 cores and 32 threads, this processor offers a remarkable boost in multi-core performance, coupled with higher clock speeds for superior single-core tasks. Equipped with Intel's new hybrid architecture, it integrates high-performance cores with efficient cores, optimizing power usage and processing capabilities. Additionally, it supports the latest DDR5 memory and PCIe 5.0 technology, ensuring future-proofing and enhanced connectivity. This model represents the pinnacle of high-performance computing, designed to handle the most demanding workloads with ease.
      </p>
      <img src={Image3} alt="Latest Computer Model" className="about-image" />
    </section>
  );
}

export default About;
