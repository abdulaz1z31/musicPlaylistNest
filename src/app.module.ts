import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FavoritesModule } from './favorites/favorites.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { ArtistModule } from './artist/artist.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/lesson67'),
    UsersModule,
    ArtistModule,
    TrackModule,
    AlbumModule,
    FavoritesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
