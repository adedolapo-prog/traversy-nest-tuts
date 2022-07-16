import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `update ${id} name: ${updateItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `item ${id} deleted`;
  }
}
