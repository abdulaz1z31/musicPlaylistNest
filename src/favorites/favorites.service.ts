import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Favorite } from './schema/favorite.schema';
import { Model } from 'mongoose';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel('favorites') private favoriteModel: Model<Favorite>,
  ) {}
  async create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    const favorite = new this.favoriteModel(createFavoriteDto);
    await favorite.save();
    return favorite;
  }

  async findAll(): Promise<Favorite[]> {
    return await this.favoriteModel.find();
  }

  async findOne(id: number) {
    return await this.favoriteModel.findById(id);
  }

  async update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return await this.favoriteModel.findByIdAndUpdate(id, updateFavoriteDto, {
      new: true,
    });
  }

  async remove(id: number) {
    return await this.favoriteModel.findByIdAndDelete(id);
  }
}
