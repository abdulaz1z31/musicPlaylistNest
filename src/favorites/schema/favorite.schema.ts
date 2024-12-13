import { SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Album } from 'src/album/schema/album.schema';
import { Artist } from 'src/artist/schema/artist.schema';
import { Track } from 'src/track/schema/track.schema';

export type FavoriteDucument = HydratedDocument<Favorite>;

export class Favorite {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}

export const favoriteSchema = SchemaFactory.createForClass(Favorite);
