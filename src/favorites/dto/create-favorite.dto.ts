import { Album } from 'src/album/schema/album.schema';
import { Artist } from 'src/artist/schema/artist.schema';
import { Track } from 'src/track/schema/track.schema';

export class CreateFavoriteDto {
  artists: Artist[];
  albums: Album[];
  tracks: Track[];
}
