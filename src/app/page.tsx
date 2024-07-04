import Image from "next/image";
'use client';
import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Home() {
  const { user, error, isLoading } = useUser();
   if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  //create a if statement to check if the user is logged in
  //if the user is logged in, display the user's name and email
  //if the user is not logged in, display a login button
  if(user){
    return(
      <main>
        <h1>Welcome, {user.name}</h1>
        <p>Your email is {user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </main>
    );  
  } 

   return(
    <main >

       <a href="/api/auth/login">Login</a>
     
    </main>
  );
}
