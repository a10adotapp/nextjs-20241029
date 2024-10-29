"use server";

import { createId } from "@paralleldrive/cuid2";
import { cache } from "react";

export type User = {
  id: string;
};

export async function getUser(): Promise<User> {
  console.log("getUser");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: createId(),
      });
    }, 2 * 1000);
  });
}

export const getUserCached = cache(getUser);
