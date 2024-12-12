import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type userDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  version: string;
  @Prop()
  createdAt?: Date;
  @Prop()
  updatedAt?: Date;
}

export const userSchema = SchemaFactory.createForClass(User);