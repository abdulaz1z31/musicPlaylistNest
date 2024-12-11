import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type artistDocument = HydratedDocument<Artist>;

@Schema()
export class Artist {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  grammy: boolean;
}

export const artistSchema = SchemaFactory.createForClass(Artist);
