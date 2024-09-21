import { redirect } from "@remix-run/react";
import { toast } from "~/hooks/use-toast";
import client from "~/lib/interceptor";

export async function clientAction() {
  try {
    await client.post('api/logout');
    return redirect('/login');
  } catch (err) {
    toast({
      description: "Something went wrong"
    })
    return null
  }

}