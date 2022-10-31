import { SignUpRequest, SignUpResponse } from "../api";
import { db } from "../datastore";
import { ExpressHandler } from "../types";

export const signUpHandler: ExpressHandler<SignUpRequest, SignUpResponse> = async (req, res) => {
    // Check validation
    const { email, firstName, lastName, userName, password } = req.body;

    if (!email || !firstName || !lastName || !userName || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    };

    const exiestingUser = await db.getUserByEmail(email);
};
