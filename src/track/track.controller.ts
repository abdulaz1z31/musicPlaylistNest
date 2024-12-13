import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';

@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}
  @Post()
  async createTrack(@Body() trackData: CreateTrackDto) {
    return await this.trackService.create(trackData);
  }
  @Get()
  async getAll() {
    return await this.trackService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') trackId: string) {
    return await this.trackService.getById(trackId);
  }
  @Put(':id')
  async update(@Body() newData: CreateTrackDto, @Param('id') trackId: string) {
    return await this.trackService.update(newData, trackId);
  }
  @Delete(':id')
  async delete(@Param('id') trackId: string) {
    return await this.trackService.delete(trackId);
  }
}
