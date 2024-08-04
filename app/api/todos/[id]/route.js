import Todo from "@/src/model/Todo";
import connectDB from "@/src/utils/dbConnect";
import { NextResponse } from "next/server";

// Get Single Todo
export async function GET(request, { params }) {
  connectDB();
  const { id } = params;
  const todo = await Todo.findById(id);
  return new NextResponse(JSON.stringify(todo));
}

// Delete Todo
export async function DELETE(request, { params }) {
  connectDB();
  const { id } = params;
  const todo = await Todo.findByIdAndDelete(id);
  return new NextResponse(JSON.stringify(todo));
}

// Update Todo
export async function PUT(request, { params }) {
  connectDB();
  const { id } = params;
  const data = await request.json();
  const todo = await Todo.findByIdAndUpdate(id, data, { new: true });
  return new NextResponse(JSON.stringify("Todo Deleted"));
}
