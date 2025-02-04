import {
  MedusaContainer
} from "@medusajs/types";

export default async function myCustomJob(container: MedusaContainer) {
  console.log("Greetings!")
}

export const config = {
  name: "daily-product-report",
  schedule: "*/5 * * * *", // Every day at midnight
};