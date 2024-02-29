import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import {authOptions} from "../../api/auth/[...nextauth]/route";
import {User} from "../../../app/models/User";

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL);
    try {
        const data = await req.json();
        const session = await getServerSession(authOptions);
        const email = session.user.email;

        if ('name' in data) {
            await User.updateOne({email}, {name: data.name});
        }

        return new Response(JSON.stringify({success: true}), {status: 200});
    } catch (error) {
        console.error('Ошибка при обновлении пользователя:', error);
        return new Response(JSON.stringify({error: 'Internal Server Error'}), {status: 500});
    }
}
