import {
  IsString,
  IsArray,
  IsUUID,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { Book } from 'src/app.entity';

export class UpdateBookDTO {
  static generate(req: UpdateBookDTO): Book {
    return {
      id: null,
      title: req.title,
      published_year: req.published_year,
      author_id: req.author_id,
      tag_ids: req.tag_ids,
    };
  }

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  published_year: number;

  @IsNotEmpty()
  @IsUUID()
  author_id: string;

  @IsArray()
  @IsUUID(undefined, { each: true })
  tag_ids: string[];
}
