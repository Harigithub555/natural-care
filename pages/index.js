import Head from 'next/head'
import Header from '../components/Header';
import { getSession, useSession } from 'next-auth/react'




export default function Home() {

  const { data: session } = useSession();

  if (!session) return <Header />;
  
  return (


    <>
      <Head>
        <title>Natural-Care</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nhc.png" />
      </Head>
      <main>
      <Header />
      </main>
    </>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);
    
    return {
      props: {
        session,
      }
    };
}




