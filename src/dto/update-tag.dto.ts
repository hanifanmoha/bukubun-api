import { IsNotEmpty, IsString } from 'class-validator';
import { Tag } from 'src/app.entity';

export class UpdateTagDTO {
  static generate(req: UpdateTagDTO): Tag {
    return {
      id: null,
      name: req.name,
    };
  }

  @IsNotEmpty()
  @IsString()
  name: string;
}
