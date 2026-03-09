import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
  product: defineTable({
    title: v.string(),
    description: v.string(),
    stock: v.number(),
    count:v.number()
    
  }),
  notes: defineTable({
    text:v.string(),
    isCompleted:v.boolean()
  })
});