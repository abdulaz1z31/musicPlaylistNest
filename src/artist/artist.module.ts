import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { artistSchema } from './schema/artist.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'artists', schema: artistSchema }]),
  ],
  controllers: [ArtistController],
  providers: [ArtistService],
})
export class ArtistModule {}
