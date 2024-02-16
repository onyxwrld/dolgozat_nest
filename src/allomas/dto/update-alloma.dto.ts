import { PartialType } from '@nestjs/mapped-types';
import { CreateAllomaDto } from './create-alloma.dto';

export class UpdateAllomaDto extends PartialType(CreateAllomaDto) {}
