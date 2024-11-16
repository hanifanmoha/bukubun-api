import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Author } from 'src/app.entity';

export class UpdateAuthorDTO {
  static generate(req: UpdateAuthorDTO): Author {
    return {
      id: null,
      name: req.name,
      bio: req.bio,
    };
  }

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  bio: string;
}
