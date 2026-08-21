import { NextResponse } from 'next/server';

// Temporary server memory store (for persistent database, connect Supabase / Firebase / Vercel KV)
let messages = [];

export async function POST(request) {
  try {
    const data = await request.json();
    messages.push({
      id: Date.now(),
      sender: data.sender || 'Zahin',
      content: data.content,
      timestamp: data.timestamp || new Date().toISOString()
    });
    return NextResponse.json({ success: true, count: messages.length });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ messages });
}