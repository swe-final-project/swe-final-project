import React from "react";
import { signIn, signOut } from "next-auth/react";
import styles from "../styles/login.module.css";
import Image from "next/image";

export default function login() {
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000/home" });
  }

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <div>
                  <button
                    type="button"
                    className={styles.button_custom}
                    onClick={() => handleGoogleSignIn()}>
                    Sign In With Google
                    <Image
                      src={"/assets/google.svg"}
                      width="20"
                      height={20}></Image>
                  </button>
                </div>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      About Us
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid text-gray-700">
                  <p>
                    Our website is designed to simplify and enhance the
                    programming learning experience by transforming project
                    requirements into clear, manageable steps to allow you to
                    focus on what matters
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={"/assets/organize_desk.jpg"}
            alt="person_working_happy"
          />
        </div>
      </div>
    </>
  );
}
