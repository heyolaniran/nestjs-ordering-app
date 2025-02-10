import { AbstractDocument } from "@app/common";
import { Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()

export class User extends AbstractDocument {

}

export const UserSchema = SchemaFactory.createForClass(User)