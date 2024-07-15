import { dbconn } from '@/db/db';
import PageDetail from '@/models/pagedetails';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { instagram, linkedIn, pinterest, email } = await req.json();
        const docs = [
            { key: 'instagram', value: instagram, id: "669559ab39c0cb93d1c78124"},
            { key: 'linkedIn', value: linkedIn, id: "669559ab39c0cb93d1c78125" },
            { key: 'pinterest', value: pinterest, id: "669559ab39c0cb93d1c78126" },
            { key: 'email', value: email, id: "669559ab39c0cb93d1c78127" }
        ];

        await dbconn();

        try {
            const updatePromises = docs.map(doc => 
                PageDetail.findByIdAndUpdate(doc.id, { key: doc.key, value: doc.value }, { new: true, upsert: true })
            );

            await Promise.all(updatePromises);

            return NextResponse.json({ message: 'Done' });
        } catch (error) {
            return NextResponse.json({ message: 'Failed' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ message: 'Failed' }, { status: 500 });
    }
}