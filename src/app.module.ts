import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FavoritesModule } from './favorites/favorites.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { AlbumsModule } from './albums/albums.module';
import { ArtistModule } from './artist/artist.module';
import { ArtistModule } from './artist/artist.module';
import { ResModule } from './users/res/res.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ResModule, ArtistModule, AlbumsModule, TrackModule, AlbumModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
