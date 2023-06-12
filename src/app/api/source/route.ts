import { NextRequest, NextResponse } from 'next/server.js';

const names = [
  { id: '1', name: 'John', role: 'user' },
  { id: '2', name: 'Jane', role: 'user' },
  { id: '3', name: 'Jill', role: 'user' },
  { id: '4', name: 'Kevin', role: 'user' },
  { id: '5', name: 'Kate', role: 'user' },
  { id: '6', name: 'Karl', role: 'user' },
  { id: '7', name: 'Smith', role: 'user' },
  { id: '8', name: 'Sandy', role: 'user' },
  { id: '9', name: 'Sally', role: 'user' },
  { id: '10', name: 'Adrian', role: 'admin' }
];

export async function GET(request: Request) {
  return NextResponse.json(names);
}
