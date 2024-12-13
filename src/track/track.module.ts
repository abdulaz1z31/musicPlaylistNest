import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { trackSchema } from './schema/track.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'tracks', schema: trackSchema}])]
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
