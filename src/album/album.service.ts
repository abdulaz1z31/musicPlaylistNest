import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Album } from './schema/album.schema';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
type message = {
  message: string;
  statusCode: number;
};
@Injectable()
export class AlbumService {
  constructor(@InjectModel('albums') private albumModel: Model<Album>) {}

  async create(albumData: CreateAlbumDto): Promise<Album | message> {
    const name = albumData.name;
    const album = await this.albumModel.findOne({ name });
    if (album) {
      return {
        message: 'Album already exists',
        statusCode: 409,
      };
    }
    const newAlbum = new this.albumModel(albumData);
    await newAlbum.save();
    return newAlbum;
  }
  async findAll(): Promise<Album[]> {
    const albums = await this.albumModel.find();
    return albums;
  }
  async findOne(id: string): Promise<Album | message> {
    const album = await this.albumModel.findById(id);
    if (!album) {
      return {
        message: 'album not found',
        statusCode: 403,
      };
    }
    return album;
  }
  async update(id: string, newData: UpdateAlbumDto): Promise<Album | message> {
    const album = await this.albumModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (!album) {
      return {
        message: 'Error while updating album',
        statusCode: 403,
      };
    }
    return album;
  }
  async remove(id: string): Promise<message> {
    await this.albumModel.findByIdAndDelete(id);
    return {
      message: 'album deleted successfully',
      statusCode: 200,
    };
  }
}
