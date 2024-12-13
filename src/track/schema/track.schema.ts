import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop({ required: true })
  name: string;
}
export const trackSchema = SchemaFactory.createForClass(Track);
