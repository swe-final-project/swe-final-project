import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/login.module.css";
import Image from "next/image";

export default function login() {
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000/home" });
  }
  const { data: session } = useSession();
  return (
    <div>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">
            Login with an existing account
          </h1>
          <p className="w-3/4 mx-auto text-gray-400">
            To access this site you must sign in first
          </p>
        </div>
      </section>
      <p>You are not signed in</p>
      <button
        type="button"
        className={styles.button}
        onClick={() => handleGoogleSignIn()}>
        Sign In With Google
        <Image src={"/assets/google.svg"} width="20" height={20}></Image>
      </button>
    </div>
  );
}
