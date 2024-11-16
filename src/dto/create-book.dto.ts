import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsUUID,
  IsNumber,
} from 'class-validator';
import { Book } from 'src/app.entity';

export class CreateBookDTO {
  static generate(req: CreateBookDTO): Book {
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

  getBook(): Book {
    return {
      id: null,
      title: this.title,
      published_year: this.published_year,
      author_id: this.author_id,
      tag_ids: this.tag_ids,
    };
  }
}
