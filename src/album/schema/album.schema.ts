import { SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

export class Album {
  @IsNotEmpty()
  name: string;
}
export const albumSchema = SchemaFactory.createForClass(Album);
