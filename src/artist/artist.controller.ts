import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';

@Controller('users')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}
  @Post('create')
  async createArtist(@Body() artistData: CreateArtistDto) {
    return await this.artistService.createArtist(artistData);
  }
  @Get()
  async getAllArtists() {
    return await this.artistService.getAllArtists();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.artistService.getById(id);
  }
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() newData: CreateArtistDto) {
    return await this.artistService.updateUser(id, newData);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.artistService.deleteUser(id);
  }
}
