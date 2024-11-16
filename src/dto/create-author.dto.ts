import { IsNotEmpty, IsString } from 'class-validator';
import { Author } from 'src/app.entity';

export class CreateAuthorDTO {
  static generate(req: CreateAuthorDTO): Author {
    return {
      id: null,
      name: req.name,
      bio: req.bio,
    };
  }

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  bio: string;
}
