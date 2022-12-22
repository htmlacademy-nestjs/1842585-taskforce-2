import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SubscriberRdo {
  @ApiProperty({
    description: 'Уникальный идентификатор подписчика',
    example: '1'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'E-mail подписчика',
    example: 'user@email.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Имя подписчика',
    example: 'Андрей'
  })
  @Expose()
  public firstName: string;
}
