import { NextResponse } from "next/server";
import Todo from "@/src/model/Todo";
import connectDB from "@/src/utils/dbConnect";

// Create todo
export async function POST(request) {
  connectDB();
  const todoData = await request.json();
  const todo = await Todo.create(todoData);
  return new NextResponse(JSON.stringify(todo));
}

// Fetching
export async function GET(request) {
  const todo = await Todo.find();
  return new NextResponse(JSON.stringify(todo));
}

// Get Single

// Update

// Delete
