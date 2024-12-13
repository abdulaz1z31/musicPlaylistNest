import { Prop } from '@nestjs/mongoose';

export class CreateAlbumDto {
  @Prop({ required: true })
  name: string;
}
