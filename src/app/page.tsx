"use client"
import Header from "@/components/Header";
import Image from "next/image";
import { useForm } from 'react-hook-form';
import Hero from "@/components/Hero";
import styles from "./about.module.css";


export default function Home() {
  return (
    <>
     <Header/>
     <Hero/>
    </>
  );
}
