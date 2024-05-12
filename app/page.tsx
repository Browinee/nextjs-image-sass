import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  const users = await db.query.users.findMany();
  console.log("suers", users);

  return (
    <>
      <Button>123</Button>
      {users.map((user) => {
        return <div key={user.id}>{user.email}</div>;
      })}
    </>
  );
}
