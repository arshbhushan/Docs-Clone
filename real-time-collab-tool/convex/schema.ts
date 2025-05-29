import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { title } from "process";

export default defineSchema({
    documents: defineTable({
        title: v.string(),
    }),
  });
