import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './schema/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
type message = {
  message: string;
  statusCode: number;
};
@Injectable()
export class ArtistService {
  constructor(@InjectModel('artists') private artistModel: Model<Artist>) {}

  async createArtist(artistData: CreateArtistDto): Promise<Artist | message> {
    const name = artistData.name;
    const artist = await this.artistModel.findOne({ name });
    if (artist) {
      return {
        message: 'Artist already exists',
        statusCode: 409,
      };
    }
    const newArtist = new this.artistModel(artistData);
    await newArtist.save();
    return newArtist;
  }
  async getAllArtists(): Promise<Artist[]> {
    const artists = await this.artistModel.find();
    return artists;
  }
  async getById(id: string): Promise<Artist | message> {
    const artist = await this.artistModel.findById(id);
    if (!artist) {
      return {
        message: 'artist not found',
        statusCode: 403,
      };
    }
    return artist;
  }
  async updateUser(
    id: string,
    newData: UpdateArtistDto,
  ): Promise<Artist | message> {
    const artist = await this.artistModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!artist) {
      return {
        message: 'Error while updating artist',
        statusCode: 403,
      };
    }
    return artist;
  }
  async deleteUser(id: string): Promise<message> {
    await this.artistModel.findByIdAndDelete(id);
    return {
      message: 'artist deleted successfully',
      statusCode: 200,
    };
  }
}
