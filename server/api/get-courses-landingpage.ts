import { defineEventHandler } from "h3";
import { readFileSync } from "fs";
import { resolve } from "path";

export default defineEventHandler((event) => {
  try {
    const filePath = resolve(process.cwd(), "data/courses.json");
    const data = JSON.parse(readFileSync(filePath, "utf-8"));

    return {
      status: 200,
      message: "Success fetching data from server",
      data: data,
    };
  } catch (err) {
    return {
      status: 500,
      message: "Error fetching data from server",
      error: err,
    };
  }
});
