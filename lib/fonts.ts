// app/fonts.ts
import { Caveat } from "next/font/google";

export const caveat = Caveat({
  weight: ["400", "700"], // you can pick just 400 if you want
  subsets: ["latin"],
});