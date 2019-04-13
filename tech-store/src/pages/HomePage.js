import React from 'react';
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Hero title="Awesome Gadgets">
      <Link to="/products">Our Products</Link>
    </Hero>
  )
}
