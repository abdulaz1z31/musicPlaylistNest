import { Body, Controller, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}
  @Post()
  async createTrack(@Body() trackData: CreateTrackDto) {
    return await this.trackService.create(trackData);
  }
}
