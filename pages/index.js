import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  async function handleGoogleSignIn() {
    signIn("google", {
      callbackUrl: "https://swe-final-project-c4480.web.app/home",
    });
  }
  const { data: session } = useSession();
  return (
    <div>
      <p>You are not signed in</p>
      <button type="button" onClick={() => handleGoogleSignIn()}>
        Sign In With Google
      </button>
    </div>
  );
}
