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
  async getAll(): Promise<Track[] | message> {
    const tracks = await this.trackModel.find();
    if (tracks.length == 0) {
      return {
        message: 'Tracks not found',
        statusCode: 200,
      };
    }
    return tracks;
  }
  async getById(id: string): Promise<Track | message> {
    const track = await this.trackModel.findById({ id });
    if (!track) {
      return {
        message: 'Track not found',
        statusCode: 403,
      };
    }
    return track;
  }
  async update(newData: CreateTrackDto, id: string): Promise<Track | message> {
    const track = await this.trackModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
    if (track) {
      return {
        message: 'Error while updating track',
        statusCode: 500,
      };
    }
    return track;
  }
  async delete(id: string): Promise<message> {
    await this.trackModel.findByIdAndDelete(id);
    return { message: 'Deleted successfully', statusCode: 200 };
  }
}
