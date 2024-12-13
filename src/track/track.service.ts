import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Track } from './schema/track.schema';
import { CreateTrackDto } from './dto/create-track.dto';
type message = {
  message: string;
  statusCode: number;
};
@Injectable()
export class TrackService {
  constructor(@InjectModel('tracks') private trackModel: Model<Track>) {}
  async create(trackData: CreateTrackDto): Promise<Track | message> {
    const newTrack = new this.trackModel(trackData);
    await newTrack.save();
    if (newTrack) {
      return {
        message: 'Error while creating track',
        statusCode: 500,
      };
    }
    return newTrack;
  }
  async getAll() {}
  async getById() {}
  async update() {}
  async delete() {}
}
