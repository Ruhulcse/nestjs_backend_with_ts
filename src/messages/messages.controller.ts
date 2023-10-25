import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messaage.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    ListMessages(){

    }

    @Post()
    createMessage(@Body() body:CreateMessageDto){
      console.log(body)
    }

    @Get('/:id')
    getMessage(@Param('id') id:string){
     console.log(id)

    }
}
