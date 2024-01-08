/*
import mongoose from "mongoose";
import {User} from "../../models/User";

export async function POST(req) {
    try {
        const body = await req.json();
        await mongoose.connect(process.env.MONGO_URL);
        const createdUser = await User.create(body);

        // await mongoose.disconnect();
        return Response.json(createdUser);
    } catch (error) {
        console.error("error", error);
        return Response.json({ error: "error" });
    }
}*/
