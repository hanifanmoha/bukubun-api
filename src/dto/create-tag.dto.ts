import { IsNotEmpty, IsString } from 'class-validator';
import { Tag } from 'src/app.entity';

export class CreateTagDTO {
  static generate(req: CreateTagDTO): Tag {
    return {
      id: null,
      name: req.name,
    };
  }

  @IsNotEmpty()
  @IsString()
  name: string;
}
