import Link from 'next/link'
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import  { Container } from 'react-bootstrap';
import Welcome from './Welcome';
export default function Home() {
  return (
    <>
      <Welcome />
    </>
  );
}
