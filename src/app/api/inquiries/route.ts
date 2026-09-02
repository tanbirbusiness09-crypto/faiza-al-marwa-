import { NextRequest, NextResponse } from 'next/server';

// In-memory / mock storage for demo & local development
let inquiriesStore: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const newInquiry = {
      id: `INQ-${Date.now().toString().slice(-6)}`,
      type: body.type || 'general',
      name: body.name || 'Anonymous',
      phone: body.phone || '',
      email: body.email || '',
      details: body.details || {},
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    inquiriesStore.unshift(newInquiry);

    // Keep store size manageable
    if (inquiriesStore.length > 100) {
      inquiriesStore = inquiriesStore.slice(0, 100);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully.',
        data: newInquiry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    total: inquiriesStore.length,
    inquiries: inquiriesStore,
  });
}
