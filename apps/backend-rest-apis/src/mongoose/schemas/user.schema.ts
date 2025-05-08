import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: { createdAt: 'dateCreated', updatedAt: 'dateUpdated' } })
export class User {
  @Prop()
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
