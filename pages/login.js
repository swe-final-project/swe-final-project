import { useSession, signIn, signOut } from "next-auth/react";

const UserAuth = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>{session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
};

export default UserAuth;
