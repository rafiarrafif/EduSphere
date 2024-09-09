import { defineEventHandler } from "h3";
import { readFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler((event) => {
  try {
    const filePath = resolve(process.cwd(), "data/roadmap.json");
    const data = JSON.parse(readFileSync(filePath, "utf-8"));

    return {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
      message: "Success fetching data from server",
      data: data,
    };
  } catch (error: any) {
    return {
      status: 500,
      message: "Error when fetching data from server",
      error: error.message,
      data: "",
    };
  }
});
