import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { favoriteSchema } from './schema/favorite.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'favorites', schema: favoriteSchema }]),
  ],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
