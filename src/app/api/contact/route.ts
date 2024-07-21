import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const feedback = formData.get('feedback');
  
    console.log('Received message:', { name, email, feedback });
  
    return NextResponse.json({ message: 'Message received' }, { status: 200 });
  }